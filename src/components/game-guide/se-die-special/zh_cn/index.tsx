import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { StatisticalTable } from "../../../shared/se-die/cn";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>
                    玩家可以下注单或双，但不能同时下注两方。
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>选项</th>
                                    <th>获胜条件</th>
                                    <th>说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>单</td>
                                    <td>3 红，1 白</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>1 红，3 白</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>双</td>
                                    <td>4 红</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>4 白</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>2 红，2 白</td>
                                    {renderTwoRedTwoWhite()}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>
                    玩家可以在下注时间到期之前通过使用相同选项再次下注来增加赌注金额。
                </li>
                <li>每轮的最大总赌注为 {maxBet}。  请注意，投注无法取消。</li>
                <li>
                    平衡投注池：如果奇偶投注的总金额不同，则差额将退还给拥有最新投注单的玩家。<br></br>
                    <strong>例子</strong>: 玩家 A 在单上下注 100，玩家 B 在双上下注 30， C 在双上下注 90。
                    为平衡单双投注的总金额，系统将退还20给玩家C。
                </li>
            </ul>
        </>
    );
};

const renderStatisticTable = () => {
    return (
        <li className="guide-item">
            <h2>统计表</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const SeDieGuideZH_CN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName} 是色碟游戏的迷你版，仅包含单和双两种投注选项。 
                        游戏用 4 个彩色按钮进行，每个按钮都有红色和白色的两侧。
                        这个游戏的目的是预测 4 个按钮的结果。 如果结果与玩家的赌注相符，则玩家获胜。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>支付</h2>
                    <ul className="desc">
                        <li>
                         中奖金额根据派彩率计算。 请注意, 支付包括初始本金。
                        </li>
                        <li>
                            投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>选项</th>
                                            <th>支出</th>
                                            <th>
                                                投注限额 <br /> （最小 - 最大）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>单</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>双</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatisticTable()}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default SeDieGuideZH_CN;
