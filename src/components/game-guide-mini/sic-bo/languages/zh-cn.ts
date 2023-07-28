import { ISeDieMiniTranslationResource } from "./types";

export const cn: ISeDieMiniTranslationResource = {
    introduction: "迷你色碟有四颗双色按钮，一面红色，一面白色。这个游戏的目标是预测4个按钮的结果。",
    winningCondition: {
        title: "获胜条件",
        description: {
            odd: "单：白面朝上或红面朝上的纽扣总数为单数。",
            even: "双：白面朝上或红面朝上的纽扣总数为双数。",
            otherBet: "其它投注选项",
            ifThe: "如果结果与玩家的赌注相符，则玩家获胜。",
        },
    },
    betLimit: {
        title: "投注限额",
        description: "每轮的最大总赌注为{0}",
        table: {
            header: {
                options: "选项",
                betLimit: "投注限额",
            },
            rows: {
                oddEven: "单/双",
                or: "或",
            },
        },
    },
};
