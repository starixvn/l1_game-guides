import React, { useEffect, useState } from "react";

import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../index.helper";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.crab));

    return { maxBetMain, minBetMain, maxBetChoice };
};

const FishPrawnCrab = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, environment, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fish-prawn-crab", project, setConfigs);
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

    if (!configs) {
        return <></>;
    }

    if (locale === locales.en) {
        return (
            <FishPrawnCrabGuideEN
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                environment={environment}
            />
        );
    }

    return (
        <FishPrawnCrabGuideVI
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            environment={environment}
        />
    );
};
export default FishPrawnCrab;
