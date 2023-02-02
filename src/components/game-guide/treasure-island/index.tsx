import React, { useEffect, useState } from "react";
import { GameGuideBase } from "../type";
import { GameConfigProps } from "./type";
import TreasureIslandGuideTemplate from "./templates/default";
import { getGameConfigProject } from "../../index.helper";

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

    return <TreasureIslandGuideTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default TreasureIslandGuide;
