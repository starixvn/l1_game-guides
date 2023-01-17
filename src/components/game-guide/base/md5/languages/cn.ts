import { IMd5Resources } from "./types";

export const md5ResourcesCn: IMd5Resources = {
    content: {
        header: "MD5（消息摘要算法5）",
        technology: {
            header: "MD5技术",
            details: [
                "MD5让玩家可以通过第三方验证游戏结果的真实性和透明度。",
                "游戏结果将在玩家下注前由系统随机生成。",
                "玩家可以手动检查下注前生成的结果（<strong>MD5</strong>密钥）与发布结果（<strong>结果</strong>）是否匹配。",
            ],
        },
        validation: {
            header: "MD5 验证",
            details: [
                "<strong>第一步</strong>: 在公布结果前复制<strong>MD5</strong>密钥。",
                "<strong>第二步</strong>: 发布后复制<strong>结果。</strong>",
                "<strong>第三步</strong>: 转到 {0} 并将结果粘贴到 MD5 框中。",
                "<strong>第四步</strong>: 按 <strong>“hash darling, hash!”</strong> 按钮，并将新生成的<strong>校验和 MD5</strong> 字符串与步骤 1 中的 MD5 密钥进行比较。",
            ],
        },
        noted: "如果两个字符串匹配，则证明该局游戏的结果是透明的，并且游戏结果与下注前系统生成的随机结果没有变化。",
    },
    example: {
        header: "",
        details: {
            step1: {
                text: "",
                imageUrl: "",
            },
            step2: {
                text: "",
                imageUrl: "",
                noted1: "",
                noted2: "",
            },
            step3: {
                text: "",
                imageUrl: "",
            },
            step4: {
                text: "",
                imageUrl: "",
            },
        },
    },
};
