import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import appSettings from "../../../common/app-settings";
import { TolgeeConfig } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import ChristmasXContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["ChristmasX", "Common"],
        defaultNs: "ChristmasX",
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

const ChristmasXGuide = (props: GameGuideBase) => {
    const {
        gameConfigs,
        gameSetting,
        project,
        dynamic,
        isGetGameConfigs,
        fractionalOddsFormat,
        userStakeLevel,
        isScrollMD5,
        displayName,
        name,
        scrollToId
    } = props;
    const [configs, setConfigs] = useState<GameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("christmas-x", project, setConfigs);
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

        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    useEffect(() => {
         isGetGameConfigs && getDynamicGameConfig();
    }, [configs]);

    if (!configs) {
        return <></>;
    }
    else {
        return (
            <TolgeeProvider tolgee={tolgee} fallback="">
                <ChristmasXContents
                    {...{
                        gameConfigs: configs,
                        fractionalOddsFormat,
                        locale: tolgee.getLanguage(),
                        userStakeLevel,
                        isScrollMD5,
                        displayName,
                        name: name ?? gameSetting?.Name,
                        scrollToId
                    }}
                />
            </TolgeeProvider>
        );
    }

   
};

export default ChristmasXGuide;
