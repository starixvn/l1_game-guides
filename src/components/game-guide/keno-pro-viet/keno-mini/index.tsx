import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { GameGuideBase } from "../../type";
import { locales } from "../../../../common/constants";
import { getGameConfigProject, handleMaxBetChoiceKenoPro } from "../../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const KenoMiniGuideEN = dynamic(() => import("./en"));
const KenoMiniGuideVI = dynamic(() => import("./vi"));
const KenoMiniGuideID = dynamic(() => import("./id"));
const KenoMiniGuideTH = dynamic(() => import("./th"));
const KenoMiniGuideZHCN = dynamic(() => import("./zh_cn"));
const KenoMiniGuideZHTW = dynamic(() => import("./zh_tw"));

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
    };

    switch (locale) {
        case locales.vi:
            return <KenoMiniGuideVI {...resource} />;
        case locales.id:
            return <KenoMiniGuideID {...resource} />;
        case locales.th:
            return <KenoMiniGuideTH {...resource} />;
        case locales.zh_cn:
            return <KenoMiniGuideZHCN {...resource} />;
        case locales.zh_tw:
            return <KenoMiniGuideZHTW {...resource} />;

        default:
            return <KenoMiniGuideEN {...resource} />;
    }
};
export default KenoMiniGuide;
