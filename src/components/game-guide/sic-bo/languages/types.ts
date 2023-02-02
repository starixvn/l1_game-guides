import { IBaseTermAndConditionResources } from "../../base/terms-and-conditions/languages/types";

export interface ISicBoTranslationResource {
    introduction: {
        title: string;
        description: string;
    };
    gameRules: {
        title: string;
        descriptions: string[];
        maximum: string;
        otherDescriptions: string[];
    };
    bettingOptions: {
        title: string;
        description: {
            big: string[];
            small: string[];
            anyTriple: string;
            specificNumber: string;
            totalPoints: string;
        };
    };
    table: {
        options: string;
        choices: string;
        description: string;
        odds: string;
        betLimit: string;
        big: string;
        small: string;
        anyTriple: string;
        specificNumber: string;
        totalPoints: string;
        betOnAnyNumber: string;
        betOnTotalPoints: string;
        numberAppearsOnce: string;
        numberAppearsTwice: string;
        numberAppearsThreeTimes: string;
    };
    payouts: {
        title: string;
        descriptions: string[];
    };
    md5: {
        step1ImageUrl: string;
        step2ImageUrl: string;
        note: string;
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
