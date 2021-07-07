import React from "react";
import BaccaratGuideEN from "./en";
import BaccaratGuideVI from "./vi";
import GameConfigs from "./game-configs";
import GameConfigsVIP from "../baccarat-vip/game-configs";
import { locales, GameNameVI, GameNameEN } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps, gameConfigs: GameConfigProps) => {
    const { choices_maxbet, maxbet } = gameConfigs;
    const maxBetMainChoice = numberWithCommas(
        userStakeLevel ? Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : maxbet, maxbet, choices_maxbet.player) : maxbet
    );
    const maxBetSubChoice = numberWithCommas(
        userStakeLevel ? Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : maxbet, maxbet, choices_maxbet.tie) : maxbet
    );
    const maxBetRound = numberWithCommas(
        userStakeLevel ? Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : maxbet, maxbet) : maxbet
    );

    return { maxBetMainChoice, maxBetSubChoice, maxBetRound };
};

export const BaccaratVip = [27];
const BaccaratGuide = (props: GameGuideBase) => {
    const { gameName, id, locale, userStakeLevel } = props;
    const gameConfigs = BaccaratVip.includes(id ? id : BaccaratVip[0]) ? GameConfigsVIP : GameConfigs;
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, gameConfigs);
    if (locale === locales.en) {
        return (
            <BaccaratGuideEN
                gameConfigs={gameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={GameNameVI[gameName.toLowerCase()]}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <BaccaratGuideVI
            gameConfigs={gameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={GameNameEN[gameName.toLowerCase()]}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default BaccaratGuide;
