import { TolgeeInstance } from "@tolgee/react";
import { IBlockchainBaccaratResources } from "./types";
import { ENVIRONMENT } from "../../../../common/constants";
import { generateBaccaratTranslationResource } from "../../base/base-baccarat/languages/tolgee";

export function getBlockchainBaccaratTolgeeTranslationResource(tolgee: TolgeeInstance, languageTag: string): IBlockchainBaccaratResources {
    const baseBaccaratResources = generateBaccaratTranslationResource(tolgee);
    const namespace = "BlockchainBaccarat";
    const getTranslation = (key: string, params?: any) => tolgee.t({ key, ns: namespace, params });

    return {
        ...baseBaccaratResources,
        introduction: {
            header: getTranslation("introduction_header"),
            content: getTranslation("introduction_content"),
        },
        gameRules: {
            ...baseBaccaratResources.gameRules,
            ...{
                getDetails(environment: string | undefined, maxBetMain: number | string) {
                    return [
                        getTranslation("game_rules_details_1"),
                        getTranslation("game_rules_details_2"),
                        getTranslation("game_rules_details_3"),
                        getTranslation("game_rules_details_4"),
                        getTranslation("game_rules_details_5"),
                        getTranslation("game_rules_details_6", { maxBetMain }),
                    ];
                },
            },
        },
        extendGameRules: {
            cutCard: {
                header: getTranslation("extend_game_rules_cut_card_header"),
                description: getTranslation("extend_game_rules_cut_card_description"),
            },
            burnCard: {
                header: getTranslation("extend_game_rules_burn_card_header"),
                description: getTranslation("extend_game_rules_burn_card_description"),
                noted: getTranslation("extend_game_rules_burn_card_noted"),
                firstCard: getTranslation("extend_game_rules_burn_card_first_card"),
                burnValue: getTranslation("extend_game_rules_burn_card_burn_value"),
                example: {
                    header: getTranslation("extend_game_rules_burn_card_example_header"),
                    descriptions: [
                        getTranslation("extend_game_rules_burn_card_example_description_1"),
                        getTranslation("extend_game_rules_burn_card_example_description_2"),
                    ],
                },
            },
        },
    };
}
