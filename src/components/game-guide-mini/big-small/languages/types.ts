export interface IBigSmallMiniTranslationResource {
    introduction: string;
    winningCondition: {
        title: string;
        description: {
            thePlayerCan: string;
            big: string;
            small: string;
            balanced: string;
        };
        example: string;
    };
    betLimit: {
        title: string;
        description: string;
    };
}
