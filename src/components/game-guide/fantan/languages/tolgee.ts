import { TolgeeInstance } from "@tolgee/react";
import { IFanTanTranslationResource } from "./types";

export const getFanTanTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): IFanTanTranslationResource => {
    const getFanTanTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "FanTan", params });
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });

    return {
        introduction: {
            title: getCommonTranslation("title_introduction"),
            description: getFanTanTranslation("introduction.description"),
        },
        gameRules: {
            title: getCommonTranslation("title_gamerules"),
            description: getFanTanTranslation("gameRules.description"),
            example: {
                title: getFanTanTranslation("gameRules.example.title"),
                resultDetails: [
                    getFanTanTranslation("gameRules.example.resultDetails.0"),
                    getFanTanTranslation("gameRules.example.resultDetails.1"),
                ],
                descriptions: [
                    getFanTanTranslation("gameRules.example.descriptions.0"),
                    getFanTanTranslation("gameRules.example.descriptions.1"),
                ],
                maxBet: getFanTanTranslation("gameRules.example.maxBet"),
            },
            winningCondition: {
                odd: getFanTanTranslation("gameRules.winningCondition.odd"),
                even: getFanTanTranslation("gameRules.winningCondition.even"),
                fan1: getFanTanTranslation("gameRules.winningCondition.fan1"),
                fan2: getFanTanTranslation("gameRules.winningCondition.fan2"),
                fan3: getFanTanTranslation("gameRules.winningCondition.fan3"),
                fan4: getFanTanTranslation("gameRules.winningCondition.fan4"),
                kwok12: getFanTanTranslation("gameRules.winningCondition.kwok12"),
                kwok23: getFanTanTranslation("gameRules.winningCondition.kwok23"),
                kwok34: getFanTanTranslation("gameRules.winningCondition.kwok34"),
                kwok41: getFanTanTranslation("gameRules.winningCondition.kwok41"),
                chun234: getFanTanTranslation("gameRules.winningCondition.chun234"),
                chun134: getFanTanTranslation("gameRules.winningCondition.chun134"),
                chun124: getFanTanTranslation("gameRules.winningCondition.chun124"),
                chun123: getFanTanTranslation("gameRules.winningCondition.chun123"),
            },
        },
        table: {
            betType: getFanTanTranslation("table.betType"),
            betOption: getFanTanTranslation("table.betOption"),
            winningCondition: getFanTanTranslation("table.winningCondition"),
            odds: getFanTanTranslation("table.odds"),
            betLimit: getFanTanTranslation("table.betLimit"),
            oddEven: getFanTanTranslation("table.oddEven"),
            odd: getFanTanTranslation("table.odd"),
            even: getFanTanTranslation("table.even"),
            fan: getFanTanTranslation("table.fan"),
            fan1: getFanTanTranslation("table.fan1"),
            fan2: getFanTanTranslation("table.fan2"),
            fan3: getFanTanTranslation("table.fan3"),
            fan4: getFanTanTranslation("table.fan4"),
            kwok: getFanTanTranslation("table.kwok"),
            chun: getFanTanTranslation("table.chun"),
        },
        payouts: {
            title: getCommonTranslation("title_payouts"),
            descriptions: [getFanTanTranslation("payouts.descriptions.0"), getFanTanTranslation("payouts.descriptions.1")],
        },
        md5: {
            example: getFanTanTranslation("md5.example"),
            step1: getFanTanTranslation("md5.step1"),
            step2: getFanTanTranslation("md5.step2"),
            note: getFanTanTranslation("md5.note"),
            step3: getFanTanTranslation("md5.step3"),
            step4: getFanTanTranslation("md5.step4"),
        },
    };
};
