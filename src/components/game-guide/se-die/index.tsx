import React, { useEffect, useState } from "react";

import SeDieGuideVI from "./vi";
import SeDieGuideTH from "./th";
import SeDieGuideID from "./id";
import SeDieGuideZH_CN from "./zh_cn";
import SeDieGuideZH_TW from "./zh_tw";
import { locales } from "../../../common/constants";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "../../shared/se-die";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import { InContextTools } from "@tolgee/web/tools";
import { TolgeeConfig } from "../../../common/constants";
import SeDieGameGuideContent from "./content-tolgee";
import appSettings from "../../../common/app-settings";

export const SeDieVip = [22];
export const SeDieMini = [9, 56, 57, 58];

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

const SeDieGuide = (props: GameGuideBase) => {
    const {
        id,
        locale,
        userStakeLevel,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        isGetGameConfigs,
        isScrollMD5,
        environment,
        project,
        isInPromotionTime,
        fractionalOddsFormat,
        orientation,
    } = props;

    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        let pathName = "";
        switch (id) {
            case 9:
                pathName = "se-die-mini";
                break;
            case 22:
                pathName = "se-die-vip";
                break;

            default:
                pathName = "se-die";
                break;
        }

        getGameConfigProject(pathName, project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            gameConfigs.odds = gameConfigs.originalOdds || gameConfigs.odds;
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
        userStakeLevel,
        gameName: gameNameTranslate,
        gameId: id,
        maxBetFollowChoice,
        isScrollMD5: isScrollMD5,
        environment,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
        locale,
        orientation,
    };

    switch (locale) {
        case locales.vi:
            return <SeDieGuideVI {...resource} />;
        case locales.id:
            return <SeDieGuideID {...resource} />;
        case locales.th:
            return <SeDieGuideTH {...resource} />;
        case locales.zh_cn:
            return <SeDieGuideZH_CN {...resource} />;
        case locales.zh_tw:
            return <SeDieGuideZH_TW {...resource} />;
        default:
            return (
                <TolgeeProvider tolgee={tolgee}>
                    <SeDieGameGuideContent {...resource}/>
                </TolgeeProvider>
            );
    }
};

export default SeDieGuide;
