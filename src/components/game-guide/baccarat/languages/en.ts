import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesEn } from "../../base/base-baccarat/languages/en";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const baccaratResourcesEn: IBaseBaccaratResources = {
    ...baseBaccaratResourcesEn,
    introduction: {
        header: "Introduction",
        content:
            "Baccarat - is an enhanced version of Baccarat with higher betting limits. The game is played with one standard 52-card deck (excluding Joker). There are 7 betting options and Punters can bet on one or more betting options shown on the game table.",
    },
    gameRules: {
        ...baseBaccaratResourcesEn.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["Player and Banker, each hand will start with 2 face - down cards."];

                if (environment === ENVIRONMENT.sc || environment === ENVIRONMENT.sm) {
                    details = details.concat(["The Punter predicts which one in two hands will win."]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "The third card also will be drawn after finishing dealing 2 initial face-down cards for Player and Dealer’s hands.",
                        "The cards are numbered from one to six that correspond to the sequence of dealt cards at the beginning of the game round.",
                    ]);
                }

                return details.concat([
                    "Player and Banker, each hand will start with 2 face - down cards.",
                    "Another betting option is “Tie” if the Punters predict two hands will end in equal totals or they can also bet on Big, Small, Player Pair, or Banker Pair options.",
                    "All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.",
                    `The maximum total stake per round is ${maxBetMain}`,
                    "Once the betting time has expired, the dealer turns the cards face up.",
                    "Based on the total points of the first two cards, the dealer will determine whether either hand reveals a third card.",
                    "The game determines the win or loss by comparing the total points of all cards on each hand and the winning hand is the one closest to a total of 9 points.",
                    "The standard deck with 52 cards (excluding Joker) is shuffled after every round.",
                ]);
            },
        },
    },
    md5: {
        step1ImageUrl: "/static/images/baccarat/md5_step1_en.png?v=1",
        step2ImageUrl: "/static/images/baccarat/md5_step2_en.png?v=1",
        step3ImageUrl: "/static/images/baccarat/md5_step3.png?v=1",
        step4ImageUrl: "/static/images/baccarat/md5_step4.png?v=1",
        step2Noted1Text: "Note: From the left to right,",
        step2Noted2Text: "corresponds to the order of dealt cards at the beginning of the game round.",
    },
};
