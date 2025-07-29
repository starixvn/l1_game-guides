import React, { useEffect, useState } from "react";

import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import { GameConfigProps } from "../big-small/type";
import HiLoGuideTemplate from "./templates/default";
import HiLoGuideVI from "./templates/vi";
import { getGameConfigProject } from "../../index.helper";
import HiLoGuideTolgeeWrapper from "./tolgee";

const HiLoGuide = (props: GameGuideBase) => {
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

    const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

    const isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(locale || "en");
    };

    if (locale === locales.vi) {
        return <HiLoGuideVI gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
    }

    // For Tolgee-supported languages, use the Tolgee template
    if (isTolgeeSupportLanguage()) {
        return <HiLoGuideTolgeeWrapper gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
    }

    // For non-Tolgee languages, use the default template
    return <HiLoGuideTemplate gameConfigs={configs} gameName={gameNameTranslate} locale={locale} />;
};
export default HiLoGuide;
