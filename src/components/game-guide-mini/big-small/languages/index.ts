import { IBigSmallMiniTranslationResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./zh-cn";
import { tw } from "./zh-tw";
import { vi } from "./vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IBigSmallMiniTranslationResource } = {
    vi: vi,
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
};

export const getBigSmallMiniTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IBigSmallMiniTranslationResource>(langKey, supportedLanguages, en);
};
