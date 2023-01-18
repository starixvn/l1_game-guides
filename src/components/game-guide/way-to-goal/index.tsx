import React, { useState, useEffect } from "react";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";
import { WayToGoalTemplate } from "./templates/default";
import WayToGoalGuideVI from "./templates/vi";

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

    if (locale === locales.vi) {
        return <WayToGoalGuideVI gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
    }

    return <WayToGoalTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default WayToGoalGuide;
