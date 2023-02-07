import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../lottery.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";

const exampleTitle = "example-title";
const tableSmall = "table-small";
const textRedLight = "text-red-light";
const renderGameRule = (maxBet: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>選擇您想玩的籌碼值。 所有投注必須在投注時間結束前完成。</li>
                <li>請注意，投注無法取消。</li>
                <li>玩家可以對遊戲桌上顯示的一個或多個投注選項進行投注。</li>
                <li>每輪最大總賭注為 {maxBet}</li>
            </ul>
        </li>
    );
};

const renderBettingOptions = () => {
    return (
        <li className="guide-item">
            <h2>投注選項</h2>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th colSpan={2}>選項</th>
                        <th>說明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="text-center">
                            4套
                        </td>
                        <td>
                            <p>從 00 到 99 中選擇您要投注的號碼； 如果所選號碼落入七等獎，則玩家獲勝。</p>
                            <p>
                                <strong>注意</strong>: 如果所選數字在七等獎的4個結果中出現N次，則獎金將乘以N。
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            特別
                        </td>
                        <td>從 00 到 99 中選擇您要投注的號碼； 如果所選數字與特別獎的最後 2 位數字相同，則玩家獲勝。</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            頭
                        </td>
                        <td>從 0 到 9 中選擇您要投注的號碼； 如果選擇的數字與特別獎的十位數字相同，則玩家獲勝。</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            尾
                        </td>
                        <td>從 0 到 9 中選擇您要投注的號碼； 如果選擇的數字與特別獎的個位相同，則玩家獲勝。</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            27套
                        </td>
                        <td>
                            <p>從 00 到 99 中選擇您要投注的號碼； 如果所選數字與 27 個結果的最後 2 位數字相同，則該玩家獲勝。</p>
                            <p>
                                <strong>注意</strong>: 如果所選數字在 27 個結果中出現 N 次與最後 2 位數字相同，則獎金將乘以 N。
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="text-center">
                            其他
                        </td>
                        <td className="text-center">大</td>
                        <td>如果特別獎的最後 2 位數 {`>=`} 50，則玩家獲勝。</td>
                    </tr>
                    <tr>
                        <td className="text-center">小</td>
                        <td>如果特別獎的最後 2 位數 {`<=`} 49，則玩家獲勝。</td>
                    </tr>
                    <tr>
                        <td className="text-center">單</td>
                        <td>如果特別獎的最後 2 位數字是單數，則玩家獲勝。</td>
                    </tr>
                    <tr>
                        <td className="text-center">雙</td>
                        <td>如果特別獎的最後 2 位數字是雙數，則玩家獲勝。</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>例子:</strong>
                <ul className={Styles["many-example"]}>
                    <li>{BettingOptions4Sets()}</li>
                    <li>{BettingOptionsSpecial()}</li>
                    <li>{BettingOptionsHead()}</li>
                    <li>{BettingOptionsTail()}</li>
                    <li>{BettingOptions27Sets()}</li>
                </ul>
            </div>
        </li>
    );
};

