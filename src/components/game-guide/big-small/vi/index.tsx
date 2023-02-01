import React, { useEffect } from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteVN } from "../../../shared/promotion-note/vi";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

const BigSmallGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò chơi đổ xúc xắc đơn giản, trò chơi sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt và người chơi sẽ dự đoán
                        xem kết quả là Tài hay Xỉu.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc">
                        <li>Xúc xắc sẽ được lắc trước khi phiên đặt cược bắt đầu.</li>
                        <li>Người chơi dự đoán tổng điểm xúc xắc bằng cách chọn cửa Tài hoặc Xỉu cùng với mức cược mong muốn.</li>
                        <ul className="detail">
                            <li>Tài: tổng điểm 3 viên xúc xắc &gt;= 11</li>
                            <li>Xỉu: tổng điểm 3 viên xúc xắc &lt;= 10</li>
                        </ul>
                        <li>Trong một phiên cược, người chơi chỉ được chọn 1 cửa duy nhất Tài hoặc Xỉu.</li>
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
                            vào tài khoản người chơi đặt cược sau.
                            <p>
                                <strong>Ví dụ:</strong> Người chơi A đặt 100 vào cửa Tài, người chơi B đặt 40 vào cửa Xỉu, người chơi C đặt
                                80 vào cửa Xỉu. Hệ thống sẽ tính toán cân bằng lượng tiền giữa 2 cửa và sẽ trả lại cho C (người chơi đặt
                                cược sau) 20
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>Tỷ lệ trả thưởng khi đặt vào Tài, Xỉu là {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>Tiền thắng đã bao gồm tiền cược.</li>
                        {renderPromotionNoteVN(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && <MD5
                    locale={props.locale}
                    step1ImageUrl={"/static/images/big-small/md5_step1_vi.png?v=3"}
                    step2ImageUrl={"/static/images/big-small/md5_step2_vi.png?v=3"}
                    step3ImageUrl={"/static/images/big-small/md5_step3_vi.png?v=1"}
                    step4ImageUrl={"/static/images/big-small/md5_step4_vi.png?v=1"}
                    note={<div>Từ trái sang phải, &#123;1, 5, 6&#125; sẽ tương ứng với giá trị của ba viên xúc xắc.</div>}
                />}
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default BigSmallGuideVI;
