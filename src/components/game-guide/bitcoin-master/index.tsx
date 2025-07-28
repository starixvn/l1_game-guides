import React, { useEffect, useState } from "react";

import { GameGuideBase } from "../type";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import BitcoinMasterTemplate from "./templates/default";
import { getGameConfigProject } from "../../index.helper";
import initTolgee from "../../../helpers/tolgee-helper";
import { TolgeeProvider } from "@tolgee/react";
import BitcoinMasterContent from "./content-tolgee";

const tolgee = initTolgee(["BitcoinMaster"]);

const isTolgeeSupportLanguage = (languageTag: string) => {
    return !["th", "id", "vi", "zh_cn", "zh_tw"].includes(languageTag);
};

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetUp = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.up));

    return { maxBetMain, minBetMain, maxBetUp };
};

const BitcoinMasterGuide = (props: GameGuideBase) => {
    const { locale, gameNameTranslate, userStakeLevel, gameConfigs, dynamic, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("bitcoin-master", project, setConfigs);
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
        const languageTag = locale || "vi";
        if (isTolgeeSupportLanguage(languageTag)) {
            tolgee.changeLanguage(languageTag);
        }
    }, [locale]);

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

    return isTolgeeSupportLanguage(locale || "vi") ? (
        <TolgeeProvider tolgee={tolgee}>
            <BitcoinMasterContent {...props} />
        </TolgeeProvider>
    ) : (
        <BitcoinMasterTemplate
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            fractionalOddsFormat={fractionalOddsFormat}
            locale={locale}
        />
    );
};

export default BitcoinMasterGuide;
