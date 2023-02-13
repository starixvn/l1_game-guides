import React, { useEffect } from "react";

import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-number";
import Styles from "../texas-hold-em.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsVI } from "../../../shared";
import { Markup } from "interweave";
import MD5 from "../../base/md5";
import { StringFormat } from "../../../../helpers/string-helper";
import { renderToString } from "react-dom/server";

const renderGameRule = (maxBet: string | number | undefined) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Chọn mệnh giá chip muốn đặt cược.</li>
                <li>
                    Người Chơi đặt cược vào Ante để bắt đầu phiên chơi. Phiên sẽ bắt đầu ngay sau khi bấm nút “Chia Bài”, Người Chơi và Nhà
                    Cái mỗi bên sẽ được chia 2 lá bài.
                </li>

                <li>
                    Hoán đổi bài
                    <ul className="detail">
                        <li>
                            Tính năng tùy chọn, có thể Bật/Tắt, cho phép Người Chơi hoán đổi 2 lá bài tẩy với Nhà Cái, trước khi các lá bài
                            tẩy của Người Chơi được lật.
                        </li>
                    </ul>
                </li>
                <li>Lưu ý: Chỉ có thể Bật/Tắt tính năng “Hoán đổi bài” trước khi phiên bắt đầu.</li>
                <li>
                    Sau khi 2 lá bài tẩy được chia và lật, Người Chơi sẽ có 2 lựa chọn Theo Bài (Call) hoặc Bỏ Bài (Fold).
                    <ul className="detail">
                        <li>
                            Nếu chọn <strong>“Bỏ Bài”</strong>, Người Chơi chấp nhận mất tiền cược và phiên chơi kết thúc.
                        </li>
                        <li>
                            Nếu chọn <strong>“Theo Bài”</strong>, 3 lá bài chung sẽ được chia và lật giữa bàn, Người Chơi phải đặt thêm 1
                            khoản tiền cược vào Call bằng 2 lần số tiền đã đặt vào Ante.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Cược Turn, Cược River</strong>
                    <ul className="detail">
                        <li>
                            <strong>Cược Turn: </strong>Trước khi lá bài chung thứ tư (lá Turn) được chia, nếu thấy tay bài có tiềm năng,
                            Người Chơi có thể tăng lượng tiền cược bằng cách đặt thêm vào cược Turn, với số tiền đã đặt vào Ante trước đó.
                        </li>
                        <li>
                            <strong>Cược River: </strong>Tương tự với lá bài chung thứ năm (lá River).
                        </li>
                    </ul>
                </li>
                <li>Người Chơi có thể bấm “Xem” nếu không muốn đặt thêm cược Turn hoặc River.</li>
                <li>
                    Kết quả thắng thua được quyết định dựa trên 5 lá bài tốt nhất có thể kết hợp trong tổng số 7 lá bài (2 lá được chia cho
                    mỗi bên và 5 lá bài chung).
                </li>
                <li>Nếu tổ hợp 5 lá bài của Người Chơi lớn hơn Nhà Cái, Người Chơi thắng và ngược lại.</li>

                <li>
                    Tổng tiền cược tối đa của 1 phiên là {maxBet}. <strong>Lưu ý</strong>, không thể hủy cược sau khi bấm “Chia Bài”.
                </li>
                <li>Bộ bài 52 lá (không bao gồm lá Joker) sẽ được xào lại sau mỗi phiên.</li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Thang sức mạnh</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">
                            <span className="title-text">Lá bài</span>
                            <ul className="desc">
                                <li>Thứ tự các lá bài từ lớn đến nhỏ: A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2.</li>
                                <li>
                                    Trong đó Ace (A) có thể tính như 1 lá lớn nhất hoặc nhỏ nhất.
                                    <ul className="detail">
                                        <li>Ví dụ: Khi tay bài có Sảnh</li>
                                        <ul>
                                            <li>+ A, 2, 3, 4, 5 {"=>"} Lá A nhỏ nhất.</li>
                                            <li>+ 10, J, Q, K, A {"=>"} Lá A lớn nhất.</li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    Không so chất (<span className={Styles["red"]}>♥</span>, <span className={Styles["black"]}>♠</span>,{" "}
                                    <span className={Styles["red"]}>♦</span>, <span className={Styles["black"]}>♣</span>) của lá bài.
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">Tay bài</span>
                            <ul className="desc">
                                <li>
                                    Xếp hạng tay bài trong Texas Hold’em từ mạnh đến yếu:
                                    <div className="table-container text-center">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <td>Tay Bài</td>
                                                    <td>Mô Tả</td>
                                                    <td>Ví Dụ</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Sảnh Rồng </strong>
                                                    </td>
                                                    <td>A, K, Q, J, 10 đồng chất</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sanhrong.png"
                                                                alt="sanhrong"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong> Thùng Phá Sảnh </strong>
                                                    </td>
                                                    <td>Tay bài gồm 5 lá đồng chất theo thứ tự</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sanhthung.png"
                                                                alt="sanhthung"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong> Tứ Quý </strong>
                                                    </td>
                                                    <td>Tay bài gồm 4 lá giống nhau</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/tuquyfull.png"
                                                                alt="tuquy"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Cù Lũ </strong>
                                                    </td>
                                                    <td>Tay bài có 3 lá giống nhau và một đôi </td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/culu.png"
                                                                alt="culu"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Thùng </strong>
                                                    </td>
                                                    <td>Tay bài gồm 5 lá đồng chất</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/thung.png"
                                                                alt="thung"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Sảnh</strong>
                                                    </td>
                                                    <td>5 lá bài tạo thành một dãy liên tiếp</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sanh.png"
                                                                alt="sanh"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Sám </strong>
                                                    </td>
                                                    <td>Có 3 lá giống nhau về giá trị</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sam.png"
                                                                alt="sam"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Hai đôi </strong>
                                                    </td>
                                                    <td>Có 2 đôi trong tổng số 5 lá</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/2doi.png"
                                                                alt="haidoi"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Đôi</strong>
                                                    </td>
                                                    <td>Tay bài có 1 đôi bất kỳ</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/doi.png"
                                                                alt="doi"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Mậu Thầu</strong>
                                                    </td>
                                                    <td>Khi tay bài không có đôi hoặc cao hơn</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/mauthau.png"
                                                                alt="mauthau"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li>
                                    Nếu tay bài của Người Chơi và Nhà Cái có cùng thang sức mạnh, khi đó các lá bài lẻ sẽ được dùng để phân
                                    định thắng thua.
                                </li>
                                <li>
                                    Nếu lá bài lẻ lớn nhất của 2 bên là bằng nhau, tiếp tục so sánh lá bài lẻ cao thứ 2, và tiếp tục như vậy
                                    với các lá còn lại cho đến khi phân định được kết quả.
                                </li>
                            </ul>
                            <p>
                                <strong>Ví Dụ</strong>
                            </p>
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Lá Bài</td>
                                            <td>Tổ Hợp 5 Lá Bài</td>
                                            <td>Kết Quả</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Người Chơi</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    A<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    A<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>5 Lá bài chung</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    6<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; Người Chơi thắng.</div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Lá Bài</td>
                                            <td>Tổ Hợp 5 Lá Bài</td>
                                            <td>Kết Quả</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Người Chơi</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    9<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    9<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    6<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>5 Lá bài chung</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    6<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    3<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; Nhà Cái thắng.</div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Lá Bài</td>
                                            <td>Tổ Hợp 5 Lá Bài</td>
                                            <td>Kết Quả</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Người Chơi</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    4<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    10<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    10<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>5 Lá bài chung</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    3<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; Nhà Cái thắng.</div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>Lá Bài</td>
                                            <td>Tổ Hợp 5 Lá Bài</td>
                                            <td>Kết Quả</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Người Chơi</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    6<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    4<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    2<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>5 Lá bài chung</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; Người Chơi và Nhà Cái hòa.</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>Tiền thắng đã bao gồm tiền cược.</li>
                <li>
                    Nếu Người Chơi thắng Nhà Cái:
                    <ul className="detail">
                        <li>Thắng với tay bài là Sám hoặc thấp hơn {`=>`} Cược Call, Turn và River thắng. Cược Ante hoàn tiền.</li>
                        <li>Thắng với tay bài là Sảnh hoặc cao hơn {`=>`} Tất cả các cửa cược đều thắng.</li>
                    </ul>
                </li>
            </ul>
            <div className="table-container text-center">
                <table className="table table-medium">
                    <thead>
                        <tr>
                            <td>Lựa Chọn</td>
                            <td>Tỷ Lệ Trả Thưởng</td>
                            <td>Hạn Mức Cược (Min - Max)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ante (Sám hoặc thấp hơn)</td>
                            <td>Hoàn Tiền</td>
                            <td>
                                {" "}
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                            </td>
                        </tr>
                        <tr>
                            <td>Ante (Sảnh hoặc cao hơn) </td>
                            <td>{formatOdds(odds?.AnteBet_flush, fractionalOddsFormat)}</td>
                            <td>
                                {" "}
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                            </td>
                        </tr>
                        <tr>
                            <td>Call</td>
                            <td>{formatOdds(odds?.call, fractionalOddsFormat)}</td>
                            <td>
                                {" "}
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetCallBetChoice}
                            </td>
                        </tr>
                        <tr>
                            <td>Turn</td>
                            <td>{formatOdds(odds?.turn, fractionalOddsFormat)}</td>
                            <td>
                                {" "}
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetTurnBetChoice}
                            </td>
                        </tr>
                        <tr>
                            <td>River</td>
                            <td>{formatOdds(odds?.river, fractionalOddsFormat)}</td>
                            <td>
                                {" "}
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetRiverBetChoice}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export const renderMD5 = (locale?: string) => {
    const steps = {
        one: "<strong>Bước 1:</strong>Copy Chuỗi MD5 sau khi bấm nút “Chia Bài”.",
        two: "<strong>Bước 2:</strong> Copy chuỗi <strong>Kết Quả</strong> sau khi lá bài chung thứ 5 (lá River) được chia",
        three: "<strong>Bước 3:</strong>: Truy cập {0} và dán Kết Quả vừa copy vào ô MD5.",
        four: "<strong>Bước 4</strong>: Bấm nút <strong>“hash darling, hash!”</strong>. So sánh chuỗi <strong>MD5 checksum</strong> vừa được tạo ra và chuỗi MD5 ở <strong>Bước 1.</strong>",
    };

    const md5 = {
        md5Base: {
            content: {
                header: "MD5 (Message-Digest algorithm 5)",
                technology: {
                    header: "Công nghệ MD5",
                    details: [
                        "<strong>MD5</strong> là công nghệ cho phép người chơi xác thực và kiểm tra tính minh bạch của kết quả trò chơi thông qua bên thứ ba.",
                        "Kết quả trò chơi sẽ được hệ thống tạo ngẫu nhiên ngay khi Người Chơi bấm nút chia bài (Chuỗi<strong>MD5</strong>)",
                        "Người chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi đặt cược (Chuỗi <strong>MD5</strong>) và kết quả cuối cùng sau khi được công bố (<strong>Kết Quả</strong>).",
                    ],
                },
                validation: {
                    header: "Tra Cứu MD5",
                    details: Object.values(steps),
                },
                noted: "Nếu 2 chuỗi trùng khớp, chứng minh kết quả được công bố không thay đổi so với kết quả được hệ thống tạo ra ngẫu nhiên trước khi các lá bài được mở.",
            },
            example: {
                header: "<strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả trò chơi",
                step1Text: steps.one,
                step2Text: steps.two,
                step3Text: steps.three,
                step4Text: steps.four,
                md5Key: "Chuỗi MD5",
                result: "Kết Quả",
                copy: "Copy",
            },
        },
        md5Note: {
            title: "Note",
            line1: "Kết quả bài sẽ được hiển thị theo thứ tự: 2 lá của Người Chơi {0}, 2 lá của Nhà Cái {1} và 5 lá bài Chung {2}",
            line2: " Trong trường hợp Người chơi hoán đổi bài với Nhà Cái khi đó thứ tự sẽ thay đổi thành: 2 lá của Nhà Cái {0}, 2 lá của Người Chơi {1} và 5 lá bài Chung.",
        },
    };

    return (
        <MD5
            locale={locale}
            resources={md5.md5Base}
            step1ImageUrl={`/static/images/texas-hold-em/md5_vi.png#v2`}
            step2ImageUrl={`/static/images/texas-hold-em/md5_result_vi.png#v2`}
            step3ImageUrl="/static/images/texas-hold-em/hash-darling.png#v2"
            step4ImageUrl="static/images/texas-hold-em/md5-checksum.png#v2"
            note={
                <>
                    <strong>{md5.md5Note.title}</strong>
                    <ul className="detail">
                        <li>
                            <Markup content={StringFormat(md5.md5Note.line1, "(J♣, 3♠)", "(2♥, Q♥)", "(4♦, 6♠, 10♥, 10♦, 10♣)")} />
                        </li>
                        <li>
                            <Markup content={StringFormat(md5.md5Note.line2, "(J♣, 3♠)", "(2♥, Q♥)")} />
                        </li>
                    </ul>
                </>
            }
        />
    );
};

const TexasHoldGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, isScrollMD5, fractionalOddsFormat, locale } = props;
    const { odds } = gameConfigs;

    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        Texas Hold&apos;em là một trong top 10 game Poker nổi tiếng thế giới. Trò chơi sử dụng một bộ bài tây 52 lá (không
                        bao gồm lá Joker) và Người Chơi sẽ so bài trực tiếp với Nhà Cái. Kết quả thắng thua sẽ được quyết định dựa trên sức
                        mạnh của tay bài (5 lá) của mỗi bên.
                    </p>
                    <p className="content">
                        Ngoài ra trò chơi còn tích hợp tính năng xác thực{" "}
                        <a href="#md5" className={Styles["link"]}>
                            MD5 (Message-Digest algorithm 5)
                        </a>{" "}
                        cho phép người chơi tự kiểm tra tính minh bạch trong kết quả thắng thua.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>

                {renderMD5(locale)}
                {renderTermsAndConditionsVI([
                    `Nếu phiên đang chơi bị gián đoạn, hệ thống sẽ bảo lưu kết quả trong vòng 24 tiếng tính từ thời điểm Người Chơi bấm
                        nút “Chia Bài”. Trong trường hợp Người Chơi không thể hoàn tất phiên bị gián đoạn trong thời gian 24 tiếng, hệ thống
                        xử lý theo các quy định sau:
                        <ul class="detail">
                            <li>
                                Nếu phiên bị gián đoạn trước khi Người Chơi bấm nút “Theo Bài” đồng nghĩa với Người Chơi chấp nhận “Bỏ Bài”.
                            </li>
                            <li>
                                Nếu phiên bị gián đoạn sau khi Người Chơi bấm nút “Theo Bài”, hệ thống sẽ mặc định chọn “Xem” cho các vòng
                                Turn và River. Thắng thua sẽ được phân định dựa trên kết quả 5 lá bài tốt nhất có thể kết hợp trong tổng số
                                7 lá bài (2 lá được chia cho mỗi bên và 5 lá bài chung) của Người Chơi và Nhà Cái.
                            </li>
                        </ul> `,
                ])}
            </ul>
        </div>
    );
};
export default TexasHoldGuideVI;
