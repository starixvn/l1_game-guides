import React, { useEffect, useState } from "react";
import { getGameConfigProject } from "../../index.helper";

import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import ColorGameMiniContents from "./contents";
import { GameConfigs, GameGuideBase } from "../../game-guide/type";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["ColorGameInstant"],
        defaultNs: "ColorGameInstant",
    });
const ColorGameMiniGuide = (props: GameGuideBase) => {
    const { gameConfigs, project, dynamic, isGetGameConfigs, userStakeLevel } = props;
    const [configs, setConfigs] = useState<GameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("color-game", project, setConfigs);
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
            <ColorGameMiniContents {...{ gameConfigs: configs, userStakeLevel }} />
        </TolgeeProvider>
    );
};

export default ColorGameMiniGuide;
