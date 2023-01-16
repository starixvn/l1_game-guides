import React, { useEffect, useState } from "react";
import { NightClubTemplate } from "./templates/default";
import NightClubGuideVI from "./templates/vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";
import { GameConfigProps } from "../base/base-slot/types";

const NightClubGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("night-club", project, setConfigs);
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
        return <NightClubGuideVI gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
    }

    return <NightClubTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};

export default NightClubGuide;
