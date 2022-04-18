import React from "react";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { KenoPowerMD5 } from "../index";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi";
import Styles from "../keno-match.module.scss";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";

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
                <li className="contentBeforeEmpty">{renderBettingOptions()}</li>
            </ul>
        </>
    );
};

const renderBettingOptions = () => {
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Loại Cược</th>
                        <th>Lựa Chọn</th>
                        <th>Điều Kiện Thắng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Đội Xanh/Đội Đỏ
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Đội Xanh</td>
                        <td className="text-start">
                            Thắng nếu tổng điểm Đội Xanh {`>`} Đội Đỏ
                            <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 bên bằng nhau.
                        </td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Đội Đỏ</td>
                        <td className="text-start">
                            Thắng nếu tổng điểm của Đội Đỏ {`>`} Đội Xanh
                            <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 bên bằng nhau.
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Tổng Tài/Xỉu
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Tài</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ {`>=`} 1621</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Xỉu</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ {`<`} 1621</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Tổng Chẵn/Lẻ
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Chẵn</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ là số chẵn.</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Lẻ</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ là số lẻ.</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Đội Xanh <br /> Tài/Xỉu
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Tài</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Xanh {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Xỉu</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Xanh {`<`} 811</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            Đội Đỏ <br /> Tài/Xỉu
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Tài</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Đỏ {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>Xỉu</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Đỏ {`<`} 811</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>
                    Tỷ lệ cược đã bao gồm tiền vốn.
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th className={Styles["payouts-option-width"]}>Loại Cược</th>
                                    <th>Lựa Chọn</th>
                                    <th>Tỷ Lệ Cược</th>
                                    <th>
                                        Hạn Mức Cược <br></br>(Min - Max)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Đội Xanh/ Đội Đỏ</td>
                                    <td>Đội Xanh</td>
                                    <td rowSpan={6}>1: {odds?.blue}</td>
                                    <td rowSpan={6}>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Đội Đỏ</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Tổng Tài/Xỉu</td>
                                    <td>Tài</td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Tổng Chẵn/Lẻ</td>
                                    <td>Chẵn</td>
                                </tr>
                                <tr>
                                    <td>Lẻ</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>
                                        Đội Xanh <br />
                                        Tài/Xỉu
                                    </td>
                                    <td>Tài</td>
                                    <td rowSpan={4}>1: {odds?.blue}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueRedChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>
                                        Đội Đỏ <br />
                                        Tài/Xỉu
                                    </td>
                                    <td>Tài</td>
                                </tr>
                                <tr>
                                    <td>Xỉu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const md5Title = () => {
    return (
        <>
            là phiên bản khác của trò Keno Đối Kháng với tính năng xác thực
            <a href="#md5" className="md5-title">
                <strong> MD5 (Message-Digest algorithm 5) </strong>
            </a>
            cho phép người chơi tự kiểm tra tính minh bạch trong kết quả thắng thua. Trò
        </>
    );
};

const KenoPowerGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, gameId } = props;
    const { odds } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} {KenoPowerMD5.includes(gameId ? gameId : KenoPowerMD5[0]) ? md5Title() : "là trò"} chơi gồm 2 bộ số, một
                        cho Đội Xanh và một cho Đội Đỏ, mỗi bộ gồm 80 số (từ 01 đến 80). Hệ thống sẽ rút ngẫu nhiên 20 số (không trùng lặp)
                        cho mỗi bên. Người chơi đặt cược và dự đoán tổng điểm của các số được rút cho mỗi đội.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice)}</li>
                {KenoPowerMD5.includes(gameId ? gameId : KenoPowerMD5[0]) && (
                    <li id="md5" className="guide-item">
                        {renderMD5VI()}
                        <div>
                            <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả
                            <ul className="desc">
                                <li>
                                    <strong>Bước 1</strong>: Copy chuỗi MD5 trước khi kết quả được công bố.
                                    <div className={Styles["md5-section"]}>
                                        <span className={`${Styles["text"]}`}>
                                            <strong>MD5:</strong> 96f67fca97c5ed9547ac67fd4a428747
                                        </span>
                                        <div className={Styles["copy-box"]}>
                                            <span className={Styles["copy-text"]}>Copy</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <strong>Bước 2</strong>: Copy chuỗi dữ liệu trong mục Key sau khi kết quả được công bố.
                                    <div className={Styles["md5-section"]}>
                                        <span className={`${Styles["text"]}`}>
                                            <strong>Key:</strong> {`{`}
                                            <span className={Styles["blue"]}>899</span>;<span className={Styles["red"]}>807</span>
                                            {`}_{#336772f6b52eadd147e9c5ceeaa}`}
                                        </span>
                                        <div className={Styles["copy-box"]}>
                                            <span className={Styles["copy-text"]}>Copy</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            Trong đó <span className={Styles["blue"]}>899</span> là kết quả của Đội Xanh và{" "}
                            <span className={Styles["red"]}>807</span> là kết quả Đội Đỏ
                            <ul className="desc">
                                <li>
                                    <strong>Bước 3</strong>: Truy cập{" "}
                                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                        https://md5.services/
                                    </a>{" "}
                                    và dán chuỗi Key vừa copy vào ô MD5.
                                    <div className={Styles["wrapper-img-hash"]}>
                                        <img src={`/static/images/keno-power/md5-hash.png#1`} alt="md5-copy" loading="eager" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Bước 4</strong>: Bấm nút <i>“hash, darling hash!”</i>. So sánh chuỗi MD5 checksum vừa được tạo
                                    ra và chuỗi MD5 ở Bước 1.
                                    <div className={Styles["wrapper-img"]}>
                                        <img src={`/static/images/keno-power/md5.png#1`} alt="md5-copy" loading="eager" />
                                    </div>
                                </li>
                            </ul>
                            Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.
                        </div>
                    </li>
                )}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default KenoPowerGuideVI;
