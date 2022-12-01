import React, { useEffect } from "react";

import { SeDieMini } from "..";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderTermsAndConditionsVI } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../../shared/dot";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import { StatisticalTable } from "../../../shared/se-die/vi";
import { GameGuideProps } from "../../type";
import Styles from "../se-die.module.scss";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { renderPromotionNoteVN } from "../../../shared/promotion-note/vi";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBetFollowChoice: MaxBetChoicesProps | undefined, gameId = 0) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Đồng xu sẽ được xóc trước khi phiên đặt cược bắt đầu.</li>
                <li>
                    Người chơi dự đoán kết quả và hoàn tất việc đặt cược trước khi bát được mở. Nếu kết quả mở ra trùng với lựa chọn, người
                    chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1
                    phiên là {maxBetFollowChoice?.maxBetMain}. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Kết quả cửa thắng sẽ được hiển thị khi hết thời gian đặt cược. Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm
                    ngược trên bàn chơi.
                </li>
                {renderGameRuleOrPayoutTable(gameId)}
            </ul>
        </>
    );
};

const renderGameRuleOrPayoutTable = (gameId: number) => {
    return (
        <li className="contentBeforeEmpty">
            <div className="table-container">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Lựa Chọn</th>
                            <th>Điều Kiện Thắng</th>
                            <th>Mô Tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>Lẻ</td>
                            <td>3 đỏ, 1 trắng</td>
                            {renderThreeRedOneWhite()}
                        </tr>
                        <tr>
                            <td>1 đỏ, 3 trắng</td>
                            {renderOneRedThreeWhite()}
                        </tr>
                        <tr>
                            <td rowSpan={3}>Chẵn</td>
                            <td>4 đỏ</td>
                            {renderFourRed()}
                        </tr>
                        <tr>
                            <td>4 trắng</td>
                            {renderFourWhite()}
                        </tr>
                        <tr>
                            <td>2 đỏ, 2 trắng</td>
                            {renderTwoRedTwoWhite()}
                        </tr>
                        <tr>
                            <td>4 đỏ</td>
                            <td>4 đỏ</td>
                            {renderFourRed()}
                        </tr>
                        <tr>
                            <td>4 trắng</td>
                            <td>4 trắng</td>
                            {renderFourWhite()}
                        </tr>
                        <tr>
                            <td>3 đỏ, 1 trắng</td>
                            <td>3 đỏ, 1 trắng</td>
                            {renderThreeRedOneWhite()}
                        </tr>
                        <tr>
                            <td>1 đỏ, 3 trắng</td>
                            <td>1 đỏ, 3 trắng</td>
                            {renderOneRedThreeWhite()}
                        </tr>
                        {!SeDieMini.includes(gameId) && (
                            <tr>
                                <td>2 đỏ, 2 trắng</td>
                                <td>2 đỏ, 2 trắng</td>
                                {renderTwoRedTwoWhite()}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderStatistical = () => {
    return (
        <li className="guide-item">
            <h2>Bảng thống kê kết quả</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty"> {StatisticalTable()}</li>
            </ul>
        </li>
    );
};

const renderPayoutTable = (
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    gameId: number,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <>
            <div className="table-container">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Lựa Chọn</th>
                            <th>{SeDieMini.includes(gameId) && "Tỷ Lệ "}Trả Thưởng</th>
                            <th className={Styles["bet-limit-width"]}>Giới Hạn Cược (Min - Max)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chẵn</td>
                            <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                            <td rowSpan={2}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                            </td>
                        </tr>
                        <tr>
                            <td>Lẻ</td>
                        </tr>
                        <tr>
                            <td>4 đỏ</td>
                            <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>
                            <td rowSpan={2}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                            </td>
                        </tr>
                        <tr>
                            <td>4 trắng</td>
                        </tr>
                        <tr>
                            <td> 3 đỏ, 1 trắng</td>
                            <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                            <td rowSpan={2}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                            </td>
                        </tr>
                        <tr>
                            <td> 1 đỏ, 3 trắng</td>
                        </tr>
                        {!SeDieMini.includes(gameId) && (
                            <tr>
                                <td> 2 đỏ, 2 trắng</td>
                                <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>
                                <td rowSpan={2}>
                                    {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderMD5Example = (gameName: string, gameId: any) => {
    const currentGameType = SeDieMini.includes(gameId) ? "mini-sedie" : "sedie";
    return (
        <>
            <div className="content">
                <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả trò chơi {gameName}
            </div>
            <ul className="desc">
                <li>
                    <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step1_vi.png?v=6`}
                        alt="md5-string"
                    />
                </li>
                <li>
                    <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết quả.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step2_vi.png?v=6`}
                        alt="md5-result"
                    />
                    <div>Trong đó màu đỏ và trắng là hai mặt của đồng xu.</div>
                </li>
                <li>
                    <strong>Bước 3:</strong> Truy cập{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step3_vi.png?v=1`}
                        alt="hash-darling"
                    />
                </li>
                <li>
                    <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước
                    1.
                    <img
                        className="format-img auto-center"
                        src={`/static/images/${currentGameType}/md5_step4_vi.png?v=1`}
                        alt="md5-checksum"
                    />
                </li>
            </ul>
            <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
        </>
    );
};

const SeDieGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, gameId, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    const gameDescription = (environment: string = ENVIRONMENT.sc) => {
        const miniSeDieDescription =
            environment === ENVIRONMENT.sm
                ? "là bản rút gọn của trò Xóc Đĩa. "
                : " - phiên bản Multiplay, với tính năng độc đáo cho phép chơi cùng lúc 4 bàn game (Xóc Đĩa Mini, Xóc Đĩa Mini 2, Xóc Đĩa Mini 3 và Xóc Đĩa Mini 4) với nhiều trải nghiệm mới hấp dẫn. ";

        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return miniSeDieDescription;
            case 22:
                return "là phiên bản đặc biệt của trò Xóc Đĩa, với hạn mức cược được nâng cấp, mở rộng. ";
            default:
                return "là trò chơi có nguồn gốc dân gian từ lâu đời. ";
        }
    };

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} {gameDescription(environment)}
                        Trò chơi có luật chơi rất đơn giản, chỉ gồm 1 bát úp, 1 đĩa và 4 đồng xu. Trong đó, 4 đồng xu được thiết kế 2 mặt đỏ
                        và trắng. Người chơi sẽ đặt cược vào các lựa chọn (cửa) có sẵn. Kết quả thắng thua sẽ phụ thuộc vào số mặt đỏ hoặc
                        trắng được lật của đồng xu sau khi xóc.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice, props?.gameId ?? 0)}</li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>
                            Tiền thắng đã bao gồm tiền cược.
                            {renderPayoutTable(odds, maxBetFollowChoice, props?.gameId ?? 0, fractionalOddsFormat)}
                        </li>
                        {renderPromotionNoteVN(isInPromotionTime)}
                    </ul>
                </li>

                {renderStatistical()}
                {environment === ENVIRONMENT.sc && (
                    <li id="md5" className="guide-item">
                        {renderMD5VI()}
                        {renderMD5Example(gameName, gameId)}
                    </li>
                )}

                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default SeDieGuideVI;
