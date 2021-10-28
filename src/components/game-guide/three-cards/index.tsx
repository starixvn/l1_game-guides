import React from "react";

import GameConfigs from "./game-configs";
import ThreeCardsGuideEN from "./en";
import ThreeCardsGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const ThreeCardsGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    if (locale === locales.en) {
        return <ThreeCardsGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <ThreeCardsGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default ThreeCardsGuide;
