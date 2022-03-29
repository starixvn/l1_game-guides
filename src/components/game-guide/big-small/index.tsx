import React from "react";

import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import { GameGuideBase } from "../type";
import GameConfigs from "./game-configs";
import GameConfigsTurbo from "../big-small-turbo/game-configs";
import { locales, IObjectKeys } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const BigSmallGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, gameName, userStakeLevel, isGetGameConfigs, isScrollMD5, environment } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            if (gameName === BigSmallName.TXTurbo) {
                return GameConfigsTurbo;
            }
            return GameConfigs;
        }

        if (dynamic) {
            return gameConfigs;
        } else {
            if (gameName === BigSmallName.TXTurbo) {
                gameConfigs.odds = GameConfigsTurbo.odds;
            } else {
                gameConfigs.odds = GameConfigs.odds;
            }
            return gameConfigs;
        }
    };
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());

    if (locale === locales.en) {
        return (
            <BigSmallGuideEN
                gameConfigs={getGameConfigs()}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                isScrollMD5={isScrollMD5}
                environment={environment}
            />
        );
    }

    return (
        <BigSmallGuideVI
            gameConfigs={getGameConfigs()}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
        />
    );
};
export default BigSmallGuide;
