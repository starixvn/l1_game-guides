import { IDragonTigerMiniTranslationResource } from "./types";
export const cn: IDragonTigerMiniTranslationResource = {
    introduction: "龙虎是一款采用52张扑克牌（不包含王牌）的游戏。有3种投注选项：”龙“，”虎“和“和”",
    winningCondition: {
        title: "获胜条件",
        description: {
            ruleDrawCards: "抽了两张牌，一张是龙牌，一张是虎牌。",
            winOption: ["龙，虎：牌面大的者获胜。", "平局：如果龙虎牌相同，则玩家获胜。"],
            compareCardValue: "游戏通过比较拍的点数而不是花色来决定输赢。",
            cardPointValues: "",
            cardValues: ["“A”代表1分；“J”代表11分；“Q”代表12分；“K”代表13分。", "（2到10）牌的牌面值为面上值。"],
            shuffleCard: "一幅标准的50张扑克牌(不包括王牌）将在每轮结束后洗牌。",
        },
    },
    betLimit: {
        title: "投注金额",
        maxBetRound: "每轮的最大总赌注为{0}.",
        tieResult: "如果结果是平局，投注“龙”或“虎”的玩家将损失50%的本金。",
        table: {
            headers: ["选项", "投注金额"],
            dragon: "龙",
            tiger: "虎",
            tie: "平局",
        },
    },
};
