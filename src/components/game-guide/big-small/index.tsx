import React, { useEffect, useState } from "react";

import BigSmallGuideEN from "./en";
import BigSmallGuideVI from "./vi";
import BigSmallGuideID from "./id";
import BigSmallGuideTH from "./th";
import BigSmallGuideZH_CN from "./zh_cn";
import BigSmallGuideZH_TW from "./zh_tw";
import { GameGuideBase } from "../type";
import { locales, IObjectKeys } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { getGameConfigProject } from "../../index.helper";
import {  TolgeeProvider } from "@tolgee/react";
import BigSmallGameGuideContent from "./content-tolgee";
import initTolgee from "../../../helpers/tolgee-helper";

export const BigSmallName: IObjectKeys = { taixiu: "taixiu", TXTurbo: "TXTurbo" };

const tolgee = initTolgee(["BigSmall", "Common"]);

const BigSmallGuide = (props: GameGuideBase) => {
    const {
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        gameName,
        userStakeLevel,
        isGetGameConfigs,
        isScrollMD5,
        environment,
        project,
        isInPromotionTime,
        fractionalOddsFormat,
        orientation
    } = props;

    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        let pathName = "big-small";
        if (gameName === BigSmallName.TXTurbo) {
            pathName = "big-small-turbo";
        }

        getGameConfigProject(pathName, project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            gameConfigs.odds = gameConfigs.originalOdds || gameConfigs.odds;
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
        isScrollMD5: isScrollMD5,
        environment,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
        locale,
        orientation
    };

    switch (locale) {
        case locales.vi:
            return <BigSmallGuideVI {...resource} />;
        case locales.id:
            return <BigSmallGuideID {...resource} />;
        case locales.th:
            return <BigSmallGuideTH {...resource} />;
        case locales.zh_cn:
            return <BigSmallGuideZH_CN {...resource} />;
        case locales.zh_tw:
            return <BigSmallGuideZH_TW {...resource} />;

        default:
            return (
                <TolgeeProvider tolgee={tolgee}>
                    <BigSmallGameGuideContent {...resource} />
                </TolgeeProvider>
            );
    }
};
export default BigSmallGuide;
