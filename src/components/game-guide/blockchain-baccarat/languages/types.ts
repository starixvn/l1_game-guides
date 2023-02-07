import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export interface IBlockchainBaccaratResources extends IBaseBaccaratResources {
    extendGameRules: {
        cutCard: {
            header: string;
            description: string;
        };
        burnCard: {
            header: string;
            description: string;
            noted: string;
            firstCard: string;
            burnValue: string;
            example: {
                header: string;
                descriptions: Array<string>;
            };
        };
    };
}
