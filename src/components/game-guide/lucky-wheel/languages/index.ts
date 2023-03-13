import { ILuckyWheelTranslationResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./zh-cn";
import { tw } from "./zh-tw";
import { vi } from "./vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: ILuckyWheelTranslationResource } = {
    vi: vi,
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
};

export const getLuckyWheelTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<ILuckyWheelTranslationResource>(langKey, supportedLanguages, en);
};
