import React from "react";
import HeroesSlotGuideEN from "./en";
import HeroesSlotGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const HeroesSlotGuide = (props: GameGuideBase) => {
    const { gameName, locale } = props;

    if (locale === locales.en) {
        return <HeroesSlotGuideEN gameConfigs={GameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <HeroesSlotGuideVI gameConfigs={GameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default HeroesSlotGuide;
