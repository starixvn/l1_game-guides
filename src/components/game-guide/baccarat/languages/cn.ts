import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesCn } from "../../base/base-baccarat/languages/cn";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const baccaratResourcesCn: IBaseBaccaratResources = {
    ...baseBaccaratResourcesCn,
    ...{
        introduction: {
            header: "简介",
            content:
                "百家乐是赌场中最常玩的纸牌游戏之一。游戏使用一副标准的 52 张牌（不包括 Joker）。 共有 7 种投注选项，投注者可以投注游戏桌上显示的一个或多个投注选项。",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesCn.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["闲家和庄家，每手牌以 2 张牌面朝下开始。"];

                if (environment === ENVIRONMENT.sc || environment === ENVIRONMENT.sm) {
                    details = details.concat(["下注者预测两手牌中哪一方会获胜。"]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "第三张牌也将在为玩家和庄家手牌发完 2 张面朝下的初始牌后抽取。",
                        "这些牌从 1 到 6 编号，对应于游戏回合开始时发牌的顺序。",
                    ]);
                }

                return details.concat([
                    "另一个投注选项是“平局”，如果投注者预测两手牌的总数相等，或者他们也可以投注大、小、闲一对或庄一对选项。",
                    "所有投注必须在投注时间到期之前进行。 注意，投注无法取消。",
                    `每轮最大总赌注为 ${maxBetMain}`,
                    "下注时间结束后，发牌者将牌面朝上。",
                    "根据前两张牌的总点数，庄家将决定任一手是否获得第三张牌。",
                    "游戏通过比较每手牌上所有牌的总点数来确定输赢，获胜的手牌是最接近总共 9 点的牌。",
                    "52 张牌（不包括小丑）的标准牌组在每轮后洗牌。",
                ]);
            },
        },
    },
    md5: {
        step1ImageUrl: "/static/images/baccarat/md5_step1_cn.png?v=1",
        step2ImageUrl: "/static/images/baccarat/md5_step2_cn.png?v=1",
        step3ImageUrl: "/static/images/baccarat/md5_step3.png?v=1",
        step4ImageUrl: "/static/images/baccarat/md5_step4.png?v=1",
        step2Noted1Text: "注：从左到右，",
        step2Noted2Text: "对应游戏回合开始时的发牌顺序。",
    },
};
