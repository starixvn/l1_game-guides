import { IDragonTigerMiniTranslationResource } from "./types";
export const tw: IDragonTigerMiniTranslationResource = {
    introduction: "龍虎是一款採用52張撲克牌（不包含王牌）的遊戲。有3種投注選項：”龍“，”虎“和“和”",
    winningCondition: {
        title: "獲勝條件",
        description: {
            ruleDrawCards: "抽了兩張牌，一張是龍牌，一張是虎牌。",
            winOption: ["龍，虎：牌面大的者獲勝。", "平局：如果龍虎牌相同，則玩家獲勝。"],
            compareCardValue: "遊戲通過比較拍的點數而不是花色來決定輸贏。",
            cardPointValues: "",
            cardValues: ["“A”代表1分；“J”代表11分；“Q”代表12分；“K”代表13分。", "（2到10）牌的牌面值為面上值。"],
            shuffleCard: "一幅標準的50張撲克牌(不包括王牌）將在每輪結束後洗牌。",
        },
    },
    betLimit: {
        title: "投注金額",
        maxBetRound: "每輪的最大總賭注為{0}.",
        tieResult: "如果結果是平局，投注“龍”或“虎”的玩家將損失50%的本金。",
        table: {
            headers: ["選項", "投注金額"],
            dragon: "龍",
            tiger: "虎",
            tie: "平局",
        },
    },
};
