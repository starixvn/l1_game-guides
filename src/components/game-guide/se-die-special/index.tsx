import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const SeDieSpecialGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
    }
    return <SeDieGuideVI gameConfigs={gameConfigs} gameName={gameNameTranslate} />;
};
export default SeDieSpecialGuide;
