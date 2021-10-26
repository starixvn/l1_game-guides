import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import { locales } from "../../../common/constants";
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
    const { locale, userStakeLevel, gameConfigs, gameNameTranslate } = props;
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, gameConfigs);
    if (locale === locales.en) {
        return (
            <FishPrawnCrabGuideEN
                gameConfigs={gameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }

    return (
        <FishPrawnCrabGuideVI
            gameConfigs={gameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default FishPrawnCrabVIP;
