import React from "react";
import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const DragonTigerGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;
    if (locale === locales.en) {
        return <DragonTigerGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <DragonTigerGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default DragonTigerGuide;
