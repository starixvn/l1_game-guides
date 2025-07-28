import React, { useEffect, useMemo, useState } from "react";
import { useTolgee } from "@tolgee/react";
import { GameGuideBase } from "../type";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { generateBitcoinMasterTolgeeTranslationResource } from "./languages/tolgee";
import BitcoinMasterTemplate from "./templates/default";
import { getGameConfigProject } from "../../index.helper";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetUp = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.up));

    return { maxBetMain, minBetMain, maxBetUp };
};

const BitcoinMasterContent = (props: GameGuideBase) => {
    const { locale, gameNameTranslate, userStakeLevel, gameConfigs, dynamic, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const tolgee = useTolgee();

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

    // Generate translation resource using Tolgee within the provider context
    const translationResource = useMemo(() => {
        if (tolgee) {
            return generateBitcoinMasterTolgeeTranslationResource(tolgee);
        }
        return undefined;
    }, [tolgee]);

    if (!configs) {
        return <></>;
    }

    return (
        <BitcoinMasterTemplate
            gameConfigs={configs}
            gameName={gameNameTranslate}
            maxBetFollowChoice={maxBetFollowChoice}
            fractionalOddsFormat={fractionalOddsFormat}
            locale={locale}
            translationResource={translationResource}
        />
    );
};

export default BitcoinMasterContent;
