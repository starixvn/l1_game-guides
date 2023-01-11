import { INighClubTranslationResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { getTranslationResource } from "../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: INighClubTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
};

export const getNightClubTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<INighClubTranslationResource>(langKey, supportedLanguages, en);
};
