import { useEffect, useState } from "react";
import initTolgee from "../../../helpers/tolgee-helper";
import { GameConfigs, GameGuideBase } from "../type";
import { MARBLE_FOOTBALL2 } from "./namespace-tolgee";
import { getGameConfigProject } from "../../index.helper";
import { TolgeeProvider } from "@tolgee/react";
import MarbleFootballContent from "./content";

const GAME_NAME = "marble-football2";
const tolgee = initTolgee([MARBLE_FOOTBALL2]);

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


const MarbleFootballGameGuide = ({
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
            <MarbleFootballContent {...{ gameConfigs: configs, fractionalOddsFormat, userStakeLevel }} />
        </TolgeeProvider>
    );
};

export default MarbleFootballGameGuide;
