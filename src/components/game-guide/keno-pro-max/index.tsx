import React from "react";

import GameConfigs from "./game-configs";
import KenoProMaxGuideEN from "./en";
import KenoProMaxGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import { handleMaxBetChoiceKenoPro } from "../index.helper";

const KenoProMaxGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    const maxBetFollowChoice = handleMaxBetChoiceKenoPro(userStakeLevel, getGameConfigs());

    if (locale === locales.en) {
        return <KenoProMaxGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }
    return <KenoProMaxGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default KenoProMaxGuide;
