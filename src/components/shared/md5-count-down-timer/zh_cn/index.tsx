import React from "react";

export const renderMD5CN = () => {
    return (
        <>
            <h2> MD5（消息摘要算法5） </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">MD5技术</span>
                    <ul className="desc">
                        <li>MD5让玩家可以通过第三方验证游戏结果的真实性和透明度。</li>
                        <li>游戏结果将在玩家下注前由系统随机生成。</li>
                        <li>
                            玩家可以手动检查下注前生成的结果（<strong>MD5</strong>密钥）与发布结果（<strong>Result</strong>）是否匹配。
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">MD5 验证</span>
                    <ul className="desc">
                        <li>
                            <strong>第一步</strong>: 在公布结果前复制<strong>MD5</strong>密钥。
                        </li>
                        <li>
                            <strong>第二步</strong>: 系统发布<strong>结果</strong>后复制结果。
                        </li>
                        <li>
                            <strong>第三步</strong>: 转到{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            并将结果粘贴到 MD5 框中。
                        </li>
                        <li>
                            <strong>第四步</strong>: 按 <strong>“hash darling, hash!”</strong> 按钮，并将新生成的<strong>校验和 MD5</strong>{" "}
                            字符串与步骤 1 中的 MD5 密钥进行比较。
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="content">
                如果两个字符串匹配，则证明该局游戏的结果是透明的，并且游戏结果与下注前系统生成的随机结果没有变化。
            </div>
        </>
    );
};
