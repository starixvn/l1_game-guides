import React from "react";

import GameConfigs from "./game-configs";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetAnyTriple = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.anyTriple));
    const maxBetFish = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fish));

    return { maxBetMain, minBetMain, maxBetAnyTriple, maxBetFish };
};

const FishPrawnCrabVIP = (props: GameGuideBase) => {
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
            <FishPrawnCrabGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }

    return (
        <FishPrawnCrabGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default FishPrawnCrabVIP;
