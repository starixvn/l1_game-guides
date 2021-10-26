import React from "react";
import RouletteGuideEN from "./en";
import RouletteGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const RouletteGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <RouletteGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <RouletteGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default RouletteGuide;
