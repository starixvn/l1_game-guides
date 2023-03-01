import { ISlotTranslationResource } from "../types";

export const tw: ISlotTranslationResource = {
    gameRule: {
        title: "遊戲規則",
        description: {
            line1: "玩家在按下“旋轉”之前選擇支付線（線）並設置您要下注的下注級別。",
            totalBet: "總投注 ",
            paylinesFormular: "= 支付線 * 投注水平",
            subDescriptions: [
                "25 條支付線從 1 到 25 編號，玩家必須在開始遊戲前至少選擇一條支付線。",
                "默認情況下，所有具有最低投注級別的支付線將在開始時被選中。",
                "每條支付線上的贏輸將根據位於該支付線上的相同符號的數量計算。",
            ],
        },
    },
    payOut: {
        paytable: "賠率表",
        winningAmount: "中獎金額根據投注賠率計算。",
        note: "注意",
        initialStake: "支付包括初始投注。",
        allWinningAmount: "投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。",
    },
    examplePayout: {
        title: "例子",
        table: {
            symbolHeader: "符號",
            descriptionHeader: "描述",
            having5Symbols: "有 5 個符號",
            samePayline: "位於同一條支付線上。",
            payoutBetLevel: "派彩 = 投注等級 *",
            having3Symbols: "有 3 個符號",
            having4Symbols: "有 4 個符號",
        },
    },
    freeSpin: {
        title: "Free Spin",
        description1: "玩家將收到與結果中包含的Free Spin符號數量相對應的免費旋轉獎金。",
        description2: "Free Spin符號不必位於同一支付線上。",
        freeSpinBonus: "免費旋轉獎金。",
        note: "注意",
        freeSpinReel: "“Free Spin”符號必須出現在不同的捲軸上。例如，如果同一捲軸上有 3 個“Free Spin”符號，系統將計為一個符號。",
        thereAre4: "結果中有 4 個“Free Spin”符號，但 3 個符號位於同一個轉軸上。玩家沒有資格獲得Free Spin獎金。",
        lastFreespin: "Free Spin的投注級別和支付線數與上一次旋轉（用戶獲得Free Spin獎金的旋轉）相同。",
        freeSpinExpired: "玩家必須在發放後 24 小時內完成Free Spin獎金。未使用的Free Spin將丟失。",
    },
    bonus: {
        title: "Bonus",
        description1: "結果中的任意位置出現 3、4 或 5 個Bonus符號將觸發Bonus遊戲。",
        description2: "Bonus符號不必位於同一支付線上。",
        canOpen: "可在獎金遊戲中打開",
        itemInBonusGame: "個寶箱。",
        note: "注意",
        bonusReel: "Bonus符號必須出現在不同的捲軸中。 例如，如果 2 或 3 個 Bonus符號出現在同一個捲軸上，系統將計為一個符號。",
        thereAre4: "結果中有 4 個",
        eligible: "符號，但 2 個符號位於同一個捲軸上。玩家有資格獲得 3 件物品。",
        bonusExpired: "玩家必須在倒計時 120 秒內完成Bonus遊戲。這段時間過後，系統會隨機開啟物品並結算遊戲回合。",
    },
    wild: {
        title: "Wild",
        substitute: "“Wild”符號可以替代除",
        and: "和",
        endSubstitute: "",
        onlyHighest: "僅支付每條線獲得的最高勝利。",
        example: "例子",
        ifwild: "如果Wild符號是",
        payoutBetLevel: "派彩 = 投注等級 *",
        highestWin: "玩家將在這條支付線上獲得最高勝利",
    },
    main: {
        introduction: "簡介",
        description: "該遊戲包括 5 個捲軸和 3 行，帶有 11 個不同的符號。如果相同的符號位於已選擇的同一條支付線上，玩家將獲勝。",
    },
};
