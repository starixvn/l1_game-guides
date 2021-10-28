import React from "react";

import GameConfigs from "./game-configs";
import LotteryGuideEN from "./en";
import LotteryGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const LotteryGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };

    if (locale === locales.en) {
        return <LotteryGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <LotteryGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default LotteryGuide;
