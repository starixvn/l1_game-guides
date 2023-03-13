export interface IPowerKenoTranslationResource {
    common: {
        bettypes: string;
        options: string;
        teamBlueRed: string;
        sumBigSmall: string;
        sumEvenOdd: string;
        teamBlueBigSmall: string;
        teamRedBigSmall: string;
        teamBlue: string;
        teamRed: string;

        big: string;
        small: string;

        odd: string;
        even: string;
    };
    main: {
        introduction: string;
        description: string;
    };
    gameRule: {
        title: string;
        details: Array<string>;
        bettingOptions: {
            winningConditions: string;
            teamBlueDescription: string;
            teamRedDescription: string;
            sumBigDescription: string;
            sumSmallDescription: string;
            sumEvenDescription: string;
            sumOddDescription: string;
            teamBlueBigDescription: string;
            teamBlueSmallDescription: string;
            teamRedBigDescription: string;
            teamRedSmallDescription: string;
        };
    };
    payOut: {
        title: string;
        description1: string;
        description2: string;
        description3: string;
        odds: string;
        betLimit: string;
    };
    md5noted: string;
}
