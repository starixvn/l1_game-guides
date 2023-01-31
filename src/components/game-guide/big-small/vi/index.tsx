import React, { useEffect } from "react";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteVN } from "../../../shared/promotion-note/vi";
import { formatOdds } from "../../../../helpers/number-helper";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";
import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả trò chơi {gameName}
            </div>
            <ul className="desc">
                <li>
                    <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step1_vi.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết quả.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step2_vi.png?v=3" alt="md5-result" />
                    <div>Từ trái sang phải, &#123;1, 5, 6&#125; sẽ tương ứng với giá trị của ba viên xúc xắc.</div>
                </li>
                <li>
                    <strong>Bước 3:</strong> Truy cập{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step3_vi.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước
                    1.
                    <img className="format-img auto-center" src="/static/images/big-small/md5_step4_vi.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
            <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
        </>
    );
};

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
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5VI()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionVi} /></li>
            </ul>
        </>
    );
};
export default BigSmallGuideVI;
