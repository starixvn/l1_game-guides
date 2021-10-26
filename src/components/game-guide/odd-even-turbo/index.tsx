import React from "react";
import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys, GameNameEN, GameNameVI } from "../../../common/constants";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const OddEvenTurboGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;
    if (locale === locales.en) {
        return <OddEvenTurboGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }

    return <OddEvenTurboGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default OddEvenTurboGuide;
