import { baccaratResourcesTh } from "./th";
import { baccaratResourcesEn } from "./en";
import { baccaratResourcesId } from "./id";
import { baccaratResourcesCn } from "./cn";
import { baccaratResourcesTw } from "./tw";
import { baccaratResourcesVi } from "./vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { IMd5BaccaratResources } from "./types";

const supportedLanguages: { [name: string]: IMd5BaccaratResources } = {
    en: baccaratResourcesEn,
    th: baccaratResourcesTh,
    id: baccaratResourcesId,
    vi: baccaratResourcesVi,
    zh_cn: baccaratResourcesCn,
    zh_tw: baccaratResourcesTw,
};

export const getBaccaratTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IMd5BaccaratResources>(langKey, supportedLanguages, baccaratResourcesEn);
};
