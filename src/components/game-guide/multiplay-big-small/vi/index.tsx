import React, { useEffect } from "react";

import { ENVIRONMENT } from "../../../../common/constants";
import { renderTermsAndConditionsVI } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

export const renderMD5VI = () => {
    return (
        <>
            <h2> MD5 (Message-Digest algorithm 5) </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">Công nghệ MD5</span>
                    <ul className="desc">
                        <li>
                            <strong>MD5</strong> là công nghệ cho phép người chơi xác thực và kiểm tra tính minh bạch của kết quả trò chơi
                            thông qua bên thứ ba.
                        </li>
                        <li>Kết quả trò chơi sẽ được hệ thống tạo ngẫu nhiên trước khi đặt cược. </li>
                        <li>
                            Người chơi sẽ kiểm tra sự đồng nhất giữa kết quả được hệ thống tạo ra ngẫu nhiên trước khi người chơi đặt cược
                            (Chuỗi <strong>MD5</strong>) và kết quả cuối cùng sau khi được công bố (<strong>Kết Quả</strong>).
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">Tra Cứu MD5</span>
                    <ul className="desc">
                        <li>
                            <strong>Bước 1</strong>: Copy chuỗi <strong>MD5</strong> trong game trước khi kết quả được công bố.
                        </li>
                        <li>
                            <strong>Bước 2</strong>: Copy chuỗi <strong>Kết Quả</strong> sau khi tổng điểm xúc xắc được công bố.
                        </li>
                        <li>
                            <strong>Bước 3</strong>: Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                        </li>
                        <li>
                            <strong>Bước 4</strong>: Bấm nút <strong>“hash darling, hash!”</strong>. So sánh chuỗi{" "}
                            <strong>MD5 checksum</strong> vừa được tạo ra và chuỗi MD5 ở <strong>Bước 1.</strong>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="content">
                Nếu 2 chuỗi trùng khớp, chứng minh kết quả được công bố không thay đổi so với kết quả được hệ thống tạo ra ngẫu nhiên trước
                khi đặt cược.
            </div>
        </>
    );
};

const renderMD5Example = (gameName: string) => {
    return (
        <>
            <div className="content">
                <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả
            </div>
            <ul className="desc">
                <li>
                    <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step1_vi.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết quả.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step2_vi.png?v=3" alt="md5-result" />
                    <div>Trong đó &#123;6, 2, 5&#125; sẽ tương ứng với giá trị của ba viên xúc xắc.</div>
                </li>
                <li>
                    <strong>Bước 3:</strong> Truy cập{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step3_vi.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước
                    1.
                    <img className="format-img auto-center" src="/static/images/mega-bigsmall/md5_step4_vi.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
            <p className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</p>
        </>
    );
};

const MultiplayBigSmallGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment } = props;
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
                        {gameName} - tựa game Tài Xỉu không cân cửa hoàn toàn mới. Trò chơi gồm 4 bàn game: Las Vegas, Marina Bay, Macau và
                        Monte Carlo, trong đó Marina Bay và Monte Carlo là phiên bản siêu tốc với thời gian cược được rút ngắn. {gameName}{" "}
                        cho phép chơi cùng lúc 4 bàn game với nhiều trải nghiệm mới hấp dẫn. Trò chơi sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt
                        và người chơi sẽ dự đoán xem kết quả là Tài hay Xỉu.
                    </p>
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
                        <li>Tỷ lệ trả thưởng khi đặt vào Tài, Xỉu là 1 ăn {odds?.big}</li>
                        <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5VI()}
                        {renderMD5Example(gameName)}
                    </li>
                )}
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideVI;
