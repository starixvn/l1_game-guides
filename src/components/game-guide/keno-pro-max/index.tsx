import React from "react";
import KenoProMaxGuideEN from "./en";
import KenoProMaxGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";
import { GameGuideBase } from "../type";

const KenoProMaxGuide = (props: GameGuideBase) => {
    const { gameName, locale } = props;
    if (locale === locales.en) {
        return <KenoProMaxGuideEN gameConfigs={GameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <KenoProMaxGuideVI gameConfigs={GameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default KenoProMaxGuide;
