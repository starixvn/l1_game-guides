import { TreasureIslandLanguage } from "./types";

export const en: TreasureIslandLanguage = {
    introduction: {
        title: "Introduction",
        description:
            "Treasure Island is an online cascading slot game that has become extremely popular with online gamers as it offers multiple chances to win when compared to the older-style slot machines. \
            The game consists of six reels, five rows, and ten different symbols.",
    },

    gameRules: {
        title: "Game Rules",
        rulePlayerSelect: "The Player selects or adjusts the bet amount that suits you the best before pressing the “Spin” button.",
        totalBet: "Total Bet",
        paylinesFormular: "= BetLevel * Coin Value * Bet Multiplier",
        subDescriptions: [
            "1. The coin value is how much you want to spend per line in the game.",
            "2. Bet level is the total number of coins per line.",
            "3. Bet Multiplier is the multiplier used to calculate the Total Bet by multiplying with Bet Level and Coin Value. Bet Multiplier: 20x.",
        ],
        ruleStartSpin: "The player can press the “Spin” button, or use the Spacebar/Enter key on the keyboard to start the spin.",
        ruleWin: "The total number of the same symbols on the screen at the end of a spin determines the value of the Win.",
        betLimit: "Bet limit:",
    },

    payout: {
        title: "Payouts",
        description1: [
            "Symbols pay anywhere on the screen.",
            "The Win-loss of each combination will be calculated based on the base bet value.",
        ],
        baseBetValue: "Base Bet Value = Bet Level * Coin Value",
        description2: "The payouts table will be updated according to the value of the base bet that you have selected.",
        description3(currMaxBet: number) {
            return [
                "The winning amounts is instantly added to your account balance when all of the tumbles resulting from a base spin have been played.",
                `The maximum win amount is limited to ${currMaxBet}X bet. If the total win of a round reaches the max win value, the game round immediately ends. \
                The win is awarded up to the limitation and all remaining features are forfeited. `,
            ];
        },
    },

    examplePayout: {
        content: "<strong> Example:</strong> Your base bet value is",
        table: {
            headers: ["Symbol", "Description"],
            getHavingSymbol(symbol: string) {
                return `Having ${symbol} symbols `;
            },
            descriptionContent: "appear on the result board.",
            payout: "Payout =",
        },
    },

    tumbling: {
        title: "Tumbling Feature",
        descriptions: [
            "After every spin, the winning combinations get paid, and all of the winning symbols will be removed from the reels, allowing new symbols to drop into the empty position.",
            "The tumbling will continue until no more winning combinations appear as a result of a tumble.",
            "There is no limit to the number of possible tumbles.",
        ],
    },

    multipliers: {
        title: "Multipliers",
        descriptions: [
            "The Multiplier symbols are present on all reels and can hit randomly during the spin, and tumble in both base game and free spins.",
            "Whenever a Multiplier symbol hits, it takes a random multiplier value from 2x to 500x.",
            "At the end of Tumbles, the value of Multiplier symbols is added and multiplied with the Tumble Win value to calculate the Win amount.",
        ],
    },

    exampleMultipliers: {
        title: "Example:",
        tableHeader: ["Win Symbols", "Tumble Win", "Multiplier", "Win"],
    },

    freeSpin: {
        title: "Free Spins Feature",
        define: "The Free Spins feature is awarded when 4 or more SCATTER symbols appear anywhere on the screen.",
        subDescriptions: {
            tableHeader: ["Symbol", "Description"],
            getSymbolOrMore(symbol: string) {
                return `Having ${symbol} or more Scatter symbols in the result.`;
            },
            getSymbol(symbol: string) {
                return `Having ${symbol} Scatter symbols in the result.`;
            },
            getFreeSpin(count: number) {
                return `Get “${count}” Free Spins Bonus.`;
            },
        },
        getMoreFreeSpin(value: number) {
            return `Whenever 4 or more SCATTER symbols appear during the Free Spins round, ${value} additional free spins are awarded.`;
        },
        totalMultiplier:
            "For the whole duration of Free Spins rounds, whenever any new Multiplier symbols appear and the spinning result in the win, the Multiplier value is added to the total multiplier. \
            The Total Multiplier value is used to calculate the Win amount.",
        freeSpin24h: "The Player must complete the Free Spins Bonus within 24hrs after being issued. Unused Free Spins will be lost.",
    },

    exampleFreeSpin: {
        title: "Example: The player wins 4 Free Spins",
        table: {
            headers: ["Round id", "Tumble Win", "Multiplier", "Total Multiplier", "Win"],
            round1Win: "<strong>50</strong><br/><strong>(Tumble Win * Total Multiplier)</strong>",
            round2Win: "<strong>5</strong><br/><strong>(Tumble Win)</strong>",
            round4Win: "<strong>56</strong><br/><strong>(Tumble Win * Total Multiplier)</strong>",
        },
        tumbleDescriptions: ["1. Tumble Win Amount", "2. Total Multiplier: 5+3 =8"],
    },
};
