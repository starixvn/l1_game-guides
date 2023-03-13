import { IBaccaratMiniTranslationResource } from "./types";

export const cn: IBaccaratMiniTranslationResource = {
    introduction: {
        title: "介绍",
        description: "百家乐是一款采用52张扑克牌（不包含王牌）的游戏。它有三个投注选项，投注者可以投注一个或多个桌子上显示的投注选项。",
    },
    gameRule: {
        title: "游戏规则",
        description: {
            byDefault: "每局开始时将抽取六张牌。闲家和庄家，每手会从两张朝下的牌开始。",
            theThirdCard: "第三张牌将根据每手前两张的总点数发牌。",
            theGameDetermines: "游戏通过比较每手牌的总点数来决定输赢，点数越接近9的获胜。",
            theCards: "每轮洗牌，每轮最大赌注为{0}",
        },
    },
    payouts: {
        title: "赔率",
        description: {
            thePayout: "所有赔率包括最初的下注金额。",
            note: "注意：如果结果是平局，所有投注在“闲家”或“庄家”的赌注将会退还。",
        },
        table: {
            header: {
                options: "选项",
                betLimit: "投注限额（最小-最大）",
            },
            rows: {
                player: "闲家",
                banker: "庄家",
                tie: "平局",
            },
        },
    },
};
