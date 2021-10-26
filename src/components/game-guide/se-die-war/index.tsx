import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const SeDieWarGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel, gameConfigs } = props;

    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <SeDieGuideVI gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default SeDieWarGuide;
