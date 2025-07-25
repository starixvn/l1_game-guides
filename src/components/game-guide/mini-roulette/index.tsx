import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import appSettings from "../../../common/app-settings";
import { AVAILABLE_LANGUAGES, TolgeeConfig } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import LangliveStyleOverride from "../../shared/langlive-style-override";
import { GameConfigs, GameGuideBase } from "../type";
import MiniRouletteContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: AVAILABLE_LANGUAGES,
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["MiniRoulette", "Common"],
        defaultNs: "MiniRoulette",
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

const MiniRouletteGuide = (props: GameGuideBase) => {
    const {
        gameConfigs,
        gameSetting,
        project,
        dynamic,
        isGetGameConfigs,
        fractionalOddsFormat,
        userStakeLevel,
        isScrollMD5,
        displayName,
        name,
        scrollToId,
    } = props;
    const [configs, setConfigs] = useState<GameConfigs>();

    const scrollbarStyles = `
        [data-theme="lang-live"] {
            --scrollbar-background: #d9d9d980;
            --scrollbar-thumb-background: #fff;
        }

        [data-theme="lang-live"] ::-webkit-scrollbar {
            width: 1rem;
            border-radius: 0.5rem;
        }

        [data-theme="lang-live"] ::-webkit-scrollbar-thumb {
            border-radius: 0.5rem;
        }
    `;

    useEffect(() => {
        const originalHtmlFont = document.documentElement.style.fontFamily;
        const originalBodyFont = document.body.style.fontFamily;

        document.documentElement.style.fontFamily = "'PingFangRegular', sans-serif";
        document.body.style.fontFamily = "'PingFangRegular', sans-serif";

        return () => {
            document.documentElement.style.fontFamily = originalHtmlFont;
            document.body.style.fontFamily = originalBodyFont;
        };
    }, []);

    const getLocalGameConfigs = () => {
        getGameConfigProject("mini-roulette", project, setConfigs);
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
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    useEffect(() => {
        isGetGameConfigs && getDynamicGameConfig();
    }, [configs]);

    if (!configs) {
        return <></>;
    } else {
        return (
            <>
                <LangliveStyleOverride styles={scrollbarStyles} />
                <TolgeeProvider tolgee={tolgee} fallback="">
                    <MiniRouletteContents
                        {...{
                            gameConfigs: configs,
                            fractionalOddsFormat,
                            locale: tolgee.getLanguage(),
                            userStakeLevel,
                            isScrollMD5,
                            displayName,
                            name: name ?? gameSetting?.Name,
                            scrollToId,
                        }}
                    />
                </TolgeeProvider>
            </>
        );
    }
};

export default MiniRouletteGuide;
