import React from "react";

import GameConfigs from "./game-configs";
import GameConfigsVIP from "../baccarat-vip/game-configs";
import BaccaratGuideEN from "./en";
import BaccaratGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetPlayer = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.player));
    const maxBetSubChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));

    return { maxBetPlayer, maxBetSubChoice, maxBetMain, minBetMain };
};

export const BaccaratVip = [27];
const BaccaratGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, isScrollMD5, environment } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            if (BaccaratVip.includes(id ? id : BaccaratVip[0])) {
                return GameConfigsVIP;
            }
            return GameConfigs;
        }
        if (!dynamic) {
            if (BaccaratVip.includes(id ? id : BaccaratVip[0])) {
                gameConfigs.odds = GameConfigsVIP.odds;
            }
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };

    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());
    if (locale === locales.en) {
        return (
            <BaccaratGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
                isScrollMD5={isScrollMD5}
                environment={environment}
            />
        );
    }
    return (
        <BaccaratGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
        />
    );
};
export default BaccaratGuide;
