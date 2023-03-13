import { baseTermAndConditionTw } from "../../../base/terms-and-conditions/languages/tw";
import { IKenoTranslationResource } from "../../keno-max/languages/types";

export const tw: IKenoTranslationResource = {
    introduction: {
        title: "簡介",
        description:
            "Keno Mini / Keno Mini 2 是帶有 40 個球的 RNG Keno。從 40 個編號為 1 到 40 的球中隨機抽取 10 個球。玩家對遊戲桌上顯示的一個或多個投注選項下注。抽取的 10 個編號球的總和將決定玩家的輸贏。",
    },
    gameRules: {
        title: "遊戲規則",
        description: {
            lines: ["所有投注必須在投注時間到期之前進行。注意，投注無法取消。", "下注時間結束後，將顯示結果。"],
            maximum: "每輪最大總賭注為 {0}",
            otherLine: undefined,
        },
    },
    bettingOptions: {
        title: "投注選項",
        bigSmall: {
            title: "大/小",
            descriptions: ["<b>大:</b> 抽出的 10 個編號的球的總和 >= 206", "<b>小:</b> 抽出的 10 個編號的球的總和為 <= 205"],
            winningText: "投注“小”的玩家將獲勝",
        },
        oddEven: {
            title: "單/雙",
            descriptions: ["<b>單:</b> 抽出的 10 個編號球的總和為單數。", "<b>雙:</b> 抽出的 10 個編號的球之和為雙數。"],
            winningText: "投注“單”的玩家將獲勝",
        },
        fiveElement: {
            title: "五行（金、木、水、火、土）",
            descriptions: [
                "<b>金:</b> 抽取的 10 個編號的球的總和，範圍從 210 到 695",
                "<b>木:</b> 抽出的 10 個編號球的總和，範圍從 696 到 763",
                "<b>水:</b> 抽出的 10 個編號的球的總和，範圍從 764 到 855",
                "<b>火:</b> 抽出的 10 個編號的球的總和，範圍從 856 到 923",
                "<b>土:</b> 抽出的 10 個編號的球的總和，範圍從 924 到 1410",
            ],
            winningText: "投注“火”的玩家將獲勝",
        },
        example: {
            description: "<b>示例:</b> 從 40 個編號的球中隨機抽取 10 個編號的球",
            drawResult: "繪製結果",
            totalSum: "總和",
        },
    },
    payouts: {
        title: "支出",
        descriptions: ["中獎金額根據投注賠率計算。", "支付包括初始投注。", "投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。"],
        options: "選項",
        odds: "賠率",
        betLimit: "投注限額",
        min: "最小",
        max: "最大",
        big: "大",
        small: "小",
        odd: "單",
        even: "雙",
        gold: "金",
        wood: "木",
        water: "水",
        fire: "火",
        earth: "土",
    },
    md5: {
        image1: "/static/images/keno-mini/md5_step1_tw.png",
        image2: "/static/images/keno-mini/md5_step2_tw.png",
        note: "注：237為比賽成績的總分。",
    },
    termsAndConditions: baseTermAndConditionTw,
};
