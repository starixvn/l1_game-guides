import React, { useEffect, useState } from "react";

import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import FishPrawnCrabGuideID from "./id";
import FishPrawnCrabGuideTH from "./th";
import FishPrawnCrabGuideCN from "./zh_cn";
import FishPrawnCrabGuideTW from "./zh_tw";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetAnyTriple = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.anyTriple));
    const maxBetFish = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fish));

    return { maxBetMain, minBetMain, maxBetAnyTriple, maxBetFish };
};

const FishPrawnCrabVIP = (props: GameGuideBase) => {
    const { locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fish-prawn-crab-vip", project, setConfigs);
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
        maxBetFollowChoice,
        fractionalOddsFormat,
    };

    switch (locale) {
        case locales.vi:
            return <FishPrawnCrabGuideVI {...resource} />;
        case locales.id:
            return <FishPrawnCrabGuideID {...resource} />;
        case locales.th:
            return <FishPrawnCrabGuideTH {...resource} />;
        case locales.zh_cn:
            return <FishPrawnCrabGuideCN {...resource} />;
        case locales.zh_tw:
            return <FishPrawnCrabGuideTW {...resource} />;

        default:
            return <FishPrawnCrabGuideEN {...resource} />;
    }
};
export default FishPrawnCrabVIP;
