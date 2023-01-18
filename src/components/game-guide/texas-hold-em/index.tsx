import React, { useEffect, useState } from "react";

import TexasHoldGuideTemplate from "./templates/default";
import TexasHoldGuideVI from "./templates/vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../index.helper";
import { en } from "./languages/en";
import { id as idLanguage } from "./languages/id";
import { th } from "./languages/th";
import { zhCN } from "./languages/zh-cn";
import { zhTW } from "./languages/zh-tw";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetRound = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetAnteBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.anteBet));
    const maxBetCallBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.callBet));
    const maxBetRiverBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.riverBet));
    const maxBetTurnBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.turnBet));

    return { maxBetRound, minBetRound, maxBetAnteBetChoice, maxBetCallBetChoice, maxBetRiverBetChoice, maxBetTurnBetChoice };
};

const TexasHoldGuide = (props: GameGuideBase) => {
    const {
        id,
        locale,
        userStakeLevel,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isScrollMD5,
        isGetGameConfigs,
        project,
        fractionalOddsFormat,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("texas-hold-em", project, setConfigs);
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

    console.log("locale ", locale, locales);

    switch (locale) {
        case locales.vi:
            return (
                <TexasHoldGuideVI
                    gameConfigs={configs}
                    userStakeLevel={userStakeLevel}
                    gameName={gameNameTranslate}
                    gameId={id}
                    maxBetFollowChoice={maxBetFollowChoice}
                    isScrollMD5={isScrollMD5}
                    fractionalOddsFormat={fractionalOddsFormat}
                    locale={locale}
                />
            );
        case locales.id:
            return (
                <TexasHoldGuideTemplate
                    gameConfigs={configs}
                    userStakeLevel={userStakeLevel}
                    gameName={gameNameTranslate}
                    gameId={id}
                    maxBetFollowChoice={maxBetFollowChoice}
                    isScrollMD5={isScrollMD5}
                    fractionalOddsFormat={fractionalOddsFormat}
                    language={idLanguage}
                    locale={locale}
                />
            );
        case locales.th:
            return (
                <TexasHoldGuideTemplate
                    gameConfigs={configs}
                    userStakeLevel={userStakeLevel}
                    gameName={gameNameTranslate}
                    gameId={id}
                    maxBetFollowChoice={maxBetFollowChoice}
                    isScrollMD5={isScrollMD5}
                    fractionalOddsFormat={fractionalOddsFormat}
                    language={th}
                    locale={locale}
                />
            );
        case locales.zh_cn:
            return (
                <TexasHoldGuideTemplate
                    gameConfigs={configs}
                    userStakeLevel={userStakeLevel}
                    gameName={gameNameTranslate}
                    gameId={id}
                    maxBetFollowChoice={maxBetFollowChoice}
                    isScrollMD5={isScrollMD5}
                    fractionalOddsFormat={fractionalOddsFormat}
                    language={zhCN}
                    locale={locale}
                />
            );
        case locales.zh_tw:
            return (
                <TexasHoldGuideTemplate
                    gameConfigs={configs}
                    userStakeLevel={userStakeLevel}
                    gameName={gameNameTranslate}
                    gameId={id}
                    maxBetFollowChoice={maxBetFollowChoice}
                    isScrollMD5={isScrollMD5}
                    fractionalOddsFormat={fractionalOddsFormat}
                    language={zhTW}
                    locale={locale}
                />
            );

        default:
            return (
                <TexasHoldGuideTemplate
                    gameConfigs={configs}
                    userStakeLevel={userStakeLevel}
                    gameName={gameNameTranslate}
                    gameId={id}
                    maxBetFollowChoice={maxBetFollowChoice}
                    isScrollMD5={isScrollMD5}
                    fractionalOddsFormat={fractionalOddsFormat}
                    language={en}
                    locale={locale}
                />
            );
    }
};
export default TexasHoldGuide;
