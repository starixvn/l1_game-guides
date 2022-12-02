import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderPayoutsIconFirstLine, renderPayoutsIconSecondLine, renderIconContentLarge, renderIconContent } from "../en";
import Styles from "../fortune-cat.module.scss";
import { locales } from "../../../../common/constants";

const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Người chơi chọn Mức Cược và thiết lập số Dòng Cược mà bạn muốn đặt trước khi bấm “Quay”.
                    <div className="text-center">Tổng tiền cược = Mức Cược * Số Dòng Cược</div>
                </li>
                <li>Có 25 dòng cược được đánh số từ 1 đến 25 và người chơi phải chọn ít nhất một dòng cược để bắt đầu chơi.</li>
                <li>Mặc định 25 dòng cược cùng mức cược nhỏ nhất sẽ được chọn khi người chơi mở game.</li>
                <li>
                    Thắng thua trên mỗi dòng cược sẽ được tính dựa trên số lượng các biểu tượng giống nhau nằm trên dòng cược đó.
                    <div className={Styles["payline-wrapper"]}>
                        <img src={`/static/images/fortune-cat/guide_payline.png`} alt="guide_payline" loading="eager" />
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Mỗi biểu tượng sẽ có tỷ lệ trả thưởng tương ứng khác nhau.</li>
                <li>
                    <strong>Lưu ý:</strong> Tỷ lệ trả thưởng đã bao gồm tiền cược.
                </li>
            </ul>

            {renderPayoutsIconFirstLine(odds, locales.vi)}
            {renderPayoutsIconSecondLine(odds, locales.vi)}
            {renderExamplePayouts(odds)}
        </li>
    );
};

