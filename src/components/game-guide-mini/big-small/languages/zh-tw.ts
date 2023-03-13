import { IBigSmallMiniTranslationResource } from "./types";

export const tw: IBigSmallMiniTranslationResource = {
    introduction: "大小是一款使用三個骰子的骰子遊戲，玩家下注並預測三個骰子的總點數是大還是小。",
    winningCondition: {
        title: "獲勝條件",
        description: {
            thePlayerCan: "玩家可以下大注或小注，但不能同時下注。",
            big: "大：三個骰子的總點數 >= 11",
            small: "小：三個骰子的總點數 <= 10",
            balanced: "平衡投注池：如果大和小的總投注金額不同，差距金額將退還給擁有最新投注單的玩家。",
        },
        example:
            "示例：玩家A在“大”上下注100，玩家B在“小”上下注40，而玩家C在“小”上下注80.為了平衡“大”和“小”的總投注金額，系統將退還20給玩家C。",
    },
    betLimit: {
        title: "投注金額",
        description: "最小賭注和最大賭注必須在{0}-{1}直接，每輪的最大賭注為{2}。",
    },
};
