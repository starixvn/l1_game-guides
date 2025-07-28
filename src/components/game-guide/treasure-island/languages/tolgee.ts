import { TolgeeInstance } from "@tolgee/react";
import { TreasureIslandLanguage } from "./types";

export const generateTreasureIslandTolgeeTranslationResource = (tolgee: TolgeeInstance): TreasureIslandLanguage => {
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });
    const getTreasureIslandTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "TreasureIsland", params });

    return {
        introduction: {
            title: getCommonTranslation("title_introduction"),
            description: getTreasureIslandTranslation("introduction_description"),
        },
        gameRules: {
            title: getCommonTranslation("title_gamerules"),
            rulePlayerSelect: getTreasureIslandTranslation("game_rules_rule_player_select"),
            totalBet: getTreasureIslandTranslation("game_rules_total_bet"),
            paylinesFormular: getTreasureIslandTranslation("game_rules_paylines_formular"),
            subDescriptions: [
                getTreasureIslandTranslation("game_rules_sub_description_1"),
                getTreasureIslandTranslation("game_rules_sub_description_2"),
                getTreasureIslandTranslation("game_rules_sub_description_3"),
            ],
            ruleStartSpin: getTreasureIslandTranslation("game_rules_rule_start_spin"),
            ruleWin: getTreasureIslandTranslation("game_rules_rule_win"),
            betLimit: getTreasureIslandTranslation("game_rules_bet_limit"),
        },
        payout: {
            title: getCommonTranslation("title_payouts"),
            description1: [getTreasureIslandTranslation("payout_description_1_1"), getTreasureIslandTranslation("payout_description_1_2")],
            baseBetValue: getTreasureIslandTranslation("payout_base_bet_value"),
            description2: getTreasureIslandTranslation("payout_description_2"),
            description3(currMaxBet: number) {
                return [
                    getTreasureIslandTranslation("payout_description_3_1"),
                    getTreasureIslandTranslation("payout_description_3_2", { currMaxBet }),
                ];
            },
        },
        examplePayout: {
            content: getCommonTranslation("example_bold") + " " + getTreasureIslandTranslation("example_payout_content"),
            table: {
                headers: [getCommonTranslation("header_symbol"), getCommonTranslation("header_description")],
                getHavingSymbol(symbol: string) {
                    return getTreasureIslandTranslation("example_payout_table_having_symbol", { symbol });
                },
                descriptionContent: getTreasureIslandTranslation("example_payout_table_description_content"),
                payout: getTreasureIslandTranslation("example_payout_table_payout"),
            },
        },
        tumbling: {
            title: getTreasureIslandTranslation("tumbling_title"),
            descriptions: [
                getTreasureIslandTranslation("tumbling_description_1"),
                getTreasureIslandTranslation("tumbling_description_2"),
                getTreasureIslandTranslation("tumbling_description_3"),
            ],
        },
        multipliers: {
            title: getCommonTranslation("multiplier_feature_title"),
            descriptions: [
                getTreasureIslandTranslation("multipliers_description_1"),
                getTreasureIslandTranslation("multipliers_description_2"),
                getTreasureIslandTranslation("multipliers_description_3"),
            ],
        },
        exampleMultipliers: {
            title: getCommonTranslation("example"),
            tableHeader: [
                getTreasureIslandTranslation("example_multipliers_table_header_1"),
                getTreasureIslandTranslation("example_multipliers_table_header_2"),
                getTreasureIslandTranslation("example_multipliers_table_header_3"),
                getCommonTranslation("header_win"),
            ],
        },
        freeSpin: {
            title: getTreasureIslandTranslation("free_spin_title"),
            define: getTreasureIslandTranslation("free_spin_define"),
            subDescriptions: {
                tableHeader: [getCommonTranslation("header_symbol"), getCommonTranslation("header_description")],
                getSymbolOrMore(symbol: string) {
                    return getTreasureIslandTranslation("free_spin_sub_descriptions_symbol_or_more", { symbol });
                },
                getSymbol(symbol: string) {
                    return getTreasureIslandTranslation("free_spin_sub_descriptions_symbol", { symbol });
                },
                getFreeSpin(count: number) {
                    return getTreasureIslandTranslation("free_spin_sub_descriptions_free_spin", { count });
                },
            },
            getMoreFreeSpin(value: number) {
                return getTreasureIslandTranslation("free_spin_get_more_free_spin", { value });
            },
            totalMultiplier: getTreasureIslandTranslation("free_spin_total_multiplier"),
            freeSpin24h: getTreasureIslandTranslation("free_spin_24h"),
        },
        exampleFreeSpin: {
            title: getTreasureIslandTranslation("example_free_spin_title"),
            table: {
                headers: [
                    getTreasureIslandTranslation("example_free_spin_table_header_1"),
                    getTreasureIslandTranslation("example_free_spin_table_header_2"),
                    getTreasureIslandTranslation("example_free_spin_table_header_3"),
                    getTreasureIslandTranslation("example_free_spin_table_header_4"),
                    getCommonTranslation("header_win"),
                ],
                round1Win: getTreasureIslandTranslation("example_free_spin_table_round1_win"),
                round2Win: getTreasureIslandTranslation("example_free_spin_table_round2_win"),
                round4Win: getTreasureIslandTranslation("example_free_spin_table_round4_win"),
            },
            tumbleDescriptions: [
                getTreasureIslandTranslation("example_free_spin_tumble_description_1"),
                getTreasureIslandTranslation("example_free_spin_tumble_description_2"),
            ],
        },
    };
};
