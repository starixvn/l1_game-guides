import React, { useEffect, useState } from "react";

import FourGuardiansGuideEN from "./en";
import FourGuardiansGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { GameConfigProps } from "./type";
import FourGuardiansGuideID from "./id";
import FourGuardiansGuideTH from "./th";
import FourGuardiansGuideCN from "./zh_cn";
import FourGuardiansGuideTW from "./zh_tw";
import { getGameConfigProject } from "../../index.helper";

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

    const resource = {
        gameConfigs: configs,
        gameName: gameNameTranslate,
        project: project,
    };

    switch (locale) {
        case locales.vi:
            return <FourGuardiansGuideVI {...resource} />;
        case locales.id:
            return <FourGuardiansGuideID {...resource} />;
        case locales.th:
            return <FourGuardiansGuideTH {...resource} />;
        case locales.zh_cn:
            return <FourGuardiansGuideCN {...resource} />;
        case locales.zh_tw:
            return <FourGuardiansGuideTW {...resource} />;

        default:
            return <FourGuardiansGuideEN {...resource} />;
    }
};
export default FourGuardiansGuide;
