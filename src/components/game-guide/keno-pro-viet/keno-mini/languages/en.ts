import { baseTermAndConditionEn } from "../../../base/terms-and-conditions/languages/en";
import { IKenoTranslationResource } from "../../keno-max/languages/types";

export const en: IKenoTranslationResource = {
    introduction: {
        title: "Introduction",
        description:
            "Keno Mini / Keno Mini 2 are the RNG Keno with 40 balls. There are 10 balls drawn randomly from 40 numbered balls ranging from 1 to 40. Players place bets on one or more betting options shown on the game table. The total sum of the 10 numbered balls drawn will determine the player’s win or loss.",
    },
    gameRules: {
        title: "Game Rules",
        description: {
            lines: [
                "All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.",
                "Once the betting time has expired, the result will be shown.",
            ],
            maximum: "The maximum total stake per round is {0}",
            otherLine: undefined,
        },
    },
    bettingOptions: {
        title: "Betting Options",
        bigSmall: {
            title: "Big/Small",
            descriptions: [
                "<b>Big:</b> The sum of the 10 numbered balls drawn is >= 206",
                "<b>Small:</b> The sum of the 10 numbered balls drawn is <= 205",
            ],
            winningText: "Players bet on Small will win.",
        },
        oddEven: {
            title: "Odd/Even",
            descriptions: [
                "<b>Odd:</b> the sum of the 10 numbered balls drawn is an odd number.",
                "<b>Even:</b> the sum of the 10 numbered balls drawn is an even number.",
            ],
            winningText: "Players bet on ODD will win.",
        },
        fiveElement: {
            title: "Five Elements (Gold, Wood, Water, Fire, Earth)",
            descriptions: [
                "<b>Gold:</b> The sum of the 10 numbered balls drawn, ranges from 55 to 163.",
                "<b>Wood:</b> The sum of the 10 numbered balls drawn, ranges from 164 to 187.",
                "<b>Water:</b> The sum of the 10 numbered balls drawn, ranges from 188 to 222.",
                "<b>Fire:</b> The sum of the 10 numbered balls drawn, ranges from 223 to 246.",
                "<b>Earth:</b> The sum of the 10 numbered balls drawn, ranges from 247 to 355.",
            ],
            winningText: "Players bet on FIRE will win.",
        },
        example: {
            description: "<b>Example:</b> Set of 20 numbered balls drawn randomly from 80 numbered balls",
            drawResult: "Draw Results",
            totalSum: "Total Sum",
        },
    },
    payouts: {
        title: "Payouts",
        descriptions: [
            "The winning amount is calculated according to the betting odds.",
            "The Payout includes the initial stake.",
            "All winning amounts are instantly added to your account balance when bets are settled.",
        ],
        options: "Options",
        odds: "Odds",
        betLimit: "Bet Limit",
        min: "Min",
        max: "Max",
        big: "Big",
        small: "Small",
        odd: "Odd",
        even: "Even",
        gold: "Gold",
        wood: "Wood",
        water: "Water",
        fire: "Fire",
        earth: "Earth",
    },
    md5: {
        image1: "/static/images/keno-mini/md5_step1_en.png",
        image2: "/static/images/keno-mini/md5_step2_en.png",
        note: "Noted: 237 is the total point of the game result.",
    },
    termsAndConditions: baseTermAndConditionEn,
};
