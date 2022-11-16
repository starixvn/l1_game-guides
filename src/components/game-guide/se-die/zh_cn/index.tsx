import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { SeDieMini } from "../index";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/cn";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBetMain: number | string, gameId = 0) => {
    return (
        <>
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>纽扣放在盘子上并盖上碗。当盘子仍然被碗盖住时，庄家将拿起盘子并摇晃它。玩家下注，下注选项是：</li>

                <li className="contentBeforeEmpty">{renderGameRuleTable(gameId)}</li>
                <li>下注时间结束后，庄家将碗从盘子上移开，结果将显示。</li>
                <li>玩家可以在游戏桌上显示的一个或多个投注选项上下注。所有投注必须在投注时间结束前进行。请注意，下注不能取消。</li>
                <li>每轮最大总赌注为 {maxBetMain}</li>
            </ul>
        </>
    );
};

const renderGameRuleTable = (gameId: number) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
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
                    {RedWhiteDataOnTable()}
                    {!SeDieMini.includes(gameId) && (
                        <tr>
                            <td>2 红，2 白</td>
                            <td>2 红，2 白</td>
                            {renderTwoRedTwoWhite()}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const renderStatistical = () => {
    return (
        <li className="guide-item">
            <h2>统计表</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, gameId, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const gameDescription = () => {
        switch (gameId) {
            case 9:
                return "Mini 色碟是色碟游戏的精简版，投注选项较少。";
            case 22:
                return "VIP 色碟是色碟游戏的另一个版本，具有更高的投注限制。";
            default:
                return "色碟是亚洲国家的流行游戏。";
        }
    };
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameDescription()}
                        游戏有 4 个彩色按钮，每个按钮有红白两色。这个游戏的目标是预测 4 个按钮的结果。如果结果与玩家的赌注相符，则玩家获胜。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain ?? 0, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>支付</h2>
                    <ul className="desc">
                        <li>中奖金额根据派彩率计算。 支付包括初始本金。</li>
                        <li>
                            投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>选项</th>
                                            <th>支出</th>
                                            <th>
                                                投注限额 <br />
                                                （最小 - 最大）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>单</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>双</td>
                                        </tr>
                                        <tr>
                                            <td>4 红</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>

                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4 白</td>
                                        </tr>
                                        <tr>
                                            <td>3 红，1 白</td>
                                            <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 红，3 白</td>
                                        </tr>
                                        {!SeDieMini.includes(gameId ? gameId : SeDieMini[0]) && (
                                            <tr>
                                                <td>2 红，2 白</td>
                                                <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>                                                 
                                                </td>
                                                <td>
                                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatistical()}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
