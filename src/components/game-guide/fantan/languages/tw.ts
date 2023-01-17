import { IFanTanTranslationResource } from "./types";
export const tw: IFanTanTranslationResource = {
    introduction: {
        title: "介紹",
        description:
            "番攤是一款在亞洲非常流行的賭場遊戲。它使用 150 個白色珠子進行遊戲，桌上有 14 個投注選項，玩家將預測並投注哪個投注選項會獲勝。",
    },
    gameRules: {
        title: "遊戲規則",
        description:
            "在一局開始時，莊家會用杯子在桌上隨機取走一些珠子。下注時間結束後，莊家將取走的珠子分成4個一組，直到剩餘的珠子等於或小於4個，即為中獎結果。",
        example: {
            title: "例子",
            resultDetails: [
                "隨機取出的珠子數量為 30 顆，分成四組：<p>7 x 4 + 2 = 30。剩下的珠子是 2 => 本輪結果是 2</p>",
                "隨機取出的珠子數量為 40 顆，分成四組：<p>9 x 4 + 4 = 40。剩下的珠子是 4 => 本輪結果是 4</p>",
            ],
            haveOptions: undefined,
            descriptions: [
                "玩家選擇籌碼值並將其放在所需的投注選項上。所有投注必須在投注時間結束前完成。請注意，已下的賭注無法取消。",
                "玩家可以在除奇數和偶數之外的任何可用選項上下注，玩家只能在單數或偶數上下注。",
            ],
            maxBet: "每輪的最大總賭注為 {0}。",
        },
        winningCondition: {
            odd: "剩下的珠子是單數",
            even: "剩下的珠子是雙數",
            fan1: "剩餘的珠子是1",
            fan2: "剩餘的珠子是2",
            fan3: "剩餘的珠子是3",
            fan4: "剩餘的珠子是4",
            kwok12: "剩餘的珠子是 1 或 2",
            kwok23: "剩下的珠子是 2 或 3",
            kwok34: "剩下的珠子是 3 或 4",
            kwok41: "剩下的珠子是 1 或 4",
            chun234: "剩下的珠子是 2、3 或 4",
            chun134: "剩下的珠子是 1、3 或 4",
            chun124: "剩下的珠子是 1、2 或 4",
            chun123: "剩下的珠子是 1、2 或 3",
        },
    },
    table: {
        betType: "投注類型",
        betOption: "投注選項",
        winningCondition: "獲勝條件",
        odds: "賠率",
        betLimit: "投注限額（最小-最大）",
        oddEven: "單雙",
        odd: "單",
        even: "雙",
        fan: "番",
        fan1: "1 番",
        fan2: "2 番",
        fan3: "3 番",
        fan4: "4 番",
        kwok: "角",
        chun: "三門",
    },
    payouts: {
        title: "支出",
        descriptions: [
            "中獎金額根據投注賠率計算。<p><b>注意:</b> 支出包括初始本金。</p>",
            "投注結算後，所有獲勝金額都會立即添加到您的賬戶餘額中。",
        ],
    },
    md5: {
        example: "<b>示例:</b> 檢查結果的真實性和透明度。",
        note: "<b>注:</b> 40對應遊戲回合開始時隨機取的珠數",
        step1: "<b>第一步:</b> 在公佈結果前複製MD5密鑰。",
        step2: "<b>第二步:</b> 發布後復制結果。",
        step3: `<b>第三步:</b> 轉到 <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> 並將結果粘貼到 MD5 框中。`,
        step4: "<b>第四步:</b> 按“hash darling，hash！” 按鈕，並將新生成的校驗和 MD5 字符串與步驟 1 中的 MD5 密鑰進行比較。",
    },
};
