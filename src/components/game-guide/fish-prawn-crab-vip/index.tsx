import React from "react";
import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase, GameConfigsProps } from "../type";
import { locales } from "../../../common/constants";
import { useTranslation } from "next-i18next";
import { UserStakeLevel } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevel, gameConfigs: GameConfigsProps) => {
    const { choices_maxbet, maxbet } = gameConfigs;
    const maxBetMain = numberWithCommas(
        userStakeLevel ? Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : 0, maxbet, choices_maxbet.fish) : maxbet
    );
    const maxBetAnyTriple = numberWithCommas(
        userStakeLevel ? Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : 0, maxbet, choices_maxbet.anyTriple) : maxbet
    );
    const maxBetRound = numberWithCommas(userStakeLevel ? Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : 0, maxbet) : maxbet);

    return { maxBetMain, maxBetAnyTriple, maxBetRound };
};

const FishPrawnCrabVIP = (props: GameGuideBase) => {
    const { gameName, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, GameConfigs);
    if (locale === locales.en) {
        return (
            <FishPrawnCrabGuideEN
                gameConfigs={GameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={t(gameName.toLowerCase())}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }

    return (
        <FishPrawnCrabGuideVI
            gameConfigs={GameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={t(gameName.toLowerCase())}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default FishPrawnCrabVIP;
