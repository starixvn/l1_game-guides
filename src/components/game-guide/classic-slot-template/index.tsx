import React, { useEffect, useState } from "react";

import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameGuideBase } from "../type";
import Contents from "./contents";
import { GameConfigProps } from "./type";

const ClassicSlotGuide = (props: GameGuideBase) => {
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

    return <Contents gameConfigs={configs} gameName={gameNameTranslate} />;
};
export default ClassicSlotGuide;
