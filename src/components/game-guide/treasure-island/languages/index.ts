import { getTranslationResource } from "../../../../helpers/resource-helper";
import { en } from "./en";
import { th } from "./th";
import { vi } from "./vi";
import { cn } from "./cn";
import { tw } from "./tw";
import { id } from "./id";
import Styles from "../treasure-island.module.scss";

import { TreasureIslandLanguage } from "./types";

const supportedLanguages: { [name: string]: TreasureIslandLanguage } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi: vi,
};

export const getTreasureIslandTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<TreasureIslandLanguage>(langKey, supportedLanguages, en);
};

export const getStyles = () => {
    return Styles;
};
