import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const SeDieSpecialGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <SeDieGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default SeDieSpecialGuide;
