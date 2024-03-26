import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee } from "@tolgee/react";
import appSettings from "../common/app-settings";
import { TolgeeConfig } from "../common/constants";
import { InContextTools } from "@tolgee/web/tools";

const initTolgee = (ns: string[]) => {
    const tolgee = Tolgee()
        .use(FormatIcu())
        .use(BackendFetch())
        .init({
            availableLanguages: ["en", "vi", "id", "th", "zh-cn", "zh-tw"],
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
