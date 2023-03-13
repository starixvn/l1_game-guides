import { IPowerKenoTranslationResource } from "./types";

export const tw: IPowerKenoTranslationResource = {
    common: {
        bettypes: "投注類型",
        options: "選項",
        teamBlueRed: "藍隊/紅隊",
        sumBigSmall: "總和大/小",
        sumEvenOdd: "偶數/奇數總和",
        teamBlueBigSmall: "藍隊大/小",
        teamRedBigSmall: "紅隊大/小",
        teamBlue: "藍隊",
        teamRed: "紅隊",
        big: "大",
        small: "小",
        odd: "單",
        even: "雙",
    },
    main: {
        introduction: "簡介",
        description:
            "{0} 由兩組號碼組成，一組為“藍隊”，另一組為“紅隊”，每組有 80 個號碼（從 01 到 80）。系統會為每支隊伍隨機抽取20個號碼（不重複）。這個遊戲的目的是預測抽取數字的總分。",
    },
    gameRule: {
        title: "遊戲規則",
        details: [
            "確保您下注合適的金額。",
            "玩家可以在遊戲桌上顯示的一個或多個投注選項上下注。",
            "所有投注必须在投注时间结束前完成。 请注意，下注不能取消。",
            "每輪最大總賭注為 {0}",
        ],
        bettingOptions: {
            winningConditions: "獲獎條件",
            teamBlueDescription: "如果藍隊的總分>紅隊，則玩家獲勝。<br />+ 如果兩隊的總分相等，所有投注將被退還。",
            teamRedDescription: "如果紅隊的總分>藍隊，則玩家獲勝。<br />+ 如果兩隊的總分相等，所有投注將被退還。",
            sumBigDescription: "如果兩隊的總分 >= 1621，玩家獲勝",
            sumSmallDescription: "如果兩隊的總分 < 1621，玩家獲勝",
            sumEvenDescription: "如果兩隊的總分是偶數，則玩家獲勝。",
            sumOddDescription: "如果兩隊的總分都是奇數，則玩家獲勝",
            teamBlueBigDescription: "如果藍隊的總分 >= 811，則玩家獲勝",
            teamBlueSmallDescription: "如果藍色隊的總分 < 811，則玩家獲勝",
            teamRedBigDescription: "如果紅隊的總分 >= 811，則玩家獲勝",
            teamRedSmallDescription: "如果紅隊總分 < 811，玩家獲勝",
        },
    },
    payOut: {
        title: "支出",
        description1: "中獎金額根據投注賠率計算。",
        description2: "支出包括初始股份。",
        description3: "投注結算後，所有獲勝金額都會立即添加到您的賬戶餘額中。",
        odds: "賠率",
        betLimit: "投注限額 <br></br>（最小最大）",
    },
    md5noted: "注： <span class={0}>899</span> 和 <span class={1}>807</span> 分別是藍隊和紅隊的成績。",
};
