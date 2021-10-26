import React from "react";
import KenoMatchGuideEN from "./en";
import KenoMatchGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { locales, GameNameVI, GameNameEN } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const minPayoutBlue = 1.06;
export const minPayoutRed = 1.06;
export const minPayoutOver = 1.05;
export const minPayoutUnder = 1.04;
export const KenoMatchMD5 = [37];

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const maxBetBlueChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhBlue));
    const maxBetRedChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhRed));
    const maxBetOverChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhOver));
    const maxBetUnderChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhUnder));
    const maxBetEvenChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhEven));
    const maxBetEvenLiveChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.liveFTEven));

    return { maxBetRound, maxBetBlueChoice, maxBetRedChoice, maxBetOverChoice, maxBetUnderChoice, maxBetEvenChoice, maxBetEvenLiveChoice };
};

const KenoMatchGuide = (props: GameGuideBase) => {
    const { gameName, id, locale, userStakeLevel } = props;
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, GameConfigs);
    if (locale === locales.en) {
        return (
            <KenoMatchGuideEN
                gameConfigs={GameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={GameNameEN[gameName.toLowerCase()]}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <KenoMatchGuideVI
            gameConfigs={GameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={GameNameVI[gameName.toLowerCase()]}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default KenoMatchGuide;
