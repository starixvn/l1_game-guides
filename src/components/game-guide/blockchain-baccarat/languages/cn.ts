import { baseBaccaratResourcesCn } from "../../base/base-baccarat/languages/cn";
import { IBlockchainBaccaratResources } from "./types";

export const cn: IBlockchainBaccaratResources = {
    ...baseBaccaratResourcesCn,
    ...{
        introduction: {
            header: "介紹",
            content:
                "区块链百家乐 - 一款保证公平的纸牌游戏，区块链技术的新突破。游戏使用8副牌（416张牌，不包括王牌）。有7个投注选项，投注者可以在游戏桌上投注一个或多个投注选项。",
        },
        extendGameRules: {
            cutCard: {
                header: "切牌",
                description:
                    "切牌：一张特殊的牌，用于指示发牌箱将在何处结束，剩余的将重新洗牌。在一个新的发牌箱开始前，切牌将插入416张牌中间。",
            },
            burnCard: {
                header: "烧牌",
                description:
                    "切牌后，会有一个烧牌的过程。将被烧牌的卡片数量（舍弃并不参与到牌局中）取决于新发牌箱中取出的第一张牌的牌面值。",
                noted: "<strong>注意</strong> 第一张牌也将会被舍弃。",
                firstCard: "第一张牌",
                example: {
                    header: "例子：",
                    descriptions: [
                        "如果第一张牌是5 => 6张牌将会将会被舍弃 （5张烧牌+第一张牌）",
                        "如果第一张牌是K => 11张牌将会将会被舍弃 （10张烧牌+K牌）",
                    ],
                },
            },
        },
    },
};
