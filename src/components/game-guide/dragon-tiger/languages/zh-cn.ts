import { baseTermAndConditionCn } from "../../base/terms-and-conditions/languages/cn";
import { IDragonTigerTranslationResource } from "./types";

export const cn: IDragonTigerTranslationResource = {
    common: {
        dragon: "龙",
        tiger: "虎",
        tie: "平局",
    },
    introduction: {
        title: "简介",
        description: {
            dragonTiger: "龙虎是一款类似于百家乐的简单纸牌游戏。",
            theGame: "该游戏使用一副标准的 52 张牌（不包括 Joker）。",
            thereAre: "有 3 种投注选项：龙、虎和和局。",
        },
    },
    gameRule: {
        title: "游戏规则",
        twoCards: "抽了两张牌，一张给龙的，一张给虎。",
        thePlayerBet: "玩家下注龙或虎哪一个将赢得更高价值的牌。",
        thePlayerCan: "如果玩家预测龙和虎将拥有相同的价值牌，无论花色如何，玩家也可以下注“平局”选项。",
        theGameDetermines: "游戏通过比较牌点而不是花色来决定输赢。",
        maximum: "K 是最大值，而 Ace 是最小值。",
        cardPoint: {
            title: "卡点值：",
            ranking: "牌从低到高排列如下：Ace、2、3、4、5、6、7、8、9、10、Jack、Queen、King。",
            aceStands: "Ace 代表 1 分；Jack 代表 11 分；Queen 代表 12 分，King 代表 13 分。",
            allCards: "从 2 到 10 的所有牌都按面值计算。",
        },
        playerCanBet: "玩家可以对游戏桌上显示的一个或多个投注选项进行投注。",
        allBets: "所有投注必须在投注时间到期之前进行。",
        note: "请注意，投注无法取消。",
        theStandard: "52 张牌（不包括小丑）的标准牌组在每轮后洗牌。",
    },
    payOuts: {
        title: "支出",
        description: {
            theWinning: "中奖金额根据派彩率计算。",
            thePayout: "支付包括初始投注。",
            allWinning: "投注结算后，所有中奖金额都会立即添加到您的账户余额中。",
        },
        table: {
            header: {
                options: "选项",
                odds: "支出",
                betLimit: "投注限额 <br />（最小最大）",
                maxTotal: "每轮最大总赌注",
            },
        },
        note: "** 注意：如果结果为平局，投注龙或虎的玩家将损失 50% 的本金",
    },
    termsAndConditions: baseTermAndConditionCn,
};
