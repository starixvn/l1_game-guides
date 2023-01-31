export interface IMd5Resources {
    content: {
        header: string;
        technology: {
            header: string;
            details: Array<string>;
        };
        validation: {
            header: string;
            details: Array<string>;
        };
        noted: string;
    };
    example: {
        header: string;
        step1Text: string;
        step2Text: string;
        step3Text: string;
        step4Text: string;
    };
}
