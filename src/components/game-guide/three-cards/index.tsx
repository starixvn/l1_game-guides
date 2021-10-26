import React from "react";
import ThreeCardsGuideEN from "./en";
import ThreeCardsGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const ThreeCardsGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <ThreeCardsGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <ThreeCardsGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default ThreeCardsGuide;
