import { getTranslationResource } from "../../../../../helpers/resource-helper";
import { baseTermAndConditionCn } from "./cn";
import { baseTermAndConditionEn } from "./en";
import { baseTermAndConditionId } from "./id";
import { baseTermAndConditionTh } from "./th";
import { baseTermAndConditionTw } from "./tw";
import { IBaseTermAndConditionResources } from "./types";
import { baseTermAndConditionVi } from "./vi";

const supportedMd5Languages: { [name: string]: IBaseTermAndConditionResources } = {
    en: baseTermAndConditionEn,
    th: baseTermAndConditionTh,
    id: baseTermAndConditionId,
    vi: baseTermAndConditionVi,
    zh_cn: baseTermAndConditionCn,
    zh_tw: baseTermAndConditionTw,
};

export const getTermsAndConditionsResource = (langKey: string | undefined) => {
    return getTranslationResource<IBaseTermAndConditionResources>(langKey, supportedMd5Languages, baseTermAndConditionEn);
};
