import { TolgeeInstance } from "@tolgee/react";
import { IFishPrawnCrabMiniTranslationResource } from "./types";

export const getFishPrawnCrabMiniTolgeeTranslationResource = (
    tolgee: TolgeeInstance,
    languageTag: string
): IFishPrawnCrabMiniTranslationResource => {
    const getCommonTranslation = (key: string, params?: any) => {
        const translation = tolgee.t({ key, ns: "Common", params });
        return translation === key ? `[Common:${key}]` : translation;
    };

    const getFishPrawnCrabMiniTranslation = (key: string, params?: any) => {
        const translation = tolgee.t({ key, ns: "FishPrawnCrabMini", params });
        return translation === key ? `[FishPrawnCrabMini:${key}]` : translation;
    };

    return {
        introduction: getFishPrawnCrabMiniTranslation("introduction"),
        winningCondition: {
            title: getCommonTranslation("guide_header_winning_condition"),
            description: [
                getFishPrawnCrabMiniTranslation("winning_condition_description_1"),
                getFishPrawnCrabMiniTranslation("winning_condition_description_2"),
            ],
        },
        betLimit: {
            title: getCommonTranslation("title_bet_limit"),
            description: getFishPrawnCrabMiniTranslation("bet_limit_description"),
        },
    };
};
