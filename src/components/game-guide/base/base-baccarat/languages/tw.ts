import { baseTermAndConditionTw } from "../../terms-and-conditions/languages/tw";
import { IBaseBaccaratResources } from "./types";

export const baseBaccaratResourcesTw: IBaseBaccaratResources = {
    introduction: {
        header: "",
        content: "",
    },
    gameRules: {
        header: "遊戲規則",
        getDetails(environment: string | undefined, maxBetMain: number | string) {
            return [];
        },
        table: {
            header: {
                options: "選項",
                descriptions: "說明",
            },
            contents: [
                {
                    choice: "閒家",
                    rule: "如果閒家的總點數高於莊家，閒家手將獲勝。",
                },
                {
                    choice: "莊家",
                    rule: "如果莊家的總點數高於閒家，莊家手將獲勝。",
                },
                {
                    choice: "平局",
                    rule: "如果兩隻手（閒家和莊家）的總點數相等，則投注者獲勝。",
                },
                {
                    choice: "閒家一對",
                    rule: "如果閒家的前兩張牌是對子，則投注者獲勝，無論花色如何。",
                },
                {
                    choice: "莊家一對",
                    rule: "如果莊家的前兩張牌是對子，則投注者獲勝，無論花色如何。",
                },
                {
                    choice: "大",
                    rule: "如果一輪中發出的牌總數為 6 張中的 5 張，則投注者獲勝。",
                },
                {
                    choice: "小",
                    rule: "如果一輪中發出的牌總數為 4，則投注者獲勝。",
                },
            ],
        },
    },
    pointRules: {
        header: "積分計算規則",
        descriptions: {
            paragraph1: {
                cardPointValues: "卡點值：",
                details: ["牌（2 到 9）按面值計算。", "10 或面牌（Jack, Queen, King）的值為 0，而 Aces 的值為 1"],
            },
            paragraph2: "當總點數超過九點時，總點數的第一個數字被丟棄，第二個數字是手的價值。",
        },
        examples: {
            firstTwoCard: "前兩張牌",
            thirdCard: "第三張牌",
            totals: "總計",
            basedTotal: "基於百家樂規則的總分",
        },
    },
    thirdCardRules: {
        header: "第三張牌規則",
        descriptions: [
            "第三張牌將根據嚴格的遊戲規則進行處理。",
            " 如果任一手牌的前兩張牌的總點數為 8 或 9，則稱為“自然”，不再發牌，閒家和莊家均站立。",
        ],
        playerHand: {
            header: "閒家手牌規則",
            cardsTotal: "閒家的前兩張牌總數",
            action: "行動",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2, 3, 4, 5",
                    action: "抽第三張牌。",
                },
                {
                    twoCardsTotal: "6 或 7",
                    action: "閒家始終站立。",
                },
                {
                    twoCardsTotal: "8 或 9",
                    action: "“自然”，不再發牌，閒家和莊家都站著。",
                },
            ],
        },
        bankerHand: {
            header: "莊家的規則",
            firstDescription: "- 如果閒家拿到第三張牌，莊家根據以下規則抽第三張牌：",
            cardsTotal: "莊家的前兩張牌總數",
            action: "當閒家的第三張牌有點值時，莊家抽牌：",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2",
                    action: "莊家總是抽第三張牌。",
                },
                {
                    twoCardsTotal: "3",
                    action: "點值 1、2、3、4、5、6、7、9、0（不是 8）。",
                },
                {
                    twoCardsTotal: "4",
                    action: "點值 2、3、4、5、6、7",
                },
                {
                    twoCardsTotal: "5",
                    action: "點值 4、5、6、7",
                },
                {
                    twoCardsTotal: "6",
                    action: "點值 6 或 7",
                },
                {
                    twoCardsTotal: "7",
                    action: "莊家始終站立。",
                },
                {
                    twoCardsTotal: "8 或 9",
                    action: "“自然”，不再發牌，閒家和莊家都站著。",
                },
            ],
            secondDescription: ["如果閒家前兩張牌的總點數為 6 或 7，則莊家將站在總點數為 6 或 7 的點上，並抽出總點數為 5 或更少的點數。"],
        },
    },
    payouts: {
        header: "支出",
        descriptions: {
            details: ["中獎金額根據投注賠率計算。", "支付包括初始投注。", "投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。"],
            noted: "<strong>注意：</strong> 如果結果為平局，所有對閒家和莊家的投注將被退還。",
            options: "選項",
            odds: "賠率",
            betLimit: "投注限額 </br>（最小 - 最大）",
            player: "閒家",
            banker: "莊家",
            big: "大",
            small: "小",
            tie: "平局",
            playerPair: "閒家一對",
            bankerPair: "莊家一對",
        },
    },
    termsAndConditions: baseTermAndConditionTw,
};
