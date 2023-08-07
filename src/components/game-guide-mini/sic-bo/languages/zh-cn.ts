import { ISicBoTranslationResource } from "./types";

export const cn: ISicBoTranslationResource = {
    introduction: "骰寶在亞洲是一種非常流行的骰子遊戲。該遊戲使用三個 6 面骰子進行。骰子的每一面由 1 到 6 個點組成，對應 1 到 6 個點。 ",
    winningCondition: {
        title: "获胜条件",
        description: {
            number: "特定號碼：如果所選的號碼出現在遊戲結果中，則獲勝。",
            big: "大：如果三個骰子的總點數在 11 到 17 之間，則獲勝。",
            small: "小：如果三個骰子的總點數在 4 到 10 之間，則獲勝。",
            note: "<strong>注意：</strong>如果遊戲結果出現三元組，則大或小都將輸。",
        },
    },
    betLimit: {
        title: "投注限額",
        description: "每轮的最大总赌注为 {0}",
        table: {
            header: {
                options: "投注选项",
                betLimit: "投注限额（最小-最大）",
            },
            rows: {
                big: "大",
                small: "小",
                specificNumber: "特定號碼",
            },
        },
    },
};
