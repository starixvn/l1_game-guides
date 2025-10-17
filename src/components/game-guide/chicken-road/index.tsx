import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import appSettings from "../../../common/app-settings";
import { AVAILABLE_LANGUAGES, TolgeeConfig } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import ChickenRoadContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: AVAILABLE_LANGUAGES,
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Common", "ChickenRoad"],
        defaultNs: "ChickenRoad",
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

const ChickenRoadGuide = (props: GameGuideBase) => {
    const {
        gameConfigs,
        gameSetting,
        project,
        dynamic,
        isGetGameConfigs,
        fractionalOddsFormat,
        userStakeLevel,
        displayName,
        name,
        scrollToId,
    } = props;
    const [configs, setConfigs] = useState<GameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("chicken-road", project, setConfigs);
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
    } else {
        return (
            <TolgeeProvider tolgee={tolgee} fallback="">
                <ChickenRoadContents
                    {...{
                        gameConfigs: configs,
                        fractionalOddsFormat,
                        locale: tolgee.getLanguage(),
                        userStakeLevel,
                        displayName,
                        name: name ?? gameSetting?.Name,
                        scrollToId,
                    }}
                />
            </TolgeeProvider>
        );
    }
};

export default ChickenRoadGuide;
