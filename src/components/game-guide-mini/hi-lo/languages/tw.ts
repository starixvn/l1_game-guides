import { IHiLoMiniTranslationResource } from "./types";
export const tw: IHiLoMiniTranslationResource = {
    introduction: "這是一款採用52張撲克牌（不包含王牌）的遊戲。遊戲的目的是猜測下一張要發的牌是高於或低於當前牌。",
    winningCondition: {
        title: "獲勝條件",
        description: {
            thePlayerCan: "每輪結束後，如果結果為“贏”，玩家可以決定是停止或繼續玩下一輪。",
            collect: "點擊“收集”按鈕來停止遊戲並獲得獎金。",
            playContinue: "繼續下一回合，該回合的結果牌將成為下一回合的底牌，該回合的派彩即為下一回合的投注金額。",
            unfinishedGame: "玩家將有2分鐘的時間完成一個回合（決定選擇“高”或“低”）。如果玩家不能再2分鐘內完成一個回合：",
            firstTurn: "系統將在玩家單擊或點擊“Play”的時候隨機選擇“高”或“低”。",
            otherTurns: "其它回合將被視為“Collect”",
            arrangeCards: "牌面值從小到大依次為：2,3,4,5,6,7,8,9,10,J,Q,K和A.",
            allTheSuits: "所以花色-",
            heart: " 紅心 (",
            spade: ")、黑桃 (",
            diamond: ")、方塊 (",
            andClub: ") 和梅花 (",
            equalValue: ") 具有相同價值。",
        },
    },
    payout: {
        title: "賠率",
        description: "每一輪預測結果的賠率有可能會不一樣。",
    },
};
