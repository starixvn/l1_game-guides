import { useEffect, useMemo, useState } from "react";

import { TolgeeInstance, TolgeeProvider } from "@tolgee/react";
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../type";
import TreasureIslandContent from "./content-tolgee";
import TreasureIslandGuideTemplate from "./templates/treasure-island-guide-template";
import { GameConfigProps } from "./type";
import initTolgee from "../../../helpers/tolgee-helper";

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

    const tolgee = useMemo(() => {
        if (isTolgeeSupportLanguage(locale || "en")) {
            return initTolgee(["TreasureIsland"], locale || "en", "en");
        }
        return null;
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
            <TolgeeProvider tolgee={tolgee as TolgeeInstance}>
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
