import React from "react";
import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const DragonTigerGuide = (props: GameGuideBase) => {
    const { gameName, locale } = props;
    if (locale === locales.en) {
        return (
            <DragonTigerGuideEN gameConfigs={GameConfigs}  gameName={GameNameEN[gameName.toLowerCase()]} />
        );
    }
    return <DragonTigerGuideVI gameConfigs={GameConfigs}  gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default DragonTigerGuide;
