import { TolgeeInstance } from "@tolgee/react";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";
import { ENVIRONMENT } from "../../../../common/constants";
import { generateBaccaratTranslationResource } from "../../base/base-baccarat/languages/tolgee";
import { getBaccaratTolgeeTranslationResource } from "../../baccarat/languages/tolgee";

export function getVipBaccaratTolgeeTranslationResource(tolgee: TolgeeInstance, languageTag: string): IBaseBaccaratResources {
    const baseBaccaratResources = getBaccaratTolgeeTranslationResource(tolgee, languageTag);
    const namespace = "BaccaratVip";
    const getTranslation = (key: string, params?: any) => tolgee.t({ key, ns: namespace, params });
    return {
        ...baseBaccaratResources,
        introduction: {
            header: getTranslation("introduction_header"),
            content: getTranslation("introduction_content"),
        },
    };
}