const renderExamplePayouts = (odds: number[][]) => {
    return (
        <>
            <p>
                <strong>Ví dụ:</strong>
            </p>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Biểu Tượng</th>
                            <th> Mô Tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                <div className="d-center">
                                    {renderIconContent(true, "item1", true, true, [
                                        [5, odds[1][5]],
                                        [4, odds[1][4]],
                                        [3, odds[1][3]],
                                    ])}
                                </div>
                            </td>
                            <td>
                                Nếu có <strong>5</strong> biểu tượng <img src="./static/images/fortune-cat/item1-small.png" alt="item1" />
                                trên cùng Dòng Cược.<br></br>Tiền thắng = Mức Cược * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>4</strong> biểu tượng <img src="./static/images/fortune-cat/item1-small.png" alt="item1" />{" "}
                                trên cùng Dòng Cược. <br></br>Tiền thắng = Mức Cược * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> biểu tượng <img src="./static/images/fortune-cat/item1-small.png" alt="item1" />{" "}
                                trên cùng Dòng Cược. <br></br>Tiền thắng = Mức Cược * {odds[1][3]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderFreeSpin = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Free Spin</h2>
            <div className={Styles["free-spin-container"]}>
                {renderIconContentLarge(
                    "item7",
                    [
                        [5, odds[7][5]],
                        [4, odds[7][4]],
                        [3, odds[7][3]],
                    ],
                    " FREE SPINS"
                )}
                <ul className="desc">
                    <li>
                        Free Spin hay còn gọi là lượt quay miễn phí, người chơi sẽ nhận được số lượt quay miễn phí tương ứng với số biểu
                        tượng “Free Spin” quay được.
                    </li>
                    <li>Các biểu tượng “Free Spin” không bắt buộc phải nằm trên cùng một dòng cược.</li>
                </ul>
            </div>

            <p>
                <strong>Lưu ý: </strong>
            </p>
            <ul className="desc">
                <li>
                    Các biểu tượng “Free Spin” phải nằm trên các cột khác nhau. Ví dụ, nếu có 3 biểu tượng “Free Spin” nằm trên cùng một
                    cột, hệ thống sẽ tính là 1 biểu tượng.
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/fortune-cat/guide_example_freespin.png#v2"
                                alt="guide_item_symbol_bg"
                                loading="eager"
                            />
                        </div>
                        <span>
                            Có 4 biểu tượng “Free Spin” trong kết quả, nhưng do có 3 biểu tượng nằm trên cùng một cột. Người chơi không thỏa
                            điều kiện nhận thưởng “Free Spin”.
                        </span>
                    </div>
                </li>
                <li className="clear-both">
                    Mức Cược, số Dòng Cược của lượt quay miễn phí sẽ bằng với Mức Cược và số Dòng Cược của lượt quay gần nhất (lượt quay mà
                    người chơi trúng Free Spin).
                </li>
                <li>
                    Người chơi phải hoàn tất các lượt quay miễn phí trong vòng 24 tiếng tính từ thời điểm trúng Free Spin, sau khoảng thời
                    gian này, các lượt quay chưa sử dụng sẽ bị hủy.
                </li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Bonus</h2>
            <div className={Styles["bonus-container"]}>
                {renderIconContentLarge(
                    "item8",
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    " BONUS"
                )}
                <ul className="desc">
                    <li>
                        Người chơi sẽ nhận được cơ hội tham gia mở thưởng tương ứng với số biểu tượng Bonus
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item8-small.png" alt="item8"></img>
                        quay được.
                    </li>
                    <li>Các biểu tượng Bonus không bắt buộc phải nằm trên cùng một dòng cược.</li>
                </ul>
            </div>

            <p>
                <strong>Lưu ý: </strong>
            </p>
            <ul className="desc">
                <li>
                    Các biểu tượng “Bonus” phải nằm trên các cột khác nhau. Ví dụ, nếu có 2 biểu tượng “Bonus” nằm trên cùng một cột, hệ
                    thống sẽ tính là 1 biểu tượng.
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img src="/static/images/fortune-cat/guide_example_bonus.png#v2" alt="guide_example_bonus" loading="eager" />
                        </div>
                        <p>
                            Có 4 biểu tượng “Bonus” trong kết quả, nhưng do có 2 biểu tượng nằm trên cùng một cột. Người chơi chỉ nhận được
                            3 lần mở thưởng.
                        </p>
                    </div>
                </li>
                <li className="clear-both">
                    Người chơi sẽ có 2 phút để hoàn tất việc mở thưởng. Nếu sau 2 phút, người chơi vẫn không thể hoàn tất, hệ thống sẽ mở
                    ngẫu nhiên các phần thưởng cho đến khi hết lượt. Kết quả sẽ được lưu trong mục Lịch sử phiên.
                </li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][]) => {
    const wrapperWildImg = "wrapper-wild-img";
    const betValue = 1;
    return (
        <li className="guide-item">
            <h2>Wild</h2>
            <div className={Styles["wild-content-ex"]}>
                <span className={Styles["wrapper-wild"]}>
                    <img src="/static/images/fortune-cat/guide_example_wild.png#v3" alt="wild" loading="eager" />
                </span>
                <ul className="desc">
                    <li>
                        Biểu tượng Wild có thể thay thế cho tất cả các biểu tượng khác, ngoại trừ Free Spin
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item7-small.png#v2" alt="item7"></img>,
                        Bonus
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item8-small.png#v2" alt="item8"></img>
                        và
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item10-small.png" alt="item10"></img>
                    </li>
                    <li>
                        Người chơi sẽ nhận được mức trả thưởng cao nhất trên mỗi dòng cược trong trường hợp có được 2 nhóm biểu tượng cùng
                        thỏa điều kiện thắng.
                    </li>
                </ul>
            </div>
            <div>
                <div className={Styles["wrapper-ex-wild"]}>
                    <p>
                        <strong>Ví dụ:</strong> Người chơi chọn mức cược {betValue}, dòng cược số 1. Kết quả như sau:
                    </p>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item9.png" alt="item9" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                        </div>
                    </div>
                    <ul className="plus">
                        <li>
                            Nếu biểu tượng Wild thay thế{" "}
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item2-small.png"
                                alt="item2-mini"
                            ></img>
                            . Mức trả thưởng = {betValue} * {odds[2][3]} = {betValue * odds[2][3]}
                        </li>
                        <li>
                            Nếu biểu tượng Wild thay thế{" "}
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item5-small.png"
                                alt="item5-mini"
                            ></img>
                            . Mức trả thưởng = {betValue} * {odds[5][3]} = {betValue * odds[5][3]}
                        </li>
                    </ul>
                    <p>Người chơi sẽ nhận được mức trả thưởng cao nhất là {Math.max(odds[2][3], odds[5][3])}</p>
                </div>
            </div>
        </li>
    );
};

const FortuneCatGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        “{gameName}” là thể loại Slot game (game xèng), với giao diện hấp dẫn, được xây dựng với chủ đề mèo cầu tài lộc nhân
                        dịp tết Quý Mão. Trò chơi gồm 3 hàng 5 cột, với tất cả 11 biểu tượng khác nhau. Người chơi sẽ thắng nếu có các biểu
                        tượng giống nhau nằm trên cùng một dòng cược mà người chơi đã chọn.
                    </p>
                    <div className={Styles["list-symbol-wrapper"]}>
                        <img src={`/static/images/fortune-cat/list_icon.png#v1`} alt="guide_item_symbol_bg" />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                {renderPayouts(odds)}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                {renderTermsAndConditionsVI(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default FortuneCatGuideVI;
