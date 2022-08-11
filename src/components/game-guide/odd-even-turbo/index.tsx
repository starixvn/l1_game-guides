import React, { useEffect, useState } from "react";

import OddEvenTurboGuideEN from "./en";
import OddEvenTurboGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { getGameConfigProject, handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

export const OddEvenTurboName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };

const OddEvenTurboGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project } = props;
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

    if (locale === locales.en) {
        return <OddEvenTurboGuideEN gameConfigs={configs} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }

    return <OddEvenTurboGuideVI gameConfigs={configs} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};
export default OddEvenTurboGuide;
