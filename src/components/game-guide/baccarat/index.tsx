import React from "react";
import BaccaratGuideEN from "./en";
import BaccaratGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet } = gameConfigs;
    const maxBetMainChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.player));
    const maxBetSubChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));

    return { maxBetMainChoice, maxBetSubChoice, maxBetRound };
};

export const BaccaratVip = [27];
const BaccaratGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate } = props;
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, gameConfigs);
    if (locale === locales.en) {
        return (
            <BaccaratGuideEN
                gameConfigs={gameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <BaccaratGuideVI
            gameConfigs={gameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default BaccaratGuide;
