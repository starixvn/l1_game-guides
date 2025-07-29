import React, { useState, useEffect } from "react";

import { GameGuideBase } from "../../game-guide/type";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

import { getGameConfigProject } from "../../index.helper";
import SicBoGuideTemplate from "./template";
import SicBoMiniContent from "./content-tolgee";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import initTolgee from "../../../helpers/tolgee-helper";
import { TolgeeProvider } from "@tolgee/react";

const tolgee = initTolgee(["SicBoMini"]);

const isTolgeeSupportLanguage = (languageTag: string) => {
    return !["th", "id", "vi", "zh_cn", "zh_tw"].includes(languageTag);
};

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetSpecific1 = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.specific1));
    const maxBetBig = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.big));
    return { maxBetMain, minBetMain, maxBetSpecific1, maxBetBig };
};

const SicBoMiniGuide = (props: GameGuideBase) => {
    const {
        gameConfigs,
        gameNameTranslate,
        dynamic,
        userStakeLevel,
        isGetGameConfigs,
        environment,
        project,
        isInPromotionTime,
        fractionalOddsFormat,
        locale,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("sic-bo", project, setConfigs, "game-guide-mini");
    };

    const getDynamicGameConfig = () => {
        setConfigs(gameConfigs);
    };

    useEffect(() => {
        getLocalGameConfigs();
    }, []);

    useEffect(() => {
        const languageTag = locale || "vi";
        if (isTolgeeSupportLanguage(languageTag)) {
            tolgee.changeLanguage(languageTag);
        }
    }, [locale]);

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    const resource = {
        gameName: gameNameTranslate ?? "",
        environment,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
        maxBetFollowChoice,
        gameConfigs,
        locale,
    };

    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <SicBoMiniContent
                    gameConfigs={gameConfigs}
                    gameNameTranslate={gameNameTranslate}
                    gameName={gameNameTranslate}
                    dynamic={dynamic}
                    userStakeLevel={userStakeLevel}
                    isGetGameConfigs={isGetGameConfigs}
                    environment={environment}
                    project={project}
                    isInPromotionTime={isInPromotionTime}
                    fractionalOddsFormat={fractionalOddsFormat}
                    locale={locale}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    return <SicBoGuideTemplate {...resource} />;
};
export default SicBoMiniGuide;
