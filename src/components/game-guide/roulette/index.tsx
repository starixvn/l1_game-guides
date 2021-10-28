import React from "react";

import GameConfigs from "./game-configs";
import RouletteGuideEN from "./en";
import RouletteGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const RouletteGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    if (locale === locales.en) {
        return <RouletteGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <RouletteGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default RouletteGuide;
