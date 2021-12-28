import React from "react";

import GameConfigs from "./game-configs";
import CasinoHoldGuideEN from "./en";
import CasinoHoldGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetRound = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetAaBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.aaBet));
    const maxBetAnteBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.anteBet));
    const maxBetCallBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.callBet));

    return { maxBetRound, minBetRound, maxBetAaBetChoice, maxBetAnteBetChoice, maxBetCallBetChoice };
};

const CasinoHoldGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());
    if (locale === locales.en) {
        return (
            <CasinoHoldGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <CasinoHoldGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default CasinoHoldGuide;
