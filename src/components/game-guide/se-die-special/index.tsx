import React from "react";

import GameConfigs from "./game-configs";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";

const SeDieSpecialGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            return GameConfigs;
        }

        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());
    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }
    return <SeDieGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default SeDieSpecialGuide;
