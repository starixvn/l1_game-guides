import { baccaratResourcesTw } from "../../baccarat/languages/tw";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const vipBaccaratResourcesTw: IBaseBaccaratResources = {
    ...baccaratResourcesTw,
    ...{
        introduction: {
            header: "介紹",
            content:
                "VIP 百家樂 是百家樂的增強版，具有更高的下注限額。遊戲使用一副標準的 52 張牌（不包括 Joker）。 共有 7 種投注選項，投注者可以投注遊戲桌上顯示的一個或多個投注選項。",
        },
    },
};
