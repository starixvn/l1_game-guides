import React, { useEffect, useMemo, useState } from "react";
import { useTolgee } from "@tolgee/react";
import { GameGuideBase } from "../type";
import { handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { generateFruitSlotTolgeeTranslationResource } from "./languages/tolgee";
import FruitSlotGuideTemplate from "./templates/default";
import { getGameConfigProject } from "../../index.helper";

const FruitSlotContent = (props: GameGuideBase) => {
    const { locale, gameNameTranslate, userStakeLevel, gameConfigs, dynamic, isGetGameConfigs, isScrollMD5, environment, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const tolgee = useTolgee();

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
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    // Generate translation resource using Tolgee within the provider context
    const translationResource = useMemo(() => {
        if (tolgee) {
            return generateFruitSlotTolgeeTranslationResource(tolgee, locale || "vi");
        }
        return undefined;
    }, [tolgee]);

    if (!configs) {
        return <></>;
    }

    return (
        <FruitSlotGuideTemplate
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
            locale={locale}
            translationResource={translationResource}
        />
    );
};

export default FruitSlotContent;
