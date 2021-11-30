import React from "react";
import { useTheme } from "next-themes";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderListIcon } from "../en";
import Styles from "../fish-prawn-crab-vip.module.scss";

const FishPrawnCrabGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là phiên bản đặc biệt của trò Bầu Cua với thể loại game phòng, cùng nhiều loại hình cá cược mới - hấp
                        dẫn.Trò chơi sử dụng 3 viên xúc xắc (xí ngầu) 6 mặt, mỗi mặt sẽ có một biểu tượng (linh vật) ứng với một cửa trên
                        bàn chơi.
                    </p>
                    <div className="icon-wrapper">
                        {renderListIcon(theme)}
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
                        <li>
                            Người chơi có thể đặt cược vào một hoặc nhiều lựa chọn cùng lúc trong cùng một lượt chơi và không bị giới hạn số
                            lần đặt cược. <strong>Lưu ý</strong>, không thể hủy cược sau khi đặt.
                        </li>
                        <li>Tổng tiền cược tối đa cho một phiên là {maxBetFollowChoice?.maxBetMain}</li>
                        <li>
                            Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Xúc xắc sẽ được lắc khi bắt đầu
                            phiên, kết quả sẽ được hiển thị khi hết thời gian đặt cược.
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Lựa Chọn</th>
                                            <th>Điều Kiện Thắng</th>
                                            <th>Trả Thưởng</th>
                                            <th className={Styles["min-max-width"]}>Giới Hạn Cược (Min - Max)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>Linh vật cụ thể (Nai, Bầu, Gà, Cá, Cua, Tôm)</td>
                                            <td className="text-start">Linh vật được chọn xuất hiện trong kết quả một lần.</td>
                                            <td>1: {odds?.single}</td>
                                            <td rowSpan={5}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFish}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Linh vật được chọn xuất hiện trong kết quả hai lần.</td>
                                            <td>1: {odds?.double}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">Linh vật được chọn xuất hiện trong kết quả ba lần.</td>
                                            <td>1: {odds?.triple}</td>
                                        </tr>
                                        <tr>
                                            <td>Trên Cạn (Nai, Bầu, Gà)</td>
                                            <td className="text-start">
                                                Người chơi sẽ thắng cửa này nếu số linh vật trong nhóm này xuất hiện hai hoặc ba lần trong
                                                kết quả.
                                            </td>
                                            <td>1: {odds?.mountain}</td>
                                        </tr>
                                        <tr>
                                            <td>Dưới Nước (Cá, Cua, Tôm)</td>
                                            <td className="text-start">
                                                Người chơi sẽ thắng cửa này nếu số linh vật trong nhóm này xuất hiện hai hoặc ba lần trong
                                                kết quả.
                                            </td>
                                            <td>1: {odds?.ocean}</td>
                                        </tr>
                                        <tr>
                                            <td>Bộ Ba Bất Kỳ</td>
                                            <td className="text-start">Linh vật bất kỳ xuất hiện trong kết quả ba lần.</td>
                                            <td>1: {odds?.anyTriple}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <strong>Ví dụ:</strong>
                    </p>
                    <ul className="desc">
                        <li>
                            <strong>Linh vật cụ thể:</strong>
                            <ul className="detail">
                                <li>Người chơi đặt vào Bầu. Kết quả: Bầu, Cua, Cá. Người chơi thắng.</li>
                                <li>Người chơi đặt vào Bầu. Kết quả: Gà, Cá, Cua. Người chơi thua. </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Trên Cạn/Dưới Nước:</strong>
                            <ul className="detail">
                                <li>
                                    Người chơi đặt vào lựa chọn “Trên Cạn”. Kết quả: Nai, Bầu, Tôm. Người chơi thắng do Nai, Bầu thuộc nhóm
                                    “Trên Cạn”.
                                </li>
                                <li>
                                    Người chơi đặt vào lựa chọn “Dưới Nước”. Kết quả: Nai, Cá, Cá. Người chơi thắng do kết quả có hai linh
                                    vật Cá thuộc nhóm “Dưới Nước”.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong> Bộ Ba Bất Kỳ:</strong>
                            <ul className="detail">
                                <li>Người chơi đặt vào lựa chọn “Bộ Ba Bất Kỳ”. Kết quả là 3 Bầu. Người chơi thắng.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideVI;
