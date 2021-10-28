import React from "react";

import GameConfigs from "./game-configs";
import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const OddEvenTurboGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    if (locale === locales.en) {
        return <OddEvenTurboGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }

    return <OddEvenTurboGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default OddEvenTurboGuide;
