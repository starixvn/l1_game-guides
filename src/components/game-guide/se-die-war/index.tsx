import React from "react";

import GameConfigs from "./game-configs";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { UserStakeLevelProps } from "../../../pages";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetPlayer = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.player));
    const maxBetPlayerEven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.playerEven));
    const maxBetPlayerRed3 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.playerRed3));
    const maxBetPlayerRed4 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.playerRed4));
    const maxBetBankerEven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.bankerEven));
    const maxBetBankerRed3 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.bankerRed3));
    const maxBetBankerRed4 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.bankerRed4));

    return {
        maxBetMain,
        minBetMain,
        maxBetPlayer,
        maxBetPlayerEven,
        maxBetPlayerRed3,
        maxBetPlayerRed4,
        maxBetBankerEven,
        maxBetBankerRed3,
        maxBetBankerRed4,
    };
};

const SeDieWarGuide = (props: GameGuideBase) => {
    const { locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            return GameConfigs;
        }

        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());
    if (locale === locales.en) {
        return (
            <SeDieGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <SeDieGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default SeDieWarGuide;
