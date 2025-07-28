import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { locales } from "../../../common/constants";
import { GameGuideBase } from "../type";
import { handleMaxBetChoiceKenoPro } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject } from "../../index.helper";
import {  TolgeeProvider } from "@tolgee/react";
import KenoProMaxGameGuideContent from "./content-tolgee";
import initTolgee from "../../../helpers/tolgee-helper";

const KenoProMaxGuideEN = dynamic(() => import("./en"));
const KenoProMaxGuideVI = dynamic(() => import("./vi"));
const KenoProMaxGuideTH = dynamic(() => import("./th"));
const KenoProMaxGuideID = dynamic(() => import("./id"));
const KenoProMaxGuideZHCN = dynamic(() => import("./zh_cn"));
const KenoProMaxGuideZHTW = dynamic(() => import("./zh_tw"));


const tolgee = initTolgee(["KenoProMax", "Common"]);


const KenoProMaxGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("keno-pro-max", project, setConfigs);
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

        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replaceAll("/", ""));
        }
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
    };

    switch (locale) {
        case locales.vi:
            return <KenoProMaxGuideVI {...resource} />;
        case locales.id:
            return <KenoProMaxGuideID {...resource} />;
        case locales.th:
            return <KenoProMaxGuideTH {...resource} />;
        case locales.zh_cn:
            return <KenoProMaxGuideZHCN {...resource} />;
        case locales.zh_tw:
            return <KenoProMaxGuideZHTW {...resource} />;
        default:
            return (
                <TolgeeProvider tolgee={tolgee}>
                    <KenoProMaxGameGuideContent {...resource} />
                </TolgeeProvider>
            );
    }
};
export default KenoProMaxGuide;
