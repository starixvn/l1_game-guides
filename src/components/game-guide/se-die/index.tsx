import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { GameGuideBase, GameConfigsProps } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { useTranslation } from "next-i18next";
import { UserStakeLevel } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";

export const SedDieNameMapping: IObjectKeys = { "2": "XocXoc", "22": "VipSeDie" };
export const SedDieName: IObjectKeys = { XocXoc: "XocXoc", VipSeDie: "VipSeDie" };

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevel, gameConfigs: GameConfigsProps) => {
    const { choices_maxbet, maxbet } = gameConfigs;
    const maxBetStake = userStakeLevel?.maxBet ? userStakeLevel?.maxBet : 0;
    const maxBetMain = numberWithCommas(Math.min(maxBetStake, maxbet, choices_maxbet.even));
    const maxBetRed4 = numberWithCommas(Math.min(maxBetStake, maxbet, choices_maxbet.red4));
    const maxBetRed3 = numberWithCommas(Math.min(maxBetStake, maxbet, choices_maxbet.red3));
    const maxBetRed2 = numberWithCommas(Math.min(maxBetStake, maxbet, choices_maxbet.red2));
    const maxBetRound = numberWithCommas(Math.min(maxBetStake, maxbet, maxbet));

    return { maxBetMain, maxBetRed4, maxBetRed3, maxBetRed2, maxBetRound };
};
const SeDieGuide = (props: GameGuideBase) => {
    const { gameName, id, locale, userStakeLevel } = props;
    const { t } = useTranslation("common");
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, GameConfigs);

    if (locale === locales.en) {
        return (
            <SeDieGuideEN
                gameConfigs={GameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={t(gameName.toLowerCase())}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <SeDieGuideVI
            gameConfigs={GameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={t(gameName.toLowerCase())}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default SeDieGuide;
