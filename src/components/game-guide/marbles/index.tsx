import { useEffect, useState } from "react";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameConfigs, GameGuideBase } from "../type";
import { MARBLES_158 } from "./namespace-tolgee";
import { getGameConfigProject } from "../../index.helper";
import { TolgeeProvider } from "@tolgee/react";
import Content from "./content";

const GAME_NAME = "marbles";
const tolgee = initTolgee([MARBLES_158]);

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

export interface MarblesGameConfigs extends GameConfigs {
    oddsRange: MarbleFootbal2OddsRangeProps;
}


const MarbleFootballGameGuide = ({
    gameConfigs,
    project,
    dynamic,
    isGetGameConfigs,
    fractionalOddsFormat,
    userStakeLevel,
}: GameGuideBase) => {
    const [configs, setConfigs] = useState<MarblesGameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject(GAME_NAME, project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs as MarblesGameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs as MarblesGameConfigs);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();

        if (globalThis?.location?.pathname) {
            tolgee.changeLanguage(globalThis?.location?.pathname.replace("/", ""));
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

export default MarbleFootballGameGuide;
