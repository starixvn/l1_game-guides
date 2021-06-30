import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { renderStatisticalTable } from "../../../shared/se-die/vi";
import { GameConfigProps, ChoicesMaxBetProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../se-die-war.module.scss";

const renderGameRule = (maxbet: string) => {
    const classChoiceMargin = "player-margin";
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi chọn mệnh giá và nhấp vào lựa chọn bạn muốn đặt cược trước khi bát được mở. Nếu kết quả mở ra trùng với lựa
                    chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {maxbet}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Xu sẽ được xóc và kết quả cửa thắng sẽ được hiển thị khi hết thời gian đặt cược.Thời gian đặt cược cho mỗi phiên sẽ được
                    hiển thị đếm ngược trên bàn chơi.
                </li>
                <li>
                    Tổng tiền cược của tất cả người chơi trên từng cửa cược là thông tin mang tính tham khảo. Đối với các thị trường và tiền
                    tệ khác nhau, số tổng hiển thị được quy đổi dựa theo tỉ giá nội bộ do công ty quy định.
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-medium left">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Lựa Chọn</th>
                                    <th>Điều Kiện Thắng</th>
                                    <th>Mô Tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>Nhà Con</td>
                                    <td colSpan={2}>Tổng xu Đỏ có trong kết quả của Nhà Con nhiều hơn Nhà Cái.</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Nhà Cái</td>
                                    <td colSpan={2}>Tổng xu Đỏ có trong kết quả của Nhà Cái nhiều hơn Nhà Con.</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Hoà</td>
                                    <td colSpan={2}>Nhà Con và Nhà Cái có cùng kết quả.</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Tổng Chẵn</td>
                                    <td colSpan={2}>Tổng xu Đỏ có trong kết quả của cả Nhà Con và Nhà Cái là số Chẵn.</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Tổng Lẻ</td>
                                    <td colSpan={2}>Tổng xu Đỏ có trong kết quả của cả Nhà Con và Nhà Cái là số Lẻ.</td>
                                </tr>
                                {renderGameRulePlayerOrBanker(false)}
                                {renderGameRulePlayerOrBanker(true)}
                            </tbody>
                        </table>
                    </div>
                </li>
                <p>
                    <strong>Ví dụ:</strong>
                </p>
                <ul className="game-guide-alpha">
                    <li>
                        <strong>Cược Nhà Con, Nhà Cái.</strong>
                        <ul className="desc">
                            <li>
                                Kết Quả Nhà Con: 3 đỏ, 1 trắng<br></br>{" "}
                                <span className={Styles[classChoiceMargin]}>Nhà Cái: 1 đỏ, 3 trắng</span>
                                <br></br> Cược vào Nhà Con thắng do có nhiều số xu đỏ hơn Nhà Cái.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Cược Tổng Chẵn</strong>
                        <ul className="desc">
                            <li>
                                Kết Quả Nhà Con: 3 đỏ, 1 trắng<br></br>
                                <span className={Styles[classChoiceMargin]}> Nhà Cái: 1 đỏ, 3 trắng </span>
                                <br></br> Cược vào Tổng Chẵn thắng do tổng xu đỏ có trong kết quả là số Chẵn (4 đỏ).
                            </li>
                            <li>
                                Kết Quả Nhà Con: 4 trắng<br></br>
                                <span className={Styles[classChoiceMargin]}> Nhà Cái: 4 trắng </span>
                                <br></br> Cược vào Tổng Chẵn thắng do tổng xu đỏ có trong kết quả là số Chẵn (0 đỏ).
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Cược Tổng Lẻ</strong>
                        <ul className="desc">
                            <li>
                                Kết Quả Nhà Con: 2 đỏ, 2 trắng<br></br>
                                <span className={Styles[classChoiceMargin]}> Nhà Cái: 1 đỏ, 3 trắng </span>
                                <br></br> Cược vào Tổng Lẻ thắng do tổng xu đỏ có trong kết quả là số Lẻ (3 đỏ).
                            </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
};

const renderGameRulePlayerOrBanker = (isBanker = false) => {
    return (
        <>
            <tr>
                <td rowSpan={9}>{isBanker ? "Nhà Cái" : "Nhà Con"}</td>
                <td rowSpan={2}>Lẻ</td>
                <td>3 đỏ, 1 trắng</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td>1 đỏ, 3 trắng</td>
                {renderOneRedThreeWhite()}
            </tr>
            <tr>
                <td rowSpan={3}>Chẵn</td>
                <td>4 đỏ</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 trắng</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>2 đỏ, 2 trắng</td>
                {renderTwoRedTwoWhite()}
            </tr>
            <tr>
                <td>4 đỏ</td>
                <td>4 đỏ</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 trắng</td>
                <td>4 trắng</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>3 đỏ, 1 trắng</td>
                <td>3 đỏ, 1 trắng</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td>1 đỏ, 3 trắng</td>
                <td>1 đỏ, 3 trắng</td>
                {renderOneRedThreeWhite()}
            </tr>
        </>
    );
};

const renderPayouts = (odds: object | any, choiceMaxBet: ChoicesMaxBetProps, minBet: number) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng </h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>
                    Tỷ lệ trả thưởng đã bao gồm tiền cược.
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th>Lựa Chọn</th>
                                    <th>Trả Thưởng </th>
                                    <th>Giới Hạn Cược (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nhà Con</td>
                                    <td rowSpan={2}>1:{odds.player}</td>
                                    <td rowSpan={5}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.player)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhà Cái</td>
                                </tr>
                                <tr>
                                    <td>Hoà</td>
                                    <td>1:{odds.tie}</td>
                                </tr>
                                <tr>
                                    <td>Tổng chẵn</td>
                                    <td rowSpan={2}>1:{odds.even}</td>
                                </tr>
                                <tr>
                                    <td>Tổng lẻ</td>
                                </tr>
                                <tr>
                                    <td>Nhà Con chẵn</td>
                                    <td rowSpan={2}>1:{odds.playerEven}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.playerEven)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhà Con lẻ</td>
                                </tr>
                                <tr>
                                    <td>Nhà Con 3 đỏ</td>
                                    <td rowSpan={2}>1:{odds.playerRed3}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.playerRed3)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhà Con 1 đỏ</td>
                                </tr>
                                <tr>
                                    <td>Nhà Con 4 đỏ</td>
                                    <td rowSpan={2}>1:{odds.playerRed4}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.playerRed4)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhà Con 4 trắng</td>
                                </tr>
                                <tr>
                                    <td>Nhà Cái chẵn</td>
                                    <td rowSpan={2}>1:{odds.bankerEven}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.bankerEven)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhà Cái lẻ</td>
                                </tr>
                                <tr>
                                    <td>Nhà Cái 3 đỏ</td>
                                    <td rowSpan={2}>1:{odds.bankerRed3}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.bankerRed3)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhà Cái 1 đỏ</td>
                                </tr>
                                <tr>
                                    <td>Nhà Cái 4 đỏ</td>
                                    <td rowSpan={2}>1:{odds.bankerRed4}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.bankerRed4)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhà Cái 4 trắng</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là phiên bản hoàn toàn mới của trò Xóc Đĩa truyền thống. Trò chơi gồm 2 bộ xu, một cho Nhà Con và một cho
                        Nhà Cái. Mỗi bộ gồm 1 bát úp, 1 đĩa và 4 đồng xu. Trong đó, 4 đồng xu được thiết kế 2 mặt đỏ và trắng. Người chơi sẽ
                        đặt cược vào các lựa chọn (cửa) có sẵn. Kết quả thắng thua sẽ phụ thuộc vào số mặt đỏ hoặc trắng được lật của đồng
                        xu sau khi xóc.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(numberWithCommas(maxbet))}</li>

                {renderPayouts(odds, choices_maxbet, minbet)}
                <li className="guide-item">
                    <h2>Bảng thống kê kết quả</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <span className="font-weight-medium">Chẵn Lẻ</span>
                            {renderStatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <span className="font-weight-medium">Dãy Số Thống Kê</span>
                            <p>
                                <img
                                    className={Styles["wrapper-img"]}
                                    src="./static/images/sedie-war/guide-stats-vi.png"
                                    alt="guide-stats-vi"
                                ></img>
                            </p>

                            <p>
                                <strong>Lưu ý:</strong> Con số trong dãy số thống kê thể hiện tổng số xu Đỏ có trong kết quả của cả Nhà Con
                                và Nhà Cái ở từng phiên.
                            </p>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default SeDieGuideVI;
