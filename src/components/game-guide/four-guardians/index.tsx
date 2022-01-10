import React from "react";

import GameConfigs from "./game-configs";
import FourGuardiansGuideEN from "./en";
import FourGuardiansGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const FourGuardiansGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            return GameConfigs;
        }

        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    if (locale === locales.en) {
        return <FourGuardiansGuideEN gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
    }
    return <FourGuardiansGuideVI gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
};
export default FourGuardiansGuide;
