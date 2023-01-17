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
        details: {
            step1: {
                text: string;
                imageUrl: string;
            };
            step2: {
                text: string;
                imageUrl: string;
                noted1: string;
                noted2: string;
            };
            step3: {
                text: string;
                imageUrl: string;
            };
            step4: {
                text: string;
                imageUrl: string;
            };
        };
    };
}
