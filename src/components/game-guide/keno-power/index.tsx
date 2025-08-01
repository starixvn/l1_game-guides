import React, { useEffect, useState } from "react";

import { UserStakeLevelProps } from "../../../pages";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import KenoPowerGuideTemplate from "./templates";
import KenoPowerTolgeeTemplate from "./templates/tolgee-template";
import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";

const tolgee = initTolgee(["KenoPower", "Common"]);

const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetRound = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetBlueChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blue));
    const maxBetBlueRedChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blueBig));

    return { maxBetRound, minBetRound, maxBetBlueChoice, maxBetBlueRedChoice };
};

const KenoPowerGuide = (props: GameGuideBase) => {
    const { id, locale, userStakeLevel, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project, fractionalOddsFormat, environment } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("keno-power", project, setConfigs);
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
            <KenoPowerGuideTemplate
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
            <KenoPowerTolgeeTemplate
                locale={locale}
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                environment={environment}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        </TolgeeProvider>
    );
};

export default KenoPowerGuide;
