import React, { useEffect, useState } from "react";

import FourGuardiansGuideEN from "./en";
import FourGuardiansGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "./type";

const FourGuardiansGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("four-guardians", project, setConfigs);
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
        return <FourGuardiansGuideEN gameConfigs={configs} gameName={gameNameTranslate} project={project} />;
    }
    return <FourGuardiansGuideVI gameConfigs={configs} gameName={gameNameTranslate} project={project} />;
};
export default FourGuardiansGuide;
