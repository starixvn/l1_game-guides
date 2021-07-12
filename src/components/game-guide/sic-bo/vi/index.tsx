import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, ChoicesMaxBetProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderPayoutsTableOnBody } from "../en";
import { locales } from "../../../../common/constants";

const renderGameRule = (maxbet: number) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi có thể đặt cược vào một hoặc nhiều lựa chọn cùng lúc trong cùng một lượt chơi và không bị giới hạn số lần đặt
                    cược. <strong>Lưu ý,</strong> không thể hủy cược sau khi đặt.
                </li>
                <li>Tổng tiền cược tối đa cho một phiên là {numberWithCommas(maxbet)}</li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Xúc xắc sẽ được lắc khi bắt đầu phiên, kết
                    quả sẽ được hiển thị khi hết thời gian đặt cược.
                </li>
                <li>
                    Tổng tiền cược của tất cả người chơi trên từng cửa cược là thông tin mang tính tham khảo. Đối với các thị trường và tiền
                    tệ khác nhau, số tổng hiển thị được quy đổi dựa theo tỉ giá nội bộ do công ty quy định.
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps, minBet: number, choicesMaxBet: ChoicesMaxBetProps) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>
                    Tỷ lệ trả thưởng đã bao gồm tiền cược.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Loại cược</th>
                                    <th>Lựa chọn</th>
                                    <th>Tỷ lệ trả thưởng</th>
                                    <th>Giới hạn cược (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Tài/Xỉu</td>
                                    <td>Tài</td>
                                    <td rowSpan={2}>1:{odds.big}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.big)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                </tr>
                                <tr>
                                    <td>Bộ Ba Bất Kỳ</td>
                                    <td>Bộ Ba Bất Kỳ</td>
                                    <td>1:{odds.anyTriple}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.anyTriple)}
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>Cược số</td>
                                    <td rowSpan={3}>Xúc xắc 1 đến 6</td>
                                    <td>Xuất hiện một lần 1:{odds.single}</td>
                                    <td rowSpan={3}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.specific1)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xuất hiện hai lần 1:{odds.double}</td>
                                </tr>
                                <tr>
                                    <td>Xuất hiện ba lần 1:{odds.triple}</td>
                                </tr>
                                {renderPayoutsTableOnBody(odds, minBet, choicesMaxBet, locales.vi)}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SicBoGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò chơi đổ xúc xắc, rất được yêu thích tại các casino. Trò chơi có luật và cách chơi đơn giản, sử
                        dụng ba viên xúc xắc (xí ngầu) 6 mặt, các mặt lần lượt từ 1 đến 6 chấm, tương ứng từ 1 đến 6 điểm.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxbet)}</li>
                <li className="guide-item">
                    <h2>Điều kiện thắng</h2>
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Loại cược</th>
                                    <th>Lựa chọn</th>
                                    <th>Điều kiện thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Tài/Xỉu</td>
                                    <td>Tài</td>
                                    <td className="text-start">
                                        <ul className="plus">
                                            <li> Thắng nếu tổng điểm của ba xúc xắc từ 11 đến 17.</li>
                                            <li> Thua nếu kết quả có bộ ba bất kỳ.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                    <td className="text-start">
                                        <ul className="plus">
                                            <li> Thắng nếu tổng điểm của ba xúc xắc từ 4 đến 10.</li>
                                            <li> Thua nếu kết quả có bộ ba bất kỳ.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bộ Ba Bất Kỳ</td>
                                    <td>Bộ Ba Bất Kỳ</td>
                                    <td className="text-start">Thắng nếu kết quả là một bộ ba xúc xắc bất kỳ.</td>
                                </tr>
                                <tr>
                                    <td>Cược số</td>
                                    <td>Xúc xắc 1 đến 6</td>
                                    <td className="text-start">Thắng nếu xúc xắc người chơi chọn xuất hiện trong kết quả.</td>
                                </tr>
                                <tr>
                                    <td>Tổng điểm</td>
                                    <td>Từ 4 đến 17</td>
                                    <td className="text-start">Thắng nếu lựa chọn của người chơi bằng với tổng điểm của ba xúc xắc.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                {renderPayouts(odds, minbet, choices_maxbet)}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default SicBoGuideVI;
