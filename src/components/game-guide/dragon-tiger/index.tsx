import React, { useEffect, useState } from "react";

import DragonTigerGuideEN from "./en";
import DragonTigerGuideVI from "./vi";
import DragonTigerGuideTW from "./zh_tw";
import DragonTigerGuideCN from "./zh_cn";
import DragonTigerGuideTH from "./th";
import DragonTigerGuideID from "./id";
import { GameGuideBase } from "../type";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetDragon = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.dragon));
    const maxBetTie = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));

    return { maxBetMain, minBetMain, maxBetDragon, maxBetTie };
};

const DragonTigerGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("dragon-tiger", project, setConfigs);
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
        gameName: gameNameTranslate,  
        maxBetFollowChoice,   
        fractionalOddsFormat,
    };

    switch(locale) {
        case locales.vi:
            return <DragonTigerGuideVI {...resource} />
        case locales.id:
            return <DragonTigerGuideID {...resource} />
        case locales.th:
            return <DragonTigerGuideTH {...resource} />
        case locales.zh_cn:
            return <DragonTigerGuideCN {...resource} />;
        case locales.zh_tw:
            return <DragonTigerGuideTW {...resource} />;

        default:
            return <DragonTigerGuideEN {...resource} />
    }    
};
export default DragonTigerGuide;
