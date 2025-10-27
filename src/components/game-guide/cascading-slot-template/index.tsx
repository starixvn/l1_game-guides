import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect, useState } from "react";
import appSettings from "../../../common/app-settings";
import { AVAILABLE_LANGUAGES, TolgeeConfig } from "../../../common/constants";
import { getGameConfigProject } from "../../index.helper";
import { GameGuideBase } from "../type";
import Contents from "./contents";
import { GameConfigProps } from "./type";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: AVAILABLE_LANGUAGES,
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
    const { name, gameSetting, displayName, gameConfigs, project, dynamic, isGetGameConfigs, locale } = props;

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
    }, []);

    useEffect(() => {
        const targetLanguage = locale || window?.location?.pathname.replace("/", "");
        if (targetLanguage) {
            tolgee.changeLanguage(targetLanguage);
        }
    }, [locale]);

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
                gameSetting={gameSetting}
                name={name ?? gameSetting?.Name}
                gameConfigs={configs}
            />
        </TolgeeProvider>
    );
};

export default CascadingSlotGuide;
