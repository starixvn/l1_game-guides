import React from "react";
import { numberWithCommas } from "../../../../../helpers/number-helper";
import { GameConfigProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { renderContentKenoMaxOrMini } from "../../keno-max/vi";

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
                    <span className="font-weight-medium">Cược Tài/Xỉu</span>
                    <ul className="desc">
                        <li>
                            <strong>Tài:</strong> tổng điểm của 10 quả bóng được rút {`>=`} 206
                        </li>
                        <li>
                            <strong>Xỉu:</strong> tổng điểm của 10 quả bóng được rút {`<=`} 205
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ:</strong>10 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small left">
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
                    <span className="font-weight-medium">Cược Chẵn/Lẻ</span>
                    <ul className="desc">
                        <li>
                            <strong>Lẻ:</strong> tổng điểm của 10 trái bóng được rút là một số lẻ.
                        </li>
                        <li>
                            <strong>Chẵn:</strong> tổng điểm của 10 trái bóng được rút là một số chẵn.
                        </li>
                    </ul>
                    <div>
                        <strong>Ví dụ:</strong>10 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small left">
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
                    <span className="font-weight-medium">Cược Ngũ hành (Kim/Mộc/Thủy/Hỏa/Thổ)</span>
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
                        <strong>Ví dụ:</strong>10 quả bóng được lấy ngẫu nhiên gồm các số:
                        <div className="table-container">
                            <table className="table text-center table-small left">
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
        <div>
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
                {renderContentKenoMaxOrMini(odds, maxbet, minbet, choices_maxbet)}
            </ul>
        </div>
    );
};
export default KenoMiniGuideVI;
