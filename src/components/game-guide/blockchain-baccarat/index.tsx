import React, { useEffect, useState } from "react";

import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../index.helper";
import BlockchainBaccaratGuideEN from "./en";
import BlockchainBaccaratGuideVI from "./vi";
import { GameConfigProps, MaxBetChoicesProps } from "../baccarat/type";

export enum BaccaratId {
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

const BlockChainBaccaratGuide = (props: GameGuideBase) => {
    const {
        id,
        locale,
        userStakeLevel,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isGetGameConfigs,
        isScrollMD5,
        environment,
        project,
        fractionalOddsFormat,
    } = props;

    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("blockchain-baccarat", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();
    }, []);

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameConfigs: configs,
        userStakeLevel,
        gameName: gameNameTranslate,
        gameId: id,
        maxBetFollowChoice,
        isScrollMD5: isScrollMD5,
        environment,
        fractionalOddsFormat,
        locale
    };

    switch (locale) {
        case locales.vi:
            return <BlockchainBaccaratGuideVI {...resource} />

        default:
            return <BlockchainBaccaratGuideEN {...resource} />
    }
};
export default BlockChainBaccaratGuide;
