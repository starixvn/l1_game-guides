import { IMd5Resources } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { vi } from "./vi";
import { getTranslationResource } from "../../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IMd5Resources } = {
    en: en,
    vi: vi,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
};

export const getBaseMD5TranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IMd5Resources>(langKey, supportedLanguages, en);
};
