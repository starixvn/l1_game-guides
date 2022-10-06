import React, { useEffect, useState } from "react";

import KenoPowerGuideEN from "./en";
import KenoPowerGuideVI from "./vi";
import { locales } from "../../../common/constants";
import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../index.helper";

export const KenoPowerMD5 = [41];

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetRound = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetBlueChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blue));
    const maxBetBlueRedChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blueBig));

    return { maxBetRound, minBetRound, maxBetBlueChoice, maxBetBlueRedChoice };
};

const KenoPowerGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("keno-power", project, setConfigs);
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
            <KenoPowerGuideEN
                gameConfigs={configs}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
            />
        );
    }
    return (
        <KenoPowerGuideVI
            gameConfigs={configs}
            userStakeLevel={userStakeLevel}
            gameName={gameNameTranslate}
            gameId={id}
            maxBetFollowChoice={maxBetFollowChoice}
        />
    );
};
export default KenoPowerGuide;
