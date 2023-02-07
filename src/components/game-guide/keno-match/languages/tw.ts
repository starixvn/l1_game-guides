import { IPowerSoccerTranslationResource } from "./types";

export const tw: IPowerSoccerTranslationResource = {
    common: {
        bettypes: "Bet Types",
        options: "Options",
        teamBlue: "Team Blue",
        teamRed: "Team Red",
        odd: "Odd",
        even: "Even",
        firstHalf: "First Half",
        fullTime: "Full Time",
        fullTimeLive: "Full Time (Live)",
        over: "Over",
        under: "Under",
    },
    main: {
        introduction: "Introduction",
        description:
            "{0} consists of 2 sets of numbers, one for “Team Blue”, and another for “Team Red”, each set of 80 numbers\
        (from 01 to 80). The system will randomly draw 20 numbers (no duplicates) for each team, of which 10 numbers are\
        drawn for “First Half” and 10 numbers are drawn for “Full Time”. The object of this game is to predict the total\
        score of the numbers drawn for each team.",
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
            text: "Betting Options",
            description1: 'Each round has two draws, with the first draw is for "First Half" result and the second is for "Full Time".',
            description2: "The Player will have two different intervals to place bet:",
            description3:
                "Place bets before any numbers are drawn for the “First Half” result, you can place bets on “First Half” and “Full Time”, applicable to all bet types. The payout ratio is fixed and stays the same across all game rounds.",
            description4:
                ' <strong> Live Betting</strong>: Place bets right after the results of the First Half for both teams are\
            announced. <strong>Note</strong>, only place bets in "Full Time". The payout ratio will change based on\
            the result of the “First Half”.',
            winningConditions: "Winning Conditions",

            firstHalfTeamBlueDescription:
                "Player wins if the total points of 10 randomly drawn numbers for team Blue > team Red. <br />+ All bets will be refunded if the total points of both teams are equal.",
            fullTimeTeamBlueDescription:
                "Player wins if the total points (First Half + Full Time) of team Blue > team Red. <br />+ All bets will be refunded if the total points of both teams are equal.",

            firstHalfTeamRedDescription:
                "Player wins if the total points of 10 randomly drawn numbers for team Red > team Blue. <br />+ All bets will be refunded if the total points of both teams are equal.",
            fullTimeTeamRedDescription:
                "Player wins if the total points (First Half + Full Time) of team Red > team Blue. <br />+ All bets will be refunded if the total points of both teams are equal.",

            firstHalfOverDescription: "Player wins if the total points (in the First Half) of both teams >= 811",
            fullTimeOverDescription: "Player wins if the total points (First Half + Full Time) of both teams >= 1621",

            firstHalfUnderDescription: "Player wins if the total points (in the First Half) of both teams < 811",
            fullTimeUnderDescription: "Player wins if the total points (First Half + Full Time) of both teams < 1621",

            firstHalfEvenDescription: "Player wins if the total points (in the First Half) of both teams are an even number.",
            fullTimeEvenDescription: "Player wins if the total points (First Half + Full Time) of both teams are an even number.",

            firstHalfOddnDescription: "Player wins if the total points (in the First Half) of both teams are an odd number.",
            fullTimeOddDescription: "Player wins if the total points (First Half + Full Time) of both teams are an odd number.",
        },
    },
    payOut: {
        title: "Payouts",
        description1: "The winning amount is calculated according to the betting odds.",
        description2: "The Payout includes the initial stake.",
        description3: "All winning amounts are instantly added to your account balance when bets are settled.",
        odds: "Odds",
        betLimit: "Payouts<br></br>(Min - Max)",
        firstHalfPayout: "a) Place bets before any numbers are drawn for the “First Half” result",
        liveBettingPayout: {
            text: "b) Live Betting",
            mainDescription:
                "For bet options <strong>Team Blue/Red - Full Time (Live)</strong> and <strong>Over/Under - Full Time (Live)</strong>",
            description1: 'The payout ratio will vary depending on the "First Half" result of both teams',
            description2: "The maximum bet limit will change according to the payout ratio.",
            highLightDescription1:
                '<strong>Team Blue/Red - Full Time (Live)</strong>: Payout is only available when the total score difference between Team Blue and Team Red in the "First Half", is between -150 and 150',
            highLightDescription2:
                " <strong>Over/Under - Full Time (Live)</strong>: Payout is only available when the total score in the “First Half” of both teams is between 661 and 980",
            min: "Min",
            max: "Max",
            betLimit: "Bet Limit",
        },
    },
    md5noted:
        "Noted: <span class={0}>363</span> and <span class={1}>467</span> are first haft result of Team Blue and Team Red respectively",
};
