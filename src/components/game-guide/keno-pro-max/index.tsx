import React from "react";
import KenoProMaxGuideEN from "./en";
import KenoProMaxGuideVI from "./vi";
import gameConfigs from "./game-configs";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";
import { GameGuideBase } from "../type";

const KenoProMaxGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;
    if (locale === locales.en) {
        return <KenoProMaxGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <KenoProMaxGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default KenoProMaxGuide;
