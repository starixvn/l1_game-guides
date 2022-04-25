import React from "react";

import GameConfigs from "./game-configs";
import TreasureIslandGuideEN from "./en";
import TreasureIslandGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const TreasureIslandGuide = (props: GameGuideBase) => {
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
        return <TreasureIslandGuideEN gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
    }
    return <TreasureIslandGuideVI gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
};
export default TreasureIslandGuide;
