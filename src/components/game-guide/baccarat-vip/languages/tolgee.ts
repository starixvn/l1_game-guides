import { TolgeeInstance } from "@tolgee/react";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";
import { ENVIRONMENT } from "../../../../common/constants";
import { generateBaccaratTranslationResource } from "../../base/base-baccarat/languages/tolgee";

export function getVipBaccaratTolgeeTranslationResource(tolgee: TolgeeInstance, languageTag: string): IBaseBaccaratResources {
    const baseBaccaratResources = generateBaccaratTranslationResource(tolgee);
    const namespace = "BaccaratVip";
    const getTranslation = (key: string, params?: any) => tolgee.t(key, {ns: namespace, params});
    return {
        ...baseBaccaratResources,
        introduction: {
            header: getTranslation("introduction_header"),
            content: getTranslation("introduction_content"),
        },
        gameRules: {
            ...baseBaccaratResources.gameRules,
            ...{
                getDetails(environment: string | undefined, maxBetMain: number | string) {
                    let details: Array<string> = [getTranslation("game_rules_details_1")];
    
                    if (environment === ENVIRONMENT.sc || environment === ENVIRONMENT.sm) {
                        details = details.concat([getTranslation("game_rules_details_2")]);
                    }
    
                    if (environment === ENVIRONMENT.sc) {
                        details = details.concat([
                            getTranslation("game_rules_details_3"),
                            getTranslation("game_rules_details_4"),
                        ]);
                    }
    
                    return details.concat([
                        getTranslation("game_rules_details_5"),
                        getTranslation("game_rules_details_6"),
                        getTranslation("game_rules_details_7", {maxBetMain}),
                        getTranslation("game_rules_details_8"),
                        getTranslation("game_rules_details_9"),
                        getTranslation("game_rules_details_10"),
                        getTranslation("game_rules_details_11"),
                    ]);
                },
            },
        },
        md5: {
            step1ImageUrl: `/static/images/baccarat/md5_step1_${languageTag}.png?v=1`,
            step2ImageUrl: `/static/images/baccarat/md5_step2_${languageTag}.png?v=1`,
            step3ImageUrl: "/static/images/baccarat/md5_step3.png?v=1",
            step4ImageUrl: "/static/images/baccarat/md5_step4.png?v=1",
            step2Noted1Text: getTranslation("md5_step2_noted1_text"),
            step2Noted2Text: getTranslation("md5_step2_noted2_text"),
        },
    };
} 