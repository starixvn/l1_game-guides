import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../treasure-island.module.scss";
import { GameConfigProps } from "../type";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn hoặc điều chỉnh số tiền đặt cược phù hợp với mình trước khi nhấn nút “Quay”.
                    <div>Tổng tiền cược = Mức cược * Giá trị cược * Hệ số cược</div>
                </li>
                <li>Thay vì nhấn nút “Quay”, người chơi có thể sử dụng phím Space hoặc Enter trên bàn phím để bắt đầu vòng quay.</li>
                <li>Thắng-thua của mỗi tổ hợp sẽ được tính dựa trên mức cược cơ bản.
                    <div>Cược cơ bản = Mức cược * Giá trị cược</div>
                </li>
            </ul>
        </>
    );
};

const renderTumbling = () => {
    return(
        <>
            <h2>Tính năng Tumble</h2>
            <ul className="desc">
                <li>Sau mỗi lần quay, các tổ hợp thắng sẽ được trả thưởng và tất cả các biểu tượng chiến thắng sẽ được loại bỏ, cho phép các biểu tượng mới rơi vào vị trí trống.</li>
                <li>Tumble sẽ tiếp tục cho đến khi không còn tổ hợp chiến thắng nào xuất hiện từ kết quả của tumble. Số lần tumble có thể xảy ra là không giới hạn.</li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
       <>
        <h2>Trả Thưởng</h2>
        <ul className="desc">
            <li>Bảng trả thưởng sẽ được cập nhật theo giá trị của mức cược cơ bản mà bạn đã chọn.</li>
            <li>Tổng số tiền thắng cược sẽ được cộng ngay vào tài khoản của người chơi khi phiên kết thúc.</li>
            <li>Khi chiến thắng với biểu tượng HỆ SỐ NHÂN, giá trị của tất cả các biểu tượng hệ số nhân trên màn hình sẽ được cộng lại với nhau vào cuối chuỗi tumbe. Và tổng số tiền thắng của một vòng trò chơi được tính bằng tổng giá trị của hệ số nhân nhân với tổng số tiền thắng của các tumblig.</li>
        </ul>
        {renderPayoutsIconFirstLine(odds, locales.vi)}
        {renderPayoutsIconSecondLine(odds, locales.vi)}
        {renderExamplePayouts(odds)}
       </>
    );
};

export const renderIconContent = (
    isBgBlack = false,
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: number[][],
    locale = "en"
) => {
    const pathSrc = itemName === "item10" ? "./static/images/treasure-island/" : "./static/images/treasure-island/";
    return (
        <div className={Styles["wrapper-icon"]}>
            <img
                src={`/static/images/treasure-island/guide_item_symbol_bg.png?v1`}
                width={200}
                height={132}
                alt={"guide_item_symbol_bg"}
                loading="eager"
            />

            <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png?v1`} alt={itemName}></img>
            <div
                className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${
                    isGem && Styles["gem-position"]
                }`}
            >
                {dataContent.map((data, index) => {
                    return (
                        <div key={index} className={Styles["icon-content"]}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{data[1]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const renderPayoutsIconFirstLine = (odds: number[][], locale = "en") => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item8",
                    false,
                    false,
                    [
                        [5, odds[10][5]],
                        [4, odds[10][4]],
                        [3, odds[10][3]],
                        [2, odds[10][2]],
                    ],
                    locale
                )}
                {renderIconContent(
                    false,
                    "item7",
                    true,
                    false,
                    [
                        [5, odds[6][5]],
                        [4, odds[6][4]],
                        [3, odds[6][3]],
                    ],
                    locale
                )}
                {renderIconContent(
                    false,
                    "item6",
                    true,
                    false,
                    [
                        [5, odds[5][5]],
                        [4, odds[5][4]],
                        [3, odds[5][3]],
                    ],
                    locale
                )}
                {renderIconContent(
                    false,
                    "item5",
                    true,
                    false,
                    [
                        [5, odds[4][5]],
                        [4, odds[4][4]],
                        [3, odds[4][3]],
                    ],
                    locale
                )}
            </div>
        </>
    );
};

export const renderPayoutsIconSecondLine = (odds: number[][], locale = "en") => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item4",
                    true,
                    false,
                    [
                        [5, odds[3][5]],
                        [4, odds[3][4]],
                        [3, odds[3][3]],
                    ],
                    locale
                )}
                {renderIconContent(
                    false,
                    "item3",
                    true,
                    true,
                    [
                        [5, odds[2][5]],
                        [4, odds[2][4]],
                        [3, odds[2][3]],
                    ],
                    locale
                )}
                {renderIconContent(
                    false,
                    "item2",
                    true,
                    true,
                    [
                        [5, odds[1][5]],
                        [4, odds[1][4]],
                        [3, odds[1][3]],
                    ],
                    locale
                )}
                {renderIconContent(
                    false,
                    "item1",
                    true,
                    true,
                    [
                        [5, odds[0][5]],
                        [4, odds[0][4]],
                        [3, odds[0][3]],
                    ],
                    locale
                )}
                {renderIconContent(
                    false,
                    "item0",
                    false,
                    false,
                    [
                        [5, odds[9][5]],
                        [4, odds[9][4]],
                        [3, odds[9][3]],
                        [2, odds[9][2]],
                    ],
                    locale
                )}
            </div>
        </>
    );
};

