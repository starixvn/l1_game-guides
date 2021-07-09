import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { SeDieMini } from "../index";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable, PayoutOrRuleDataOnTable } from "../../../shared/se-die/vi";

const renderGameRule = (maxBetFollowChoice: MaxBetChoicesProps | undefined, gameId = 0, minBet: string) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi chọn mệnh giá và nhấp vào lựa chọn bạn muốn đặt cược trước khi bát được mở. Nếu kết quả mở ra trùng với lựa
                    chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.{" "}
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {maxBetFollowChoice?.maxBetRound}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                </li>
                {SeDieMini.includes(gameId) ? renderGameRuleTableMini(minBet, gameId, maxBetFollowChoice) : renderGameRuleOrPayoutTable()}
                <li>
                    Xu sẽ được xóc và kết quả cửa thắng sẽ được hiển thị khi hết thời gian đặt cược. Thời gian đặt cược cho mỗi phiên sẽ
                    được hiển thị đếm ngược trên bàn chơi.
                </li>
            </ul>
        </>
    );
};

const renderGameRuleOrPayoutTable = () => {
    return (
        <li className="contentBeforeEmpty">
            <div className="table-container">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Lựa Chọn</th>
                            <th>Điều Kiện Thắng</th>
                            <th>Mô Tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                        <tr>
                            <td>2 đỏ, 2 trắng</td>
                            <td>2 đỏ, 2 trắng</td>
                            {renderTwoRedTwoWhite()}
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderGameRuleTableMini = (minBet: string, gameId: number, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <li>
            Giới hạn cược:
            <div className="table-container">
                <table className="table text-center table-small">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Lựa Chọn</th>
                            <th>Giới Hạn Cược (Min - Max)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>
                                <strong>2 cửa chính</strong>
                            </td>
                            <td>Chẵn</td>
                            <td rowSpan={2}>
                                {minBet} - {maxBetFollowChoice?.maxBetMain}
                            </td>
                        </tr>
                        <tr>
                            <td>Lẻ</td>
                        </tr>
                        <tr>
                            <td rowSpan={5}>
                                <strong>{!SeDieMini.includes(gameId) ? 5 : 4} cửa phụ</strong>
                            </td>
                            <td>4 đỏ</td>
                            <td rowSpan={2}>
                                {minBet} - {maxBetFollowChoice?.maxBetRed4}
                            </td>
                        </tr>
                        <tr>
                            <td>4 trắng</td>
                        </tr>
                        <tr>
                            <td>3 đỏ, 1 trắng</td>
                            <td rowSpan={2}>
                                {minBet} - {maxBetFollowChoice?.maxBetRed3}
                            </td>
                        </tr>
                        <tr>
                            <td>1 đỏ, 3 trắng</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderStatistical = () => {
    return (
        <li className="guide-item">
            <h2>Bảng thống kê kết quả</h2>
            {StatisticalTable()}
        </li>
    );
};

const renderPayoutTable = (odds: OddsProps, minBet: string, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <div className="table-container">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Lựa Chọn</th>
                            <th>Trả Thưởng</th>
                            <th>Giới Hạn Cược (Min - Max)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chẵn</td>
                            <td rowSpan={2}>1:{odds.even}</td>
                            <td rowSpan={2}>
                                {minBet} - {maxBetFollowChoice?.maxBetMain}
                            </td>
                        </tr>
                        <tr>
                            <td>Lẻ</td>
                        </tr>
                        <tr>
                            <td>4 đỏ</td>
                            <td rowSpan={2}>1:{odds.red4}</td>
                            <td rowSpan={2}>
                                {minBet} - {maxBetFollowChoice?.maxBetRed4}
                            </td>
                        </tr>
                        <tr>
                            <td>4 trắng</td>
                        </tr>
                        <tr>
                            <td> 3 đỏ, 1 trắng</td>
                            <td rowSpan={2}>1:{odds.red3}</td>
                            <td rowSpan={2}>
                                {minBet} - {maxBetFollowChoice?.maxBetRed3}
                            </td>
                        </tr>
                        <tr>
                            <td> 1 đỏ, 3 trắng</td>
                        </tr>
                        <tr>
                            <td> 2 đỏ, 2 trắng</td>
                            <td>1:{odds.red2}</td>
                            <td rowSpan={2}>
                                {minBet} - {maxBetFollowChoice?.maxBetRed2}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderPayoutMini = (odds: OddsProps) => {
    return (
        <>
            <div className="table-container">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Lựa Chọn</th>
                            <th>Điều Kiện Thắng</th>
                            <th>Mô Tả</th>
                            <th>Tỷ Lệ Trả Thưởng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PayoutOrRuleDataOnTable(odds)}
                        <tr>
                            <td>4 đỏ</td>
                            <td>4 đỏ</td>
                            {renderFourRed()}
                            <td rowSpan={2}>1:{odds.red4}</td>
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
                            <td rowSpan={2}>1:{odds.red3}</td>
                        </tr>
                        <tr>
                            <td>1 đỏ, 3 trắng</td>
                            <td>1 đỏ, 3 trắng</td>
                            {renderOneRedThreeWhite()}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const SeDieGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, gameId, maxBetFollowChoice } = props;
    const { odds, minbet } = gameConfigs;
    const gameDescription = () => {
        switch (gameId) {
            case 9:
                const description1 = "là bản rút gọn - mini game của trò Xóc Đĩa, với giao diện đơn giản, ";
                const description2 = "nhẹ nhàng nhưng không kém phần lôi cuốn - hấp dẫn.";
                return `${description1}${description2} `;
            case 22:
                return "là phiên bản đặc biệt của trò Xóc Đĩa, với hạn mức cược được nâng cấp, mở rộng. ";
            default:
                return "là trò chơi có nguồn gốc dân gian từ lâu đời. ";
        }
    };

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} {gameDescription()}
                        Trò chơi có luật và cách chơi rất đơn giản, chỉ gồm 1 bát úp, 1 đĩa và 4 đồng xu. Trong đó, 4 đồng xu được thiết kế
                        2 mặt đỏ và trắng. Người chơi sẽ đặt cược vào các lựa chọn (cửa) có sẵn. Kết quả thắng thua sẽ phụ thuộc vào số mặt
                        đỏ hoặc trắng được lật của đồng xu sau khi xóc.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice, props?.gameId ?? 0, numberWithCommas(minbet))}</li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
                            Tỷ lệ trả thưởng đã bao gồm tiền cược.
                            {SeDieMini.includes(gameId ? gameId : SeDieMini[0])
                                ? renderPayoutMini(odds)
                                : renderPayoutTable(odds, numberWithCommas(minbet), maxBetFollowChoice)}
                        </li>
                    </ul>
                </li>
                {renderStatistical()}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default SeDieGuideVI;
