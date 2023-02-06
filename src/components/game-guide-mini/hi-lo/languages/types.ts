export interface IHiLoMiniTranslationResource {
    introduction: string;
    winningCondition: {
        title: string;
        description: {
            thePlayerCan: string;
            collect: string;
            playContinue: string;
            unfinishedGame: string;
            firstTurn: string;
            otherTurns: string;
            arrangeCards: string;
            allTheSuits: string;
            heart: string;
            spade: string;
            diamond: string;
            andClub: string;
            equalValue: string;
        };
    };
    payout: {
        title: string;
        description: string;
    };
}
