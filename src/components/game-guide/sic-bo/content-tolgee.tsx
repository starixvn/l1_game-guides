import React, { useEffect, useMemo, useState } from "react";
import { useTolgee } from "@tolgee/react";
import { GameGuideBase } from "../type";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getSicBoTolgeeTranslationResource } from "./languages/tolgee";
import { handleMaxBetChoice } from "./index";
import SicBoTemplate from "./templates/default";
import { getGameConfigProject } from "../../index.helper";
import { generateMD5TranslationResource } from "../base/md5/languages/tolgee";

const SicBoContent = (props: GameGuideBase) => {
    const {
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        userStakeLevel,
        isGetGameConfigs,
        project,
        fractionalOddsFormat,
        environment,
        orientation,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const tolgee = useTolgee();

    const getLocalGameConfigs = () => {
        getGameConfigProject("sic-bo", project, setConfigs);
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

    const translationResource = useMemo(() => {
        if (tolgee) {
            const resource = getSicBoTolgeeTranslationResource(tolgee, locale || "vi");
            return resource;
        }
        return undefined;
    }, [tolgee, locale]);

    const md5TranslationResource = useMemo(() => {
        if (tolgee) {
            return generateMD5TranslationResource(tolgee);
        }
        return undefined;
    }, [tolgee]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameConfigs: configs,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        fractionalOddsFormat,
        locale,
        environment,
        orientation,
    };

    return <SicBoTemplate {...resource} translationResource={translationResource} md5TranslationResource={md5TranslationResource} />;
};

export default SicBoContent;
