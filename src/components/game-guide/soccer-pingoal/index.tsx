import { TolgeeProvider } from "@tolgee/react";
import { useEffect, useState } from "react";
import initTolgee from "../../../helpers/tolgee-helper";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import Content from "./content";
import { SOCCER_PIN_GOAL } from "./namespace-tolgee";

const GAME_NAME = "soccer-pingoal";
const tolgee = initTolgee([SOCCER_PIN_GOAL]);

export interface RangeValue {
    min?: number;
    max?: number;
    value?: number;
}

export interface HalfMatchOddsRange {
    home: RangeValue;
    away: RangeValue;
    draw: RangeValue;
    over: RangeValue;
    under: RangeValue;
    odd: RangeValue;
    even: RangeValue;
}

export interface MarbleFootbal2OddsRangeProps {
    prematch: HalfMatchOddsRange;
    live: HalfMatchOddsRange;
}

export interface MarbleFootball2GameConfigs extends GameConfigs {
    oddsRange: MarbleFootbal2OddsRangeProps;
}

const SoccerPinGoalGameGuide = ({
    gameConfigs,
    project,
    dynamic,
    isGetGameConfigs,
    fractionalOddsFormat,
    userStakeLevel,
}: GameGuideBase) => {
    const [configs, setConfigs] = useState<MarbleFootball2GameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject(GAME_NAME, project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs as MarbleFootball2GameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs as MarbleFootball2GameConfigs);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();

        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <Content {...{ gameConfigs: configs, fractionalOddsFormat, userStakeLevel }} />
        </TolgeeProvider>
    );
};

export default SoccerPinGoalGameGuide;
