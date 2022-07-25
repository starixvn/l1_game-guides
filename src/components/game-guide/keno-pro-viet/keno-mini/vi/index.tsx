import React from "react";

import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { renderTermsAndConditionsVI } from "../../../../shared";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi nhấp vào lựa chọn mong muốn và hoàn tất việc đặt cược trước khi hết thời gian quy định. </li>
                <li>
                    Hệ thống sẽ chọn ngẫu nhiên 10 quả bóng. Nếu tổng điểm của 10 quả bóng được chọn có kết quả trùng với lựa chọn của bạn,
                    người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1 phiên là{" "}
                    {maxBet}. <strong>Lưu ý,</strong> không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, hệ thống sẽ chọn
                    ngẫu nhiên 10 quả bóng và kết quả sẽ được hiển thị.
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
                            <strong>Tài:</strong> tổng điểm của 10 quả bóng được rút {`>=`} 206
                        </li>
                        <li>
                            <strong>Xỉu:</strong> tổng điểm của 10 quả bóng được rút {`<=`} 205
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ: </strong>10 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Kết Quả</th>
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
                                            <strong>Tổng điểm</strong> = 181. Cược vào XỈU thắng.
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
                            <strong>Lẻ:</strong> tổng điểm của 10 trái bóng được rút là một số lẻ.
                        </li>
                        <li>
                            <strong>Chẵn:</strong> tổng điểm của 10 trái bóng được rút là một số chẵn.
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ: </strong>10 quả bóng được lấy ngẫu nhiên gồm các số:
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
                                            <strong>Tổng điểm</strong> = 197. Cược vào LẺ thắng.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Cược Ngũ hành (Kim/Mộc/Thủy/Hỏa/Thổ)</span>
                    <ul className="desc">
                        <li>
                            <strong>Kim:</strong> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 55 đến 163
                        </li>
                        <li>
                            <strong>Mộc:</strong> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 164 đến 187
                        </li>
                        <li>
                            <strong>Thủy:</strong> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 188 đến 222
                        </li>
                        <li>
                            <strong>Hỏa:</strong> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 223 đến 246
                        </li>
                        <li>
                            <strong>Thổ:</strong> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 247 đến 355
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ: </strong>10 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Kết Quả</th>
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
                                            <strong>Tổng điểm</strong> = 237. Cược vào HỎA thắng.
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

const KenoMiniGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là phiên bản RNG Keno rút gọn. Trò chơi bao gồm 40 quả bóng được đánh số từ 1 đến 40, hệ thống sẽ lấy
                        ngẫu nhiên 10 quả bóng trong số 40 quả bóng. Người chơi sẽ đặt cược và dự đoán tổng điểm của 10 quả bóng này.{" "}
                    </p>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {bettingOptions()}
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
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
                                            <td> 1: {odds?.big}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Xỉu</td>
                                            <td> 1: {odds?.small}</td>
                                        </tr>
                                        <tr>
                                            <td>Lẻ</td>
                                            <td rowSpan={2}> 1: {odds?.odd}</td>
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
                        </li>
                        <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                    </ul>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default KenoMiniGuideVI;
