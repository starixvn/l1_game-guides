import React from "react";

import GameConfigs from "./game-configs";
import SicBoGuideEN from "./en";
import SicBoGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const SicBoGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };

    if (locale === locales.en) {
        return <SicBoGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <SicBoGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default SicBoGuide;
