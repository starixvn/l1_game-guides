import React from "react";

import GameConfigs from "./game-configs";
import WayToGoalGuideEN from "./en";
import WayToGoalGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const WayToGoalGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            return GameConfigs;
        }
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };

    if (locale === locales.en) {
        return <WayToGoalGuideEN gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
    }
    return <WayToGoalGuideVI gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
};
export default WayToGoalGuide;
