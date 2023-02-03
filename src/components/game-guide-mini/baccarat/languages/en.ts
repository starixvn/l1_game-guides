import { IBaccaratMiniTranslationResource } from "./types";

export const en: IBaccaratMiniTranslationResource = {
    introduction: {
        title: "Introduction",
        description:
            "Baccarat is played with one standard 52-card deck (excluding the Joker). There are 3 betting options and Punters can bet on one or more betting options shown on the game table.",
    },
    gameRule: {
        title: "Game Rules",
        description: {
            byDefault:
                "By default, 6 cards will be drawn at the beginning of each round. Player and Banker, each hand will start with 2 cards face down.",
            theThirdCard: "The third card will be dealt according to the total points of the first 2 cards on each hand.",
            theGameDetermines:
                "The game determines the win or loss by comparing the total points of all cards on each hand and the winning hand is the one closest to a total of 9 points.",
            theCards: "The cards are shuffled after every round and the maximum total stake per round is {0}",
        },
    },
    payouts: {
        title: "Payouts",
        description: {
            thePayout: "The Payout includes the initial stake.",
            note: "Note: All bets on Player and Banker will be refunded if the result is a draw.",
        },
        table: {
            header: {
                options: "Options",
                betLimit: "Bet Limit (Min-Max)",
            },
            rows: {
                player: "Player",
                banker: "Banker",
                tie: "Tie",
            },
        },
    },
};
