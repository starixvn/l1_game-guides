import { TolgeeInstance } from "@tolgee/react";
import { ISeDieMiniTranslationResource } from "./types";

export const getSeDieMiniTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): ISeDieMiniTranslationResource => {
    const getSeDieMiniTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "SeDieMini", params });
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });

    return {
        introduction: getSeDieMiniTranslation("introduction"),
        winningCondition: {
            title: getCommonTranslation("guide_header_winning_condition"),
            description: {
                odd: getSeDieMiniTranslation("winning_condition_description_odd"),
                even: getSeDieMiniTranslation("winning_condition_description_even"),
                otherBet: getSeDieMiniTranslation("winning_condition_description_other_bet"),
                ifThe: getSeDieMiniTranslation("winning_condition_description_if_the"),
            },
        },
        betLimit: {
            title: getCommonTranslation("title_bet_limit"),
            description: getSeDieMiniTranslation("bet_limit_description"),
            table: {
                header: {
                    options: getCommonTranslation("header_betoption"),
                    betLimit: getCommonTranslation("header_bet_limit"),
                },
                rows: {
                    oddEven: getSeDieMiniTranslation("bet_limit_table_rows_odd_even"),
                    or: getSeDieMiniTranslation("bet_limit_table_rows_or"),
                },
            },
        },
    };
};
