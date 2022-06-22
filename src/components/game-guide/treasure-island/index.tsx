import React from "react";

import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import TreasureIslandGuideEN from "./en";
import GameConfigs from "./game-configs";
import TreasureIslandGuideVI from "./vi";

const TreasureIslandGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, userStakeLevel, dynamic, isGetGameConfigs } = props;
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
        return <TreasureIslandGuideEN gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate}/>;
    }
    return <TreasureIslandGuideVI gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
};
export default TreasureIslandGuide;
