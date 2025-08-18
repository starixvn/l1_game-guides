import React, { useEffect, useState } from "react";

import { AVAILABLE_LANGUAGES, TolgeeConfig } from "../../../common/constants";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "../../shared/se-die";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import { InContextTools } from "@tolgee/web/tools";
import SeDieGameGuideContent from "./content-tolgee";
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

const SeDieMultiplayerGuide = (props: GameGuideBase) => {
    const {
        id,
        locale,
        userStakeLevel,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isGetGameConfigs,
        isScrollMD5,
        environment,
        project,
        isInPromotionTime,
        fractionalOddsFormat,
        orientation,
    } = props;

    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        let pathName = "se-die-multiplayer";

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
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameConfigs: configs,
        userStakeLevel,
        gameName: gameNameTranslate,
        gameId: id,
        maxBetFollowChoice,
        isScrollMD5: isScrollMD5,
        environment,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
        locale,
        orientation,
    };

    return (
        <TolgeeProvider tolgee={tolgee}>
            <SeDieGameGuideContent {...resource} tolgee={tolgee} />
        </TolgeeProvider>
    );
};

export default SeDieMultiplayerGuide;
