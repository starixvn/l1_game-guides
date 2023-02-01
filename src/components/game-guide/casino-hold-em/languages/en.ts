import { ICasinoHoldTranslationResource } from "./types";

const Hand = {
    royalFlush: "Royal Flush",
    straightFlush: "Straight Flush",
    fourOfAKind: "Four of a Kind",
    fullHouse: "Full House",
    flush: "Flush",
    straight: "Straight",
    threeOfAKind: "Three of a Kind",
    twoPair: "Two Pair",
    pair: "Pair",
    highCard: "High card",
    PairOfAces: "Pair of Aces",
};

export const en: ICasinoHoldTranslationResource = {
    common: {
        hand: Hand,
        player: "Player",
        dealer: "Dealer",
        communityCards: "Community Cards",
        cards: "Cards",
        combination: "Combination",
        result: "Result",
        handResult: "Hand Result",
        odds: "Odds",
        example: "Example",
    },
    introduction: {
        title: "Introduction",
        description:
            "Casino Hold’em is a variant of Texas Hold’em Poker. The game is played with a standard 52-card deck (excluding the Joker), and the cards are shuffled after each round. The Player will play against the Dealer and the object of this game is to achieve the best possible five-card poker hand using a combination of two hole cards and five community cards to beat the Dealer’s hand.",
        md5: {
            sentence1: "In addition, a new feature -",
            sentence2: "MD5 (Message-Digest algorithm 5)",
            sentence3: "allows the Player to check the fairness and authenticity of every game result.",
        },
    },
    gameRule: {
        title: "Game Rules",
        description: {
            line1: "Select the chip with the value that suits you best and place the chip on the Ante bet or AA bonus bet.",
            line2: "Note, Ante bet is a mandatory option that the player must place bet before any cards are dealt.",
            line3: "Click on the Deal button to start the game round, the Player and the Dealer each receive two hole cards.",
            line4: "Three community cards (Flop cards) are dealt face-up in the middle of the table.",
        },
        swapCard: {
            title: "Swap Cards",
            description:
                "Swap Cards is an optional feature and can be turned ON/OFF. It allows the player to choose either to swap his two hole cards with Dealer’s cards before cards are face-up or keep the cards without changing.",
        },
        note: "Note: The Swap cards feature can only be ON/OFF before the game round is started.",
        foldCall: {
            description: "After the first three community cards are dealt, Player must decide whether to CALL or FOLD.",
            fold: "<strong>FOLD</strong>: the Player will surrender his hand and lose both the Ante bet and optional AA bet. The game round is over.",
            call: "<strong>CALL</strong>: the Player will continue playing with an additional Call bet, equal to twice the Ante bet.",
        },
        afterClick:
            "After clicking on the CALL button, the last two community cards are dealt and both Player and Dealer will reveal the value of their cards.",
        theTwo: "The two personal cards are combined with 5 community cards to make the best five-card Poker hand. ",
        thePlayer: "The Player will win the Ante bet if the Player has a better hand than the Dealer",
        maximumTotal: "The maximum total stake per round is {0}. Note, placed bets cannot be canceled after cards are dealt.",
        rankingLevel: "Ranking Level",
        cardValues: {
            title: "Card Values",
            description: {
                line1: "The card's value is ranked from the highest to the lowest in the following order: Ace (A), King (K), Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3 and 2.",
                line2: "The Ace can be used as both the highest and lowest card, so can be used in a straight of A, K, Q, J, 10 as the highest value or 5, 4, 3, 2, A as the lowest value card.",
                line3: "All the suits - heart ({0}), spade ({1}), diamond ({2}), and club ({3}) have equal value.",
            },
        },
        handRanking: {
            title: "Hand Ranking",
            line1: "List of poker hand ranking levels from highest to lowest",
            table: {
                title: {
                    hand: "Hand",
                    description: "Description",
                    example: "Example",
                },
                description: {
                    royalFlush: "Ace, King, Queen, Jack, and 10 in the same suit",
                    straightFlush: "Five cards in the same suit, all in a rank sequence",
                    fourOfAKind: "Four cards of the same rank",
                    fullHouse: "Three of a Kind and a Pair",
                    flush: "Five cards in the same suit",
                    straight: "Five cards a rank sequence",
                    threeOfAKind: "Three cards of the same rank",
                    twoPair: "Two pairs of different ranks",
                    pair: "Two cards of the same rank",
                    highCard: "Highest card when no higher hand is available",
                },
            },
            line2: "The Poker hand consists of five cards. If the Player and the Dealer share a winning hand, then the individual cards will be used to break the Tie. If the highest card in Player’s hand is equal, the second-highest card should be compared, and so on.",
            example: {
                player: "Player wins",
                dealer: "Dealer wins",
                result: "Result is “Tie”",
            },
        },
        bettingOption: "Betting Option",
        anteBet: {
            title: "Ante Bet",
            description: {
                line1: "“Ante” Bet is a mandatory option that the player must place bet before any cards are dealt.",
                line2: "The Player will win Ante Bet if he can make the best possible five-card poker hand using a combination of two hole cards and five community cards to beat the Dealer’s hand.",
            },
        },
        aaBet: {
            title: "AA Bet",
            description: {
                line1: "A side bet known as the “AA” bet, is based on the poker value of the player's two cards and the first three community cards. The Player will win “AA” bet if he can achieve a pair of aces or better, no matter what Dealer has.",
                line2: "“AA” Bet is not related to the Ante bet results. The Player might lose the game, but the “AA” Bet might win or vice versa.",
                line3: "Note, if the Player selects “FOLD”, he will lose both the Ante bet and the optional “AA” bet.",
            },
        },
        callBet: {
            title: "Call Bet",
            description: {
                line1: "Call bet is an additional bet decided by the Player whether he wants to continue the game round. Call bet amount is twice the original Ante bet.",
            },
        },
        handQualification: {
            title: "Hand Qualification",
            description:
                "The Dealer must have at least a pair of fours to make a qualifying hand. If the Dealer fails to qualify, the Ante bet is paid out according to the betting odds table while the Call bet will be pushed.",
            table: {
                title: {
                    dealer: "Dealer qualifies",
                    DealerDoes: "Dealer does not qualify",
                },
                col1: {
                    playerBeat: "Player beats Dealer",
                    player: "Player does not beat Dealer",
                    playerAndDealer: "Player and Dealer are equal hand",
                },
                col2: {
                    playerWins: "Player wins both the Ante and Call bets.",
                    playerLoses: "Player loses both the Ante and Call bets.",
                    bothThe: "Both the Ante and Call bets are pushed.",
                },
                col3: {
                    playerWins: "Player wins the Ante bet, Call bet is pushed.",
                },
            },
        },
    },
    payOuts: {
        title: "Payout",
        description: {
            line1: "The winning amount is calculated according to the betting odds.",
            line2: "Note, the Payout includes the initial stake.",
            line3: "All winning amounts are instantly added to your account balance when bets are settled.",
        },
        anteBet: "Ante bet",
        callBet: {
            title: "Call bet",
            description: {
                line1: "Player will win the Call bet only if the Dealer qualifies and you beat their hand.",
                line2: "Betting odds",
            },
        },
        aaBet: "AA bet",
    },
    betLimit: {
        title: "Bet Limit",
        table: {
            title: {
                options: "Options",
                betLimit: "Bet Limit (Min-Max)",
            },
            content: {
                ante: "Ante",
                call: "Call",
            },
        },
    },
    md5: {
        title: "MD5 (Message-Digest algorithm 5)",
        MD5Technology: {
            title: "MD5 technology",
            description: {
                "MD5 allows players": "MD5 allows players to check the authenticity and transparency of game results through 3rd parties.",
                "The game results": "The game results will be randomly generated by the system before the cards are revealed.",
                "Players can manually":
                    "Players can manually check whether or not the results generated before the cards are revealed (<strong>MD5</strong> Key) and the publishing results (string <strong>Result</strong>) are matched.",
            },
        },
        MD5Validation: {
            title: "MD5 Validation",
            steps: {
                step1: "<strong>Step 1</strong>: Copy the MD5 Key after pressing the Deal button.",
                step2: "<strong>Step 2</strong>: Copy the Result after pressing the Call button.",
                step3: `<string>Step 3</string>: Go to <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> and paste the Result into the MD5 box.`,
                step4: "<string>Step 4</string>: Press the “<strong>hash darling, hash!</strong>” button and compare the newly generated <strong>checksum MD5</strong> string with the MD5 string in <strong>Step 1</strong>.",
            },
            description:
                "If two strings are matching, prove that the outcome of that game round is transparent and the game result is unchanged from the random result generated by the system before the cards are revealed.",
            example: {
                description: "Example: check the authenticity and transparency of Poker game results.",
                step1: "<strong>Step 1</strong>: Copy the MD5 Key after pressing the Deal button.",
                step2: "<strong>Step 2</strong>: Copy the Result after pressing the Call button.",
                note: {
                    title: "Note:",
                    line1: "From left to right, the cards are displayed in the order: Player’s cards {0}, Dealer’s cards {1}, and the five community cards {2}",
                    line2: "If the Player has swapped his cards with Dealer then the order will be: Dealer’s cards {0}, Player’s cards {1}, and the five community cards.",
                },
                step3: `<string>Step 3</string>: Go to <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> and paste the Result into the MD5 box.`,
                step4: "<string>Step 4</string>: Press the “<strong>hash darling, hash!</strong>” button and compare the newly generated <strong>checksum MD5</strong> string with the MD5 string in <strong>Step 1</strong>.",
            },
        },
    },
    extendTermsAndConditionsDetails: [
        "The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the\
    “Deal” button. The unfinished game will be automatically settled after 24 hours. The player&apos;s hand is considered as “FOLD”.",
    ],
};
