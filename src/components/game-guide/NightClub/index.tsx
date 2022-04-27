import React from "react";

import GameConfigs from "./game-configs";
import NightClubGuideEN from "./en";
import NightClubGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";

const NightClubGuide = (props: GameGuideBase) => {
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
        return <NightClubGuideEN gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
    }
    return <NightClubGuideVI gameConfigs={getGameConfigs() as any} gameName={gameNameTranslate} />;
};
export default NightClubGuide;
