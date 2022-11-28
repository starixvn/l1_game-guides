import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { GameGuideBase } from "../type";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";

const LotteryGuideEN = dynamic(() => import("./en"));
const LotteryGuideVI = dynamic(() => import("./vi"));
const LotteryGuideID = dynamic(() => import("./id"));
const LotteryGuideTH = dynamic(() => import("./th"));
const LotteryGuideZHCN = dynamic(() => import("./zh_cn"));
// const KenoProMaxGuideZHTW = dynamic(() => import("./zh_tw"));

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetSets4 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices["4Sets"]));
    const maxBetSets27 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices["27Sets"]));
    const maxBetHead = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.head));
    const maxBetOthers = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.others));
    const maxBetTail = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tail));
    const maxBetSpecial = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.special));

    return { maxBetMain, minBetMain, maxBetSets4, maxBetSets27, maxBetHead, maxBetOthers, maxBetTail, maxBetSpecial };
};

const LotteryGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("lottery", project, setConfigs);
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

    switch (locale) {
        case locales.vi:
            return <LotteryGuideVI {...resource} />;
        case locales.id:
            return <LotteryGuideID {...resource} />;
        case locales.th:
            return <LotteryGuideTH {...resource} />;
        case locales.zh_cn:
            return <LotteryGuideZHCN {...resource} />;
        // case locales.zh_tw:
        //     return <KenoProMaxGuideZHTW {...resource} />;

        default:
            return <LotteryGuideEN {...resource} />;
    }
};
export default LotteryGuide;
