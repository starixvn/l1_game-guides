import { TolgeeProvider } from "@tolgee/react";
import { useEffect, useState } from "react";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import { getGameConfigProject, isTolgeeSupportLanguage } from "../../index.helper";
import { GameConfigProps } from "../big-small/type";
import HiLoMiniContent from "./content-tolgee";
import HiLoMiniGuideTemplate from "./templates";

const tolgee = initTolgee(["HiLoMini"]);

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
                    tolgee={tolgee}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    return <HiLoMiniGuideTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default HiLoMiniGuide;
