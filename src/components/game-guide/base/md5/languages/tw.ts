import { IMd5Resources } from "./types";

const steps = {
    one: "<strong>第一步</strong>: 在公佈結果前複製 <strong>MD5</strong> 鑰匙。",
    two: "<strong>第二步</strong>: 發布後復制<strong>結果。</strong>",
    three: "<strong>第三步</strong>: 轉到 {0} 並將結果粘貼到 MD5 框中。",
    four: "<strong>第四步</strong>: 按<strong>“hash darling, hash!”</strong>  按鈕，並將新生成的 <strong> MD5 checksum </strong> 字符串與步驟 1 中的 MD5 鑰匙進行比較。",
};

export const tw: IMd5Resources = {
    content: {
        header: "MD5（消息摘要算法5）",
        technology: {
            header: "MD5技術",
            details: [
                "MD5讓玩家可以通過第三方驗證遊戲結果的真實性和透明度。",
                "遊戲結果將在玩家下注前由系統隨機生成。",
                "玩家可以手動檢查下注前生成的結果（<strong>MD5</strong> 鑰匙）與發布結果（<strong>結果</strong>）是否匹配。",
            ],
        },
        validation: {
            header: "MD5 驗證",
            details: Object.values(steps),
        },
        noted: "如果兩個字符串匹配，則證明該局遊戲的結果是透明的，並且遊戲結果與下注前系統生成的隨機結果沒有變化。",
    },
    example: {
        header: "<strong> 示例:</strong> 檢查結果的真實性和透明度。",
        step1Text: steps.one,
        step2Text: steps.two,
        step3Text: steps.three,
        step4Text: steps.four,
        md5Key: "MD5 鑰匙",
        result: "結果",
        copy: "複製",
    },
};
