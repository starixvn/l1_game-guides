import { baseTermAndConditionCn } from "../../../base/terms-and-conditions/languages/cn";
import { IKenoTranslationResource } from "../../keno-max/languages/types";

export const cn: IKenoTranslationResource = {
    introduction: {
        title: "简介",
        description:
            "Keno Mini / Keno Mini 2 是带有 40 个球的 RNG Keno。从 40 个编号为 1 到 40 的球中随机抽取 10 个球。玩家对游戏桌上显示的一个或多个投注选项下注。抽取的 10 个编号球的总和将决定玩家的输赢。",
    },
    gameRules: {
        title: "游戏规则",
        description: {
            lines: ["所有投注必须在投注时间到期之前进行。注意，投注无法取消。", "下注时间结束后，将显示结果。"],
            maximum: "每轮最大总赌注为 {0}",
            otherLine: undefined,
        },
    },
    bettingOptions: {
        title: "投注选项",
        bigSmall: {
            title: "大/小",
            descriptions: ["<b>大:</b> 抽出的 10 个编号的球的总和 >= 206", "<b>小:</b> 抽出的 10 个编号的球的总和为 <= 205"],
            winningText: "投注“小”的玩家将获胜。",
        },
        oddEven: {
            title: "单/双",
            descriptions: ["<b>单:</b> 抽出的 10 个编号球的总和为单数。", "<b>双:</b> 抽出的 10 个编号的球之和为双数。"],
            winningText: "投注“单”的玩家将获胜。",
        },
        fiveElement: {
            title: "五行（金、木、水、火、土）",
            descriptions: [
                "<b>金:</b> 抽取的 10 个编号的球的总和，范围从 55 到 163",
                "<b>木:</b> 抽出的 10 个编号球的总和，范围从 164 到 187",
                "<b>水:</b> 抽出的 10 个编号的球的总和，范围从 188 到 222",
                "<b>火:</b> 抽出的 10 个编号的球的总和，范围从 223 到 246",
                "<b>土:</b> 抽出的 10 个编号的球的总和，范围从 247 到 355",
            ],
            winningText: "投注“火”的玩家将获胜。",
        },
        example: {
            description: "<b>示例:</b> 从 40 个编号的球中随机抽取 10 个编号的球",
            drawResult: "绘制结果",
            totalSum: "总和",
        },
    },
    payouts: {
        title: "支出",
        descriptions: ["中奖金额根据投注赔率计算。", "支付包括初始投注。", "投注结算后，所有中奖金额都会立即添加到您的账户余额中。"],
        options: "选项",
        odds: "赔率",
        betLimit: "投注限额",
        min: "最小",
        max: "最大",
        big: "大",
        small: "小",
        odd: "单",
        even: "双",
        gold: "金",
        wood: "木",
        water: "水",
        fire: "火",
        earth: "土",
    },
    md5: {
        image1: "/static/images/keno-mini/md5_step1_cn.png",
        image2: "/static/images/keno-mini/md5_step2_cn.png",
        note: "注：237为比赛成绩的总分。",
    },
    termsAndConditions: baseTermAndConditionCn,
};
