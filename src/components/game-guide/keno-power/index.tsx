import React from "react";

import GameConfigs from "./game-configs";
import KenoPowerGuideEN from "./en";
import KenoPowerGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export const KenoPowerMD5 = [41];

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetRound = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetBlueChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blue));
    const maxBetBlueRedChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blueBig));

    return { maxBetRound, minBetRound, maxBetBlueChoice, maxBetBlueRedChoice };
};

const KenoPowerGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs } = props;
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
            <KenoPowerGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <KenoPowerGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default KenoPowerGuide;
