import { useEffect, useState } from "react";

import { GameGuideBase } from "../../game-guide/type";
import BigSmallMiniContent from "./content-tolgee";
import BigSmallGuideTemplate from "./template";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";
import { handleMaxBetChoice } from "../../game-guide/index.helper";
import { getGameConfigProject, isTolgeeSupportLanguage } from "../../index.helper";

const tolgee = initTolgee(["BigSmallMini"]);

const BigSmallGuide = (props: GameGuideBase) => {
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
        getGameConfigProject("big-small", project, setConfigs, "game-guide-mini");
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

    const resource = {
        gameName: gameNameTranslate ?? "",
        environment,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
        maxBetFollowChoice,
        gameConfigs,
        locale,
    };

    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <BigSmallMiniContent
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
    return <BigSmallGuideTemplate {...resource} />;
};
export default BigSmallGuide;