export const renderIconContentBlack = (itemName: string, dataContent: number[][], textAfterNumber: string) => {
    return (
        <span className={Styles["wrapper-icon-dark"]}>
            <img
                className={`${Styles[iconBox]}`}
                src="/static/images/treasure-island/guide_item_symbol_bg.png#v2"
                width={269}
                height={132}
                alt="guide_item_symbol_bg"
                loading="eager"
            />

            <img className={`${Styles[itemName]} ${Styles["dark"]} ${Styles["scatter"]}`} src={`./static/images/treasure-island/${itemName}.png`} alt={itemName}></img>
            <div
                className={`${Styles["icon-content-wrapper"]} ${itemName === "item8" ? Styles["bonus-position"] : Styles["spin-position"]}`}
            >
                {dataContent.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`${Styles["icon-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                        >
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>
                                {data[1]} {textAfterNumber && <span className={Styles["text"]}>{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
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
                                {renderIconContent(true, "item8", true, true, [
                                    [5, odds[1][5]],
                                    [4, odds[1][4]],
                                    [3, odds[1][3]],
                                ])}
                            </td>
                            <td>
                                Nếu có <strong>5</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />
                                trên cùng Dòng Cược.<br></br>Tiền thắng = Mức Cược * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>4</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> trên cùng Dòng Cược.{" "}
                                <br></br>Tiền thắng = Mức Cược * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>3</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> trên cùng Dòng Cược.{" "}
                                <br></br>Tiền thắng = Mức Cược * {odds[1][3]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};


const renderMultipliers = () => {
    return(
        <>
        <h2>Số Nhân</h2>
        <div className={Styles["center"]}><img src={`/static/images/treasure-island/multiplier.jpg#v3`} alt="multiplier" width={486} height={101} /></div>
        <ul className="desc">
            <li>Các biểu tượng Số Nhân xuất hiện trên tất cả các cột, và có thể xuất hiện ngẫu nhiên trong suốt các vòng quay và tumbling trong vòng quay cơ bản và Free Spin.</li>
            <li>Bất cứ khi nào một biểu tượng Số Nhân nào xuất hiện, nó sẽ nhận một giá trị nhân ngẫu nhiên từ Min đến Max.</li>
        </ul>
        </>
    );
};

const renderFreeSpins = (odds: number[][]) => {
    return(
        <>
            <h2>Free Spin</h2>
            <ul className="desc">
                <li>Free Spin hay còn được gọi là lượt quay miễn phí, người chơi sẽ được thưởng Free Spin khi có 4 biểu tượng SCATTER trở lên xuất hiện ở bất kỳ vị trí nào trên màn hình.</li>
                <li>Trong toàn bộ thời gian của các vòng quay Free Spins, bất cứ khi nào xuất hiện biểu tượng Số Nhân và kết quả quay dẫn đến chiến thắng, giá trị Hệ Số Nhân sẽ được cộng vào tổng giá trị của hệ số nhân.</li>
                <li>Trong lược Free Spin, nếu có 3 hoặc nhiều hơn 3 biểu tượng SCATTER xuất hiện ở bản kết quả, người chơi sẽ được trả thưởng thêm “n” lượt Free Spin.</li>
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
                                    "scatter",
                                    [
                                        [5, odds[7][5]],
                                        [4, odds[7][4]],
                                        [3, odds[7][3]],
                                    ],
                                    " FREE SPINS"
                                )}
                            </td>
                            <td>
                                Nếu có <strong>4</strong> biểu tượng Free Spin trong kết quả. <br></br> Bạn nhận {odds[7][5]} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>5</strong> biểu tượng Free Spin trong kết quả. <br></br>Bạn nhận {odds[7][4]} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>6</strong> biểu tượng Free Spin trong kết quả.<br></br>Bạn nhận {odds[7][3]} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const TreasureIslandGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là một thể loại Slot game xếp tầng (Game xèng xếp tầng) trực tuyến đã trở nên cực kỳ phổ biến với người
                        chơi vì nó mang lại nhiều cơ hội chiến thắng hơn so với các Slot game kiểu cũ. Trò chơi bao gồm sáu cột, năm hàng và
                        mười biểu tượng khác nhau. Biểu tượng được thanh toán ở bất kỳ vị trí nào trên màn hình. Tổng số các biểu tượng
                        giống nhau trên màn hình khi kết thúc một vòng quay sẽ xác định giá trị của chiến thắng.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img src={`/static/images/treasure-island/list_icon.png#v3`} alt="guide_item_symbol_bg" width={426} height={443} />
                    </div>
                </li>
                <li className="guide-item">{renderTumbling()}</li>
                <li className="guide-item">{renderGameRule()}</li>
                <li className="guide-item">{renderPayouts(odds)}</li>
                <li className="guide-item">{renderMultipliers()}</li>
                <li className="guide-item">{renderFreeSpins(odds)}</li>

                {renderTermsAndConditionsVI(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default TreasureIslandGuideVI;
