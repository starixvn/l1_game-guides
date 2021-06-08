import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

export const SedDieName = { XocXoc: 2, VipSeDie: 2 };
const SeDieGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
    }
    return <SeDieGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
};
export default SeDieGuide;
