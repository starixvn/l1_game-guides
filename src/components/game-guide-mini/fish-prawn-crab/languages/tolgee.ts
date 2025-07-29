import { TolgeeInstance } from "@tolgee/react";
import { IFishPrawnCrabMiniTranslationResource } from "./types";

export const getFishPrawnCrabMiniTolgeeTranslationResource = (
    tolgee: TolgeeInstance,
    languageTag: string
): IFishPrawnCrabMiniTranslationResource => {
    const getFishPrawnCrabMiniTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "FishPrawnCrabMini", params });

    return {
        introduction: getFishPrawnCrabMiniTranslation("introduction"),
        winningCondition: {
            title: getFishPrawnCrabMiniTranslation("winning_condition_title"),
            description: [
                getFishPrawnCrabMiniTranslation("winning_condition_description_1"),
                getFishPrawnCrabMiniTranslation("winning_condition_description_2"),
            ],
        },
        betLimit: {
            title: getFishPrawnCrabMiniTranslation("bet_limit_title"),
            description: getFishPrawnCrabMiniTranslation("bet_limit_description"),
        },
    };
};
