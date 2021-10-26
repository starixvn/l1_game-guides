import React from "react";
import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import GameConfigs from "./game-configs";
// import GameConfigsVIP from "../se-die-vip/game-configs";
import GameConfigsMini from "../se-die-mini/game-configs";
import { locales, GameNameEN, GameNameVI } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const SeDieVip = [22];
export const SeDieMini = [9];
export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    if (typeof gameConfigs === "object") {
        const { maxBetPerChoices, maxBet } = gameConfigs;
        const maxBetStake = userStakeLevel?.maxBet ?? maxBet;
        const maxBetMain = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.even));
        const maxBetRed4 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.red4));
        const maxBetRed3 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.red3));
        const maxBetRed2 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices?.red2 ?? 0));
        const maxBetRound = numberWithCommas(Math.min(maxBetStake, maxBet, maxBet));

        return { maxBetMain, maxBetRed4, maxBetRed3, maxBetRed2, maxBetRound };
    }
};

const SeDieGuide = (props: GameGuideBase) => {
    const { gameName, id, locale, userStakeLevel, gameConfigs } = props;
    const getGameConfigs = () => {
        switch (id) {
            case 7:
                return GameConfigsMini;
            case 22:
                return gameConfigs;

            default:
                return gameConfigs;
        }
    };
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());

    if (locale === locales.en) {
        return (
            <SeDieGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={GameNameEN[gameName.toLowerCase()]}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <SeDieGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={GameNameVI[gameName.toLowerCase()]}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};

export default SeDieGuide;
