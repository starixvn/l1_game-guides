import React from "react";

import { ENVIRONMENT } from "../../../../../common/constants";
import { renderTermsAndConditionsTW } from "../../../../shared";
import { renderMD5EN } from "../../../../shared/md5-count-down-timer/en";
import { OddsProMaxProps } from "../../../keno-pro-max/type";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import Styles from "../keno-mini.module.scss";
import { formatOdds } from "../../../../../helpers/number-helper";

const payouts = (
    odds: OddsProMaxProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <h2>支出</h2>
            <ul className="desc">
                <li>中獎金額根據派彩率計算。 </li>
                <li>支付包括初始投注。</li>
                <li>
                    投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>選項</th>
                                    <th>支出</th>
                                    <th>
                                        投注限額 <br></br>（最小最大）
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>大</td>
                                    <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>小</td>
                                    <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>單</td>
                                    <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>雙</td>
                                </tr>
                                <tr>
                                    <td>金</td>
                                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                    </td>
                                </tr>
                                <tr>
                                    <td>木</td>
                                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                    </td>
                                </tr>
                                <tr>
                                    <td>水</td>
                                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                    </td>
                                </tr>
                                <tr>
                                    <td>火</td>
                                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                    </td>
                                </tr>
                                <tr>
                                    <td>土</td>
                                    <td>{formatOdds(odds?.earth, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const bettingOptions = () => {
    return (
        <>
            <h2>投注選項</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">大/小</span>
                    <ul className="desc">
                        <li>
                            <strong>大:</strong> 抽出的 10 個編號的球的總和 {`>=`} 206
                        </li>
                        <li>
                            <strong>小:</strong> 抽出的 10 個編號的球的總和 {`<=`} 205
                        </li>
                    </ul>
                    <div>
                        <strong>示例: </strong>從 40 個編號的球中隨機抽取 10 個編號的球
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>繪製結果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>15</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>28</td>
                                        <td>33</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>總和</strong> = 181。投注{`"小"`}的玩家將獲勝。
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">單/雙</span>
                    <ul className="desc">
                        <li>
                            <strong>單數:</strong> 抽出的 10 個編號球的總和為單數。
                        </li>
                        <li>
                            <strong>雙數:</strong> 抽取的10個編號的球的總和為雙數。
                        </li>
                    </ul>
                    <div>
                        <strong>示例: </strong>從 40 個編號的球中隨機抽取 10 個編號的球
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>繪製結果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>24</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>34</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>總和</strong> = 197。投注{`"單"`}的玩家將獲勝。
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">五行（金、木、水、火、土）</span>
                    <ul className="desc">
                        <li>
                            <strong>金:</strong> 抽取的 10 個編號的球的總和，範圍從 55 到 163
                        </li>
                        <li>
                            <strong>木:</strong> 抽出的 10 個編號的球的總和，範圍從 164 到 187
                        </li>
                        <li>
                            <strong>水:</strong> 抽出的 10 個編號的球的總和，範圍從 188 到 222
                        </li>
                        <li>
                            <strong>火:</strong> 抽出的10個編號的球的總和，範圍從223到246
                        </li>
                        <li>
                            <strong>土:</strong> 抽出的10個編號的球的總和，範圍從247到355
                        </li>
                    </ul>
                    <div>
                        <strong>示例: </strong>從 40 個編號的球中隨機抽取 10 個編號的球
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>繪製結果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>7</td>
                                        <td>13</td>
                                        <td>17</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>33</td>
                                        <td>37</td>
                                        <td>38</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>總和</strong> = 237。投注{`"火"`}的玩家將獲勝。
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderMD5Example = (environment: string | undefined) => {
    return (
        <div className="content">
            <strong> 示例:</strong> check the authenticity and transparency of the result.
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step1_en.png?v=2" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>MD5 Key:</strong> f2bbd32524fe6e2e41eaaaa0eacd6d86
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <strong>Step 2:</strong> Copy Result after the system publishes the result.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step2_en.png?v=4" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>Result:</strong> {"{237}_{#26907421fad9b51da1169691982}"}
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                    <div>Note: 237 is the total point of the game result.</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <div className={Styles["wrapper-img-hash"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step3.png?v=1" alt="hash-darling" />
                    </div>
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 Key in Step 1.
                    <div className={Styles["wrapper-img"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step4.png?v=1" alt="md5-checksum" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

const KenoMiniGuideZHTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        Keno Mini / Keno Mini 2 are the RNG Keno with 40 balls. There are 10 balls drawn randomly from 40 numbered balls
                        ranging from 1 to 40. 玩家對遊戲桌上顯示的一個或多個投注選項下注。 抽取的 10 個編號球的總和將決定玩家的輸贏。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>所有投注必須在投注時間到期之前進行。 請注意，投注無法取消。 </li>
                        <li>Once the betting time has expired, the result will be shown.</li>
                        <li>每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {environment === ENVIRONMENT.sm && (
                    <li id="md5" className="guide-item">
                        {renderMD5EN()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default KenoMiniGuideZHTW;