const BettingOptions4Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>a) 4 套</div>
            <ul className="desc">
                <li>對兩個數字下注：07、77</li>
                <li>最終結果：</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG彩票</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>第七</td>
                        <td>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>14</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>94</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>七等獎的結果中，07號出現了兩次。玩家以雙倍賠率贏得 07 號。</p>
        </>
    );
};
const BettingOptionsSpecial = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>b) 特別 </div>
            <ul className="desc">
                <li>對三個數字下注：00、62、79 </li>
                <li>最終結果：</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG彩票</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>特別</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>62</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>數字 62 與特別獎的最後兩位數字相同。玩家在數字 62 上獲勝</p>
        </>
    );
};
const BettingOptionsHead = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>c) 頭</div>
            <ul className="desc">
                <li>投註三個數字：0、6、9</li>
                <li>最終結果：</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG彩票</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>特別</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>6</span>
                                <span className={Styles[textRedLight]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>數字6與特別獎的十位數相同。玩家在數字 6 上獲勝</p>
        </>
    );
};
const BettingOptionsTail = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>d) 尾</div>
            <ul className="desc">
                <li>對兩個數字下注：0、5</li>
                <li>最終結果：</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG彩票</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>特別</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>0906</span>
                                <span className={Styles["text-red"]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>所有中選號碼都與特獎的個位不同。玩家輸掉賭注。</p>
        </>
    );
};
const BettingOptions27Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>e) 27 套</div>
            <ul className="desc">
                <li>下註四個數字：05、12、77、85</li>
                <li>最終結果：</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th>獎品</th>
                        <th colSpan={12}>RNG彩票</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>特別</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles[textRedLight]}>763</span>
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                    </tr>
                    <tr>
                        <td>第一</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles["text-grey"]}>684</span>00
                        </td>
                    </tr>
                    <tr>
                        <td>第二</td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>164</span>75
                        </td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>507</span>06
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>第三</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>339</span>12
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>665</span>66
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>228</span>83
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>516</span>76
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>451</span>05
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>321</span>82
                        </td>
                    </tr>
                    <tr>
                        <td>第四</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>08</span>69
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>03</span>60
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>01</span>79
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>84</span>05
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>第五</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>28</span>50
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>62</span>72
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>40</span>43
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>53</span>86
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>64</span>23
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>42</span>31
                        </td>
                    </tr>
                    <tr>
                        <td>第六</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>87
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>8</span>65
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>92
                        </td>
                    </tr>
                    <tr>
                        <td>第七</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>97</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>26</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>33</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>數字 05 在 27 個結果中出現了兩次。玩家以雙倍賠率贏得 05 號。</p>
            <p>12 號在 27 個結果中出現過一次。玩家在數字 12 上獲勝</p>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>支付</h2>
            <ul className="desc">
                <li>中獎金額根據派彩率計算。 請注意，支付包括初始投注。</li>
                <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
            </ul>
            <table className={`table text-center table-medium`}>
                <thead>
                    <tr>
                        <th colSpan={2}>選項</th>
                        <th>支付</th>
                        <th>
                            投注限額 <br></br>（最小最大）
                        </th>
                        <th className={Styles["payout-max-total-width"]}>每輪最大總賭注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>4套</td>
                        <td>{formatOdds(odds?.["4Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets4}
                        </td>
                        <td rowSpan={9}>{maxBetFollowChoice?.maxBetMain}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>特別</td>
                        <td>{formatOdds(odds?.special, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecial}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>頭</td>
                        <td>{formatOdds(odds?.head, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetHead}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>尾</td>
                        <td>{formatOdds(odds?.tail, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTail}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>27套</td>
                        <td>{formatOdds(odds?.["27Sets"], fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSets27}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>其他</td>
                        <td>大</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>小</td>
                    </tr>
                    <tr>
                        <td>單</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>雙</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderViewStatistic = () => {
    const statsList = "stats-list";
    const resultRow = "result-row";
    const statsResult = "stats-result";
    const subNumber = "sub-number";
    return (
        <li className="guide-item">
            <h2>統計</h2>
            <ul className="desc">
                <li>數據統計基於RNG彩票27個結果的最後兩位數字，以幫助玩家選擇自己喜歡的數字。</li>
                <li>
                    最近 100 輪每種投注類型的數據統計
                    <ul className={Styles[statsList]}>
                        <li>
                            <strong>4 套</strong>: 以七等獎成績統計。
                        </li>
                        <li>
                            <strong>特別</strong>: 根據特別獎最後2位數字統計。
                        </li>
                        <li>
                            <strong>27 套</strong>: 以8個獎項27個結果的後2位統計。
                        </li>
                        <li>
                            <strong>頭</strong>: 按特等獎的十位數統計。
                        </li>
                        <li>
                            <strong>尾</strong>: 按特獎個位數統計。
                        </li>
                        <li>
                            <strong>其他(大/小, 單/雙)</strong>: 統計每個投注選項 大/小, 單/雙 的中獎率。
                        </li>
                    </ul>
                    <ul className={Styles["many-example"]}>
                        <li>
                            <div className={Styles[exampleTitle]}>a) 4 套, 特別, 27 套 </div>
                            <ul className={Styles[statsList]}>
                                <li>
                                    出現次數最多的 10 個數字 (<span className={Styles["text-red"]}>以紅色</span>顯示)
                                </li>
                                <li>
                                    出現次數最少的 10 個數字 (<span className={Styles["text-blue"]}>以藍色</span>顯示)
                                </li>
                            </ul>
                            <p className="bold">例子:</p>
                            <p>投注{`"4 套"`}類型的數據統計</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>44</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>24</span>
                                </div>
                                <p>在過去的 100 輪比賽中，44 號共有 24 次獲得第 7 名</p>
                            </div>
                            <p>投注{`"27 套"`}類型的數據統計</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>00</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>0</span>
                                </div>
                                <p>在過去 100 輪的 27 個結果中，數字 00 沒有出現在最後 2 位。</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>b) 頭, 尾</div>
                            <p>從 0-9 計算每個數字的出現次數</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    如果總出現次數 {`>`} 10，將顯示為<span className={Styles["text-red"]}>紅色</span>。
                                </li>
                                <li>
                                    如果總出現次數 {`<=`} 10，將顯示為
                                    <span className={Styles["text-blue"]}>藍色</span>。
                                </li>
                            </ul>
                            <p className="bold">例子:</p>
                            <p>投注{`"頭"`}類型中的數據統計</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>1</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>32</span>
                                </div>
                                <p>在過去的 100 輪中，第一名在特別獎的十位數中總共出現了 32 次。</p>
                            </div>
                            <p>投注{`"尾"`}類型的數據統計</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>7</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>4</span>
                                </div>
                                <p>7 號在過去 100 輪中共有 4 次出現在特別獎的個位數中。</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>c) 其他 (大/小, 單/雙)</div>
                            <p>顯示每個投注選項大/小、單/雙的獲勝率 (%)。</p>
                            <p className="bold">例子:</p>
                            <div className={Styles["others"]}>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-red"]}`}>單</span>
                                    <span className={`${Styles[subNumber]}`}>48%</span>
                                </div>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-white"]}`}>雙</span>
                                    <span className={`${Styles[subNumber]}`}>52%</span>
                                </div>
                            </div>
                            <p>投注選項單數的中獎率為 48%，雙數為 52%</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const LotteryGuideZHTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName}是一款在越南非常流行的在線彩票遊戲。 玩家下注自己喜歡的數字，遊戲根據8個獎項的27個結果匹配數字來確定輸贏。
                    </p>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <table className={`table text-center ${Styles["table-medium"]}`}>
                                <thead>
                                    <tr>
                                        <th>獎品</th>
                                        <th colSpan={12}>RNG彩票</th>
                                        <th>結果數</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>特別</td>
                                        <td colSpan={12} className="bold">
                                            <span className={Styles["text-red"]}>76349</span>
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>第一</td>
                                        <td colSpan={12} className="bold">
                                            68400
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>第二</td>
                                        <td colSpan={6} className="bold">
                                            16475
                                        </td>
                                        <td colSpan={6} className="bold">
                                            50706
                                        </td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>第三</td>
                                        <td colSpan={4} className="bold">
                                            33912
                                        </td>
                                        <td colSpan={4} className="bold">
                                            66566
                                        </td>
                                        <td colSpan={4} className="bold">
                                            22883
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            51676
                                        </td>
                                        <td colSpan={4} className="bold">
                                            45105
                                        </td>
                                        <td colSpan={4} className="bold">
                                            32182
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>第四</td>
                                        <td colSpan={3} className="bold">
                                            0869
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0360
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0179
                                        </td>
                                        <td colSpan={3} className="bold">
                                            8405
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>第五</td>
                                        <td colSpan={4} className="bold">
                                            2850
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6272
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4043
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            5386
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6423
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4231
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>第六</td>
                                        <td colSpan={4} className="bold">
                                            287
                                        </td>
                                        <td colSpan={4} className="bold">
                                            865
                                        </td>
                                        <td colSpan={4} className="bold">
                                            292
                                        </td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>第七</td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>97</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>26</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>42</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>33</span>
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={13}></td>
                                        <td className="bold">總 = 27</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {renderBettingOptions()}
                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderViewStatistic()}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default LotteryGuideZHTW;
