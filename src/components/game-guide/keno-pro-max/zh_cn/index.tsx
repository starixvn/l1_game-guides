import React from "react";

import { numberWithCommas, formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps, OddsProMaxProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { FiveElements } from "../../../shared/keno/zh_cn";

const payouts = (odds: OddsProMaxProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>支出</h2>
            <ul className="desc">
                <li>中奖金额根据派彩率计算。</li>
                <li>支付包括初始投注。</li>
                <li>
                    投注结算后，所有中奖金额都会立即添加到您的账户余额中。
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>选项</th>
                                    <th>赔率</th>
                                    <th>
                                        投注限额 <br></br>（最小最大）
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
                                    <td>单数</td>
                                </tr>
                                <tr>
                                    <td>双数</td>
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
            <h2>投注选项</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">大/小</span>
                    <ul className="desc">
                        <li>
                            <strong>大:</strong> 抽出的 20 个编号的球的总和 {`>=`} 811
                        </li>
                        <li>
                            <strong>小:</strong> 抽出的 20 个编号的球的总和为 {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>示例:</strong> 从 80 个编号的球中随机抽取 20 个编号的球
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>绘制结果</th>
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
                                        <td colSpan={10}>总和 = {`939。投注"大"`}的玩家将获胜。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">单/双</span>
                    <ul className="desc">
                        <li>
                            <strong>单数:</strong> 抽出的 20 个编号球的总和为单数。
                        </li>
                        <li>
                            <strong>双数:</strong> 抽出的20个编号的球之和为双数。
                        </li>
                    </ul>
                    <div>
                        <strong>示例:</strong> 从 80 个编号的球中随机抽取 20 个编号的球
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>绘制结果</th>
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
                                        <td colSpan={10}>总和 = {`911。投注"单"`}的玩家将获胜。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>示例:</strong> 从 80 个编号的球中随机抽取 20 个编号的球
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>绘制结果</th>
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
                                        <td colSpan={10}>总和 = {`922。投注"火"`}的玩家将获胜。</td>
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

const KenoProMaxGuideZHCN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds, maxBet } = gameConfigs;

    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        {gameName} 是一款广受欢迎的数字游戏，在世界各地都在玩。 游戏使用从 1 到 80 的 80 个编号球中随机抽取 20
                        个编号的球进行。 玩家对游戏桌上显示的一个或多个投注选项下注。 抽取的 20 个编号球的总和将决定玩家的输赢。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>游戏规则</h2>
                    <ul className="desc">
                        <li>所有投注必须在投注时间到期之前进行。 注意，投注无法取消。</li>
                        <li>投注时间一到，系统将随机抽取20个编号的球并显示结果。</li>
                        <li>每轮最大总赌注为 {maxBetRound}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>

                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default KenoProMaxGuideZHCN;
