import { TexasHoldemLanguage } from "./types";

const steps = {
    one: "<b>Step 1</b>: Copy the MD5 key after pressing the Deal button.",
    two: "<b>Step 2</b>: Copy the Result after the fifth community card (River) is dealt.",
    three: "<b>Step 3</b>: Go to {0} and paste the Result into the MD5 box.",
    four: "<b>Step 4</b>: Press the <b>“hash darling, hash!</b>” button and compare the newly generated <strong>MD5 checksum</strong> with the MD5 string in <strong>Step 1</strong>.",
};

export const en: TexasHoldemLanguage = {
    introduction: {
        Introduction: "Introduction",
        "Texas Holdem is":
            "Texas Hold’em is one of the world’s most popular poker games. The game is played with a standard 52-card deck\
    (excluding Joker), and the cards are reshuffled after each round. The objective of this game is to obtain a higher\
    ranking Poker hand than the Dealer. Using your two hole cards combines with the five community cards to create the\
    best possible five-card Poker hand.",
        "In addition, a new feature": "In addition, a new feature",
        "MD5 (Message-Digest algorithm 5)": "MD5 (Message-Digest algorithm 5)",
        "that allows the Player to": "that allows the Player to check the fairness and authenticity of every game result.",
    },

    gameRules: {
        "Game Rules": "Game Rules",
        "Select the desired chip with": "Select the desired chip with the value that suits you best and place bet on Ante.",
        "Note, Ante bet is": "Note, Ante bet is a mandatory option that the Player must place bet before any cards are dealt.",
        "Click on the Deal button to":
            "Click on the Deal button to start the game round, the Player and the Dealer each receive two hole cards.",
        "Swap Cards": "Swap Cards",
        "Swap Cards is":
            "Swap Cards is an optional feature and can be turned ON/ OFF. It allows player to choose either to swap his\
    two-hole cards with Dealer’s cards before cards are face-up or keep the cards without changing.",
        "Note: The Swap cards feature can": "Note: The Swap cards feature can only be ON/OFF before the game round is started.",
        "After the two hole cards are": "After the two hole cards are dealt and face up, the Player must decide whether to CALL or FOLD.",
        FOLD: "FOLD",
        "the Player will surrender": "the Player will surrender his hand and lose the Ante bet. The game round is over.",
        CALL: "CALL",
        "the Player will continue playing":
            "the Player will continue playing with an additional Call bet, equal to twice the Ante\
    bet, and three community cards (Flop card) are dealt face-up in the middle of the table.",
        "Turn & River bet": "Turn & River bet",
        "River bet": "River bet",
        "are additional bets": "are additional bets decided by Player whether he wants to raise his bet.",
        "Turn bet": "Turn bet",
        "before a fourth community card is dealt":
            "before a fourth community card is dealt face up (the Turn), Player can increase the\
    stake by placing bet on “Turn” option with the same bet amount placed on Ante.",
        "the River is the":
            "the River is the fifth and final community card. Similar to the Turn bet, before the\
    River card is dealt, Player will have the option of placing an additional River bet.",
        Check: "Check",
        "To skip placing bets on Turn or River": "To skip placing bets on Turn or River, simply click on “Check” button.",
        "The two personal cards are combined with 5 community cards":
            "The two personal cards are combined with 5 community cards to make the best five-card Poker hand. The Player will win if\
    the Player has a better hand than the Dealer.",
        "The maximum total stake per round is": "The maximum total stake per round is ",
        "Note, placed bets cannot be canceled after cards are dealt": "Note, placed bets cannot be canceled after cards are dealt.",
        "Ranking Level": "Ranking Level",
        "Card Values": "Card Values",
        "The card’s value is ":
            "The card’s value is ranked from the highest to the lowest in the following order: Ace (A), King (K),\
    Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3 and 2.",
        "The Ace can be used as": "The Ace can be used as both the highest and lowest card.",
        "For example: In a straight, ":
            "For example: In a straight, the A can be used as A, K, Q, J, 10 as the highest value or 5, 4, 3,\
    2, A as the lowest value card.",
        "All the suits": "All the suits",
        heart: "heart",
        spade: "spade",
        diamond: "diamond",
        "and club": "and club",
        "have equal value": "have equal value.",
        "Hand Ranking": "Hand Ranking",
        "List of poker hand ranking levels from highest to lowest.": "List of poker hand ranking levels from highest to lowest",
        Hand: "Hand",
        Description: "Description",
        Example: "Example",
        "Royal Flush": "Royal Flush",
        "Ace, King, Queen, Jack, and 10 in the same suit": "Ace, King, Queen, Jack, and 10 in the same suit",
        "Straight Flush": "Straight Flush",
        "Five cards in the same suit, all in a rank sequence": "Five cards in the same suit, all in a rank sequence",
        "Four of a Kind": "Four of a Kind",
        "Four cards of the same rank": "Four cards of the same rank",
        "Full House": "Full House",
        "Three of a Kind and a Pair": "Three of a Kind and a Pair",
        Flush: "Flush",
        "Five cards in the same suit": "Five cards in the same suit",
        Straight: "Straight",
        "Five cards a rank sequence": "Five cards a rank sequence",
        "Three of a Kind": "Three of a Kind",
        "Three cards of the same rank": "Three cards of the same rank",
        "Two Pair": "Two Pair",
        "Two pairs of different ranks": "Two pairs of different ranks",
        Pair: "Pair",
        "Two cards of the same rank": "Two cards of the same rank",
        "High Card": "High Card",
        "Highest card when no higher hand is available": "Highest card when no higher hand is available",
        "The Poker hand consists of five cards":
            "The Poker hand consists of five cards. If the Player and the Dealer share a winning hand, then the\
    individual cards will be used to break the Tie. If the highest card in the Player’s hand is equal, the\
    second-highest card should be compared, and so on.",
        Cards: "Cards",
        Combination: "Combination",
        Result: "Result",
        Player: "Player",
        Dealer: "Dealer",
        "Community Cards": "Community Cards",
        "The Player wins": "The Player wins",
        "The Dealer wins": "The Dealer wins",
        "Result is a “Tie”": "Result is a “Tie”",
    },

    payout: {
        Payout: "Payout",
        "All winning amounts are": "All winning amounts are instantly added to your account balance when bets are settled.",
        "The winning amount is calculated":
            "The winning amount is calculated according to the betting odds. Note, the Payout includes the initial stake.",
        "If Player’s hand beats Dealer’s hand": "If Player’s hand beats Dealer’s hand",
        "With a Three of a Kind or lower": "With a Three of a Kind or lower",
        "the Call, Turn and River bets are won, and Ante is pushed.": "the Call, Turn and River bets are won, and Ante is pushed.",
        "With a Straight or higher": "With a Straight or higher",
        "All bets (Ante, Call, Turn, and River) will win.": "All bets (Ante, Call, Turn, and River) will win.",
        "Payout and Bet Limit": "Odds and Bet Limit",
        Option: "Option",
        Odds: "Odds",
        "Bet Limit (Min-Max)": "Bet Limit (Min-Max)",
        "Ante (with Three of a Kind or lower)": "Ante (with Three of a Kind or lower)",
        Push: "Push",
        "Ante (with Straight or higher)": "Ante (with Straight or higher)",
        Call: "Call",
        Turn: "Turn",
        River: "River",
    },
    md5: {
        md5Base: {
            content: {
                header: "MD5 (Message-Digest algorithm 5)",
                technology: {
                    header: "MD5 technology",
                    details: [
                        "MD5 that allows players to check the authenticity and transparency of game results through 3rd parties.",
                        "The game results will be randomly generated by the system before the cards are revealed.",
                        "Players can manually check whether or not the results generated before the cards are revealed (<strong>MD5</strong> key) and the publishing results (<strong>Result</strong>) are matched.",
                    ],
                },
                validation: {
                    header: "MD5 Validation",
                    details: Object.values(steps),
                },
                noted: "If two strings are matching, prove that the outcome of that game round is transparent and the game result is unchanged from the random result generated by the system before the cards are dealt.",
            },
            example: {
                header: "<strong> Example:</strong> check the authenticity and transparency Poker game results.",
                step1Text: steps.one,
                step2Text: steps.two,
                step3Text: steps.three,
                step4Text: steps.four,
                md5Key: "MD5 Key",
                result: "Result",
                copy: "Copy",
            },
        },
        md5Note: {
            title: "Note:",
            line1: "From left to right, the cards are displayed in the order: Player’s cards {0}, Dealer’s cards {1}, and the five community cards {2}",
            line2: "If the Player has swapped his cards with Dealer then the order will be: Dealer’s cards {0}, Player’s cards {1}, and the five community cards.",
        },
    },
    extendTermsAndConditionsDetails: [
        `The unfinished game round can be recovered and must be finished within 24 hours from the time the Player presses the “Deal” button. The unfinished game will be automatically settled after 24 hours, and the Win-loss result will be determined by the following rules:
        <ul class="detail">
            <li>
                If the game round is disrupted before the Player selects either “CALL” or “FOLD” => The Player’s hand is considered as “FOLD”.
            </li>
            <li>
                If the game round is disrupted after the Player selects the “CALL” option, the Player’s hand is considered as “CHECK” for Turn and River bet => The game round will be settled as normal.
            </li>
        </ul>`,
    ],
};
