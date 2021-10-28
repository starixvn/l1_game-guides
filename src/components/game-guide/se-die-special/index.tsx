import React from "react";

import GameConfigs from "./game-configs";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const SeDieSpecialGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };

    if (locale === locales.en) {
        return <SeDieGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
    }
    return <SeDieGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} />;
};
export default SeDieSpecialGuide;
