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
    };
}
