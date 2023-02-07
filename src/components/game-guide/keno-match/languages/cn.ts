import { IPowerSoccerTranslationResource } from "./types";

export const cn: IPowerSoccerTranslationResource = {
    common: {
        bettypes: "投注类型",
        options: "选项",
        teamBlue: "蓝队",
        teamRed: "红队",
        odd: "单",
        even: "双",
        firstHalf: "上半场",
        fullTime: "全场",
        fullTimeLive: "全场 (直播)",
        over: "大",
        under: "小",
    },
    main: {
        introduction: "简介",
        description:
            "{0} 由两组号码组成，一组为“蓝队”，另一组为“红队”，每组有 80 个号码（从 01 到 80）。 系统将为每支球队随机抽取20个号码（不重复），其中“上半场”抽取10个号码，“全场”抽取10个号码。 这个游戏的目的是预测每支球队抽签号码的总分。",
    },
    gameRule: {
        title: "游戏规则",
        details: [
            "确保您下注合适的金额。",
            "玩家可以在游戏桌上显示的一个或多个投注选项上下注。",
            "所有投注必须在投注时间结束前完成。 请注意，下注不能取消。",
            "每轮最大总赌注为 {0}",
        ],
        bettingOptions: {
            text: "投注选项",
            description1: "每轮有两次抽签，第一轮是“上半场”结果，第二轮是“全场”。",
            description2: "玩家将有两个不同的时间间隔来下注：",
            description3:
                "在“上半场”结果开出任何号码前下注，您可以对“上半场”和“全场”进行下注，适用于所有投注类型。 支付比率是固定的，并且在所有游戏回合中保持不变。",
            description4:
                " <strong>现场投注</strong>: 在两队上半场的结果公布后立即进行投注。 请注意，只能在“全场”下注。 支付比率将根据“上半场”的结果而变化。",
            winningConditions: "获奖条件",

            firstHalfTeamBlueDescription:
                "如果蓝色队>红色队的10个随机抽取数字的总分，则玩家获胜。 <br />+ 如果两队的总分相等，所有投注将被退还。",
            fullTimeTeamBlueDescription: "如果蓝队的总分（上半场+全场）> 红队，玩家获胜。 <br />+ 如果两队的总分相等，所有投注将被退还。",

            firstHalfTeamRedDescription: "如果红队 > 蓝队，随机抽取的 10 个数字的总分获胜。<br />+ 如果两队的总分相等，所有投注将被退还。",
            fullTimeTeamRedDescription: "如果红队的总分（上半场+全场）> 蓝队，玩家获胜。 <br />+ 如果两队的总分相等，所有投注将被退还。",

            firstHalfOverDescription: "如果两队的总分（上半场）>= 811，则玩家获胜",
            fullTimeOverDescription: "如果两队的总分（上半场 + 全场）>= 1621，则玩家获胜",

            firstHalfUnderDescription: "如果两队的总分（上半场）< 811，则玩家获胜",
            fullTimeUnderDescription: "如果两队的总分（上半场+全场）< 1621，玩家获胜",

            firstHalfEvenDescription: "如果两队的总分（上半场）为偶数，则玩家获胜。",
            fullTimeEvenDescription: "如果两队的总分（上半场+全场）为偶数，则玩家获胜。",

            firstHalfOddnDescription: "如果两队的总分（上半场）为奇数，则玩家获胜。",
            fullTimeOddDescription: "如果两队的总分（上半场+全场）为奇数，则玩家获胜。",
        },
    },
    payOut: {
        title: "支出",
        description1: "中奖金额根据投注赔率计算。",
        description2: "支出包括初始股份。",
        description3: "投注结算后，所有获胜金额都会立即添加到您的账户余额中。",
        odds: "赔率",
        betLimit: "投注限额<br></br>（最小-最大)",
        firstHalfPayout: "a) 在“上半场”结果开出任何数字之前下注",
        liveBettingPayout: {
            text: "b) 现场投注",
            mainDescription: "投注选项蓝队/红队 - 全场（直播）和大小盘 - 全场（直播）",
            description1: "支付比率将根据两队的“上半场”结果而有所不同",
            description2: "最大投注限额将根据支付比率而变化。",
            highLightDescription1:
                "<strong>蓝队/红队 - 全职（直播）</strong>: 只有在“上半场”中蓝队和红队的总分差在 -150 和 150 之间时才可以支付",
            highLightDescription2: "<strong>大/小 - 全场（直播）</strong>: 只有在“上半场”两队的总得分在 661 和 980 之间时才可以支付",
            min: "最小",
            max: "最大",
            betLimit: "投注限额",
            maximumBetLimit: "最大投注限额将根据支付比率而变化。",
        },
    },
    md5noted: "注: <span class={0}>363</span> 和 <span class={1}>467</span> 分别是蓝队和红队的上半场成绩",
};
