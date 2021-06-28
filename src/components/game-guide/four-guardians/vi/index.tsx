import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";

const wrapperImg = "wrapper-img";
const imgRectangle = "img-rectangle";
const wrapperIcon = "wrapper-icon";
const wrapperIconDark = "wrapper-icon-dark";
const tableSmall = "table-small";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconContent = "icon-content";
const iconBox = "icon-box";
const contentTop = "content-top";
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
                    <div className={Styles[wrapperImg]}>
                        <img
                            className={Styles[imgRectangle]}
                            src="./static/images/four-guardians/guide_payline.png"
                            alt="guide_payline"
                        ></img>
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

const renderPayoutsIconFirstLine = () => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item10"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/sc1/item10.png"
                        alt="item10"
                    ></img>
                    <div className={Styles[iconContent]}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>1000</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>75</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>25</span>
                        <span className={Styles[numberFirst]}>2</span>
                        <span className={Styles[numberSecond]}>4</span>
                    </div>
                </span>

                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item6"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item6.png"
                        alt="item6"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>500</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>75</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>20</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item5"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item5.png"
                        alt="item5"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>375</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>60</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>16</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item4"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item4.png"
                        alt="item4"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>275</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>45</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>12</span>
                    </div>
                </span>
            </div>
        </>
    );
};

const renderPayoutsIconSecondLine = () => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item3"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item3.png"
                        alt="item3"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>150</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>20</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>10</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item2"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item2.png"
                        alt="item2"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>50</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>25</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>5</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item1"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item1.png"
                        alt="item1"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>25</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>10</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>5</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item0"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item0.png"
                        alt="item0"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>10</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>5</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>2</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item9"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item9.png"
                        alt="item9"
                    ></img>
                    <div className={Styles[iconContent]}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>8000</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>1000</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>50</span>
                        <span className={Styles[numberFirst]}>2</span>
                        <span className={Styles[numberSecond]}>8</span>
                    </div>
                </span>
            </div>
        </>
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
                                <span className={Styles[wrapperIcon]}>
                                    <img
                                        className={`${Styles[iconBox]}`}
                                        src="/static/images/four-guardians/guide_item_symbol_bg-dark.png"
                                        alt="guide_item_symbol_bg"
                                    ></img>
                                    <img
                                        className={`${Styles["item1"]} ${Styles["customize"]}`}
                                        src="./static/images/four-guardians/item1.png"
                                        alt="item1"
                                    ></img>
                                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                                        <span className={Styles[numberFirst]}>5</span>
                                        <span className={Styles[numberSecond]}>25</span>
                                        <span className={Styles[numberFirst]}>4</span>
                                        <span className={Styles[numberSecond]}>10</span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>5</span>
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
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Biểu Tượng</th>
                            <th> Mô Tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    className={`${Styles["item10"]} ${Styles["sc2"]}`}
                                    src="./static/images/four-guardians/item10.png"
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
                                <span className={Styles[wrapperIconDark]}>
                                    <img
                                        className={`${Styles[iconBox]}`}
                                        src="/static/images/four-guardians/guide_item_symbol_bg-dark.png"
                                        alt="guide_item_symbol_bg"
                                    ></img>
                                    <img
                                        className={`${Styles["item7"]} ${Styles["dark"]}`}
                                        src="./static/images/four-guardians/item7.png"
                                        alt="item7"
                                    ></img>
                                    <div className={`${Styles[iconContent]} ${Styles["free-spin"]}`}>
                                        <span className={Styles[numberFirst]}>5</span>
                                        <span className={Styles[numberSecond]}>
                                            10 <span className="text-white">FREE SPIN</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>4</span>
                                        <span className={Styles[numberSecond]}>
                                            10 <span className="text-white">FREE SPIN</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>
                                            10 <span className="text-white">FREE SPIN</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>10</span>
                                    </div>
                                </span>
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
                        <img
                            className={`${Styles["free-spin-ex"]}`}
                            src="/static/images/four-guardians/sc1/guide_example_free_spin.png"
                            alt="guide_item_symbol_bg"
                        ></img>
                        <span>
                            {" "}
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
                                <span className={Styles[wrapperIconDark]}>
                                    <img
                                        className={`${Styles[iconBox]}`}
                                        src="/static/images/four-guardians/guide_item_symbol_bg-dark.png"
                                        alt="guide_item_symbol_bg"
                                    ></img>
                                    <img
                                        className={`${Styles["item8"]} ${Styles["dark"]}`}
                                        src="./static/images/four-guardians/item8.png"
                                        alt="item8"
                                    ></img>
                                    <div className={`${Styles[iconContent]} ${Styles["free-spin"]}`}>
                                        <span className={Styles[numberFirst]}>5</span>
                                        <span className={Styles[numberSecond]}>
                                            5 <span className="text-white">BONUS</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>4</span>
                                        <span className={Styles[numberSecond]}>
                                            4 <span className="text-white">BONUS</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>
                                            3 <span className="text-white">BONUS</span>
                                        </span>
                                    </div>
                                </span>
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
                        <img
                            className={`${Styles["free-spin-ex"]}`}
                            src="/static/images/four-guardians/sc1/guide_example_bonus.png"
                            alt="guide_example_bonus"
                        ></img>
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
    return (
        <li className="guide-item">
            <h2>Wild</h2>
            <div className={Styles[freeSpinContentEX]}>
                <img
                    className={`${Styles["item-wild"]} ${Styles["big"]}`}
                    src="/static/images/four-guardians/guide_example_wild.png"
                    alt="guide_example_wild"
                ></img>
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
                        <img className={`${Styles["item2"]}`} src="./static/images/four-guardians/item2.png" alt="item2"></img>
                        <img className={`${Styles["item2"]}`} src="./static/images/four-guardians/item2.png" alt="item2"></img>
                        <img className={`${Styles["item9"]}`} src="./static/images/four-guardians/item9.png" alt="item9"></img>
                        <img className={`${Styles["item5"]}`} src="./static/images/four-guardians/item5.png" alt="item5"></img>
                        <img className={`${Styles["item5"]}`} src="./static/images/four-guardians/item5.png" alt="item5"></img>
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
                        <img
                            className={`${Styles["list-icon"]}`}
                            src={`/static/images/four-guardians/sc1/list_icon.png`}
                            alt="guide_item_symbol_bg"
                        ></img>
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
