import React, { useEffect, useState } from "react";

import KenoProMaxGuideEN from "./en";
import KenoProMaxGuideVI from "./vi";
import KenoProMaxGuideTH from "./th";
import KenoProMaxGuideID from "./id";
import SeDieGuideZH_CN from "./zh_cn";
import SeDieGuideZH_TW from "./zh_tw";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import { getGameConfigProject, handleMaxBetChoiceKenoPro } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const KenoProMaxGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("keno-pro-max", project, setConfigs);
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
            setMaxBetFollowChoice(handleMaxBetChoiceKenoPro(userStakeLevel, configs));
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
            return <KenoProMaxGuideVI {...resource} />;
        case locales.id:
            return <KenoProMaxGuideID {...resource} />;
        case locales.th:
            return <KenoProMaxGuideTH {...resource} />;
        case locales.zh_cn:
            return <SeDieGuideZH_CN {...resource} />;
        case locales.zh_tw:
            return <SeDieGuideZH_TW {...resource} />;

        default:
            return <KenoProMaxGuideEN {...resource} />;
    }
};
export default KenoProMaxGuide;
