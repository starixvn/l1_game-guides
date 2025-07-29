import React, { useEffect, useState } from "react";
import { GameConfigProps } from "../big-small/type";
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../../game-guide/type";
import HiLoMiniGuideTemplate from "./templates";
import HiLoMiniContent from "./content-tolgee";
import initTolgee from "../../../helpers/tolgee-helper";
import { TolgeeProvider } from "@tolgee/react";

const tolgee = initTolgee(["HiLoMini"]);

const isTolgeeSupportLanguage = (languageTag: string) => {
    return !["th", "id", "vi", "zh_cn", "zh_tw"].includes(languageTag);
};

const HiLoMiniGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("hi-lo", project, setConfigs, "game-guide-mini");
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

    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <HiLoMiniContent
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
    return <HiLoMiniGuideTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default HiLoMiniGuide;
