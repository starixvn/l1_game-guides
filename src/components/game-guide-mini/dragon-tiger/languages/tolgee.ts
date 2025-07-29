import { TolgeeInstance } from "@tolgee/react";
import { IDragonTigerMiniTranslationResource } from "./types";

export const getDragonTigerMiniTolgeeTranslationResource = (
    tolgee: TolgeeInstance,
    languageTag: string
): IDragonTigerMiniTranslationResource => {
    const getCommonTranslation = (key: string, params?: any) => {
        const translation = tolgee.t({ key, ns: "Common", params });
        return translation === key ? `[Common:${key}]` : translation;
    };

    const getDragonTigerMiniTranslation = (key: string, params?: any) => {
        const translation = tolgee.t({ key, ns: "DragonTigerMini", params });
        return translation === key ? `[DragonTigerMini:${key}]` : translation;
    };

    return {
        introduction: getDragonTigerMiniTranslation("introduction"),
        winningCondition: {
            title: getDragonTigerMiniTranslation("winning_condition_title"),
            description: {
                ruleDrawCards: getDragonTigerMiniTranslation("winning_condition_rule_draw_cards"),
                winOption: [
                    getDragonTigerMiniTranslation("winning_condition_win_option_dragon_tiger"),
                    getDragonTigerMiniTranslation("winning_condition_win_option_tie"),
                ],
                compareCardValue: getDragonTigerMiniTranslation("winning_condition_compare_card_value"),
                cardPointValues: getDragonTigerMiniTranslation("winning_condition_card_point_values"),
                cardValues: [
                    getDragonTigerMiniTranslation("winning_condition_card_values_ace_jack_queen_king"),
                    getDragonTigerMiniTranslation("winning_condition_card_values_2_to_10"),
                ],
                shuffleCard: getDragonTigerMiniTranslation("winning_condition_shuffle_card"),
            },
        },
        betLimit: {
            title: getDragonTigerMiniTranslation("bet_limit_title"),
            maxBetRound: getDragonTigerMiniTranslation("bet_limit_max_bet_round"),
            tieResult: getDragonTigerMiniTranslation("bet_limit_tie_result"),
            table: {
                headers: [
                    getDragonTigerMiniTranslation("bet_limit_table_header_options"),
                    getDragonTigerMiniTranslation("bet_limit_table_header_bet_limit"),
                ],
                dragon: getDragonTigerMiniTranslation("bet_limit_table_dragon"),
                tiger: getDragonTigerMiniTranslation("bet_limit_table_tiger"),
                tie: getDragonTigerMiniTranslation("bet_limit_table_tie"),
            },
        },
    };
};
