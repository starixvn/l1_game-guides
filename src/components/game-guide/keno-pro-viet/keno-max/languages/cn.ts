import { baseTermAndConditionCn } from "../../../base/terms-and-conditions/languages/cn";
import { IKenoTranslationResource } from "./types";
export const cn: IKenoTranslationResource = {
    introduction: {
        title: "简介",
        description:
            "Mega Keno / Mega Keno 2 / Keno North / Keno South / Keno West / Keno East 是有 80 个球的 RNG Keno。从 80 个编号为 1 到 80 的球中随机抽取 20 个球。 玩家对游戏桌上显示的一个或多个投注选项下注。抽出的 20 个编号球的总和将决定玩家的输赢。",
    },
    gameRules: {
        title: "游戏规则",
        description: {
            lines: ["所有投注必须在投注时间到期之前进行。请注意，投注无法取消。", "下注时间结束后，将显示结果。"],
            maximum: "每轮最大总赌注为 {0}",
            otherLine: undefined,
        },
    },
    bettingOptions: {
        title: "投注选项",
        bigSmall: {
            title: "大/小",
            descriptions: ["<b>大:</b> 抽出的 20 个编号的球的总和 >= 811", "<b>小:</b> 抽出的 20 个编号的球的总和为 <= 810"],
            winningText: "投注“大”的玩家将获胜。",
        },
        oddEven: {
            title: "单/双",
            descriptions: ["<b>单:</b> 抽出的 20 个编号球的总和为单数。", "<b>双:</b> 抽出的 20 个编号的球之和为双数。"],
            winningText: "投注“双”的玩家将获胜",
        },
        fiveElement: {
            title: "五行（金、木、水、火、土）",
            descriptions: [
                "<b>金:</b> 抽取的 20 个编号的球的总和，范围从 210 到 695",
                "<b>木:</b> 抽出的 20 个编号球的总和，范围从 696 到 763",
                "<b>水:</b> 抽出的 20 个编号的球的总和，范围从 764 到 855",
                "<b>火:</b> 抽出的 20 个编号的球的总和，范围从 856 到 923",
                "<b>土:</b> 抽出的 20 个编号的球的总和，范围从 924 到 1410",
            ],
            winningText: "投注“木”的玩家将获胜",
        },
        example: {
            description: "<b>示例:</b> 从 80 个编号的球中随机抽取 20 个编号的球",
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
        example: "<b>示例:</b> 检查比赛结果的真实性和透明度。",
        step1: "<b>第一步:</b> 在公布结果前复制MD5密钥。",
        image1: "/static/images/mega-keno/md5_step1_cn.png",
        step2: "<b>第二步:</b> 发布后复制结果。",
        image2: "/static/images/mega-keno/md5_step2_cn.png",
        step3: `<b>第三步:</b> 转到 <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> 并将结果粘贴到 MD5 框中。`,
        step4: "<b>第四步:</b> 按“hash darling，hash！” 按钮，并将新生成的校验和 MD5 字符串与步骤 1 中的 MD5 密钥进行比较。",
        note: "注：363为比赛成绩的总分。",
        md5Key: "MD5 钥匙",
        result: "结果",
        copy: "复制",
    },
    termsAndConditions: baseTermAndConditionCn,
};
