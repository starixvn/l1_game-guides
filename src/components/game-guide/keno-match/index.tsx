import React, { useEffect, useState } from "react";

import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import KenoMatchGuideTemplate from "./template";
import KenoMatchTolgeeTemplate from "./template/tolgee-template";
import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";

const tolgee = initTolgee(["KenoSoccer", "Common"]);

const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

export const minPayoutBlue = 1.06;
export const minPayoutRed = 1.06;
export const minPayoutOver = 1.05;
export const minPayoutUnder = 1.04;

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetRound = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetBlueChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhBlue));
    const maxBetRedChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhRed));
    const maxBetOverChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhOver));
    const maxBetUnderChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhUnder));
    const maxBetEvenChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fhEven));
    const maxBetEvenLiveChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.liveFTEven));

    return {
        maxBetRound,
        minBetRound,
        maxBetBlueChoice,
        maxBetRedChoice,
        maxBetOverChoice,
        maxBetUnderChoice,
        maxBetEvenChoice,
        maxBetEvenLiveChoice,
    };
};

const KenoMatchGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project, fractionalOddsFormat, environment } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("keno-match", project, setConfigs);
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

    useEffect(() => {
        if (isTolgeeSupportLanguage()) {
            tolgee.changeLanguage(locale || "en");
        }
    }, [locale]);

    const isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(locale || "en");
    };

    if (!configs) {
        return <></>;
    }

    // For non-Tolgee languages, use the default template
    if (!isTolgeeSupportLanguage()) {
        return (
            <KenoMatchGuideTemplate
                gameConfigs={configs}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
                fractionalOddsFormat={fractionalOddsFormat}
                locale={locale}
            />
        );
    }

    // For Tolgee-supported languages, use the Tolgee template
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <KenoMatchTolgeeTemplate
                gameConfigs={configs}
                userStakeLevel={userStakeLevel}
                gameName={gameNameTranslate}
                gameId={id}
                maxBetFollowChoice={maxBetFollowChoice}
                fractionalOddsFormat={fractionalOddsFormat}
                locale={locale}
            />
        </TolgeeProvider>
    );
};
export default KenoMatchGuide;
