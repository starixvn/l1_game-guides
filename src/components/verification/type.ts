import { ProvablyFair } from "../../pages/pf";

export type VerificationBase = {
    gameName: string;
    name?: string;
    locale?: string;
    id?: number;
    provablyFair: ProvablyFair;
    gameNameTranslate: string;
    dynamic: boolean;
    environment?: string;
    displayName?: string;
    orientation?: string;
};
