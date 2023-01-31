import { baseTermAndConditionEn } from "../../base/terms-and-conditions/languages/en";
import { IHiLoTranslationResource } from "./types";
export const en: IHiLoTranslationResource = {
    introduction: {
        title: "Introduction",
        description:
            "Hi-Lo is a popular card game with the simplest of rules. The game is played with a standard 52-card deck (excluding Joker). The aim of the game is to guess whether the next card to be dealt will be higher or lower than the current one.",
    },
    gameRules: {
        title: "Game Rules",
        description: {
            line1: "Select the bet amount that suits you best. Click or tap on the “Play” button to start the game.",
            line2: "The system will randomly pick up the first card (base card) and the Player will choose whether the next card (result card) will be higher (Hi) or lower (Lo).",
            line3: "After each turn, if the result is a win, the Player can decide whether to stop or continue playing the next turn.",
            subLines: [
                "Click or tap on the button “Collect” to stop playing and get the payout.",
                "Continue playing the next turn, the result card for the turn will become the base card for the next turn, and the payout of the turn will be the bet amount for the next turn.",
            ],
        },
        example: {
            title: "Example",
            description: {
                introduction: "The system randomly picks up the first card (base card) = {0}. Player places bet 100 on the “Low” option.",
                result: {
                    detail: "Result card: {0} => Player wins and payout = 163. There are 2 options:",
                    option1: "Click or tap on the button “Collect”  to stop playing => Player gets 163 into the balance account.",
                    option2:
                        "Continue playing the next turn, then the Player guesses whether the next card will be higher or lower than the current card ({0}), with a bet amount = 163",
                },
                note: {
                    completeTurn: "The Player will have 2 minutes to complete a turn (decide to select either Hi or Lo).",
                    autoSettle: {
                        detail: "If the Player cannot complete a turn within 2 minutes:",
                        subLines: [
                            "The system will randomly select the Hi or Lo for the first turn that the User has clicked or tapped on the “Play” button.",
                            "Other turns will be treated as “Collect”.",
                        ],
                    },
                    shuffleCard: "The cards will be shuffled after each turn.",
                },
            },
        },
    },
    cardValues: {
        title: "Card Values",
        line1: "The card's value is ranked from the lowest to the highest in the following order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), and Ace (A)",
        line2: "All the suits - heart ({0}), spade ({1}), diamond ({2}), and club ({3}) have equal value.",
        note: {
            title: "Note",
            descriptions: [
                "If the Base Card and Result Card are the same ranks then the result is Tie. The Player continues to play the next turn.",
                "If the Base Card is 2 or Ace. The Player will have only one option to select, High for 2 and Low for Ace and the result is Tie for that turn.",
            ],
        },
    },
    payout: {
        title: "Payout",
        descriptions: [
            "The Payout includes the initial stake.",
            "The payout for correctly guessing whether the next card will be higher or lower could vary each turn.",
        ],
    },
    termsAndConditions: baseTermAndConditionEn,
};
