import React from "react";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderIconChoice } from "../en";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

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
                                        <strong>{10 * (odds?.single ?? 0)}</strong>
                                    </li>
                                    <li>
                                        Cược 10 vào “Cua” và có hai biểu tượng Cua trong kết quả. Tiền thắng{" "}
                                        <strong>{10 * (odds?.double ?? 0)} </strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li className="guide-item">
                        {renderMD5VI()}
                        <div className="content">
                            <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả trò chơi {gameName}
                        </div>
                        <ul className="desc">
                            <li>
                                <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step1_vi.png?v=3"
                                    alt="md5-string"
                                />
                            </li>
                            <li>
                                <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết
                                quả.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step2_vi.png?v=3"
                                    alt="md5-result"
                                />
                                <div>Từ trái sang phải, &#123;6, 2, 5&#125; sẽ tương ứng với giá trị của ba viên xúc xắc.</div>
                            </li>
                            <li>
                                <strong>Bước 3:</strong> Truy cập{" "}
                                <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                    https://md5.services/
                                </a>{" "}
                                và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step3_vi.png?v=1"
                                    alt="hash-darling"
                                />
                            </li>
                            <li>
                                <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi
                                MD5 ở Bước 1.
                                <img
                                    className="format-img auto-center"
                                    src="/static/images/fish-prawn-crab/md5_step4_vi.png?v=1"
                                    alt="md5-checksum"
                                />
                            </li>
                        </ul>
                        <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
                    </li>
                )}
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideVI;
