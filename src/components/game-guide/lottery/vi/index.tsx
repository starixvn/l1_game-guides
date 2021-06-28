import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, ChoicesMaxBetProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../lottery.module.scss";

const exampleTitle = "example-title";
const tableSmall = "table-small";
const textRedLight = "text-red-light";
const renderHowToPLay = (maxbet: number) => {
    return (
        <li className="guide-item">
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn mệnh giá và nhấp vào lựa chọn bạn muốn đặt cược. </li>
                <li>
                    Bạn có thể đặt cược vào nhiều lựa chọn và không bị giới hạn số lần đặt cược. <strong>Lưu ý</strong>, không thể hủy cược
                    sau khi đặt.
                </li>
                <li>Tổng tiền cược tối đa cho 1 phiên là {numberWithCommas(maxbet)}</li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, kết quả sẽ được
                    hiển thị.
                </li>
            </ul>
        </li>
    );
};

const renderGameRule = () => {
    return (
        <li className="guide-item">
            <h2>Luật Chơi</h2>
            <p>Xổ Số RNG bao gồm 6 loại cược, tùy vào từng loại cược mà sẽ có điều kiện thắng khác nhau.</p>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>Loại Cược</th>
                        <th>Điều Kiện Thắng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">Đề Đầu</td>
                        <td>
                            <p>+ Chọn số bất kỳ từ 00 - 99. Nếu con số được chọn trùng với kết quả của giải Bảy, thì người chơi thắng.</p>
                            <p>
                                + Nếu con số được chọn xuất hiện N lần trong 4 kết quả của giải Bảy <br />
                                Tổng thắng = Tiền thắng * N
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">Đề Đặc Biệt</td>
                        <td>
                            Chọn số bất kỳ từ 00 - 99. Nếu con số được chọn trùng với 2 chữ số cuối trong kết quả của giải Đặc Biệt, thì
                            người chơi thắng.
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">Số Đầu</td>
                        <td>
                            Chọn số bất kỳ từ 0 - 9. Nếu con số được chọn trùng với chữ số hàng chục trong kết quả của giải Đặc Biệt, thì
                            người chơi thắng.
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">Số Đuôi</td>
                        <td>
                            Chọn số bất kỳ từ 0 - 9. Nếu con số được chọn trùng với chữ số hàng đơn vị trong kết quả của giải Đặc Biệt, thì
                            người chơi thắng.
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">Lô</td>
                        <td>
                            <p>
                                + Chọn số bất kỳ từ 00 - 99. Nếu con số được chọn trùng với 2 chữ số cuối trong 27 kết quả, thì người chơi
                                thắng.
                            </p>
                            <p>
                                + Nếu con số được chọn xuất hiện N lần ở 2 chữ số cuối trong 27 kết quả.
                                <br /> Tổng thắng = Tiền thắng * N
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center" rowSpan={4}>
                            Hai Cửa
                        </td>
                        <td>
                            <strong>Tài</strong>: Hai chữ số cuối của giải Đặc Biệt &#62;= 50
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Xỉu</strong>: Hai chữ số cuối của giải Đặc Biệt &#60;= 49
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Chẵn</strong>: Hai chữ số cuối của giải Đặc Biệt là số Chẵn
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Lẻ</strong>: Hai chữ số cuối của giải Đặc Biệt là số Lẻ
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>Ví dụ:</strong>
                <ul className={Styles["many-example"]}>
                    <li>{BettingOptions4Sets()}</li>
                    <li>{BettingOptionsSpecial()}</li>
                    <li>{BettingOptionsHead()}</li>
                    <li>{BettingOptionsTail()}</li>
                    <li>{BettingOptions27Sets()}</li>
                </ul>
            </div>
        </li>
    );
};

const BettingOptions4Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>a) Cược Đề Đầu</div>
            <p>Người chơi đặt cược vào hai số 07, 77. Tỷ lệ trả thưởng 1:24</p>
            <ul className="desc">
                <li>Tiền cược: 10</li>
                <li>Tổng cược: 20</li>
                <li>
                    Kết quả:
                    <table className={`table text-center ${Styles[tableSmall]}`}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Xổ Số RNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={Styles["prize"]}>Giải Bảy</td>
                                <td>
                                    <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                                    <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>14</span>
                                    <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>94</span>
                                    <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Số 07 xuất hiện hai lần trong kết quả giải Bảy. Tiền thắng = (10 * 24) * 2 = 480</p>
                </li>
            </ul>
        </>
    );
};

