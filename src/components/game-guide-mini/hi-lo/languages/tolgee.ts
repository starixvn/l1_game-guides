import { TolgeeInstance } from "@tolgee/react";
import { IHiLoMiniTranslationResource } from "./types";

export const getHiLoMiniTolgeeTranslationResource = (tolgee: TolgeeInstance, languageTag: string): IHiLoMiniTranslationResource => {
    const getHiLoMiniTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "HiLoMini", params });
    const getCommonTranslation = (key: string, params?: any) => tolgee.t({ key, ns: "Common", params });

    return {
        introduction: getHiLoMiniTranslation("introduction"),
        winningCondition: {
            title: getCommonTranslation("guide_header_winning_condition"),
            description: {
                thePlayerCan: getHiLoMiniTranslation("winning_condition_description_the_player_can"),
                collect: getHiLoMiniTranslation("winning_condition_description_collect"),
                playContinue: getHiLoMiniTranslation("winning_condition_description_play_continue"),
                unfinishedGame: getHiLoMiniTranslation("winning_condition_description_unfinished_game"),
                firstTurn: getHiLoMiniTranslation("winning_condition_description_first_turn"),
                otherTurns: getHiLoMiniTranslation("winning_condition_description_other_turns"),
                arrangeCards: getHiLoMiniTranslation("winning_condition_description_arrange_cards"),
                allTheSuits: getHiLoMiniTranslation("winning_condition_description_all_the_suits"),
                heart: getHiLoMiniTranslation("winning_condition_description_heart"),
                spade: getHiLoMiniTranslation("winning_condition_description_spade"),
                diamond: getHiLoMiniTranslation("winning_condition_description_diamond"),
                andClub: getHiLoMiniTranslation("winning_condition_description_and_club"),
                equalValue: getHiLoMiniTranslation("winning_condition_description_equal_value"),
            },
        },
        payout: {
            title: getCommonTranslation("title_payouts"),
            description: getHiLoMiniTranslation("payout_description"),
        },
    };
};
