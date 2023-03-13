import { IHiLoMiniTranslationResource } from "./types";
export const en: IHiLoMiniTranslationResource = {
    introduction:
        "The game is played with a standard 52-card deck (excluding the Joker). The aim of the game is to guess whether the next card to be dealt will be higher or lower than the current one.",
    winningCondition: {
        title: "Winning Conditions",
        description: {
            thePlayerCan:
                "After each turn, if the result is a win, the Player can decide whether to stop or continue playing the next turn.",
            collect: "Click the button “Collect” to stop playing and get the payout.",
            playContinue:
                "Continue playing the next turn, the result card for the turn will become the base card for the next turn, and the payout of the turn will be the bet amount for the next turn.",
            unfinishedGame:
                "The Player will have 2 minutes to complete a turn (decide to select either Hi or Lo). If the Player cannot complete a turn within 2 minutes:",
            firstTurn:
                "The system will randomly select the Hi or Lo for the first turn that the User has clicked or tapped on the “Play” button.",
            otherTurns: "Other turns will be treated as “Collect”.",
            arrangeCards:
                "The card's value is ranked from the lowest to the highest in the following order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), and Ace (A)",
            allTheSuits: "All the suits -",
            heart: " heart (",
            spade: "), spade (",
            diamond: "), diamond (",
            andClub: "), and club (",
            equalValue: ") have equal value.",
        },
    },
    payout: {
        title: "Payout",
        description: "The payout for correctly guessing whether the next card will be higher or lower could vary each turn.",
    },
};
