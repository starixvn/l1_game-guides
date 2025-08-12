import React, { useEffect, useMemo, useState } from "react";
import { useTolgee } from "@tolgee/react";
import { GameGuideBase } from "../type";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getFanTanTolgeeTranslationResource } from "./languages/tolgee";
import { handleMaxBetChoice } from "./index";
import FanTanTemplate from "./templates/default";
import { getGameConfigProject } from "../../index.helper";
import { renderTermsAndConditionsTolgee } from "../../shared";
import { generateMD5TranslationResource } from "../base/md5/languages/tolgee";

const FanTanContent = (props: GameGuideBase) => {
    const {
        locale,
        userStakeLevel,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isGetGameConfigs,
        environment,
        project,
        fractionalOddsFormat,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps | undefined>();

    const tolgee = useTolgee();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fantan", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            gameConfigs.odds = gameConfigs.odds;
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
            const resource = getFanTanTolgeeTranslationResource(tolgee, locale || "vi");
            return resource;
        }
        return undefined;
    }, [tolgee, locale]);

    const md5TranslationResource = useMemo(() => {
        if (tolgee) {
            return generateMD5TranslationResource(tolgee);
        }
        return undefined;
    }, [tolgee, locale]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameConfigs: configs,
        userStakeLevel,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        environment,
        fractionalOddsFormat,
        locale: props.locale,
    };

    return (
        <FanTanTemplate
            {...resource}
            translationResource={translationResource}
            termsAndConditions={renderTermsAndConditionsTolgee(tolgee)}
            md5TranslationResource={md5TranslationResource}
        />
    );
};

export default FanTanContent;
