import React from "react";
import SicBoGuideEN from "./en";
import SicBoGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const SicBoGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <SicBoGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <SicBoGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default SicBoGuide;
