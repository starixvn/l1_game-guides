import React from "react";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { FiveElements } from "../../../shared/keno/vi";

const renderGameRule = (maxBetRound: string | undefined) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi dự đoán kết quả và hoàn tất việc đặt cược trước khi hệ thống chọn ngẫu nhiên 20 quả bóng. Nếu tổng điểm của
                    20 quả bóng được chọn có kết quả trùng với lựa chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược
                    nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {maxBetRound}. <strong>Lưu ý,</strong> không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, hệ thống sẽ chọn
                    ngẫu nhiên 20 quả bóng và kết quả sẽ được hiển thị.
                </li>
            </ul>
        </>
    );
};

const bettingOptions = () => {
    return (
        <>
            <h2>Luật chơi </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Cược Tài/Xỉu</span>
                    <ul className="desc">
                        <li>
                            <strong>Tài:</strong> tổng điểm của 20 quả bóng được rút {`>=`} 811
                        </li>
                        <li>
                            <strong>Xỉu:</strong> tổng điểm của 20 quả bóng được rút {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ:</strong> 20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>4</th>
                                        <th>14</th>
                                        <th>16</th>
                                        <th>29</th>
                                        <th>34</th>
                                        <th>40</th>
                                        <th>51</th>
                                        <th>55</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                        <td colSpan={10}>Tổng điểm = 939. Cược vào {`"TÀI"`} thắng.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Cược Chẵn/Lẻ</span>
                    <ul className="desc">
                        <li>
                            <strong>Lẻ:</strong> tổng điểm của 20 trái bóng được rút là một số lẻ.
                        </li>
                        <li>
                            <strong>Chẵn:</strong> tổng điểm của 20 trái bóng được rút là một số chẵn.
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ:</strong> 20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th>4</th>
                                        <th>15</th>
                                        <th>20</th>
                                        <th>25</th>
                                        <th>26</th>
                                        <th>27</th>
                                        <th>30</th>
                                        <th>35</th>
                                        <th>36</th>
                                        <th>45</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                        <td colSpan={10}>Tổng điểm = 911. Cược vào “LẺ” thắng.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>Ví dụ:</strong> 20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th>1</th>
                                        <th>6</th>
                                        <th>7</th>
                                        <th>17</th>
                                        <th>27</th>
                                        <th>36</th>
                                        <th>44</th>
                                        <th>46</th>
                                        <th>47</th>
                                        <th>49</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                        <td colSpan={10}>Tổng điểm = 922. Cược vào “HỎA” thắng.</td>
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

const KenoProMaxGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò cá cược trực tuyến rất được yêu thích. Trò chơi bao gồm 80 quả bóng được đánh số từ 1 đến 80, hệ
                        thống sẽ lấy ngẫu nhiên 20 quả bóng trong số 80 quả bóng. Người chơi sẽ đặt cược và dự đoán tổng điểm của 20 quả
                        bóng này.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>Tiền thắng đã bao gồm tiền cược.</li>
                        <li>
                            Giới hạn cược và tỷ lệ trả thưởng trong Keno Pro Max như sau:
                            <div className="table-container">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th>Lựa Chọn</th>
                                            <th>Tỷ Lệ Trả Thưởng</th>
                                            <th>Giới Hạn Cược (Min - Max)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tài</td>
                                            <td rowSpan={4}> {formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Xỉu</td>
                                        </tr>
                                        <tr>
                                            <td>Lẻ</td>
                                        </tr>
                                        <tr>
                                            <td>Chẵn</td>
                                        </tr>
                                        <tr>
                                            <td>Kim</td>
                                            <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mộc</td>
                                            <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thủy</td>
                                            <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hỏa</td>
                                            <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thổ</td>
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
                </li>

                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default KenoProMaxGuideVI;
