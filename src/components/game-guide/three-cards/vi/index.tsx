import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";
import { renderChoiceImage } from "../en";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { locales, Themes } from "../../../../common/constants";
import Styles from "../three.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";

const renderGameRule = (odds: OddsProps | undefined, maxBet: string | undefined) => {
    const bet = 10;
    const winRed = bet * (odds?.red ?? 0);
    const winDiamonds = bet * (odds?.diamonds ?? 0);
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi dự đoán kết quả và hoàn tất việc đặt cược trước khi 3 lá bài được mở. Nếu kết quả mở ra trùng với lựa chọn
                    của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho
                    một phiên là <strong>{maxBet}</strong>. Lưu ý, không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, kết quả sẽ được
                    hiển thị.
                </li>
                <li>
                    Bộ bài 52 lá (không bao gồm lá Joker) sẽ được xào lại sau mỗi phiên.{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Lựa Chọn</th>
                                    <th>Điều Kiện Thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Đỏ</td>
                                    <td className="text-start">Có ít nhất 2 lá bài là chất Rô hoặc Cơ.</td>
                                </tr>
                                <tr>
                                    <td>Đen</td>
                                    <td className="text-start">Có ít nhất 2 lá bài là chất Bích hoặc Chuồn.</td>
                                </tr>
                                <tr>
                                    <td>Rô</td>
                                    <td className="text-start">Có ít nhất 1 lá bài là chất Rô.</td>
                                </tr>
                                <tr>
                                    <td>Cơ</td>
                                    <td className="text-start">Có ít nhất 1 lá bài là chất Cơ.</td>
                                </tr>
                                <tr>
                                    <td>Bích</td>
                                    <td className="text-start">Có ít nhất 1 lá bài là chất Bích.</td>
                                </tr>
                                <tr>
                                    <td>Chuồn</td>
                                    <td className="text-start">Có ít nhất 1 lá bài là chất Chuồn.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>Lưu ý: </strong> Đối với các cửa cược Rô, Cơ, Bích, Chuồn, tiền thắng sẽ không nhân hệ số nếu kết quả có nhiều hơn 1
                lá bài cùng chất.
            </p>
            <p>
                <strong>Ví dụ:</strong>
            </p>
            <ul className="desc">
                <li>
                    Đặt cược vào cửa Rô. Tiền thắng sẽ không thay đổi nếu có 1, 2 hoặc 3 lá bài Rô (
                    <span className={Styles["img-red"]}>♦</span>) trong kết quả.
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
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>
                    Tiền thắng đã bao gồm tiền cược.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Lựa Chọn</th>
                                    <th>Tỷ Lệ Trả Thưởng</th>
                                    <th>Giới Hạn Cược (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Đỏ</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Đen</td>
                                </tr>
                                <tr>
                                    <td>Rô</td>
                                    <td rowSpan={4}>{formatOdds(odds?.diamonds, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cơ</td>
                                </tr>
                                <tr>
                                    <td>Bích</td>
                                </tr>
                                <tr>
                                    <td>Chuồn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const ThreeCardsGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isSM = theme === Themes.blue ? false : true;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "threecards"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        <strong>{gameName}</strong> hấp dẫn người chơi với lối chơi khá đơn giản. Trò chơi sử dụng bộ bài tây 52 lá (không
                        bao gồm lá Joker) và sẽ có 6 lựa chọn (cửa) trên bàn chơi bao gồm 2 cửa chính Đỏ, Đen và 4 cửa phụ Rô (
                        <span className={Styles["img-red"]}>♦</span>), Cơ (<span className={Styles["img-red"]}>♥</span>), Bích (
                        <span className={Styles["img-black"]}>♠</span>) , Chuồn (<span className={Styles["img-black"]}>♣</span>). Mỗi phiên
                        sẽ có 3 lá bài được rút, người chơi đặt cược vào các lựa chọn mong muốn. Kết quả thắng thua sẽ được tính dựa trên
                        chất của các lá bài.
                    </p>
                    <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>{renderChoiceImage(locales.vi, isSM, t)}</div>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionVi} /></li>
            </ul>
        </>
    );
};
export default ThreeCardsGuideVI;
