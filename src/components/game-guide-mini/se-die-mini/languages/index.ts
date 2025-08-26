import { getTranslationResource } from "../../../../helpers/resource-helper";
import { en } from "./en";
import { id } from "./id";
import { th } from "./th";
import { ISeDieMiniTranslationResource } from "./types";
import { vi } from "./vi";
import { cn } from "./zh-cn";
import { tw } from "./zh-tw";

const supportedLanguages: { [name: string]: ISeDieMiniTranslationResource } = {
    vi: vi,
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
};

export const getSeDieMiniTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<ISeDieMiniTranslationResource>(langKey, supportedLanguages, en);
};
