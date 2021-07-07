import React from "react";
import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys, GameNameEN, GameNameVI } from "../../../common/constants";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const OddEvenTurboGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return (
            <OddEvenTurboGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameEN[gameName.toLowerCase()]} />
        );
    }

    return <OddEvenTurboGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default OddEvenTurboGuide;
