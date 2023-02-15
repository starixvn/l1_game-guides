import { baseTermAndConditionCn } from "../../base/terms-and-conditions/languages/cn";
import { IBitcoinMasterTranslationResource } from "./types";
export const cn: IBitcoinMasterTranslationResource = {
    introduction: {
        title: "介绍",
        description: "精通比特币是一种新型的投注游戏，允许玩家根据接下来60秒的比特币价值进行投注。有四个选项：向上，向下，偶数，奇数。",
    },
    gameRules: {
        title: "游戏规则",
        descriptions: [
            "这个游戏的目的是预测60秒后最后记录的比特币价值（结果价值）与初始值（投注价格）相比是奇数，偶数，向上还是向下。",
            "有两种投注选项：向上/向下，偶数/奇数。对于每个投注选项，玩家只能选择一个选项下注。",
        ],
        winningConditions: {
            up: "“结果价格“高于“投注价格”。",
            down: "“结果价格“低于“投注价格”。",
            even: "结果价格是偶数。<br />+ 注意：一个数字是偶数，如果它的个位数是偶数。",
            odd: "结果价格是奇数。<br />+ Note: 注意：如果一个数的个位是奇数，那么它就是奇数。",
        },
        example1: {
            title: "<b>例子：</b> 对于“向上/向下”的选项，玩家只能选择”向上“或”向下“，不能同时投注。",
            increaseStake: "玩家可以在下注时间结束前再次下注相同的选项来增加投注金额。",
            maxBet: "每轮的最大赌注为{0}.注意，下注后不能取消。",
            otherDescriptions: [
                "对于“向上/向下”的选项，如果比特币价值在60秒后没有变化，投注将被退还。”结果价格“等于“投注价格”。",
                "游戏中显示的比特币（USD）价值是4个交易所实时数据的平均值：",
            ],
        },
        example2: {
            title: "例子",
            descriptions: ["比特币价值在开始时（投注价格）= <b>57,761.13</b>", "比特币价值在60秒后（结果价格）= <b>58,011.08</b>"],
            upDown: {
                title: "向上/向下",
                description: "+ 结果价格 > 下注价格。 选择“向上”选项的下注获胜。",
            },
            evenOdd: {
                title: "偶数/奇数",
                description: "+ 结果价格 是奇数（58，011）。选择“奇数”选项的下注获胜。",
            },
        },
        balancedBettingPool:
            "<b>平衡投注池:</b> 对于相同的投注选项，如果每个投注选项的投注金额不同，差距金额将退还给拥有最新投注单的玩家。",
        example3:
            "<b>例子:</b> 对于“向上/向下”选项，玩家A在“向上”投注100，玩家B在“向下”投注40，而玩家C在“向下”投注 80 为了平衡“向上”和“向下”的投注金额，系统将会退还20给玩家C。",
    },
    table: {
        betType: "投注选项",
        options: "选项",
        winningConditions: "获胜条件",
        odds: "赔率",
        betLimit: "投注选项限额 <br />(最小 最大)",
        upDown: "向上/向下",
        up: "向上",
        down: "向下",
        evenOdd: "偶数/奇数",
        even: "偶数",
        odd: "奇数",
    },
    payouts: {
        title: "赔率",
        descriptions: ["中奖金额是根据投注赔率计算。", "赔率包括最初下注金额。", "投注结算后，所有获胜金额都会立即添加到您的账户余额中。"],
    },
    termsAndConditions: {
        ...baseTermAndConditionCn,
        ...{
            details: ["如果公司长时间无法获得官方比特币的结果，公司保留取消任何投注的权利。"].concat(...baseTermAndConditionCn.details),
        },
    },
};
