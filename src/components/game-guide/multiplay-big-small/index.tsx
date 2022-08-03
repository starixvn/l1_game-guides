import React from "react";

import MultiplayBigSmallGuideEN from "./en";
import MultiplayBigSmallGuideVI from "./vi";
import { GameGuideBase } from "../type";
import GameConfigs from "./game-configs";
import { locales, IObjectKeys } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";

const MultiplayBigSmallGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, isScrollMD5, environment } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            return GameConfigs;
        }

        if (dynamic) {
            return gameConfigs;
        } else {
            gameConfigs.odds = GameConfigs.odds;
            return gameConfigs;
        }
    };
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());

    if (locale === locales.en) {
        return (
            <MultiplayBigSmallGuideEN
                gameConfigs={getGameConfigs()}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                isScrollMD5={isScrollMD5}
                environment={environment}
            />
        );
    }

    return (
        <MultiplayBigSmallGuideVI
            gameConfigs={getGameConfigs()}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
        />
    );
};
export default MultiplayBigSmallGuide;
