import React, { useState, useEffect } from "react";

import BaccaratMiniGuideTemplate from "./template";
import { GameGuideBase } from "../../game-guide/type";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "../../shared/baccarat";

const BaccaratMiniGuide = (props: GameGuideBase) => {
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

    return <BaccaratMiniGuideTemplate {...resource} />;
};
export default BaccaratMiniGuide;
