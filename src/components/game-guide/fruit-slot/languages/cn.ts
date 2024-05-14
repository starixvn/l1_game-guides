import { IFruitSlotTranslationResource } from "./types";

export const cn: IFruitSlotTranslationResource = {
    gameRule: {
        title: "游戏规则",
        description: {
            line1: "选择您要玩的筹码值。所有投注必须在投注时间结束前完成。",
            noteText: "注意，已下的赌注无法取消。",
            theMaxTotalStake: "每轮的最大总赌注为 ",
            thePlayerCanPlaceBets: "玩家可以在任何选项上下注；除了大和小，玩家只可以在这两个选项中选择一个下注。",
            onceBettingTimeExpired: "一旦投注时间届满，系统将随机产生游戏结果。",
            bigSmallResult: "大/小结果：系统随机生成一个1-14之间的数字",
            bigResult: "大：8 到 14",
            smallResult: "小：1 到 7",
            symbolResult: "符号结果：系统随机生成一个符号显示在表格中。",
        },
    },
    payOut: {
        title: "赔率",
        winningAmount: "中奖金额根据投注赔率计算。",
        noteText: "注意，支出包括初始本金。",
        allWinningAmount: "投注结算后，所有获胜金额都会立即添加到您的账户余额中。",
        bettingOddsTable: "投注赔率表。",
        locales: "cn",
    },
    lucky: {
        title: "Lucky 符号",
        line1: "当Lucky 符号出现时，系统依次随机产生<strong style='color: #ff9a00'>2</strong>个或<strong style='color: #ff9a00'>3</strong>个结果；除了Lucky 符号，额外生成的结果不重叠。",
        line2: "额外生成的结果用于计算游戏结果。",
        line3: "大/小结果不会在幸运旋转中重新生成。",
        example: "示例",
        exampleText1: "如果旋转结果是Lucky 符号",
        exampleText2: "，系统会依次生成两个附加结果。",
        firstAdditional: "第一个附加符号：",
        secondAdditional: "第二个附加符号：",
        lemonAndStar: "柠檬和星星符号将用于计算游戏结果。",
    },
    main: {
        introduction: "介绍",
        description: "水果机77是对传统的水果老虎机进行创新，旨在为玩家提供引人入胜且惊险刺激的游戏体验。",
    },
};
