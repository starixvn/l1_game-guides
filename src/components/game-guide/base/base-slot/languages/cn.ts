import { ISlotTranslationResource } from "../types";

export const cn: ISlotTranslationResource = {
    gameRule: {
        title: "游戏规则",
        description: {
            line1: "玩家在按下“旋转”之前选择支付线（线）并设置您要下注的下注级别。",
            totalBet: "总投注",
            paylinesFormular: "= 支付线 * 投注水平",
            subDescriptions: [
                "25 条支付线从 1 到 25 编号，玩家必须在开始游戏前至少选择一条支付线。",
                "每条支付线上的赢输将根据位于该支付线上的相同符号的数量计算。",
            ],
        },
    },
    payOut: {
        paytable: "赔率表",
        winningAmount: "中奖金额根据投注赔率计算。",
        note: "注意",
        initialStake: "支付包括初始投注。",
        allWinningAmount: "投注结算后，所有中奖金额都会立即添加到您的账户余额中。",
    },
    examplePayout: {
        title: "例子",
        table: {
            symbolHeader: "符号",
            descriptionHeader: "描述",
            having5Symbols: "有 5 个符号",
            samePayline: "位于同一条支付线上。",
            payoutBetLevel: "派彩 = 投注等级 *",
            having3Symbols: "有 3 个符号",
            having4Symbols: "有 4 个符号",
        },
    },
    freeSpin: {
        title: "免费旋转",
        description1: "玩家将收到与结果中包含的免费旋转符号数量相对应的免费旋转奖金。",
        description2: "免费旋转符号不必位于同一支付线上。",
        freeSpinBonus: "免费旋转奖金。",
        note: "注意",
        freeSpinReel: "“免费旋转”符号必须出现在不同的卷轴上。 例如，如果同一卷轴上有 3 个“免费旋转”符号，系统将计为一个符号。",
        thereAre4: "结果中有 4 个“免费旋转”符号，但 3 个符号位于同一个转轴上。玩家没有资格获得免费旋转奖金。",
        lastFreespin: "免费旋转的投注级别和支付线数与上一次旋转（用户获得免费旋转奖金的旋转）相同。",
        freeSpinExpired: "玩家必须在发放后 24 小时内完成免费旋转奖金。 未使用的免费旋转将丢失。",
    },
    bonus: {
        title: "奖金",
        description1: "结果中的任意位置出现 3、4 或 5 个红利符号将触发红利游戏。",
        description2: "奖金符号不必位于同一支付线上。",
        canOpen: "可在奖金游戏中打开",
        itemInBonusGame: "个宝箱。",
        note: "注意",
        bonusReel: "奖金符号必须出现在不同的卷轴中。例如，如果 2 或 3 个 奖金符号出现在同一个卷轴上，系统将计为一个符号。",
        thereAre4: "结果中有 4",
        eligible: "个“奖金”符号，但 2 个符号位于同一个卷轴上。玩家有資格获得 3 件物品。",
        bonusExpired: "玩家必须在倒计时 120 秒内完成奖金游戏。 这段时间过后，系统会随机开启宝箱并结算游戏回合。",
    },
    wild: {
        title: "狂野",
        substitute: "“狂野”符号可以替代除",
        and: "和",
        endSubstitute: "之外的所有符号",
        onlyHighest: "仅支付每条线获得的最高胜利。",
        example: "例子",
        ifwild: "如果狂野符号是",
        payoutBetLevel: "派彩 = 投注等级 ",
        highestWin: "玩家将在这条支付线上获得最高胜利",
    },
    main: {
        introduction: "简介",
        description: "游戏包括 5 个卷轴和 3 行，有 11 个不同的符号。如果您选择的同一条支付线上有相同的符号，玩家将获胜。",
    },
};
