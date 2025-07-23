import { baccaratResourcesTh } from "./th";
import { baccaratResourcesEn } from "./en";
import { baccaratResourcesId } from "./id";
import { baccaratResourcesCn } from "./cn";
import { baccaratResourcesTw } from "./tw";
import { baccaratResourcesVi } from "./vi";
import { baccaratResourcesJa } from "./ja";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

const supportedLanguages: { [name: string]: IBaseBaccaratResources } = {
    en: baccaratResourcesEn,
    th: baccaratResourcesTh,
    id: baccaratResourcesId,
    vi: baccaratResourcesVi,
    zh_cn: baccaratResourcesCn,
    zh_tw: baccaratResourcesTw,
    ja: baccaratResourcesJa,
};

export const getBaccaratTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IBaseBaccaratResources>(langKey, supportedLanguages, baccaratResourcesEn);
};
