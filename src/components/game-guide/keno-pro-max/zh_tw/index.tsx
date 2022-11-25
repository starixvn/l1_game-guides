import React from "react";

import { numberWithCommas, formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps, OddsProMaxProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { FiveElements } from "../../../shared/keno/zh_tw";

const payouts = (
    odds: OddsProMaxProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <h2>支出</h2>
            <ul className="desc">
                <li>中獎金額根據派彩率計算。</li>
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
                                    <td rowSpan={4}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>小</td>
                                </tr>
                                <tr>
                                    <td>單數</td>
                                </tr>
                                <tr>
                                    <td>雙數</td>
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
                            <strong>大:</strong> 抽出的 20 個編號的球的總和 {`>=`} 811
                        </li>
                        <li>
                            <strong>小:</strong> 抽出的 20 個編號的球的總和為 {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>示例:</strong> 從 80 個編號的球中隨機抽取 20 個編號的球
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>繪製結果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>4</td>
                                        <td>14</td>
                                        <td>16</td>
                                        <td>29</td>
                                        <td>34</td>
                                        <td>40</td>
                                        <td>51</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>67</td>
                                        <td>70</td>
                                        <td>72</td>
                                        <td>75</td>
                                        <td>77</td>
                                        <td>78</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>總和 = {`939。投注"大"`}的玩家將獲勝。</td>
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
                            <strong>單數:</strong> 抽出的 20 個編號球的總和為單數。
                        </li>
                        <li>
                            <strong>雙數:</strong> 抽出的20個編號的球之和為雙數。
                        </li>
                    </ul>
                    <div>
                        <strong>示例:</strong> 從 80 個編號的球中隨機抽取 20 個編號的球
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>繪製結果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>15</td>
                                        <td>20</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>35</td>
                                        <td>36</td>
                                        <td>45</td>
                                    </tr>
                                    <tr>
                                        <td>49</td>
                                        <td>54</td>
                                        <td>56</td>
                                        <td>58</td>
                                        <td>61</td>
                                        <td>62</td>
                                        <td>74</td>
                                        <td>76</td>
                                        <td>78</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>總和 = {`911。投注"單"`}的玩家將獲勝。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>示例:</strong> 從 80 個編號的球中隨機抽取 20 個編號的球
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>繪製結果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>17</td>
                                        <td>27</td>
                                        <td>36</td>
                                        <td>44</td>
                                        <td>46</td>
                                        <td>47</td>
                                        <td>49</td>
                                    </tr>
                                    <tr>
                                        <td>52</td>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>62</td>
                                        <td>63</td>
                                        <td>65</td>
                                        <td>72</td>
                                        <td>74</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>總和 = {`922。投注"火"`}的玩家將獲勝。</td>
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

const KenoProMaxGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds, maxBet } = gameConfigs;

    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        {gameName} 是一款廣受歡迎的數字遊戲，在世界各地都在玩。 遊戲使用從 1 到 80 的 80 個編號球中隨機抽取 20
                        個編號的球進行。 玩家對遊戲桌上顯示的一個或多個投注選項下注。 抽取的 20 個編號球的總和將決定玩家的輸贏。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>所有投注必須在投注時間到期之前進行。請注意，投注無法取消。</li>
                        <li>投注時間一到，系統將隨機抽取20個編號的球並顯示結果。</li>
                        <li>每輪最大總賭注為 {maxBetRound}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>

                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default KenoProMaxGuideEN;
