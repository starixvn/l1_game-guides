import React from "react";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../win-three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderMD5TW } from "../../../shared/md5-count-down-timer/zh_tw";
import { baseTermAndConditionTw } from "../../base/terms-and-conditions/languages/tw";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>开始时，三张面朝下的牌将发给龙和凤。</li>
                <li>玩家选择筹码值并将其放在投注选项上。 所有投注必须在投注时间结束前完成。请注意，已下的赌注无法取消。</li>
                <li>玩家可以在除了龙和凤以外的任何可选项上下注，玩家只能在龙或凤上下注。</li>
                <li>下注时间一到，系统将公布游戏结果。</li>
                <li>游戏通过比较龙凤之间的手牌排名来决定输赢.</li>
                <li>如果两手龙凤牌（牌型和牌值）相同，则游戏结果为和，所有投注将被退还。</li>
                <li>标准的一副牌有 52 张牌（不包括小丑），每轮结束后洗牌。</li>
                <li>每轮的最大总赌注为 {maxBet}</li>
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className={Styles["payout-option"]}>投注选项</th>
                                <th>获胜条件</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>龙</td>
                                <td className="text-start">龙手牌排名更高.</td>
                            </tr>
                            <tr>
                                <td>凤</td>
                                <td className="text-start">凤手牌排名更高.</td>
                            </tr>
                            <tr>
                                <td>配对 8 Plus</td>
                                <td className="text-start">获胜手牌包含对子 9 到对子 A、顺子、同花、同花顺、三条。</td>
                            </tr>
                            <tr>
                                <td>三张</td>
                                <td className="text-start">获胜手牌的结果是“三张”. </td>
                            </tr>
                            <tr>
                                <td>同花顺</td>
                                <td className="text-start">获胜的结果是“同花顺”.</td>
                            </tr>
                            <tr>
                                <td>同花</td>
                                <td className="text-start">获胜的结果是“同花”. </td>
                            </tr>
                            <tr>
                                <td>顺子 </td>
                                <td className="text-start">获胜的结果是“顺子”. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>赔付</h2>
            <ul className="desc">
                <li>
                    贏奖金额根据投注赔率计算。 <br></br>
                    <strong>注意:</strong> 赔付包括初始本金。
                </li>
                <li>
                    投注结算后，所有获胜金额都会立即添加到您的账户余额中。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>投注选项</th>
                                    <th>赔率</th>
                                    <th>
                                        投注限额 <br></br>（最小 - 最大）
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>龙</td>
                                    <td>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                    </td>
                                </tr>
                                <tr>
                                    <td>凤</td>
                                    <td>{formatOdds(odds?.phoenix, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPhoenix}
                                    </td>
                                </tr>
                                <tr>
                                    <td>配对 8 Plus</td>
                                    <td>{formatOdds(odds?.pair8Plus, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPair8Plus}
                                    </td>
                                </tr>
                                <tr>
                                    <td>三张</td>
                                    <td>{formatOdds(odds?.threeOfAKind, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetThreeOfAKind}
                                    </td>
                                </tr>
                                <tr>
                                    <td>同花顺</td>
                                    <td>{formatOdds(odds?.straightFlush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>同花</td>
                                    <td>{formatOdds(odds?.flush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>顺子</td>
                                    <td>{formatOdds(odds?.straight, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraight}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderCardType = () => {
    return (
        <>
            <li className="guide-item">
                <h2>牌型</h2>
                <div className="table-container text-center">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>牌型</th>
                                <th>描述</th>
                                <th>例如</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>
                                    <strong>235</strong>
                                </td>
                                <td className="text-start">三張牌 2, 3, 5 不同花色； 或2、3、5中任意兩張同花色，另一張不同花色的牌。</td>
                                <td width={250}>
                                    <span className={Styles["wrapper-card"]}>
                                        <img
                                            src="/static/images/win-three-cards/235-1.png"
                                            alt="235"
                                            height={65}
                                            loading="eager"
                                            style={{ marginBottom: 5 }}
                                        />
                                    </span>{" "}
                                    <br></br>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/235-2.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>三张</strong>
                                </td>
                                <td className="text-start">三张相同等级的牌。</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/threeKind.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>同花顺</strong>
                                </td>
                                <td className="text-start">三张相同花色的牌，顺序排列。</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straightFlush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>同花</strong>
                                </td>
                                <td className="text-start">三张同花色不同点数的牌.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/flush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>顺子</strong>
                                </td>
                                <td className="text-start">三张顺序不同花色的牌。</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straight.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>一对</strong>
                                </td>
                                <td className="text-start">两张相同等级的牌。</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/pair.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>高牌</strong>
                                </td>
                                <td className="text-start">当没有更高的手可用时，最高牌。</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/highCard.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </>
    );
};

export const renderRankingLevel = () => {
    return (
        <>
            <li className="guide-item">
                <h2>排名等级</h2>
                <ul className="desc">
                    <li>
                        <strong>卡片排行</strong>
                        <ul className="detail">
                            <li>
                                A {">"} K {">"} Q {">"} J {">"} 10 {">"} 9 {">"} 8 {">"} 7 {">"} 6 {">"} 5 {">"} 4 {">"} 3 {">"} 2
                            </li>
                            <li>花色不影响排行。</li>
                        </ul>
                    </li>
                    <li>
                        <strong>手牌排名</strong>
                        <ul className="detail">
                            <li>
                                三同花 {">"} 同花顺 {">"} 同花 {">"} 顺子 {">"} 对子 {">"} 大牌。
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>235 {">"} 三张</strong>
                        <ul className="detail">
                            <li>如果结果中有235和“三张”，则235排行高于“三张”。</li>
                            <li>当结果中没有“三张”牌型时，235 为最小的大牌。</li>
                        </ul>
                    </li>
                    <li>
                        <strong>一对</strong>
                        <ul className="detail">
                            <li>若龍、鳳均有一對，則比較該對的牌值.</li>
                            <li>如果卡值相同，則比較剩餘卡的卡值.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>同花，高牌</strong>
                        <ul className="detail">
                            <li>从具有最高值的卡开始比较双方的卡值。如果每手最大的牌相等，则比较第二大的牌，以此类推。</li>
                        </ul>
                    </li>
                    <li>
                        <strong>同花顺，顺子</strong>
                        <ul className="detail">
                            <li>
                                在同花顺和顺子中，Ace (A) 牌可以用作最高值或最低值的牌。 <br></br>
                                Example: QKA {">"} JQK {">"} …… {">"} 234 {">"} A23
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </>
    );
};

const WinThreeCardsGuideZH_TW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>介紹</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName}, 又名金花，是娱乐场内极受欢迎的纸牌游戏。 本游戏使用标准的 52 张牌（不包括小丑）。
                        游戏的目的是比较龙凤之间的手牌排名来决定比赛的胜负。排名较高的手牌将获胜。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderCardType()}
                {renderRankingLevel()}
                <li className="guide-item">
                    {renderMD5TW()}
                    <div className="content">
                        <strong> 示例:</strong> 检查比赛结果的真实性和透明度 {gameName}
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>第一步:</strong> 在公布结果前复制MD5 Key。
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step1_tw.png?v=3"
                                alt="md5-string"
                            />
                        </li>
                        <li>
                            <strong>第二步:</strong> 發布後復制結果。
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step2_tw.png?v=3"
                                alt="md5-result"
                            />
                            <div>注: 从左到右， 8♠️ Q♥️ 5♥️ 9♠️ 9♣ 10♠️ 对应游戏回合开始时的发牌顺序.</div>
                        </li>
                        <li>
                            <strong>第 3 步:</strong> 转到{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            并将结果粘贴到 MD5 框中.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step3_vi.png?v=1"
                                alt="hash-darling"
                            />
                        </li>
                        <li>
                            <strong>第 4 步:</strong> 按 “hash darling, hash!” 按钮，将新生成的校验和 MD5 字符串与步骤 1 中的 MD5
                            字符串进行比较
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step4_vi.png?v=1"
                                alt="md5-checksum"
                            />
                        </li>
                    </ul>
                </li>
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionTw} /></li>
            </ul>
        </>
    );
};
export default WinThreeCardsGuideZH_TW;
