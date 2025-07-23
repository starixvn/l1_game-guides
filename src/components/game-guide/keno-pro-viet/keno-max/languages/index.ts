import { IKenoTranslationResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { ja } from "./ja";
import { getTranslationResource } from "../../../../../helpers/resource-helper";
import { vi } from "./vi";

const supportedLanguages: { [name: string]: IKenoTranslationResource } = {
    en: en,
    vi: vi,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    ja,
};

export const getKenoTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IKenoTranslationResource>(langKey, supportedLanguages, en);
};
