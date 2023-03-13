export interface ILuckyWheelTranslationResource {
    introduction: string;
    promotionProgram: {
        title: string;
        scoin: string;
        description: Array<string>;
    };
    gameRules: {
        title: string;
        description: Array<string>;
        note: {
            content: string;
            description: Array<string>;
        };
    };
    termsAndConditions: {
        title: string;
        line1: string;
        description: Array<string>;
    };
}
