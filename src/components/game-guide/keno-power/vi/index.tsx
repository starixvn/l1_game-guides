import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { KenoPowerMD5 } from "../index";
import { renderMD5VI } from "../../../shared/md5/vi";
import Styles from "../keno-match.module.scss";

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
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Đội Xanh/Đội Đỏ
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Đội Xanh</td>
                        <td className="text-start">
                            Thắng nếu tổng điểm Đội Xanh {`>`} Đội Đỏ
                            <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 bên bằng nhau.
                        </td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Đội Đỏ</td>
                        <td className="text-start">
                            Thắng nếu tổng điểm của Đội Đỏ {`>`} Đội Xanh
                            <br />+ Tiền cược sẽ được hoàn trả nếu tổng điểm 2 bên bằng nhau.
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Tổng Tài/Xỉu
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Tài</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ {`>=`} 1621</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Xỉu</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ {`<`} 1621</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Tổng Chẵn/Lẻ
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Chẵn</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ là số chẵn.</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Lẻ</td>
                        <td className="text-start">Thắng nếu tổng điểm của cả Đội Xanh và Đội Đỏ là số lẻ.</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Đội Xanh <br /> Tài/Xỉu
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Tài</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Xanh {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Xỉu</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Xanh {`<`} 811</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles["bet-team-wd"]}>
                            Đội Đỏ <br /> Tài/Xỉu
                        </td>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Tài</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Đỏ {`>=`} 811</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles["bet-option-wd"]}`}>Xỉu</td>
                        <td className="text-start">Thắng nếu tổng điểm của Đội Đỏ {`<`} 811</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (odds: OddsProps, minBet: number, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
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
                                    <td rowSpan={6}>1: {odds.blue}</td>
                                    <td rowSpan={6}>
                                        {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetBlueChoice}
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
                                    <td rowSpan={4}>1: {odds.blue}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {maxBetFollowChoice?.maxBetBlueRedChoice}
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
    const { odds, minbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} {KenoPowerMD5.includes(gameId ? gameId : KenoPowerMD5[0]) ? md5Title() : "là trò"} chơi gồm 2 bộ số, một
                        cho Đội Xanh và một cho Đội Đỏ, mỗi bộ gồm 80 số (từ 01 đến 80). Hệ thống sẽ rút ngẫu nhiên 20 số (không trùng lặp)
                        cho mỗi bên. Người chơi đặt cược và dự đoán tổng điểm của các số được rút cho Đội Xanh, Đội Đỏ.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(odds, minbet, maxBetFollowChoice)}</li>
                {KenoPowerMD5.includes(gameId ? gameId : KenoPowerMD5[0]) && (
                    <li id="md5" className="guide-item">
                        {renderMD5VI()}
                    </li>
                )}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default KenoPowerGuideVI;
