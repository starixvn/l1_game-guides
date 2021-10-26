import React from "react";
import KenoMaxGuideEN from "./en";
import KenoMaxGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";

const KenoMaxGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <KenoMaxGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <KenoMaxGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default KenoMaxGuide;
