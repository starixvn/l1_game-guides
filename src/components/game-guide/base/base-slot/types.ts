import { IBaseTermAndConditionResources } from "../terms-and-conditions/languages/types";

export type JackpotProps = {
    winningRatio: number;
};

export interface GameConfigProps {
    odds: number[][];
    jackpot: JackpotProps;
    stakeLevels: number[];
}

export interface ISlotTranslationResource {
    main: {
        introduction: string;
        description: string;
    };
    gameRule: {
        title: string;
        description: {
            line1: string;
            totalBet: string;
            paylinesFormular: string;
            subDescriptions: Array<string>;
        };
    };
    payOut: {
        paytable: string;
        winningAmount: string;
        note: string;
        initialStake: string;
        allWinningAmount: string;
    };
    examplePayout: {
        title: string;
        table: {
            symbolHeader: string;
            descriptionHeader: string;
            having5Symbols: string;
            having4Symbols: string;
            having3Symbols: string;
            samePayline: string;
            payoutBetLevel: string;
        };
    };

    freeSpin: {
        title: string;
        description1: string;
        description2: string;
        freeSpinBonus: string;
        note: string;
        freeSpinReel: string;
        thereAre4: string;
        lastFreespin: string;
        freeSpinExpired: string;
    };
    bonus: {
        title: string;
        description1: string;
        description2: string;
        canOpen: string;
        itemInBonusGame: string;
        note: string;
        bonusReel: string;
        thereAre4: string;
        eligible: string;
        bonusExpired: string;
    };
    wild: {
        title: string;
        substitute: string;
        and: string;
        endSubstitute: string;
        onlyHighest: string;
        example: string;
        ifwild: string;
        payoutBetLevel: string;
        highestWin: string;
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
