import React from "react";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { formatOdds } from "../../../../helpers/number-helper";

const OddEvenTurboGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò chơi đổ xúc xắc, có luật chơi rất đơn giản. Trò chơi sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt và
                        người chơi sẽ dự đoán xem kết quả là Chẵn hay Lẻ.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc">
                        <li>Xúc xắc sẽ được lắc trước khi phiên đặt cược bắt đầu.</li>
                        <li>Người chơi dự đoán tổng điểm xúc xắc bằng cách chọn cửa Chẵn hoặc Lẻ cùng với mức cược mong muốn.</li>
                        <ul className="detail">
                            <li>
                                <strong>Chẵn:</strong> tổng điểm 3 viên xúc xắc là số chẵn.
                            </li>
                            <li>
                                <strong>Lẻ:</strong> tổng điểm 3 viên xúc xắc là số lẻ.{" "}
                            </li>
                        </ul>
                        <li>Trong 1 phiên cược, người chơi chỉ được chọn 1 cửa duy nhất Chẵn hoặc Lẻ.</li>
                        <li>Sau khi chọn mức tiền cược, nhấn nút Đồng Ý để xác nhận hoặc chọn Xóa nếu muốn nhập lại số tiền khác.</li>
                        <li>
                            Người chơi có thể tăng lượng tiền đặt cược bằng cách đặt thêm vào cùng 1 lựa chọn trước khi thời gian đặt cược
                            kết thúc.
                        </li>
                        <li>
                            Số tiền cược phải nằm trong khoảng từ {maxBetFollowChoice?.minBetMain} đến {maxBetFollowChoice?.maxBetMain} cho
                            một lần đặt cược và tổng tiền cược tối đa cho 1 phiên là {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, tổng điểm
                            xúc xắc sẽ được hiển thị.
                        </li>
                        <li>
                            Nhà cái cân cửa: trong trường hợp tiền đặt cược giữa 2 cửa chênh lệch nhau, số tiền chênh lệch sẽ được hoàn trả
                            vào tài khoản người chơi đặt cược sau. Ví dụ: Người chơi A đặt 100 vào cửa Chẵn, người chơi B đặt 40 vào cửa Lẻ,
                            người chơi C đặt 70 vào cửa Lẻ. Hệ thống sẽ tính toán cân bằng lượng tiền giữa 2 cửa và sẽ trả lại cho C (người
                            chơi đặt cược sau) 10.
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>Tỷ lệ trả thưởng khi đặt vào Chẵn, Lẻ là {formatOdds(odds?.even, fractionalOddsFormat)}</li>
                        <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                    </ul>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default OddEvenTurboGuideVI;
