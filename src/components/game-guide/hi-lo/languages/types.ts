import { IBaseTermAndConditionResources } from "../../base/terms-and-conditions/languages/types";

export interface IHiLoTranslationResource {
    introduction: {
        title: string;
        description: string;
    };
    gameRules: {
        title: string;
        description: {
            line1: string;
            line2: string;
            line3: string;
            subLines: string[];
        };
        example: {
            title: string;
            description: {
                introduction: string;
                result: {
                    detail: string;
                    option1: string;
                    option2: string;
                };
                note: {
                    completeTurn: string;
                    autoSettle: {
                        detail: string;
                        subLines: string[];
                    };
                    shuffleCard: string;
                };
            };
        };
    };
    cardValues: {
        title: string;
        line1: string;
        line2: string;
        note: {
            title: string;
            descriptions: string[];
        };
    };
    payout: {
        title: string;
        descriptions: string[];
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
