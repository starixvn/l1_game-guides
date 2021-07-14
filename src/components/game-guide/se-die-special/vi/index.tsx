import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { StatisticalTable, PayoutOrRuleDataOnTable } from "../../../shared/se-die/vi";

const renderGameRule = (maxbet: string, minbet: string, odds: OddsProps) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi dự đoán kết quả của 4 xu sau khi xóc bằng cách chọn cửa Chẵn hoặc Lẻ cùng với mức cược mong muốn.
                    <div className="table-container">
                        <table className="table text-center table-medium left">
                            <thead>
                                <tr>
                                    <th>Lựa Chọn</th>
                                    <th>Điều Kiện Thắng</th>
                                    <th>Mô Tả</th>
                                    <th>Tỷ Lệ Trả Thưởng (đã bao gồm tiền cược)</th>
                                </tr>
                            </thead>
                            <tbody>{PayoutOrRuleDataOnTable(odds)}</tbody>
                        </table>
                    </div>
                </li>
                <li>Trong 1 phiên cược, người chơi chỉ được chọn 1 cửa duy nhất Chẵn hoặc Lẻ.</li>
                <li>Sau khi chọn mức tiền cược, nhấn nút Đồng Ý để xác nhận hoặc chọn Xóa nếu muốn nhập lại số tiền khác.</li>
                <li>
                    Người chơi có thể tăng lượng tiền đặt cược bằng cách đặt thêm vào cùng 1 lựa chọn trước khi thời gian đặt cược kết thúc.
                </li>
                <li>
                    Số tiền cược phải nằm trong khoảng từ {minbet} đến {maxbet} cho một lần đặt cược và tổng tiền cược tối đa cho 1 phiên là{" "}
                    {maxbet}
                </li>
                <li>
                    Xu sẽ được xóc và kết quả cửa thắng sẽ được hiển thị khi hết thời gian đặt cược.Thời gian đặt cược cho mỗi phiên sẽ được
                    hiển thị đếm ngược trên bàn chơi.
                </li>
                <li>
                    Nhà cái cân cửa: trong trường hợp tiền đặt cược giữa 2 cửa chênh lệch nhau, số tiền chênh lệch sẽ được hoàn trả vào tài
                    khoản người chơi đặt cược sau. Ví dụ: Người chơi A đặt 80 vào cửa Chẵn, người chơi B đặt <strong>50</strong> vào cửa Lẻ,
                    người chơi C đặt 60 vào cửa Lẻ. Hệ thống sẽ tính toán cân bằng lượng tiền giữa 2 cửa và sẽ trả lại cho C (người chơi đặt
                    cược sau) <strong>30</strong>
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
                <li className="guide-item">{renderGameRule(numberWithCommas(maxbet), numberWithCommas(minbet), odds)}</li>
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
