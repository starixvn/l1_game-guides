import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import { StatisticalTable } from "../../../shared/se-die/tw";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>
                    玩家可以下注單或雙，但不能同時下注兩方。
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>選項</th>
                                    <th>獲勝條件</th>
                                    <th>說明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>單</td>
                                    <td>3 紅，1 白</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>1 紅，3 白</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>雙</td>
                                    <td>4 紅</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>4 白</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>2 紅，2 白</td>
                                    {renderTwoRedTwoWhite()}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>
                    玩家可以在下注時間到期之前通過使用相同選項再次下注來增加賭注金額。
                </li>
                <li>每輪的最大總賭注為 {maxBet}。 請注意，投注無法取消。</li>
                <li>
                    平衡投注池：如果奇偶投注的總金額不同，則差額將退還給擁有最新投注單的玩家。<br></br>
                    <strong>例子</strong>: 玩家 A 在單上下注 100，玩家 B 在雙上下注 30， C 在雙上下注 90。 
                    為平衡單雙投注的總金額，系統將退還20給玩家C。
                </li>
            </ul>
        </>
    );
};

const renderStatisticTable = () => {
    return (
        <li className="guide-item">
            <h2>統計表</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const SeDieGuideZH_TW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} 是色碟遊戲的迷你版，僅包含單和雙兩種投注選項。 遊戲用 4 個彩色按鈕進行，每個按鈕都有紅色和白色的兩側。 
                        這個遊戲的目的是預測 4 個按鈕的結果。如果結果與玩家的賭注相符，則玩家獲勝。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>支付</h2>
                    <ul className="desc">
                        <li>
                            中獎金額根據派彩率計算。 請注意， 支付包括初始本金。
                        </li>
                        <li>
                            投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>選項</th>
                                            <th>支出</th>
                                            <th>
                                            投注限額 <br /> （最小 - 最大）
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>單</td>
                                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>雙</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderStatisticTable()}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default SeDieGuideZH_TW;
