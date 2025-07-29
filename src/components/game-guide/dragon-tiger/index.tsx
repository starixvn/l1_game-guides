import React, { useEffect, useState } from "react";

import DragonTigerGuideVI from "./templates/index";
import DragonTigerGuideTemplate from "./templates/default";
import { GameGuideBase } from "../type";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import DragonTigerGuideTolgeeWrapper from "./tolgee";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetDragon = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.dragon));
    const maxBetTie = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));

    return { maxBetMain, minBetMain, maxBetDragon, maxBetTie };
};

const DragonTigerGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("dragon-tiger", project, setConfigs);
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
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

    const isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(locale || "en");
    };

    const resource = {
        gameConfigs: configs,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        fractionalOddsFormat,
        locale,
    };

    if (locale === locales.vi) {
        return <DragonTigerGuideVI {...resource} />;
    }

    // For Tolgee-supported languages, use the Tolgee template
    if (isTolgeeSupportLanguage()) {
        return <DragonTigerGuideTolgeeWrapper {...resource} />;
    }

    // For non-Tolgee languages, use the default template
    return <DragonTigerGuideTemplate {...resource} />;
};
export default DragonTigerGuide;
