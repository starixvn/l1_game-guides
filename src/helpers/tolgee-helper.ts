import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import appSettings from "../common/app-settings";
import { AVAILABLE_LANGUAGES, TolgeeConfig } from "../common/constants";

const initTolgee = (ns: string[]) => {
    const tolgee = Tolgee()
        .use(FormatIcu())
        .use(BackendFetch())
        .init({
            availableLanguages: AVAILABLE_LANGUAGES,
            fallbackLanguage: "en",
            defaultLanguage: "en",
            ns: ["Common", ...ns],
            defaultNs: "Common",
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

    return tolgee;
};

export default initTolgee;
