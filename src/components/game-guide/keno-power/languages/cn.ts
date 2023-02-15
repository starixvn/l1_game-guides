import { IPowerKenoTranslationResource } from "./types";

export const cn: IPowerKenoTranslationResource = {
    common: {
        bettypes: "投注类型",
        options: "选项",
        teamBlueRed: "蓝队/红队",
        sumBigSmall: "总和大/小",
        sumEvenOdd: "偶数/奇数总和",
        teamBlueBigSmall: "蓝队大/小",
        teamRedBigSmall: "红队大/小",
        teamBlue: "蓝队",
        teamRed: "红队",
        big: "大",
        small: "小",
        odd: "单",
        even: "双",
    },
    main: {
        introduction: "简介",
        description:
            "{0} 由两组号码组成，一组为“蓝队”，另一组为“红队”，每组有 80 个号码（从 01 到 80）。 系统会为每支队伍随机抽取20个号码（不重复）。 这个游戏的目的是预测抽取数字的总分。",
    },
    gameRule: {
        title: "游戏规则",
        details: [
            "确保您下注合适的金额。",
            "玩家可以在游戏桌上显示的一个或多个投注选项上下注。",
            "所有投注必须在投注时间结束前完成。 注意，下注不能取消。",
            "每轮最大总赌注为 {0}",
        ],
        bettingOptions: {
            winningConditions: "获奖条件",
            teamBlueDescription: "如果蓝队的总分>红队，则玩家获胜。<br />+ 如果两队的总分相等，所有投注将被退还。",
            teamRedDescription: "如果红队的总分>蓝队，则玩家获胜。<br />+ 如果两队的总分相等，所有投注将被退还。",
            sumBigDescription: "如果两队的总分 >= 1621，玩家获胜",
            sumSmallDescription: "如果两队的总分 < 1621，玩家获胜",
            sumEvenDescription: "如果两队的总分是偶数，则玩家获胜。",
            sumOddDescription: "如果两队的总分都是奇数，则玩家获胜。",
            teamBlueBigDescription: "如果蓝队的总分 >= 811，则玩家获胜",
            teamBlueSmallDescription: "如果蓝色队的总分 < 811，则玩家获胜",
            teamRedBigDescription: "如果红队的总分 >= 811，则玩家获胜",
            teamRedSmallDescription: "如果红队总分 < 811，玩家获胜",
        },
    },
    payOut: {
        title: "支出",
        description1: "中奖金额根据投注赔率计算。",
        description2: "支出包括初始股份。",
        description3: "投注结算后，所有获胜金额都会立即添加到您的账户余额中。",
        odds: "选项",
        betLimit: "投注限额 <br></br>（最小最大）",
    },
    md5noted: "注： <span class={0}>899</span> 和 <span class={1}>807</span>分别是蓝队和红队的成绩。",
};
