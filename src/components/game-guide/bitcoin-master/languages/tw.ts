import { baseTermAndConditionTw } from "../../base/terms-and-conditions/languages/tw";
import { IBitcoinMasterTranslationResource } from "./types";
export const tw: IBitcoinMasterTranslationResource = {
    introduction: {
        title: "介紹",
        description: "精通比特幣是一種新型的投注遊戲，允許玩家根據接下來60秒的比特幣價值進行投注。有四個選項：向上，向下，偶數，奇數。",
    },
    gameRules: {
        title: "遊戲規則",
        descriptions: [
            "這個遊戲的目的是預測60秒後最後記錄的比特幣價值（結果價值）與初始值（投注價格）相比是奇數，偶數，向上還是向下。",
            "有兩種投注選項：向上/向下，偶數/奇數。對於每個投注選項，玩家只能選擇一個選項下注。",
        ],
        winningConditions: {
            up: "”結果價格“高於“投注價格”。",
            down: "”結果價格“低於“投注價格”。",
            even: "結果價格是偶數.<br />+ 注意：一個數字是偶數，如果它的個位數是偶數。",
            odd: "結果價格是奇數.<br />+ 注意：如果一個數的個位是奇數，那麼它就是奇數。",
        },
        example1: {
            title: "<b>例子:</b> 對於“向上/向下”的選項，玩家只能選擇”向上“或”向下“，不能同時投注。",
            increaseStake: "玩家可以在下注時間結束前再次下注相同的選項來增加投注金額。",
            maxBet: "每輪的最大賭注為{0}.請注意，下注後不能取消。",
            otherDescriptions: [
                "對於“向上/向下”的選項，如果比特幣價值在60秒後沒有變化，投注將被退還。 ”結果價格“等於“投注價格”。",
                "遊戲中顯示的比特幣（USD）價值是4個交易所實時數據的平均值：",
            ],
        },
        example2: {
            title: "例子",
            descriptions: ["比特幣價值在開始時（投注價格）= <b>57,761.13</b>", "比特幣價值在60秒後（結果價格）= <b>58,011.08</b>"],
            upDown: {
                title: "向上/向下",
                description: "+ 結果價格 > 下注價格。選擇“向上”選項的下注獲勝。",
            },
            evenOdd: {
                title: "偶數/奇數",
                description: "+ 結果價格 是奇數（58，011）。選擇“奇數”選項的下注獲勝。",
            },
        },
        balancedBettingPool:
            "<b>平衡投注池:</b> 對於相同的投注選項，如果每個投注選項的投注金額不同，差距金額將退還給擁有最新投注單的玩家。",
        example3:
            "<b>例子:</b> 對於“向上/向下”選項，玩家A在“向上”投注100，玩家B在“向下”投注40，而玩家C在“向下”投注 80 為了平衡“向上”和“向下”的投注金額，系統將會退還20給玩家C。",
    },
    table: {
        betType: "投注選項",
        options: "選項",
        winningConditions: "獲勝條件",
        odds: "賠率",
        betLimit: "投注選項限額 <br />(最小 最大)",
        upDown: "向上/向下",
        up: "向上",
        down: "向下",
        evenOdd: "偶數/奇數",
        even: "偶數",
        odd: "奇數",
    },
    payouts: {
        title: "賠率",
        descriptions: ["中獎金額是根據投注賠率計算。", "賠率包括最初下注金額。", "投注結算後，所有獲勝金額都會立即添加到您的賬戶餘額中。"],
    },
    termsAndConditions: {
        ...baseTermAndConditionTw,
        ...{
            details: ["如果公司長時間無法獲得官方比特幣的結果，公司保留取消任何投注的權利。"].concat(...baseTermAndConditionTw.details),
        },
    },
};
