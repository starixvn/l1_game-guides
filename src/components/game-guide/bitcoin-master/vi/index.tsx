import React from "react";
import Image from "next/image";

import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../bitcoin-master.module.scss";

const BitcoinMasterGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet } = gameConfigs;
    const maxBetRound = numberWithCommas(maxbet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là thể loại game cá cược hoàn toàn mới, cho phép người chơi đặt cược dựa trên giá trị Bitcoin trong 60
                        giây kế tiếp. Có 4 lựa chọn để đặt cược: Tăng, Giảm, Chẵn, Lẻ.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc">
                        <li>
                            Người chơi dự đoán mức giá Bitcoin (Kết quả) được ghi nhận cuối cùng sau 60 giây bằng cách đặt cược vào các lựa
                            chọn với mức cược mong muốn.
                        </li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Loại Cược</th>
                                            <th>Lựa Chọn</th>
                                            <th>Điều Kiện Thắng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Tăng/Giảm</td>
                                            <td>Tăng</td>
                                            <td className="text-start">
                                                Mức giá cuối cùng sau 60 giây cao hơn mức giá khởi điểm (Giá đặt lệnh).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Giảm</td>
                                            <td className="text-start">
                                                Mức giá cuối cùng sau 60 giây thấp hơn mức giá khởi điểm (Giá đặt lệnh).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Chẵn/Lẻ</td>
                                            <td>Chẵn</td>
                                            <td className="text-start">
                                                Mức giá cuối cùng sau 60 giây là số Chẵn.
                                                <br></br>+ Lưu ý: Chỉ tính trên chữ số hàng đơn vị, không bao gồm phần thập phân.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Lẻ</td>
                                            <td className="text-start">
                                                Mức giá cuối cùng sau 60 giây là số Lẻ.
                                                <br></br>+ Lưu ý: Chỉ tính trên chữ số hàng đơn vị, không bao gồm phần thập phân.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>Có 2 loại cược: Tăng/Giảm, Chẵn/Lẻ. Trong 1 phiên, với mỗi loại cược, bạn chỉ được đặt vào 1 lựa chọn.</li>
                        <li className="contentBeforeEmpty">
                            <strong> Ví dụ:</strong> Với loại cược Tăng/Giảm, người chơi chỉ được chọn 1 cửa duy nhất Tăng hoặc Giảm.
                        </li>
                        <li>
                            Người chơi có thể tăng lượng tiền đặt cược bằng cách đặt thêm vào cùng 1 lựa chọn trước khi thời gian đặt cược
                            kết thúc.
                        </li>
                        <li>Tổng tiền cược tối đa cho 1 phiên là {maxBetRound}. Lưu ý, không thể hủy cược sau khi đặt.</li>
                        <li>
                            Với loại cược Tăng/Giảm, tiền cược sẽ được hoàn trả trong trường hợp giá trị Bitcoin không thay đổi sau 60 giây,
                            mức giá cuối cùng (Kết quả) bằng giá khởi điểm (Giá đặt lệnh).
                        </li>
                        <li>
                            Giá trị Bitcoin được sử dụng trong game là giá trị trung bình theo thời gian thực từ 4 sàn giao dịch:
                            <div className={Styles["wrapper"]}>
                                <div className={Styles["wrapper-binance"]}>
                                    <Image
                                        src={`/static/images/bitcoin-master/Binance.png`}
                                        alt="Binance"
                                        width={1856}
                                        height={400}
                                        layout="responsive"
                                        loading="eager"
                                        quality={100}
                                        priority
                                    />
                                </div>
                                <div className={Styles["wrapper-huobi"]}>
                                    <Image
                                        src={`/static/images/bitcoin-master/Huobi.png`}
                                        alt="Huobi"
                                        width={1600}
                                        height={397}
                                        layout="responsive"
                                        loading="eager"
                                        quality={100}
                                        priority
                                    />
                                </div>
                                <div className={Styles["wrapper-okex"]}>
                                    <Image
                                        src={`/static/images/bitcoin-master/OKEX.png`}
                                        alt="OKEX"
                                        width={2669}
                                        height={946}
                                        layout="responsive"
                                        loading="eager"
                                        quality={100}
                                        priority
                                    />
                                </div>
                                <div className={Styles["wrapper-mexc"]}>
                                    <Image
                                        src={`/static/images/bitcoin-master/mexc_global.png`}
                                        alt="mexc_global"
                                        width={697}
                                        height={154}
                                        layout="responsive"
                                        loading="eager"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </li>
                        <strong>Ví dụ:</strong>
                        <ul className="desc">
                            <li className="contentBeforeEmpty">
                                Mức giá Bitcoin ở giây thứ 1 (Giá đặt lệnh) = <strong>48,761.13</strong>
                            </li>
                            <li className="contentBeforeEmpty">
                                Mức giá Bitcoin ở giây thứ 60 (Kết quả) = <strong>49,011.08</strong>
                            </li>
                        </ul>
                    </ul>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            Tăng/Giảm
                            <ul className="desc">
                                <li className="contentBeforeEmpty">
                                    + Mức giá ở giây thứ 60 (Kết quả) cao hơn mức giá ở giây thứ 1 (Giá đặt lệnh) {`=>`} Bitcoin tăng giá,
                                    cược vào lựa chọn Tăng sẽ thắng.
                                </li>
                            </ul>
                        </li>
                        <li className="contentBeforeEmpty">
                            Chẵn/Lẻ
                            <ul className="desc">
                                <li className="contentBeforeEmpty">
                                    + Mức giá ở giây thứ 60 là số lẻ (49,011) {`=>`} Cược vào lựa chọn Lẻ sẽ thắng.
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="desc">
                        <li>
                            <strong>Nhà cái cân cửa</strong>: với cùng 1 loại cược, trong trường hợp tiền đặt cược giữa 2 cửa chênh lệch
                            nhau, số tiền chênh lệch sẽ được hoàn trả vào tài khoản người chơi đặt cược sau.
                            <br></br>
                            <strong>Ví dụ:</strong> Với loại cược Tăng/Giảm, người chơi A đặt 80 vào cửa Tăng, người chơi B đặt 50 vào cửa
                            Giảm, người chơi C đặt 60 vào cửa Giảm. Hệ thống sẽ tính toán cân bằng lượng tiền giữa 2 cửa và sẽ trả lại cho C
                            (người chơi đặt cược sau) 30
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
                            Tỷ lệ trả thưởng đã bao gồm tiền cược.
                            <div className="table-container">
                                <table className="table text-center table-medium left">
                                    <thead>
                                        <tr>
                                            <th>Loại Cược</th>
                                            <th>Lựa Chọn</th>
                                            <th>Tỷ Lệ Trả Thưởng</th>
                                            <th>
                                                Giới Hạn Cược
                                                <br /> (Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Tăng/Giảm</td>
                                            <td>Tăng</td>
                                            <td rowSpan={2}>1: {odds.up}</td>
                                            <td rowSpan={4}>
                                                {minbet} - {maxBetRound}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Giảm</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>Chẵn/Lẻ</td>
                                            <td>Chẵn</td>
                                            <td rowSpan={2}>1: {odds.odd}</td>
                                        </tr>
                                        <tr>
                                            <td>Lẻ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsVI("", 43)}
            </ul>
        </>
    );
};
export default BitcoinMasterGuideVI;
