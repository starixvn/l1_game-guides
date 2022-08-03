import React from "react";

import { renderTermsAndConditionsVI } from "../../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { OddsProMaxProps } from "../../../keno-pro-max/type";
import { FiveElements } from "../../../../shared/keno/vi";

const renderGameRule = (maxBet: string | undefined) => {
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
                    {maxBet}. <strong>Lưu ý,</strong> không thể hủy cược sau khi đặt.
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
                        <strong>Ví dụ: </strong>20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Kết Quả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>7</td>
                                        <td>11</td>
                                        <td>17</td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>23</td>
                                        <td>33</td>
                                        <td>40</td>
                                        <td>41</td>
                                        <td>42</td>
                                    </tr>
                                    <tr>
                                    <td>45</td>
                                        <td>48</td>
                                        <td>56</td>
                                        <td>58</td>
                                        <td>59</td>
                                        <td>69</td>
                                        <td>71</td>
                                        <td>72</td>
                                        <td>73</td>
                                        <td>77</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 883. Cược vào TÀI thắng.
                                        </td>
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
                        <strong>Ví dụ: </strong>20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Kết Quả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>4</td>
                                        <td>5</td>
                                        <td>8</td>
                                        <td>18</td>
                                        <td>23</td>
                                        <td>30</td>
                                        <td>35</td>
                                        <td>37</td>
                                        <td>39</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                    <td>42</td>
                                        <td>44</td>
                                        <td>46</td>
                                        <td>49</td>
                                        <td>50</td>
                                        <td>56</td>
                                        <td>60</td>
                                        <td>61</td>
                                        <td>71</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 798. Cược vào CHẴN thắng.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>Ví dụ: </strong>20 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Kết Quả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>15</td>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>27</td>
                                        <td>29</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td>37</td>
                                        <td>40</td>
                                        <td>42</td>
                                        <td>47</td>
                                        <td>48</td>
                                        <td>52</td>
                                        <td>57</td>
                                        <td>62</td>
                                        <td>68</td>
                                        <td>71</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 698. Cược vào MỘC thắng.
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

export const renderWinningOnTable = (odds: OddsProMaxProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>            
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
                            <td rowSpan={4}> 1: {odds?.big}</td>
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
                            <td>1: {odds?.gold}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                            </td>
                        </tr>
                        <tr>
                            <td>Mộc</td>
                            <td>1: {odds?.wood}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                            </td>
                        </tr>
                        <tr>
                            <td>Thủy</td>
                            <td>1: {odds?.water}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                            </td>
                        </tr>
                        <tr>
                            <td>Hỏa</td>
                            <td>1: {odds?.fire}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                            </td>
                        </tr>
                        <tr>
                            <td>Thổ</td>
                            <td>1: {odds?.earth}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export const renderContentKenoMaxOrMini = (odds: OddsProMaxProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <li className="guide-item">
                <h2>Trả thưởng</h2>
                <ul className="desc">
                    <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                    <li>Tỷ lệ cược đã bao gồm tiền vốn.</li>   
                    {renderWinningOnTable(odds, maxBetFollowChoice)}
                </ul>
            </li>
            {renderTermsAndConditionsVI()}
        </>
    );
};

const KenoMaxGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là phiên bản RNG Keno. Trò chơi bao gồm 80 quả bóng được đánh số từ 1 đến 80, hệ thống sẽ lấy ngẫu nhiên
                        20 quả bóng trong số 80 quả bóng. Người chơi sẽ đặt cược và dự đoán tổng điểm của 20 quả bóng này.
                    </p>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {bettingOptions()}
                {renderContentKenoMaxOrMini(odds, maxBetFollowChoice)}
            </ul>
        </>
    );
};
export default KenoMaxGuideVI;
