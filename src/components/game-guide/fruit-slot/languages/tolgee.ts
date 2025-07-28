import { TolgeeInstance } from "@tolgee/react";
import { IFruitSlotTranslationResource } from "./types";

export const generateFruitSlotTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): IFruitSlotTranslationResource => {
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });
    const getFruitSlotTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "FruitSlot", params });

    return {
        gameRule: {
            title: getCommonTranslation("title_gamerules"),
            description: {
                line1: getFruitSlotTranslation("game_rules_line1"),
                noteText: getFruitSlotTranslation("game_rules_note_text"),
                theMaxTotalStake: getFruitSlotTranslation("game_rules_the_max_total_stake"),
                thePlayerCanPlaceBets: getFruitSlotTranslation("game_rules_the_player_can_place_bets"),
                onceBettingTimeExpired: getFruitSlotTranslation("game_rules_once_betting_time_expired"),
                bigSmallResult: getFruitSlotTranslation("game_rules_big_small_result"),
                bigResult: getFruitSlotTranslation("game_rules_big_result"),
                smallResult: getFruitSlotTranslation("game_rules_small_result"),
                symbolResult: getFruitSlotTranslation("game_rules_symbol_result"),
            },
        },
        payOut: {
            title: getCommonTranslation("title_payouts"),
            winningAmount: getFruitSlotTranslation("payout_winning_amount"),
            noteText: getFruitSlotTranslation("payout_note_text"),
            allWinningAmount: getFruitSlotTranslation("payout_all_winning_amount"),
            bettingOddsTable: getFruitSlotTranslation("payout_betting_odds_table"),
            locales: languageTag,
        },
        lucky: {
            title: getFruitSlotTranslation("lucky_title"),
            line1: getFruitSlotTranslation("lucky_line1"),
            line2: getFruitSlotTranslation("lucky_line2"),
            line3: getFruitSlotTranslation("lucky_line3"),
            example: getCommonTranslation("example"),
            exampleText1: getFruitSlotTranslation("lucky_example_text1"),
            exampleText2: getFruitSlotTranslation("lucky_example_text2"),
            firstAdditional: getFruitSlotTranslation("lucky_first_additional"),
            secondAdditional: getFruitSlotTranslation("lucky_second_additional"),
            lemonAndStar: getFruitSlotTranslation("lucky_lemon_and_star"),
        },
        main: {
            introduction: getCommonTranslation("title_introduction"),
            description: getFruitSlotTranslation("introduction_description"),
        },
    };
};
