export interface ISicBoTranslationResource {
    introduction: string;
    winningCondition: {
        title: string;
        description: {
            number: string;
            big: string;
            small: string;
            note: string;
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
                big: string;
                small: string;
                specificNumber: string;
            };
        };
    };
}
