import React from "react";
import { BaccaratVip } from "..";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTBodyPointCalculationRules } from "../en";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../baccarat.module.scss";

const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Hai cửa Nhà Con và Nhà Cái, mỗi cửa sẽ được chia trước 2 lá bài. Bài sẽ được chia theo thứ tự Nhà Con trước. Người chơi
                    đặt cược và dự đoán cửa nào sẽ thắng.
                </li>
                <li>
                    Người chơi cũng có thể đặt cược vào lựa chọn Hòa nếu dự đoán 2 cửa Nhà Con và Nhà Cái có kết quả bằng nhau hoặc có thể
                    đặt vào các cửa phụ như Tài, Xỉu, Con Đôi, Cái Đôi.
                </li>
                <li>
                    Tùy thuộc vào tổng điểm của 2 lá bài được chia ban đầu, mỗi bên sẽ giữ nguyên các lá bài hoặc rút thêm lá bài thứ ba.
                </li>
                <li>Lá bài thứ ba sẽ được rút sau khi hết thời gian đặt cược.</li>
                <li>
                    Trò chơi sẽ phân định thắng thua bằng cách so sánh tổng điểm của các lá bài ở mỗi cửa. Trong đó 9 là số điểm cao nhất và
                    0 là điểm số thấp nhất.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {maxBetRound}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                </li>
                <li>Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi.</li>
                <li>Bộ bài 52 lá (không bao gồm lá Joker) sẽ được sử dụng khi bắt đầu phiên mới.</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>Lựa Chọn</th>
                                    <th>Thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nhà Cái</td>
                                    <td className="text-start">Nhà Cái có điểm số cao hơn Nhà Con.</td>
                                </tr>
                                <tr>
                                    <td>Nhà Con</td>
                                    <td className="text-start">Nhà Con có điểm số cao hơn Nhà Cái.</td>
                                </tr>
                                <tr>
                                    <td>Hòa</td>
                                    <td className="text-start">Nhà Cái và Nhà Con có điểm số bằng nhau.</td>
                                </tr>
                                <tr>
                                    <td>Con Đôi</td>
                                    <td className="text-start">Nếu 2 lá bài ban đầu của Nhà Con là đôi (không cần đồng màu).</td>
                                </tr>
                                <tr>
                                    <td>Cái Đôi</td>
                                    <td className="text-start">Nếu 2 lá bài ban đầu của Nhà Cái là đôi (không cần đồng màu).</td>
                                </tr>
                                <tr>
                                    <td>Tài</td>
                                    <td className="text-start">Phiên kết thúc với tổng số lá bài của Nhà Con và Nhà Cái từ 5 đến 6 lá.</td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                    <td className="text-start">Phiên kết thúc với tổng số lá bài của Nhà Con và Nhà Cái là 4 lá.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPointCalculationRules = (gameName: string) => {
    return (
        <>
            <h2>Quy tắc tính điểm</h2>
            <ul className="desc">
                <li>
                    Điểm số các lá bài trong {gameName} sẽ được tính như sau:
                    <ul className="detail">
                        <li>Các lá bài từ 2 đến 9 có giá trị tùy theo số trên mỗi lá bài; lá A được tính là 1 điểm.</li>
                        <li>Các lá 10, J, Q, K được tính là 0 điểm.</li>
                    </ul>
                </li>
                <li>Tổng điểm các lá bài sẽ được tính dựa trên con số ở hàng đơn vị. </li>
                <strong>Ví dụ:</strong>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Hai lá bài đầu</th>
                            <th>Lá thứ ba</th>
                            <th className={Styles["point-total"]}>Điểm số</th>
                            <th>Tổng điểm tính theo {gameName} </th>
                        </tr>
                    </thead>
                    {renderTBodyPointCalculationRules()}
                </table>
            </ul>
        </>
    );
};

const BaccaratGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId } = props;
    const { odds, minbet } = gameConfigs;
    const { player, banker, big, small, tie, playerPair } = odds;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName}{" "}
                        {BaccaratVip.includes(gameId ? gameId : BaccaratVip[0])
                            ? "là phiên bản đặc biệt của trò Cào Baccarat, với hạn mức cược được nâng cấp, mở rộng. "
                            : "hay còn gọi là bài Cào, là trò đánh bài nổi tiếng và rất được yêu thích tại các sòng bài trên thế giới. "}
                        Trò chơi sử dụng bộ bài tây 52 lá (không bao gồm lá Joker) và sẽ có 7 lựa chọn (cửa) trên bàn chơi bao gồm 3 cửa
                        chính (Nhà Con, Nhà Cái, Hòa) và 4 cửa phụ (Tài, Xỉu, Con Đôi, Cái Đôi). Người chơi sẽ dự đoán kết quả và đặt cược
                        vào lựa chọn mong muốn.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPointCalculationRules(gameName)}</li>
                <li className="guide-item">
                    <h2>Quy tắc rút bài</h2>
                    <ul className="desc">
                        <li>
                            Dựa trên tổng điểm của 2 lá bài được chia ban đầu, hệ thống sẽ quyết định việc rút lá bài thứ ba cho Nhà Con và
                            Nhà Cái.
                        </li>
                        <li>
                            Nhà Con sẽ luôn là bên sẽ rút bài đầu tiên. Quy tắc rút bài của Nhà Cái sẽ tùy thuộc vào lá bài thứ ba của nhà
                            Con.
                        </li>
                        <li>
                            Nếu một trong hai bên được 8 hay 9 điểm với 2 lá ban đầu. Khi đó 2 bên sẽ không rút lá bài thứ ba. Hệ thống sẽ
                            so điểm để phân định thắng thua.
                        </li>
                        <li>
                            Nếu Nhà Con hoặc Nhà Cái giành chiến thắng với tổng điểm 2 lá bài đầu là 8 hoặc 9 điểm, khi đó sẽ được gọi là
                            “Thắng tự nhiên”.
                        </li>
                        <ul className="style-number-dot">
                            <li className="number-dot">
                                <span className="font-weight-medium title-text">Quy tắc rút bài Nhà Con</span>
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["rule-hand-width"]}>Tổng điểm 2 lá bài đầu tiên</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Từ 0 đến 5</td>
                                                <td className="text-start">Nhà Con rút bài.</td>
                                            </tr>
                                            <tr>
                                                <td>6 hoặc 7</td>
                                                <td className="text-start">Không rút thêm bài.</td>
                                            </tr>
                                            <tr>
                                                <td>8 hoặc 9 </td>
                                                <td className="text-start">
                                                    Không rút thêm bài (cả 2 bên Nhà Con và Nhà Cái). So điểm, bên nào cao bên đấy thắng.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li className="number-dot">
                                <span className="font-weight-medium title-text"> Quy tắc rút bài Nhà Cái</span>

                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["rule-hand-width"]}>Tổng điểm 2 lá bài đầu tiên</th>
                                                <th>Nhà Cái được rút khi lá thứ ba của Nhà Con là:</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Từ 0 đến 2</td>
                                                <td className="text-start">Luôn được rút bài bất kể lá thứ ba của Nhà Con là gì.</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="text-start">Không phải lá 8</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="text-start">2, 3, 4, 5, 6 hoặc 7</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td className="text-start">4, 5, 6 hoặc 7</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td className="text-start">6 hoặc 7</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td className="text-start">Không rút thêm bài.</td>
                                            </tr>
                                            <tr>
                                                <td>8 hoặc 9</td>
                                                <td className="text-start">
                                                    Không rút thêm bài (cả 2 bên Nhà Con và Nhà Cái). So điểm, bên nào cao bên đấy thắng.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul className="desc">
                                    <li>
                                        Nếu tổng điểm 2 lá bài của Nhà Con trong khoảng 6 - 7 điểm thì Nhà Cái sẽ luôn rút thêm bài nếu Nhà
                                        Cái có tổng điểm từ 0 đến 5.
                                    </li>
                                    <li>
                                        Trường hợp Nhà Cái và Nhà Con đều có tổng điểm 2 lá bài trong khoảng 6 - 7 điểm, khi đó 2 bên sẽ
                                        không rút lá thứ ba. Hệ thống sẽ so điểm để phân định thắng thua.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </li>

                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
                            Giới hạn cược và tỷ lệ trả thưởng trong Cào Baccarat như sau:
                            <div className="table-container">
                                <table className="table text-center table-medium left">
                                    <thead>
                                        <tr>
                                            <th>Lựa Chọn</th>
                                            <th>Tỷ Lệ Trả Thưởng</th>
                                            <th>Giới Hạn Cược (Min - Max)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Nhà Con</td>
                                            <td>1: {player}</td>
                                            <td rowSpan={4}>
                                                {numberWithCommas(minbet)} - {maxBetFollowChoice?.maxBetMainChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nhà Cái</td>
                                            <td>1: {banker}</td>
                                        </tr>
                                        <tr>
                                            <td>Tài</td>
                                            <td>1: {big}</td>
                                        </tr>
                                        <tr>
                                            <td>Xỉu</td>
                                            <td>1: {small}</td>
                                        </tr>
                                        <tr>
                                            <td>Hoà</td>
                                            <td>1: {tie}</td>
                                            <td rowSpan={3}>
                                                {numberWithCommas(minbet)} - {maxBetFollowChoice?.maxBetSubChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Con Đôi</td>
                                            <td rowSpan={2}>1: {playerPair}</td>
                                        </tr>
                                        <tr>
                                            <td>Cái Đôi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>Trong trường hợp kết quả Hòa, người chơi sẽ được hoàn lại số tiền cược đặt vào 2 cửa Nhà Con, Nhà Cái.</li>
                        <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                    </ul>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default BaccaratGuideVI;
