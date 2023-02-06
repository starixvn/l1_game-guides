import { IPowerKenoTranslationResource } from "./types";

export const en: IPowerKenoTranslationResource = {
    common: {
        bettypes: "Bet Types",
        options: "Options",
        teamBlueRed: "Team Blue/Team Red",
        sumBigSmall: "Sum Big/Small",
        sumEvenOdd: "Sum Even/Odd",
        teamBlueBigSmall: "Team Blue Big/Small",
        teamRedBigSmall: "Team Red Big/Small",
        teamBlue: "Team Blue",
        teamRed: "Team Red",
        big: "Big",
        small: "Small",
        odd: "Odd",
        even: "Even",
    },
    main: {
        introduction: "Introduction",
        description:
            "{0} consists of 2 sets of numbers, one for “Team Blue”, and another for “Team Red”, each set of 80 numbers (from 01 to 80). The system will randomly draw 20 numbers (no duplicates) for each team. The object of this game is to predict the total score of the numbers drawn.",
    },
    gameRule: {
        title: "Game Rules",
        details: [
            "Make sure you bet an amount you’re comfortable with.",
            "Players can bet on one or more betting options shown on the game table.",
            "All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.",
            "The maximum total stake per round is {0}",
        ],
        bettingOptions: {
            winningConditions: "Winning Conditions",
            teamBlueDescription:
                "Player wins if the total points of Team Blue > Team Red.\
            <br />+ All bets will be refunded if the total points of both teams are equal.",
            teamRedDescription:
                "Player wins if the total points of Team Red > Team Blue.\
            <br />+ All bets will be refunded if the total points of both teams are equal.",
            sumBigDescription: "Player wins if the total points of both teams >= 1621",
            sumSmallDescription: "Player wins if the total points of both teams < 1621",
            sumEvenDescription: "Player wins if the total points of both teams are an even number.",
            sumOddDescription: "Player wins if the total points of both teams are an odd number.",
            teamBlueBigDescription: "Player wins if the total points of Team Blue >= 811",
            teamBlueSmallDescription: "Player wins if the total points of team Blue < 811",
            teamRedBigDescription: "Player wins if the total points of Team Red >= 811",
            teamRedSmallDescription: "Player wins if the total points of Team Red < 811",
        },
    },
    payOut: {
        title: "Payouts",
        description1: "The winning amount is calculated according to the betting odds.",
        description2: "The Payout includes the initial stake.",
        description3: "All winning amounts are instantly added to your account balance when bets are settled.",
        odds: "Odds",
        betLimit: "Bet Limit <br></br>(Min - Max)",
    },
    md5noted: "Noted: <span class={0}>899</span> and <span class={1}>807</span> are results of Team Blue and Team Red respectively.",
};
