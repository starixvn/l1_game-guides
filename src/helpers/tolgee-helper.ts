import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee } from "@tolgee/react";

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

    return tolgee;
};

export default initTolgee;
