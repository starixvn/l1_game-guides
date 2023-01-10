import React, { useState, useEffect } from "react";

import WayToGoalGuideEN from "./en";
import WayToGoalGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";
import WayToGoalGuideID from "./id";
import WayToGoalGuideTH from "./th";
import WayToGoalGuideCN from "./zh_cn";

const WayToGoalGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("way-to-goal", project, setConfigs);
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
            return <WayToGoalGuideVI {...resource} />;
        case locales.id:
            return <WayToGoalGuideID {...resource} />;
        case locales.th:
            return <WayToGoalGuideTH {...resource} />;
        case locales.zh_cn:
            return <WayToGoalGuideCN {...resource} />;
        default:
            return <WayToGoalGuideEN {...resource} />;
    }
};
export default WayToGoalGuide;
