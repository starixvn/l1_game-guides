import { IFishPrawnCrabMiniTranslationResource } from "./types";

export const tw: IFishPrawnCrabMiniTranslationResource = {
    introduction: "魚蝦蟹是一款採用三個骰子的遊戲。每個骰子包含六個獨特的符號，有六個投注選項，玩家可以對出現的符號下注。",
    winningCondition: {
        title: "獲勝條件",
        description: ["玩家可以下註一個或多個投注選項。", "骰子將被搖動並顯示結果。如果您下注的符號出現，您就贏了。"],
    },
    betLimit: {
        title: "投注金額",
        description: "最小賭注和最大賭注必須在{0} - {1} 每輪的最大賭注為{2}。",
    },
};
