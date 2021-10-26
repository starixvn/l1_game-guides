import React from "react";
import FourGuardiansGuideEN from "./en";
import FourGuardiansGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const FourGuardiansGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;

    if (locale === locales.en) {
        return <FourGuardiansGuideEN gameConfigs={gameConfigs as any} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <FourGuardiansGuideVI gameConfigs={gameConfigs as any} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default FourGuardiansGuide;
