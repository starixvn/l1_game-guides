import { TolgeeInstance } from "@tolgee/react";
import { IBigSmallMiniTranslationResource } from "./types";

export const getBigSmallMiniTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): IBigSmallMiniTranslationResource => {
    const getBigSmallMiniTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "BigSmallMini", params });
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });

    return {
        introduction: getBigSmallMiniTranslation("introduction"),
        winningCondition: {
            title: getCommonTranslation("guide_header_winning_condition"),
            description: {
                thePlayerCan: getBigSmallMiniTranslation("winning_condition_description_the_player_can"),
                big: getBigSmallMiniTranslation("winning_condition_description_big"),
                small: getBigSmallMiniTranslation("winning_condition_description_small"),
                balanced: getBigSmallMiniTranslation("winning_condition_description_balanced"),
            },
            example: getBigSmallMiniTranslation("winning_condition_example"),
        },
        betLimit: {
            title: getCommonTranslation("title_bet_limit"),
            description: getBigSmallMiniTranslation("bet_limit_description"),
        },
    };
};
