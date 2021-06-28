import React from "react";
import { renderTermsAndConditionsVI } from "../../../../shared";
import { numberWithCommas } from "../../../../../helpers/number-helper";
import { GameConfigProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { ChoicesMaxBetProMaxProps, OddsProMaxProps } from "../../../keno-pro-max/type";
import { renderFiveElements } from "../../../../shared/keno/vi";

const renderGameRule = (maxBet: number) => {
    return (
        <li className="guide-item">
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi nhấp vào lựa chọn mong muốn và hoàn tất việc đặt cược trước khi hết thời gian quy định. </li>
                <li>
                    Hệ thống sẽ chọn ngẫu nhiên 20 quả bóng. Nếu tổng điểm của 20 quả bóng được chọn có kết quả trùng với lựa chọn của bạn,
                    người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1 phiên là{" "}
                    {numberWithCommas(maxBet)}. <strong>Lưu ý,</strong> không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, hệ thống sẽ chọn
                    ngẫu nhiên 20 quả bóng và kết quả sẽ được hiển thị.
                </li>
            </ul>
        </li>
    );
};

const bettingOptions = () => {
    return (
        <li className="guide-item">
            <h2>Luật chơi</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium">Cược Tài/Xỉu</span>
                    <ul className="desc">
                        <li>
                            <strong>Tài:</strong> tổng điểm của 20 quả bóng được rút {`>=`} 811
                        </li>
                        <li>
                            <strong>Xỉu:</strong> tổng điểm của 20 quả bóng được rút {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ:</strong>20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small left">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>13</td>
                                        <td>16</td>
                                        <td>17</td>
                                        <td>26</td>
                                        <td>28</td>
                                        <td>32</td>
                                        <td>36</td>
                                        <td>37</td>
                                    </tr>
                                    <tr>
                                        <td>43</td>
                                        <td>55</td>
                                        <td>56</td>
                                        <td>57</td>
                                        <td>60</td>
                                        <td>67</td>
                                        <td>70</td>
                                        <td>71</td>
                                        <td>74</td>
                                        <td>75</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 842. Cược vào "TÀI" thắng.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium">Cược Chẵn/Lẻ</span>
                    <ul className="desc">
                        <li>
                            <strong>Lẻ:</strong> tổng điểm của 20 trái bóng được rút là một số lẻ.
                        </li>
                        <li>
                            <strong>Chẵn:</strong> tổng điểm của 20 trái bóng được rút là một số chẵn.
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ:</strong>20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small left">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        <td>19</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>35</td>
                                        <td>37</td>
                                        <td>38</td>
                                        <td>41</td>
                                        <td>42</td>
                                        <td>44</td>
                                        <td>51</td>
                                        <td>68</td>
                                        <td>73</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 626. Cược vào “CHẴN” thắng.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {renderFiveElements()}
                    <div>
                        <strong>Ví dụ:</strong>20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small left">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>24</td>
                                        <td>34</td>
                                        <td>36</td>
                                        <td>37</td>
                                        <td>45</td>
                                    </tr>
                                    <tr>
                                        <td>47</td>
                                        <td>48</td>
                                        <td>59</td>
                                        <td>61</td>
                                        <td>62</td>
                                        <td>65</td>
                                        <td>67</td>
                                        <td>70</td>
                                        <td>74</td>
                                        <td>77</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 857. Cược vào “HỎA” thắng.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderWinningOnTable = (odds: OddsProMaxProps, minBet: number, choicesMaxBet: ChoicesMaxBetProMaxProps) => {
    return (
        <>
            Giới hạn cược và tỷ lệ trả thưởng:
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
                            <td rowSpan={4}> 1: {odds.big}</td>
                            <td rowSpan={4}>
                                {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.big)}
                            </td>
                        </tr>
                        <tr>
                            <td>Xỉu</td>
                        </tr>
                        <tr>
                            <td>Lẻ</td>
                        </tr>
                        <tr>
                            <td>Chẳn</td>
                        </tr>
                        <tr>
                            <td>Kim</td>
                            <td>1: {odds.gold}</td>
                            <td>
                                {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.gold)}
                            </td>
                        </tr>
                        <tr>
                            <td>Mộc</td>
                            <td>1: {odds.wood}</td>
                            <td>
                                {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.wood)}
                            </td>
                        </tr>
                        <tr>
                            <td>Thuỷ</td>
                            <td>1: {odds.water}</td>
                            <td>
                                {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.water)}
                            </td>
                        </tr>
                        <tr>
                            <td>Hoả</td>
                            <td>1: {odds.fire}</td>
                            <td>
                                {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.fire)}
                            </td>
                        </tr>
                        <tr>
                            <td>Thổ</td>
                            <td>1: {odds.earth}</td>
                            <td>
                                {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.earth)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export const renderContentKenoMaxOrMini = (
    odds: OddsProMaxProps,
    maxBet: number,
    minBet: number,
    choicesMaxBet: ChoicesMaxBetProMaxProps
) => {
    return (
        <>
            <li className="guide-item">
                <h2>Trả thưởng</h2>
                <ul className="desc">
                    <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                    <li>{renderWinningOnTable(odds, minBet, choicesMaxBet)}</li>
                    <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                </ul>
            </li>
            {renderTermsAndConditionsVI()}
        </>
    );
};

const KenoMaxGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, maxbet, minbet, choices_maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là phiên bản RNG Keno. Trò chơi bao gồm 80 quả bóng được đánh số từ 1 đến 80, hệ thống sẽ lấy ngẫu nhiên
                        20 quả bóng trong số 80 quả bóng. Người chơi sẽ đặt cược và dự đoán tổng điểm của 20 quả bóng này.
                    </p>
                </li>
                {renderGameRule(maxbet)}
                {bettingOptions()}
                {renderContentKenoMaxOrMini(odds, maxbet, minbet, choices_maxbet)}
            </ul>
        </div>
    );
};
export default KenoMaxGuideVI;
