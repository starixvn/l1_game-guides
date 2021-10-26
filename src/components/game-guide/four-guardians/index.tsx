import React from "react";
import FourGuardiansGuideEN from "./en";
import FourGuardiansGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const FourGuardiansGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <FourGuardiansGuideEN gameConfigs={gameConfigs as any} gameName={gameNameTranslate} />;
    }
    return <FourGuardiansGuideVI gameConfigs={gameConfigs as any} gameName={gameNameTranslate} />;
};
export default FourGuardiansGuide;
