import { TolgeeInstance } from "@tolgee/react";
import { ISicBoTranslationResource } from "./types";

export const getSicBoMiniTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): ISicBoTranslationResource => {
    const getSicBoMiniTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "SicBoMini", params });
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });

    return {
        introduction: getSicBoMiniTranslation("introduction"),
        winningCondition: {
            title: getCommonTranslation("guide_header_winning_condition"),
            description: {
                number: getSicBoMiniTranslation("winning_condition_description_number"),
                big: getSicBoMiniTranslation("winning_condition_description_big"),
                small: getSicBoMiniTranslation("winning_condition_description_small"),
                note: getSicBoMiniTranslation("winning_condition_description_note"),
            },
        },
        betLimit: {
            title: getCommonTranslation("title_bet_limit"),
            description: getSicBoMiniTranslation("bet_limit_description"),
            table: {
                header: {
                    options: getCommonTranslation("header_betoption"),
                    betLimit: getCommonTranslation("header_bet_limit"),
                },
                rows: {
                    big: getSicBoMiniTranslation("bet_limit_table_rows_big"),
                    small: getSicBoMiniTranslation("bet_limit_table_rows_small"),
                    specificNumber: getSicBoMiniTranslation("bet_limit_table_rows_specific_number"),
                },
            },
        },
    };
};
