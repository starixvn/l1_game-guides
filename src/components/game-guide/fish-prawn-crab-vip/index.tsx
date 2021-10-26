import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fish));
    const maxBetAnyTriple = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.anyTriple));
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));

    return { maxBetMain, maxBetAnyTriple, maxBetRound };
};

const FishPrawnCrabVIP = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, GameConfigs);
    if (locale === locales.en) {
        return (
            <FishPrawnCrabGuideEN
                gameConfigs={GameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={GameNameEN[gameName.toLowerCase()]}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }

    return (
        <FishPrawnCrabGuideVI
            gameConfigs={GameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={GameNameVI[gameName.toLowerCase()]}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default FishPrawnCrabVIP;
