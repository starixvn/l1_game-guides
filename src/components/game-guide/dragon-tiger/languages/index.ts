import { IDragonTigerTranslationResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./zh-cn";
import { tw } from "./zh-tw";
import { ja } from "./ja";
import { getTranslationResource } from "../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IDragonTigerTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    ja: ja,
};

export const getDragonTigerTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IDragonTigerTranslationResource>(langKey, supportedLanguages, en);
};
