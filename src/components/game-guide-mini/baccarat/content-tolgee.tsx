import { useEffect, useMemo, useState } from "react";
import { GameGuideBase } from "../../game-guide/type";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "../../shared/baccarat";
import { getBaccaratMiniTolgeeTranslationResource } from "./languages/tolgee";
import BaccaratMiniGuideTemplate from "./template";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const BaccaratMiniContent = (props: GameGuideBase) => {
    const {
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isGetGameConfigs,
        project,
        userStakeLevel,
        environment,
        isInPromotionTime,
        fractionalOddsFormat,
        tolgee,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();
    1;

    const getLocalGameConfigs = () => {
        getGameConfigProject("baccarat", project, setConfigs, "game-guide-mini");
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            gameConfigs.odds = gameConfigs.originalOdds || gameConfigs.odds;
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
            const resource = getBaccaratMiniTolgeeTranslationResource(tolgee, locale || "vi");
            return resource;
        }
        return undefined;
    }, [tolgee, locale]);

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

    return <BaccaratMiniGuideTemplate {...resource} translationResource={translationResource} />;
};

export default BaccaratMiniContent;
