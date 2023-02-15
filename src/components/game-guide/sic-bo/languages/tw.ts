import { baseTermAndConditionTw } from "../../base/terms-and-conditions/languages/tw";
import { ISicBoTranslationResource } from "./types";
export const tw: ISicBoTranslationResource = {
    introduction: {
        title: "簡介",
        description:
            "骰寶是一種在亞洲廣受歡迎的賭場骰子遊戲。該遊戲使用三個標準骰子進行。這個遊戲的目的是預測擲骰子的結果。玩家可以投注特定的骰子結果和骰子的總價值。",
    },
    gameRules: {
        title: "遊戲規則",
        descriptions: [
            "選擇您想玩的籌碼值。玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。",
            "所有投注必須在投注時間到期之前進行。注意，投注無法取消。",
            "一旦投注時間結束，骰子杯將被移除並顯示結果。",
        ],
        maximum: "每輪最大總賭注為 {0}",
        otherDescriptions: ["每個投注選項顯示的所有玩家的總投注額僅供參考。對於不同的市場和貨幣，總和是根據公司設定的內部匯率換算的。"],
    },
    bettingOptions: {
        title: "投注選項",
        description: {
            big: ["投註三個骰子的總分在 11 到 17 分之間。", "如果三個骰子的價值相同，則您輸掉此賭注。"],
            small: ["投註三個骰子的總分在 4 到 10 分之間。", "如果三個骰子的價值相同，則您輸掉此賭注。"],
            anyTriple: "要贏得這個賭注，所有三個骰子必須顯示相同的數字。",
            specificNumber: "投注從 1 到 6 的特定數字。如果選擇的數字出現在三個骰子中，您就贏了。",
            totalPoints: "投註三個骰子的總分。玩家預測三個骰子的總分是否等於所選數字。",
        },
    },
    table: {
        options: "選項",
        choices: "選擇",
        description: "描述",
        odds: "賠率",
        betLimit: "投注限額（最小最大）",
        big: "大",
        small: "小",
        anyTriple: "任何三倍",
        specificNumber: "具體編號",
        totalPoints: "總積分",
        betOnAnyNumber: "投注從 1 到 6 的任何數字",
        betOnTotalPoints: "投注從 4 到 17 的任何數字",
        numberAppearsOnce: "{0} 如果選擇的數字出現一次。",
        numberAppearsTwice: "{0} 如果所選數字出現兩次。",
        numberAppearsThreeTimes: "{0} 如果所選數字出現在所有三個骰子上。",
    },
    payouts: {
        title: "支付",
        descriptions: [
            "中獎金額根據投注賠率計算。<b>注意,</b> 支付包括初始投注。",
            "投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。",
        ],
    },
    md5: {
        step1ImageUrl: "/static/images/sicbo/md5_step1_tw.png",
        step2ImageUrl: "/static/images/sicbo/md5_step2_tw.png",
        note: "注：從左到右，{3,2,1}分別對應三個骰子的點數。",
    },
    termsAndConditions: baseTermAndConditionTw,
};
