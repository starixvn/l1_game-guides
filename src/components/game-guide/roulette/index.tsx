import React from "react";
import RouletteGuideEN from "./en";
import RouletteGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const RouletteGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return <RouletteGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <RouletteGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default RouletteGuide;
