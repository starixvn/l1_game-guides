import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesEn } from "../../base/base-baccarat/languages/en";
import { md5ResourcesEn } from "../../base/md5/languages/en";
import { IMd5Resources } from "../../base/md5/languages/types";
import { IMd5BaccaratResources } from "./types";

export const md5BccaratResourcesEn: IMd5Resources = {
    ...md5ResourcesEn,
    example: {
        header: "<strong> Example:</strong> check the authenticity and transparency of game results",
        details: {
            step1: {
                text: "<strong>Step 1:</strong> Copy the MD5 Key before the result is announced.",
                imageUrl: "/static/images/baccarat/md5_step1_en.png?v=1",
            },
            step2: {
                text: "<strong>Step 2:</strong> Copy the Result after the system publishes the dice result.",
                imageUrl: "/static/images/baccarat/md5_step2_en.png?v=1",
                noted1: "Note: From the left to right,",
                noted2: "corresponds to the order of dealt cards at the beginning of the game round.",
            },
            step3: {
                text: "<strong>Step 3:</strong> Go to {0} and paste the Result into the MD5 box.",
                imageUrl: "/static/images/baccarat/md5_step3_en.png?v=1",
            },
            step4: {
                text: "<strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 Key with the MD5 string in Step 1.",
                imageUrl: "/static/images/baccarat/md5_step4_en.png?v=1",
            },
        },
    },
};

export const baccaratResourcesEn: IMd5BaccaratResources = {
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
    md5: md5BccaratResourcesEn,
};
