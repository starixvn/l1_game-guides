import { IDragonTigerTranslationResource } from "./types";

export const en: IDragonTigerTranslationResource = {
    common: {
        dragon: "Dragon",
        tiger: "Tiger",
        tie: "Tie",
    },
    introduction: {
        title: "Introduction",
        description: {
            dragonTiger: "Dragon Tiger is a simple card game similar to Baccarat. ",
            theGame: "The game is played with one standard 52-cards deck (excluding Joker). ",
            thereAre: "There are 3 betting options: Dragon, Tiger, and Tie.",
        },
    },
    gameRule: {
        title: "Game Rules",
        twoCards: "Two cards are drawn, one for the Dragon and one for the Tiger. ",
        thePlayerBet: "The players bet on Dragon or Tiger which one will win with the higher value card. ",
        thePlayerCan:
            "The players can also bet on “Tie” option if they predict Dragon and Tiger will have the same value card, irrespective of suit.",
        theGameDetermines: "The game determines the win or loss by comparing the point of the card instead of its suit.",
        maximum: " K is the maximum, while Ace is the minimum. ",
        cardPoint: {
            title: "Card’s point values:",
            ranking:
                "The ranking of cards from the lowest to the highest is as follows: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King.",
            aceStands: "Ace stands for 1 point; Jack is 11 points; Queen stands for 12 points and King is 13 points.",
            allCards: "All cards from 2 to 10 are counted at face value.",
        },
        playerCanBet: "Players can bet on one or more betting options shown on the game table. ",
        allBets: "All bets must be placed before the betting time expires. ",
        note: "Note, placed bets cannot be canceled.",
        theStandard: "The standard deck with 52 cards (excluding Joker) is shuffled after every round.",
    },
    payOuts: {
        title: "Payouts",
        description: {
            theWinning: "The winning amount is calculated according to the payout ratio. ",
            thePayout: "The Payout includes the initial stake.",
            allWinning: "All winning amounts are instantly added to your account balance when bets are settled.",
        },
        table: {
            header: {
                options: "Options",
                odds: "Payouts",
                betLimit: "Bet Limit <br /> (Min Max)",
                maxTotal: "Max Total Stake Per Round",
            },
        },
        note: "**  Note: The players bet on Dragon or Tiger will lose 50% of their stake if the result is a draw.",
    },
};
