import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import { isUseTolgeeStatic, TolgeeConfig } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import { handleMaxBetChoice } from "../index.helper";
import { GameGuideBase } from "../type";
import Contents from "./content";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Pontoon", "Common"],
        defaultNs: "Pontoon",
    });

if (!isUseTolgeeStatic) {
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

const PontoonGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("pontoon", project, setConfigs);
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

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <Contents
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        </TolgeeProvider>
    );
};

export default PontoonGuide;
