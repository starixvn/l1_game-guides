import { IBaccaratMiniTranslationResource } from "./types";

export const tw: IBaccaratMiniTranslationResource = {
    introduction: {
        title: "介紹",
        description: "百家樂是一款採用52張撲克牌（不包含王牌）的遊戲。它有三個投注選項，投注者可以投註一個或多個桌子上顯示的投注選項。",
    },
    gameRule: {
        title: "遊戲規則",
        description: {
            byDefault: "每局開始時將抽取六張牌。閒家和莊家，每手會從兩張朝下的牌開始。",
            theThirdCard: "第三張牌將根據每手前兩張的總點數發牌。",
            theGameDetermines: "遊戲通過比較每手牌的總點數來決定輸贏，點數越接近9的獲勝。",
            theCards: "每輪洗牌，每輪最大賭注為{0}",
        },
    },
    payouts: {
        title: "賠率",
        description: {
            thePayout: "所有賠率包括最初的下注金額。",
            note: "注意：如果結果是平局，所有投注在“閒家”或“莊家”的賭注將會退還。",
        },
        table: {
            header: {
                options: "選項",
                betLimit: "投注限額（最小-最大）",
            },
            rows: {
                player: "閒家",
                banker: "莊家",
                tie: "平局",
            },
        },
    },
};
