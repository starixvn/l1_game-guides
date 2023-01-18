export interface TreasureIslandLanguage {
    introduction: {
        title: string;
        description: string;
    };

    gameRules: {
        title: string;
        rulePlayerSelect: string;
        totalBet: string;
        paylinesFormular: string;
        subDescriptions: Array<string>;
        ruleStartSpin: string;
        ruleWin: string;
        betLimit: string;
    };

    payout: {
        title: string;
        description1: Array<string>;
        baseBetValue: string;
        description2: string;
        description3(maxBet: number): Array<string>;
    };

    examplePayout: {
        content: string;
        table: {
            headers: Array<string>;
            getHavingSymbol(symbol: string): string;
            descriptionContent: string;
            payout: string;
        };
    };

    tumbling: {
        title: string;
        descriptions: Array<string>;
    };

    multipliers: {
        title: string;
        descriptions: Array<string>;
    };

    exampleMultipliers: {
        title: string;
        tableHeader: Array<string>;
    };

    freeSpin: {
        title: string;
        define: string;
        subDescriptions: {
            tableHeader: Array<string>;
            getSymbolOrMore(symbol: string): string;
            getSymbol(symbol: string): string;
            getFreeSpin(count: number): string;
        };
        getMoreFreeSpin(value: number): string;
        totalMultiplier: string;
        freeSpin24h: string;
    };

    exampleFreeSpin: {
        title: string;
        table: {
            headers: Array<string>;
            round1Win: string;
            round2Win: string;
            round4Win: string;
        };
        tumbleDescriptions: Array<string>;
    };
}
