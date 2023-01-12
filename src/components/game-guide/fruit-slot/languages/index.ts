import { IFruitSlotTranslationResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { getTranslationResource } from "../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IFruitSlotTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
};

export const getFruitSlotTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IFruitSlotTranslationResource>(langKey, supportedLanguages, en);
};
