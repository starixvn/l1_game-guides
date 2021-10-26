import React from "react";
import HeroesSlotGuideEN from "./en";
import HeroesSlotGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const HeroesSlotGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;

    if (locale === locales.en) {
        return <HeroesSlotGuideEN gameConfigs={gameConfigs as any} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <HeroesSlotGuideVI gameConfigs={gameConfigs as any} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default HeroesSlotGuide;
