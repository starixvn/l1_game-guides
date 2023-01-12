import { IFruitSlotTranslationResource } from "./types";

export const en: IFruitSlotTranslationResource = {
    gameRule: {
        title: "Game Rules",
        description: {
            line1: "Select the chip value you wish to play. All bets must be placed before the betting time expires.",
            note: "Please note that",
            noteText: "the placed bets cannot be canceled.",
            theMaxTotalStake: "The maximum total stake per round is",
            thePlayerCanPlaceBets:
                "The player can place bets on any available options; except for the Big and Small, the player either bet on one of these two bet options.",
            onceBettingTimeExpired: "Once the betting time has expired, the system will randomly generate the game results.",
            bigSmallResult: "Big/Small result: the system randomly generates a number in a range from 1 to 14.",
            bigResult: "Big: from 8 to 14",
            smallResult: "Small: from 1 to 7",
            symbolResult: "Symbol results: the system randomly generates a symbol shown on the table.",
        },
    },
    payOut: {
        title: "Payouts",
        winningAmount: "The winning amount is calculated according to the betting odds.",
        note: "Please note that",
        noteText: "the payouts include the initial stake.",
        allWinningAmount: "All winning amounts are instantly added to your account balance when bets are settled.",
        bettingOddsTable: "Betting odds table:",
        locales: "en",
    },
    lucky: {
        title: "Lucky Symbols",
        line1: {
            whenLuckySymbol: "When the lucky symbol appears, the system sequentially and randomly generates",
            or: "or",
            moreResult: "more results; ",
            exceptLuckySymbols: "except lucky symbols, and the extra generated results are not overlapped.",
        },
        line2: "The extra generated results are used to calculate the game result.",
        line3: "Big/Small results will not be regenerated in the lucky spin.",
        example: "Example",
        exampleText1: "If the spin result is the lucky symbol",
        exampleText2: ", the system sequentially generates two additional results.",
        firstAdditional: "The first additional symbol: ",
        secondAdditional: "The second additional symbol: ",
        lemonAndStar: "Lemon and Star symbols will be used to calculate the game result.",
    },
    main: {
        introduction: "Introduction",
        description:
            " is the traditional fruit slot machine innovated to provide players with an attractive and thrilling gameplay experience.",
    },
};
