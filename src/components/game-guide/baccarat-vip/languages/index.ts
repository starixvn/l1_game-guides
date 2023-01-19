import { getTranslationResource } from "../../../../helpers/resource-helper";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";
import { vipBaccaratResourcesCn } from "./cn";
import { vipBaccaratResourcesEn } from "./en";
import { vipBaccaratResourcesId } from "./id";
import { vipBaccaratResourcesTh } from "./th";
import { vipBaccaratResourcesTw } from "./tw";
import { vipBaccaratResourcesVi } from "./vi";

const supportedLanguages: { [name: string]: IBaseBaccaratResources } = {
    en: vipBaccaratResourcesEn,
    th: vipBaccaratResourcesTh,
    id: vipBaccaratResourcesId,
    vi: vipBaccaratResourcesVi,
    zh_cn: vipBaccaratResourcesCn,
    zh_tw: vipBaccaratResourcesTw,
};

export const getVipBaccaratTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IBaseBaccaratResources>(langKey, supportedLanguages, vipBaccaratResourcesEn);
};
