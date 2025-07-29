import { TolgeeInstance } from "@tolgee/react";
import { IBaccaratMiniTranslationResource } from "./types";

export const getBaccaratMiniTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): IBaccaratMiniTranslationResource => {
    const getCommonTranslation = (key: string, params?: any) => {
        const translation = tolgee.t({ key, ns: "Common", params });
        return translation === key ? `[Common:${key}]` : translation;
    };

    const getBaccaratMiniTranslation = (key: string, params?: any) => {
        const translation = tolgee.t({ key, ns: "BaccaratMini", params });
        return translation === key ? `[BaccaratMini:${key}]` : translation;
    };

    return {
        introduction: {
            title: getCommonTranslation("title_introduction"),
            description: getBaccaratMiniTranslation("introduction_description"),
        },
        gameRule: {
            title: getCommonTranslation("gamerules_title"),
            description: {
                byDefault: getBaccaratMiniTranslation("game_rule_description_by_default"),
                theThirdCard: getBaccaratMiniTranslation("game_rule_description_the_third_card"),
                theGameDetermines: getBaccaratMiniTranslation("game_rule_description_the_game_determines"),
                theCards: getBaccaratMiniTranslation("game_rule_description_the_cards"),
            },
        },
        payouts: {
            title: getCommonTranslation("title_payouts"),
            description: {
                thePayout: getCommonTranslation("payouts_para_2"),
                note: getBaccaratMiniTranslation("payouts_description_note"),
            },
            table: {
                header: {
                    options: getBaccaratMiniTranslation("payouts_table_header_options"),
                    betLimit: getCommonTranslation("header_bet_limit"),
                },
                rows: {
                    player: getBaccaratMiniTranslation("payouts_table_rows_player"),
                    banker: getBaccaratMiniTranslation("payouts_table_rows_banker"),
                    tie: getBaccaratMiniTranslation("payouts_table_rows_tie"),
                },
            },
        },
    };
};
