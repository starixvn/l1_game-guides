import { useEffect, useState } from "react";

import { TolgeeProvider } from "@tolgee/react";
import { locales } from "../../../common/constants";
import { numberWithCommas } from "../../../helpers/number-helper";
import initTolgee from "../../../helpers/tolgee-helper";
import { UserStakeLevelProps } from "../../../pages";
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../type";
import RouletteGuideID from "./id";
import RouletteGuideTH from "./th";
import RouletteGuideTolgee from "./tolgee";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import RouletteGuideVI from "./vi";
import RouletteGuideCN from "./zh_cn";
import RouletteGuideTW from "./zh_tw";

export const NAMESPACE = "OldRoulette";
const tolgee = initTolgee([NAMESPACE]);

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetStraightUp = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.straightUp));
    const maxBetSplit = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.split));
    const maxBetStreet = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.street));
    const maxBetCorner = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.corner));
    const maxBetLine = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.line));
    const maxBetDozen = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.dozen));
    const maxBetRedBlack = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.redBlack));

    return { maxBetMain, minBetMain, maxBetStraightUp, maxBetSplit, maxBetStreet, maxBetCorner, maxBetLine, maxBetDozen, maxBetRedBlack };
};

const RouletteGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("roulette", project, setConfigs);
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
        fractionalOddsFormat,
        locale,
    };

    switch (locale) {
        case locales.vi:
            return <RouletteGuideVI {...resource} />;
        case locales.id:
            return <RouletteGuideID {...resource} />;
        case locales.th:
            return <RouletteGuideTH {...resource} />;
        case locales.zh_cn:
            return <RouletteGuideCN {...resource} />;
        case locales.zh_tw:
            return <RouletteGuideTW {...resource} />;

        default:
            return (
                <TolgeeProvider tolgee={tolgee}>
                    <RouletteGuideTolgee {...resource} />
                </TolgeeProvider>
            );
    }
};
export default RouletteGuide;
