import { useEffect, useState } from "react";

import { TolgeeProvider } from "@tolgee/react";
import { numberWithCommas } from "../../../helpers/number-helper";
import initTolgee from "../../../helpers/tolgee-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameGuideBase } from "../../game-guide/type";
import { getGameConfigProject, isTolgeeSupportLanguage } from "../../index.helper";
import FishPrawnCrabMiniContent from "./content-tolgee";
import FishPrawnCrabMiniGuideTemplate from "./template";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const tolgee = initTolgee(["FishPrawnCrabMini"]);

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.crab));

    return { maxBetMain, minBetMain, maxBetChoice };
};

const FishPrawnCrabMiniGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, userStakeLevel, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fish-prawn-crab", project, setConfigs, "game-guide-mini");
    };

    const getDynamicGameConfig = () => {
        setConfigs(gameConfigs);
    };

    useEffect(() => {
        getLocalGameConfigs();
    }, []);

    useEffect(() => {
        const languageTag = locale || "vi";
        if (isTolgeeSupportLanguage(languageTag)) {
            tolgee.changeLanguage(languageTag);
        }
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
        gameName: gameNameTranslate,
        maxBetFollowChoice,
        locale,
    };

    if (locale && isTolgeeSupportLanguage(locale)) {
        return (
            <TolgeeProvider tolgee={tolgee}>
                <FishPrawnCrabMiniContent
                    locale={locale}
                    gameConfigs={gameConfigs}
                    gameNameTranslate={gameNameTranslate}
                    gameName={gameNameTranslate}
                    dynamic={props.dynamic}
                    isGetGameConfigs={isGetGameConfigs}
                    project={project}
                    userStakeLevel={userStakeLevel}
                    environment={props.environment}
                    isInPromotionTime={props.isInPromotionTime}
                    fractionalOddsFormat={props.fractionalOddsFormat}
                    tolgee={tolgee}
                />
            </TolgeeProvider>
        );
    }

    // Fallback to static translations for unsupported languages
    return <FishPrawnCrabMiniGuideTemplate {...resource} />;
};
export default FishPrawnCrabMiniGuide;
