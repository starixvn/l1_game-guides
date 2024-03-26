import { FC, useEffect, useState } from "react";
import { GameConfigs, GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import initTolgee from "../../../helpers/tolgee-helper";
import NextBallGameGuideContent from "./content";
import { TolgeeProvider } from "@tolgee/react";
import { NextBall } from "./constants";

const tolgee = initTolgee([NextBall]);

const BacBallGameGuide: FC<GameGuideBase> = ({ gameConfigs, project, dynamic, isGetGameConfigs, userStakeLevel, fractionalOddsFormat }) => {
    const [configs, setConfigs] = useState<GameConfigs>();

    const getLocalGameConfigs = () => {
        console.log("getLocalGameConfigs", project);
        getGameConfigProject("next-ball", project, setConfigs);
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
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
        }
    }, [configs]);

    useEffect(() => {
        getLocalGameConfigs();

        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    if (!configs) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee}>
            <NextBallGameGuideContent userStakeLevel={userStakeLevel} gameConfigs={configs} fractionalOddsFormat={fractionalOddsFormat} />
        </TolgeeProvider>
    );
};

export default BacBallGameGuide;
