import { th } from "../../base/base-slot/languages/th";
import { en } from "../../base/base-slot/languages/en";
import { id } from "../../base/base-slot/languages/id";
import { cn } from "../../base/base-slot/languages/cn";
import { tw } from "../../base/base-slot/languages/tw";
import { vi } from "../../base/base-slot/languages/vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { ISlotTranslationResource } from "../../base/base-slot/types";

en.main.description =
    "“Nightclub Lady” is an online slot game with a unique theme - Hot Girls & Dance Club, attractive gameplay and gripping graphics that make the game hot and sexier than ever. " +
    en.main.description;
th.main.description =
    "“Nightclub Lady” is an online slot game with a unique theme - Hot Girls & Dance Club, attractive gameplay and gripping graphics that make the game hot and sexier than ever. " +
    th.main.description;
id.main.description =
    "“Nightclub Lady” is an online slot game with a unique theme - Hot Girls & Dance Club, attractive gameplay and gripping graphics that make the game hot and sexier than ever. " +
    id.main.description;
cn.main.description =
    "“Nightclub Lady” is an online slot game with a unique theme - Hot Girls & Dance Club, attractive gameplay and gripping graphics that make the game hot and sexier than ever. " +
    cn.main.description;
vi.main.description =
    "“Nightclub Lady” is an online slot game with a unique theme - Hot Girls & Dance Club, attractive gameplay and gripping graphics that make the game hot and sexier than ever. " +
    vi.main.description;

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
