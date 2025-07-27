import { useEffect, useState } from "react";

import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "../index.helper";
import { GameGuideBase } from "../type";
import MultiplayBigSmallGuideEN from "./en";
import MultiplayBigSmallGuideID from "./id";
import MultiplayBigSmallGuideTH from "./th";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import MultiplayBigSmallGuideVI from "./vi";
import MultiplayBigSmallGuideCN from "./zh_cn";
import MultiplayBigSmallGuideTW from "./zh_tw";
import MultiplayBigSmallGuideTolgeeWrapper from "./tolgee";

const MultiplayBigSmallGuide = (props: GameGuideBase) => {
    const {
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        userStakeLevel,
        isGetGameConfigs,
        isScrollMD5,
        environment,
        project,
        fractionalOddsFormat,
        orientation
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("multiplay-big-small", project, setConfigs);
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

    const resource = {
        gameConfigs: configs,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        isScrollMD5: isScrollMD5,
        environment,
        fractionalOddsFormat,
        locale,
        orientation
    };

    switch (locale) {
        case locales.vi:
            return <MultiplayBigSmallGuideVI {...resource} />;
        case locales.id:
            return <MultiplayBigSmallGuideID {...resource} />;
        case locales.th:
            return <MultiplayBigSmallGuideTH {...resource} />;
        case locales.zh_cn:
            return <MultiplayBigSmallGuideCN {...resource} />;
        case locales.zh_tw:
            return <MultiplayBigSmallGuideTW {...resource} />;

        default:
            return <MultiplayBigSmallGuideTolgeeWrapper {...resource} />;
    }
};
export default MultiplayBigSmallGuide;
