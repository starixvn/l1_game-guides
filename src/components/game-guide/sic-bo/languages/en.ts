import { baseTermAndConditionEn } from "../../base/terms-and-conditions/languages/en";
import { ISicBoTranslationResource } from "./types";
export const en: ISicBoTranslationResource = {
    introduction: {
        title: "Introduction",
        description:
            "Sic Bo is a casino dice game that is widely popular in Asia. The game is played with three standard dice. The objective of this game is to predict the outcome of the dice roll. The player can bet on specific dice outcomes and the total value of the dice.",
    },
    gameRules: {
        title: "Game Rules",
        descriptions: [
            "Select the chip value you wish to play. Players can bet on one or more betting options shown on the game table.",
            "All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.",
            "Once the betting time has expired, the dice cup will be removed and the result is shown.",
        ],
        maximum: "The maximum total stake per round is {0}",
        otherDescriptions: [
            "The total stake amount of all players shown on each bet option is only for reference. For different markets and currencies, the totals are converted based on the internal rates set by the company.",
        ],
    },
    bettingOptions: {
        title: "Betting Options",
        description: {
            big: [
                "Bet on the total score of three dice is between 11 and 17 points.",
                "If three dice are of equal value, you lose this bet.",
            ],
            small: [
                "Bet on the total score of three dice is between 4 and 10 points.",
                "If three dice are of equal value, you lose this bet.",
            ],
            anyTriple: "To win this bet, all three dice must show the same number.",
            specificNumber: "Bet on a specific number from 1 to 6. If the chosen number has appeared among three dice, you win.",
            totalPoints:
                "Bet on the total score of three dice. The player predicts whether the total score of three dice is equal to a chosen number.",
        },
    },
    table: {
        options: "Options",
        choices: "Choices",
        description: "Description",
        odds: "Odds",
        betLimit: "Bet Limit <br/> (Min-Max)",
        big: "Big",
        small: "Small",
        anyTriple: "Any Triple",
        specificNumber: "Specific Number",
        totalPoints: "Total Points",
        betOnAnyNumber: "Bet on any number from 1 to 6",
        betOnTotalPoints: "Bet on any number from 4 to 17",
        numberAppearsOnce: "{0} if the chosen number appears once.",
        numberAppearsTwice: "{0} if the chosen number appears twice.",
        numberAppearsThreeTimes: "{0} if the chosen number appears on all three dice.",
    },
    payouts: {
        title: "Payouts",
        descriptions: [
            "The winning amount is calculated according to the betting odds. <b>Note,</b> the Payout includes the initial stake.",
            "All winning amounts are instantly added to your account balance when bets are settled.",
        ],
    },
    md5: {
        step1ImageUrl: "/static/images/sicbo/md5_step1_en.png",
        step2ImageUrl: "/static/images/sicbo/md5_step2_en.png",
        note: "Note: From the left to right, {3,2,1} correspond to the the value of three dice.",
    },
    termsAndConditions: baseTermAndConditionEn,
};
