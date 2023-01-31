import { IMd5Resources } from "./types";

const steps = {
    one: "<strong>第一步</strong>: 在公布结果前复制<strong>MD5</strong>密钥。",
    two: "<strong>第二步</strong>: 发布后复制<strong>结果。</strong>",
    three: "<strong>第三步</strong>: 转到 {0} 并将结果粘贴到 MD5 框中。",
    four: "<strong>第四步</strong>: 按 <strong>“hash darling, hash!”</strong> 按钮，并将新生成的 <strong>MD5 checksum</strong> 字符串与步骤 1 中的 MD5 密钥进行比较。",
};

export const cn: IMd5Resources = {
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
            details: Object.values(steps),
        },
        noted: "如果两个字符串匹配，则证明该局游戏的结果是透明的，并且游戏结果与下注前系统生成的随机结果没有变化。",
    },
    example: {
        header: "<strong>示例:</strong> 检查比赛结果的真实性和透明度。",
        step1Text: steps.one,
        step2Text: steps.two,
        step3Text: steps.three,
        step4Text: steps.four,
        md5Key: "MD5 钥匙",
        result: "结果",
        copy: "复制",
    },
};
