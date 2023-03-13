import { ISeDieMiniTranslationResource } from "./types";

export const en: ISeDieMiniTranslationResource = {
    introduction:
        "Mini Se Die is played with 4 colored buttons, each has two sides colored in red and white. The objective of this game is to predict the outcome of 4 buttons.",
    winningCondition: {
        title: "Winning Conditions",
        description: {
            odd: "ODD: if the total red or white buttons having in the result is an Odd number.",
            even: "EVEN: if the total red or white buttons having in the result is an Even number.",
            otherBet: "Other bet options as",
            ifThe: "if the outcome matches the player’s bet, the player wins.",
        },
    },
    betLimit: {
        title: "Bet Limit",
        description: "The maximum total stake per round is {0}",
        table: {
            header: {
                options: "Options",
                betLimit: "Bet Limit",
            },
            rows: {
                oddEven: "ODD/EVEN",
                or: "or",
            },
        },
    },
};
