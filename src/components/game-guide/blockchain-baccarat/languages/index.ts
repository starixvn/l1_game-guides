import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { vi } from "./vi";
import { IBlockchainBaccaratResources } from "./types";
import { getTranslationResource } from "../../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IBlockchainBaccaratResources } = {
    en,
    th,
    id,
    vi,
    zh_cn: cn,
    zh_tw: tw,
};

export const getBlockchainBaccaratTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IBlockchainBaccaratResources>(langKey, supportedLanguages, en);
};
