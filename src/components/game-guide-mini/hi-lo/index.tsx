import React, { useEffect, useState } from "react";
import { GameConfigProps } from "../big-small/type";;
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../../game-guide/type";
import HiLoMiniGuideTemplate from "./templates";

const HiLoMiniGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("hi-lo", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs);
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

    return <HiLoMiniGuideTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default HiLoMiniGuide;
