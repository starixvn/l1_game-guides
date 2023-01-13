import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesTw } from "../../base/base-baccarat/languages/tw";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const tw: IBaseBaccaratResources = {
    ...baseBaccaratResourcesTw,
    ...{
        introduction: {
            header: "介紹",
            content:
                "VIP baccarat - 是百家樂的增強版，具有更高的下注限額。遊戲使用一副標準的 52 張牌（不包括 Joker）。 共有 7 種投注選項，投注者可以投注遊戲桌上顯示的一個或多個投注選項。",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesTw.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["閒家和莊家，每手牌以 2 張牌面朝下開始。"];

                if (environment === ENVIRONMENT.sm) {
                    details = details.concat(["The Punter predicts which one in two hands will win."]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "The third card also will be drawn after finishing dealing 2 initial face-down cards for Player and Dealer’s hands.",
                        "The cards are numbered from one to six that correspond to the sequence of dealt cards at the beginning of the game round.",
                    ]);
                }

                return details.concat([
                    "另一個投注選項是“平局”，如果投注者預測兩手牌的總數相等，或者他們也可以投注大、小、閒一對或莊一對選項。",
                    "所有投注必須在投注時間到期之前進行。 請注意，投注無法取消。",
                    `每輪最大總賭注為 ${maxBetMain}`,
                    "下注時間結束後，發牌者將牌面朝上。",
                    "根據前兩張牌的總點數，莊家將決定任一手是否獲得第三張牌。",
                    "遊戲通過比較每手牌上所有牌的總點數來確定輸贏，獲勝的手牌是最接近總共 9 點的牌。",
                    "52 張牌（不包括小丑）的標準牌組在每輪後洗牌。",
                ]);
            },
        },
    },
};
