import React from "react";
import Image from "next/image";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5VI } from "../../../shared/md5/vi";
import Styles from "../casino-hold.module.scss";

const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người Chơi chọn mệnh giá chip muốn đặt cược.</li>
                <li>Sẽ có 2 lựa chọn để đặt cược Ante và AA, trong đó Ante là lựa chọn bắt buộc để bắt đầu phiên chơi.</li>
                <li>
                    Phiên sẽ bắt đầu ngay sau khi bấm nút &quot;Chia Bài&quot;, Người Chơi và Nhà Cái mỗi bên sẽ được chia 2 lá bài, đồng
                    thời 3 lá bài chung (Flop cards) sẽ được chia và lật ở giữa bàn.{" "}
                </li>
                <li>
                    Sau khi 3 lá bài chung được chia, người chơi sẽ có 2 lựa chọn Theo Bài (Call) hoặc Bỏ Bài (Fold).
                    <ul className="detail">
                        <li>
                            Nếu chọn <strong>&quot;Bỏ Bài&quot;</strong>, Người Chơi chấp nhận mất tiền cược và phiên chơi kết thúc.
                        </li>
                        <li>
                            Nếu chọn <strong>&quot;Theo Bài&quot;</strong>, 2 lá bài chung tiếp theo sẽ được chia và lật giữa bàn Người Chơi
                            phải đặt thêm 1 khoản tiền cược (Call bet) bằng 2 lần số tiền đã đặt vào Ante.
                        </li>
                    </ul>
                </li>
                <li>
                    Kết quả thắng thua được quyết định dựa trên 5 lá bài tốt nhất có thể kết hợp trong tổng số 7 lá bài (2 lá được chia cho
                    mỗi bên và 5 lá bài chung).
                </li>
                <li>Nếu tổ hợp 5 lá bài của Người Chơi lớn hơn Nhà Cái, Người Chơi thắng và ngược lại.</li>
                <li>
                    Tổng tiền cược tối đa của 1 phiên là 2,000. <strong>Lưu ý,</strong> không thể hủy cược sau khi bấm &quot;Chia Bài&quot;.{" "}
                </li>
                <li>Bộ bài 52 lá (không bao gồm lá Joker) sẽ được xào lại sau mỗi phiên.</li>
            </ul>
            <ul className="style-number-rule">
                <li className="number-dot">
                    Thang sức mạnh
                    <ul className="game-guide-alpha">
                        <li className="">
                            a) Lá bài
                            <ul className="desc">
                                <li>
                                    Thứ tự các lá bài từ lớn đến nhỏ: Ace (A), King (K), Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3, 2
                                </li>
                                <li>Trong đó Ace (A) có thể tính như 1 lá lớn nhất hoặc nhỏ nhất.</li>
                                <li>
                                    Không so chất (<span className={Styles["black"]}>♠</span>, <span className={Styles["black"]}>♣</span>,{" "}
                                    <span className={Styles["red"]}>♦</span>, <span className={Styles["red"]}>♥</span>) của lá bài.
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            b) Tay bài
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
                                                            <Image
                                                                src="/static/images/casino-holdem/sanhrong.png"
                                                                alt="sanhrong"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/sanhthung.png"
                                                                alt="sanhthung"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/tuquyfull.png"
                                                                alt="tuquy"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/culu.png"
                                                                alt="culu"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/thung.png"
                                                                alt="thung"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/sanh.png"
                                                                alt="sanh"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/sam.png"
                                                                alt="sam"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/2doi.png"
                                                                alt="haidoi"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/doi.png"
                                                                alt="doi"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                                            <Image
                                                                src="/static/images/casino-holdem/mauthau.png"
                                                                alt="mauthau"
                                                                width={275}
                                                                height={65}
                                                                layout="responsive"
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
                                    Nếu so lá bài lẻ có giá trị cao nhất, Người Chơi và Nhà Cái &quot;Hòa&quot; =&gt; So tiếp lá bài lẻ cao
                                    thứ hai, thứ ba ..cho đến khi phân định được kết quả.
                                </li>
                            </ul>
                            <p>
                                <strong>Example</strong>
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
                                                A<span className={Styles["red"]}>♥</span>, J<span className={Styles["black"]}>♣</span>
                                            </td>
                                            <td>
                                                A<span className={Styles["red"]}>♥</span>, A<span className={Styles["black"]}>♠</span>, J
                                                <span className={Styles["black"]}>♣</span>, J<span className={Styles["red"]}>♥</span>, 10
                                                <span className={Styles["black"]}>♣</span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>
                                                5<span className={Styles["red"]}>♦</span>, 7<span className={Styles["red"]}>♦</span>
                                            </td>
                                            <td>
                                                5<span className={Styles["red"]}>♦</span>, 5<span className={Styles["black"]}>♠</span>, A
                                                <span className={Styles["black"]}>♠</span>, J<span className={Styles["red"]}>♥</span>, 10
                                                <span className={Styles["black"]}>♣</span>
                                            </td>
                                            <td>Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>5 Lá bài chung</td>
                                            <td>
                                                A<span className={Styles["red"]}>♥</span>, 10<span className={Styles["black"]}>♣</span>, 5
                                                <span className={Styles["black"]}>♠</span>, 6<span className={Styles["red"]}>♥</span>, J
                                                <span className={Styles["red"]}>♥</span>
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
                                                5<span className={Styles["red"]}>♦</span>, 5<span className={Styles["black"]}>♣</span>
                                            </td>
                                            <td>
                                                A<span className={Styles["black"]}>♣</span>, A<span className={Styles["black"]}>♠</span>, 7
                                                <span className={Styles["black"]}>♣</span>, 7<span className={Styles["red"]}>♥</span>, 5
                                                <span className={Styles["red"]}>♦</span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>
                                                4<span className={Styles["black"]}>♠</span>, 10<span className={Styles["red"]}>♥</span>
                                            </td>
                                            <td>
                                                A<span className={Styles["black"]}>♣</span>, A<span className={Styles["black"]}>♠</span>, 7
                                                <span className={Styles["black"]}>♣</span>, 7<span className={Styles["red"]}>♥</span>, 10
                                                <span className={Styles["red"]}>♥</span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>5 Lá bài chung</td>
                                            <td>A♣, A♠, 7♣, 7♥, 3♦</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; Nhà Cái thắng</div>
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
                                                5<span className={Styles["red"]}>♦</span>, 6<span className={Styles["black"]}>♣</span>
                                            </td>
                                            <td>
                                                A<span className={Styles["black"]}>♣</span>, A<span className={Styles["black"]}>♠</span>, 7
                                                <span className={Styles["black"]}>♣</span>, 7<span className={Styles["red"]}>♥</span>, J
                                                <span className={Styles["red"]}>♦</span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>
                                                4<span className={Styles["black"]}>♠</span>, 2<span className={Styles["red"]}>♥</span>
                                            </td>
                                            <td>
                                                A<span className={Styles["black"]}>♣</span>, A<span className={Styles["black"]}>♠</span>, 7
                                                <span className={Styles["black"]}>♣</span>, 7<span className={Styles["red"]}>♥</span>, J
                                                <span className={Styles["red"]}>♦</span>
                                            </td>
                                            <td>Hai Đôi</td>
                                        </tr>
                                        <tr>
                                            <td>5 Lá bài chung</td>
                                            <td>
                                                A<span className={Styles["black"]}>♣</span>, A<span className={Styles["black"]}>♠</span>, 7
                                                <span className={Styles["black"]}>♣</span>, 7<span className={Styles["red"]}>♥</span>, J
                                                <span className={Styles["red"]}>♦</span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; Kết quả &quot;Hòa&quot;</div>
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    Đặt cược
                    <ul className="game-guide-alpha">
                        <li>
                            a)Ante Bet
                            <ul className="desc">
                                <li>
                                    <strong>Ante bet</strong> là cược chính, Người Chơi bắt buộc phải đặt cược vào Ante để có thể bắt đầu
                                    phiên chơi.{" "}
                                </li>
                                <li>
                                    Kết quả thắng thua được quyết định dựa trên 5 lá bài tốt nhất có thể kết hợp trong tổng số 7 lá bài (2
                                    lá được chia cho mỗi bên và 5 lá bài chung).{" "}
                                </li>
                                <li>Nếu tổ hợp 5 lá bài của Người Chơi lớn hơn Nhà Cái {"=>"} Người Chơi thắng và ngược lại.</li>
                            </ul>
                        </li>
                        <li>
                            b)Cược AA
                            <ul className="desc">
                                <li>
                                    <strong>Cược AA</strong> là cược phụ, tùy chọn có thể đặt thêm nếu bạn muốn.{" "}
                                </li>
                                <li>
                                    Cược AA không phụ thuộc vào kết quả của ván bài chính, vì vậy bạn có thể thua cược chính nhưng vẫn thắng
                                    cược phụ.
                                </li>
                                <li>
                                    Thắng thua trên cược phụ AA sẽ được tính dựa trên 5 lá bài gồm 2 lá được chia cho Người Chơi và 3 lá bài
                                    bài chung (Flop cards), và Người Chơi không so bài với Nhà Cái. <br />
                                    <strong>Lưu ý:</strong> cược phụ chỉ được tính khi Người Chơi chọn &quot;Theo Bài&quot;, nếu chọn
                                    &quot;Bỏ Bài&quot; thì cược phụ cũng bị tính thua.
                                </li>
                                <li>Điều kiện thắng cược phụ AA, nếu tay bài Người Chơi có đôi Ace hoặc cao hơn (Hai Đôi, Sám …)</li>
                            </ul>
                        </li>
                        <li>
                            c) Call Bet
                            <ul className="desc">
                                <li>
                                    Call Bet là khoản tiền cược mà Người Chơi phải đặt thêm khi chọn &quot;Theo Bài&quot; và bằng 2 lần số
                                    tiền đã đặt vào Ante.{" "}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    So bài
                    <ul className="desc">
                        <li>
                            Tay bài của Nhà Cái phải có tối thiểu một đôi 4 hoặc cao hơn (Đôi 5, Hai Đôi, Sảnh, Thùng ....) để thỏa điều
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
                                    <td>Người Chơi thắng Ante bet và Call bet</td>
                                    <td rowSpan={3}>
                                        Người Chơi thắng <strong>Ante bet</strong> và <strong>Call bet</strong> được hoàn trả.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tay bài Người Chơi thấp hơn Nhà Cái</td>
                                    <td>Người Chơi thua Ante bet và Call bet</td>
                                </tr>
                                <tr>
                                    <td>Tay bài Người Chơi bằng Nhà Cái</td>
                                    <td>Ante bet và Call bet đều được hoàn trả</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined) => {
    return (
        <>
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Tiền cược vào Ante bet, AA, Call bet sẽ có mức trả thưởng tương ứng khác nhau.</li>
                <li>Tỷ lệ cược đã bao gồm tiền vốn.</li>
            </ul>
            <ul className="style-number-rule">
                <li className="number-dot">
                    Ante bet
                    <div className="table-container text-center">
                        <table className="table table-small">
                            <thead>
                                <tr>
                                    <td>Tay Bài</td>
                                    <td>Tỷ Lệ Cược</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sảnh Rồng </td>
                                    <td>1:{odds?.AnteBet_royalFlush}</td>
                                </tr>
                                <tr>
                                    <td>Thùng Phá Sảnh</td>
                                    <td>1:{odds?.AnteBet_straightFlush}</td>
                                </tr>
                                <tr>
                                    <td>Tứ Quý</td>
                                    <td>1:{odds?.AnteBet_fourKind}</td>
                                </tr>
                                <tr>
                                    <td>Cù Lũ</td>
                                    <td>1:{odds?.AnteBet_fullHouse}</td>
                                </tr>
                                <tr>
                                    <td>Thùng</td>
                                    <td>1:{odds?.AnteBet_flush}</td>
                                </tr>
                                <tr>
                                    <td>Sảnh</td>
                                    <td rowSpan={5}>1:{odds?.AnteBet_straight}</td>
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
                    Call bet
                    <ul className="desc">
                        <li>Tỷ lệ cược cho Call bet là 1:{odds?.CallBet_callBet}</li>
                    </ul>
                </li>
                <li className="number-dot">
                    Cược AA
                    <div className="table-container">
                        <div className="table-container text-center">
                            <table className="table table-small">
                                <thead>
                                    <tr>
                                        <td>Tay Bài</td>
                                        <td>Tỷ Lệ Cược</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sảnh Rồng</td>
                                        <td>1:{odds?.AABet_royalFlush}</td>
                                    </tr>
                                    <tr>
                                        <td>Thùng Phá Sảnh</td>
                                        <td>1:{odds?.AABet_straightFlush}</td>
                                    </tr>
                                    <tr>
                                        <td>Tứ Quý</td>
                                        <td>1:{odds?.AABet_fourKind}</td>
                                    </tr>
                                    <tr>
                                        <td>Cù Lũ</td>
                                        <td>1:{odds?.AABet_fullHouse}</td>
                                    </tr>
                                    <tr>
                                        <td>Thùng</td>
                                        <td>1:{odds?.AABet_flush}</td>
                                    </tr>
                                    <tr>
                                        <td>Sảnh</td>
                                        <td rowSpan={5}>1:{odds?.AABet_straight}</td>
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
};

const md5Title = () => {
    return (
        <>
            là phiên bản khác của trò Keno Đối Kháng với tính năng xác thực
            <a href="#md5" className="md5-title">
                <strong> MD5 (Message-Digest algorithm 5) </strong>
            </a>
            cho phép người chơi tự kiểm tra tính minh bạch trong kết quả thắng thua. Trò
        </>
    );
};

const CasinoHoldGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        Casino Hold&apos;em là một trong những game bài trực tuyến được yêu thích nhất tại các sòng Casino. Trò chơi có luật
                        chơi rất đơn giản, sử dụng một bộ bài tây 52 lá (không bao gồm lá Joker) và Người Chơi sẽ so bài trực tiếp với Nhà
                        Cái. Thắng thua sẽ được quyết định dựa trên sức mạnh tay bài (5 lá) của mỗi bên.
                    </p>
                    <p className="content">
                        Ngoài ra trò chơi còn tích hợp tính năng xác thực{" "}
                        <span className={Styles["link"]}>MD5 (Message-Digest algorithm 5)</span> cho phép Người Chơi tự kiểm tra tính minh
                        bạch trong kết quả thắng thua.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                <li className="guide-item">{renderPayouts(odds)}</li>
                <li className="guide-item">
                    <h2>Hạn Mức Cược</h2>
                    <table className="table table-small text-center">
                        <thead>
                            <tr>
                                <td>Lựa Chọn</td>
                                <td>Hạn Mức Cược (Min - Max)</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ante Bet</td>
                                <td>
                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                                </td>
                            </tr>
                            <tr>
                                <td>Call Bet</td>
                                <td>
                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetCallBetChoice}
                                </td>
                            </tr>
                            <tr>
                                <td>AA Bet</td>
                                <td>
                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAaBetChoice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li id="md5" className="guide-item">
                    {renderMD5VI(39)}
                </li>

                {renderTermsAndConditionsVI("", 39)}
            </ul>
        </div>
    );
};
export default CasinoHoldGuideVI;
