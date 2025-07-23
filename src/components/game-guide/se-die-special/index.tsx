import React, { useEffect, useState } from "react";

import SeDieGuideEN from "./en";
import SeDieGuideVI from "./vi";
import SeDieGuideZH_TW from "./zh_tw";
import SeDieGuideZH_CN from "./zh_cn";
import SeDieGuideTH from "./th";
import SeDieGuideID from "./id";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject } from "../../index.helper";
import SeDieGuideJA from "./ja";

const SeDieSpecialGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("se-die-special", project, setConfigs);
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
            return <SeDieGuideVI {...resource} />;
        case locales.id:
            return <SeDieGuideID {...resource} />;
        case locales.th:
            return <SeDieGuideTH {...resource} />;
        case locales.zh_cn:
            return <SeDieGuideZH_CN {...resource} />;
        case locales.zh_tw:
            return <SeDieGuideZH_TW {...resource} />;
        case locales.ja:
            return <SeDieGuideJA {...resource} />;

        default:
            return <SeDieGuideEN {...resource} />;
    }
};
export default SeDieSpecialGuide;
