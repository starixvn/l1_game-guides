export interface INighClubTranslationResource {
    gameRule: {
        title: string;
        description: {
            line1: string;
            totalBet: string;
            paylinesFormular: string;
            note: string;
            newExperience: string;
            atLeastOnePayline: string;
            paylineWinLoss: string;
        };
    };
    payOut: {
        paytable: string;
        winningAmount: string;
        note: string;
        initialStake: string;
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
        symbolHeader: string;
        descriptionHeader: string;
        having5FreeSpins: string;
        having4FreeSpins: string;
        having3FreeSpins: string;
        get: string;
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
        symbolHeader: string;
        descriptionHeader: string;
        having5Bonuses: string;
        having4Bonuses: string;
        having3Bonuses: string;
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
    main: {
        introduction: string;
        description: string;
    };
}
