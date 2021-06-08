import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const FishPrawnCrab = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return <FishPrawnCrabGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
    }

    return <FishPrawnCrabGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={gameName} />;
};
export default FishPrawnCrab;
