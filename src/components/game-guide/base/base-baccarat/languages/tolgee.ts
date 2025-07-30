import { TolgeeInstance } from "@tolgee/react";
import { generatebaseTermAndConditionTolgee } from "../../terms-and-conditions/languages/tolgee";
import { IBaseBaccaratResources } from "./types";

export function generateBaccaratTranslationResource(tolgee: TolgeeInstance): IBaseBaccaratResources {
    const namespace = "BaseBaccarat";
    const getTranslation = (key: string) => tolgee.t(key, { ns: namespace });
    return {
        introduction: {
            header: "",
            content: "",
        },
        gameRules: {
            header: getTranslation("game_rules_header"),
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                return [];
            },
            table: {
                header: {
                    options: getTranslation("table_header_options"),
                    descriptions: getTranslation("table_header_descriptions"),
                },
                contents: [
                    {
                        choice: getTranslation("table_content_choice_player"),
                        rule: getTranslation("table_content_rule_player"),
                    },
                    {
                        choice: getTranslation("table_content_choice_banker"),
                        rule: getTranslation("table_content_rule_banker"),
                    },
                    {
                        choice: getTranslation("table_content_choice_tie"),
                        rule: getTranslation("table_content_rule_tie"),
                    },
                    {
                        choice: getTranslation("table_content_choice_player_pair"),
                        rule: getTranslation("table_content_rule_player_pair"),
                    },
                    {
                        choice: getTranslation("table_content_choice_banker_pair"),
                        rule: getTranslation("table_content_rule_banker_pair"),
                    },
                    {
                        choice: getTranslation("glossary_big"),
                        rule: getTranslation("table_content_rule_big"),
                    },
                    {
                        choice: getTranslation("glossary_small"),
                        rule: getTranslation("table_content_rule_small"),
                    },
                ],
            },
        },
        pointRules: {
            header: getTranslation("point_rules_header"),
            descriptions: {
                paragraph1: {
                    cardPointValues: getTranslation("point_rules_paragraph1_card_point_values"),
                    details: [getTranslation("point_rules_paragraph1_details_1"), getTranslation("point_rules_paragraph1_details_2")],
                },
                paragraph2: getTranslation("point_rules_paragraph2"),
            },
            examples: {
                firstTwoCard: getTranslation("point_rules_examples_first_two_card"),
                thirdCard: getTranslation("point_rules_examples_third_card"),
                totals: getTranslation("point_rules_examples_totals"),
                basedTotal: getTranslation("point_rules_examples_based_total"),
            },
        },
        thirdCardRules: {
            header: getTranslation("third_card_rules_header"),
            descriptions: [getTranslation("third_card_rules_descriptions_1"), getTranslation("third_card_rules_descriptions_2")],
            playerHand: {
                header: getTranslation("third_card_rules_player_hand_header"),
                cardsTotal: getTranslation("third_card_rules_player_hand_cards_total"),
                action: getTranslation("third_card_rules_player_hand_action"),
                examples: [
                    {
                        twoCardsTotal: getTranslation("third_card_rules_player_hand_examples_1_two_cards_total"),
                        action: getTranslation("third_card_rules_player_hand_examples_1_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_player_hand_examples_2_two_cards_total"),
                        action: getTranslation("third_card_rules_player_hand_examples_2_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_player_hand_examples_3_two_cards_total"),
                        action: getTranslation("third_card_rules_player_hand_examples_3_action"),
                    },
                ],
            },
            bankerHand: {
                header: getTranslation("third_card_rules_banker_hand_header"),
                firstDescription: getTranslation("third_card_rules_banker_hand_first_description"),
                cardsTotal: getTranslation("third_card_rules_banker_hand_cards_total"),
                action: getTranslation("third_card_rules_banker_hand_action"),
                examples: [
                    {
                        twoCardsTotal: getTranslation("third_card_rules_banker_hand_examples_1_two_cards_total"),
                        action: getTranslation("third_card_rules_banker_hand_examples_1_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_banker_hand_examples_2_two_cards_total"),
                        action: getTranslation("third_card_rules_banker_hand_examples_2_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_banker_hand_examples_3_two_cards_total"),
                        action: getTranslation("third_card_rules_banker_hand_examples_3_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_banker_hand_examples_4_two_cards_total"),
                        action: getTranslation("third_card_rules_banker_hand_examples_4_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_banker_hand_examples_5_two_cards_total"),
                        action: getTranslation("third_card_rules_banker_hand_examples_5_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_banker_hand_examples_6_two_cards_total"),
                        action: getTranslation("third_card_rules_banker_hand_examples_6_action"),
                    },
                    {
                        twoCardsTotal: getTranslation("third_card_rules_banker_hand_examples_7_two_cards_total"),
                        action: getTranslation("third_card_rules_banker_hand_examples_7_action"),
                    },
                ],
                secondDescription: [getTranslation("third_card_rules_banker_hand_second_description")],
            },
        },
        payouts: {
            header: getTranslation("payouts_header"),
            descriptions: {
                details: [
                    getTranslation("payouts_descriptions_1"),
                    getTranslation("payouts_descriptions_2"),
                    getTranslation("payouts_descriptions_3"),
                ],
                noted: getTranslation("payouts_noted"),
                options: getTranslation("payouts_options"),
                odds: getTranslation("payouts_odds"),
                betLimit: getTranslation("payouts_bet_limit"),
                player: getTranslation("payouts_player"),
                banker: getTranslation("payouts_banker"),
                big: getTranslation("payouts_big"),
                small: getTranslation("payouts_small"),
                tie: getTranslation("payouts_tie"),
                playerPair: getTranslation("payouts_player_pair"),
                bankerPair: getTranslation("payouts_banker_pair"),
            },
        },
        termsAndConditions: generatebaseTermAndConditionTolgee(tolgee),
    };
}
