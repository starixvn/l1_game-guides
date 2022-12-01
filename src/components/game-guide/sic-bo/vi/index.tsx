import React from "react";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderPayoutsTableOnBody } from "../en";
import Styles from "../sic-bo.module.scss";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi chọn mệnh giá và nhấp vào lựa chọn bạn muốn đặt cược trước khi hết thời gian quy định. Nếu kết quả mở ra
                    trùng với lựa chọn của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào một hoặc nhiều lựa chọn cùng lúc trong cùng một lượt chơi và không bị giới hạn số lần đặt
                    cược. <strong>Lưu ý,</strong> không thể hủy cược sau khi đặt.
                </li>
                <li>Tổng tiền cược tối đa cho một phiên là {maxBet}</li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Xúc xắc sẽ được lắc khi bắt đầu phiên, kết
                    quả sẽ được hiển thị khi hết thời gian đặt cược.
                </li>
                <li>
                    Tổng tiền cược của tất cả người chơi trên từng cửa cược là thông tin mang tính tham khảo. Đối với các thị trường và tiền
                    tệ khác nhau, số tổng hiển thị được quy đổi dựa theo tỉ giá nội bộ do công ty quy định.
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    t: TFunction,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>
                    Tiền thắng đã bao gồm tiền cược.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Loại cược</th>
                                    <th>Lựa chọn</th>
                                    <th>Tỷ lệ trả thưởng</th>
                                    <th>Giới hạn cược (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Tài/Xỉu</td>
                                    <td>Tài</td>
                                    <td rowSpan={2}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                </tr>
                                <tr>
                                    <td>Bộ Ba Bất Kỳ</td>
                                    <td>Bộ Ba Bất Kỳ</td>
                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>Cược số</td>
                                    <td rowSpan={3}>Xúc xắc 1 đến 6</td>
                                    <td>Xuất hiện một lần {formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSpecific1}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xuất hiện hai lần {formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Xuất hiện ba lần {formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                </tr>
                                {renderPayoutsTableOnBody(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SicBoGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation(gameName.toLocaleLowerCase());
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò chơi đổ xúc xắc, rất được yêu thích tại các casino. Trò chơi có luật và cách chơi đơn giản, sử
                        dụng ba viên xúc xắc (xí ngầu) 6 mặt, các mặt lần lượt từ 1 đến 6 chấm, tương ứng từ 1 đến 6 điểm.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                <li className="guide-item">
                    <h2>Điều kiện thắng</h2>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th className={Styles["bet-option-width"]}>Loại cược</th>
                                            <th className={Styles["bet-choice-width"]}>Lựa chọn</th>
                                            <th>Điều kiện thắng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>Tài/Xỉu</td>
                                            <td>Tài</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li> Thắng nếu tổng điểm của ba xúc xắc từ 11 đến 17.</li>
                                                    <li> Thua nếu kết quả có bộ ba bất kỳ.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Xỉu</td>
                                            <td className="text-start">
                                                <ul className="plus">
                                                    <li> Thắng nếu tổng điểm của ba xúc xắc từ 4 đến 10.</li>
                                                    <li> Thua nếu kết quả có bộ ba bất kỳ.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Bộ Ba Bất Kỳ</td>
                                            <td>Bộ Ba Bất Kỳ</td>
                                            <td className="text-start">Thắng nếu kết quả là một bộ ba xúc xắc bất kỳ.</td>
                                        </tr>
                                        <tr>
                                            <td>Cược số</td>
                                            <td>Xúc xắc 1 đến 6</td>
                                            <td className="text-start">Thắng nếu xúc xắc người chơi chọn xuất hiện trong kết quả.</td>
                                        </tr>
                                        <tr>
                                            <td>Tổng điểm</td>
                                            <td>Từ 4 đến 17</td>
                                            <td className="text-start">
                                                Thắng nếu lựa chọn của người chơi bằng với tổng điểm của ba xúc xắc.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderPayouts(odds, maxBetFollowChoice, t, fractionalOddsFormat)}
                <li className="guide-item">
                    {renderMD5VI()}
                    <div className="content">
                        <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả trò chơi {gameName}
                    </div>
                    <ul className="desc">
                        <li>
                            <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step1_vi.png?v=3" alt="md5-string" />
                        </li>
                        <li>
                            <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết quả.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step2_vi.png?v=3" alt="md5-result" />
                            <div>Từ trái sang phải, &#123;5, 5, 6&#125; sẽ tương ứng với giá trị của ba viên xúc xắc.</div>
                        </li>
                        <li>
                            <strong>Bước 3:</strong> Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step3_vi.png?v=1" alt="hash-darling" />
                        </li>
                        <li>
                            <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5
                            ở Bước 1.
                            <img className="format-img auto-center" src="/static/images/sicbo/md5_step4_vi.png?v=1" alt="md5-checksum" />
                        </li>
                    </ul>
                    <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default SicBoGuideVI;
