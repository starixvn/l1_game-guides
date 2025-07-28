import React, { useEffect, useState } from "react";

import ThreeCardsGuideEN from "./en";
import ThreeCardsGuideVI from "./vi";
import ThreeCardsGuideID from "./id";
import ThreeCardsGuideTH from "./th";
import ThreeCardsGuideZH_CN from "./zh_cn";
import ThreeCardsGuideZH_TW from "./zh_tw";

import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { numberWithCommas } from "../../../helpers/number-helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { UserStakeLevelProps } from "../../../pages";
import { getGameConfigProject } from "../../index.helper";
import ThreeCardsGuideJA from "./ja";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import { InContextTools } from "@tolgee/web/tools";
import { TolgeeConfig } from "../../../common/constants";
import ThreeCardsGameGuideContent from "./content-tolgee";
import appSettings from "../../../common/app-settings";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetRed = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.red));
    const maxBetDiamonds = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.diamonds));

    return {
        maxBetMain,
        minBetMain,
        maxBetRed,
        maxBetDiamonds,
    };
};

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "id", "th", "zh-cn", "zh-tw", "ja"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["SeDie", "Common"],
        defaultNs: "SeDie",
    });

if (!appSettings.useTolgeeStatic) {
    tolgee.addPlugin(
        InContextTools({
            credentials: {
                apiUrl: TolgeeConfig.url,
                apiKey: TolgeeConfig.key,
                projectId: TolgeeConfig.projectId,
            },
        })
    );
}

const ThreeCardsGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("three-cards", project, setConfigs);
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

    switch (locale) {
        case locales.vi:
            return (
                <ThreeCardsGuideVI
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.id:
            return (
                <ThreeCardsGuideID
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.th:
            return (
                <ThreeCardsGuideTH
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.zh_cn:
            return (
                <ThreeCardsGuideZH_CN
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        case locales.zh_tw:
            return (
                <ThreeCardsGuideZH_TW
                    gameConfigs={configs}
                    gameName={gameNameTranslate}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
            );
        default:
            return (
                <TolgeeProvider tolgee={tolgee}>
                    <ThreeCardsGameGuideContent
                        gameConfigs={configs}
                        gameName={gameNameTranslate}
                        maxBetFollowChoice={maxBetFollowChoice}
                        fractionalOddsFormat={fractionalOddsFormat}
                    />
                </TolgeeProvider>
            );
    }
};
export default ThreeCardsGuide;
