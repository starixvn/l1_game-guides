import React, { useEffect } from "react";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5VI } from "../../../shared/md5-number/vi";
import ScrollToMD5 from "../../../shared/md5-number";
import Styles from "../texas-hold.module.scss";

const renderGameRule = (maxBet: string | number | undefined) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Chọn mệnh giá chip muốn đặt cược và đặt vào cược Ante.</li>
                <li>
                    <strong>Cược Ante:</strong> để bắt đầu phiên mới, Người Chơi bắt buộc phải đặt cược vào Ante. Phiên sẽ bắt đầu ngay sau
                    khi bấm nút “Chia Bài”, Người Chơi và Nhà Cái mỗi bên sẽ được chia 2 lá bài.
                </li>

                <li>
                    <strong>Cược Call:</strong> sau khi 2 lá bài được chia, Người Chơi sẽ quyết định chơi tiếp THEO BÀI hoặc dừng lại BỎ
                    BÀI.
                    <ul className="detail">
                        <li>
                            <strong>THEO BÀI:</strong> Người Chơi chấp nhận cược Call và mất tiền cược với số tiền gấp đôi ở cược Ante và 3
                            là bài chung sẽ được chia ngửa ở giữa bàn.
                        </li>
                        <li>
                            <strong>BỎ BÀI:</strong> Người Chơi chấp nhận mất tiền cược Ante và phiên chơi kết thúc.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Cược Turn và Cược River:</strong> Người Chơi lần lượt được phép đặt thêm Cược Turn và Cược River
                    <ul className="detail">
                        <li>
                            <strong>CƯỢC TURN </strong>và <strong>CƯỢC RIVER:</strong> Nếu cho rằng tay bài có tiềm năng, Người Chơi lần
                            lượt có quyền đặt thêm vào cược Turn và cược River tương ứng với số tiền ở cược Ante. Các lá bài chung thứ 4 và
                            thứ 5 sẽ lần lượt được mở.
                        </li>
                        <li>
                            <strong>XEM:</strong> Nếu không đặt cược, Người Chơi có thể chọn XEM để lần lượt mở các lá bài chung.
                        </li>
                    </ul>
                </li>
                <li>
                    Kết quả thắng thua của các loại cược được quyết định dựa trên 5 lá bài tốt nhất có thể kết hợp trong tổng số 7 lá bài (2
                    lá được chia cho mỗi bên và 5 lá bài chung).
                    <ul className="detail">
                        <li>Nếu tay bài Nhà Cái thắng tay bài Người Chơi, Người Chơi thua và mất toàn bộ tiền cược.</li>
                        <li>Nếu tay bài của Người Chơi và Nhà Cái hòa, tất cả tiền cược sẽ được hoàn trả cho Người Chơi.</li>
                        <li>
                            Nếu tay bài của Người Chơi thắng tay bài Nhà Cái:
                            <ul>
                                <li>+ Với tay bài nhỏ hơn Sảnh, thì Cược Call, Cược Turn và Cược River thắng. Cược Ante hoàn tiền.</li>
                                <li>+ Với tay bài là Sảnh hoặc lớn hơn, tất cả các cửa cược đều thắng.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Để bắt đầu phiên chơi, số tiền còn lại trong tài khoản ≥ 3 lần (lớn hơn hoặc bằng) tiền cược Ante.</li>
                <li>Tổng tiền cược tối đa của 1 phiên là {maxBet}.</li>
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
                                            <li>+ 10, J, Q, K, A {"=>"} Lá A lón nhất.</li>
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
                                                                src="/static/images/casino-holdem/sanhrong.png"
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
                                                                src="/static/images/casino-holdem/sanhthung.png"
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
                                                                src="/static/images/casino-holdem/tuquyfull.png"
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
                                                                src="/static/images/casino-holdem/culu.png"
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
                                                                src="/static/images/casino-holdem/thung.png"
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
                                                                src="/static/images/casino-holdem/sanh.png"
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
                                                                src="/static/images/casino-holdem/sam.png"
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
                                                                src="/static/images/casino-holdem/2doi.png"
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
                                                                src="/static/images/casino-holdem/doi.png"
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
                                                                src="/static/images/casino-holdem/mauthau.png"
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
                                    định thắng thua. Nếu lá bài lẻ lớn nhất của 2 bên là bằng nhau, tiếp tục so sánh lá bài lẻ cao thứ 2, và
                                    tiếp tục như vậy với các lá còn lại cho đến khi phân định được kết quả.
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
                            <div>
                                =&gt; Người Chơi thắng. Tay bài Người Chơi có hai đôi (đôi A và đôi J), tay bài Nhà Cái chỉ có một đôi (đôi
                                5).
                            </div>
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
                            <div>=&gt; Nhà Cái thắng. Cả 2 tay bài đều đôi, tay bài của Nhà Cái có đôi J lớn hơn đôi 5.</div>
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
                            <div>
                                =&gt; Nhà Cái thắng. Cả 2 tay bài đều có Hai Đôi giống nhau (Đôi A và Đôi 7), lá bài lẻ của Nhà Cái (10) lớn
                                hơn (5).
                            </div>
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
                            <div>
                                =&gt; Người Chơi và Nhà Cái hòa. Cả 2 tay bài đều có 2 đôi giống nhau (đôi A và đôi 7), lá bài lẻ (J) cũng
                                như nhau.
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                <li>
                    Khi tay bài của Người Chơi thắng tay bài của Nhà Cái:
                    <ul className="detail">
                        <li>Với tay bài nhỏ hơn Sảnh, thì Cược Call, Cược Turn và Cược River thắng. Cược Ante hoàn tiền.</li>
                        <li>Với tay bài là Sảnh hoặc lớn hơn, tất cả các cửa cược đều thắng.</li>
                    </ul>
                </li>
            </ul>
            <div className="table-container text-center">
                <table className="table table-small">
                    <thead>
                        <tr>
                            <td>Lựa Chọn</td>
                            <td>Tỷ Lệ Cược</td>
                            <td>Hạn Mức Cược (Min - Max)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ante (Tay bài nhỏ hơn Sảnh)</td>
                            <td>Push</td>
                            <td>1 - {maxBetFollowChoice?.maxBetAnteBetChoice}</td>
                        </tr>
                        <tr>
                            <td>Ante (Tay bài có Sảnh hoặc lớn hơn) </td>
                            <td>1 - {odds?.AnteBet_flush}</td>
                            <td>1 - {maxBetFollowChoice?.maxBetAnteBetChoice}</td>
                        </tr>
                        <tr>
                            <td>Call</td>
                            <td>1 - {odds?.call}</td>
                            <td>1 - {maxBetFollowChoice?.maxBetCallBetChoice}</td>
                        </tr>
                        <tr>
                            <td>Turn</td>
                            <td>1 - {odds?.turn}</td>
                            <td>1 - {maxBetFollowChoice?.maxBetTurnBetChoice}</td>
                        </tr>
                        <tr>
                            <td>River</td>
                            <td>1 - {odds?.river}</td>
                            <td>1 - {maxBetFollowChoice?.maxBetRiverBetChoice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const TexasHoldGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, isScrollMD5 } = props;
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
                        Texas Hold&apos;em là một trong những game Poker nổi tiếng thế giới. Trò chơi sử dụng một bộ bài tây 52 lá (không
                        bao gồm lá Joker) và được xào lại mỗi phiên. Người Chơi sẽ so sánh bài trực tiếp với Nhà Cái, kết quả thắng thua
                        được quyết định dựa trên sức mạnh của tay bài (5 lá) của mỗi bên.
                    </p>
                    <p className="content">
                        Ngoài ra trò chơi còn tích hợp tính năng xác thực{" "}
                        <a href="#md5" className={Styles["link"]}>
                            MD5 (Message-Digest algorithm 5)
                        </a>{" "}
                        cho phép Người Chơi tự kiểm tra tính minh bạch trong kết quả thắng thua.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice)}</li>
                <li id="md5" className="guide-item">
                    {renderMD5VI(42)}
                </li>

                {renderTermsAndConditionsVI("", 42)}
            </ul>
        </div>
    );
};
export default TexasHoldGuideVI;
