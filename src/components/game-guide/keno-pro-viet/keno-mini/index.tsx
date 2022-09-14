import React, { useEffect, useState } from "react";

import KenoMiniGuideEN from "./en";
import KenoMiniGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
import { getGameConfigProject, handleMaxBetChoiceKenoPro } from "../../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const { id, locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, environment } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        let pathName = "keno-pro-viet/keno-mini";
        if (gameMini2Id.includes(id ?? gameMini2Id[0])) {
            pathName = "keno-pro-viet/keno-mini2";
        }

        getGameConfigProject(pathName, project, setConfigs);
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
            setMaxBetFollowChoice(handleMaxBetChoiceKenoPro(userStakeLevel, configs));
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    if (locale === locales.en) {
        return (
            <KenoMiniGuideEN
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                environment={environment}
            />
        );
    }
    return (
        <KenoMiniGuideVI
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            environment={environment}
        />
    );
};
export default KenoMiniGuide;
