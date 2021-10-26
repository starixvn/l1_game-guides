import React from "react";
import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys, GameNameEN, GameNameVI } from "../../../common/constants";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const BigSmallGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }

    return <BigSmallGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default BigSmallGuide;
