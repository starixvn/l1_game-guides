import { ISicBoTranslationResource } from "./types";

export const tw: ISicBoTranslationResource = {
    introduction: "骰宝在亚洲是一种非常流行的骰子游戏。 该游戏使用三个 6 面骰子进行。 骰子的每一面由 1 到 6 个点组成，对应 1 到 6 个点。",
    winningCondition: {
        title: "獲勝條件",
        description: {
            number: "特定号码：如果所选的号码出现在游戏结果中，则获胜。",
            big: "大：如果三个骰子的总点数在 11 到 17 之间",
            small: "小：如果三个骰子的总点数在 4 到 10 之间，则获胜。",
            note: "<strong>注意：</strong>如果游戏结果出现三元组，则大或小都将输。",
        },
    },
    betLimit: {
        title: "投注限额",
        description: "最小赌注和最大赌注必须介于最小值 - 最大值之间，并且每轮的最大总赌注为最大值。",
    },
};
