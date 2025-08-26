import { useEffect, useState } from "react";

import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameGuideBase } from "../../game-guide/type";
import { getGameConfigProject, isTolgeeSupportLanguage } from "../../index.helper";
import { handleMaxBetChoice } from "../../shared/baccarat";
import BaccaratMiniContent from "./content-tolgee";
import BaccaratMiniGuideTemplate from "./template";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const tolgee = initTolgee(["BaccaratMini"]);

const BaccaratMiniGuide = (props: GameGuideBase) => {
    const {
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isGetGameConfigs,
        project,
        userStakeLevel,
        environment,
        isInPromotionTime,
        fractionalOddsFormat,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("baccarat", project, setConfigs, "game-guide-mini");
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

    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <BaccaratMiniContent
                    locale={locale}
                    gameConfigs={gameConfigs}
                    gameNameTranslate={gameNameTranslate}
                    gameName={gameNameTranslate}
                    dynamic={dynamic}
                    isGetGameConfigs={isGetGameConfigs}
                    project={project}
                    userStakeLevel={userStakeLevel}
                    environment={environment}
                    isInPromotionTime={isInPromotionTime}
                    fractionalOddsFormat={fractionalOddsFormat}
                    tolgee={tolgee}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    return <BaccaratMiniGuideTemplate {...resource} />;
};

export default BaccaratMiniGuide;
