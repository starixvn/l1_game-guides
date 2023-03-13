import { ISeDieMiniTranslationResource } from "./types";

export const tw: ISeDieMiniTranslationResource = {
    introduction: "迷你色碟有四顆雙色按鈕，一面紅色，一面白色。這個遊戲的目標是預測4個按鈕的結果。",
    winningCondition: {
        title: "獲勝條件",
        description: {
            odd: "單：白面朝上或紅面朝上的鈕扣總數為單數。 ",
            even: "雙：白面朝上或紅面朝上的鈕扣總數為雙數。 ",
            otherBet: "其它投注選項",
            ifThe: "如果結果與玩家的賭注相符，則玩家獲勝。",
        },
    },
    betLimit: {
        title: "投注限額",
        description: "每輪的最大總賭注為{0}",
        table: {
            header: {
                options: "選項",
                betLimit: "投注限額",
            },
            rows: {
                oddEven: "單/雙",
                or: "或",
            },
        },
    },
};
