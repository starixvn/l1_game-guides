import React from "react";
import { numberWithCommas } from "../../../../../helpers/number-helper";
import { GameConfigProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { renderTermsAndConditionsVI } from "../../../../shared";

const renderGameRule = (maxBet: number) => {
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
                    {numberWithCommas(maxBet)}. <strong>Lưu ý,</strong> không thể hủy cược sau khi đặt.
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
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td>32</td>
                                        <td>39</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 188. Cược vào "XỈU" thắng.
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
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>7</td>
                                        <td>17</td>
                                        <td>18</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>26</td>
                                        <td>28</td>
                                        <td>31</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 233. Cược vào “LẺ” thắng.
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
                            <strong>Thuỷ:</strong> tổng điểm của 10 quả bóng được rút ra nằm trong khoảng 188 đến 222
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
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>9</td>
                                        <td>14</td>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>26</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td>32</td>
                                        <td>35</td>
                                        <td>39</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Tổng điểm</strong> = 253. Cược vào “THỔ” thắng.
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

const KenoMiniGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, maxbet, minbet, choices_maxbet } = gameConfigs;

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
                {renderGameRule(maxbet)}
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
                                            <td> 1: {odds.big}</td>
                                            <td rowSpan={4}>
                                                {numberWithCommas(minbet)} - {numberWithCommas(choices_maxbet.big)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Xỉu</td>
                                            <td> 1: {odds.small}</td>
                                        </tr>
                                        <tr>
                                            <td>Lẻ</td>
                                            <td rowSpan={2}> 1: {odds.odd}</td>
                                        </tr>
                                        <tr>
                                            <td>Chẳn</td>
                                        </tr>
                                        <tr>
                                            <td>Kim</td>
                                            <td>1: {odds.gold}</td>
                                            <td>
                                                {numberWithCommas(minbet)} - {numberWithCommas(choices_maxbet.gold)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mộc</td>
                                            <td>1: {odds.wood}</td>
                                            <td>
                                                {numberWithCommas(minbet)} - {numberWithCommas(choices_maxbet.wood)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thuỷ</td>
                                            <td>1: {odds.water}</td>
                                            <td>
                                                {numberWithCommas(minbet)} - {numberWithCommas(choices_maxbet.water)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hoả</td>
                                            <td>1: {odds.fire}</td>
                                            <td>
                                                {numberWithCommas(minbet)} - {numberWithCommas(choices_maxbet.fire)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thổ</td>
                                            <td>1: {odds.earth}</td>
                                            <td>
                                                {numberWithCommas(minbet)} - {numberWithCommas(choices_maxbet.earth)}
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
