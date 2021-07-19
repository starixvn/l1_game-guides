import React from "react";
import LotteryGuideEN from "./en";
import LotteryGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const LotteryGuide = (props: GameGuideBase) => {
    const { gameName, locale } = props;

    if (locale === locales.en) {
        return <LotteryGuideEN gameConfigs={GameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <LotteryGuideVI gameConfigs={GameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default LotteryGuide;
