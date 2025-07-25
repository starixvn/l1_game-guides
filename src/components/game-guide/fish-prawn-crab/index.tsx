import React, { useEffect, useState } from "react";

import FishPrawnCrabGuideEN from "./en";
import FishPrawnCrabGuideVI from "./vi";
import FishPrawnCrabGuideID from "./id";
import FishPrawnCrabGuideTH from "./th";
import FishPrawnCrabGuideCN from "./zh_cn";
import FishPrawnCrabGuideTW from "./zh_tw";
import { GameGuideBase } from "../type";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { locales } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import { InContextTools } from "@tolgee/web/tools";
import { TolgeeConfig } from "../../../common/constants";
import FishPrawnCrabGameGuideContent from "./content-tolgee";
import appSettings from "../../../common/app-settings";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetChoice = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.crab));

    return { maxBetMain, minBetMain, maxBetChoice };
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

const FishPrawnCrab = (props: GameGuideBase) => {
    const {
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        userStakeLevel,
        isGetGameConfigs,
        environment,
        project,
        fractionalOddsFormat,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("fish-prawn-crab", project, setConfigs);
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
        environment,
        fractionalOddsFormat,
        locale,
    };

    switch (locale) {
        case locales.vi:
            return <FishPrawnCrabGuideVI {...resource} />;
        case locales.id:
            return <FishPrawnCrabGuideID {...resource} />;
        case locales.th:
            return <FishPrawnCrabGuideTH {...resource} />;
        case locales.zh_cn:
            return <FishPrawnCrabGuideCN {...resource} />;
        case locales.zh_tw:
            return <FishPrawnCrabGuideTW {...resource} />;
        default:
            return (
                <TolgeeProvider tolgee={tolgee}>
                    <FishPrawnCrabGameGuideContent
                        gameConfigs={configs}
                        maxBetFollowChoice={maxBetFollowChoice}
                        fractionalOddsFormat={fractionalOddsFormat}
                        displayName={gameNameTranslate}
                        environment={environment}
                        locale={locale}
                    />
                </TolgeeProvider>
            );
    }
};
export default FishPrawnCrab;
