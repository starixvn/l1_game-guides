import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
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
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>选择您想玩的筹码值。 所有投注必须在投注时间结束前完成。</li>
                <li>请注意，投注无法取消。</li>
                <li>玩家可以对游戏桌上显示的一个或多个投注选项进行投注。</li>
                <li>每轮最大总赌注为 {maxBet}</li>
            </ul>
        </li>
    );
};

const renderBettingOptions = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <li className="guide-item">
            <h2>投注选项</h2>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th colSpan={2}>选项</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="text-center">
                            4套
                        </td>
                        <td>
                            <p>从 00 到 99 中选择您要投注的号码； 如果所选号码落入七等奖，则玩家获胜。</p>
                            <p>
                                <strong>注意</strong>: 如果所选数字在七等奖的4个结果中出现N次，则奖金将乘以N。
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            特别
                        </td>
                        <td>从 00 到 99 中选择您要投注的号码； 如果所选数字与特别奖的最后 2 位数字相同，则玩家获胜。</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            头
                        </td>
                        <td>从 0 到 9 中选择您要投注的号码； 如果选择的数字与特别奖的十位数字相同，则玩家获胜。</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            尾
                        </td>
                        <td>从 0 到 9 中选择您要投注的号码； 如果选择的数字与特别奖的个位相同，则玩家获胜。</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            27套
                        </td>
                        <td>
                            <p>从 00 到 99 中选择您要投注的号码； 如果所选数字与 27 个结果的最后 2 位数字相同，则该玩家获胜。</p>
                            <p>
                                <strong>注意</strong>: 如果所选数字在 27 个结果中出现 N 次与最后 2 位数字相同，则奖金将乘以 N。
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="text-center">
                            其他
                        </td>
                        <td className="text-center">大</td>
                        <td>如果特别奖的最后 2 位数 {`>=`} 50，则玩家获胜。</td>
                    </tr>
                    <tr>
                        <td className="text-center">小</td>
                        <td>如果特别奖的最后 2 位数 {`<=`} 49，则玩家获胜。</td>
                    </tr>
                    <tr>
                        <td className="text-center">单</td>
                        <td>如果特别奖的最后 2 位数字是单数，则玩家获胜。</td>
                    </tr>
                    <tr>
                        <td className="text-center">双</td>
                        <td>如果特别奖的最后 2 位数字是双数，则玩家获胜。</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>例子:</strong>
                <ul className={Styles["many-example"]}>
                    <li>{BettingOptions4Sets(odds, fractionalOddsFormat)}</li>
                    <li>{BettingOptionsSpecial(odds, fractionalOddsFormat)}</li>
                    <li>{BettingOptionsHead(odds, fractionalOddsFormat)}</li>
                    <li>{BettingOptionsTail(odds, fractionalOddsFormat)}</li>
                    <li>{BettingOptions27Sets(odds, fractionalOddsFormat)}</li>
                </ul>
            </div>
        </li>
    );
};

