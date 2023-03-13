import { TreasureIslandLanguage } from "./types";

export const tw: TreasureIslandLanguage = {
    introduction: {
        title: "介紹",
        description:
            "寶藏島是一款在線級聯老虎機遊戲，與老式老虎機相比，它提供了多種獲勝機會，因此非常受在線遊戲玩家歡迎。" +
            "該遊戲由六個捲軸、五行和十個不同的符號組成。",
    },

    gameRules: {
        title: "遊戲規則",
        rulePlayerSelect: "玩家在按下“旋轉”按鈕之前選擇或調整最適合您的投注金額。",
        totalBet: "總賭注",
        paylinesFormular: "= 賭注級別 * 硬幣價值 * 賭注乘數",
        subDescriptions: [
            "1. 幣值就是你想在遊戲中每條線花費多少。",
            "2. 下注級別是每行的硬幣總數。",
            "3. 賭注乘數是用於通過乘以賭注級別和硬幣價值來計算總賭注的乘數。投注乘數：20 倍。",
        ],
        ruleStartSpin: "玩家可以按下“旋轉”按鈕，或使用鍵盤上的空格鍵/回車鍵開始旋轉。",
        ruleWin: "旋轉結束時屏幕上相同符號的總數決定了贏獎的價值。",
        betLimit: "投注限額:",
    },

    payout: {
        title: "支出",
        description1: ["符號在屏幕上的任何地方支付。", "每個組合的輸贏將根據基本投注值計算。"],
        baseBetValue: "基本投注價值 = 賭注級別 * 硬幣價值",
        description2: "支出表將根據您選擇的基本賭注值進行更新。",
        description3(currMaxBet: number) {
            return [
                "當基本旋轉導致的所有翻滾都被玩完後，獲勝金額會立即添加到您的帳戶餘額中。",
                `最大贏額限制為 ${currMaxBet}X bet。如果一局的總勝率達到最大勝率，則該局遊戲立即結束。` +
                    `獲勝者將獲得限制，所有剩餘的功能將被沒收。`,
            ];
        },
    },

    examplePayout: {
        content: "<strong> 示例:</strong> 您的基本賭注值為",
        table: {
            headers: ["象徵", "描述"],

            getHavingSymbol(symbol: string) {
                return `結果板上出現 ${symbol} 個符號。`;
            },
            descriptionContent: "。",
            payout: "支出 =",
        },
    },

    tumbling: {
        title: "翻滾功能",
        descriptions: [
            "每次旋轉後，獲勝組合將獲得報酬，所有獲勝符號將從捲軸上移除，讓新符號落入空位置。",
            "翻滾將繼續，直到翻滾不再出現獲勝組合為止。",
            "可能翻滾的次數沒有限制。",
        ],
    },

    multipliers: {
        title: "乘數",
        descriptions: [
            "乘數符號出現在所有轉軸上，並且可以在旋轉過程中隨機擊中，並在基礎遊戲和免費旋轉中翻滾。",
            "每當一個乘數符號命中時，它會採用一個從 2x 到 500x 的隨機乘數值。",
            "在翻滾結束時，乘數符號的值被添加並乘以翻滾贏值以計算贏獎金額。",
        ],
    },

    exampleMultipliers: {
        title: "例子：",
        tableHeader: ["贏符號", "翻滾贏", "乘數", "贏"],
    },

    freeSpin: {
        title: "Free Spins功能",
        define: "當屏幕上的任意位置出現 4 個或更多 SCATTER 符號時，即授予Free Spins功能。",
        subDescriptions: {
            tableHeader: ["象徵", "描述"],
            getSymbolOrMore(symbol: string) {
                return `結果中有 ${symbol}  個或更多 Scatter 符號。`;
            },
            getSymbol(symbol: string) {
                return `結果中有 ${symbol} 個 Scatter 符號。`;
            },
            getFreeSpin(count: number) {
                return `獲得 “${count}” Free Spins獎金。`;
            },
        },
        getMoreFreeSpin(value: number) {
            return `每當免費旋轉回合中出現 4 個或更多 SCATTER 符號時，將獎勵 ${value} 次額外的Free Spins。`;
        },
        totalMultiplier:
            "在Free Spins回合的整個持續時間內，只要出現任何新的乘數符號並且旋轉導致獲勝，乘數值就會添加到總乘數中。" +
            "總乘數值用於計算獲勝金額。",
        freeSpin24h: "玩家必須在發放Free Spins獎金後的 24 小時內完成。未使用的免費旋轉將丟失。",
    },

    exampleFreeSpin: {
        title: "示例：玩家贏得 4 次Free Spins",
        table: {
            headers: ["回合編號", "翻滾贏", "乘數", "總乘數", "贏"],
            round1Win: "<strong>50</strong><br/><strong>(翻滾獲勝 * 總乘數)</strong>",
            round2Win: "<strong>5</strong><br/><strong>(翻滾贏)</strong>",
            round4Win: "<strong>56</strong><br/><strong>(翻滾獲勝 * 總乘數)</strong>",
        },
        tumbleDescriptions: ["1. 翻滾贏獎金額", "2.總乘數：5+3 =8"],
    },
};
