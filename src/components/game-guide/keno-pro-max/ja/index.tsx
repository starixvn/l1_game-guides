import React from "react";

import { numberWithCommas, formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsJA } from "../../../shared";
import { GameConfigProps, OddsProMaxProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { FiveElements } from "../../../shared/keno/ja";

const payouts = (odds: OddsProMaxProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>配当</h2>
            <ul className="desc">
                <li>勝金額はベットオッズに従って計算されます。</li>
                <li>配当には初期賭け金が含まれます。</li>
                <li>
                    ベットが決済されると、すべての勝金額がすぐにアカウント残高に追加されます。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>オプション</th>
                                    <th>オッズ</th>
                                    <th>
                                        ベット制限 <br></br>（最小 - 最大）
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
                                    <td>奇数</td>
                                </tr>
                                <tr>
                                    <td>偶数</td>
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
            <h2>ベットオプション</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">大/小</span>
                    <ul className="desc">
                        <li>
                            <strong>大：</strong>引かれた20個の番号付きボールの合計が {`>=`} 811
                        </li>
                        <li>
                            <strong>小：</strong>引かれた20個の番号付きボールの合計が {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>例：</strong>1から80までの80個の番号付きボールからランダムに引かれた20個の番号付きボールのセット：
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>抽選結果</th>
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
                                        <td colSpan={10}>合計 = 939。大にベットしたプレイヤーが勝利します。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">奇数/偶数</span>
                    <ul className="desc">
                        <li>
                            <strong>奇数：</strong>引かれた20個の番号付きボールの合計が奇数。
                        </li>
                        <li>
                            <strong>偶数：</strong>引かれた20個の番号付きボールの合計が偶数。
                        </li>
                    </ul>
                    <div>
                        <strong>例：</strong>1から80までの80個の番号付きボールからランダムに引かれた20個の番号付きボールのセット：
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>抽選結果</th>
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
                                        <td colSpan={10}>合計 = 911。奇数にベットしたプレイヤーが勝利します。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>例：</strong>1から80までの80個の番号付きボールからランダムに引かれた20個の番号付きボールのセット：
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>抽選結果</th>
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
                                        <td colSpan={10}>合計 = 922。火にベットしたプレイヤーが勝利します。</td>
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

const KenoProMaxGuideJA: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds, maxBet } = gameConfigs;

    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>紹介</h2>
                    <p className="content">
                        {gameName} は世界中でプレイされている非常に人気のある数字ゲームです。ゲームは1から80までの80個の番号付きボールからランダムに引かれた20個の番号付きボールでプレイされます。
                        プレイヤーは、ゲームテーブルに表示されている1つまたは複数のベットオプションにベットします。引かれた20個の番号付きボールの合計がプレイヤーの勝敗を決定します。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>ゲームルール</h2>
                    <ul className="desc">
                        <li>すべてのベットは、ベット時間が終了する前に配置する必要があります。注意：配置されたベットはキャンセルできません。</li>
                        <li>
                            ベット時間が終了すると、システムはランダムに20個の番号付きボールを引き、結果が表示されます。
                        </li>
                        <li>ラウンドあたりの最大総賭け金は {maxBetRound} です</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>

                {renderTermsAndConditionsJA()}
            </ul>
        </>
    );
};
export default KenoProMaxGuideJA; 