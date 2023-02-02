import React, { useEffect, useState } from "react";

import RouletteGuideEN from "./en";
import RouletteGuideVI from "./vi";
import RouletteGuideID from "./id";
import RouletteGuideTH from "./th";
import RouletteGuideCN from "./zh_cn";
import RouletteGuideTW from "./zh_tw";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject } from "../../index.helper";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetStraightUp = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.straightUp));
    const maxBetSplit = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.split));
    const maxBetStreet = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.street));
    const maxBetCorner = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.corner));
    const maxBetLine = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.line));
    const maxBetDozen = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.dozen));
    const maxBetRedBlack = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.redBlack));

    return { maxBetMain, minBetMain, maxBetStraightUp, maxBetSplit, maxBetStreet, maxBetCorner, maxBetLine, maxBetDozen, maxBetRedBlack };
};

const RouletteGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("roulette", project, setConfigs);
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
            return <RouletteGuideVI {...resource} />;
        case locales.id:
            return <RouletteGuideID {...resource} />;
        case locales.th:
            return <RouletteGuideTH {...resource} />;
        case locales.zh_cn:
            return <RouletteGuideCN {...resource} />;
        case locales.zh_tw:
            return <RouletteGuideTW {...resource} />;

        default:
            return <RouletteGuideEN {...resource} />;
    }
};
export default RouletteGuide;
