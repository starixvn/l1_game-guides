import React, { useEffect, useState } from "react";
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../type";
import Contents from "./contents";
import { GameConfigProps } from "./type";
import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { TolgeeConfig } from "../../../common/constants";
import appSettings from "../../../common/app-settings";
import { InContextTools } from "@tolgee/web/tools";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["cascadingslot", "Common"],
        defaultNs: "cascadingslot",
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

const CascadingSlotGuide = (props: GameGuideBase) => {
    const { name, gameSetting, displayName, gameConfigs, project, dynamic, isGetGameConfigs } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("cascading-slot-template", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs as any);
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
            <Contents
                displayName={displayName || ""}
                gameSettings={gameSetting?.CascadingSlotsConfig}
                name={name ?? gameSetting?.Name}
                gameConfigs={configs}
            />
        </TolgeeProvider>
    );
};

export default CascadingSlotGuide;
