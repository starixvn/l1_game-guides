import React from "react";
import ThreeCardsGuideEN from "./en";
import ThreeCardsGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const ThreeCardsGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;

    if (locale === locales.en) {
        return (
            <ThreeCardsGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameEN[gameName.toLowerCase()]} />
        );
    }
    return <ThreeCardsGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default ThreeCardsGuide;
