export interface IPowerSoccerTranslationResource {
    common: {
        bettypes: string;
        options: string;
        teamBlue: string;
        teamRed: string;
        odd: string;
        even: string;

        firstHalf: string;
        fullTime: string;
        fullTimeLive: string;

        over: string;
        under: string;
    };
    main: {
        introduction: string;
        description: string;
    };
    gameRule: {
        title: string;
        details: Array<string>;
        bettingOptions: {
            text: string;
            description1: string;
            description2: string;
            description3: string;
            description4: string;
            winningConditions: string;
            firstHalfTeamBlueDescription: string;
            fullTimeTeamBlueDescription: string;

            firstHalfTeamRedDescription: string;
            fullTimeTeamRedDescription: string;

            firstHalfOverDescription: string;
            fullTimeOverDescription: string;

            firstHalfUnderDescription: string;
            fullTimeUnderDescription: string;

            firstHalfEvenDescription: string;
            fullTimeEvenDescription: string;

            firstHalfOddnDescription: string;
            fullTimeOddDescription: string;
        };
    };
    payOut: {
        title: string;
        description1: string;
        description2: string;
        description3: string;
        odds: string;
        betLimit: string;

        firstHalfPayout: string;
        liveBettingPayout: {
            text: string;
            mainDescription: string;
            description1: string;
            description2: string;
            highLightDescription1: string;
            highLightDescription2: string;
            maximumBetLimit: string;
            min: string;
            max: string;
            betLimit: string;
        };
    };
    md5noted: string;
}
