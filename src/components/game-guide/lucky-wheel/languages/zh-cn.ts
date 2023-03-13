import { ILuckyWheelTranslationResource } from "./types";

export const cn: ILuckyWheelTranslationResource = {
    introduction: "",
    promotionProgram: {
        title: "推广方案",
        scoin: "拥有免费旋转的玩家可以玩幸运轮并获得 Scoin",
        description: ["从幸运轮获得的 Scoin 将自动添加到您的 Scoin 钱包中。", "每天可以玩的免费旋转次数没有限制。"],
    },
    gameRules: {
        title: "如何使用 Scoin 下注",
        description: [
            "Scoin只能用于在Vgaming中玩色碟游戏。",
            "自玩家收到通知之日起，免费旋转的有效期为一周。 在此期间之后，任何未使用的免费旋转都将丢失。",
            "使用 Scoin 的色碟游戏的获胜金额将记入您的账户余额。",
        ],
        note: {
            content: "笔记：",
            description: ["Scoin 不能兑换现金。", "Scoin 仅适用于色碟，对于其他游戏，本金将直接从您的账户余额中扣除。"],
        },
    },
    termsAndConditions: {
        title: "条款和条件",
        line1: "参与此促销活动即表示您同意受这些条款和条件的约束。",
        description: [
            "本公司保留因不可抗力事件（包括但不限于任何技术错误、网络服务故障、电源故障）而取消任何幸运轮盘结果的权利。",
            "如果出现任何可疑或欺诈的游戏/行为，公司保留取消幸运轮盘结果或将玩家排除在本次促销活动之外的权利。",
            "公司保留随时更改适用于此促销活动的任何参赛条款或修改、终止、暂停或重新安排此促销活动的权利。",
            "因本推广活动引起或与之相关的任何争议均由本公司决定。",
        ],
    },
};
