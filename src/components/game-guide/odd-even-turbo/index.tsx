import React from "react";

import GameConfigs from "./game-configs";
import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };

const OddEvenTurboGuide = (props: GameGuideBase) => {
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
        return <OddEvenTurboGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }

    return <OddEvenTurboGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default OddEvenTurboGuide;
