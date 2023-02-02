import React, { useEffect, useState } from "react";
import { GameGuideBase } from "../../type";
import { handleMaxBetChoiceKenoPro } from "../../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import KenoMiniGuideTemplate from "./templates/default";
import { getGameConfigProject } from "../../../index.helper";

const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const {
        id,
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        userStakeLevel,
        isGetGameConfigs,
        project,
        environment,
        fractionalOddsFormat,
    } = props;
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

    const resource = {
        gameConfigs: configs,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        fractionalOddsFormat,
        environment,
        locale,
    };
    return <KenoMiniGuideTemplate {...resource} />;
};
export default KenoMiniGuide;
