import { IMd5Resources } from "./types";

export const md5ResourcesTw: IMd5Resources = {
    content: {
        header: "MD5（消息摘要算法5）",
        technology: {
            header: "MD5技术",
            details: [
                "MD5让玩家可以通过第三方验证游戏结果的真实性和透明度。",
                "游戏结果将在玩家下注前由系统随机生成。",
                "玩家可以手动检查下注前生成的结果（<strong>MD5</strong>密钥）与发布结果（<strong>結果</strong>）是否匹配。",
            ],
        },
        validation: {
            header: "MD5 验证",
            details: [
                "<strong>第一步</strong>: 在公佈結果前複製<strong>MD5</strong>密鑰。",
                "<strong>第二步</strong>: 發布後復制<strong>結果。</strong>",
                "<strong>第三步</strong>: 轉到 {0} 並將結果粘貼到 MD5 框中。",
                "<strong>第四步</strong>: 按<strong>“hash darling, hash!”</strong> 按鈕，並將新生成的<strong>校驗和 MD5</strong> 字符串與步驟 1 中的 MD5 密鑰進行比較。",
            ],
        },
        noted: "如果兩個字符串匹配，則證明該局遊戲的結果是透明的，並且遊戲結果與下注前系統生成的隨機結果沒有變化。",
    },
    example: {
        header: "<strong> 示例:</strong> 檢查比賽結果的真實性和透明度",
        step1Text: "<strong>第一步:</strong> 在公佈結果前複製MD5密鑰。",
        step2Text: "<strong>第二步:</strong> 發布後復制結果。",
        step3Text: "<strong>第三步:</strong> 轉到 {0} 並將結果粘貼到 MD5 框中。",
        step4Text:
            "<strong>第四步:</strong> 按“hash darling，hash！” 按鈕，並將新生成的 MD5 checksum 字符串與步驟 1 中的 MD5 密鑰進行比較。",
        step1ImageUrl: "",
        step2ImageUrl: "",
        step3ImageUrl: "",
        step4ImageUrl: "",
        getStep2Noted1Text: function (): string {
            return "";
        },
        getStep2Noted2Text: function (): string {
            return "";
        },
    },
};
