import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee } from "@tolgee/react";
import { AVAILABLE_LANGUAGES } from "../common/constants";

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

    return tolgee;
};

export default initTolgee;
