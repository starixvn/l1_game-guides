import React from "react";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../sic-bo.module.scss";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>选择您想玩的筹码值。 玩家可以对游戏桌上显示的一个或多个投注选项进行投注。</li>
                <li>所有投注必须在投注时间到期之前进行。 请注意，投注无法取消。</li>
                <li>一旦投注时间结束，骰子杯将被移除并显示结果。</li>
                <li>每轮最大总赌注为 {maxBet}</li>
                <li>
                    每个投注选项显示的所有玩家的总投注额仅供参考。 
                    对于不同的市场和货币，总和是根据公司设定的内部汇率换算的。
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    t: TFunction,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>支付</h2>
            <ul className="desc">
                <li>
                    中奖金额根据派彩率计算。 <strong>请注意，</strong> 支付包括初始投注。
                    stake.
                </li>
                <li>
                    投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["bet-option-width"]}>选项</th>
                                    <th className={Styles["bet-choice-width"]}>选择</th>
                                    <th>赔率</th>
                                    <th className={Styles["bet-limit-width"]}>
                                        投注限额 <br></br>（最小最大）
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>大小</td>
                                    <td>大</td>
                                    <td rowSpan={2}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>小</td>
                                </tr>
                                <tr>
                                    <td>任何三倍</td>
                                    <td>任何三倍</td>
                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>具体编号</td>
                                    <td rowSpan={3}>投注从 1 到 6 的任何数字</td>
                                    <td className="text-start">
                                        {formatOdds(odds?.single, fractionalOddsFormat)} 如果选择的数字出现一次。
                                    </td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecific1}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.double, fractionalOddsFormat)} 如果所选数字出现两次。
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.triple, fractionalOddsFormat)} 如果所选数字出现在所有三个骰子上。
                                    </td>
                                </tr>
                                {renderPayoutsTableOnBody(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderPayoutsTableOnBody = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    t: TFunction,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <tr>
                <td rowSpan={14}>{t("sicbo:totalPoints")}</td>
                <td>4</td>
                <td rowSpan={2}>{formatOdds(odds?.total4, fractionalOddsFormat)}</td>
                <td rowSpan={8}>
                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal4}
                </td>
            </tr>
            <tr>
                <td>17</td>
            </tr>
            <tr>
                <td>5</td>
                <td rowSpan={2}>{formatOdds(odds?.total5, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>16</td>
            </tr>
            <tr>
                <td>6</td>
                <td rowSpan={2}>{formatOdds(odds?.total6, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>15</td>
            </tr>
            <tr>
                <td>7</td>
                <td rowSpan={2}>{formatOdds(odds?.total7, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>14</td>
            </tr>
            <tr>
                <td>8</td>
                <td rowSpan={2}>{formatOdds(odds?.total8, fractionalOddsFormat)}</td>
                <td rowSpan={6}>
                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTotal8}
                </td>
            </tr>
            <tr>
                <td>13</td>
            </tr>
            <tr>
                <td>9</td>
                <td rowSpan={4}>{formatOdds(odds?.total9, fractionalOddsFormat)}</td>
            </tr>
            <tr>
                <td>10</td>
            </tr>
            <tr>
                <td>11</td>
            </tr>
            <tr>
                <td>12</td>
            </tr>
        </>
    );
};

const SicBoGuideCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "sicbo"]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName}是一种在亚洲广受欢迎的赌场骰子游戏。 该游戏使用三个标准骰子进行。 
                        这个游戏的目的是预测掷骰子的结果。 玩家可以投注特定的骰子结果和骰子的总价值。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>投注选项</h2>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th className={Styles["bet-option-width"]}>选项</th>
                                            <th className={Styles["bet-choice-width"]}>选择</th>
                                            <th>描述</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>大小</td>
                                            <td>大</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>投注三个骰子的总分在 11 到 17 分之间。 </li>
                                                    <li>如果三个骰子的价值相同，则您输掉此赌注。 </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>小</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>投注三个骰子的总分在 4 到 10 分之间。</li>
                                                    <li>如果三个骰子的价值相同，则您输掉此赌注。</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>任何三倍</td>
                                            <td>任何三倍</td>
                                            <td className="text-start">要赢得这个赌注，所有三个骰子必须显示相同的数字。</td>
                                        </tr>
                                        <tr>
                                            <td>具体编号</td>
                                            <td>投注从 1 到 6 的任何数字</td>
                                            <td className="text-start">
                                                投注从 1 到 6 的特定数字。 如果选择的数字出现在三个骰子中，您就赢了。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>总积分</td>
                                            <td>投注从 4 到 17 的任何数字</td>
                                            <td className="text-start">
                                                投注三个骰子的总分。 玩家预测三个骰子的总分是否等于所选数字。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderPayouts(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                <li className="guide-item">
                    {renderMD5EN()}
                    <div className="content">
                        <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step1_cn.png?v=4" alt="md5-string" />
                        </li>
                        <li>
                            <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step2_cn.png?v=4" alt="md5-result" />
                            <div>Note: From the left to right, &#123;3, 2, 1&#125; correspond to the the value of three dice.</div>
                        </li>
                        <li>
                            <strong>Step 3:</strong> Go to{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            and paste the Result into the MD5 box.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step3_en.png?v=1" alt="hash-darling" />
                        </li>
                        <li>
                            <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5
                            string with the MD5 string in Step 1.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step4_en.png?v=1" alt="md5-checksum" />
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default SicBoGuideCN;
