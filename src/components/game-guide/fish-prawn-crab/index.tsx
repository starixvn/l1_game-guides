import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const FishPrawnCrab = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;
    if (locale === locales.en) {
        return <FishPrawnCrabGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }

    return <FishPrawnCrabGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default FishPrawnCrab;
