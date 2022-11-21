import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../dragon-tiger.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const DragonTigerGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName}是一款类似于百家乐的简单纸牌游戏。 该游戏使用一副标准的 52 张牌（不包括 Joker）。 有 3 种投注选项：龙、老虎和和局。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>抽了两张牌，一张给龙的，一张给老虎。</li>
                        <li>
                            玩家下注龙或虎哪一个将赢得更高价值的牌。
                            如果玩家预测龙和虎将拥有相同的价值牌，无论花色如何，玩家也可以下注“平局”选项。
                        </li>
                        <li>
                            游戏通过比较牌点而不是花色来决定输赢。 K 是最大值，而 Ace 是最小值。
                        </li>
                        <li>
                            卡点值：
                            <ul className="detail">
                                <li>
                                    牌从低到高排列如下：Ace、2、3、4、5、6、7、8、9、10、Jack、Queen、King。
                                </li>
                                <li>ACE 代表 1 分； Jack是 11 分； Queen代表 12 分，King代表 13 分。 其余牌（2 到 10）按面值计算。</li>
                                <li>All cards from 2 to 10 are counted at face value.</li>
                            </ul>
                        </li>
                        <li>
                            玩家可以对游戏桌上显示的一个或多个投注选项进行投注。 
                            所有投注必须在投注时间到期之前进行。 所有投注必须在投注时间到期之前进行。
                        </li>
                        <li>52 张牌（不包括小丑）的标准牌组在每轮后洗牌。</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出 </h2>
                    <ul className="desc">
                        <li>
                            中奖金额根据派彩率计算。 支付包括初始投注。
                        </li>
                        <li>
                            投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>选项</th>
                                            <th>支出</th>
                                            <th className={Styles["bet-limit-width"]}>
                                            投注限额 <br /> （最小最大）
                                            </th>
                                            <th>每轮最大总赌注</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>龙</td>
                                            <td rowSpan={2}>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                            </td>
                                            <td rowSpan={3}>{maxBetFollowChoice?.maxBetMain}</td>
                                        </tr>
                                        <tr>
                                            <td>平局</td>
                                        </tr>
                                        <tr>
                                            <td>Tie</td>
                                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTie}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <strong>注意：</strong> 如果结果为平局，投注龙或虎的玩家将损失 50% 的本金。
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default DragonTigerGuideCN;
