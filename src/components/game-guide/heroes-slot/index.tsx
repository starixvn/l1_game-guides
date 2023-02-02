import React, { useEffect, useState } from "react";

import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { GameConfigProps } from "./type";
import { HeroesSlotTemplate } from "./templates/default";
import HeroesSlotGuideVI from "./templates/vi";
import { getGameConfigProject } from "../../index.helper";

const HeroesSlotGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("heroes-slot", project, setConfigs);
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

    if (locale === locales.vi) {
        return <HeroesSlotGuideVI gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
    }

    return <HeroesSlotTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default HeroesSlotGuide;
