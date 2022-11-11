import React, { useEffect, useState } from "react";

import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";
import FantanGuideEN from "./en/index";
import FantanGuideVI from "./vi/index";

const FantanGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fantan", project, setConfigs);
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
        return <FantanGuideEN gameConfigs={configs} gameName={gameNameTranslate} />;
    }
    return <FantanGuideVI gameConfigs={configs} gameName={gameNameTranslate} />;
};
export default FantanGuide;
