import React from "react";
import KenoMiniGuideEN from "./en";
import KenoMiniGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales, GameNameEN, GameNameVI } from "../../../../common/constants";
const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;

    if (locale === locales.en) {
        return <KenoMiniGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <KenoMiniGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default KenoMiniGuide;
