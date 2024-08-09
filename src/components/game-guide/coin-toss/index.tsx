import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import { isUseTolgeeStatic, TolgeeConfig } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import Contents from "./contents";

const ns = "CoinToss";
const folderName = "coin-toss";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: [ns, "Common"],
        defaultNs: ns,
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

const Guide = (props: GameGuideBase) => {
    const { gameConfigs, project, dynamic, isGetGameConfigs, fractionalOddsFormat, userStakeLevel } = props;
    const [configs, setConfigs] = useState<GameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject(folderName, project, setConfigs);
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
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <Contents {...{ gameConfigs: configs, fractionalOddsFormat, locale: tolgee.getLanguage(), userStakeLevel }} />
        </TolgeeProvider>
    );
};

export default Guide;
