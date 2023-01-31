import React from "react";
import { PROJECTS } from "../../../../common/constants";

export const renderGameRuleContent = (project: string | undefined) => {
    return (
        <>
            <li>
                玩家在按下“旋转”之前选择支付线（线）并设置您要下注的下注级别。
                <div className="text-center">
                    <strong>总投注</strong> = 支付线 * 投注水平
                </div>
            </li>

            <li>25 条支付线从 1 到 25 编号，玩家必须在开始游戏前至少选择一条支付线。</li>
            <li>每条支付线上的赢输将根据位于该支付线上的相同符号的数量计算。</li>
            {project === PROJECTS.L2 && <li>投注金额有3种选择； 对于每个选项，玩家将有机会赢得诱人的头奖。</li>}
        </>
    );
};
