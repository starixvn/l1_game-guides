import React, { useEffect, useState } from "react";

import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../../game-guide/type";
import FishPrawnCrabMiniGuideTemplate from "./template";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.crab));

    return { maxBetMain, minBetMain, maxBetChoice };
};

const FishPrawnCrabMiniGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, userStakeLevel, isGetGameConfigs, project } = props;
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

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameConfigs: configs,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        locale,
    };

    return <FishPrawnCrabMiniGuideTemplate {...resource} />;
};
export default FishPrawnCrabMiniGuide;
