import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameGuideProps } from "../../type";
import OddDetailList from "../OddDetail";
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
                <li>Biểu tượng được thanh toán ở bất kỳ vị trí nào trên màn hình. </li>
                <li>Tổng số các biểu tượng giống nhau trên màn hình khi kết thúc một vòng quay sẽ xác định giá trị của tiền thắng.</li>
                <li>Người chơi chọn hoặc điều chỉnh số tiền đặt cược phù hợp với mình trước khi nhấn nút “Quay”.
                    <div>Tổng tiền cược = Mức cược * Giá trị cược * Hệ số cược</div>
                </li>
                <li>Hệ số cược = “Value”</li>
                <li>Thay vì nhấn nút “Quay”, người chơi có thể sử dụng phím Space hoặc Enter trên bàn phím để bắt đầu vòng quay.</li>
                <li>Thắng-thua của mỗi tổ hợp sẽ được tính dựa trên mức cược cơ bản.
                    <div>Cược cơ bản = Mức cược * Giá trị cược</div>
                </li>
                <li>Giới hạn cược: “Min value” - “Max Value”</li>
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

export const convertOddDetail = (odd: any, isFreeSpin: boolean ):OddDetailList[] => {
    let oddList: OddDetailList[] = [];
    for(const item in odd) {
        const symbol = odd[item]
        let oddDetail: OddDetailList = {oddItem: []};
        for(const sub in symbol) {
            if(!isFreeSpin) {
                const from = symbol[sub].from;
                const to = symbol[sub].to;
                const oddValue = symbol[sub].odds;
                oddDetail.oddItem.push({
                    countString: from + "-" + to,
                    count: oddValue
                });
            }
            else {
                oddDetail.oddItem.push({
                    countString: symbol[sub].count,
                    count: symbol[sub].odds
                });
            }
           
        }
        oddList.push(oddDetail);
    }
    return  oddList;
}

const renderPayouts = (odds: any) => {
    const {symbols} = odds;
    let oddDetail = convertOddDetail(symbols, false);
    return (
       <>
        <h2>Trả Thưởng</h2>
        <ul className="desc">
            <li>Bảng trả thưởng sẽ được cập nhật theo giá trị của mức cược cơ bản mà bạn đã chọn.</li>
            <li>Tổng số tiền thắng cược sẽ được cộng ngay vào tài khoản của người chơi khi phiên kết thúc.</li>
            <li>Khi chiến thắng với biểu tượng HỆ SỐ NHÂN, giá trị của tất cả các biểu tượng hệ số nhân trên màn hình sẽ được cộng lại với nhau vào cuối chuỗi tumbe. Và tổng số tiền thắng của một vòng trò chơi được tính bằng tổng giá trị của hệ số nhân nhân với tổng số tiền thắng của các tumblig.</li>
            <li>Số tiền thắng tối đa của một phiên là “value”. Nếu tổng số tiền thắng của một phiên đạt mức tối đa thì vòng trò chơi sẽ ngay lập tức kết thúc. Tổng số tiền thắng sẽ được trả đến mức thắng tôi đa, các tính năng còn lại sẽ bị mất và không đướng tính vào số tiền thắng cuối cùng.</li>
        </ul>
        {renderPayoutsIconFirstLine(oddDetail, locales.vi)}
        {renderPayoutsIconSecondLine(oddDetail, locales.vi)}
        {renderExamplePayouts(oddDetail[8])}
       </>
    );
};

export const renderIconContent = (
    isBgBlack = false,
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: OddDetail[],
    locale = "en"
) => {
    const pathSrc = itemName === "item10" ? "./static/images/treasure-island/" : "./static/images/treasure-island/";
    const dictNumber = ["12-30", "10-11", "8-9"];
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
            
                {dataContent.reverse().map((data, index) => {

                    return (
                        <div key={index} className={Styles["icon-content"]}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data.countString}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{data.count}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const renderPayoutsIconFirstLine = (symbols: OddDetailList[], locale = "en") => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item8",
                    false,
                    false,
                    symbols[8].oddItem,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item7",
                    true,
                    false,
                    symbols[7].oddItem,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item6",
                    true,
                    false,
                    symbols[6].oddItem,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item5",
                    true,
                    false,
                    symbols[5].oddItem,
                    locale
                )}
            </div>
        </>
    );
};

export const renderPayoutsIconSecondLine = (symbols: OddDetailList[], locale = "en") => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item4",
                    true,
                    false,
                    symbols[4].oddItem,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item3",
                    true,
                    true,
                    symbols[3].oddItem,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item2",
                    true,
                    true,
                    symbols[2].oddItem,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item1",
                    true,
                    true,
                    symbols[1].oddItem,
                    locale
                )}
                {renderIconContent(
                    false,
                    "item0",
                    false,
                    false,
                    symbols[0].oddItem,
                    locale
                )}
            </div>
        </>
    );
};

export const renderIconContentBlack = (itemName: string, dataContent: OddDetailList, textAfterNumber: string) => {
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
                {dataContent.oddItem.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`${Styles["icon-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                        >
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data.countString}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>
                                {data.count} {textAfterNumber && <span className={Styles["text"]}>{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

const renderExamplePayouts = (symbol: OddDetailList) => {
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
                                {renderIconContent(true, "item8", true, true,symbol.oddItem.reverse())}
                            </td>
                            <td>
                                Nếu có <strong>{symbol.oddItem[0].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />
                                trên cùng Dòng Cược.<br></br>Tiền thắng = {symbol.oddItem[0].count}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{symbol.oddItem[1].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> trên cùng Dòng Cược.{" "}
                                <br></br>Tiền thắng = {symbol.oddItem[1].count}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{symbol.oddItem[2].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> trên cùng Dòng Cược.{" "}
                                <br></br>Tiền thắng = {symbol.oddItem[2].count}
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

const renderFreeSpins = (odds: any) => {
    const {freeSpins} = odds;
    const oddDetail = convertOddDetail(freeSpins, true)
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
                                    oddDetail[0],
                                    " FREE SPINS"
                                )}
                            </td>
                            <td>
                                Nếu có <strong>{oddDetail[0].oddItem[0].countString}</strong> biểu tượng Free Spin trong kết quả. <br></br> Bạn nhận {oddDetail[0].oddItem[0].count} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{oddDetail[0].oddItem[1].countString}</strong> biểu tượng Free Spin trong kết quả. <br></br>Bạn nhận {oddDetail[0].oddItem[1].count} lượt quay miễn
                                phí.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{oddDetail[0].oddItem[2].countString}</strong> biểu tượng Free Spin trong kết quả.<br></br>Bạn nhận {oddDetail[0].oddItem[2].count} lượt quay miễn
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
                        mười biểu tượng khác nhau.
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
