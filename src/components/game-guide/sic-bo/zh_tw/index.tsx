import React from "react";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../sic-bo.module.scss";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>選擇您想玩的籌碼值。玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。</li>
                <li>所有投注必須在投注時間到期之前進行。 請注意，投注無法取消。</li>
                <li>一旦投注時間結束，骰子杯將被移除並顯示結果。</li>
                <li>每輪最大總賭注為 {maxBet}</li>
                <li>
                    每個投注選項顯示的所有玩家的總投注額僅供參考。 
                    對於不同的市場和貨幣，總和是根據公司設定的內部匯率換算的。
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
                    中獎金額根據派彩率計算。 <strong>請注意，</strong> 支付包括初始投注。
                </li>
                <li>
                    投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["bet-option-width"]}>選項</th>
                                    <th className={Styles["bet-choice-width"]}>選擇</th>
                                    <th>支出</th>
                                    <th className={Styles["bet-limit-width"]}>
                                        投注限額 <br></br>（最小最大）
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
                                    <td rowSpan={3}>具體編號</td>
                                    <td rowSpan={3}>投注從 1 到 6 的任何數字</td>
                                    <td className="text-start">
                                        {formatOdds(odds?.single, fractionalOddsFormat)} 如果選擇的數字出現一次。
                                    </td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecific1}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.double, fractionalOddsFormat)} 如果所選數字出現兩次。
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">
                                        {formatOdds(odds?.triple, fractionalOddsFormat)} 如果所選數字出現在所有三個骰子上。
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

const SicBoGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "sicbo"]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName}是一種在亞洲廣受歡迎的賭場骰子遊戲。 該遊戲使用三個標準骰子進行。 
                        這個遊戲的目的是預測擲骰子的結果。 玩家可以投注特定的骰子結果和骰子的總價值。
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>投注選項</h2>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th className={Styles["bet-option-width"]}>選項</th>
                                            <th className={Styles["bet-choice-width"]}>選擇</th>
                                            <th>描述</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>大小</td>
                                            <td>大</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>投註三個骰子的總分在 11 到 17 分之間。 </li>
                                                    <li>如果三個骰子的價值相同，則您輸掉此賭注。</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>小</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li>投註三個骰子的總分在 4 到 10 分之間。</li>
                                                    <li>如果三個骰子的價值相同，則您輸掉此賭注。</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>任何三倍</td>
                                            <td>任何三倍</td>
                                            <td className="text-start">要贏得這個賭注，所有三個骰子必須顯示相同的數字。</td>
                                        </tr>
                                        <tr>
                                            <td>具體編號</td>
                                            <td>投注從 1 到 6 的任何數字</td>
                                            <td className="text-start">
                                                投注從 1 到 6 的特定數字。 如果選擇的數字出現在三個骰子中，您就贏了。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>總積分</td>
                                            <td>投注從 4 到 17 的任何數字</td>
                                            <td className="text-start">
                                                投註三個骰子的總分。 玩家預測三個骰子的總分是否等於所選數字。
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
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step1_en.png?v=3" alt="md5-string" />
                        </li>
                        <li>
                            <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step2_en.png?v=3" alt="md5-result" />
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
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default SicBoGuideTW;
