import React, { useEffect, useState } from "react";
import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import OddEvenTurboGuideID from "./id";
import OddEvenTurboGuideTH from "./th";
import OddEvenTurboGuideCN from "./zh_cn";
import OddEvenTurboGuideTW from "./zh_tw";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject } from "../../index.helper";
import OddEvenTurboGuideTolgeeWrapper from "./tolgee";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };

const OddEvenTurboGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("odd-even-turbo", project, setConfigs);
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
            return <OddEvenTurboGuideVI {...resource} />;
        case locales.id:
            return <OddEvenTurboGuideID {...resource} />;
        case locales.th:
            return <OddEvenTurboGuideTH {...resource} />;
        case locales.zh_cn:
            return <OddEvenTurboGuideCN {...resource} />;
        case locales.zh_tw:
            return <OddEvenTurboGuideTW {...resource} />;

        default:
            return <OddEvenTurboGuideTolgeeWrapper {...resource} />;
    }
};
export default OddEvenTurboGuide;
