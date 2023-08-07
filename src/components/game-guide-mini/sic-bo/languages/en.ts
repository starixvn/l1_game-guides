import { ISicBoTranslationResource } from "./types";

export const en: ISicBoTranslationResource = {
    introduction:
        "Sic bo is a dice game and is very popular in Asia. The game is played with three 6-sided dice. Each side of a die consists of from 1 to 6 dots corresponding from 1 to 6 points. ",
    winningCondition: {
        title: "Winning Conditions",
        description: {
            number: "Specific number: Win if the chosen number appears in the game result.",
            big: "Big: Win if the total point of three dice is from 11 to 17.",
            small: "Small: Win if the  total point of three dice is from 4 to 10.",
            note: "<strong>Note:</strong> Big or Small will lose if there are any triples appearing in the game result.",
        },
    },
    betLimit: {
        title: "Bet Limit",
        description: "The maximum total stake per round is {0}",
        table: {
            header: {
                options: "Bet Option",
                betLimit: "Bet Limit\n (Min-Max)",
            },
            rows: {
                big: "Big",
                small: "Small",
                specificNumber: "Specific number",
            },
        },
    },
};
