import React from "react";
import { formatOdds } from "../../../../helpers/number-helper";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../casino-hold-em.module.scss";
import CasinoHoldGuideTemplate from "./default";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

class CasinoHoldGuideVI extends CasinoHoldGuideTemplate<GameGuideProps<GameConfigProps, MaxBetChoicesProps>, any> {
    renderIntroduce() {
        return (
            <>
                <h2>Giới thiệu</h2>
                <p className="content">
                    Casino Hold&apos;em là một trong những game bài trực tuyến được yêu thích nhất tại các sòng Casino. Trò chơi có luật
                    chơi rất đơn giản, sử dụng một bộ bài tây 52 lá (không bao gồm lá Joker) và Người Chơi sẽ so bài trực tiếp với Nhà Cái.
                    Thắng thua sẽ được quyết định dựa trên sức mạnh tay bài (5 lá) của mỗi bên.
                </p>
                <p className="content">
                    Ngoài ra trò chơi còn tích hợp tính năng xác thực{" "}
                    <a href="#md5" className={Styles["link"]}>
                        MD5 (Message-Digest algorithm 5)
                    </a>{" "}
                    cho phép Người Chơi tự kiểm tra tính minh bạch trong kết quả thắng thua.
                </p>
            </>
        );
    }

    renderGameRule() {
        const { maxBetFollowChoice } = this.props;
        const maxBet = maxBetFollowChoice?.maxBetRound ?? 0;
        return (
            <>
                <h2>Cách chơi</h2>
                <ul className="desc">
                    <li>Người Chơi chọn mệnh giá chip muốn đặt cược.</li>
                    <li>Sẽ có 2 lựa chọn để đặt cược Ante và AA, trong đó Ante là lựa chọn bắt buộc để bắt đầu phiên chơi.</li>
                    <li>
                        Phiên sẽ bắt đầu ngay sau khi bấm nút &quot;Chia Bài&quot;, Người Chơi và Nhà Cái mỗi bên sẽ được chia 2 lá bài,
                        đồng thời 3 lá bài chung (Flop cards) sẽ được chia và lật ở giữa bàn.{" "}
                    </li>
                    <li>
                        Hoán đổi bài
                        <ul className="detail">
                            <li>
                                Tính năng tùy chọn, có thể Bật/Tắt, cho phép Người Chơi hoán đổi 2 lá bài tẩy với Nhà Cái, trước khi các lá
                                bài tẩy của Người Chơi được lật.
                            </li>
                        </ul>
                    </li>
                    <li>Lưu ý: Chỉ có thể Bật/Tắt tính năng “Hoán đổi bài” trước khi phiên bắt đầu.</li>
                    <li>
                        Sau khi 3 lá bài chung được chia, người chơi sẽ có 2 lựa chọn Theo Bài (Call) hoặc Bỏ Bài (Fold).
                        <ul className="detail">
                            <li>
                                Nếu chọn <strong>&quot;Bỏ Bài&quot;</strong>, Người Chơi chấp nhận mất tiền cược và phiên chơi kết thúc.
                            </li>
                            <li>
                                Nếu chọn <strong>&quot;Theo Bài&quot;</strong>, 2 lá bài chung tiếp theo sẽ được chia và lật giữa bàn, Người
                                Chơi phải đặt thêm 1 khoản tiền cược vào Call bằng 2 lần số tiền đã đặt vào Ante.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Kết quả thắng thua được quyết định dựa trên 5 lá bài tốt nhất có thể kết hợp trong tổng số 7 lá bài (2 lá được chia
                        cho mỗi bên và 5 lá bài chung).
                    </li>
                    <li>Nếu tổ hợp 5 lá bài của Người Chơi lớn hơn Nhà Cái, Người Chơi thắng và ngược lại.</li>
                    <li>
                        Tổng tiền cược tối đa của 1 phiên là {maxBet}. <strong>Lưu ý,</strong> không thể hủy cược sau khi bấm &quot;Chia
                        Bài&quot;.{" "}
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
                                    <li>
                                        Thứ tự các lá bài từ lớn đến nhỏ: Ace (A), King (K), Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3, 2
                                    </li>
                                    <li>
                                        Trong đó Ace (A) có thể tính như 1 lá lớn nhất hoặc nhỏ nhất.
                                        <div className="desc">
                                            <strong>Ví dụ:</strong>
                                            <ul className="desc">
                                                <li>Ace, 2, 3, 4, 5 {"=>"} Ace nhỏ nhất</li>
                                                <li>10, J, Q, K, Ace {"=>"} Ace lớn nhất</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        Không so chất (<span className={Styles["black"]}>♠</span>,{" "}
                                        <span className={Styles["black"]}>♣</span>, <span className={Styles["red"]}>♦</span>,{" "}
                                        <span className={Styles["red"]}>♥</span>) của lá bài.
                                    </li>
                                </ul>
                            </li>
                            <li className="number-dot-number">
                                <span className="title-text">Tay bài</span>
                                <ul className="desc">
                                    <li>
                                        Xếp hạng tay bài trong Casino Hold&apos;em từ mạnh đến yếu:
                                        <div className="table-container text-center">
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <td>Tay Bài</td>
                                                        <td>Mô tả</td>
                                                        <td>Ví dụ</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong>Sảnh Rồng </strong>
                                                        </td>
                                                        <td>Ace, K, Q, J, 10 đồng chất</td>
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
                                                            <strong>Thùng Phá Sảnh</strong>
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
                                                            <strong>Tứ Quý</strong>
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
                                                            <strong>Cù Lũ</strong>
                                                        </td>
                                                        <td>Tay bài có 3 lá giống nhau và một đôi</td>
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
                                                            <strong>Thùng</strong>
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
                                                            <strong>Sám</strong>
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
                                                            <strong>Hai đôi</strong>
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
                                        Nếu tay bài của Người Chơi và Nhà Cái có cùng thang sức mạnh, khi đó các lá bài lẻ sẽ được dùng để
                                        phân định thắng thua.
                                    </li>
                                    <li>
                                        Nếu so lá bài lẻ có giá trị cao nhất, Người Chơi và Nhà Cái &quot;Hòa&quot; =&gt; So tiếp lá bài lẻ
                                        cao thứ hai, thứ ba... cho đến khi phân định được kết quả.
                                    </li>
                                </ul>
                                <p>
                                    <strong>Ví dụ</strong>
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
                                <div>=&gt; Người Chơi thắng</div>
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
                                <div>=&gt; Kết quả &quot;Hòa&quot;</div>
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
                                <div>=&gt; Nhà Cái thắng</div>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">Đặt cược</span>
                        <ul className="style-number-dot-number">
                            <li className="number-dot-number">
                                <span className="title-text">Cược Ante</span>
                                <ul className="desc">
                                    <li>
                                        <strong>Ante</strong> là cược chính, Người Chơi bắt buộc phải đặt cược vào Ante để có thể bắt đầu
                                        phiên chơi.{" "}
                                    </li>
                                    <li>
                                        Kết quả thắng thua được quyết định dựa trên 5 lá bài tốt nhất có thể kết hợp trong tổng số 7 lá bài
                                        (2 lá được chia cho mỗi bên và 5 lá bài chung).{" "}
                                    </li>
                                    <li>Nếu tổ hợp 5 lá bài của Người Chơi lớn hơn Nhà Cái {"=>"} Người Chơi thắng và ngược lại.</li>
                                </ul>
                            </li>
                            <li className="number-dot-number">
                                <span className="title-text">Cược AA</span>
                                <ul className="desc">
                                    <li>
                                        <strong>Cược AA</strong> là cược phụ, tùy chọn có thể đặt thêm nếu bạn muốn.{" "}
                                    </li>
                                    <li>
                                        Cược AA không phụ thuộc vào kết quả của ván bài chính, vì vậy bạn có thể thua cược chính nhưng vẫn
                                        thắng cược phụ.
                                    </li>
                                    <li>
                                        Thắng thua trên cược phụ AA sẽ được tính dựa trên 5 lá bài gồm 2 lá được chia cho Người Chơi và 3 lá
                                        bài bài chung (Flop cards), và Người Chơi không so bài với Nhà Cái. <br />
                                        <strong>Lưu ý:</strong> cược phụ chỉ được tính khi Người Chơi chọn &quot;Theo Bài&quot;, nếu chọn
                                        &quot;Bỏ Bài&quot; thì cược phụ cũng bị tính thua.
                                    </li>
                                    <li>Điều kiện thắng cược phụ AA, nếu tay bài Người Chơi có đôi Ace hoặc cao hơn (Hai Đôi, Sám…)</li>
                                </ul>
                            </li>
                            <li className="number-dot-number">
                                <span className="title-text">Cược Call</span>
                                <ul className="desc">
                                    <li>
                                        Call là khoản tiền cược mà Người Chơi phải đặt thêm khi chọn &quot;Theo Bài&quot; và bằng 2 lần số
                                        tiền đã đặt vào Ante.{" "}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">So bài</span>
                        <ul className="desc">
                            <li>
                                Tay bài của Nhà Cái phải có tối thiểu một đôi 4 hoặc cao hơn (Đôi 5, Hai Đôi, Sảnh, Thùng...) để thỏa điều
                                kiện khi so bài với Người Chơi.
                            </li>
                        </ul>
                        <div className="table-container text-center">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Kết Quả</td>
                                        <td>Nhà Cái thỏa điều kiện so bài</td>
                                        <td>Nhà Cái không thỏa điều kiện so bài</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tay bài Người Chơi cao hơn Nhà Cái</td>
                                        <td>Người Chơi thắng cược Ante và Call</td>
                                        <td rowSpan={3}>
                                            Người Chơi thắng <strong>cược Ante;</strong> tiền cược vào <strong>Call</strong> được hoàn trả
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tay bài Người Chơi thấp hơn Nhà Cái</td>
                                        <td>Người Chơi thua cược Ante và Call</td>
                                    </tr>
                                    <tr>
                                        <td>Tay bài Người Chơi bằng Nhà Cái</td>
                                        <td>Cược Ante và Call đều được hoàn trả</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </>
        );
    }

