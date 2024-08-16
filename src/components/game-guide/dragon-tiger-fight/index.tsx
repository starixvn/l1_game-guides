import React, { useEffect, useState } from "react";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import DragonTigerFightContents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["DragonTigerFight", "Common"],
        defaultNs: "DragonTigerFight",
    });


export const getImageDirectoryName = (): string => {
    return "/static/images/dragon-tiger-fight-new";
};

const DragontigerFightGuide = (props: GameGuideBase) => {
    const { gameConfigs, project, dynamic, isGetGameConfigs, fractionalOddsFormat, userStakeLevel } = props;
    const [configs, setConfigs] = useState<GameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("dragon-tiger-fight", project, setConfigs);
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
            <DragonTigerFightContents {...{ gameConfigs: configs, fractionalOddsFormat, locale: tolgee.getLanguage(), userStakeLevel }} />
        </TolgeeProvider>
    );
};

export default DragontigerFightGuide;
