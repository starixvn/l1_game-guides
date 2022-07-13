import React from "react";

import GameConfigs from "./game-configs";
import GameConfigsVIP from "../baccarat-vip/game-configs";
import GameConfigsBlockchain from "../blockchain-baccarat/game-configs";
import BaccaratGuideEN from "./en";
import BaccaratGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps } from "./type";
import { GameGuideBase } from "../type";

export enum BaccaratId {
    Baccarat = 10,
    VipBaccarat = 27,
    BlockchainBaccarat = 48,
}

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetPlayer = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.player));
    const maxBetSubChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));

    return { maxBetPlayer, maxBetSubChoice, maxBetMain, minBetMain };
};

const BaccaratGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, isScrollMD5, environment } = props;
    const getGameConfigs = () => {
        if (!isGetGameConfigs) {
            switch (id) {
                case BaccaratId.Baccarat:
                    return GameConfigs;
                case BaccaratId.BlockchainBaccarat:
                    return GameConfigsBlockchain;
                case BaccaratId.VipBaccarat:
                    return GameConfigsVIP;
            }
        }
        if (!dynamic) {
            switch (id) {
                case BaccaratId.Baccarat:
                    gameConfigs.odds = GameConfigs.odds;
                    break;
                case BaccaratId.BlockchainBaccarat:
                    gameConfigs.odds = GameConfigsBlockchain.odds;
                    break;
                case BaccaratId.VipBaccarat:
                    gameConfigs.odds = GameConfigsVIP.odds;
            }
        }

        return gameConfigs;
    };

    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());
    if (locale === locales.en) {
        return (
            <BaccaratGuideEN
                gameConfigs={getGameConfigs()}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
                isScrollMD5={isScrollMD5}
                environment={environment}
            />
        );
    }
    return (
        <BaccaratGuideVI
            gameConfigs={getGameConfigs()}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
        />
    );
};
export default BaccaratGuide;
