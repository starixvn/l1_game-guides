import { baseTermAndConditionCn } from "../../base/terms-and-conditions/languages/cn";
import { IFanTanTranslationResource } from "./types";
export const cn: IFanTanTranslationResource = {
    introduction: {
        title: "介绍",
        description:
            "番摊是一款在亚洲非常流行的赌场游戏。它使用 150 个白色珠子进行游戏，桌上有 14 个投注选项，玩家将预测并投注哪个投注选项会获胜。",
    },
    gameRules: {
        title: "游戏规则",
        description:
            "在一局开始时，庄家会用杯子在桌上随机取走一些珠子。下注时间结束后，庄家将取走的珠子分成4个一组，直到剩余的珠子等于或小于4个，即为中奖结果。",
        example: {
            title: "例子",
            resultDetails: [
                "随机取出的珠子数量为 30 颗，分成四组：<p>7 x 4 + 2 = 30。剩下的珠子是 2 => 本轮结果是 2</p>",
                "随机取出的珠子数量为 40 颗，分成四组：<p>9 x 4 + 4 = 40。剩下的珠子是 4 => 本轮结果是 4</p>",
            ],
            haveOptions: undefined,
            descriptions: [
                "玩家选择筹码值并将其放在所需的投注选项上。所有投注必须在投注时间结束前完成。请注意，已下的赌注无法取消。",
                "玩家可以在除奇数和偶数之外的任何可用选项上下注，玩家只能在单数或偶数上下注。",
            ],
            maxBet: "每轮的最大总赌注为 {0}。",
        },
        winningCondition: {
            odd: "剩下的珠子是单数",
            even: "剩下的珠子是双数",
            fan1: "剩余的珠子是1",
            fan2: "剩余的珠子是2",
            fan3: "剩余的珠子是3",
            fan4: "剩余的珠子是4",
            kwok12: "剩余的珠子是 1 或 2",
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
        betType: "投注类型",
        betOption: "投注选项",
        winningCondition: "获胜条件",
        odds: "赔率",
        betLimit: "投注限额（最小-最大）",
        oddEven: "单双",
        odd: "单",
        even: "双",
        fan: "番",
        fan1: "1 番",
        fan2: "2 番",
        fan3: "3 番",
        fan4: "4 番",
        kwok: "角",
        chun: "三门",
    },
    payouts: {
        title: "支出",
        descriptions: [
            "中奖金额根据投注赔率计算。<p><b>注意:</b> 支出包括初始本金。</p>",
            "投注结算后，所有获胜金额都会立即添加到您的账户余额中。",
        ],
    },
    md5: {
        example: "<b>示例:</b> 检查比赛结果的真实性和透明度。",
        note: "<b>注:</b> 40对应游戏回合开始时随机取的珠数",
        step1: "<b>第一步:</b> 在公布结果前复制MD5密钥。",
        step2: "<b>第二步:</b> 发布后复制结果。",
        step3: `<b>第三步:</b> 转到 <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> 并将结果粘贴到 MD5 框中。`,
        step4: "<b>第四步:</b> 按“hash darling，hash！” 按钮，并将新生成的校验和 MD5 字符串与步骤 1 中的 MD5 密钥进行比较。",
    },
    termsAndConditions: baseTermAndConditionCn,
};
