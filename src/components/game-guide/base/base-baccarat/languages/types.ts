import { IBaseTermAndConditionResources } from "../../terms-and-conditions/languages/types";

export interface IBaseBaccaratResources {
    introduction: {
        header: string;
        content: string;
    };
    gameRules: {
        getDetails(environment: string | undefined, maxBetMain: number | string): Array<string>;
        header: string;
        table: {
            header: {
                options: string;
                descriptions: string;
            };
            contents: Array<{
                choice: string;
                rule: string;
            }>;
        };
    };
    pointRules: {
        header: string;
        descriptions: {
            paragraph1: {
                cardPointValues: string;
                details: Array<string>;
            };
            paragraph2: string;
        };
        examples: {
            firstTwoCard: string;
            thirdCard: string;
            totals: string;
            basedTotal: string;
        };
    };
    thirdCardRules: {
        header: string;
        descriptions: Array<string>;
        playerHand: {
            header: string;
            cardsTotal: string;
            action: string;
            examples: Array<{
                twoCardsTotal: string;
                action: string;
            }>;
        };
        bankerHand: {
            header: string;
            firstDescription: string;
            cardsTotal: string;
            action: string;
            examples: Array<{
                twoCardsTotal: string;
                action: string;
            }>;
            secondDescription: Array<string>;
        };
    };
    payouts: {
        header: string;
        descriptions: {
            details: Array<string>;
            noted: string;
            options: string;
            odds: string;
            betLimit: string;
            player: string;
            banker: string;
            big: string;
            small: string;
            tie: string;
            playerPair: string;
            bankerPair: string;
        };
    };
    md5?: {
        step1ImageUrl: string;
        step2ImageUrl: string;
        step3ImageUrl: string;
        step4ImageUrl: string;
        step2Noted1Text: string;
        step2Noted2Text: string;
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
