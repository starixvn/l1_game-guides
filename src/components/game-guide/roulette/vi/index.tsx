import React from "react";
import Image from "next/image";
import { renderTermsAndConditionsVI } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { ChoicesMaxBetProps, GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../roulette.module.scss";

const wrapperImg = "wrapper-img";
const tableSmall = "table-small";
const renderGameRule = (maxBet: number) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn mệnh giá và nhấp vào lựa chọn bạn muốn đặt cược. </li>
                <li>Bấm x2 để tăng gấp đôi lượng tiền cược hoặc bấm X để cược lại. </li>
                <li>Bấm nút Đồng Ý để hoàn tất cược trước khi hết thời gian quy định.</li>
                <li>
                    Roulette cho phép người chơi đặt cược vào một hoặc nhiều ô số khác nhau, có thể đặt cược vào các nhóm số hoặc cược theo
                    màu (đen hoặc đỏ), cược chẵn lẻ …
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {numberWithCommas(maxBet)}. <strong>Lưu ý,</strong> không thể hủy cược sau khi bấm Đồng Ý.
                </li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, vòng quay
                    Roulette sẽ được xoay và kết quả cuối cùng sẽ được hiển thị.
                </li>
            </ul>
        </>
    );
};

const renderBetChipsNotice = () => {
    return (
        <div className={Styles["wrapper-chips"]}>
            <div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/A-X.png" alt="A-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Đơn<br></br> (Cược vào 1 số cụ thể)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/B-X.png" alt="B-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Đôi<br></br> (Cược vào 2 số kế nhau)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/C-X.png" alt="C-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Hàng<br></br> (Cược vào 3 số cùng một hàng)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/D-X.png" alt="D-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Bộ Ba<br></br> (Cược vào tổ hợp ba số 0, 1, 2 hoặc 0, 2, 3)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/E-X.png" alt="E-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Góc<br></br> (Cược vào 4 số cùng giao nhau tại một góc)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/F-X.png" alt="F-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Bộ Bốn<br></br> (Cược vào tổ hợp bốn số 0, 1, 2, 3)
                    </div>
                </div>
            </div>
            <div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/G-X.png" alt="G-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược 2 Hàng<br></br> (Cược vào 2 hàng liền kề)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/H-X.png" alt="H-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Cột<br></br> (Cược vào 12 số trong một cột)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/I-X.png" alt="I-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Cược Tá<br></br> (Cược vào nhóm 12 số)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/J-X.png" alt="J-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Đỏ/Đen<br></br> (Cược viên bi sẽ dừng ở ô số Đỏ hay Đen)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/K-X.png" alt="K-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Chẵn/Lẻ<br></br> (Cược viên bi sẽ dừng ở ô số Chẵn hay Lẻ)
                    </div>
                </div>
                <div className={Styles["img-chip"]}>
                    <Image src="/static/images/roulette/L-X.png" alt="L-X" width={37} height={37} layout="fixed" loading="lazy" />
                    <div>
                        Tài/Xỉu<br></br> (Cược kết quả Tài 19-36 hay Xỉu 1-18)
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderCallBetTiers = () => {
    return (
        <>
            <span className="font-weight-medium title-text"> Cược Tiers</span>
            <ul className="desc">
                <li>Cược “Tiers” bao gồm các số 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33.</li>
                <li>Hệ thống sẽ tạo thành 6 cược đôi: (5, 8), (10, 11), (13, 16), (23, 24), (27, 30), (33, 36). </li>
                <li>Người chơi chọn mệnh giá chip và nhấp vào Tiers, một lần đặt cược sẽ tốn 6 chip cho 6 cược đôi.</li>
            </ul>
            <p>Ví dụ: Người chơi đặt 10 vào Tiers, mức cược tương ứng cho từng cược đôi sẽ là:</p>
            <div className={Styles[wrapperImg]}>
                <Image
                    src="/static/images/roulette/game_guide-tiers_ex.png"
                    alt="game_guide-tiers"
                    width={886}
                    height={221}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Loại Cược</th>
                            <th>Ô Số</th>
                            <th>Tiền Cược</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={6}>Cược Đôi</td>
                            <td>5, 8</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>10, 11</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13, 16</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>23, 24</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27, 30</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>33, 36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Tổng Cược</strong>
                            </td>
                            <td>60</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetOrphelins = () => {
    return (
        <>
            <span className="font-weight-medium title-text">Cược Orphelins</span>
            <ul className="desc">
                <li>Cược “Orphelins” bao gồm các số 1, 20, 14, 31, 9, 6, 34, 17.</li>
                <li>
                    Hệ thống sẽ tạo thành 4 cược đôi và 1 cược đơn:
                    <ul className="plus">
                        <li>Cược đôi: (6, 9), (14, 17), (17, 20), (31, 34)</li>
                        <li>Cược đơn: (1)</li>
                    </ul>
                </li>
                <li>Người chơi chọn mệnh giá chip và nhấp vào Orphelins, một lần đặt cược sẽ tốn 5 chip cho 4 cược đôi và 1 cược đơn.</li>
            </ul>
            <p>Ví dụ: Người chơi đặt 10 vào Orphelins, mức cược tương ứng cho từng loại cược sẽ là:</p>
            <div className={Styles[wrapperImg]}>
                <Image
                    src="/static/images/roulette/game_guide-orphelins_ex.png"
                    alt="game_guide-orphelins_ex"
                    width={886}
                    height={221}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Loại Cược</th>
                            <th>Ô Số</th>
                            <th>Tiền Cược</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={4}>Cược Đôi</td>
                            <td>6, 9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>14, 17</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>17, 20</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>31, 34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Cược Đơn</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Tổng Cược</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetVoisins = () => {
    return (
        <>
            <span className="font-weight-medium title-text">Cược Voisins</span>
            <ul className="desc">
                <li>Cược “Voisins” bao gồm các số 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25.</li>
                <li>
                    Hệ thống sẽ tạo thành 5 cược đôi, 1 cược bộ ba và 1 cược góc:
                    <ul className="plus">
                        <li>Cược đôi: (12, 15), (18, 21), (32, 35), (19, 22), (4, 7)</li>
                        <li>Cược bộ ba: (0, 2, 3)</li>
                        <li>Cược góc: (25, 26, 28, 29)</li>
                    </ul>
                </li>
                <li>
                    Người chơi chọn mệnh giá chip và nhấp vào Voisins, một lần đặt cược sẽ tốn 9 chip:
                    <ul className="plus">
                        <li>5 chip cho 5 cược đôi</li>
                        <li>2 chip cho cược bộ ba</li>
                        <li>2 chip cho cược góc</li>
                    </ul>
                </li>
            </ul>
            <p>Ví dụ: Người chơi đặt 10 vào Voisins, mức cược tương ứng cho từng loại cược sẽ là:</p>
            <div className={Styles[wrapperImg]}>
                <Image
                    src="/static/images/roulette/game_guide-voisins_ex.png"
                    alt="game_guide-voisins_ex"
                    width={886}
                    height={221}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Loại Cược</th>
                            <th>Ô Số</th>
                            <th>Tiền Cược</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>Cược Đôi</td>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>18, 21</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>19, 22</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4, 7</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Cược Bộ Ba</td>
                            <td>0, 2, 3</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Cược Góc</td>
                            <td>25, 26, 28, 29</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Tổng Cược</strong>
                            </td>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetZero = () => {
    return (
        <>
            <span className="font-weight-medium title-text">Cược Zero</span>
            <ul className="desc">
                <li>Cược “Zero” bao gồm các số 12, 35, 3, 26, 0, 32, 15.</li>
                <li>
                    Hệ thống sẽ tạo thành 3 cược đôi, 1 cược đơn.
                    <ul className="plus">
                        <li>Cược đơn: (26)</li>
                        <li>Cược đôi: (0, 3), (12, 15), (32, 35)</li>
                    </ul>
                </li>
                <li>Người chơi chọn mệnh giá chip và nhấp vào Zero, một lần đặt cược sẽ tốn 4 chip cho 3 cược đôi và 1 cược đơn.</li>
            </ul>
            <p>Ví dụ: Người chơi đặt 10 vào Zero, mức cược tương ứng cho từng loại cược sẽ là:</p>
            <div className={Styles[wrapperImg]}>
                <Image
                    src="/static/images/roulette/game_guide-zero_ex.png"
                    alt="game_guide-zero_ex"
                    width={886}
                    height={221}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Loại Cược</th>
                            <th>Ô Số</th>
                            <th>Tiền Cược</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>Cược Đôi</td>
                            <td>0, 3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td>Cược Đơn</td>
                            <td>26</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <strong>Tổng Cược</strong>
                            </td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetNeighbors = () => {
    return (
        <>
            <span className="font-weight-medium title-text">Cược Neighbors</span>
            <ul className="desc">
                <li>Cược Neighbors là đặt vào một số và hai số nằm bên trái và phải của số đó. </li>
                <li>Người chơi chọn mệnh giá chip, bấm vào ô số muốn đặt.</li>
                <li>Hệ thống sẽ tạo thành 5 cược đơn ứng với 5 con số mà người chơi đã chọn.</li>
            </ul>

            <div className={Styles["wrapper-img-circle"]}>
                <Image
                    src="/static/images/roulette/game_guide-neighbors_1.png"
                    alt="game_guide-neighbors_1"
                    width={713}
                    height={198}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
            <p>
                Ví dụ: Người chơi chọn mệnh giá chip 10, ô số muốn đặt là 27, có nghĩa là người chơi đặt cược lên năm con số liền nhau
                36-13-27-6-34 (27 là con số ở giữa).
            </p>
            <div className={Styles[wrapperImg]}>
                <Image
                    src="/static/images/roulette/game_guide_neighbors_ex.png"
                    alt="game_guide_neighbors_ex"
                    width={886}
                    height={221}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Loại Cược</th>
                            <th>Ô Số</th>
                            <th>Tiền Cược</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>Cược Đơn</td>
                            <td>36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Tổng Cược</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderBettingOptions = () => {
    return (
        <li className="guide-item">
            <h2>Luật chơi</h2>
            <p>
                Roulette có rất nhiều hình thức cược để người chơi lựa chọn. Một bàn cược Roulette sẽ có cược trong và cược ngoài. Trong đó,
                cược trong là cược vào các ô số cụ thể trên bàn cược. Cược ngoài là người chơi đặt cược vào các lựa chọn như cược Đỏ Đen,
                Chẵn Lẻ, cược Tá, cược Tài Xỉu, cược Cột.
            </p>
            <div className={Styles["wrapper-img-rule"]}>
                <Image
                    src="/static/images/roulette/vi/game_guide-luat_choi.png"
                    alt="luat-choi"
                    width={886}
                    height={475}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
            {renderBetChipsNotice()}
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Cược Trong</span>
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Lựa Chọn</th>
                                    <th>Mô Tả</th>
                                    <th>Vị Trí Đặt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-start">
                                    <td>Cược Đơn (1 số)</td>
                                    <td>Cược vào 1 số cụ thể.</td>
                                    <td>Đặt chip ngay trên ô số lựa chọn.</td>
                                </tr>
                                <tr className="text-start">
                                    <td>Cược Đôi (2 số)</td>
                                    <td>Cược vào 2 số kế nhau.</td>
                                    <td>Đặt chip lên vách ngăn giữa 2 số.</td>
                                </tr>
                                <tr className="text-start">
                                    <td>Cược Hàng (3 số)</td>
                                    <td>Cược vào 3 số cùng một hàng.</td>
                                    <td>Đặt chip lên mép bên dưới, ngoài cùng của hàng đó.</td>
                                </tr>
                                <tr className="text-start">
                                    <td>Cược Bộ Ba (3 số)</td>
                                    <td>Cược vào tổ hợp ba số 0, 1, 2 hoặc 0, 2, 3</td>
                                    <td>Đặt chip vào góc nơi 3 số giao nhau giữa 0, 1 và 2 hoặc 0, 2 và 3</td>
                                </tr>
                                <tr className="text-start">
                                    <td>Cược Góc (4 số)</td>
                                    <td>Cược vào 4 số cùng giao nhau tại một góc.</td>
                                    <td>Đặt chip vào góc nơi 4 số giao nhau.</td>
                                </tr>
                                <tr className="text-start">
                                    <td>Cược Bộ Bốn ( 4 số)</td>
                                    <td>Cược vào tổ hợp bốn số 0,1,2,3</td>
                                    <td>Đặt chip vào góc giao nhau giữa số 0 và số 1</td>
                                </tr>
                                <tr className="text-start">
                                    <td>Cược 2 Hàng (6 số)</td>
                                    <td>Cược vào 2 hàng liền kề.</td>
                                    <td>Đặt chip vào góc giao nhau của 2 hàng.</td>
                                </tr>
                                <tr className="text-start">
                                    <td>Cược Cột (12 số)</td>
                                    <td>Cược vào 12 số trong một cột.</td>
                                    <td>Đặt chip vào ô “1:3” ở cột muốn chọn.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Cược Ngoài</span>
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Lựa Chọn</th>
                                    <th>Mô Tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3}>Cược Tá (12 số)</td>
                                    <td>1-12</td>
                                    <td className="text-start">Đặt cược kết quả sẽ nằm trong khoảng 1 đến 12</td>
                                </tr>
                                <tr>
                                    <td>13-24</td>
                                    <td className="text-start">Đặt cược kết quả sẽ nằm trong khoảng 13 đến 24</td>
                                </tr>
                                <tr>
                                    <td>25-36</td>
                                    <td className="text-start">Đặt cược kết quả sẽ nằm trong khoảng 25 đến 36</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Tài/Xỉu (18 số)</td>
                                    <td>1-18</td>
                                    <td className="text-start">Xỉu: Đặt cược kết quả sẽ nằm trong khoảng 1 đến 18 </td>
                                </tr>
                                <tr>
                                    <td>19-36</td>
                                    <td className="text-start">Tài: Đặt cược kết quả sẽ nằm trong khoảng 19 đến 36 </td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Chẵn/Lẻ (18 số)</td>
                                    <td>Lẻ</td>
                                    <td className="text-start">Đặt cược viên bi sẽ dừng ở ô số Lẻ </td>
                                </tr>
                                <tr>
                                    <td>Chẵn</td>
                                    <td className="text-start">Đặt cược viên bi sẽ dừng ở ô số Chẵn </td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Đỏ/Đen (18 số)</td>
                                    <td>Đỏ</td>
                                    <td className="text-start">Đặt cược viên bi sẽ dừng ở ô số màu Đỏ </td>
                                </tr>
                                <tr>
                                    <td>Đen</td>
                                    <td className="text-start">Đặt cược viên bi sẽ dừng ở ô số màu Đen </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Cược Nhanh</span>
                    <p>
                        Cược nhanh hay còn gọi là Cược Pháp, là hình thức đặt cược cho phép người chơi đặt vào nhóm các ô số được quy định
                        sẵn và sẽ có 5 lựa chọn là Cược Tiers, Cược Orphelines, Cược Voisins, Cược Zero và Cược Neighbors.
                    </p>
                    <div className={Styles[wrapperImg]}>
                        <div className={Styles["wrapper-img-circle"]}>
                            <Image
                                src="/static/images/roulette/game_guide-cuoc_nhanh.png"
                                alt="game_guide-cuoc_nhanh"
                                width={713}
                                height={221}
                                layout="responsive"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">{renderCallBetTiers()}</li>
                        <li className="number-dot-number">{renderCallBetOrphelins()}</li>
                        <li className="number-dot-number">{renderCallBetVoisins()}</li>
                        <li className="number-dot-number">{renderCallBetZero()}</li>
                        <li className="number-dot-number">{renderCallBetNeighbors()}</li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const renderPayouts = (odds: OddsProps, minBet: number, choiceMaxBet: ChoicesMaxBetProps) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                <li>
                    Giới hạn cược và tỷ lệ trả thưởng trong Roulette như sau:
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Lựa Chọn</th>
                                    <th>Nhóm</th>
                                    <th>Tỷ Lệ Trả Thưởng</th>
                                    <th>Giới Hạn Cược (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cược Đơn</td>
                                    <td>1 số</td>
                                    <td>1:{odds.straightUp}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.straightUp)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cược Đôi</td>
                                    <td>2 số</td>
                                    <td>1:{odds.split}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.split)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cược Hàng</td>
                                    <td rowSpan={2}>3 số</td>
                                    <td rowSpan={2}>1:{odds.street}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.street)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cược Bộ Ba</td>
                                </tr>
                                <tr>
                                    <td>Cược Góc</td>
                                    <td rowSpan={2}>4 số</td>
                                    <td rowSpan={2}>1:{odds.corner}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.corner)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cược Bộ Bốn</td>
                                </tr>
                                <tr>
                                    <td>Cược 2 Hàng</td>
                                    <td>6 số</td>
                                    <td>1:{odds.line}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.line)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cược Cột</td>
                                    <td rowSpan={2}>12 số</td>
                                    <td rowSpan={2}>1:{odds.dozen}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.dozen)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cược Tá</td>
                                </tr>
                                <tr>
                                    <td>Tài/Xỉu</td>
                                    <td rowSpan={3}>18 số</td>
                                    <td rowSpan={3}>1:{odds.redBlack}</td>
                                    <td rowSpan={3}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.redBlack)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Chẵn/Lẻ</td>
                                </tr>
                                <tr>
                                    <td> Đỏ/Đen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const RouletteGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò đánh bạc nổi tiếng, có luật chơi và cách chơi rất đơn giản. Trò chơi bao gồm 1 viên bi và 1 bàn
                        quay bên trong có các ô số từ 0 đến 36. Mỗi ô số được đánh dấu bằng các màu đỏ - đen xen kẽ, trong đó ô số “0” được
                        tô màu xanh. Viên bi sẽ được xoay ngược chiều với bàn quay, người chơi đặt cược và dự đoán ô số mà viên bi sẽ dừng
                        lại.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxbet)}</li>
                {renderBettingOptions()}
                {renderPayouts(odds, minbet, choices_maxbet)}
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default RouletteGuideVI;
