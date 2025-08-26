import { useEffect, useMemo, useState } from "react";
import { GameGuideBase } from "../../game-guide/type";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "./index";
import { getFishPrawnCrabMiniTolgeeTranslationResource } from "./languages/tolgee";
import FishPrawnCrabMiniGuideTemplate from "./template";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const FishPrawnCrabMiniContent = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, userStakeLevel, isGetGameConfigs, project, tolgee } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

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
