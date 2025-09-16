import React, { useEffect, useState } from "react";

import { AVAILABLE_LANGUAGES, TolgeeConfig } from "../../../common/constants";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import { InContextTools } from "@tolgee/web/tools";
import BaccaratMultiplayerGameGuideContent from "./content-tolgee";
import appSettings from "../../../common/app-settings";
import { TogleeNamespace } from "./namespace-tolgee";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: AVAILABLE_LANGUAGES,
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: [TogleeNamespace.Common, TogleeNamespace.SpecificGame],
        defaultNs: TogleeNamespace.SpecificGame,
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

const BaccaratMultiplayerGuide = (props: GameGuideBase) => {
    const { gameConfigs, project, dynamic, isGetGameConfigs, fractionalOddsFormat, userStakeLevel, id } = props;

    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        let pathName = "baccarat-multiplayer";
        getGameConfigProject(pathName, project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            gameConfigs.odds = gameConfigs.originalOdds || gameConfigs.odds;
            setConfigs(gameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();

        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replaceAll("/", ""));
        }
    }, []);

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee}>
            <BaccaratMultiplayerGameGuideContent {...{ gameConfigs: configs, fractionalOddsFormat, locale: tolgee.getLanguage(), userStakeLevel, id }} />
        </TolgeeProvider>
    );
};

export default BaccaratMultiplayerGuide;
