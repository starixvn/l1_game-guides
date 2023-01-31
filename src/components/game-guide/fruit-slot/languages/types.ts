import { IBaseTermAndConditionResources } from "../../base/terms-and-conditions/languages/types";

export interface IFruitSlotTranslationResource {
    gameRule: {
        title: string;
        description: {
            line1: string;
            noteText: string;
            theMaxTotalStake: string;
            thePlayerCanPlaceBets: string;
            onceBettingTimeExpired: string;
            bigSmallResult: string;
            bigResult: string;
            smallResult: string;
            symbolResult: string;
        };
    };
    payOut: {
        title: string;
        winningAmount: string;
        noteText: string;
        allWinningAmount: string;
        bettingOddsTable: string;
        locales: string;
    };

    lucky: {
        title: string;
        line1: string;
        line2: string;
        line3: string;
        example: string;
        exampleText1: string;
        exampleText2: string;
        firstAdditional: string;
        secondAdditional: string;
        lemonAndStar: string;
    };
    main: {
        introduction: string;
        description: string;
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
