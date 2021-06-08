import React from "react";
import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const BigSmallTurboGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return <BigSmallGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
    }

    return <BigSmallGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
};
export default BigSmallTurboGuide;
