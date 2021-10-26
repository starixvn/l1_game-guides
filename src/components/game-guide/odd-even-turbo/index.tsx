import React from "react";
import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const OddEvenTurboGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;
    if (locale === locales.en) {
        return <OddEvenTurboGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }

    return <OddEvenTurboGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default OddEvenTurboGuide;
