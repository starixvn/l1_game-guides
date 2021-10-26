import React from "react";
import KenoMaxGuideEN from "./en";
import KenoMaxGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales, GameNameEN, GameNameVI } from "../../../../common/constants";

const KenoMaxGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;

    if (locale === locales.en) {
        return <KenoMaxGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <KenoMaxGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default KenoMaxGuide;
