import React, { useEffect, useState } from "react";

import KenoMaxGuideEN from "./en";
import KenoMaxGuideVI from "./vi";
import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
import { getGameConfigProject, handleMaxBetChoiceKenoPro } from "../../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const KenoMaxGuide = (props: GameGuideBase) => {
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
        let pathName = "";
        switch (id) {
            case 13:
                pathName = "keno-pro-viet/keno-max2";
                break;
            case 16:
                pathName = "keno-pro-viet/keno-east";
                break;
            case 17:
                pathName = "keno-pro-viet/keno-west";
                break;
            case 18:
                pathName = "keno-pro-viet/keno-south";
                break;
            case 19:
                pathName = "keno-pro-viet/keno-north";
                break;
            case 52:
                pathName = "keno-pro-viet/mega-keno";
                break;
            case 53:
                pathName = "keno-pro-viet/mega-keno2";
                break;

            default:
                pathName = "keno-pro-viet/keno-max";
                break;
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
            <KenoMaxGuideEN
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                environment={environment}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        );
    }
    return (
        <KenoMaxGuideVI
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            environment={environment}
            fractionalOddsFormat={fractionalOddsFormat}
        />
    );
};
export default KenoMaxGuide;
