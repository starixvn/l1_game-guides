import { baseTermAndConditionEn } from "../../base/terms-and-conditions/languages/en";
import { IFanTanTranslationResource } from "./types";
export const en: IFanTanTranslationResource = {
    introduction: {
        title: "Introduction",
        description:
            "Fan Tan is a Casino game that is pretty popular all across Asia. It is played with 150 white beads, there are 14 bet options on the table, and Player will predict and place bet on which bet option will win.",
    },
    gameRules: {
        title: "Game rules",
        description:
            "At the beginning of a round, Dealer will use a cup to take a random number of beads on the table. When betting time is finished, Dealer will separate the taken beads into groups of four until the remaining beads are equal or less than 4 – and that is the winning result. ",
        example: {
            title: "Example",
            resultDetails: [
                "The randomly taken number of beads is 30 and separated into groups of four:<p>7 x 4 + 2 = 30. The remaining beads are 2 => the round result is 2</p>",
                "The randomly taken number of beads is 40 and separated into groups of four:<p>9 x 4 + 4 = 40. The remaining beads are 4 => the round result is 4</p>",
            ],
            haveOptions: undefined,
            descriptions: [
                "Player selects the chip value and places it on the desired bet options. All bets must be placed before the betting time expires. Note that, the placed bets cannot be canceled.",
                "The player can place bets on any available options except for Odd and Even, the player can only bet on either Odd or Even.",
            ],
            maxBet: "The maximum total stake per round is {0}",
        },
        winningCondition: {
            odd: "The remaining beads are Odd number",
            even: "The remaining beads are Even number",
            fan1: "The remaining beads are 1",
            fan2: "The remaining beads are 2",
            fan3: "The remaining beads are 3",
            fan4: "The remaining beads are 4",
            kwok12: "The remaining beads are 1 or 2",
            kwok23: "The remaining beads are 2 or 3",
            kwok34: "The remaining beads are 3 or 4",
            kwok41: "The remaining beads are 1 or 4",
            chun234: "The remaining beads are 2, 3 or 4",
            chun134: "The remaining beads are 1, 3 or 4",
            chun124: "The remaining beads are 1, 2 or 4",
            chun123: "The remaining beads are 1, 2 or 3",
        },
    },
    table: {
        betType: "Bet Type",
        betOption: "Bet Option",
        winningCondition: "Winning Condition",
        odds: "Odds",
        betLimit: "Bet Limit (Min-Max)",
        oddEven: "Odd Even",
        odd: "Odd",
        even: "Even",
        fan: "Fan",
        fan1: "1 Fan",
        fan2: "2 Fan",
        fan3: "3 Fan",
        fan4: "4 Fan",
        kwok: "Kwok",
        chun: "Chun",
    },
    payouts: {
        title: "Payouts",
        descriptions: [
            "The winning amount is calculated according to the betting odds. <p><b>Note:</b> the payouts include the initial stake.</p>",
            "All winning amounts are instantly added to your account balance when bets are settled.",
        ],
    },
    md5: {
        example: "<b>Example:</b> check the authenticity and transparency of game results",
        note: "<b>Note:</b> 40 corresponds to the random number of beads taken at the beginning of the game round",
        step1: "<b>Step 1:</b> Copy the MD5 Key before the result is announced.",
        step2: "<b>Step 2:</b> Copy the Result after it is published.",
        step3: `<b>Step 3:</b> Go to <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> and paste the Result into the MD5 box.`,
        step4: "<b>Step 4:</b> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with the MD5 Key in Step 1.",
    },
    termsAndConditions: baseTermAndConditionEn,
};
