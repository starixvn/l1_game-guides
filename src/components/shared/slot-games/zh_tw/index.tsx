import React from "react";
import { PROJECTS } from "../../../../common/constants";

export const renderGameRuleContent = (project: string | undefined) => {
    return (
        <>
            <li>
                玩家在按下“旋轉”之前選擇支付線（線）並設置您要下注的下注級別。
                <div className="text-center">
                    <strong>總投注</strong> = 支付線 * 投注水平
                </div>
            </li>

            <li>25 條支付線從 1 到 25 編號，玩家必須在開始遊戲前至少選擇一條支付線。</li>
            <li>每條支付線上的贏輸將根據位於該支付線上的相同符號的數量計算。</li>
            {project === PROJECTS.L2 && <li>投注金額有3種選擇； 對於每個選項，玩家將有機會贏得誘人的頭獎。</li>}
        </>
    );
};