const BettingOptionsSpecial = () => {
    return (
        <>
            {" "}
            <div className={Styles[exampleTitle]}>b) Cược Đề Đặc Biệt</div>
            <p>Người chơi đặt cược vào ba số 00, 62, 79. Tỷ lệ trả thưởng 1:90</p>
            <ul className="desc">
                <li>Tiền cược: 10</li>
                <li>Tổng cược: 30</li>
                <li>
                    Kết quả:
                    <table className={`table text-center ${Styles[tableSmall]}`}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Xổ Số RNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={Styles["prize"]}>Giải Đặc Biệt</td>
                                <td>
                                    <div className={`bold ${Styles["number"]}`}>
                                        <span className={Styles[textRedLight]}>090</span>
                                        <span className={Styles["text-red"]}>62</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Số 62 xuất hiện ở hai số cuối giải Đặc Biệt. Tiền thắng = 10 * 90 = 900</p>
                </li>
            </ul>
        </>
    );
};

const BettingOptionsHead = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>c) Cược Số Đầu</div>
            <p>Người chơi đặt cược vào ba số 0, 6, 9. Tỷ lệ trả thưởng 1:9</p>
            <ul className="desc">
                <li>Tiền cược: 10</li>
                <li>Tổng cược: 30</li>
                <li>
                    Kết quả:
                    <table className={`table text-center ${Styles[tableSmall]}`}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Xổ Số RNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={Styles["prize"]}>Giải Đặc Biệt</td>
                                <td>
                                    <div className={`bold ${Styles["number"]}`}>
                                        <span className={Styles[textRedLight]}>090</span>
                                        <span className={Styles["text-red"]}>6</span>
                                        <span className={Styles[textRedLight]}>2</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Số 6 xuất hiện ở chữ số hàng chục của giải Đặc Biệt. Tiền thắng = 10 * 9 = 90</p>
                </li>
            </ul>
        </>
    );
};

