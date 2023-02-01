import { TreasureIslandLanguage } from "./types";

export const cn: TreasureIslandLanguage = {
    introduction: {
        title: "介绍",
        description:
            "宝藏岛是一款在线级联老虎机游戏，与老式老虎机相比，它提供了多种获胜机会，因此非常受在线游戏玩家欢迎。\
            该游戏由六个卷轴、五行和十个不同的符号组成。",
    },

    gameRules: {
        title: "游戏规则",
        rulePlayerSelect: "玩家在按下“旋转”按钮之前选择或调整最适合您的投注金额。",
        totalBet: "总赌注",
        paylinesFormular: "= 赌注级别 * 硬币价值 * 赌注乘数",
        subDescriptions: [
            "1. 币值就是你想在游戏中每条线花费多少。",
            "2. 下注级别是每行的硬币总数。",
            "3. 赌注乘数是用于通过乘以赌注级别和硬币价值来计算总赌注的乘数。 投注乘数：20 倍。",
        ],
        ruleStartSpin: "玩家可以按下“旋转”按钮，或使用键盘上的空格键/回车键开始旋转。",
        ruleWin: "旋转结束时屏幕上相同符号的总数决定了赢奖的价值。",
        betLimit: "投注限额:",
    },

    payout: {
        title: "支出",
        description1: ["符号在屏幕上的任何地方支付。", "每个组合的输赢将根据基本投注值计算。"],
        baseBetValue: "基本投注价值 = 赌注级别 * 硬币价值",
        description2: "支出表将根据您选择的基本赌注值进行更新。",
        description3(currMaxBet: number) {
            return [
                "当基本旋转导致的所有翻滚都被玩完后，获胜金额会立即添加到您的帐户余额中。",
                `最大赢额限制为 ${currMaxBet} X bet。 如果一局的总胜率达到最大胜率，则该局游戏立即结束。\
                获胜者将获得限制，所有剩余的功能将被没收。`,
            ];
        },
    },

    examplePayout: {
        content: "<strong> 示例：</strong> 您的基本赌注值为",
        table: {
            headers: ["象征", "描述"],
            getHavingSymbol(symbol: string) {
                return `结果板上出现 ${symbol} 个符号 `;
            },
            descriptionContent: "。",
            payout: "支出 =",
        },
    },

    tumbling: {
        title: "翻滚功能",
        descriptions: [
            "每次旋转后，获胜组合将获得报酬，所有获胜符号将从卷轴上移除，让新符号落入空位置。",
            "翻滚将继续，直到翻滚不再出现获胜组合为止。",
            "可能翻滚的次数没有限制。",
        ],
    },

    multipliers: {
        title: "乘数",
        descriptions: [
            "乘数符号出现在所有转轴上，并且可以在旋转过程中随机击中，并在基础游戏和免费旋转中翻滚。",
            "每当一个乘数符号命中时，它会采用一个从 2x 到 500x 的随机乘数值。",
            "在翻滚结束时，乘数符号的值被添加并乘以翻滚赢 值以计算赢奖金额。",
        ],
    },

    exampleMultipliers: {
        title: "例子：",
        tableHeader: ["赢符号", "翻滚赢", "乘数", "赢"],
    },

    freeSpin: {
        title: "免费旋转功能",
        define: "当屏幕上的任意位置出现 4 个或更多 SCATTER 符号时，即授予免费旋转功能。",
        subDescriptions: {
            tableHeader: ["象征", "描述"],
            getSymbolOrMore(symbol: string) {
                return `结果中有 ${symbol} 个或更多 Scatter 符号。`;
            },
            getSymbol(symbol: string) {
                return `结果中有 ${symbol} 个 Scatter 符号。`;
            },
            getFreeSpin(count: number) {
                return `获得 “${count}” 免费旋转奖金。`;
            },
        },
        getMoreFreeSpin(value: number) {
            return `每当免费旋转回合中出现 4 个或更多 SCATTER 符号时，将奖励 ${value} 次额外的免费旋转。`;
        },
        totalMultiplier:
            "在免费旋转回合的整个持续时间内，只要出现任何新的乘数符号并且旋转导致获胜，乘数值就会添加到总乘数中。\
            总乘数值用于计算获胜金额。",
        freeSpin24h: "玩家必须在发放免费旋转奖金后的 24 小时内完成。 未使用的免费旋转将丢失。",
    },

    exampleFreeSpin: {
        title: "示例：玩家赢得 4 次免费旋转",
        table: {
            headers: ["回合编号", "翻滚赢", "乘数", "总乘数", "赢"],
            round1Win: "<strong>50</strong><br/><strong>(翻滚获胜 * 总乘数)</strong>",
            round2Win: "<strong>5</strong><br/><strong>(翻滚赢)</strong>",
            round4Win: "<strong>56</strong><br/><strong>(翻滚获胜 * 总乘数)</strong>",
        },
        tumbleDescriptions: ["1. 翻滚赢奖金额", "2.总乘数：5+3 =8"],
    },
};
