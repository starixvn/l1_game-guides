import React, { useEffect, useState } from "react";

import BaccaratGuideEN from "./en";
import BaccaratGuideVI from "./vi";
import BaccaratGuideTW from "./zh_tw";
import BaccaratGuideCN from "./zh_cn";
import BaccaratGuideTH from "./th";
import BaccaratGuideID from "./id";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../index.helper";

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
        let pathName = "";
        switch (id) {
            case BaccaratId.Baccarat:
                pathName = "baccarat";
                break;
            case BaccaratId.BlockchainBaccarat:
                pathName = "blockchain-baccarat";
                break;
            case BaccaratId.VipBaccarat:
                pathName = "baccarat-vip";
                break;
        }

        getGameConfigProject(pathName, project, setConfigs);
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
    };

    switch(locale) {
        case locales.vi:
            return <BaccaratGuideVI {...resource} />
        case locales.id:
            return <BaccaratGuideID {...resource} />
        case locales.th:
            return <BaccaratGuideTH {...resource} />
        case locales.zh_cn:
            return <BaccaratGuideCN {...resource} />;
        case locales.zh_tw:
            return <BaccaratGuideTW {...resource} />;

        default:
            return <BaccaratGuideEN {...resource} />
    }    
};
export default BaccaratGuide;
