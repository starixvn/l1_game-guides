import { IHiLoMiniTranslationResource } from "./types";
export const tw: IHiLoMiniTranslationResource = {
    introduction: "遊戲使用標準的 52 張牌（不包括小丑）的進行。遊戲的目的是猜測下一張要發的牌是高於還是低於當前的牌。",
    winningCondition: {
        title: "獲勝條件",
        description: {
            thePlayerCan: "每輪結束後，如果結果為贏，則玩家可以決定是停止還是繼續玩下一輪。",
            collect: "單擊或點擊“收集”按鈕以停止遊戲並獲得獎金。",
            playContinue: "下一回合繼續玩，該回合的結果牌將成為下一回合的基本牌，該回合的獎金即為下一回合的投注金額。",
            unfinishedGame: "玩家將有 2 分鐘時間完成一個回合（決定選擇高 Hi 或低 Lo）。如果玩家無法在 2 分鐘內完成一個回合：",
            firstTurn: "系統將在用戶單擊或點擊“玩”按鈕的第一個回合隨機選擇高 Hi 或低 Lo。",
            otherTurns: "其他回合將被視為“收集”。",
            arrangeCards: "牌面值從小到大依次為：2、3、4、5、6、7、8、9、10、傑克（J）、皇后（Q）、國王（K）、和 王牌 (A)",
            allTheSuits: "所有花色 -",
            heart: " 紅心 (",
            spade: ")、黑桃 (",
            diamond: ")、方塊 (",
            andClub: ") 和梅花 (",
            equalValue: ") 具有相同的價值。",
        },
    },
    payout: {
        title: "賠付",
        description: "正確猜測下一張牌是更高還是更低的賠付可能每輪都不同。",
    },
};
