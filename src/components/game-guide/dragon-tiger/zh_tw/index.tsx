import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../dragon-tiger.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const DragonTigerGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName}是一款類似於百家樂的簡單紙牌遊戲。 該遊戲使用一副標準的 52 張牌（不包括 Joker）。 有 3 種投注選項：龍、老虎和和局。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>抽了兩張牌，一張給龍的，一張給老虎。 </li>
                        <li>
                            玩家下注龍或虎哪一個將贏得更高價值的牌。 如果玩家預測龍和虎將擁有相同的價值牌，無論花色如何，玩家也可以下注“平局”選項。
                        </li>
                        <li>
                            遊戲通過比較牌點而不是花色來決定輸贏。 K 是最大值，而 Ace 是最小值。
                        </li>
                        <li>
                            卡點值：
                            <ul className="detail">
                                <li>
                                    牌從低到高排列如下：Ace、2、3、4、5、6、7、8、9、10、Jack、Queen、King。
                                </li>
                                <li>Ace stands for 1 point; Jack is 11 points; Queen stands for 12 points and King is 13 points.</li>
                                <li>All cards from 2 to 10 are counted at face value.</li>
                            </ul>
                        </li>
                        <li>
                            玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。 所有投注必須在投注時間到期之前進行。 請注意，投注無法取消。
                        </li>
                        <li>52 張牌（不包括小丑）的標準牌組在每輪後洗牌。</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>
                            中獎金額根據派彩率計算。支付包括初始投注。
                        </li>
                        <li>
                            投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>選項</th>
                                            <th>賠率</th>
                                            <th className={Styles["bet-limit-width"]}>
                                                投注限額 <br /> （最小最大）
                                            </th>
                                            <th>每輪最大總賭注</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>龍</td>
                                            <td rowSpan={2}>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                            </td>
                                            <td rowSpan={3}>{maxBetFollowChoice?.maxBetMain}</td>
                                        </tr>
                                        <tr>
                                            <td>老虎</td>
                                        </tr>
                                        <tr>
                                            <td>平局</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTie}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <strong>注意：</strong> 如果結果為平局，投注龍或虎的玩家將損失 50% 的本金。
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default DragonTigerGuideTW;
