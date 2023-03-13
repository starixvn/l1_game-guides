import React from "react";

export const renderMD5TW = () => {
    return (
        <>
            <h2> MD5（消息摘要算法5） </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">MD5技術</span>
                    <ul className="desc">
                        <li>MD5讓玩家可以通過第三方驗證遊戲結果的真實性和透明度。</li>
                        <li>遊戲結果將在玩家下注前由系統隨機生成。</li>
                        <li>
                            玩家可以手動檢查下注前生成的結果（<strong>MD5</strong>密鑰）與發布結果（<strong>結果</strong>）是否匹配。
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">MD5 驗證</span>
                    <ul className="desc">
                        <li>
                            <strong>第一步</strong>: 在公佈結果前複製<strong>MD5</strong>密鑰。
                        </li>
                        <li>
                            <strong>第二步</strong>: 發布後復制<strong>結果。</strong>
                        </li>
                        <li>
                            <strong>第三步</strong>: 轉到{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            並將結果粘貼到 MD5 框中。
                        </li>
                        <li>
                            <strong>第四步</strong>: 按<strong>“hash darling, hash!”</strong> 按鈕，並將新生成的
                            <strong>MD5 checksum</strong> 字符串與步驟 1 中的 MD5 密鑰進行比較。
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="content">
                如果兩個字符串匹配，則證明該局遊戲的結果是透明的，並且遊戲結果與下注前系統生成的隨機結果沒有變化。
            </div>
        </>
    );
};
