import { baccaratResourcesCn } from "../../baccarat/languages/cn";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const vipBaccaratResourcesCn: IBaseBaccaratResources = {
    ...baccaratResourcesCn,
    ...{
        introduction: {
            header: "介紹",
            content:
                "VIP 百家乐 是百家乐的增强版，具有更高的下注限额。游戏使用一副标准的 52 张牌（不包括 Joker）。 共有 7 种投注选项，投注者可以投注游戏桌上显示的一个或多个投注选项。",
        },
    },
};
