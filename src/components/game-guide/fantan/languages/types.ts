export interface IFanTanTranslationResource {
    introduction: {
        title: string;
        description: string;
    };
    gameRules: {
        title: string;
        description: string;
        example: {
            title: string;
            resultDetails: string[];
            haveOptions?: string;
            descriptions: string[];
            maxBet: string;
        };
        winningCondition: {
            odd: string;
            even: string;
            fan1: string;
            fan2: string;
            fan3: string;
            fan4: string;
            kwok12: string;
            kwok23: string;
            kwok34: string;
            kwok41: string;
            chun234: string;
            chun134: string;
            chun124: string;
            chun123: string;
        };
    };
    table: {
        betType: string;
        betOption: string;
        winningCondition: string;
        odds: string;
        betLimit: string;
        oddEven: string;
        odd: string;
        even: string;
        fan: string;
        fan1: string;
        fan2: string;
        fan3: string;
        fan4: string;
        kwok: string;
        chun: string;
    };
    payouts: {
        title: string;
        descriptions: string[];
    };
    md5: {
        example: string;
        step1: string;
        step2: string;
        note: string;
        step3: string;
        step4: string;
    };
}
