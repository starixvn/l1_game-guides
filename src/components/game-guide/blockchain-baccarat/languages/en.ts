import { baseBaccaratResourcesEn } from "../../base/base-baccarat/languages/en";
import { IBlockchainBaccaratResources } from "./types";

export const en: IBlockchainBaccaratResources = {
    ...baseBaccaratResourcesEn,
    introduction: {
        header: "Introduction",
        content:
            "Blockchain baccarat - a card game with Fairness Guarantees, the new breakthrough with blockchain technology. The game uses 8 decks of cards (416 cards excluding the Joker). There are 7 betting options and Punters can bet on one or more betting options shown on the game table.",
    },
    extendGameRules: {
        cutCard: {
            header: "Cut Card",
            description:
                "Cut Card: a special card is used to indicate where the shoe will end and all cards will be reshuffled. Cut Card will  be inserted in the middle of the card pack (416 cards) at the beginning of the new shoe.",
        },
        burnCard: {
            header: "Burn Card",
            description:
                "After the Cut Card has been inserted, there is a burn card process. The number of card that will be burned (discard without using), is dependent on the value of the first card taken out of the new Shoe.",
            noted: "<strong>Note</strong>: The first card on top of the card pack (416 cards) is also discarded.",
            firstCard: "First Card",
            example: {
                header: "Example",
                descriptions: [
                    "If the first card is 5 => 6 cards will be removed (5 burned cards + the first card)",
                    "If the first card is K => 11 cards will be removed (10 burned cards + K card)",
                ],
            },
        },
    },
    gameRules: {
        ...baseBaccaratResourcesEn.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                return [
                    "By default, 6 cards will be drawn at the beginning of each round. Player and Banker, each hand will start with 2 cards face down.",
                    "The third card will be dealt according to the total points of the first 2 cards on each hand.",
                    "If the round ends with a total of less than 6 cards dealt, the remaining cards will be used for the next round.",
                    "The game determines the win or loss by comparing the total points of all cards on each hand and the winning hand is the one closest to a total of 9 points.",
                    "All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.",
                    `The maximum total stake per round is ${maxBetMain}`,
                ];
            },
        },
    },
};
