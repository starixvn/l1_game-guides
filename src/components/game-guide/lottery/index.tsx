import React from "react";
import LotteryGuideEN from "./en";
import LotteryGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const LotteryGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <LotteryGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <LotteryGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default LotteryGuide;
