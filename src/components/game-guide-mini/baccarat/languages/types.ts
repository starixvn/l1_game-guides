export interface IBaccaratMiniTranslationResource {
    introduction: {
        title: string;
        description: string;
    };
    gameRule: {
        title: string;
        description: {
            byDefault: string;
            theThirdCard: string;
            theGameDetermines: string;
            theCards: string;
        };
    };
    payouts: {
        title: string;
        description: {
            thePayout: string;
            note: string;
        };
        table: {
            header: {
                options: string;
                betLimit: string;
            };
            rows: {
                player: string;
                banker: string;
                tie: string;
            };
        };
    };
}
