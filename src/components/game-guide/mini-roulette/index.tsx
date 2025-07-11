import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import appSettings from "../../../common/app-settings";
import { TolgeeConfig } from "../../../common/constants";
import LangliveStyleOverride from "../../shared/langlive-style-override";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import MiniRouletteContents from "./contents";
import Styles from "./mini-roulette.module.scss";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
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
            --scrollbar-background: #d9d9d9;
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
                <div className={Styles.miniRouletteContainer}>
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
                </div>
            </>
        );
    }
};

export default MiniRouletteGuide;
