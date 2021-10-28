import React from "react";

import GameConfigs from "./game-configs";
import KenoProMaxGuideEN from "./en";
import KenoProMaxGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";

const KenoProMaxGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    if (locale === locales.en) {
        return <KenoProMaxGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <KenoProMaxGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default KenoProMaxGuide;
