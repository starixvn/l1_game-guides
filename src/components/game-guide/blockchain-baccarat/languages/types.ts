import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";
import { IBaseTermAndConditionResources } from "../../base/terms-and-conditions/languages/types";

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
            example: {
                header: string;
                descriptions: Array<string>;
            };
        };
    };
}
