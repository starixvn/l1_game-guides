import { IBitcoinMasterTranslationResource } from "./types";
export const en: IBitcoinMasterTranslationResource = {
    introduction: {
        title: "Introduction",
        description:
            "Bitcoin Master is a new type of betting game that allows players to place bets based on Bitcoin value for the next 60 seconds. There are 4 options: Up, Down, Even, Odd.",
    },
    gameRules: {
        title: "Game Rules",
        descriptions: [
            "The object of this game is to predict the last recorded bitcoin value after 60 seconds (Result Price) is an Odd or Even number, Up or Down compared with the initial value (Betting Price).",
            "There are 2 types of bets: Up/Down, Even/Odd. For each bettype, the Players are only allowed to place bets on one option.",
        ],
        winningConditions: {
            up: "The “Result Price” is higher than the “Betting Price”.",
            down: "The “Result Price” is lower than the “Betting Price”.",
            even: "The Result Price is an even number.<br />+ Note: A number is even if its units digit is even.",
            odd: "The Result Price is an odd number.<br />+ Note: A number is odd if its units digit is odd.",
        },
        example1: {
            title: "<b>Example:</b> With Up/Down bettype, the players can bet on either Up or Down, but not on both.",
            increaseStake:
                "Players can increase their stake amount by placing another bet with the same selection before the betting time expires.",
            maxBet: "The maximum total stake per round is {0}. Note, placed bets cannot be canceled.",
            otherDescriptions: [
                "For Up/Down bettype, the stake will be refunded in case the Bitcoin value does not change after 60s, the “Result Price” is equal to “Betting Price”.",
                "The Bitcoin (USD) value shown in the game is the average of real-time data from 4 exchanges:",
            ],
        },
        example2: {
            title: "Example",
            descriptions: [
                "Bitcoin value at the starting time (Betting Price) = <b>57,761.13</b>",
                "Bitcoin value at 60 seconds (Result Price) = <b>58,011.08</b>",
            ],
            upDown: {
                title: "Up/Down",
                description: "+ Result Price > Betting Price. Place a bet on the option “Up” will win",
            },
            evenOdd: {
                title: "Even/Odd",
                description: "+ Result Price is an odd number (58,011). Place a bet on “Odd” will win",
            },
        },
        balancedBettingPool:
            "<b>Balanced Betting Pool:</b> With the same bettype, if the total amounts bet on each option are different then the gap amount will be refunded to the players who have the latest bet ticket.",
        example3:
            "<b>Example:</b> With Up/Down bettype, player A bets 100 on UP, player B bets 40 on DOWN, and C bets 80 on DOWN. To balance the total amounts bet on UP and DOWN, the system will refund 20 to player C.",
    },
    table: {
        betType: "Bet Type",
        options: "Options",
        winningConditions: "Winning Conditions",
        odds: "Odds",
        betLimit: "Bet Limit <br />(Min - Max)",
        upDown: "Up/Down",
        up: "Up",
        down: "Down",
        evenOdd: "Even/Odd",
        even: "Even",
        odd: "Odd",
    },
    payouts: {
        title: "Payouts",
        descriptions: [
            "The winning amount is calculated according to the betting odds.",
            "The Payout includes the initial stake.",
            "All winning amounts are instantly added to your account balance when bets are settled.",
        ],
    },
};
