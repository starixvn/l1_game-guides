import { TolgeeInstance } from "@tolgee/react";
import { IBaseTermAndConditionResources } from "./types";

export function generatebaseTermAndConditionTolgee(tolgee: TolgeeInstance): IBaseTermAndConditionResources {
    const namespace = "Common";
    const getTranslation = (key: string) => {
        try {
            return tolgee.t(key, {ns: namespace});
        } catch (error) {
            console.warn(`Failed to get translation for key: ${key}`, error);
            return key; // Return the key as fallback
        }
    };
    
    return {
        header: getTranslation("termsandconditions-title"),
        details: [
            getTranslation("termsandconditions_para_1"),
            getTranslation("termsandconditions_para_2"),
            getTranslation("termsandconditions_para_3"),
            getTranslation("termsandconditions_para_4"),
        ],
    };
};