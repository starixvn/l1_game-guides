import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const SeDieWarGuide = (props: GameGuideBase) => {
    const { locale, userStakeLevel, gameConfigs, gameNameTranslate } = props;

    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameNameTranslate} />;
    }
    return <SeDieGuideVI gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} gameName={gameNameTranslate} />;
};
export default SeDieWarGuide;
