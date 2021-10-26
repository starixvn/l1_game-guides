import React from "react";
import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const OddEvenTurboGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;
    if (locale === locales.en) {
        return <OddEvenTurboGuideEN gameConfigs={GameConfigs} gameName={gameNameTranslate} />;
    }

    return <OddEvenTurboGuideVI gameConfigs={GameConfigs} gameName={gameNameTranslate} />;
};
export default OddEvenTurboGuide;
