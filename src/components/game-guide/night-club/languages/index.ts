import { th } from "../../base/base-slot/languages/th";
import { en } from "../../base/base-slot/languages/en";
import { id } from "../../base/base-slot/languages/id";
import { cn } from "../../base/base-slot/languages/cn";
import { tw } from "../../base/base-slot/languages/tw";
import { vi } from "../../base/base-slot/languages/vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { ISlotTranslationResource } from "../../base/base-slot/types";

const supportedLanguages: { [name: string]: ISlotTranslationResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi: vi,
};

export const getNightClubTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<ISlotTranslationResource>(langKey, supportedLanguages, en);
};
