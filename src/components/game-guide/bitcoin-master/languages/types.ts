import { IBaseTermAndConditionResources } from "../../base/terms-and-conditions/languages/types";

export interface IBitcoinMasterTranslationResource {
    introduction: {
        title: string;
        description: string;
    };
    gameRules: {
        title: string;
        descriptions: string[];
        winningConditions: {
            up: string;
            down: string;
            even: string;
            odd: string;
        };
        example1: {
            title: string;
            increaseStake: string;
            maxBet: string;
            otherDescriptions: string[];
        };
        example2: {
            title: string;
            descriptions: string[];
            upDown: {
                title: string;
                description: string;
            };
            evenOdd: {
                title: string;
                description: string;
            };
        };
        balancedBettingPool: string;
        example3: string;
    };
    table: {
        betType: string;
        options: string;
        winningConditions: string;
        odds: string;
        betLimit: string;
        upDown: string;
        up: string;
        down: string;
        evenOdd: string;
        even: string;
        odd: string;
    };
    payouts: {
        title: string;
        descriptions: string[];
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
