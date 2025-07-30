import { TolgeeInstance } from "@tolgee/react";
import { ISicBoTranslationResource } from "./types";
import { generatebaseTermAndConditionTolgee } from "../../base/terms-and-conditions/languages/tolgee";

export const getSicBoTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): ISicBoTranslationResource => {
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });

    const getSicBoTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "SicBo", params });

    return {
        introduction: {
            title: getCommonTranslation("title_introduction"),
            description: getSicBoTranslation("introduction_description"),
        },
        gameRules: {
            title: getCommonTranslation("title_gamerules"),
            descriptions: [
                getSicBoTranslation("game_rules_description_1"),
                getSicBoTranslation("game_rules_description_2"),
                getSicBoTranslation("game_rules_description_3"),
            ],
            maximum: getSicBoTranslation("game_rules_maximum"),
            otherDescriptions: [getSicBoTranslation("game_rules_other_descriptions_1")],
        },
        bettingOptions: {
            title: getSicBoTranslation("betting_options_title"),
            description: {
                big: [getSicBoTranslation("betting_options_description_big_1"), getSicBoTranslation("betting_options_description_big_2")],
                small: [
                    getSicBoTranslation("betting_options_description_small_1"),
                    getSicBoTranslation("betting_options_description_small_2"),
                ],
                anyTriple: getSicBoTranslation("betting_options_description_any_triple"),
                specificNumber: getSicBoTranslation("betting_options_description_specific_number"),
                totalPoints: getSicBoTranslation("betting_options_description_total_points"),
            },
        },
        table: {
            options: getSicBoTranslation("table_options"),
            choices: getSicBoTranslation("table_choices"),
            description: getSicBoTranslation("table_description"),
            odds: getSicBoTranslation("table_odds"),
            betLimit: getCommonTranslation("header_bet_limit"),
            big: getSicBoTranslation("table_big"),
            small: getSicBoTranslation("table_small"),
            anyTriple: getSicBoTranslation("table_any_triple"),
            specificNumber: getSicBoTranslation("table_specific_number"),
            totalPoints: getSicBoTranslation("table_total_points"),
            betOnAnyNumber: getSicBoTranslation("table_bet_on_any_number"),
            betOnTotalPoints: getSicBoTranslation("table_bet_on_total_points"),
            numberAppearsOnce: getSicBoTranslation("table_number_appears_once"),
            numberAppearsTwice: getSicBoTranslation("table_number_appears_twice"),
            numberAppearsThreeTimes: getSicBoTranslation("table_number_appears_three_times"),
        },
        payouts: {
            title: getCommonTranslation("title_payouts"),
            descriptions: [getSicBoTranslation("payouts_description_1"), getSicBoTranslation("payouts_description_2")],
        },
        md5: {
            step1ImageUrl: `/static/images/sicbo/md5_step1_${languageTag}.png`,
            step2ImageUrl: `/static/images/sicbo/md5_step2_${languageTag}.png`,
            note: getSicBoTranslation("md5_notes"),
        },
        termsAndConditions: generatebaseTermAndConditionTolgee(tolgee),
    };
};
