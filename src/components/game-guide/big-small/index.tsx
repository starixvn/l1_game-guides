import React, { useEffect, useState } from "react";

import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { getGameConfigProject, handleMaxBetChoice } from "../index.helper";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };
const BigSmallGuide = (props: GameGuideBase) => {
    const {
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic: dynamicConfig,
        gameName,
        userStakeLevel,
        isGetGameConfigs,
        isScrollMD5,
        environment,
        project,
    } = props;
    const [config, setConfig] = useState<any>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<any>();

    const getGameConfigs = () => {
        if (gameName === BigSmallName.TXTurbo) {
            getGameConfigProject("big-small-turbo", project, setConfig);
        } else {
            getGameConfigProject("big-small", project, setConfig);
        }
    };

    useEffect(() => {
        getGameConfigs();
    }, []);

    useEffect(() => {
        if (config) {
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, config));
            if (!isGetGameConfigs) {
                return;
            }
            if (dynamicConfig) {
                return setConfig(gameConfigs);
            } else {
                gameConfigs.odds = config.odds;
                setConfig(gameConfigs);
            }
        }
    }, [config]);

    if (!config) {
        return <></>;
    }

    if (locale === locales.en) {
        return (
            <BigSmallGuideEN
                gameConfigs={config}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                isScrollMD5={isScrollMD5}
                environment={environment}
            />
        );
    }

    return (
        <BigSmallGuideVI
            gameConfigs={config}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            isScrollMD5={isScrollMD5}
            environment={environment}
        />
    );
};
export default BigSmallGuide;
