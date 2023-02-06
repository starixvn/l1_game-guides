import { IFishPrawnCrabMiniTranslationResource } from "./types";

export const cn: IFishPrawnCrabMiniTranslationResource = {
    introduction:
        "鱼虾蟹是一款采用三个骰子的游戏。每个骰子包含六个独特的符号，有六个投注选项，玩家可以对出现的符号下注。",
    winningCondition: {
        title: "获胜条件",
        description: ["玩家可以下注一个或多个投注选项。", "骰子将被摇动并显示结果。如果您下注的符号出现，您就赢了。"],
    },
    betLimit: {
        title: "投注金额",
        description: "最小赌注和最大赌注必须在{0} - {1}直接，每轮的最大赌注为{2}。",
    },
};