const BettingOptionsTail = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>d) Cược Số Đuôi</div>
            <p>Người chơi đặt cược vào hai số 0, 5. Tỷ lệ trả thưởng 1:9</p>
            <ul className="desc">
                <li>Tiền cược: 10</li>
                <li>Tổng cược: 20</li>
                <li>
                    Kết quả:
                    <table className={`table text-center ${Styles[tableSmall]}`}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Xổ Số RNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={Styles["prize"]}>Giải Đặc Biệt</td>
                                <td>
                                    <div className={`bold ${Styles["number"]}`}>
                                        <span className={Styles[textRedLight]}>0906</span>
                                        <span className={Styles["text-red"]}>2</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Số 0 và 5 khác với chữ số hàng đơn vị của giải Đặc Biệt. Người chơi thua.</p>
                </li>
            </ul>
        </>
    );
};
const BettingOptions27Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>e) Cược Lô</div>
            <p>Người chơi đặt cược vào bốn số 05, 12, 77, 85. Tỷ lệ trả thưởng 1:3.6</p>
            <ul className="desc">
                <li>Tiền cược: 10</li>
                <li>Tổng cược: 40</li>
                <li>
                    Kết quả:
                    <table className={`table text-center ${Styles[tableSmall]}`}>
                        <thead>
                            <tr>
                                <th>Giải Thưởng</th>
                                <th colSpan={12}>Xổ Số RNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Đặc Biệt</td>
                                <td colSpan={12} className="bold">
                                    <span className={Styles[textRedLight]}>763</span>
                                    <span className={Styles["text-red"]}>49</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Giải Nhất</td>
                                <td colSpan={12} className="bold">
                                    <span className={Styles["text-grey"]}>684</span>00
                                </td>
                            </tr>
                            <tr>
                                <td>Giải Nhì</td>
                                <td colSpan={6} className="bold">
                                    <span className={Styles["text-grey"]}>164</span>75
                                </td>
                                <td colSpan={6} className="bold">
                                    <span className={Styles["text-grey"]}>507</span>06
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Giải Ba</td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>339</span>12
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>665</span>66
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>228</span>83
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>516</span>76
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>451</span>05
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>321</span>82
                                </td>
                            </tr>
                            <tr>
                                <td>Giải Tư</td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-grey"]}>08</span>69
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-grey"]}>03</span>60
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-grey"]}>01</span>79
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-grey"]}>84</span>05
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Giải Năm</td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>28</span>50
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>62</span>72
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>40</span>43
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>53</span>86
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>64</span>23
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>42</span>31
                                </td>
                            </tr>
                            <tr>
                                <td>Giải Sáu</td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>2</span>87
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>8</span>65
                                </td>
                                <td colSpan={4} className="bold">
                                    <span className={Styles["text-grey"]}>2</span>92
                                </td>
                            </tr>
                            <tr>
                                <td>Giải Bảy</td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>97</span>
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>26</span>
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>49</span>
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>33</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Số 05 xuất hiện hai lần trong kết quả. Tiền thắng trên số 05 = (10 * 3.6) * 2 = 72</p>
                    <p>Số 12 xuất hiện một lần trong kết quả. Tiền thắng trên số 12 = 10 * 3.6 = 36</p>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps, choiceMaxBet: ChoicesMaxBetProps, minBet: number) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                <li>Giới hạn cược và tỷ lệ trả thưởng như sau:</li>
            </ul>
            <table className={`table text-center ${Styles["table-small"]}`}>
                <thead>
                    <tr>
                        <th colSpan={2}>Loại Cược</th>
                        <th>Trả Thưởng</th>
                        <th>Giới Hạn Cược (Min-Max)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>Đề Đầu</td>
                        <td>1:{odds.Sets4}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.Sets4)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Đề Đặc Biệt</td>
                        <td>1:{odds.special}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.special)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Số Đầu</td>
                        <td>1:{odds.head}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.head)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Số Đuôi</td>
                        <td>1:{odds.tail}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.tail)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Lô</td>
                        <td>1:{odds.Sets27}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.Sets27)}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>Hai Cửa</td>
                        <td>Tài</td>
                        <td rowSpan={2}>1:{odds.others}</td>
                        <td rowSpan={2}>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.others)}
                        </td>
                    </tr>
                    <tr>
                        <td>Xỉu</td>
                    </tr>
                    <tr>
                        <td>Chẵn</td>
                        <td rowSpan={2}>1:{odds.others}</td>
                        <td rowSpan={2}>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.Sets4)}
                        </td>
                    </tr>
                    <tr>
                        <td>Lẻ</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderViewStatistic = () => {
    const statsList = "stats-list";
    const resultRow = "result-row";
    const statsResult = "stats-result";
    const subNumber = "sub-number";
    return (
        <li className="guide-item">
            <h2>Soi Cầu</h2>
            <ul className="desc">
                <li>
                    Soi cầu là hình thức thống kê dữ liệu dựa trên hai số cuối trong kết quả Xổ Số RNG, nhằm hỗ trợ người chơi trong việc
                    lựa chọn con số yêu thích. Lưu ý, dữ liệu thống kê trên từng loại cược sẽ khác nhau.
                </li>
                <li>
                    Dữ liệu được thống kê theo từng loại cược trên 100 phiên gần nhất:
                    <ul className={Styles[statsList]}>
                        <li>
                            <strong>Đề Đầu</strong>: thống kê kết quả giải Bảy.
                        </li>
                        <li>
                            <strong>Đề Đặc Biệt</strong>: thống kê kết quả hai số cuối giải Đặc Biệt.
                        </li>
                        <li>
                            <strong>Lô</strong>: thống kê hai số cuối của 27 kết quả ở toàn bộ các giải.
                        </li>
                        <li>
                            <strong>Số Đầu</strong>: thống kê kết quả số hàng chục của giải Đặc Biệt.
                        </li>
                        <li>
                            <strong>Số Đuôi</strong>: thống kê kết quả số hàng đơn vị của giải Đặc Biệt.
                        </li>
                        <li>
                            <strong>Hai Cửa (Tài/Xỉu, Chẵn/Lẻ)</strong>: thống kê tỷ lệ thắng trên từng cửa Tài/Xỉu, Chẵn/Lẻ.
                        </li>
                    </ul>
                    <ul className={Styles["many-example"]}>
                        <li>
                            <div className={Styles[exampleTitle]}>a) Đề Đầu, Đề Đặc Biệt, Lô </div>
                            <p>Hiển thị:</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    10 số xuất hiện nhiều nhất (ký hiệu màu <span className={Styles["text-red"]}>đỏ</span>)
                                </li>
                                <li>
                                    10 số ít hoặc chưa xuất hiện (ký hiệu màu <span className={Styles["text-blue"]}>xanh</span>)
                                </li>
                            </ul>
                            <p className="bold">Ví dụ:</p>
                            <p>Kết quả soi cầu số 44 cho cược “Đề Đầu”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>44</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>24</span>
                                </div>
                                <p>
                                    Số 44 có tổng số lần xuất hiện trong kết quả giải Bảy là 24 lần và thuộc nhóm 10 số xuất hiện nhiều
                                    nhất.
                                </p>
                            </div>
                            <p>Kết quả soi cầu số 00 cho cược “Lô”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>00</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>0</span>
                                </div>
                                <p>Số 00 chưa xuất hiện trong hai số cuối của 27 kết quả và thuộc nhóm 10 số ít xuất hiện.</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>b) Số Đầu, Số Đuôi</div>
                            <p>Hiển thị số lần xuất hiện của tất cả 10 số trong dãy số từ 0 - 9.</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    Nếu số lần xuất hiện &#62; 10 lần, được ký hiệu màu <span className={Styles["text-red"]}>đỏ</span>
                                </li>
                                <li>
                                    Nếu số lần xuất hiện &#60;= 10 lần, được ký hiệu màu <span className={Styles["text-blue"]}>xanh</span>
                                </li>
                            </ul>
                            <p className="bold">Ví dụ:</p>
                            <p>Kết quả soi cầu số 1 cho cược “Số Đầu”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>1</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>32</span>
                                </div>
                                <p>Số 1 có tổng số lần xuất hiện trong kết quả số hàng Chục của giải Đặc Biệt là 32 lần.</p>
                            </div>
                            <p>Kết quả soi cầu số 7 cho cược “Số Đuôi”</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>4</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>7</span>
                                </div>
                                <p>Số 7 có tổng số lần xuất hiện trong kết quả số hàng Đơn vị của giải Đặc Biệt là 4 lần.</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>c) Hai Cửa (Tài/Xỉu, Chẵn/Lẻ)</div>
                            <p>Thống kê tỷ lệ thắng trên từng cửa Tài/Xỉu, Chẵn/Lẻ.</p>
                            <p className="bold">Ví dụ:</p>
                            <div className={Styles["others"]}>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-white"]}`}>CHẴN</span>
                                    <span className={`${Styles[subNumber]}`}>52%</span>
                                </div>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-red"]}`}>LẺ</span>
                                    <span className={`${Styles[subNumber]}`}>48%</span>
                                </div>
                            </div>
                            <p>Cửa “Chẵn” có tỷ lệ thắng là 52% và “Lẻ” là 48%.</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const LotteryGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò chơi Lô Đề cá cược thu hút nhiều người chơi.Trò chơi có luật chơi và cách chơi rất đơn giản, người
                        chơi đặt cược vào con số bạn yêu thích, kết quả thắng thua sẽ được tính toán bằng cách khớp các số dựa trên 27 kết
                        quả của 8 giải thưởng.{" "}
                    </p>
                    <table className={`table text-center ${Styles["table-medium"]}`}>
                        <thead>
                            <tr>
                                <th>Giải Thưởng</th>
                                <th colSpan={12}>Xổ Số RNG</th>
                                <th>Số Lượng Kết Quả</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Đặc Biệt</td>
                                <td colSpan={12} className="bold">
                                    <span className={Styles["text-red"]}>76349</span>
                                </td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Giải Nhất</td>
                                <td colSpan={12} className="bold">
                                    68400
                                </td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Giải Nhì</td>
                                <td colSpan={6} className="bold">
                                    16475
                                </td>
                                <td colSpan={6} className="bold">
                                    50706
                                </td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td rowSpan={2} className="bold">
                                    Giải Ba
                                </td>
                                <td colSpan={4} className="bold">
                                    33912
                                </td>
                                <td colSpan={4} className="bold">
                                    66566
                                </td>
                                <td colSpan={4} className="bold">
                                    22883
                                </td>
                                <td rowSpan={2}>6</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="bold">
                                    51676
                                </td>
                                <td colSpan={4} className="bold">
                                    45105
                                </td>
                                <td colSpan={4} className="bold">
                                    32182
                                </td>
                            </tr>
                            <tr>
                                <td>Giải Tư</td>
                                <td colSpan={3} className="bold">
                                    0869
                                </td>
                                <td colSpan={3} className="bold">
                                    0360
                                </td>
                                <td colSpan={3} className="bold">
                                    0179
                                </td>
                                <td colSpan={3} className="bold">
                                    8405
                                </td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Giải Năm</td>
                                <td colSpan={4} className="bold">
                                    2850
                                </td>
                                <td colSpan={4} className="bold">
                                    6272
                                </td>
                                <td colSpan={4} className="bold">
                                    4043
                                </td>
                                <td rowSpan={2}>6</td>
                            </tr>
                            <tr>
                                <td colSpan={4} className="bold">
                                    5386
                                </td>
                                <td colSpan={4} className="bold">
                                    6423
                                </td>
                                <td colSpan={4} className="bold">
                                    4231
                                </td>
                            </tr>
                            <tr>
                                <td>Giải Sáu</td>
                                <td colSpan={4} className="bold">
                                    287
                                </td>
                                <td colSpan={4} className="bold">
                                    865
                                </td>
                                <td colSpan={4} className="bold">
                                    292
                                </td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Giải Bảy</td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>97</span>
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>26</span>
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>42</span>
                                </td>
                                <td colSpan={3} className="bold">
                                    <span className={Styles["text-red"]}>33</span>
                                </td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td colSpan={13}></td>
                                <td className="bold">Tổng = 27</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                {renderHowToPLay(maxbet)}
                {renderGameRule()}
                {renderPayouts(odds, choices_maxbet, minbet)}
                {renderViewStatistic()}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default LotteryGuideVI;
