import React, { useEffect, useState } from "react";

import FruitSlotGuideEN from "./en";
import FruitSlotGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject, handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const FruitSlotGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, isScrollMD5, environment, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("multiplay-big-small", project, setConfigs);
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

    if (locale === locales.en) {
        return (
            <FruitSlotGuideEN
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                isScrollMD5={isScrollMD5}
                environment={environment}
            />
        );
    }

    return (
        <FruitSlotGuideVI
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
        />
    );
};
export default FruitSlotGuide;
