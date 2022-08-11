import React, { useEffect, useState } from "react";

import HiLoGuideEN from "./en";
import HiLoGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import { GameConfigProps } from "../big-small/type";
import { getGameConfigProject } from "../index.helper";

const HiLoGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
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
    
    if (locale === locales.en) {
        return <HiLoGuideEN gameConfigs={configs} userStakeLevel={userStakeLevel} gameName={gameNameTranslate} gameId={id} />;
    }
    return <HiLoGuideVI gameConfigs={configs} userStakeLevel={userStakeLevel} gameName={gameNameTranslate} gameId={id} />;
};
export default HiLoGuide;
