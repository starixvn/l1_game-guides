import React, { useEffect } from "react";

import { formatOdds } from "../../../../helpers/number-helper";
import { isShowedMD5, renderTermsAndConditionsVI } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import MD5 from "../../base/md5";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const renderMd5Vi = (locale?: string) => {
    return <MD5
        locale={locale}
        step1ImageUrl={"/static/images/mega-bigsmall/md5_step1_vi.png?v=3"}
        step2ImageUrl={"/static/images/mega-bigsmall/md5_step2_vi.png?v=3"}
        step3ImageUrl={"/static/images/mega-bigsmall/md5_step3_vi.png?v=1"}
        step4ImageUrl={"/static/images/mega-bigsmall/md5_step4_vi.png?v=1"}
        note={<div>Trong đó &#123;6, 2, 5&#125; sẽ tương ứng với giá trị của ba viên xúc xắc.</div>}
    />;
};

const MultiplayBigSmallGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat, orientation } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    {isShowedMD5(environment, orientation) ? 
                    (<p className="content">
                        "{gameName}" là trò chơi đổ xúc xắc đơn giản gồm 4 bàn game: Las Vegas, Marina Bay, Macau và Monte Carlo, trong đó Marina Bay và Monte Carlo là phiên bản siêu tốc với thời gian cược được rút ngắn. Tài Xỉu City cho phép chơi cùng lúc 4 bàn game với nhiều trải nghiệm mới hấp dẫn. Trò chơi sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt và người chơi sẽ dự đoán xem kết quả là Tài hay Xỉu.

                    </p>) : (<p className="content">
                        Tài Xỉu Monte Carlo là trò chơi đổ xúc xắc đơn giản, trò chơi sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt và người chơi sẽ dự đoán xem kết quả là Tài hay Xỉu.

                    </p>)}
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc">
                        <li>Với mỗi bàn game, xúc xắc sẽ được lắc trước khi phiên đặt cược bắt đầu.</li>
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
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>Tỷ lệ trả thưởng khi đặt vào Tài, Xỉu là {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>Tiền thắng đã bao gồm tiền cược.</li>
                    </ul>
                </li>
                {isShowedMD5(environment, orientation) && renderMd5Vi(props.locale)}
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideVI;
