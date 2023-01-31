import { baseTermAndConditionTw } from "../../base/terms-and-conditions/languages/tw";
import { IHiLoTranslationResource } from "./types";
export const tw: IHiLoTranslationResource = {
    introduction: {
        title: "介紹",
        description:
            "Hi-Lo 是一款流行的紙牌遊戲，規則非常簡單。遊戲使用標準的 52 張牌（不包括小丑）的進行。遊戲的目的是猜測下一張要發的牌是高於還是低於當前的牌。",
    },
    gameRules: {
        title: "遊戲規則",
        description: {
            line1: "選擇最適合您的投注金額。單擊或點擊“玩”按鈕開始遊戲。",
            line2: "系統會隨機抽取第一張牌（基本牌），由玩家選擇下一張牌（結果牌）是高（Hi）還是低（Lo）。",
            line3: "每輪結束後，如果結果為贏，則玩家可以決定是停止還是繼續玩下一輪。",
            subLines: [
                "單擊或點擊“收集”按鈕以停止遊戲並獲得獎金。",
                "下一回合繼續玩，該回合的結果牌將成為下一回合的基本牌，該回合的獎金即為下一回合的投注金額。",
            ],
        },
        example: {
            title: "例子",
            description: {
                introduction: "系統隨機抽取第一張牌（基本牌）={0}。玩家在“低”選項上下注 100。",
                result: {
                    detail: "結果卡：{0} => 玩家獲勝和賠付 = 163。有 2 個選項：",
                    option1: "單擊或點擊“收集”按鈕停止遊戲 => 玩家將 163 存入餘額帳戶。",
                    option2: "下一回合繼續玩，然後玩家猜測下一張牌是高於還是低於當前牌（{0}），下注金額= 163",
                },
                note: {
                    completeTurn: "玩家將有 2 分鐘時間完成一個回合（決定選擇高 Hi 或低 Lo）。",
                    autoSettle: {
                        detail: "如果玩家無法在 2 分鐘內完成一個回合：",
                        subLines: ["系統將在用戶單擊或點擊“玩”按鈕的第一個回合隨機選擇高 Hi 或低 Lo。", "其他回合將被視為“收集”。"],
                    },
                    shuffleCard: "每個回合束後將洗牌。",
                },
            },
        },
    },
    cardValues: {
        title: "牌面值",
        line1: "牌面值從小到大依次為：2、3、4、5、6、7、8、9、10、傑克（J）、皇后（Q）、國王（K）、和 王牌 (A)",
        line2: "所有花色 - 紅心 ({0})、黑桃 ({1})、方塊 ({2}) 和梅花 ({3}) 具有相同的價值。",
        note: {
            title: "筆記",
            descriptions: [
                "如果基本牌和結果卡的排名相同，則結果為平局。玩家繼續玩下一回合。",
                "如果基本牌是 2 或 A。玩家將只有一個選項可供選擇，高牌為 2，低牌為 A，結果為平局。",
            ],
        },
    },
    payout: {
        title: "賠付",
        descriptions: ["賠付包括初始投注。", "正確猜測下一張牌是更高還是更低的賠付可能每輪都不同。"],
    },
    termsAndConditions: baseTermAndConditionTw,
};
