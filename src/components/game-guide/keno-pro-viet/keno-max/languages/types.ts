import { IBaseTermAndConditionResources } from "../../../base/terms-and-conditions/languages/types";

export interface IKenoTranslationResource {
    introduction: {
        title: string;
        description: string;
    };
    gameRules: {
        title: string;
        description: {
            lines: string[];
            maximum: string;
            otherLine?: string;
        };
    };
    bettingOptions: {
        title: string;
        bigSmall: {
            title: string;
            descriptions: string[];
            winningText: string;
        };
        oddEven: {
            title: string;
            descriptions: string[];
            winningText: string;
        };
        fiveElement: {
            title: string;
            descriptions: string[];
            winningText: string;
        };
        example: {
            description: string;
            drawResult: string;
            totalSum: string;
        };
    };
    payouts: {
        title: string;
        descriptions: string[];
        options: string;
        odds: string;
        betLimit: string;
        min: string;
        max: string;
        big: string;
        small: string;
        odd: string;
        even: string;
        gold: string;
        wood: string;
        water: string;
        fire: string;
        earth: string;
    };
    md5: {
        image1: string;
        image2: string;
        note: string;
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
