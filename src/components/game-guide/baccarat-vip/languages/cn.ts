import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesCn } from "../../base/base-baccarat/languages/cn";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const cn: IBaseBaccaratResources = {
    ...baseBaccaratResourcesCn,
    ...{
        introduction: {
            header: "介紹",
            content:
                "VIP Baccarat - 是百家乐的增强版，具有更高的下注限额。游戏使用一副标准的 52 张牌（不包括 Joker）。 共有 7 种投注选项，投注者可以投注游戏桌上显示的一个或多个投注选项。",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesCn.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["闲家和庄家，每手牌以 2 张牌面朝下开始。"];

                if (environment === ENVIRONMENT.sc || environment === ENVIRONMENT.sm) {
                    details = details.concat(["The Punter predicts which one in two hands will win."]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "The third card also will be drawn after finishing dealing 2 initial face-down cards for Player and Dealer’s hands.",
                        "The cards are numbered from one to six that correspond to the sequence of dealt cards at the beginning of the game round.",
                    ]);
                }

                return details.concat([
                    "另一个投注选项是“平局”，如果投注者预测两手牌的总数相等，或者他们也可以投注大、小、闲一对或庄一对选项。",
                    "所有投注必须在投注时间到期之前进行。 请注意，投注无法取消。",
                    `每轮最大总赌注为 ${maxBetMain}`,
                    "下注时间结束后，发牌者将牌面朝上。",
                    "根据前两张牌的总点数，庄家将决定任一手是否获得第三张牌。",
                    "游戏通过比较每手牌上所有牌的总点数来确定输赢，获胜的手牌是最接近总共 9 点的牌。",
                    "52 张牌（不包括小丑）的标准牌组在每轮后洗牌。",
                ]);
            },
        },
    },
};
