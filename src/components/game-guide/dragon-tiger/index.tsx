import React from "react";
import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const DragonTigerGuide = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return <DragonTigerGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
    }
    return <DragonTigerGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
};
export default DragonTigerGuide;
