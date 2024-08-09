import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { isUseTolgeeStatic, TolgeeConfig } from "../common/constants";

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

    return tolgee;
};

export default initTolgee;
