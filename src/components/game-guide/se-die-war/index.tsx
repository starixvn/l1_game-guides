import React, { useEffect, useState } from "react";

import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import SeDieGuideID from "./id";
import SeDieGuideTH from "./th";
import SeDieGuideZH_CN from "./zh_cn";
import SeDieGuideZH_TW from "./zh_tw";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { UserStakeLevelProps } from "../../../pages";
import { getGameConfigProject } from "../../index.helper";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetPlayer = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.player));
    const maxBetPlayerEven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.playerEven));
    const maxBetPlayerRed3 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.playerRed3));
    const maxBetPlayerRed4 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.playerRed4));
    const maxBetBankerEven = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.bankerEven));
    const maxBetBankerRed3 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.bankerRed3));
    const maxBetBankerRed4 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.bankerRed4));

    return {
        maxBetMain,
        minBetMain,
        maxBetPlayer,
        maxBetPlayerEven,
        maxBetPlayerRed3,
        maxBetPlayerRed4,
        maxBetBankerEven,
        maxBetBankerRed3,
        maxBetBankerRed4,
    };
};

const SeDieWarGuide = (props: GameGuideBase) => {
    const { locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("se-die-war", project, setConfigs);
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
            return <SeDieGuideVI {...resource} />;
        case locales.id:
            return <SeDieGuideID {...resource} />;
        case locales.th:
            return <SeDieGuideTH {...resource} />;
        case locales.zh_cn:
            return <SeDieGuideZH_CN {...resource} />;
        case locales.zh_tw:
            return <SeDieGuideZH_TW {...resource} />;

        default:
            return <SeDieGuideEN {...resource} />;
    }
};
export default SeDieWarGuide;
