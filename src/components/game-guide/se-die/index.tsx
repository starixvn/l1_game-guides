import React, { useEffect, useState } from "react";

import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import SeDieGuideTH from "./th";
import SeDieGuideID from "./id";
import SeDieGuideZH_CN from "./zh_cn";
import SeDieGuideZH_TW from "./zh_tw";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../index.helper";

export const SeDieVip = [22];
export const SeDieMini = [9, 56, 57, 58];
export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetStake = userStakeLevel?.maxBet ?? maxBet;
    const maxBetMain = numberWithCommas(Math.min(maxBetStake, maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetRed4 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.red4));
    const maxBetRed3 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.red3));
    const maxBetRed2 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices?.red2 ?? 0));
    const maxBetEven = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.even));

    return { maxBetMain, minBetMain, maxBetRed4, maxBetRed3, maxBetRed2, maxBetEven };
};

const SeDieGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, isScrollMD5, environment, project } =
        props;

    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        let pathName = "";
        switch (id) {
            case 7:
                pathName = "se-die-mini";
                break;
            case 22:
                pathName = "se-die-vip";
                break;

            default:
                pathName = "se-die";
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

export default SeDieGuide;
