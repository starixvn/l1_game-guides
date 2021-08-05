import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable } from "../../../shared/se-die/vi";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";

const renderGameRule = (maxBet: string) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi dự đoán kết quả của 4 xu sau khi xóc bằng cách chọn cửa Chẵn hoặc Lẻ cùng với mức cược mong muốn.
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
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>Trong 1 phiên cược, người chơi chỉ được chọn 1 cửa duy nhất Chẵn hoặc Lẻ.</li>
                <li>
                    Người chơi có thể tăng lượng tiền đặt cược bằng cách đặt thêm vào cùng 1 lựa chọn trước khi thời gian đặt cược kết thúc.
                </li>
                <li>Tổng tiền cược tối đa cho 1 phiên là {maxBet}. Lưu ý, không thể hủy cược sau khi đặt.</li>
                <li>
                    Xu sẽ được xóc và kết quả cửa thắng sẽ được hiển thị khi hết thời gian đặt cược.Thời gian đặt cược cho mỗi phiên sẽ được
                    hiển thị đếm ngược trên bàn chơi.
                </li>
                <li>
                    Nhà cái cân cửa: trong trường hợp tiền đặt cược giữa 2 cửa chênh lệch nhau, số tiền chênh lệch sẽ được hoàn trả vào tài
                    khoản người chơi đặt cược sau. <br></br>Ví dụ: Người chơi A đặt 80 vào cửa Chẵn, người chơi B đặt <strong>50</strong>{" "}
                    vào cửa Lẻ, người chơi C đặt 60 vào cửa Lẻ. Hệ thống sẽ tính toán cân bằng lượng tiền giữa 2 cửa và sẽ trả lại cho C
                    (người chơi đặt cược sau) <strong>30</strong>
                </li>
            </ul>
        </>
    );
};

const SeDieGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là phiên bản rút gọn đặc biệt của trò Xóc Đĩa với tính năng “Nhà Cái Cân Cửa” hoàn toàn mới. Trò chơi có
                        giao diện đơn giản, nhẹ nhàng nhưng không kém phần lôi cuốn - hấp dẫn. Trò chơi gồm 1 bát úp, 1 đĩa và 4 đồng xu.
                        Trong đó, 4 đồng xu được thiết kế 2 mặt đỏ và trắng. Người chơi sẽ dự đoán xem kết quả là Chẵn hay Lẻ. Kết quả thắng
                        thua sẽ phụ thuộc vào số mặt đỏ hoặc trắng được lật của đồng xu sau khi xóc.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(numberWithCommas(maxbet))}</li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
                            Tỷ lệ trả thưởng đã bao gồm tiền cược.
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th>Lựa Chọn</th>
                                            <th>Tỷ Lệ Trả Thưởng</th>
                                            <th>
                                                Giới Hạn Cược <br /> (Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Chẵn</td>
                                            <td rowSpan={2}>1:{odds.even}</td>
                                            <td rowSpan={2}>
                                                {numberWithCommas(minbet)} - {numberWithCommas(maxbet)}
                                            </td>
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
                <li className="guide-item">
                    <h2>Bảng thống kê kết quả</h2>
                    <ul className="desc">
                        <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
                    </ul>
                </li>

                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default SeDieGuideVI;
