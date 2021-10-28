import React from "react";

import GameConfigs from "./game-configs";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const FishPrawnCrab = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    if (locale === locales.en) {
        return <FishPrawnCrabGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }

    return <FishPrawnCrabGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default FishPrawnCrab;
