import React, { useState, useEffect } from "react";

import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";
import FortuneCatGuideEN from "./en";
import FortuneCatGuideVI from "./vi";

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

    if (locale === locales.en) {
        return <FortuneCatGuideEN gameConfigs={configs} gameName={gameNameTranslate} />;
    }
    return <FortuneCatGuideVI gameConfigs={configs} gameName={gameNameTranslate} />;
};
export default FortuneCatGuide;
