import { TolgeeInstance } from "@tolgee/react";
import { IBitcoinMasterTranslationResource } from "./types";

export const generateBitcoinMasterTolgeeTranslationResource = (tolgee: TolgeeInstance): IBitcoinMasterTranslationResource => {
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });
    const getBitcoinMasterTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "BitcoinMaster", params });

    return {
        introduction: {
            title: getCommonTranslation("title_introduction"),
            description: getBitcoinMasterTranslation("introduction_description"),
        },
        gameRules: {
            title: getCommonTranslation("title_gamerules"),
            descriptions: [
                getBitcoinMasterTranslation("game_rules_description_1"),
                getBitcoinMasterTranslation("game_rules_description_2"),
            ],
            winningConditions: {
                up: getBitcoinMasterTranslation("winning_condition_up"),
                down: getBitcoinMasterTranslation("winning_condition_down"),
                even: getBitcoinMasterTranslation("winning_condition_even"),
                odd: getBitcoinMasterTranslation("winning_condition_odd"),
            },
            example1: {
                title: getBitcoinMasterTranslation("example1_title"),
                increaseStake: getBitcoinMasterTranslation("example1_increase_stake"),
                maxBet: getBitcoinMasterTranslation("example1_max_bet"),
                otherDescriptions: [
                    getBitcoinMasterTranslation("example1_other_description_1"),
                    getBitcoinMasterTranslation("example1_other_description_2"),
                ],
            },
            example2: {
                title: getCommonTranslation("example"),
                descriptions: [
                    getBitcoinMasterTranslation("example2_description_1"),
                    getBitcoinMasterTranslation("example2_description_2"),
                ],
                upDown: {
                    title: getBitcoinMasterTranslation("example2_up_down_title"),
                    description: getBitcoinMasterTranslation("example2_up_down_description"),
                },
                evenOdd: {
                    title: getBitcoinMasterTranslation("example2_even_odd_title"),
                    description: getBitcoinMasterTranslation("example2_even_odd_description"),
                },
            },
            balancedBettingPool: getBitcoinMasterTranslation("balanced_betting_pool"),
            example3: getBitcoinMasterTranslation("example3"),
        },
        table: {
            betType: getCommonTranslation("bet_type"),
            options: getBitcoinMasterTranslation("table_options"),
            winningConditions: getBitcoinMasterTranslation("table_winning_conditions"),
            odds: getCommonTranslation("header_odds"),
            betLimit: getCommonTranslation("header_betlimit"),
            upDown: getBitcoinMasterTranslation("table_up_down"),
            up: getBitcoinMasterTranslation("table_up"),
            down: getBitcoinMasterTranslation("table_down"),
            evenOdd: getBitcoinMasterTranslation("table_even_odd"),
            even: getCommonTranslation("bet_choice_even"),
            odd: getCommonTranslation("bet_choice_odd"),
        },
        payouts: {
            title: getCommonTranslation("title_payouts"),
            descriptions: [
                getCommonTranslation("payouts_para_1"),
                getCommonTranslation("payouts_para_2"),
                getCommonTranslation("payouts_para_3"),
            ],
        },
        termsAndConditions: {
            header: getCommonTranslation("title_terms_conditions"),
            details: [
                getBitcoinMasterTranslation("terms_conditions_bitcoin_specific"),
                getCommonTranslation("terms_conditions_para_1"),
                getCommonTranslation("terms_conditions_para_2"),
                getCommonTranslation("terms_conditions_para_3"),
                getCommonTranslation("terms_conditions_para_4"),
            ],
        },
    };
};
