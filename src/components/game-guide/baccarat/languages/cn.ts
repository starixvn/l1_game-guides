import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesCn } from "../../base/base-baccarat/languages/cn";
import { md5ResourcesCn } from "../../base/md5/languages/cn";
import { IMd5Resources } from "../../base/md5/languages/types";
import { IMd5BaccaratResources } from "./types";

export const md5BaccaratResourcesCn: IMd5Resources = {
    ...md5ResourcesCn,
    example: {
        header: "<strong>示例:</strong> 检查比赛结果的真实性和透明度。",
        details: {
            step1: {
                text: "<strong>第一步:</strong> 在公布结果前复制MD5密钥。",
                imageUrl: "/static/images/baccarat/md5_step1_en.png?v=1",
            },
            step2: {
                text: "<strong>第二步:</strong> 发布后复制结果。",
                imageUrl: "/static/images/baccarat/md5_step2_en.png?v=1",
                noted1: "注：从左到右，",
                noted2: "对应游戏回合开始时的发牌顺序。",
            },
            step3: {
                text: "<strong>第三步:</strong> 转到 {0} 并将结果粘贴到 MD5 框中。",
                imageUrl: "/static/images/baccarat/md5_step3_en.png?v=1",
            },
            step4: {
                text: "<strong>第四步:</strong> 按“hash darling，hash！” 按钮，并将新生成的 MD5 checksum 字符串与步骤 1 中的 MD5 密钥进行比较。",
                imageUrl: "/static/images/baccarat/md5_step4_en.png?v=1",
            },
        },
    },
};

export const baccaratResourcesCn: IMd5BaccaratResources = {
    ...baseBaccaratResourcesCn,
    ...{
        introduction: {
            header: "介紹",
            content:
                "百家乐 - 是百家乐的增强版，具有更高的下注限额。游戏使用一副标准的 52 张牌（不包括 Joker）。 共有 7 种投注选项，投注者可以投注游戏桌上显示的一个或多个投注选项。",
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
    md5: md5BaccaratResourcesCn,
};
