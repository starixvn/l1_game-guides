import React from "react";
import SicBoGuideEN from "./en";
import SicBoGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const SicBoGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return <SicBoGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <SicBoGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default SicBoGuide;
