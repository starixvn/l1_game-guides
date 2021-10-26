import React from "react";
import ThreeCardsGuideEN from "./en";
import ThreeCardsGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const ThreeCardsGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;

    if (locale === locales.en) {
        return <ThreeCardsGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <ThreeCardsGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default ThreeCardsGuide;
