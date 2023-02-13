import React from "react";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderIconChoice } from "../en";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";
import MD5 from "../../base/md5";

const FishPrawnCrabGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} hay còn gọi là bầu cua tôm cá, là trò chơi dân gian rất phổ biến ở Châu Á. Trò chơi sử dụng 3 viên xúc
                        xắc (xí ngầu) 6 mặt, mỗi mặt sẽ có một biểu tượng (linh vật) ứng với một cửa trên bàn chơi.
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">Nai</div>
                        <div className="text">Bầu</div>
                        <div className="text">Gà</div>
                        <div className="text">Cá</div>
                        <div className="text">Cua</div>
                        <div className="text">Tôm</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc">
                        <li>Xúc xắc sẽ được lắc trước khi phiên đặt cược bắt đầu.</li>
                        <li>
                            Người chơi có thể đặt cược vào 1 hoặc nhiều linh vật cùng lúc trong cùng 1 lượt chơi và không bị giới hạn số lần
                            đặt cược. Lưu ý, không thể hủy cược sau khi đặt.
                        </li>
                        <li>
                            Số tiền cược phải nằm trong khoảng từ {maxBetFollowChoice?.minBetMain} đến {maxBetFollowChoice?.maxBetChoice}{" "}
                            cho một lần đặt cược và tổng tiền cược tối đa cho 1 phiên là {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, kết quả
                            sẽ được hiển thị.
                        </li>
                        <li>
                            Người chơi sẽ thắng nếu trong ba viên xúc xắc xuất hiện linh vật mà người chơi đã đặt cược.
                            <ul className="detail">
                                <li>
                                    Nếu linh vật được chọn xuất hiện 1 lần &#8658; Tỷ lệ trả thưởng{" "}
                                    {formatOdds(odds?.single, fractionalOddsFormat)}
                                </li>
                                <li>
                                    Nếu linh vật được chọn xuất hiện 2 lần &#8658; Tỷ lệ trả thưởng{" "}
                                    {formatOdds(odds?.double, fractionalOddsFormat)}
                                </li>
                                <li>
                                    Nếu linh vật được chọn xuất hiện 3 lần &#8658; Tỷ lệ trả thưởng{" "}
                                    {formatOdds(odds?.triple, fractionalOddsFormat)}
                                </li>
                            </ul>
                        </li>
                        <div>
                            <strong>Lưu ý</strong>: Tiền thắng đã bao gồm tiền cược.
                        </div>
                        <li>
                            Nếu linh vật người chơi chọn không xuất hiện, đồng nghĩa với việc người chơi thua và mất số tiền cược.
                            <div>
                                <strong>Ví dụ:</strong>
                                <ul className="detail">
                                    <li>
                                        Cược 10 vào “Cá” và có một biểu tượng Cá trong kết quả. Tiền thắng{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong>
                                    </li>
                                    <li>
                                        Cược 10 vào “Cua” và có hai biểu tượng Cua trong kết quả. Tiền thắng{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))} </strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/fish-prawn-crab/md5_step1_vi.png?v=4"}
                        step2ImageUrl={"/static/images/fish-prawn-crab/md5_step2_vi.png?v=4"}
                        step3ImageUrl={"/static/images/fish-prawn-crab/md5_step3_vi.png?v=4"}
                        step4ImageUrl={"/static/images/fish-prawn-crab/md5_step4_vi.png?v=4"}
                        note={<div>Từ trái sang phải, &#123;3, 1, 2&#125; sẽ tương ứng với giá trị của ba viên xúc xắc.</div>}
                    />
                )}
                <BaseTermsAndConditions resources={baseTermAndConditionVi} />
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideVI;
