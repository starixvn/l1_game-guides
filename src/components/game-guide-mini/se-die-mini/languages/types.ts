export interface ISeDieMiniTranslationResource {
    introduction: string;
    winningCondition: {
        title: string;
        description: {
            odd: string;
            even: string;
            otherBet: string;
            ifThe: string;
        };
    };
    betLimit: {
        title: string;
        description: string;
        table: {
            header: {
                options: string;
                betLimit: string;
            };
            rows: {
                oddEven: string;
                or: string;
            };
        };
    };
}
