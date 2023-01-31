import React from "react";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../win-three.module.scss";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import { formatOdds } from "../../../../helpers/number-helper";
import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";

const renderGameRule = (maxBet: string | undefined) => {
    return (
        <>
            <h2>Cách Chơi</h2>
            <ul className="desc">
                <li>Bắt đầu phiên cược, hệ thống sẽ lần lượt chia ba lá bài úp cho tay bài Long và Phụng.</li>
                <li>
                    Người chơi lựa chọn mệnh giá chip phù hợp và nhấp vào ô cược mong muốn. <br></br>
                    <strong>Lưu ý:</strong> không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Người chơi có thể đặt cược ở bất kì cửa cược có sẵn trên bàn; ngoại trừ cửa cược Long và Phụng, chỉ có thể cược vào một
                    trong hai cửa cược này.
                </li>
                <li>
                    Có tất cả 7 cửa cược để lựa chọn:
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Cửa Cược</th>
                                    <th>Điều Kiện Thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Long </td>
                                    <td className="text-start">Kết quả tay bài Long lớn hơn Phụng.</td>
                                </tr>
                                <tr>
                                    <td>Phụng</td>
                                    <td className="text-start">Kết quả tay bài Phụng lớn hơn Long.</td>
                                </tr>
                                <tr>
                                    <td>Đôi 8 trở lên</td>
                                    <td className="text-start">
                                        Kết quả của tay bài thắng có chứa Đôi 9 đến đôi A, Sảnh, Thùng, Thùng Phá Sảnh, Bão
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bão</td>
                                    <td className="text-start">Kết quả của tay bài thắng là “Bão”.</td>
                                </tr>
                                <tr>
                                    <td style={{ width: 250 }}>Thùng Phá Sảnh</td>
                                    <td className="text-start">Kết quả của tay bài thắng là “Thùng Phá Sảnh”.</td>
                                </tr>
                                <tr>
                                    <td>Thùng</td>
                                    <td className="text-start">Kết quả của tay bài thắng là “Thùng”. </td>
                                </tr>
                                <tr>
                                    <td>Sảnh </td>
                                    <td className="text-start">Kết quả của tay bài thắng là “Sảnh”. </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>Hệ thống sẽ so sánh thứ hạng giữa tay bài Long và Phụng để xác định thắng thua. </li>
                <li>
                    Nếu hai tay bài Long và Phụng có cùng thứ hạng và giá trị lá bài, kết quả Hòa và tiền cược của phiên đó sẽ được hoàn
                    trả.
                </li>
                <li>Bài sẽ được xào lại sau mỗi phiên. Tổng tiền cược tối đa cho một phiên là {maxBet}</li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Trả Thưởng</h2>
            <ul className="desc">
                <li>
                    Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả. <br></br>
                    <strong>Lưu ý:</strong> Tiền thắng đã bao gồm tiền cược.
                </li>
                <div className="table-container">
                    <table className="table text-center table-small">
                        <thead>
                            <tr>
                                <th className={Styles["payout-option"]}>Cửa Cược</th>
                                <th>Tỷ Lệ Trả Thưởng</th>
                                <th>
                                    Giới Hạn Cược <br></br> (Min - Max)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Long</td>
                                <td>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                </td>
                            </tr>
                            <tr>
                                <td>Phụng</td>
                                <td>{formatOdds(odds?.phoenix, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPhoenix}
                                </td>
                            </tr>
                            <tr>
                                <td>Đôi 8 trở lên </td>
                                <td>{formatOdds(odds?.pair8Plus, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPair8Plus}
                                </td>
                            </tr>
                            <tr>
                                <td>Bão</td>
                                <td>{formatOdds(odds?.threeOfAKind, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetThreeOfAKind}
                                </td>
                            </tr>
                            <tr>
                                <td>Thùng Phá Sảnh</td>
                                <td>{formatOdds(odds?.straightFlush, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightFlush}
                                </td>
                            </tr>
                            <tr>
                                <td>Thùng</td>
                                <td>{formatOdds(odds?.flush, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFlush}
                                </td>
                            </tr>
                            <tr>
                                <td>Sảnh</td>
                                <td>{formatOdds(odds?.straight, fractionalOddsFormat)}</td>
                                <td>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraight}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ul>
        </li>
    );
};

export const renderCardType = () => {
    return (
        <>
            <li className="guide-item">
                <h2>Cách Xếp Bài</h2>
                <div className="table-container text-center">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>Tay Bài</th>
                                <th>Mô Tả</th>
                                <th>Ví Dụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>
                                    <strong>Sát Thủ Bão</strong>
                                </td>
                                <td className="text-start">
                                    Ba lá bài 2, 3, 5 không đồng chất hoặc có hai trong ba đồng chất, lá còn lại khác chất.{" "}
                                </td>
                                <td width={250}>
                                    <span className={Styles["wrapper-card"]}>
                                        <img
                                            src="/static/images/win-three-cards/235-1.png"
                                            alt="235"
                                            height={65}
                                            loading="eager"
                                            style={{ marginBottom: 5 }}
                                        />
                                    </span>{" "}
                                    <br></br>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/235-2.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Bão</strong>
                                </td>
                                <td className="text-start">Ba lá bài có cùng giá trị.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/threeKind.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Thùng Phá Sảnh</strong>
                                </td>
                                <td className="text-start">Ba lá bài đồng chất và có giá trị liên tiếp.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straightFlush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Thùng</strong>
                                </td>
                                <td className="text-start">Ba lá bài đồng chất và không liên tiếp.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/flush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Sảnh</strong>
                                </td>
                                <td className="text-start">Ba lá bài với giá trị liên tiếp.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straight.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Đôi</strong>
                                </td>
                                <td className="text-start">Hai trong ba lá bài có cùng giá trị.</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/pair.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Bài Cao </strong>
                                </td>
                                <td className="text-start">
                                    Không bao gồm các loại trên và giá trị được xác định bởi quân bài mang giá trị cao nhất.
                                </td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/highCard.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </>
    );
};

export const renderRankingLevel = () => {
    return (
        <>
            <li className="guide-item">
                <h2>Xác Định Thắng Thua</h2>
                <ul className="desc">
                    <li>
                        <strong>Thứ hạng của lá bài</strong>
                        <ul className="detail">
                            <li>
                                A {">"} K {">"} Q {">"} J {">"} 10 {">"} 9 {">"} 8 {">"} 7 {">"} 6 {">"} 5 {">"} 4 {">"} 3 {">"} 2
                            </li>
                            <li>
                                Chất bài (<span className={Styles["suit-black"]}>♠</span>, <span className={Styles["suit-black"]}>♣</span>,{" "}
                                <span className={Styles["suit-red"]}>♦</span>, <span className={Styles["suit-red"]}>♥</span>) không ảnh
                                hưởng đến thứ hạng của lá bài.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Thứ hạng tay bài</strong>
                        <ul className="detail">
                            <li>
                                Bão {">"} Thùng Phá Sảnh {">"} Thùng {">"} Sảnh {">"} Đôi {">"} Bài Cao
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Sát Thủ Bão {">"} Bão</strong>
                        <ul className="detail">
                            <li>Nếu “Bão” và “Sát Thủ Bão” cùng xuất hiện trong kết quả thì “Sát Thủ Bão” có thứ hạng cao hơn “Bão”.</li>
                            <li>Nếu không có “Bão” trong kết quả thì “Sát Thủ Bão” có thứ hạng thấp nhất trong nhóm Bài Cao.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Đôi</strong>
                        <ul className="detail">
                            <li>Nếu Long và Phụng đều có Đôi, thì giá trị của Đôi sẽ xác định bên thắng.</li>
                            <li>Nếu hai bên có cùng giá trị đôi, giá trị của lá bài thứ ba sẽ quyết định thắng thua. </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Thùng, Bài Cao</strong>
                        <ul className="detail">
                            <li>
                                Lá bài của hai tay bài sẽ lần lược so sánh với nhau để xác định thứ hạng. Bắt đầu với hai lá bài có giá trị
                                lớn nhất, nếu giá trị quân bài của hai lá lớn nhất là tương đương, thì so sánh các quân bài có giá trị lớn
                                kế tiếp.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Thùng Phá Sảnh, Sảnh</strong>
                        <ul className="detail">
                            <li>
                                Với tay bài Thùng Phá Sảnh hoặc Sảnh, lá Ace (A) có thể được tính là giá trị cao nhất hoặc nhỏ nhất.
                                <br></br>
                                Ví dụ: QKA {">"} JQK {">"} …… {">"} 234 {">"} A23
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </>
    );
};

const WinThreeCardsGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới Thiệu</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName} là một trong những thể loại game bài và cực kì phổ biến trong các sòng Casino. Trò chơi sử dụng bộ bài
                        tiêu chuẩn 52 lá (không bao gồm lá Joker). Mục tiêu của trò chơi là so sánh thứ hạng giữa tay bài Long và Phụng để
                        xác định kết quả thắng thua. Tay bài có thứ hạng cao hơn sẽ thắng.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderCardType()}
                {renderRankingLevel()}
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
                                src="/static/images/win-three-cards/md5_step1_vi.png?v=3"
                                alt="md5-string"
                            />
                        </li>
                        <li>
                            <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết quả.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step2_vi.png?v=3"
                                alt="md5-result"
                            />
                            <div>
                                Từ trái sang phải, 8♠️ Q♥️ 5♥️ 9♠️ 9♣ 10♠️ tương ứng với thứ tự được chia của mỗi lá bài khi bắt đầu phiên.
                            </div>
                        </li>
                        <li>
                            <strong>Bước 3:</strong> Truy cập{" "}
                            <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                https://md5.services/
                            </a>{" "}
                            và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step3_vi.png?v=1"
                                alt="hash-darling"
                            />
                        </li>
                        <li>
                            <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5
                            ở Bước 1.
                            <img
                                className="format-img auto-center"
                                src="/static/images/win-three-cards/md5_step4_vi.png?v=1"
                                alt="md5-checksum"
                            />
                        </li>
                    </ul>
                    <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
                </li>
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionVi} /></li>
            </ul>
        </>
    );
};
export default WinThreeCardsGuideVI;
