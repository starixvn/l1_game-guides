import { ILuckyWheelTranslationResource } from "./types";

export const en: ILuckyWheelTranslationResource = {
    introduction: "",
    promotionProgram: {
        title: "Promotion Program",
        scoin: "The players having Free Spins can play Lucky Wheel and receive Scoin",
        description: [
            "Scoin obtained from Lucky Wheel will automatically be added to your Scoin wallet.",
            "There is no limit to the number of free spins can play per day.",
        ],
    },
    gameRules: {
        title: "How to place a bet using Scoin",
        description: [
            "Scoin can only be used to play the Se Die game in Vgaming.",
            "The Free Spins will be valid for a week from the time the players get the notification. After this period, any unused Free Spins will be lost.",
            "The winning amount from the Se Die game using Scoin will be credited to your account balance.",
        ],
        note: {
            content: "Note:",
            description: [
                "Scoin cannot be exchanged for cash.",
                "Scoin is only available for Se Die, with other games, the stakes will be deducted directly from your account balance.",
            ],
        },
    },
    termsAndConditions: {
        title: "Terms and Conditions",
        line1: "By entering into this promotion you agree to be bound by these terms and conditions.",
        description: [
            "The Company reserves the right to cancel any Lucky Wheel results because of a force majeure event including but not limited to any technical errors, network service failures, power failures.",
            "In the case of any suspicious or fraudulent gameplay/behavior, the Company reserves the right to cancel the Lucky Wheel results or exclude players from this promotion.",
            "The Company reserves the right to vary any of the terms of entry applying to this promotion or to modify, terminate, suspend, or reschedule this promotion at any time.",
            "Any dispute arising from or in the connection with this promotion shall be decided by the Company.",
        ],
    },
};
