import { IPowerSoccerTranslationResource } from "./types";

export const tw: IPowerSoccerTranslationResource = {
    common: {
        bettypes: "投注類型",
        options: "選項",
        teamBlue: "藍隊",
        teamRed: "紅隊",
        odd: "單",
        even: "雙",
        firstHalf: "上半場",
        fullTime: "全場",
        fullTimeLive: "全場 (直播)",
        over: "大",
        under: "小",
    },
    main: {
        introduction: "簡介",
        description:
            "{0} 由兩組號碼組成，一組為“藍隊”，另一組為“紅隊”，每組有 80 個號碼（從 01 到 80）。系統將為每支球隊隨機抽取20個號碼（不重複），其中“上半場”抽取10個號碼，“全場”抽取10個號碼。這個遊戲的目的是預測每支球隊抽籤號碼的總分。",
    },
    gameRule: {
        title: "遊戲規則",
        details: [
            "確保您下注合適的金額。",
            "玩家可以在遊戲桌上顯示的一個或多個投注選項上下注。",
            "所有投注必須在投注時間結束前完成。注意，下注不能取消。",
            "每輪最大總賭注為  {0}",
        ],
        bettingOptions: {
            text: "投注選項",
            description1: "每輪有兩次抽籤，第一輪是“上半場”結果，第二輪是“全場”。",
            description2: "玩家將有兩個不同的時間間隔來下注：",
            description3:
                "在“上半場”結果開出任何號碼前下注，您可以對“上半場”和“全場”進行下注，適用於所有投注類型。支付比率是固定的，並且在所有遊戲回合中保持不變。",
            description4:
                "<strong>現場投注</strong>: 在兩隊上半場的結果公佈後立即進行投注。注意，只能在“全場”下注。支付比率將根據“上半場”的結果而變化。",
            winningConditions: "獲獎條件",

            firstHalfTeamBlueDescription:
                "如果藍色隊>紅色隊的10個隨機抽取數字的總分，則玩家獲勝。 <br />+ 如果兩隊的總分相等，所有投注將被退還。",
            fullTimeTeamBlueDescription: "如果藍隊的總分（上半場+全場）> 紅隊，玩家獲勝。 <br />+ 如果兩隊的總分相等，所有投注將被退還。",

            firstHalfTeamRedDescription: "如果紅隊 > 藍隊，隨機抽取的 10 個數字的總分獲勝。 <br />+ 如果兩隊的總分相等，所有投注將被退還。",
            fullTimeTeamRedDescription: "如果紅隊的總分（上半場+全場）> 藍隊，玩家獲勝。 <br />+ 如果兩隊的總分相等，所有投注將被退還。",

            firstHalfOverDescription: "如果兩隊的總分（上半場）>= 811，則玩家獲勝",
            fullTimeOverDescription: "如果兩隊的總分（上半場 + 全場）>= 1621，則玩家獲勝",

            firstHalfUnderDescription: "如果兩隊的總分（上半場）< 811，則玩家獲勝",
            fullTimeUnderDescription: "如果兩隊的總分（上半場+全場）< 1621，玩家獲勝",

            firstHalfEvenDescription: "如果兩隊的總分（上半場）為偶數，則玩家獲勝。",
            fullTimeEvenDescription: "如果兩隊的總分（上半場+全場）為偶數，則玩家獲勝。",

            firstHalfOddnDescription: "如果兩隊的總分（上半場）為奇數，則玩家獲勝。",
            fullTimeOddDescription: "如果兩隊的總分（上半場+全場）為奇數，則玩家獲勝。",
        },
    },
    payOut: {
        title: "支出",
        description1: "中獎金額根據投注賠率計算。",
        description2: "支出包括初始股份。",
        description3: "投注結算後，所有獲勝金額都會立即添加到您的賬戶餘額中。",
        odds: "賠率",
        betLimit: "投注限額<br></br>（最小-最大)",
        firstHalfPayout: "a) 在“上半場”結果開出任何數字之前下注",
        liveBettingPayout: {
            text: "b) 現場投注",
            mainDescription: "投注選項藍隊/紅隊 - 全場（直播）和大小盤 - 全場（直播）",
            description1: "支付比率將根據兩隊的“上半場”結果而有所不同",
            description2: "最大投注限額將根據支付比率而變化。",
            highLightDescription1:
                "<strong>T藍隊/紅隊 - 全職（直播）</strong>: 只有在“上半場”中藍隊和紅隊的總分差在 -150 和 150 之間時才可以支付",
            highLightDescription2: "<strong>大/小 - 全場（直播）</strong>: 只有在“上半場”兩隊的總得分在 661 和 980 之間時才可以支付",
            min: "最小",
            max: "最大",
            betLimit: "投注限額",
            maximumBetLimit: "最大投注限額將根據支付比率而變化。",
        },
    },
    md5noted: "注: <span class={0}>363</span> 和 <span class={1}>467</span> 分別是藍隊和紅隊的上半場成績",
};
