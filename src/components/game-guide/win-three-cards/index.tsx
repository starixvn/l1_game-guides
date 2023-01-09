import React, { useEffect, useState } from "react";

import WinThreeCardsGuideEN from "./en";
import WinThreeCardsGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject, handleMaxBetChoice } from "../index.helper";
import WinThreeCardsGuideID from "./id";
import WinThreeCardsGuideTH from "./th";
import WinThreeCardsGuideZH_CN from "./zh_cn";
import WinThreeCardsGuideZH_TW from "./zh_tw";

const WinThreeCardsGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("three-cards", project, setConfigs);
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

    switch (locale) {
        case locales.vi:
            return (
                <WinThreeCardsGuideVI
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.id:
            return (
                <WinThreeCardsGuideID
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.th:
            return (
                <WinThreeCardsGuideTH
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.zh_cn:
            return (
                <WinThreeCardsGuideZH_CN
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.zh_tw:
            return (
                <WinThreeCardsGuideZH_TW
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        default:
            return (
                <WinThreeCardsGuideEN
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
    }
};
export default WinThreeCardsGuide;
