import React, { useState, useEffect } from "react";

import WayToGoalGuideEN from "./en";
import WayToGoalGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";

const WayToGoalGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("way-to-goal", project, setConfigs);
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
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    if (locale === locales.en) {
        return <WayToGoalGuideEN gameConfigs={configs} gameName={gameNameTranslate} fractionalOddsFormat={fractionalOddsFormat} />;
    }
    return <WayToGoalGuideVI gameConfigs={configs} gameName={gameNameTranslate} fractionalOddsFormat={fractionalOddsFormat} />;
};
export default WayToGoalGuide;
