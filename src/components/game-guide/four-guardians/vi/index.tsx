import React from "react";
import Image from "next/image";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderPayoutsIconFirstLine, renderPayoutsIconSecondLine, renderIconContentBlack } from "../en";
import Styles from "../four-guardians.module.scss";

const tableSmall = "table-small";
const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
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
                            loading="lazy"
                        />
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = () => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Mỗi biểu tượng sẽ có tỷ lệ trả thưởng tương ứng khác nhau.</li>
                <li>
                    <strong>Lưu ý:</strong> Tỷ lệ trả thưởng đã bao gồm tiền cược.
                </li>
            </ul>

            {renderPayoutsIconFirstLine()}
            {renderPayoutsIconSecondLine()}
            {renderExamplePayouts()}
        </li>
    );
};

const renderExamplePayouts = () => {
    return (
        <>
            <p>
                <strong>Ví dụ:</strong>
            </p>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Biểu Tượng</th>
                            <th> Mô Tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                <span className={Styles["wrapper-icon"]}>
                                    <Image
                                        className={`${Styles["icon-box"]}`}
                                        src="/static/images/four-guardians/guide_item_symbol_bg-dark.png"
                                        width={200}
                                        height={132}
                                        layout="fixed"
                                        alt="guide_item_symbol_bg"
                                        loading="lazy"
                                    />
                                    <img
                                        className={`${Styles["item1"]} ${Styles["customize"]}`}
                                        src="./static/images/four-guardians/item1.png"
                                        alt="item1"
                                    ></img>
                                    <div
                                        className={`${Styles["icon-content"]} ${Styles["icon-content-top"]} ${Styles["gem-position"]} ${Styles["icon-content-customize"]}`}
                                    >
                                        <span className={`${Styles[number]} ${`${Styles[number]} ${Styles[numberFirst]}`}`}>5</span>
                                        <span className={`${Styles[number]} ${Styles[numberSecond]}`}>25</span>
                                        <span className={`${Styles[number]} ${Styles[numberFirst]}`}>4</span>
                                        <span className={`${Styles[number]} ${Styles[numberSecond]}`}>10</span>
                                        <span className={`${Styles[number]} ${Styles[numberFirst]}`}>3</span>
                                        <span className={`${Styles[number]} ${Styles[numberSecond]}`}>5</span>
                                    </div>
                                </span>
                            </td>
                            <td>
                                Nếu có <strong>5</strong> mảnh Ngọc Bội trên cùng Dòng Cược.<br></br>Tiền thắng = Mức Cược *
                                <strong>25</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong></strong>4 mảnh Ngọc Bội trên cùng Dòng Cược. <br></br>Tiền thắng = Mức Cược *{" "}
                                <strong>10</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> mảnh Ngọc Bội trên cùng Dòng Cược. <br></br>Tiền thắng = Mức Cược *{" "}
                                <strong>5</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderFreeSpin = () => {
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
                <table className={`table text-center ${Styles[tableSmall]}`}>
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
                                        [5, 18],
                                        [4, 6],
                                        [3, 3],
                                    ],
                                    " FREE SPIN"
                                )}
                            </td>
                            <td>
                                Nếu có <strong>5</strong> biểu tượng Free Spin trong kết quả. <br></br> Bạn nhận <strong>18</strong> lượt
                                quay miễn phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>4</strong> biểu tượng Free Spin trong kết quả. <br></br>Bạn nhận <strong>6</strong> lượt quay
                                miễn phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> biểu tượng Free Spin trong kết quả.<br></br>Bạn nhận <strong>3</strong> lượt quay
                                miễn phí.
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
                                loading="lazy"
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

const renderBonus = () => {
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
                <table className={`table text-center ${Styles[tableSmall]}`}>
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
                                        [5, 5],
                                        [4, 4],
                                        [3, 3],
                                    ],
                                    " BONUS"
                                )}
                            </td>
                            <td>
                                Nếu có <strong>5</strong> biểu tượng Bonus trong kết quả.<br></br> Bạn nhận <strong>5</strong> lần mở
                                thưởng.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>4</strong> biểu tượng Bonus trong kết quả.<br></br> Bạn nhận <strong>4</strong> lần mở
                                thưởng.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> biểu tượng Bonus trong kết quả.<br></br> Bạn nhận <strong>3</strong> lần mở
                                thưởng.
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
                                loading="lazy"
                            />
                        </div>
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

const renderWild = () => {
    const wrapperWildImg = "wrapper-wild-img";
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
                    loading="lazy"
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
                        và{" "}
                        <img
                            className={`${Styles["item10"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item10.png"
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
                    <p>Người chơi chọn mức cược 1, dòng cược số 1. Kết quả như sau:</p>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item2.png"
                                alt="item2"
                                width={77}
                                height={67}
                                layout="fixed"
                                loading="lazy"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item2.png"
                                alt="item2"
                                width={77}
                                height={67}
                                layout="fixed"
                                loading="lazy"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item9.png"
                                alt="item9"
                                width={74}
                                height={50}
                                layout="fixed"
                                loading="lazy"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item5.png"
                                alt="item5"
                                width={76}
                                height={77}
                                layout="fixed"
                                loading="lazy"
                            />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <Image
                                src="/static/images/four-guardians/item5.png"
                                alt="item5"
                                width={76}
                                height={77}
                                layout="fixed"
                                loading="lazy"
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
                            . Mức trả thưởng = 1 * 5 = 5
                        </li>
                        <li>
                            Nếu biểu tượng Wild thay thế{" "}
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
                                alt="item5-mini"
                            ></img>
                            . Mức trả thưởng = 1 * 16 = 16
                        </li>
                    </ul>
                    <p>Người chơi sẽ nhận được mức trả thưởng cao nhất là 16</p>
                </div>
            </div>
        </li>
    );
};

const SicBoGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName } = props;
    return (
        <div>
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
                            src={`/static/images/four-guardians/list_icon.png`}
                            alt="guide_item_symbol_bg"
                            width={38}
                            height={38}
                            layout="responsive"
                        />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                {renderPayouts()}
                {renderFreeSpin()}
                {renderBonus()}
                {renderWild()}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default SicBoGuideVI;
