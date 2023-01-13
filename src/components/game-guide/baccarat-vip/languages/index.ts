import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { vi } from "./vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

const supportedLanguages: { [name: string]: IBaseBaccaratResources } = {
    en,
    th,
    id,
    vi,
    zh_cn: cn,
    zh_tw: tw,
};

export const getVipBaccaratTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IBaseBaccaratResources>(langKey, supportedLanguages, en);
};
