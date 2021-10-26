import React from "react";
import KenoPowerGuideEN from "./en";
import KenoPowerGuideVI from "./vi";
import GameConfigs from "./game-configs";
import { locales, GameNameVI, GameNameEN } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const KenoPowerMD5 = [41];

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const maxBetBlueChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blue));
    const maxBetBlueRedChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blueBig));

    return { maxBetRound, maxBetBlueChoice, maxBetBlueRedChoice };
};

const KenoPowerGuide = (props: GameGuideBase) => {
    const { gameName, id, locale, userStakeLevel } = props;
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, GameConfigs);
    if (locale === locales.en) {
        return (
            <KenoPowerGuideEN
                gameConfigs={GameConfigs}
                userStakeLevel={userStakeLevel}
                gameName={GameNameEN[gameName.toLowerCase()]}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <KenoPowerGuideVI
            gameConfigs={GameConfigs}
            userStakeLevel={userStakeLevel}
            gameName={GameNameVI[gameName.toLowerCase()]}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default KenoPowerGuide;
