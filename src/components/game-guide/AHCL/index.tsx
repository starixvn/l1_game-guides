import React, { useEffect, useState } from "react";

import HeroesSlotGuideEN from "./en";
import HeroesSlotGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";

const HeroesSlotGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("AHCL", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs as any);
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
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    if (locale === locales.en) {
        return <HeroesSlotGuideEN gameConfigs={configs} gameName={gameNameTranslate} fractionalOddsFormat={fractionalOddsFormat} />;
    }
    return <HeroesSlotGuideVI gameConfigs={configs} gameName={gameNameTranslate} fractionalOddsFormat={fractionalOddsFormat} />;
};
export default HeroesSlotGuide;
