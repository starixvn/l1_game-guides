import { ISicBoTranslationResource } from "./types";

export const tw: ISicBoTranslationResource = {
    introduction: "骰宝在亚洲是一种非常流行的骰子游戏。 该游戏使用三个 6 面骰子进行。 骰子的每一面由 1 到 6 个点组成，对应 1 到 6 个点。",
    winningCondition: {
        title: "獲勝條件",
        description: {
            number: "特定号码：如果所选的号码出现在游戏结果中，则获胜。",
            big: "大：如果三个骰子的总点数在 11 到 17 之间，则获胜。",
            small: "小：如果三个骰子的总点数在 4 到 10 之间，则获胜。",
            note: "<strong>注意：</strong>如果游戏结果出现三元组，则大或小都将输。",
        },
    },
    betLimit: {
        title: "投注限额",
        description: "最小賭注和最大賭注必須介於 {0} – {1} 之間，並且每輪的最大總賭注為 {1}。",
    },
};
