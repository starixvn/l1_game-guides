import React, { useEffect, useState } from "react";

import { GameGuideBase } from "../type";
import { GameConfigProps } from "./type";
import TreasureIslandGuideTemplate from "./templates/treasure-island-guide-template";
import { getGameConfigProject } from "../../index.helper";
import initTolgee from "../../../helpers/tolgee-helper";
import { TolgeeProvider } from "@tolgee/react";
import TreasureIslandContent from "./content-tolgee";

const tolgee = initTolgee(["TreasureIsland"]);

const isTolgeeSupportLanguage = (languageTag: string) => {
    return !["th", "id", "vi", "zh_cn", "zh_tw"].includes(languageTag);
};

const TreasureIslandGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("treasure-island", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs as any);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();
    }, []);

    useEffect(() => {
        const languageTag = locale || "vi";
        if (isTolgeeSupportLanguage(languageTag)) {
            tolgee.changeLanguage(languageTag);
        }
    }, [locale]);

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

    // Use Tolgee for supported languages, fallback to static translations for others
    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <TreasureIslandContent
                    locale={locale}
                    gameConfigs={gameConfigs}
                    gameNameTranslate={gameNameTranslate}
                    gameName={gameNameTranslate}
                    dynamic={dynamic}
                    isGetGameConfigs={isGetGameConfigs}
                    project={project}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    return <TreasureIslandGuideTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};

export default TreasureIslandGuide;
