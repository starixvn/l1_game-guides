type THand = {
    royalFlush: string;
    straightFlush: string;
    fourOfAKind: string;
    fullHouse: string;
    flush: string;
    straight: string;
    threeOfAKind: string;
    twoPair: string;
    pair: string;
    highCard: string;
    PairOfAces: string;
};

export interface ICasinoHoldTranslationResource {
    common: {
        hand: THand;
        player: string;
        dealer: string;
        communityCards: string;
        cards: string;
        combination: string;
        result: string;
        handResult: string;
        odds: string;
        example: string;
    };
    introduction: {
        title: string;
        description: string;
        md5: {
            sentence1: string;
            sentence2: string;
            sentence3: string;
        };
    };
    gameRule: {
        title: string;
        description: {
            line1: string;
            line2: string;
            line3: string;
            line4: string;
        };
        swapCard: {
            title: string;
            description: string;
        };
        note: string;
        foldCall: {
            description: string;
            fold: string;
            call: string;
        };
        afterClick: string;
        theTwo: string;
        thePlayer: string;
        maximumTotal: string;
        rankingLevel: string;
        cardValues: {
            title: string;
            description: {
                line1: string;
                line2: string;
                line3: string;
            };
        };
        handRanking: {
            title: string;
            line1: string;
            table: {
                title: {
                    hand: string;
                    description: string;
                    example: string;
                };
                description: {
                    royalFlush: string;
                    straightFlush: string;
                    fourOfAKind: string;
                    fullHouse: string;
                    flush: string;
                    straight: string;
                    threeOfAKind: string;
                    twoPair: string;
                    pair: string;
                    highCard: string;
                };
            };

            line2: string;
            example: {
                player: string;
                dealer: string;
                result: string;
            };
        };
        bettingOption: string;
        anteBet: {
            title: string;
            description: {
                line1: string;
                line2: string;
            };
        };
        aaBet: {
            title: string;
            description: {
                line1: string;
                line2: string;
                line3: string;
            };
        };
        callBet: {
            title: string;
            description: {
                line1: string;
            };
        };
        handQualification: {
            title: string;
            description: string;
            table: {
                title: {
                    dealer: string;
                    DealerDoes: string;
                };
                col1: {
                    playerBeat: string;
                    player: string;
                    playerAndDealer: string;
                };
                col2: {
                    playerWins: string;
                    playerLoses: string;
                    bothThe: string;
                };
                col3: {
                    playerWins: string;
                };
            };
        };
    };
    payOuts: {
        title: string;
        description: {
            line1: string;
            line2: string;
            line3: string;
        };
        anteBet: string;
        callBet: {
            title: string;
            description: {
                line1: string;
                line2: string;
            };
        };
        aaBet: string;
    };
    betLimit: {
        title: string;
        table: {
            title: {
                options: string;
                betLimit: string;
            };
            content: {
                ante: string;
                call: string;
            };
        };
    };
    md5: {
        title: string;
        MD5Technology: {
            title: string;
            description: {
                "MD5 allows players": string;
                "The game results": string;
                "Players can manually": string;
            };
        };

        MD5Validation: {
            title: string;
            steps: {
                step1: string;
                step2: string;
                step3: string;
                step4: string;
            };
            description: string;
            example: {
                description: string;
                step1: string;
                step2: string;
                note: {
                    title: string;
                    line1: string;
                    line2: string;
                };
                step3: string;
                step4: string;
            };
        };
    };
    extendTermsAndConditionsDetails: string[];
}
