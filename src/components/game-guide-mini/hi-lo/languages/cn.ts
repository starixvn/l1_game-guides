import { IHiLoMiniTranslationResource } from "./types";
export const cn: IHiLoMiniTranslationResource = {
    introduction: "游戏使用标准的 52 张牌（不包括小丑）的进行。游戏的目的是猜测下一张要发的牌是高于还是低于当前的牌。",
    winningCondition: {
        title: "获胜条件",
        description: {
            thePlayerCan: "每轮结束后，如果结果为赢，则玩家可以决定是停止还是继续玩下一轮。",
            collect: "单击或点击“收集”按钮以停止游戏并获得奖金。",
            playContinue: "下一回合继续玩，该回合的结果牌将成为下一回合的基本牌，该回合的奖金即为下一回合的投注金额。",
            unfinishedGame: "玩家将有 2 分钟时间完成一个回合（决定选择高 Hi 或低 Lo）。如果玩家无法在 2 分钟内完成一个回合：",
            firstTurn: "系统将在用户单击或点击“玩”按钮的第一个回合随机选择高 Hi 或低 Lo。",
            otherTurns: "其他回合将被视为“收集”。",
            arrangeCards: "牌面值从小到大依次为：2、3、4、5、6、7、8、9、10、杰克（J）、皇后（Q）、国王（K）、和 王牌 (A)",
            allTheSuits: "所有花色 -",
            heart: "  红心 (",
            spade: ")、黑桃 (",
            diamond: ")、方块 (",
            andClub: ") 和梅花 (",
            equalValue: ") 具有相同的价值。",
        },
    },
    payout: {
        title: "赔付",
        description: "正确猜测下一张牌是更高还是更低的赔付可能每轮都不同。",
    },
};
