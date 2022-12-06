import React from "react";
import { useTheme } from "next-themes";

import { renderTermsAndConditionsTW } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/tw";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../se-die-war.module.scss";
import { Themes, buildVersion } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>選擇您想要的籌碼值。所有投注必須在投注時間到期之前進行。</li>
                <li>請注意，投注無法取消。</li>
                <li>一旦投注時間結束，碗將被移除並顯示結果。</li>
                <li>每輪最大總賭注為  {maxBet}</li>
                <li>
                    每個投注選項顯示的所有玩家的總投注額僅供參考。 對於不同的市場和貨幣，總和是根據公司設定的內部匯率換算的。
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th colSpan={2}>選項</th>
                                    <th>獲勝條件</th>
                                    <th>說明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>玩家</td>
                                    <td colSpan={2} className="text-start">
                                        玩家結果中的紅色按鈕數量比莊家多。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>莊家</td>
                                    <td colSpan={2} className="text-start">
                                        莊家結果中的紅色按鈕數量多於玩家。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>平局</td>
                                    <td colSpan={2} className="text-start">
                                        玩家和莊家的結果相同。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>總雙數</td>
                                    <td colSpan={2} className="text-start">
                                        玩家和莊家結果中的紅色按鈕總數為雙數。
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>總單數</td>
                                    <td colSpan={2} className="text-start">
                                        玩家和莊家結果中的紅色按鈕總數為單數。
                                    </td>
                                </tr>
                                {renderGameRulePlayerOrBanker(false)}
                                {renderGameRulePlayerOrBanker(true)}
                            </tbody>
                        </table>
                    </div>
                    {renderGameRuleExample()}
                </li>
            </ul>
        </>
    );
};

const renderGameRulePlayerOrBanker = (isBanker = false) => {
    return (
        <>
            <tr>
                <td rowSpan={9}>{isBanker ? "庄家" : "玩家"}</td>
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
            {RedWhiteDataOnTable()}
        </>
    );
};

const renderGameRuleExample = () => {
    const oneRedThreeWhite = "1 紅，3 白";
    const threeRedOneWhite = "3 紅，1 白";
    return (
        <>
            <p>
                <strong>例子</strong>
            </p>
            <div>
                <strong>莊家，玩家選項。</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>因為玩家結果中紅色按鈕的數量比莊家多。投注玩家選項將獲勝。</p>
            <div>
                <strong>總雙數</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>玩家和莊家結果中的紅色按鈕總數為 4。投注總雙數將獲勝。</p>
            <div>
                <strong>總單數</strong>
                {renderGameRuleTable(["2 紅，2 白", oneRedThreeWhite])}
            </div>
            <p>玩家和莊家結果中的紅色按鈕總數為 3。投注總單將獲勝。</p>
        </>
    );
};

const renderGameRuleTable = (data: string[]) => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>選項</th>
                        <th>結果 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>玩家</td>
                        <td>{data[0]}</td>
                    </tr>
                    <tr>
                        <td>莊家</td>
                        <td>{data[1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (
    odds: object | any,
    maxBetFollowChoice: undefined | MaxBetChoicesProps,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>支付</h2>
            <ul className="desc">
                <li>中獎金額根據派彩率計算。請注意，支付包括初始股份。</li>
                <li>
                    投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>選項</th>
                                    <th>賠率 </th>
                                    <th>投注限額（最小 - 最大）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>玩家</td>
                                    <td rowSpan={2}>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={5}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>莊家</td>
                                </tr>
                                <tr>
                                    <td>平局</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>總雙數</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>總單數</td>
                                </tr>
                                <tr>
                                    <td>玩家 - 雙數</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>玩家 - 單數</td>
                                </tr>
                                <tr>
                                    <td>玩家 - 3 紅色</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>玩家 - 1 紅色</td>
                                </tr>
                                <tr>
                                    <td>玩家 - 4 紅色</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>玩家 - 4 白色</td>
                                </tr>
                                <tr>
                                    <td>莊家 - 雙數</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>莊家 - 單數</td>
                                </tr>
                                <tr>
                                    <td>莊家 - 3 紅</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>莊家 - 1 紅</td>
                                </tr>
                                <tr>
                                    <td>莊家 - 4 紅</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>莊家 - 4 白</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideZH_TW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const pathImg = theme === Themes.light ? `dark/guide-stats-tw.png?v=${buildVersion}` : `guide-stats-tw.png?v=${buildVersion}`;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} 是色碟遊戲的特殊版本。 遊戲由 2 組按鈕組成，一組用於莊家，一組用於玩家。 每組包括 4 個彩色按鈕，其中，每個按鈕都有紅色和白色的兩側。
                        玩家對遊戲桌上顯示的一個或多個投注選項下注。 遊戲根據結果中面對的紅色或白色站點的數量來確定輸贏。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item">
                    <h2>記分牌</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <strong className="title-text">單雙</strong>
                            {StatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <strong className="title-text">統計輪結果</strong>
                            <div className={Styles["wrapper-guide-stats"]}>
                                <img src={`/static/images/sedie-war/${pathImg}`} alt="guide-stats" loading="eager" />
                            </div>

                            <p>
                                <strong>注意</strong>：统计轮中显示的数字是玩家和庄家结果中的红色按钮总数。
                            </p>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default SeDieGuideZH_TW;
