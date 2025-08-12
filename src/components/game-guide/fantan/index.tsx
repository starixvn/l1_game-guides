import { useEffect, useMemo, useState } from "react";

import { TolgeeInstance, TolgeeProvider } from "@tolgee/react";
import { locales } from "../../../common/constants";
import { numberWithCommas } from "../../../helpers/number-helper";
import initTolgee from "../../../helpers/tolgee-helper";
import { UserStakeLevelProps } from "../../../pages";
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../type";
import FanTanContent from "./content-tolgee";
import FanTanTemplate from "./templates/default";
import FanTanGuideVI from "./templates/vi";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const isTolgeeSupportLanguage = (languageTag: string) => {
    return !["th", "id", "vi", "zh_cn", "zh_tw"].includes(languageTag);
};

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetStake = userStakeLevel?.maxBet ?? maxBet;
    const maxBetMain = numberWithCommas(Math.min(maxBetStake, maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetEven = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.even));
    const maxBetFan1 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.fan1));
    const maxBetKwok12 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices?.kwok12 ?? 0));
    const maxBetChun123 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.chun123));

    return { maxBetMain, minBetMain, maxBetEven, maxBetFan1, maxBetKwok12, maxBetChun123 };
};

const FantanGuide = (props: GameGuideBase) => {
    const {
        locale,
        userStakeLevel,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isGetGameConfigs,
        environment,
        project,
        fractionalOddsFormat,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps | undefined>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fantan", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            gameConfigs.odds = gameConfigs.odds;
            setConfigs(gameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();
    }, []);

    const tolgee = useMemo(() => {
        if (isTolgeeSupportLanguage(locale || "en")) {
            return initTolgee(["FanTan"], locale || "en", "en");
        }
        return null;
    }, [locale]);

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
        userStakeLevel,
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        environment,
        fractionalOddsFormat,
        locale: props.locale,
    };

    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee as TolgeeInstance}>
                <FanTanContent
                    locale={locale}
                    userStakeLevel={userStakeLevel}
                    gameConfigs={gameConfigs}
                    gameNameTranslate={gameNameTranslate}
                    gameName={gameNameTranslate}
                    dynamic={dynamic}
                    isGetGameConfigs={isGetGameConfigs}
                    environment={environment}
                    project={project}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    if (locale === locales.vi) {
        return <FanTanGuideVI {...resource} />;
    }
    return <FanTanTemplate {...resource} />;
};
export default FantanGuide;
