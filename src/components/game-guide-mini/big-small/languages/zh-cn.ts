import { IBigSmallMiniTranslationResource } from "./types";

export const cn: IBigSmallMiniTranslationResource = {
    introduction: "大小是一款使用三个骰子的骰子游戏，玩家下注并预测三个骰子的总点数是大还是小。",
    winningCondition: {
        title: "获胜条件",
        description: {
            thePlayerCan: "玩家可以下大注或小注，但不能同时下注。",
            big: "大：三个骰子的总点数 >= 11",
            small: "小：三个骰子的总点数 <= 10",
            balanced: "平衡投注池：如果大和小的总投注金额不同，差距金额将退还给拥有最新投注单的玩家。",
        },
        example:
            "示例：玩家A在“大”上下注100，玩家B在“小”上下注40，而玩家C在“小”上下注80.为了平衡“大”和“小”的总投注金额，系统将退还20给玩家C。",
    },
    betLimit: {
        title: "投注金额",
        description: "最小赌注和最大赌注必须在{0}-{1}直接，每轮的最大赌注为{2}。",
    },
};
