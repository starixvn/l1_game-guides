import { baseTermAndConditionCn } from "../../terms-and-conditions/languages/cn";
import { IBaseBaccaratResources } from "./types";

export const baseBaccaratResourcesCn: IBaseBaccaratResources = {
    introduction: {
        header: "",
        content: "",
    },
    gameRules: {
        header: "游戏规则",
        details: [],
        table: {
            header: {
                options: "选项",
                descriptions: "说明",
            },
            contents: [
                {
                    choice: "闲家",
                    rule: "如果闲家的总点数高于庄家，闲家手将获胜。",
                },
                {
                    choice: "庄家",
                    rule: "如果庄家的总点数高于闲家，庄家手将获胜。",
                },
                {
                    choice: "平局",
                    rule: "如果两只手（闲家和庄家）的总点数相等，则投注者获胜。",
                },
                {
                    choice: "闲家一对",
                    rule: "如果闲家的前两张牌是对子，则投注者获胜，无论花色如何。",
                },
                {
                    choice: "庄家一对",
                    rule: "如果庄家的前两张牌是对子，则投注者获胜，无论花色如何。",
                },
                {
                    choice: "大",
                    rule: "如果一轮中发出的牌总数为 6 张中的 5 张，则投注者获胜。",
                },
                {
                    choice: "小",
                    rule: " 如果一轮中发出的牌总数为 4，则投注者获胜。",
                },
            ],
        },
    },
    pointRules: {
        header: "积分计算规则s",
        descriptions: {
            paragraph1: {
                cardPointValues: "卡点值：",
                details: ["牌（2 到 9）按面值计算。", "10 或面牌（Jack, Queen, King）的值为 0，而 Aces 的值为 1"],
            },
            paragraph2: "当总点数超过九点时，总点数的第一个数字被丢弃，第二个数字是手的价值。",
        },
        examples: {
            firstTwoCard: "前两张牌",
            thirdCard: "第三张牌",
            totals: "总计",
            basedTotal: "基于Baccarat 规则的总分",
        },
    },
    thirdCardRules: {
        header: "第三张牌规则",
        descriptions: [
            "第三张牌将根据严格的游戏规则进行处理。",
            "如果任一手牌的前两张牌的总点数为 8 或 9，则称为“自然”，不再发牌，闲家和庄家均站立。",
        ],
        playerHand: {
            header: "闲家手牌规则",
            cardsTotal: "闲家的前两张牌总数",
            action: "行动",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2, 3, 4, 5",
                    action: "抽第三张牌。",
                },
                {
                    twoCardsTotal: "6 或 7",
                    action: "闲家始终站立。",
                },
                {
                    twoCardsTotal: "8 或 9",
                    action: "“自然”，不再发牌，闲家和庄家都站着。",
                },
            ],
        },
        bankerHand: {
            header: "庄家的规则",
            firstDescription: " 如果闲家拿到第三张牌，庄家根据以下规则抽第三张牌：",
            cardsTotal: "庄家的前两张牌总数",
            action: "当闲家的第三张牌有点值时，庄家抽牌：",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2",
                    action: "庄家总是抽第三张牌。",
                },
                {
                    twoCardsTotal: "3",
                    action: "点值 1、2、3、4、5、6、7、9、0（不是 8）。",
                },
                {
                    twoCardsTotal: "4",
                    action: "点值 2、3、4、5、6、7",
                },
                {
                    twoCardsTotal: "5",
                    action: "点值 4、5、6、7",
                },
                {
                    twoCardsTotal: "6",
                    action: "点值 6 或 7",
                },
                {
                    twoCardsTotal: "7",
                    action: "庄家始终站立。",
                },
                {
                    twoCardsTotal: "8 或 9",
                    action: "“自然”，不再发牌，闲家和庄家都站着。",
                },
            ],
            secondDescription: ["如果闲家前两张牌的总点数为 6 或 7，则庄家将站在总点数为 6 或 7 的点上，并抽出总点数为 5 或更少的点数。"],
        },
    },
    payouts: {
        header: "支出",
        descriptions: {
            details: ["中奖金额根据派彩率计算。", "支付包括初始投注。", "投注结算后，所有中奖金额都会立即添加到您的账户余额中。"],
            noted: "<strong>注意：</strong> 如果结果为平局，所有对闲家和庄家的投注将被退还。",
            options: "选项",
            odds: "赔率",
            betLimit: "投注限额 <br></br>（最小最大）",
            player: "闲家",
            banker: "庄家一对",
            big: "大",
            small: "小",
            tie: "平局",
            playerPair: "闲家一对",
            bankerPair: "庄家一对",
        },
    },
    termsAndConditions: baseTermAndConditionCn,
};
