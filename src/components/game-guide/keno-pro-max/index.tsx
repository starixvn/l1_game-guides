import React from "react";
import KenoProMaxGuideEN from "./en";
import KenoProMaxGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";

const KenoProMaxGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;
    if (locale === locales.en) {
        return <KenoProMaxGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <KenoProMaxGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default KenoProMaxGuide;