const BettingOptions4Sets = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <div className={Styles[exampleTitle]}>a) 4套</div>
            <ul className="desc">
                <li>投注两个数字：07、77，赔率 = {formatOdds(odds?.["4Sets"], fractionalOddsFormat)}</li>
                <li>赌注 = 10</li>
                <li>总 赌注 = 20</li>
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
            <p>
                07 号在七等奖的结果中出现了 2 次。 支出 = (10 * {odds ? odds["4Sets"] : 0}) * 2 = {10 * (odds ? odds["4Sets"] : 0) * 2}
            </p>
        </>
    );
};
const BettingOptionsSpecial = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <div className={Styles[exampleTitle]}>b) 特别 </div>
            <ul className="desc">
                <li>投注三个数字：00、62、79，赔率 = {formatOdds(odds?.special, fractionalOddsFormat)}</li>
                <li>赌注 = 10</li>
                <li>总 赌注 = 30</li>
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
                        <td className={Styles["prize"]}>特别</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>62</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                数字 62 与特别奖的最后 2 位数字相同。 支出 = 10 * {odds?.special} = {10 * (odds?.special ?? 0)}
            </p>
        </>
    );
};
const BettingOptionsHead = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <div className={Styles[exampleTitle]}>c) 头</div>
            <ul className="desc">
                <li>投注三个数字：0、6、9，赔率 = {formatOdds(odds?.head, fractionalOddsFormat)}</li>
                <li>赌注 = 10</li>
                <li>总 赌注 = 30</li>
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
                        <td className={Styles["prize"]}>特别</td>
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
            <p>
                数字 6 与特奖的十位数相同。 支出 = 10 * {odds?.head} = {10 * (odds?.head ?? 0)}
            </p>
        </>
    );
};
const BettingOptionsTail = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <div className={Styles[exampleTitle]}>d) 尾</div>
            <ul className="desc">
                <li>投注两个数字：0、5，赔率 = {formatOdds(odds?.tail, fractionalOddsFormat)}</li>
                <li>赌注 = 10</li>
                <li>总 赌注 = 20</li>
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
                        <td className={Styles["prize"]}>特别</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>0906</span>
                                <span className={Styles["text-red"]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>所有选定的数字都与特别奖的个位不同。 支出 = 0</p>
        </>
    );
};
const BettingOptions27Sets = (odds: OddsProps | undefined, fractionalOddsFormat: boolean | undefined) => {
    return (
        <>
            <div className={Styles[exampleTitle]}>e) 27套</div>
            <ul className="desc">
                <li>投注四个数字：05、12、77、85，赔率 = {formatOdds(odds?.["27Sets"], fractionalOddsFormat)}</li>
                <li>赌注 = 10</li>
                <li>总 赌注 = 40</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th>奖品</th>
                        <th colSpan={12}>RNG彩票</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>特别</td>
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
            <p>
                数字 05 在 27 个结果中出现了两次。 支出 = (10 * {odds ? odds["27Sets"] : 0}) * 2 = {10 * (odds ? odds["27Sets"] : 0) * 2}
            </p>
            <p>
                12 号在 27 个结果中出现了一次。 支出 = 10 * {odds ? odds["27Sets"] : 0} = {10 * (odds ? odds["27Sets"] : 0)}
            </p>
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
            <h2>支付</h2>
            <ul className="desc">
                <li>中奖金额根据派彩率计算。 请注意，支付包括初始投注。</li>
                <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
            </ul>
            <table className={`table text-center table-medium`}>
                <thead>
                    <tr>
                        <th colSpan={2}>选项</th>
                        <th>支出</th>
                        <th>
                            投注限额 <br></br>最小最大）
                        </th>
                        <th className={Styles["payout-max-total-width"]}>每轮最大总赌注</th>
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
                        <td colSpan={2}>特别</td>
                        <td>{formatOdds(odds?.special, fractionalOddsFormat)}</td>
                        <td>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecial}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>头</td>
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
                        <td>单</td>
                        <td rowSpan={2}>{formatOdds(odds?.others, fractionalOddsFormat)}</td>
                        <td rowSpan={2}>
                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetOthers}
                        </td>
                    </tr>
                    <tr>
                        <td>双</td>
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
            <h2>统计</h2>
            <ul className="desc">
                <li>数据统计基于RNG彩票27个结果的最后两位数字，以帮助玩家选择自己喜欢的数字。</li>
                <li>
                    最近 100 轮每种投注类型的数据统计
                    <ul className={Styles[statsList]}>
                        <li>
                            <strong>4 套</strong>: 以七等奖成绩统计。
                        </li>
                        <li>
                            <strong>特别</strong>: 根据特别奖最后2位数字统计。
                        </li>
                        <li>
                            <strong>27 套</strong>: 以8个奖项27个结果的后2位统计。
                        </li>
                        <li>
                            <strong>头</strong>: 按特等奖的十位数统计。
                        </li>
                        <li>
                            <strong>尾</strong>: 按特奖个位数统计。
                        </li>
                        <li>
                            <strong>其他 (大/小, 单/双)</strong>: 统计每个投注选项 大/小, 单/双 的中奖率。
                        </li>
                    </ul>
                    <ul className={Styles["many-example"]}>
                        <li>
                            <div className={Styles[exampleTitle]}>a) 4 套，特殊，27 套</div>
                            <ul className={Styles[statsList]}>
                                <li>
                                    出现次数最多的 10 个数字 (<span className={Styles["text-red"]}>以红色显示</span>)
                                </li>
                                <li>
                                    出现次数最少的 10 个数字 (<span className={Styles["text-blue"]}>以蓝色显示</span>)
                                </li>
                            </ul>
                            <p className="bold">例子:</p>
                            <p>投注{`"4 套"`}类型的数据统计</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>44</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>24</span>
                                </div>
                                <p>在过去的 100 轮比赛中，44 号共有 24 次获得第 7 名</p>
                            </div>
                            <p>投注{`"27 套"`}类型的数据统计</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>00</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>0</span>
                                </div>
                                <p>在过去 100 轮的 27 个结果中，数字 00 没有出现在最后 2 位。</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>b) 头, 尾</div>
                            <p>从 0-9 计算每个数字的出现次数</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    如果总出现次数 {`>`} 10，将显示为<span className={Styles["text-red"]}>红色</span>。
                                </li>
                                <li>
                                    如果总出现次数 {`<=`} 10，将显示为
                                    <span className={Styles["text-blue"]}>蓝色</span>。
                                </li>
                            </ul>
                            <p className="bold">例子:</p>
                            <p>投注{`"头"`}类型中的数据统计</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>1</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>32</span>
                                </div>
                                <p>在过去的 100 轮中，第一名在特别奖的十位数中总共出现了 32 次。</p>
                            </div>
                            <p>投注{`"尾"`}类型的数据统计</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>7</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>4</span>
                                </div>
                                <p>7 号在过去 100 轮中共有 4 次出现在特别奖的个位数中。</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>c) 其他 (大/小, 单/双)</div>
                            <p>显示每个投注选项大/小、单/双的获胜率 (%)。</p>
                            <p className="bold">例子:</p>
                            <div className={Styles["others"]}>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-red"]}`}>单</span>
                                    <span className={`${Styles[subNumber]}`}>48%</span>
                                </div>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-white"]}`}>双</span>
                                    <span className={`${Styles[subNumber]}`}>52%</span>
                                </div>
                            </div>
                            <p>投注选项单数的中奖率为 48%，双数为 52%</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const LotteryGuideZHCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName}是一款在越南非常流行的在线彩票游戏。 玩家下注自己喜欢的数字，游戏根据8个奖项的27个结果匹配数字来确定输赢。
                    </p>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <table className={`table text-center ${Styles["table-medium"]}`}>
                                <thead>
                                    <tr>
                                        <th>奖品</th>
                                        <th colSpan={12}>RNG彩票</th>
                                        <th>结果数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>特别</td>
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
                                        <td>Fourth</td>
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
                                        <td className="bold">总 = 27</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {renderBettingOptions(odds, fractionalOddsFormat)}
                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderViewStatistic()}
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default LotteryGuideZHCN;
