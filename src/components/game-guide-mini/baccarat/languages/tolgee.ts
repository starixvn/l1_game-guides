import { TolgeeInstance } from "@tolgee/react";
import { IBaccaratMiniTranslationResource } from "./types";

export function getBaccaratMiniTolgeeTranslationResource(tolgee: TolgeeInstance, languageTag: string): IBaccaratMiniTranslationResource {
    const namespace = "BaccaratMini";
    const getTranslation = (key: string, params?: any) => tolgee.t(key, {ns: namespace, params});
    
    return {
        introduction: {
            title: getTranslation("introduction_title"),
            description: getTranslation("introduction_description"),
        },
        gameRule: {
            title: getTranslation("game_rule_title"),
            description: {
                byDefault: getTranslation("game_rule_description_by_default"),
                theThirdCard: getTranslation("game_rule_description_the_third_card"),
                theGameDetermines: getTranslation("game_rule_description_the_game_determines"),
                theCards: getTranslation("game_rule_description_the_cards"),
            },
        },
        payouts: {
            title: getTranslation("payouts_title"),
            description: {
                thePayout: getTranslation("payouts_description_the_payout"),
                note: getTranslation("payouts_description_note"),
            },
            table: {
                header: {
                    options: getTranslation("payouts_table_header_options"),
                    betLimit: getTranslation("payouts_table_header_bet_limit"),
                },
                rows: {
                    player: getTranslation("payouts_table_rows_player"),
                    banker: getTranslation("payouts_table_rows_banker"),
                    tie: getTranslation("payouts_table_rows_tie"),
                },
            },
        },
    };
} 