    renderPayout() {
        const { gameConfigs, fractionalOddsFormat } = this.props;
        const { odds } = gameConfigs;
        return (
            <>
                <h2>Trả thưởng</h2>
                <ul className="desc">
                    <li>Tiền cược vào Ante, AA, Call sẽ có mức trả thưởng tương ứng khác nhau.</li>
                    <li>Tỷ lệ cược đã bao gồm tiền vốn.</li>
                </ul>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">Cược Ante</span>
                        <div className="table-container text-center">
                            <table className="table table-small">
                                <thead>
                                    <tr>
                                        <td>Tay Bài</td>
                                        <td>Tỷ Lệ Trả Thưởng</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sảnh Rồng </td>
                                        <td>{formatOdds(odds?.AnteBet_royalFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Thùng Phá Sảnh</td>
                                        <td>{formatOdds(odds?.AnteBet_straightFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Tứ Quý</td>
                                        <td>{formatOdds(odds?.AnteBet_fourKind, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Cù Lũ</td>
                                        <td>{formatOdds(odds?.AnteBet_fullHouse, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Thùng</td>
                                        <td>{formatOdds(odds?.AnteBet_flush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Sảnh</td>
                                        <td rowSpan={5}>{formatOdds(odds?.AnteBet_straight, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Sám</td>
                                    </tr>
                                    <tr>
                                        <td>Hai Đôi</td>
                                    </tr>
                                    <tr>
                                        <td>Đôi</td>
                                    </tr>
                                    <tr>
                                        <td>Mậu Thầu</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">Cược Call</span>
                        <ul className="desc">
                            <li>Tỷ lệ cược cho Call là {formatOdds(odds?.CallBet_callBet, fractionalOddsFormat)}</li>
                        </ul>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">Cược AA</span>
                        <div className="table-container">
                            <div className="table-container text-center">
                                <table className="table table-small">
                                    <thead>
                                        <tr>
                                            <td>Tay Bài</td>
                                            <td>Tỷ Lệ Trả Thưởng</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sảnh Rồng</td>
                                            <td>{formatOdds(odds?.AABet_royalFlush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Thùng Phá Sảnh</td>
                                            <td>{formatOdds(odds?.AABet_straightFlush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Tứ Quý</td>
                                            <td>{formatOdds(odds?.AABet_fourKind, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Cù Lũ</td>
                                            <td>{formatOdds(odds?.AABet_fullHouse, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Thùng</td>
                                            <td>{formatOdds(odds?.AABet_flush, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Sảnh</td>
                                            <td rowSpan={5}>{formatOdds(odds?.AABet_straight, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Sám</td>
                                        </tr>
                                        <tr>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Đôi Ace</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
        );
    }

    renderBetLimit() {
        const { maxBetFollowChoice } = this.props;
        return (
            <>
                <h2>Hạn mức cược</h2>
                <table className="table table-small text-center">
                    <thead>
                        <tr>
                            <td>Lựa Chọn</td>
                            <td>Hạn Mức Cược (Min - Max)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ante</td>
                            <td>
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                            </td>
                        </tr>
                        <tr>
                            <td>Call</td>
                            <td>
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetCallBetChoice}
                            </td>
                        </tr>
                        <tr>
                            <td>AA</td>
                            <td>
                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAaBetChoice}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }

    renderMD5() {
        return (
            <>
                <>
                    <h2> MD5 (Message-Digest algorithm 5) </h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <span className="title-text">Công nghệ MD5</span>
                            <ul className="desc">
                                <li>
                                    <strong>MD5</strong> là công nghệ cho phép Người Chơi xác thực và kiểm tra tính minh bạch của kết quả
                                    trò chơi thông qua bên thứ ba.
                                </li>
                                <li>Kết quả trò chơi sẽ được hệ thống tạo ngẫu nhiên trước khi Người Chơi mở bài. </li>
                                <li>
                                    Người Chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi mở bài (Chuỗi{" "}
                                    <strong>MD5</strong>) và kết quả cuối cùng sau khi được công bố (Chuỗi <strong>Kết Quả</strong>).
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot">
                            <span className="title-text">Tra cứu MD5</span>
                            <ul className="desc">
                                <li>
                                    <span>
                                        <strong>Bước 1</strong>: Copy chuỗi <strong>MD5</strong> trong game sau khi bấm nút &quot;Chia
                                        Bài&quot;.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <strong>Bước 2</strong>: Copy chuỗi <strong>Kết Quả</strong> sau khi bấm nút &quot;Theo Bài&quot;.
                                    </span>
                                </li>
                                <li>
                                    <strong>Bước 3</strong>: Truy cập{" "}
                                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                        https://md5.services/
                                    </a>{" "}
                                    và dán chuỗi <strong>Kết Quả</strong> vừa copy vào ô MD5.
                                </li>
                                <li>
                                    <strong>Bước 4</strong>: Bấm nút <strong>“hash darling, hash!”</strong>. So sánh chuỗi{" "}
                                    <strong>MD5 checksum</strong> vừa được tạo ra và chuỗi MD5 ở <strong>Bước 1.</strong>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="content">
                        Nếu 2 chuỗi trùng khớp, chứng minh kết quả được công bố không thay đổi so với kết quả được hệ thống tạo ra ngẫu
                        nhiên trước khi các lá bài được mở.
                    </div>
                    <div className="content">
                        <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả
                    </div>

                    <ul className="desc">
                        <li>
                            <strong>Bước 1:</strong> Copy chuỗi MD5 sau khi bấm nút &quot;Chia Bài&quot;.
                            <img
                                className="format-img auto-center format-mobile"
                                src="/static/images/casino-hold-em/md5_vi.png?v=3"
                                alt="md5"
                            />
                        </li>
                        <li>
                            <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục Kết Quả sau khi bấm nút &quot;Theo Bài&quot;
                            <img
                                className="format-img auto-center format-mobile"
                                src="/static/images/casino-hold-em/md5_result_vi.png?v=3"
                                alt="md5-result"
                            />
                            <ul className="detail">
                                <li>
                                    Kết quả bài sẽ được hiển thị theo thứ tự: 2 lá của Người Chơi (<span className="casino-black">J♣</span>,{" "}
                                    <span className="red">10♥</span>), 2 lá của Nhà Cái (<span className="red">3♦</span>,{" "}
                                    <span className="casino-black">2♠</span>) và 5 lá bài Chung (<span className="casino-black">K♣</span>,{" "}
                                    <span className="red">5♥</span>, <span className="casino-black">3♠</span>,{" "}
                                    <span className="red">10♦</span>, <span className="red">4♦</span>)
                                </li>
                                <li>
                                    Trong trường hợp Người chơi hoán đổi bài với Nhà Cái khi đó thứ tự sẽ thay đổi thành: 2 lá của Nhà Cái (
                                    <span className="casino-black">J♣</span>, <span className="red">10♥</span>), 2 lá của Người Chơi (
                                    <span className="red">3♦</span>, <span className="casino-black">2♠</span>) và 5 lá bài Chung.
                                </li>
                                <li>Lưu ý: Đây là kết quả được hệ thống tạo ra ngẫu nhiên trước khi Người Chơi bấm nút Chia Bài.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Bước 3:</strong> Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán chuỗi Kết Quả vừa copy vào ô MD5.
                            <img
                                className="format-img auto-center"
                                src="/static/images/casino-hold-em/hash-darling.png?v=3"
                                alt="hash-darling"
                            />
                        </li>
                        <li>
                            <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5
                            ở Bước 1.
                            <img
                                className="format-img auto-center"
                                src="/static/images/casino-hold-em/md5-checksum.png?v=3"
                                alt="md5-checksum"
                            />
                        </li>
                    </ul>
                    <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
                </>
            </>
        );
    }
    render() {
        return (
            <>
                <ul className="game-guide">
                    <li className="guide-item">{this.renderIntroduce()}</li>
                    <li className="guide-item">{this.renderGameRule()}</li>
                    <li className="guide-item">{this.renderPayout()}</li>
                    <li className="guide-item">{this.renderBetLimit()}</li>
                    <li id="md5" className="guide-item">
                        {this.renderMD5()}
                    </li>

                    {renderTermsAndConditionsVI("", 39)}
                </ul>
            </>
        );
    }
}

export default CasinoHoldGuideVI;
