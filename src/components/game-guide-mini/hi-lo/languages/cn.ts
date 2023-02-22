import { IHiLoMiniTranslationResource } from "./types";
export const cn: IHiLoMiniTranslationResource = {
    introduction: "这是一款采用52张扑克牌（不包含王牌）的游戏。游戏的目的是猜测下一张要发的牌是高于或低于当前牌。",
    winningCondition: {
        title: "获胜条件",
        description: {
            thePlayerCan: "每轮结束后，如果结果为“赢”，玩家可以决定是停止或继续玩下一轮。",
            collect: "点击“收集”按钮来停止游戏并获得奖金。",
            playContinue: "继续下一回合，该回合的结果牌将成为下一回合的底牌，该回合的派彩即为下一回合的投注金额。",
            unfinishedGame: "玩家将有2分钟的时间完成一个回合（决定选择“高”或“低”）。如果玩家不能再2分钟内完成一个回合：",
            firstTurn: "系统将在玩家单击或点击“玩”的时候随机选择“高”或“低”。",
            otherTurns: "其它回合将被视为“收集”",
            arrangeCards: "牌面值从小到大依次为：2,3,4,5,6,7,8,9,10,J,Q,K和A.",
            allTheSuits: "所以花色 -",
            heart: "  红心 (",
            spade: ")、黑桃 (",
            diamond: ")、方块 (",
            andClub: ") 和梅花 (",
            equalValue: ") 具有相同价值。",
        },
    },
    payout: {
        title: "赔率",
        description: "每一轮预测结果的赔率有可能会不一样。",
    },
};
