import { baccaratResourcesTh, md5BaccaratResourcesTh } from "./th";
import { baccaratResourcesEn, md5BaccaratResourcesEn } from "./en";
import { baccaratResourcesId, md5BaccaratResourcesId } from "./id";
import { baccaratResourcesCn, md5BaccaratResourcesCn } from "./cn";
import { baccaratResourcesTw, md5BaccaratResourcesTw } from "./tw";
import { baccaratResourcesVi, md5BaccaratResourcesVi } from "./vi";
import { getTranslationResource } from "../../../../helpers/resource-helper";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";
import { IMd5Resources } from "../../base/md5/languages/types";

const supportedLanguages: { [name: string]: IBaseBaccaratResources } = {
    en: baccaratResourcesEn,
    th: baccaratResourcesTh,
    id: baccaratResourcesId,
    vi: baccaratResourcesVi,
    zh_cn: baccaratResourcesCn,
    zh_tw: baccaratResourcesTw,
};

export const getBaccaratTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IBaseBaccaratResources>(langKey, supportedLanguages, baccaratResourcesEn);
};

const supportedMd5Languages: { [name: string]: IMd5Resources } = {
    en: md5BaccaratResourcesEn,
    th: md5BaccaratResourcesTh,
    id: md5BaccaratResourcesId,
    vi: md5BaccaratResourcesVi,
    zh_cn: md5BaccaratResourcesCn,
    zh_tw: md5BaccaratResourcesTw,
};

export const getBaccaratMd5Resource = (langKey: string | undefined) => {
    return getTranslationResource<IMd5Resources>(langKey, supportedMd5Languages, md5BaccaratResourcesEn);
};
