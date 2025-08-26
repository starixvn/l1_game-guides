import { useEffect, useState } from "react";

import { GameGuideBase } from "../../game-guide/type";
import SeDieMiniContent from "./content-tolgee";
import SeDieMiniGuideTemplate from "./template";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";
import { getGameConfigProject, isTolgeeSupportLanguage } from "../../index.helper";
import { handleMaxBetChoice } from "../../shared/se-die";

const tolgee = initTolgee(["SeDieMini"]);

const SeDieMiniGuide = (props: GameGuideBase) => {
    const {
        gameConfigs,
        gameNameTranslate,
        dynamic,
        userStakeLevel,
        isGetGameConfigs,
        environment,
        project,
        isInPromotionTime,
        fractionalOddsFormat,
        locale,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("se-die-mini", project, setConfigs, "game-guide-mini");
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
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameName: gameNameTranslate ?? "",
        environment,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
        maxBetFollowChoice,
        gameConfigs,
        locale,
    };

    if (locale && isTolgeeSupportLanguage(locale) && tolgee) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <SeDieMiniContent
                    gameConfigs={gameConfigs}
                    gameNameTranslate={gameNameTranslate}
                    gameName={gameNameTranslate}
                    dynamic={dynamic}
                    userStakeLevel={userStakeLevel}
                    isGetGameConfigs={isGetGameConfigs}
                    environment={environment}
                    project={project}
                    isInPromotionTime={isInPromotionTime}
                    fractionalOddsFormat={fractionalOddsFormat}
                    locale={locale}
                    tolgee={tolgee}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    return <SeDieMiniGuideTemplate {...resource} />;
};
export default SeDieMiniGuide;
