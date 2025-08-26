import { useEffect, useMemo, useState } from "react";
import { GameGuideBase } from "../../game-guide/type";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "./index";
import { getDragonTigerMiniTolgeeTranslationResource } from "./languages/tolgee";
import DragonTigerMiniGuideTemplate from "./templates/index";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const DragonTigerMiniContent = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, userStakeLevel, isGetGameConfigs, project, tolgee } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("dragon-tiger", project, setConfigs, "game-guide-mini");
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
            const resource = getDragonTigerMiniTolgeeTranslationResource(tolgee, locale || "vi");
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

    return <DragonTigerMiniGuideTemplate {...resource} translationResource={translationResource} />;
};

export default DragonTigerMiniContent;
