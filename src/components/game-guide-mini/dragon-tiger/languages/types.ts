export interface IDragonTigerMiniTranslationResource {
    introduction: string;
    winningCondition: {
        title: string;
        description: {
            ruleDrawCards: string;
            winOption: Array<string>;
            compareCardValue: string;
            cardPointValues: string;
            cardValues: Array<string>;
            shuffleCard: string;
        };
    };
    betLimit: {
        title: string;
        maxBetRound: string;
        tieResult: string;
        table: {
            headers: Array<string>;
            dragon: string;
            tiger: string;
            tie: string;
        };
    };
}
