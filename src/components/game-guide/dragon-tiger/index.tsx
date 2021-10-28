import React from "react";

import GameConfigs from "./game-configs";
import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const DragonTigerGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    if (locale === locales.en) {
        return <DragonTigerGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <DragonTigerGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default DragonTigerGuide;
