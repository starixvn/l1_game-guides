import React from "react";

import GameConfigs from "./game-configs";
import HeroesSlotGuideEN from "./en";
import HeroesSlotGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const HeroesSlotGuide = (props: GameGuideBase) => {
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
        return <HeroesSlotGuideEN gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
    }
    return <HeroesSlotGuideVI gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
};
export default HeroesSlotGuide;
