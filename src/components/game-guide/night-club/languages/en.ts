import { INighClubTranslationResource } from "./types";

export const en: INighClubTranslationResource = {
    gameRule: {
        title: "Game Rules",
        description: {
            line1: "The Player selects the Paylines (Lines) and sets the Bet Level you want to place bet before pressing “Spin”.",
            totalBet: "Total Bet",
            paylinesFormular: "= Paylines * Bet Level",
            note: "Note",
            newExperience: "Player can use the “Spacebar” key on PC, instead of the “Spin” button to have a new experience.",
            atLeastOnePayline:
                "25 Paylines are numbered from 1 to 25 and the Player must choose at least one Payline before starting the game.",
            paylineWinLoss:
                "The Win-loss on each Payline will be calculated based on the number of the same symbols located on that Payline.",
        },
    },
    payOut: {
        paytable: "Paytable",
        winningAmount: "The winning amount is calculated according to the betting odds",
        note: "Note",
        initialStake: "the Payout includes the initial stake.",
    },
    examplePayout: {
        title: "Example",
        table: {
            symbolHeader: "Symbol",
            descriptionHeader: "Description",
            having5Symbols: "Having 5 symbols",
            samePayline: "located on the same payline",
            payoutBetLevel: "Payout = Bet Level *",
            having3Symbols: "Having 3 symbols",
            having4Symbols: "Having 4 symbols",
        },
    },
    freeSpin: {
        title: "Free Spin",
        description1: "Players will receive Free Spins Bonus corresponding to the number of Free Spins symbols having in the result.",
        description2: "The Free Spin symbols do not have to be on the same payline.",
        symbolHeader: "Symbol",
        descriptionHeader: "Description",
        having5FreeSpins: "Having 5 Free Spin symbols in the result.",
        having4FreeSpins: "Having 4 Free Spin symbols in the result.",
        having3FreeSpins: "Having 3 Free Spin symbols in the result.",
        get: "Get",
        freeSpinBonus: "Free Spins Bonus.",
        note: "Note",
        freeSpinReel:
            "The “Free Spin” symbols must appear in different reels. For example, if there are 3 “Free Spin” symbols on the same reel, the system will count as one symbol.",
        thereAre4:
            "There are 4 “Free Spin” symbols in the result, but 3 symbols are located on the same reel. The player is not eligible for the Free spins bonus.",
        lastFreespin:
            "Free Spins are played at the same Bet Level and same number of paylines as the last spin (the spin on which the User gets the Free Spins Bonus).",
        freeSpinExpired: "The Player must complete Free Spins Bonus within 24hrs after being issued. Unused Free Spins will be lost.",
    },
    bonus: {
        title: "Bonus",
        description1: "Having 3, 4, or 5 Bonus symbols appearing anywhere in the result will trigger the Bonus Game.",
        description2: "The Bonus symbols do not have to be on the same payline.",
        symbolHeader: "Symbol",
        descriptionHeader: "Description",
        having5Bonuses: "Having 5 Bonus symbols in the result.",
        having4Bonuses: "Having 4 Bonus symbols in the result.",
        having3Bonuses: "Having 3 Bonus symbols in the result.",
        canOpen: "Can open",
        itemInBonusGame: "items in Bonus Game.",
        note: "Note",
        bonusReel:
            "The Bonus symbols must appear in different reels. For example, if 2 or 3 Bonus symbols appearing on the same reel, the system will count as one symbol.",
        thereAre4: "There are 4",
        eligible: "symbols in the result, but 2 symbols are located on the same reel. The player is only eligible for 3 items.",
        bonusExpired:
            "Player has to complete the Bonus Game within 120 seconds of countdown. After this period, the system will randomly open items and settle the game round.",
    },
    wild: {
        title: "Wild",
        substitute: "“Wild” symbol can substitute for all symbols except",
        and: "and",
        endSubstitute: "",
        onlyHighest: "Only the highest achieved win per line is paid out.",
        example: "Example",
        ifwild: "If Wild symbol is",
        payoutBetLevel: "Payout = Bet Level *",
        highestWin: "Player will get the highest win on this payline",
    },
    main: {
        introduction: "Introduction",
        description:
            "is an online slot game, with attractive gameplay, and gripping graphics. The game includes 5 reels and 3 rows, with 11 different symbols. Players will win if there are the same symbols located on the same payline that you have chosen.",
    },
};
