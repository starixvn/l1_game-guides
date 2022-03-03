import React from "react";

import GameConfigs from "./game-configs";
import HiLoGuideEN from "./en";
import HiLoGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";


const HiLoGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs } = props;
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
        return (
            <HiLoGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
            />
        );
    }
    return (
        <HiLoGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            gameId={id}
        />
    );
};
export default HiLoGuide;
