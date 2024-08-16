import React, { useEffect, useState } from "react";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
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
