import { useEffect, useState } from "react";
import { getGameConfigProject } from "../../index.helper";

import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import appSettings from "../../../common/app-settings";
import { TolgeeConfig } from "../../../common/constants";
import { handleLanguage } from "../../../helpers/game-helper";
import { GameConfigs, GameGuideBase } from "../../game-guide/type";
import SevenUpDownMiniContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["7Up7DownInstant", "Common"],
        defaultNs: "7Up7DownInstant",
    });

if (!appSettings.useTolgeeStatic) {
    tolgee.addPlugin(
        InContextTools({
            credentials: {
                apiUrl: TolgeeConfig.url,
                apiKey: TolgeeConfig.key,
                projectId: TolgeeConfig.projectId,
            },
        })
    );
}

const SevenUpDownMiniGuide = (props: GameGuideBase) => {
    const { gameConfigs, project, dynamic, isGetGameConfigs, userStakeLevel, locale, displayName } = props;
    const [configs, setConfigs] = useState<GameConfigs>();
    const [isLoading, setIsLoading] = useState(true);
    const getLocalGameConfigs = () => {
        getGameConfigProject("seven-up-down", project, setConfigs, "game-guide-mini");
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();
    }, []);

    useEffect(() => {
        if (locale) {
            handleLanguage(tolgee, locale, setIsLoading);
        }
    }, [locale]);

    useEffect(() => {
        if (configs && isGetGameConfigs) {
            getDynamicGameConfig();
        }
    }, [configs]);

    if (!configs || isLoading) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <SevenUpDownMiniContents {...{ gameConfigs: configs, userStakeLevel, displayName }} />
        </TolgeeProvider>
    );
};

export default SevenUpDownMiniGuide;
