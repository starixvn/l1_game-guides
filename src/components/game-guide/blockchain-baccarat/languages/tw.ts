import { baseBaccaratResourcesTw } from "../../base/base-baccarat/languages/tw";
import { IBlockchainBaccaratResources } from "./types";

export const tw: IBlockchainBaccaratResources = {
    ...baseBaccaratResourcesTw,
    ...{
        introduction: {
            header: "介紹",
            content:
                "區塊鏈百家樂 - 一款保證公平的紙牌遊戲，區塊鏈技術的新突破。遊戲使用8副牌（416張牌，不包括王牌）。有7個投注選項，投注者可以在遊戲桌上投註一個或多個投注選項。",
        },
        extendGameRules: {
            cutCard: {
                header: "切牌",
                description:
                    "切牌：一張特殊的牌，用於指示發牌箱將在何處結束，剩餘的將重新洗牌。在一個新的發牌箱開始前，切牌將插入416張牌中間。",
            },
            burnCard: {
                header: "燒牌",
                description:
                    "切牌後，會有一個燒牌的過程。將被燒牌的卡片數量（捨棄並不參與到牌局中）取決於新發牌箱中取出的第一張牌的牌面值。",
                noted: " <strong>注意</strong>： 第一張牌也將會被捨棄。",
                firstCard: "第一張牌",
                example: {
                    header: "例子：",
                    descriptions: [
                        "如果第一張牌是5 => 6張牌將會將會被捨棄 （5張燒牌+第一張牌）",
                        "如果第一張牌是K => 11張牌將會將會被捨棄 （10張燒牌+K牌）",
                    ],
                },
            },
        },
    },
};
