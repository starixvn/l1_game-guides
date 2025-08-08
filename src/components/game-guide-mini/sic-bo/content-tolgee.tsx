import { useTolgee } from "@tolgee/react";
import { useEffect, useState } from "react";
import { GameGuideBase } from "../../game-guide/type";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "./index";
import { getSicBoMiniTolgeeTranslationResource } from "./languages/tolgee";
import { ISicBoTranslationResource } from "./languages/types";
import SicBoGuideTemplate from "./template/index";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const SicBoMiniContent = (props: GameGuideBase) => {
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
    const [translationResource, setTranslationResource] = useState<ISicBoTranslationResource>();

    const tolgee = useTolgee();

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
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    useEffect(() => {
        if (tolgee) {
            (async () => {
                await tolgee.changeLanguage(locale || "en");
                const resource = getSicBoMiniTolgeeTranslationResource(tolgee, locale || "en");
                setTranslationResource(resource);
            })();
        }
        return undefined;
    }, [tolgee]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameName: gameNameTranslate ?? "",
        environment,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
        maxBetFollowChoice,
        gameConfigs,
        locale,
    };

    return <SicBoGuideTemplate {...resource} translationResource={translationResource} />;
};

export default SicBoMiniContent;
