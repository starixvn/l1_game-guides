import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { ChoicesMaxBetProps, GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../three.module.scss";

const renderGameRule = (odds: OddsProps, maxbet: number) => {
    const bet = 10;
    const winRed = numberWithCommas(bet * odds.red);
    const winDiamonds = numberWithCommas(bet * odds.diamonds);
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi chọn mệnh giá và nhấp vào cửa cược mong muốn trước khi 3 lá bài được mở. Nếu kết quả mở ra trùng với lựa chọn
                    của bạn, người chơi sẽ thắng và ngược lại sẽ thua toàn bộ tiền cược nếu lựa chọn sai.
                </li>
                <li>
                    Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho
                    một phiên là <strong>{numberWithCommas(maxbet)}</strong>. Lưu ý, không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, kết quả sẽ được
                    hiển thị.
                </li>
                <li>Bộ bài 52 lá (không bao gồm lá Joker) sẽ được xào lại sau mỗi phiên.</li>
            </ul>
            <div className="table-container">
                <table className="table text-center table-small left">
                    <thead>
                        <tr>
                            <th>Lựa Chọn</th>
                            <th>Điều Kiện Thắng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-start">Đỏ</td>
                            <td className="text-start">Có ít nhất 2 lá bài là chất Rô hoặc Cơ.</td>
                        </tr>
                        <tr>
                            <td className="text-start">Đen</td>
                            <td className="text-start">Có ít nhất 2 lá bài là chất Bích hoặc Chuồn.</td>
                        </tr>
                        <tr>
                            <td className="text-start">Rô</td>
                            <td className="text-start">Có ít nhất 1 lá bài là chất Rô.</td>
                        </tr>
                        <tr>
                            <td className="text-start">Cơ</td>
                            <td className="text-start">Có ít nhất 1 lá bài là chất Cơ.</td>
                        </tr>
                        <tr>
                            <td className="text-start">Bích</td>
                            <td className="text-start">Có ít nhất 1 lá bài là chất Bích.</td>
                        </tr>
                        <tr>
                            <td className="text-start">Chuồn</td>
                            <td className="text-start">Có ít nhất 1 lá bài là chất Chuồn.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                <strong>Lưu ý: </strong> Đối vớ các cửa cược Rô, Cơ, Bích, Chuồn, tỷ lệ trả thưởng sẽ không nhân hệ số nếu kết quả có nhiều
                hơn 1 lá bài cùng chất.
            </p>
            <p>
                <strong>Ví dụ:</strong>
            </p>
            <ul className="desc">
                <li>
                    Đặt 10 vào cửa Đỏ. Kết quả 3 lá bài: Rô, Cơ, Chuồn. Tiền thắng = {bet} x {odds.red} = {winRed}
                </li>
                <li>
                    Đặt 10 vào cửa Rô. Kết quả 3 lá bài: Rô, Rô, Chuồn. Tiền thắng = {bet} x {odds.diamonds} = {winDiamonds}
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps, minBet: number, choiceMaxBet: ChoicesMaxBetProps) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>
                    Tỷ lệ trả thưởng đã bao gồm tiền cược.
                    <div className="table-container">
                        <table className="table text-center table-small left">
                            <thead>
                                <tr>
                                    <th>Lựa Chọn</th>
                                    <th>Trả Thưởng </th>
                                    <th>Giới Hạn Cược (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start">Đỏ</td>
                                    <td rowSpan={2}>1:{odds.red}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.red)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Đen</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Rô</td>
                                    <td rowSpan={4}>1:{odds.diamonds}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.diamonds)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Cơ</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Bích</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Chuồn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const ThreeCardsGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;
    const imgCustomize = "img-customize";
    const wrapperImg = "wrapper-img";
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        <strong>{gameName}</strong> hấp dẫn người chơi với lối chơi khá đơn giản. Trò chơi sử dụng bộ bài tây 52 lá (không
                        bao gồm lá Joker) và sẽ có 6 lựa chọn (cửa) trên bàn chơi bao gồm 2 cửa chính (Đỏ, Đen) và 4 cửa phụ (Rô, Cơ, Bích,
                        Chuồn). Mỗi phiên sẽ có 3 lá bài được rút, người chơi đặt cược vào các lựa chọn mong muốn. Kết quả thắng thua sẽ
                        được tính dựa trên chất của các lá bài.
                    </p>
                    <div className={Styles["container-img"]}>
                        <div className={Styles[wrapperImg]}>
                            <img
                                className={`${Styles[imgCustomize]} ${Styles["red"]}`}
                                src="./static/images/three-cards/table_text_red.png"
                            ></img>
                            <p>Đỏ</p>
                        </div>
                        <div className={Styles[wrapperImg]}>
                            <img
                                className={`${Styles[imgCustomize]} ${Styles["black"]}`}
                                src="./static/images/three-cards/table_txt_black.png"
                            ></img>
                            <p>Đen</p>
                        </div>
                        <div className={Styles[wrapperImg]}>
                            <img
                                className={`${Styles[imgCustomize]} ${Styles["diamond"]}`}
                                src="./static/images/three-cards/table_icon_diamond.png"
                            ></img>
                            <p>Rô</p>
                        </div>
                        <div className={Styles[wrapperImg]}>
                            <img
                                className={`${Styles[imgCustomize]} ${Styles["heart"]}`}
                                src="./static/images/three-cards/table_icon_heart.png"
                            ></img>
                            <p>Cơ</p>
                        </div>
                        <div className={Styles[wrapperImg]}>
                            <img className={Styles[imgCustomize]} src="./static/images/three-cards/table_icon_spade.png"></img>
                            <p>Bích</p>
                        </div>
                        <div className={Styles[wrapperImg]}>
                            <img className={Styles[imgCustomize]} src="./static/images/three-cards/table_icon_club.png"></img>
                            <p>Chuồn</p>
                        </div>
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxbet)}</li>

                {renderPayouts(odds, minbet, choices_maxbet)}
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default ThreeCardsGuideVI;
