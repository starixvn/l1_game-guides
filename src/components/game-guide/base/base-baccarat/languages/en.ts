import { baseTermAndConditionEn } from "../../terms-and-conditions/languages/en";
import { IBaseBaccaratResources } from "./types";

export const baseBaccaratResourcesEn: IBaseBaccaratResources = {
    introduction: {
        header: "",
        content: "",
    },
    gameRules: {
        header: "Game Rules",
        getDetails(environment: string | undefined, maxBetMain: number | string) {
            return [];
        },
        table: {
            header: {
                options: "Options",
                descriptions: "Descriptions",
            },
            contents: [
                {
                    choice: "Player",
                    rule: "The Player hand will win if the total points of Player are higher than Banker.",
                },
                {
                    choice: "Banker",
                    rule: "The Banker hand will win if the total points of Banker are higher than Player.",
                },
                {
                    choice: "Tie",
                    rule: "The Punter wins if two hands (Player and Banker) have finished with equal totals.",
                },
                {
                    choice: "Player Pair",
                    rule: "The Punter wins if the first two cards of the Player are a pair, irrespective of suit.",
                },
                {
                    choice: "Banker Pair",
                    rule: "The Punter wins if the first two cards of the Banker are a pair, irrespective of suit.",
                },
                {
                    choice: "Big",
                    rule: "The Punter wins if the total numbers of cards that have been dealt in one round are 5 or 6.",
                },
                {
                    choice: "Small",
                    rule: "The Punter wins if the total numbers of cards that have been dealt in one round are 4.",
                },
            ],
        },
    },
    pointRules: {
        header: "Point Calculation Rules",
        descriptions: {
            paragraph1: {
                cardPointValues: "Card’s point values:",
                details: [
                    "The cards (2 to 9) are counted at face value.",
                    "10 or face cards (Jack, Queen, King) have a value of 0, and Aces have a value of 1",
                ],
            },
            paragraph2:
                "When the total points exceed nine, the first digit of the total is dropped, and the second digit is the value of the hand.",
        },
        examples: {
            firstTwoCard: "First Two Cards",
            thirdCard: "Third Card",
            totals: "Totals",
            basedTotal: "Total Points Based On Baccarat Rules",
        },
    },
    thirdCardRules: {
        header: "Third Card Rules",
        descriptions: [
            "A third card will be dealt according to the strict rules of the game.",
            "If the total points of the first two cards of either hand are 8 or 9, this is called a “Natural” and no more cards are dealt, both the player and banker stand.",
        ],
        playerHand: {
            header: "Rules for the Player hand",
            cardsTotal: "Player’s first two cards total",
            action: "Action",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2, 3, 4, 5",
                    action: "Draws a third card.",
                },
                {
                    twoCardsTotal: "6 or 7",
                    action: "The Player always stands.",
                },
                {
                    twoCardsTotal: "8 or 9",
                    action: "“Natural” and no more cards are dealt, both the player and banker stand.",
                },
            ],
        },
        bankerHand: {
            header: "Rules for the Banker hand",
            firstDescription: "- If the Player hand gets the third card then the Banker draws a third card according to the following rules:",
            cardsTotal: "Banker’s first two cards total",
            action: "Banker draws when the Player’s third card has a point value:",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2",
                    action: "The Banker always draws a third card.",
                },
                {
                    twoCardsTotal: "3",
                    action: "The point value of 1, 2, 3, 4, 5, 6, 7, 9, 0 (not 8).",
                },
                {
                    twoCardsTotal: "4",
                    action: "The point value of 2, 3, 4, 5, 6, 7",
                },
                {
                    twoCardsTotal: "5",
                    action: "The point value of 4, 5, 6, 7",
                },
                {
                    twoCardsTotal: "6",
                    action: "The point value of 6 or 7",
                },
                {
                    twoCardsTotal: "7",
                    action: "The Banker always stands.",
                },
                {
                    twoCardsTotal: "8 or 9",
                    action: "“Natural” and no more cards are dealt, both the player and banker stand.",
                },
            ],
            secondDescription: [
                "If the total points of Player's first two cards are 6 or 7 then the Banker will stand on a total of 6 or 7, and draw on a total of 5 or less.",
            ],
        },
    },
    payouts: {
        header: "Payouts",
        descriptions: {
            details: [
                "The winning amount is calculated according to the betting odds.",
                "The Payout includes the initial stake.",
                "All winning amounts are instantly added to your account balance when bets are settled.",
            ],
            noted: "<strong>Note:</strong> All bets on Player and Banker will be refunded if the result is a draw.",
            options: "Options",
            odds: "Odds",
            betLimit: "Bet Limit </br>(Min - Max)",
            player: "Player",
            banker: "Banker",
            big: "Big",
            small: "Small",
            tie: "Tie",
            playerPair: "Player Pair",
            bankerPair: "Banker Pair",
        },
    },
    termsAndConditions: baseTermAndConditionEn,
};
