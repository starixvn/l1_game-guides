import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { useEffect } from "react";

import { isUseTolgeeStatic, TolgeeConfig } from "../../../common/constants";
import { GameGuideBase } from "../type";
import Contents from "./contents";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Classicslot", "Common"],
        defaultNs: "Classicslot",
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

const ClassicSlotGuide = (props: GameGuideBase) => {
    const { name, gameSetting, displayName, jackpot, locale } = props;

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
                locale={locale || ""}
            />
        </TolgeeProvider>
    );
};
export default ClassicSlotGuide;
