import React from "react";

import { ENVIRONMENT } from "../../../../../common/constants";
import { renderTermsAndConditionsVI } from "../../../../shared";
import { renderMD5VI } from "../../../../shared/md5-count-down-timer/vi";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import Styles from "../keno-mini.module.scss";
import { formatOdds } from "../../../../../helpers/number-helper";

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
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, kết quả sẽ được
                    hiển thị.
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

const renderMD5Example = (environment: string | undefined) => {
    return (
        <div className="content">
            <strong> Ví dụ:</strong> Kiểm tra tính minh bạch trong kết quả.
            <ul className="desc">
                <li>
                    <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step1_vi.png?v=2" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>Chuỗi MD5:</strong> f2bbd32524fe6e2e41eaaaa0eacd6d86
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                </li>
                <li>
                    <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục Kết Quả sau khi hệ thống công bố kết quả.
                    {environment === ENVIRONMENT.sc ? (
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step2_vi.png?v=4" alt="md5-string" />
                    ) : (
                        <div className={Styles["md5-section"]}>
                            <span className={`${Styles["text"]}`}>
                                <strong>Kết Quả:</strong> {"{237}_{#26907421fad9b51da1169691982}"}
                            </span>
                            <div className={Styles["copy-box"]}>
                                <span className={Styles["copy-text"]}>Copy</span>
                            </div>
                        </div>
                    )}
                    <div>Trong đó 237 là tổng điểm của các quả bóng.</div>
                </li>
                <li>
                    <strong>Bước 3:</strong> Truy cập{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    và dán Kết Quả vừa copy vào ô MD5.
                    <div className={Styles["wrapper-img-hash"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step3.png?v=1" alt="hash-darling" />
                    </div>
                </li>
                <li>
                    <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước
                    1.
                    <div className={Styles["wrapper-img-hash"]}>
                        <img className="format-img auto-center" src="/static/images/keno-mini/md5_step4.png?v=1" alt="md5-checksum" />
                    </div>
                </li>
            </ul>
            Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.
        </div>
    );
};

const KenoMiniGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        Keno Mini / Keno Mini 2 là phiên bản RNG Keno rút gọn với 40 bóng. Hệ thống sẽ lấy ngẫu nhiên 10 quả bóng trong số
                        40 quả bóng được đánh số từ 1 đến 40. Người chơi sẽ đặt cược và dự đoán tổng điểm của 10 quả bóng này.
                    </p>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain)}
                {bettingOptions()}
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>Tỷ lệ cược đã bao gồm tiền vốn.</li>
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
                                        <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                        <td rowSpan={4}>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Xỉu</td>
                                        <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Lẻ</td>
                                        <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
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
                    </ul>
                </li>
                <li id="md5" className="guide-item">
                    {renderMD5VI()}
                    {renderMD5Example(environment)}
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default KenoMiniGuideVI;
