import React, { useEffect, useState } from "react";

import FruitSlotGuideVI from "./templates/vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import FruitSlotGuideTemplate from "./templates/default";
import { getGameConfigProject } from "../../index.helper";
import initTolgee from "../../../helpers/tolgee-helper";
import { TolgeeProvider } from "@tolgee/react";
import FruitSlotContent from "./content-tolgee";

const tolgee = initTolgee(["FruitSlot"]);

const isTolgeeSupportLanguage = (languageTag: string) => {
    return !["th", "id", "vi", "zh_cn", "zh_tw", "en"].includes(languageTag);
};

const FruitSlotGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, isScrollMD5, environment, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fruit-slot", project, setConfigs);
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

    if (!configs) {
        return <></>;
    }

    if (locale === locales.vi) {
        return (
            <FruitSlotGuideVI
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                isScrollMD5={isScrollMD5}
                environment={environment}
            />
        );
    }

    // Use Tolgee for supported languages, fallback to static translations for others
    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <FruitSlotContent
                    locale={locale}
                    gameConfigs={gameConfigs}
                    gameNameTranslate={gameNameTranslate}
                    gameName={gameNameTranslate}
                    dynamic={dynamic}
                    isGetGameConfigs={isGetGameConfigs}
                    isScrollMD5={isScrollMD5}
                    environment={environment}
                    userStakeLevel={userStakeLevel}
                    project={project}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    return (
        <FruitSlotGuideTemplate
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
            locale={locale}
        />
    );
};
export default FruitSlotGuide;
