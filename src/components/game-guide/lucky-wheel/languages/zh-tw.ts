import { ILuckyWheelTranslationResource } from "./types";

export const tw: ILuckyWheelTranslationResource = {
    introduction: "",
    promotionProgram: {
        title: "推廣方案",
        scoin: "擁有免費旋轉的玩家可以玩幸運輪並獲得 Scoin",
        description: ["從幸運輪獲得的 Scoin 將自動添加到您的 Scoin 錢包中。", "每天可以玩的免費旋轉次數沒有限制。"],
    },
    gameRules: {
        title: "如何使用 Scoin 下注",
        description: [
            "Scoin只能用於在Vgaming中玩色碟遊戲。",
            "自玩家收到通知之日起，免費旋轉的有效期為一周。在此期間之後，任何未使用的免費旋轉都將丟失。",
            "使用 Scoin 的色碟遊戲的獲勝金額將記入您的賬戶餘額。",
        ],
        note: {
            content: "筆記：",
            description: ["Scoin 不能兌換現金。", "Scoin 僅適用於色碟，對於其他遊戲，本金將直接從您的賬戶餘額中扣除。"],
        },
    },
    termsAndConditions: {
        title: "條款和條件",
        line1: "參與此促銷活動即表示您同意受這些條款和條件的約束。",
        description: [
            "本公司保留因不可抗力事件（包括但不限於任何技術錯誤、網絡服務故障、電源故障）而取消任何幸運輪盤結果的權利。",
            "如果出現任何可疑或欺詐的遊戲/行為，公司保留取消幸運輪盤結果或將玩家排除在本次促銷活動之外的權利。",
            "公司保留隨時更改適用於此促銷活動的任何參賽條款或修改、終止、暫停或重新安排此促銷活動的權利。",
            "因本推廣活動引起或與之相關的任何爭議均由本公司決定。",
        ],
    },
};
