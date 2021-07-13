import React from "react";
import Image from "next/image";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderPayoutsIconFirstLine, renderPayoutsIconSecondLine, renderIconContentBlack, renderIconContent } from "../en";
import Styles from "../four-guardians.module.scss";
import { locales } from "../../../../common/constants";

const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn Mức Cược và thiết lập số Dòng Cược mà bạn muốn đặt trước khi bấm “Quay”.</li>
                <li>
                    <strong>Lưu ý: </strong>Tổng tiền cược = Mức Cược * Số Dòng Cược
                </li>
                <li>Có 25 dòng cược được đánh số từ 1 đến 25 và người chơi phải chọn ít nhất một dòng cược để bắt đầu chơi.</li>
                <li>Mặc định 25 dòng cược cùng mức cược nhỏ nhất sẽ được chọn khi người chơi mở game.</li>
                <li>
                    Thắng thua trên mỗi dòng cược sẽ được tính dựa trên số lượng các biểu tượng giống nhau nằm trên dòng cược đó.
                    <div className={Styles["wrapper-img-rectangle"]}>
                        <Image
                            src={`/static/images/four-guardians/guide_payline.png`}
                            alt="guide_payline"
                            width={844}
                            height={165}
                            layout="responsive"
                            loading="eager"
                        />
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
                                {renderIconContent(true, "item1", true, true, [
                                    [5, odds[1][5]],
                                    [4, odds[1][4]],
                                    [3, odds[1][3]],
                                ])}
                            </td>
                            <td>
                                Nếu có <strong>5</strong> mảnh Ngọc Bội trên cùng Dòng Cược.<br></br>Tiền thắng = Mức Cược * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong></strong>4 mảnh Ngọc Bội trên cùng Dòng Cược. <br></br>Tiền thắng = Mức Cược * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> mảnh Ngọc Bội trên cùng Dòng Cược. <br></br>Tiền thắng = Mức Cược * {odds[1][3]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderJackpot = () => {
    return (
        <li className="guide-item">
            <h2>Nổ Hũ</h2>
            <ul className="desc">
                <li>
                    Nổ Hũ là giải thưởng đặc biệt dành cho người chơi Long Lân Quy Phụng, có 3 giải Nổ Hũ ứng với 3 mức cược. Số tiền thưởng
                    trong từng hũ sẽ được tích lũy tăng dần cho đến khi có người chơi may mắn quay và giành chiến thắng.
                </li>
            </ul>

            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th className={Styles["bonus-symbol-width"]}>Biểu Tượng</th>
                            <th> Mô Tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    className={`${Styles["item10"]}}`}
                                    src="./static/images/four-guardians/vi/item10.png"
                                    alt="item10"
                                ></img>
                            </td>
                            <td>
                                Người chơi sẽ thắng giải Nổ Hũ nếu quay được 5 biểu tượng “Đập Hũ” trên cùng Dòng Cược.<br></br>
                                <strong>Lưu ý: </strong>
                                trong trường hợp thắng giải Nổ Hũ, người chơi sẽ nhận được 98% số tiền hiện có trong Hũ.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderFreeSpin = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Free Spin</h2>
            <ul className="desc">
                <li>
                    Free Spin hay còn gọi là lượt quay miễn phí, người chơi sẽ nhận được số lượt quay miễn phí tương ứng với số biểu tượng
                    “Free Spin” quay được.
                </li>
                <li>Các biểu tượng “Free Spin” không bắt buộc phải nằm trên cùng một dòng cược.</li>
            </ul>
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
                                {renderIconContentBlack(
                                    "item7",
                                    [
                                        [5, odds[7][5]],
                                        [4, odds[7][4]],
                                        [3, odds[7][3]],
                                    ],
                                    " FREE SPIN"
                                )}
                            </td>
                            <td>
                                Nếu có <strong>5</strong> biểu tượng Free Spin trong kết quả. <br></br> Bạn nhận {odds[7][5]} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>4</strong> biểu tượng Free Spin trong kết quả. <br></br>Bạn nhận {odds[7][4]} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> biểu tượng Free Spin trong kết quả.<br></br>Bạn nhận {odds[7][3]} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                            <Image
                                src="/static/images/four-guardians/guide_example_free_spin.png"
                                alt="guide_item_symbol_bg"
                                width={333}
                                height={126}
                                layout="fixed"
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
            <ul className="desc">
                <li>
                    Người chơi sẽ nhận được cơ hội tham gia mở thưởng tương ứng với số biểu tượng Bonus
                    <img
                        className={`${Styles["item8"]} ${Styles["mini"]}`}
                        src="./static/images/four-guardians/item8.png"
                        alt="item8"
                    ></img>
                    quay được.
                </li>
                <li>Các biểu tượng Bonus không bắt buộc phải nằm trên cùng một dòng cược.</li>
            </ul>
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
                                {renderIconContentBlack(
                                    "item8",
                                    [
                                        [5, odds[8][5]],
                                        [4, odds[8][4]],
                                        [3, odds[8][3]],
                                    ],
                                    " BONUS"
                                )}
                            </td>
                            <td>
                                Nếu có <strong>5</strong> biểu tượng Bonus trong kết quả.<br></br> Bạn nhận {odds[8][5]} lần mở thưởng.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>4</strong> biểu tượng Bonus trong kết quả.<br></br> Bạn nhận {odds[8][4]} lần mở thưởng.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> biểu tượng Bonus trong kết quả.<br></br> Bạn nhận {odds[8][3]} lần mở thưởng.
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                            <Image
                                src="/static/images/four-guardians/guide_example_bonus.png"
                                alt="guide_example_bonus"
                                width={333}
                                height={126}
                                layout="fixed"
                                loading="eager"
                            />
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
    const betValue = 10;
    return (
        <li className="guide-item">
            <h2>Wild</h2>
            <div className={Styles[freeSpinContentEX]}>
                <Image
                    src="/static/images/four-guardians/guide_example_wild.png"
                    alt="guide_example_wild"
                    width={133}
                    height={87}
                    layout="fixed"
                    loading="eager"
                />
                <ul className="desc">
                    <li>
                        Biểu tượng Wild có thể thay thế cho tất cả các biểu tượng khác, ngoại trừ Free Spin
                        <img
                            className={`${Styles["item7"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item7.png"
                            alt="item7"
                        ></img>
                        , Bonus{" "}
                        <img
                            className={`${Styles["item8"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item8.png"
                            alt="item8"
                        ></img>
                        và Nổ Hũ{" "}
                        <img
                            className={`${Styles["item10"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/vi/item10.png"
                            alt="item10"
                        ></img>
                    </li>
                    <li>
                        Người chơi sẽ nhận được mức trả thưởng cao nhất trên mỗi dòng cược trong trường hợp có được 2 nhóm biểu tượng cùng
                        thỏa điều kiện thắng.
                    </li>
                </ul>
            </div>
            <div>
                <strong>Ví dụ</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <p>Người chơi chọn mức cược {betValue}, dòng cược số 1. Kết quả như sau:</p>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item2.png"
                                alt="item2"
                                width={77}
                                height={67}
                                layout="fixed"
                                loading="eager"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item2.png"
                                alt="item2"
                                width={77}
                                height={67}
                                layout="fixed"
                                loading="eager"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item9.png"
                                alt="item9"
                                width={74}
                                height={50}
                                layout="fixed"
                                loading="eager"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item5.png"
                                alt="item5"
                                width={76}
                                height={77}
                                layout="fixed"
                                loading="eager"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item5.png"
                                alt="item5"
                                width={76}
                                height={77}
                                layout="fixed"
                                loading="eager"
                            />
                        </div>
                    </div>
                    <ul className="plus">
                        <li>
                            Nếu biểu tượng Wild thay thế{" "}
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item2.png"
                                alt="item2-mini"
                            ></img>
                            . Mức trả thưởng = {betValue} * {odds[2][3]} = {betValue * odds[2][3]}
                        </li>
                        <li>
                            Nếu biểu tượng Wild thay thế{" "}
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
                                alt="item5-mini"
                            ></img>
                            . Mức trả thưởng = {betValue} * {odds[5][3]} = {betValue * odds[5][3]}
                        </li>
                    </ul>
                    <p>Người chơi sẽ nhận được mức trả thưởng cao nhất là {Math.max(odds[2][3], odds[5][3])}0</p>
                </div>
            </div>
        </li>
    );
};

const SicBoGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là thể loại Slot game (game xèng), được xây dựng dựa trên câu chuyện về tứ linh vật Long - Lân - Quy -
                        Phụng rất nổi tiếng. Trò chơi gồm 3 hàng 5 cột, với tất cả 11 biểu tượng khác nhau. Người chơi sẽ thắng nếu có các
                        biểu tượng giống nhau nằm trên cùng một dòng cược mà người chơi đã chọn.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <Image
                            src={`/static/images/four-guardians/vi/list_icon.png`}
                            alt="guide_item_symbol_bg"
                            width={38}
                            height={38}
                            layout="responsive"
                        />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                {renderPayouts(odds)}
                {renderJackpot()}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default SicBoGuideVI;
