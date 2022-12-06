import React from "react";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { minPayoutBlue, minPayoutRed, minPayoutOver, minPayoutUnder } from "../index";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import Styles from "../keno-match.module.scss";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";
const classBetOddWd = "bet-odd-wd";

const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi nhấp vào lựa chọn mong muốn và hoàn tất việc đặt cược trước khi hết thời gian quy định. </li>
                <li>Bạn có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược.</li>
                <li>
                    Tổng tiền cược tối đa cho 1 phiên là {maxBetRound}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                </li>
            </ul>
        </>
    );
};

const renderBettingOptions = () => {
    return (
        <>
            <h2>Luật chơi</h2>
            <ul className="desc">
                <li>Mỗi phiên sẽ có 2 đợt mở số, đợt một dành cho kết quả “Hiệp 1”, đợt hai dành cho “Toàn trận”.</li>
                <li>
                    Người chơi có 2 khoảng thời gian đặt cược:
                    <ul className="detail">
                        <li>
                            Đặt cược trước khi công bố kết quả Hiệp 1, bạn có thể đặt cược cho “Hiệp 1” và “Toàn trận”, áp dụng cho tất cả
                            các loại cược. Tỷ lệ cược được cố định và giữ nguyên qua các phiên chơi.
                        </li>
                        <li>
                            <strong>Đặt cược Live</strong>: đặt cược ngay sau khi công bố kết quả 10 số được rút ngẫu nhiên trong “Hiệp 1”
                            cho “Đội Xanh” và “Đội Đỏ”. <strong>Lưu ý</strong>: bạn chỉ có thể đặt vào “Toàn trận”. Tỷ lệ cược sẽ thay đổi
                            dựa trên kết quả của “Hiệp 1”.
                        </li>
                    </ul>
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Lựa Chọn</th>
                                    <th>Điều Kiện Thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Đội Xanh
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Hiệp 1</td>
                                    <td className="text-start">
                                        Thắng nếu tổng điểm 10 số được rút cho Đội Xanh {`>`} Đội Đỏ.
                                        <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận</td>
                                    <td rowSpan={2} className="text-start">
                                        Thắng nếu tổng điểm (Toàn trận + Hiệp 1) cho Đội Xanh {`>`} Đội Đỏ.
                                        <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Đội Đỏ
                                    </td>
                                    <td className="text-start">Hiệp 1</td>
                                    <td className="text-start">
                                        Thắng nếu tổng điểm 10 số được rút cho Đội Đỏ {`>`} Đội Xanh.
                                        <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận</td>
                                    <td rowSpan={2} className="text-start">
                                        Thắng nếu tổng điểm (Toàn trận + Hiệp 1) cho Đội Đỏ {`>`} Đội Xanh.
                                        <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 đội bằng nhau.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Tài
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Hiệp 1</td>
                                    <td className="text-start">Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội {`>=`} 811</td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận</td>
                                    <td rowSpan={2} className="text-start">
                                        Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội {`>=`} 1621
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Xỉu
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Hiệp 1</td>
                                    <td className="text-start">Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội {`<`} 811</td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận</td>
                                    <td rowSpan={2} className="text-start">
                                        Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội {`<`} 1621
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Chẵn
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Hiệp 1</td>
                                    <td className="text-start">Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội là số chẵn.</td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận</td>
                                    <td rowSpan={2} className="text-start">
                                        Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội là số chẵn.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        Lẻ
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Hiệp 1</td>
                                    <td className="text-start">Thắng nếu tổng điểm (trong Hiệp 1) của cả 2 đội là số lẻ.</td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận</td>
                                    <td rowSpan={2} className="text-start">
                                        Thắng nếu tổng điểm (Toàn trận + Hiệp 1) của cả hai đội là số lẻ.
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    const getMinMaxOdd = (min: number, max: number | undefined) => {
        return `${fractionalOddsFormat ? numberWithCommas(min - 1) : min} - ${
            fractionalOddsFormat && max ? numberWithCommas(max - 1) : max
        }`;
    };
    return (
        <>
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>
                    Tỷ lệ cược đã bao gồm tiền vốn.
                    <ul className="game-guide-alpha">
                        <li>
                            <strong>a) Đặt cược trước khi công bố kết quả Hiệp 1</strong>
                            <div className={`table-container ${Styles["table-payouts-bet"]}`}>
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className={Styles["payouts-option-width"]}>
                                                Lựa Chọn
                                            </th>
                                            <th>Tỷ Lệ Trả Thưởng</th>
                                            <th>
                                                Hạn Mức Cược <br></br>(Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-start" rowSpan={2}>
                                                Đội Xanh
                                            </td>
                                            <td className="text-start">Hiệp 1</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhBlue, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Toàn trận</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start" rowSpan={2}>
                                                Đội Đỏ
                                            </td>
                                            <td className="text-start">Hiệp 1</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhRed, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetRedChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Toàn trận</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start" rowSpan={2}>
                                                Tài
                                            </td>
                                            <td className="text-start">Hiệp 1</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhOver, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetOverChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Toàn trận</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start" rowSpan={2}>
                                                Xỉu
                                            </td>
                                            <td className="text-start">Hiệp 1</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhUnder, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetUnderChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Toàn trận</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start" rowSpan={2}>
                                                Chẵn
                                            </td>
                                            <td className="text-start">Hiệp 1</td>
                                            <td rowSpan={4}>{formatOdds(odds?.fhEven, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetEvenChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Toàn trận</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start" rowSpan={2}>
                                                Lẻ
                                            </td>
                                            <td className="text-start">Hiệp 1</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Toàn trận</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>
                            <strong>b) Đặt cược Live</strong>
                            <div>
                                <ul className="desc">
                                    <li>
                                        Với loại cược <strong>Đội Xanh/Đỏ - Toàn trận (Live)</strong> và{" "}
                                        <strong>Tài/Xỉu - Toàn trận (Live)</strong>
                                        <ul className="detail">
                                            <li>Tỷ lệ cược sẽ thay đổi tùy vào kết quả “Hiệp 1” của 2 đội.</li>
                                            <li>Hạn mức cược tối đa sẽ thay đổi tùy vào tỷ lệ cược.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Đội Xanh/Đội Đỏ - Toàn trận (Live)</strong>: Tỷ lệ cược chỉ khả dụng khi tổng điểm chênh
                                        lệch trong “Hiệp 1” giữa Đội Xanh và Đội Đỏ từ -150 đến 150
                                    </li>
                                    <li>
                                        <strong>Tài/Xỉu - Toàn trận (Live)</strong>: Tỷ lệ cược chỉ khả dụng khi tổng điểm trong “Hiệp 1”
                                        của cả Đội Xanh và Đội Đỏ từ 661 đến 980
                                    </li>
                                    <li className="contentBeforeEmpty">
                                        <div className={`table-container ${Styles["table-payouts-bet-live"]}`}>
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2} rowSpan={2}>
                                                            Lựa Chọn
                                                        </th>
                                                        <th rowSpan={2}>
                                                            Tỷ Lệ Cược
                                                            <br></br>(Min - Max)
                                                        </th>
                                                        <th colSpan={2}>Hạn Mức Cược</th>
                                                    </tr>
                                                    <tr>
                                                        <th className={Styles["payouts-min-wd"]}>Min</th>
                                                        <th>Max</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Đội Xanh</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutBlue, odds?.liveFTBlue)}
                                                        </td>
                                                        <td> {maxBetFollowChoice?.minBetRound}</td>
                                                        <td rowSpan={4} className="text-start">
                                                            Mức cược tối đa sẽ thay đổi tùy vào tỷ lệ cược.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Đội Đỏ</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutRed, odds?.liveFTRed)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Tài</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutOver, odds?.liveFTOver)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Xỉu</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutUnder, odds?.liveFTUnder)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Chẵn</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                                            {formatOdds(odds?.liveFTEven, fractionalOddsFormat)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>Lẻ</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Toàn trận (Live)</td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const KenoMatchGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} gồm 2 bộ số, một cho Đội Xanh và một cho Đội Đỏ, mỗi bộ gồm 80 số (từ 01 đến 80). Hệ thống sẽ rút ngẫu
                        nhiên 20 số (không trùng lặp) cho mỗi đội, trong đó 10 số được rút cho “Hiệp 1” và 10 số được rút cho “Toàn Trận”.
                        Người chơi đặt cược và dự đoán tổng điểm của các số được rút cho mỗi đội.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderBettingOptions()}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                <li id="md5" className="guide-item">
                    {renderMD5VI()}
                    <div className="content">
                        <strong> Ví dụ:</strong> Kiểm tra tính minh bạch trong kết quả Hiệp 1 của {gameName}
                        <ul className="desc">
                            <li>
                                <strong>Bước 1</strong>: Copy chuỗi MD5 trước khi kết quả Hiệp 1 được công bố.
                                <div className={Styles["md5-section"]}>
                                    <span className={`${Styles["text"]}`}>
                                        <strong>Chuỗi MD5:</strong> 8489717e21867fa5420b055e5abd2b46
                                    </span>
                                    <div className={Styles["copy-box"]}>
                                        <span className={Styles["copy-text"]}>Copy</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <strong>Bước 2</strong>: Copy chuỗi dữ liệu trong mục Kết Quả sau khi kết quả Hiệp 1 được công bố.
                                <div className={Styles["md5-section"]}>
                                    <span className={`${Styles["text"]}`}>
                                        <strong>Kết Quả:</strong> {`{`}
                                        <span className={Styles["blue"]}>363</span>;<span className={Styles["red"]}>467</span>
                                        {`}_{#26907421fad9b51da1169691982}`}
                                    </span>
                                    <div className={Styles["copy-box"]}>
                                        <span className={Styles["copy-text"]}>Copy</span>
                                    </div>
                                </div>
                                <div>
                                    Trong đó <span className={Styles["blue"]}>363</span> là kết quả của Đội Xanh và{" "}
                                    <span className={Styles["red"]}>467</span> là kết quả Đội Đỏ trong Hiệp 1
                                </div>
                            </li>
                            <li>
                                <strong>Bước 3</strong>: Truy cập{" "}
                                <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                    https://md5.services/
                                </a>{" "}
                                và dán Kết Quả vừa copy vào ô MD5.
                                <div className={Styles["wrapper-img"]}>
                                    <img src={`/static/images/keno-match/md5-hash.png#1`} alt="md5-copy" loading="eager" />
                                </div>
                            </li>
                            <li>
                                <strong>Bước 4</strong>: Bấm nút <i>“hash darling, hash!”</i>. So sánh chuỗi MD5 checksum vừa được tạo ra và
                                chuỗi MD5 ở Bước 1.
                                <div className={Styles["wrapper-img"]}>
                                    <img src={`/static/images/keno-match/md5.png#1`} alt="md5-copy" loading="eager" />
                                </div>
                            </li>
                        </ul>
                        Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.
                    </div>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default KenoMatchGuideVI;
