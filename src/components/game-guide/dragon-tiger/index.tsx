import React from "react";
import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const DragonTigerGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;
    if (locale === locales.en) {
        return <DragonTigerGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <DragonTigerGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default DragonTigerGuide;
