import { IDragonTigerTranslationResource } from "./types";

export const tw: IDragonTigerTranslationResource = {
    common: {
        dragon: "龍",
        tiger: "虎",
        tie: "平局",
    },
    introduction: {
        title: "簡介",
        description: {
            dragonTiger: "龍虎是一款類似於百家樂的簡單紙牌遊戲。",
            theGame: "該遊戲使用一副標準的 52 張牌（不包括 Joker）。",
            thereAre: "有 3 種投注選項：龍、虎和和局。",
        },
    },
    gameRule: {
        title: "遊戲規則",
        twoCards: "抽了兩張牌，一張給龍的，一張給虎。",
        thePlayerBet: "玩家下注龍或虎哪一個將贏得更高價值的牌。",
        thePlayerCan: "如果玩家預測龍和虎將擁有相同的價值牌，無論花色如何，玩家也可以下注“平局”選項。",
        theGameDetermines: "遊戲通過比較牌點而不是花色來決定輸贏。",
        maximum: "K 是最大值，而 Ace 是最小值。",
        cardPoint: {
            title: "卡點值：",
            ranking: "牌從低到高排列如下：Ace、2、3、4、5、6、7、8、9、10、Jack、Queen、King。",
            aceStands: "Ace 代表 1 分；Jack 代表 11 分；Queen 代表 12 分，King 代表 13 分。",
            allCards: "從 2 到 10 的所有牌都按面值計算。",
        },
        playerCanBet: "玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。",
        allBets: "所有投注必須在投注時間到期之前進行。",
        note: "注意，投注無法取消。",
        theStandard: "52 張牌（不包括小丑）的標準牌組在每輪後洗牌。",
    },
    payOuts: {
        title: "支出",
        description: {
            theWinning: "中獎金額根據投注賠率計算。",
            thePayout: "支付包括初始投注。",
            allWinning: "投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。",
        },
        table: {
            header: {
                options: "選項",
                odds: "支出",
                betLimit: "投注限額 <br />（最小最大）",
                maxTotal: "每輪最大總賭注",
            },
        },
        note: "** 注意：如果結果為平局，投注龍或虎的玩家將損失 50% 的本金",
    },
};
