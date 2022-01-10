import React from "react";

import GameConfigs from "./game-configs";
import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps } from "./type";
import { locales } from "../../../common/constants";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetDragon = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.dragon));
    const maxBetTie = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));

    return { maxBetMain, minBetMain, maxBetDragon, maxBetTie };
};

const DragonTigerGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs } = props;
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
        return <DragonTigerGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }
    return <DragonTigerGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default DragonTigerGuide;
