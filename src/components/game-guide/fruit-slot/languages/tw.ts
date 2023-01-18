import { IFruitSlotTranslationResource } from "./types";

export const tw: IFruitSlotTranslationResource = {
    gameRule: {
        title: "遊戲規則",
        description: {
            line1: "選擇您要玩的籌碼值。所有投注必須在投注時間結束前完成。",
            noteText: "請注意，已下的賭注無法取消。",
            theMaxTotalStake: "每輪的最大總賭注為 ",
            thePlayerCanPlaceBets: "玩家可以在任何選項上下注；除了大和小，玩家只可以在這兩個選項中選擇一個下注。",
            onceBettingTimeExpired: "一旦投注時間屆滿，系統將隨機產生遊戲結果。",
            bigSmallResult: "大/小結果：系統隨機生成一個1-14之間的數字",
            bigResult: "大：8 到 14",
            smallResult: "小：1 到 7",
            symbolResult: "符號結果：系統隨機生成一個符號顯示在表格中。",
        },
    },
    payOut: {
        title: "賠率",
        winningAmount: "中獎金額根據投注賠率計算。",
        noteText: "請注意，支出包括初始本金。",
        allWinningAmount: "投注結算後，所有獲勝金額都會立即添加到您的賬戶餘額中。",
        bettingOddsTable: "投注賠率表。",
        locales: "tw",
    },
    lucky: {
        title: "幸運符號",
        line1: "當幸運符號出現時，系統依次隨機產生<strong style='color: #ff9a00'>2</strong>個或<strong style='color: #ff9a00'>3</strong>個結果；除了幸運符號，額外生成的結果不重疊。",
        line2: "額外生成的結果用於計算遊戲結果。",
        line3: "大/小結果不會在幸運旋轉中重新生成。",
        example: "示例",
        exampleText1: "如果旋轉結果是幸運符號",
        exampleText2: "，系統會依次生成兩個附加結果。",
        firstAdditional: "第一個附加符號：",
        secondAdditional: "第二個附加符號：",
        lemonAndStar: "檸檬和星星符號將用於計算遊戲結果。",
    },
    main: {
        introduction: "介紹",
        description: "水果機是對傳統的水果老虎機進行創新，旨在為玩家提供引人入勝且驚險刺激的遊戲體驗。",
    },
};
