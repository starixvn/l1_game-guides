import React from "react";
import RouletteGuideEN from "./en";
import RouletteGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const RouletteGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;

    if (locale === locales.en) {
        return <RouletteGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <RouletteGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default RouletteGuide;
