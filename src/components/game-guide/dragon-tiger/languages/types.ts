import { IBaseTermAndConditionResources } from "../../base/terms-and-conditions/languages/types";

export interface IDragonTigerTranslationResource {
    common: {
        dragon: string;
        tiger: string;
        tie: string;
    };
    introduction: {
        title: string;
        description: {
            dragonTiger: string;
            theGame: string;
            thereAre: string;
        };
    };
    gameRule: {
        title: string;
        twoCards: string;
        thePlayerBet: string;
        thePlayerCan: string;
        theGameDetermines: string;
        maximum: string;
        cardPoint: {
            title: string;
            ranking: string;
            aceStands: string;
            allCards: string;
        };
        playerCanBet: string;
        allBets: string;
        note: string;
        theStandard: string;
    };
    payOuts: {
        title: string;
        description: {
            theWinning: string;
            thePayout: string;
            allWinning: string;
        };
        table: {
            header: {
                options: string;
                odds: string;
                betLimit: string;
                maxTotal: string;
            };
        };
        note: string;
    };
    termsAndConditions: IBaseTermAndConditionResources;
}
