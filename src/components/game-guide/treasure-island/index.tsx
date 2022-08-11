import React, { useEffect, useState } from "react";

import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import TreasureIslandGuideEN from "./en";
import { GameConfigProps } from "./type";
import TreasureIslandGuideVI from "./vi";
import { getGameConfigProject } from "../index.helper";

const TreasureIslandGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("treasure-island", project, setConfigs);
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
        return <TreasureIslandGuideEN gameConfigs={configs} gameName={gameNameTranslate} />;
    }
    return <TreasureIslandGuideVI gameConfigs={configs} gameName={gameNameTranslate} />;
};
export default TreasureIslandGuide;
