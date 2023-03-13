import { IBigSmallMiniTranslationResource } from "./types";

export const en: IBigSmallMiniTranslationResource = {
    introduction:
        "Big Small is an exciting dice game played with three dice. The players place bets and predict the total points of the three dice are BIG or SMALL.",
    winningCondition: {
        title: "Winning Condition",
        description: {
            thePlayerCan: "The player can bet on either BIG or SMALL, but not on both.",
            big: "BIG: the total points of three dice >= 11",
            small: "SMALL: the total points of the three dice <= 10",
            balanced:
                "Balanced Betting Pool: if the total amounts bet on BIG and SMALL are different then the gap amount will be refunded to the players who have the latest bet ticket.",
        },
        example:
            "Example: Player A bets 100 on BIG, player B bets 40 on SMALL, and C bets 80 on SMALL. To balance the total amounts bet on BIG and SMALL, the system will refund 20 to player C.",
    },
    betLimit: {
        title: "Bet Limit",
        description: "Min bet and Max bet must be between {0} - {1} and the maximum total stake per round is {2}",
    },
};
