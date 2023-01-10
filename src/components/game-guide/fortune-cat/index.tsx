import React, { useState, useEffect } from "react";

import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";
import FortuneCatGuideEN from "./en";
import FortuneCatGuideVI from "./vi";
import FortuneCatGuideID from "./id";

const FortuneCatGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fortune-cat", project, setConfigs);
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

    switch (locale) {
        case locales.vi:
            return <FortuneCatGuideVI {...resource} />;
        case locales.id:
            return <FortuneCatGuideID {...resource} />;
        // case locales.th:
        //     return <WayToGoalGuideTH {...resource} />;
        // case locales.zh_cn:
        //     return <WayToGoalGuideCN {...resource} />;
        // case locales.zh_tw:
        //     return <WayToGoalGuideTW {...resource} />;
        default:
            return <FortuneCatGuideEN {...resource} />;
    }
};
export default FortuneCatGuide;
