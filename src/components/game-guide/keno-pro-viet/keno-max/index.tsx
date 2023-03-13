import React, { useEffect, useState } from "react";
import { GameGuideBase } from "../../type";
import { handleMaxBetChoiceKenoPro } from "../../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import KenoProGuideTemplate from "./templates/default";
import { getGameConfigProject } from "../../../index.helper";

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
    return (
        <KenoProGuideTemplate
            locale={locale}
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            environment={environment}
            fractionalOddsFormat={fractionalOddsFormat}
        />
    );
};
export default KenoMaxGuide;
