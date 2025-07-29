import { TolgeeInstance } from "@tolgee/react";
import { IBigSmallMiniTranslationResource } from "./types";

export const getBigSmallMiniTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): IBigSmallMiniTranslationResource => {
    const getBigSmallMiniTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "BigSmallMini", params });

    return {
        introduction: getBigSmallMiniTranslation("introduction"),
        winningCondition: {
            title: getBigSmallMiniTranslation("winning_condition_title"),
            description: {
                thePlayerCan: getBigSmallMiniTranslation("winning_condition_description_the_player_can"),
                big: getBigSmallMiniTranslation("winning_condition_description_big"),
                small: getBigSmallMiniTranslation("winning_condition_description_small"),
                balanced: getBigSmallMiniTranslation("winning_condition_description_balanced"),
            },
            example: getBigSmallMiniTranslation("winning_condition_example"),
        },
        betLimit: {
            title: getBigSmallMiniTranslation("bet_limit_title"),
            description: getBigSmallMiniTranslation("bet_limit_description"),
        },
    };
};
