import React, { useEffect, useState } from "react";

import HeroesSlotGuideEN from "./en";
import HeroesSlotGuideVI from "./vi";
import HeroesSlotGuideID from "./id";
import HeroesSlotGuideTH from "./th";
import HeroesSlotGuideCN from "./zh_cn";
import HeroesSlotGuideTW from "./zh_tw";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";

const HeroesSlotGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
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

    const resource = {
        gameConfigs: configs,       
        gameName: gameNameTranslate,          
    };

    switch(locale) {
        case locales.vi:
            return <HeroesSlotGuideVI {...resource} />
        case locales.id:
            return <HeroesSlotGuideID {...resource} />
        case locales.th:
            return <HeroesSlotGuideTH {...resource} />
        case locales.zh_cn:
            return <HeroesSlotGuideCN {...resource} />;
        case locales.zh_tw:
            return <HeroesSlotGuideTW {...resource} />;

        default:
            return <HeroesSlotGuideEN {...resource} />
    }     
};
export default HeroesSlotGuide;
