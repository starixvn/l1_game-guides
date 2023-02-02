import { baseTermAndConditionCn } from "../../base/terms-and-conditions/languages/cn";
import { ISicBoTranslationResource } from "./types";
export const cn: ISicBoTranslationResource = {
    introduction: {
        title: "简介",
        description:
            "骰宝是一种在亚洲广受欢迎的赌场骰子游戏。该游戏使用三个标准骰子进行。这个游戏的目的是预测掷骰子的结果。玩家可以投注特定的骰子结果和骰子的总价值。",
    },
    gameRules: {
        title: "游戏规则",
        descriptions: [
            "选择您想玩的筹码值。玩家可以对游戏桌上显示的一个或多个投注选项进行投注。",
            "所有投注必须在投注时间到期之前进行。请注意，投注无法取消。",
            "一旦投注时间结束，骰子杯将被移除并显示结果。",
        ],
        maximum: "每轮最大总赌注为 {0}",
        otherDescriptions: ["每个投注选项显示的所有玩家的总投注额仅供参考。对于不同的市场和货币，总和是根据公司设定的内部汇率换算的。"],
    },
    bettingOptions: {
        title: "投注选项",
        description: {
            big: ["投注三个骰子的总分在 11 到 17 分之间。", "如果三个骰子的价值相同，则您输掉此赌注"],
            small: ["投注三个骰子的总分在 4 到 10 分之间", "如果三个骰子的价值相同，则您输掉此赌注"],
            anyTriple: "要赢得这个赌注，所有三个骰子必须显示相同的数字。",
            specificNumber: "投注从 1 到 6 的特定数字。如果选择的数字出现在三个骰子中，您就赢了。",
            totalPoints: "投注三个骰子的总分。玩家预测三个骰子的总分是否等于所选数字。",
        },
    },
    table: {
        options: "选项",
        choices: "选择",
        description: "描述",
        odds: "赔率",
        betLimit: "投注限额（最小最大）",
        big: "大",
        small: "小",
        anyTriple: "任何三倍",
        specificNumber: "具体编号",
        totalPoints: "总积分",
        betOnAnyNumber: "投注从 1 到 6 的任何数字",
        betOnTotalPoints: "投注从 4 到 17 的任何数字",
        numberAppearsOnce: "{0} 如果选择的数字出现一次。",
        numberAppearsTwice: "{0} 如果所选数字出现两次。",
        numberAppearsThreeTimes: "{0} 如果所选数字出现在所有三个骰子上。",
    },
    payouts: {
        title: "支付",
        descriptions: [
            "中奖金额根据投注赔率计算。<b>请注意,</b> 支付包括初始投注。",
            "投注结算后，所有中奖金额都会立即添加到您的账户余额中。",
        ],
    },
    md5: {
        step1ImageUrl: "/static/images/sicbo/md5_step1_cn.png",
        step2ImageUrl: "/static/images/sicbo/md5_step2_cn.png",
        note: "注：从左到右，{3,2,1}分别对应三个骰子的点数。",
    },
    termsAndConditions: baseTermAndConditionCn,
};
