import React, { useEffect, useMemo, useState } from "react";
import { useTolgee } from "@tolgee/react";
import { GameGuideBase } from "../../game-guide/type";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { handleMaxBetChoice } from "./index";
import FishPrawnCrabMiniGuideTemplate from "./template";
import { getGameConfigProject } from "../../index.helper";
import { getFishPrawnCrabMiniTolgeeTranslationResource } from "./languages/tolgee";

const FishPrawnCrabMiniContent = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, userStakeLevel, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const tolgee = useTolgee();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fish-prawn-crab", project, setConfigs, "game-guide-mini");
    };

    const getDynamicGameConfig = () => {
        setConfigs(gameConfigs);
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

    const translationResource = useMemo(() => {
        if (tolgee) {
            const resource = getFishPrawnCrabMiniTolgeeTranslationResource(tolgee, locale || "vi");
            return resource;
        }
        return undefined;
    }, [tolgee, locale]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameConfigs: configs,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        locale,
    };

    return <FishPrawnCrabMiniGuideTemplate {...resource} translationResource={translationResource} />;
};

export default FishPrawnCrabMiniContent;
