import React, { useEffect, useState } from "react";
import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import { GameConfigProps } from "./type";
import TreasureIslandGuideVI from "./templates/vi";
import { getGameConfigProject } from "../index.helper";
import TreasureIslandGuideTemplate from "./templates/default";

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

    if (locale === locales.vi) {
        return <TreasureIslandGuideVI gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
    }
    return <TreasureIslandGuideTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default TreasureIslandGuide;
