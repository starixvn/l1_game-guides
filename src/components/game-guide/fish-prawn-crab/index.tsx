import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";

const FishPrawnCrab = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    if (locale === locales.en) {
        return (
            <FishPrawnCrabGuideEN gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameEN[gameName.toLowerCase()]} />
        );
    }

    return <FishPrawnCrabGuideVI gameConfigs={GameConfigs} userStakeLevel={userStakeLevel} gameName={GameNameVI[gameName.toLowerCase()]} />;
};
export default FishPrawnCrab;
