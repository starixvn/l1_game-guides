import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect } from "react";

import appSettings from "../../../common/app-settings";
import { AVAILABLE_LANGUAGES, TolgeeConfig } from "../../../common/constants";
import { GameGuideBase } from "../type";
import Contents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: AVAILABLE_LANGUAGES,
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Classicslot", "Common"],
        defaultNs: "Classicslot",
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

const ClassicSlotGuide = (props: GameGuideBase) => {
    const { name, gameSetting, displayName, jackpot, jackpotConfigs, locale, gameConfigs } = props;

    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <Contents
                displayName={displayName || ""}
                odds={gameSetting?.SlotsConfig?.Icons}
                name={name ?? gameSetting?.Name}
                jackpot={jackpot || false}
                jackpotConfigs={jackpotConfigs || { winningRatio: 0, pools: [] }}
                locale={locale || ""}
                gameConfigs={gameConfigs}
            />
        </TolgeeProvider>
    );
};
export default ClassicSlotGuide;
