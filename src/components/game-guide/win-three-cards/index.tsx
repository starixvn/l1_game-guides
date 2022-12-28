import React, { useEffect, useState } from "react";

import WinThreeCardsGuideEN from "./en";
import WinThreeCardsGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject, handleMaxBetChoice } from "../index.helper";

const WinThreeCardsGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("three-cards", project, setConfigs);
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
        return <WinThreeCardsGuideEN gameConfigs={configs} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }
    return <WinThreeCardsGuideVI gameConfigs={configs} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default WinThreeCardsGuide;
