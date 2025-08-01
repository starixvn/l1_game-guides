import { IPowerSoccerTranslationResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { vi } from "./vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IPowerSoccerTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi,
};

export const getPowerSoccerTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IPowerSoccerTranslationResource>(langKey, supportedLanguages, en);
};
