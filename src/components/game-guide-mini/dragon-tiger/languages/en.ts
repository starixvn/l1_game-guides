import { IDragonTigerMiniTranslationResource } from "./types";
export const en: IDragonTigerMiniTranslationResource = {
    introduction:
        "Dragon Tiger is played with one standard 52-cards deck (excluding the Joker). There are 3 betting options: Dragon, Tiger, and Tie.",
    winningCondition: {
        title: "Winning Conditions",
        description: {
            ruleDrawCards: "Two cards are drawn, one for Dragon and one for Tiger.",
            winOption: [
                "Dragon, Tiger: the option which has a higher value card will win.",
                "Tie: the player will win if the Dragon and Tiger have the same value card.",
            ],
            compareCardValue: "The game determines the win or loss by comparing the point of the card instead of its suit.",
            cardPointValues: "- Card’s point values:",
            cardValues: [
                "Ace stands for 1 point; Jack is 11 points; Queen stands for 12 points and King is 13 points.",
                "The cards (2 to 10) are counted at face value.",
            ],
            shuffleCard: "The standard deck with 52 cards (excluding the Joker) is shuffled after every round.",
        },
    },
    betLimit: {
        title: "Bet Limit",
        maxBetRound: "The maximum total stake per round is {0}.",
        tieResult: "The player who bets on Dragon or Tiger will lose 50% of their stake if the result is a draw.",
        table: {
            headers: ["Options", "Bet Limit"],
            dragon: "Dragon",
            tiger: "Tiger",
            tie: "Tie",
        },
    },
};
