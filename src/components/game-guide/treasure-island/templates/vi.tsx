import React from "react";
import { locales } from "../../../../common/constants";
import { GameGuideProps } from "../../type";
import OddDetailList from "../OddDetail";
import Styles from "../treasure-island.module.scss";
import { GameConfigProps } from "../type";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";
import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const renderGameRule = (minValue: number, maxValue: number) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn hoặc điều chỉnh số tiền đặt cược phù hợp với mình trước khi nhấn nút “Quay”.
                    <div className="sub-section">
                        <div className="center"><div>Tổng Cược =  Giá Trị Xu * Mức Cược * Hệ Số Cược</div>
                            <img src={`/static/images/treasure-island/betcontrol-vn.jpg?v1`}
                                width={610}
                                height={343}
                                alt={"bet-control"} />
                        </div>
                        <ul className={Styles["desc-bet-control"]}>
                            <li>1. Giá Trị Xu là số tiền cược mà bạn muốn chi trả cho mỗi dòng trong trò chơi.</li>
                            <li>2. Mức Cược là tổng số đồng xu trên mỗi dòng.</li>
                            <li>3. Hệ Số Cược là hệ số nhân để tính Tổng Cược bằng cách nhân với Mức Cược và Giá Trị Xu. Hệ Số Cược: 20x.</li>
                        </ul>
                    </div>
                </li>
                <li>Người chơi có thể nhấn nút Quay hoặc sử dụng phím Spacebar/Enter để bắt đầu vòng quay.</li>
                <li>Tổng số các biểu tượng giống nhau trên màn hình khi kết thúc một vòng quay sẽ xác định giá trị của tiền thắng.</li>
                <li>Giới hạn cược: {minValue} - {maxValue}</li>
            </ul>
        </>
    );
};

const renderTumbling = () => {
    return (
        <>
            <h2>Tính năng Nổ Sập</h2>
            <ul className="desc">
                <li>Sau mỗi lần quay, các tổ hợp thắng được trả thưởng và tất cả biểu tượng chiến thắng biến mất, các biểu tượng còn lại rơi xuống cuối màn hình và cho phép các biểu tượng mới rơi vào vị trí trống.</li>
                <li>Nổ Sập sẽ tiếp tục cho đến khi không còn tổ hợp chiến thắng nào xuất hiện. </li>
                <li>Số lần Nổ Sập có thể xảy ra là không giới hạn.</li>
            </ul>
        </>
    );
};

export const convertOddDetail = (odd: any, isFreeSpin: boolean): OddDetailList[] => {
    let oddList: OddDetailList[] = [];
    for (const item in odd) {
        const symbol = odd[item]
        let oddDetail: OddDetailList = { oddItem: [] };
        for (const sub in symbol) {
            if (!isFreeSpin) {
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
    return oddList;
}

const renderPayouts = (odds: any, coin: number, level: number, maxWinPerRound: number) => {
    const { symbols } = odds;
    let oddDetail = convertOddDetail(symbols, false);
    const currMaxBet = maxWinPerRound;
    return (
        <>
            <h2>Trả Thưởng</h2>
            <ul className="desc">
                <li>Biểu tượng được thanh toán ở bất kỳ vị trí nào trên màn hình.</li>
                <li>Thắng-thua của mỗi tổ hợp sẽ được tính dựa trên mức tiền cược cơ bản.
                    <div className="center">Tiền Cược Cơ Bản = Mức Cược * Giá Trị Xu</div>
                </li>
                <li>Bảng trả thưởng sẽ được cập nhật theo giá trị của mức tiền cược cơ bản mà bạn đã chọn.
                    <div className="sub-section">
                        {renderPayoutsIconFirstLine(oddDetail, locales.vi, coin, level)}
                        {renderPayoutsIconSecondLine(oddDetail, locales.vi, coin, level)}
                        {renderExamplePayouts(oddDetail[8], coin, level)}
                    </div>
                </li>
                <li>Tổng số tiền thắng cược sẽ được cộng ngay vào tài khoản của người chơi khi phiên kết thúc.</li>
                <li>Số tiền thắng tối đa của một phiên là {currMaxBet}X tiền cược. Nếu tổng số tiền thắng của một phiên đạt mức tối đa thì phiên chơi sẽ ngay lập tức kết thúc. Tổng số tiền thắng sẽ được trả đến mức thắng tối đa, các tính năng còn lại sẽ không được tính vào số tiền thắng cuối cùng.</li>
            </ul>

        </>
    );
};

export const renderIconContent = (
    isBgBlack = false,
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: OddDetailList,
    locale = "en", coin: number, level: number, isReverse = true
) => {
    const pathSrc = itemName === "item10" ? "./static/images/treasure-island/" : "./static/images/treasure-island/";
    const dictNumber = ["12-30", "10-11", "8-9"];
    const oddItemList = isReverse ? dataContent.oddItem.reverse() : dataContent.oddItem;
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
                className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${isGem && Styles["gem-position"]
                    }`}
            >

                {oddItemList.map((data, index) => {
                    const value = +(+(data.count * coin * level)).toFixed(2);

                    return (
                        <div key={index} className={Styles["icon-content"]}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data.countString}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const renderPayoutsIconFirstLine = (symbols: OddDetailList[], locale = "en", coin: number, level: number) => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item8",
                    false,
                    false,
                    symbols[8],
                    locale, coin, level
                )}
                {renderIconContent(
                    false,
                    "item7",
                    true,
                    false,
                    symbols[7],
                    locale, coin, level
                )}
                {renderIconContent(
                    false,
                    "item6",
                    true,
                    false,
                    symbols[6],
                    locale, coin, level
                )}
                {renderIconContent(
                    false,
                    "item5",
                    true,
                    false,
                    symbols[5],
                    locale, coin, level
                )}
                {renderIconContent(
                    false,
                    "item4",
                    true,
                    false,
                    symbols[4],
                    locale, coin, level
                )}
            </div>
        </>
    );
};

export const renderPayoutsIconSecondLine = (symbols: OddDetailList[], locale = "en", coin: number, level: number) => {
    return (
        <>
            <div className={Styles["icon-container"]}>

                {renderIconContent(
                    false,
                    "item3",
                    true,
                    true,
                    symbols[3],
                    locale, coin, level
                )}
                {renderIconContent(
                    false,
                    "item2",
                    true,
                    true,
                    symbols[2],
                    locale, coin, level
                )}
                {renderIconContent(
                    false,
                    "item1",
                    true,
                    true,
                    symbols[1],
                    locale, coin, level
                )}
                {renderIconContent(
                    false,
                    "item0",
                    false,
                    false,
                    symbols[0],
                    locale, coin, level
                )}
            </div>
        </>
    );
};

const renderCountFreeSpin = (count: number) => {
    if (count < 6) {
        return (<span>{count}</span>);
    }
    else {
        return (<span className={`${Styles["ex-wrapper"]}`}><span>{count}</span></span>);
    }
}

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
                {dataContent.oddItem.reverse().map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`${Styles["icon-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                        >

                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{renderCountFreeSpin(+data.countString)}</span>
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

const renderExamplePayouts = (symbol: OddDetailList, coin: number, level: number) => {
    return (
        <>
            <p>
                <strong>Ví dụ:</strong> Mức tiền cược cơ bản của bạn là {+(+(coin * level)).toFixed(2)}
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
                                {renderIconContent(true, "item8", true, true, symbol, "", coin, level, false)}
                            </td>
                            <td>
                                Nếu có <strong>{symbol.oddItem[0].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />
                                {" "}xuất hiện trên bảng kết quả.<br></br>Tiền thắng = {+(+(symbol.oddItem[0].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{symbol.oddItem[1].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> xuất hiện trên bảng kết quả.{" "}
                                <br></br>Tiền thắng = {+(+(symbol.oddItem[1].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{symbol.oddItem[2].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> xuất hiện trên bảng kết quả.{" "}
                                <br></br>Tiền thắng = {+(+(symbol.oddItem[2].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};


const renderMultipliers = () => {
    return (
        <>
            <h2>Số Nhân</h2>
            <div className={Styles["center"]}>
                <img src={`/static/images/treasure-island/multiplier2.png#v3`} alt="multiplier" width={140} height={112} />
                <img src={`/static/images/treasure-island/multiplier3.png#v3`} alt="multiplier" width={140} height={112} />
                <img src={`/static/images/treasure-island/multiplier1.png#v3`} alt="multiplier" width={140} height={112} />
                <img src={`/static/images/treasure-island/multiplier4.png#v3`} alt="multiplier" width={140} height={112} />
            </div>
            <ul className="desc">
                <li>Các biểu tượng Số Nhân xuất hiện ở vị trí bất kì trên màn hình và người chơi có thể trúng ngẫu nhiên trong cả vòng quay và lượt Nổ Sập.</li>
                <li>Biểu tượng Số Nhân xuất hiện sẽ nhận một giá trị số nhân ngẫu nhiên từ 2x đến 500x.</li>
                <li>Kết thúc các lượt Nổ Sập, giá trị của các biểu tượng Số Nhân trên màn hình được cộng lại với nhau và nhân với giá trị Thắng Nổ Sập để tính toán kết quả thắng cuối cùng.
                    <div className="sub-section">
                        <div>Ví dụ:</div>
                        <div className="center" ><img src={`/static/images/treasure-island/reel.jpg#v4`} alt="tumble-multiplier" width={610} height={362} /></div>
                        <div className="table-container text-center">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th>Biểu Tượng Thắng</th>
                                        <th>Thắng Nổ Sập</th>
                                        <th>Số Nhân</th>
                                        <th>Thắng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="./static/images/treasure-island/item1.png" width={50} height={50} alt="item2" />
                                        </td>
                                        <td>7</td>
                                        <td>22 <br />(20+2)</td>
                                        <td><strong>154</strong><br /><strong>(7*22)</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderFreeSpins = (odds: any, coin: number, level: number) => {
    const { freeSpins } = odds;
    const oddDetail = convertOddDetail(freeSpins, true)
    return (
        <>
            <h2>Free Spin</h2>
            <ul className="desc">
                <li>Free Spins hay còn được gọi là lượt quay miễn phí, người chơi sẽ được thưởng Free Spins khi có 4 biểu tượng SCATTER trở lên xuất hiện ở bất kỳ vị trí nào trên màn hình.
                    <div className="sub-section">
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
                                            Nếu có <strong>{oddDetail[0].oddItem[0].countString}</strong> hoặc nhiều hơn <strong>{oddDetail[0].oddItem[0].countString}</strong> biểu tượng Scatter trong kết quả.<br></br>Bạn nhận {oddDetail[0].oddItem[0].count} lượt quay miễn
                                            phí.

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Nếu có <strong>{oddDetail[0].oddItem[1].countString}</strong> biểu tượng Scatter trong kết quả. <br></br>Bạn nhận {oddDetail[0].oddItem[1].count} lượt quay miễn
                                            phí.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Nếu có <strong>{oddDetail[0].oddItem[2].countString}</strong> biểu tượng Scatter trong kết quả. <br></br> Bạn nhận {oddDetail[0].oddItem[2].count} lượt quay miễn
                                            phí.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </li>
                <li>Trong lượt Free Spins, nếu có 4 hoặc nhiều hơn 4 biểu tượng SCATTER xuất hiện ở bảng kết quả, người chơi sẽ được thưởng thêm {oddDetail[1].oddItem[0].count} lượt Free Spins.</li>
                <li>Trong phiên của Free Spins, khi xuất hiện biểu tượng Số Nhân và kết quả Nổ Sập là thắng, giá trị Số Nhân sẽ được cộng dồn vào Tổng Số Nhân. Giá trị Tổng Số Nhân được sử dụng để tính toán tiền thưởng.
                    <div className="sub-section">
                        <div>Ví dụ: Người chơi thắng 4 lượt <strong>Free Spins</strong></div>
                        <div className="table-container text-center">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th>Phiên</th>
                                        <th>Thắng Nổ Sập</th>
                                        <th>Số Nhân</th>
                                        <th>Tổng Số Nhân</th>
                                        <th>Thắng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#1</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td><strong>50</strong><br /><strong>(Thắng Nổ Sập * Tổng Số Nhân)</strong></td>
                                    </tr>
                                    <tr>
                                        <td>#2</td>
                                        <td>5</td>
                                        <td>0</td>
                                        <td>5</td>
                                        <td><strong>5</strong><br /><strong>(Thắng Nổ Sập)</strong></td>
                                    </tr>
                                    <tr>
                                        <td>#3</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>5</td>
                                        <td><strong>0</strong></td>
                                    </tr>
                                    <tr>
                                        <td>#4</td>
                                        <td>7</td>
                                        <td>3</td>
                                        <td>8 <br />(5+3)</td>
                                        <td><strong>56</strong><br /><strong>(Thắng Nổ Sập * Tổng Số Nhân)</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={`${Styles["center"]} ${Styles["line"]}`}>
                            <img src={`/static/images/treasure-island/freespin-vn.jpg#v3`} alt="freespin" width={610} height={343} />
                        </div>

                        <div className={`${Styles["center"]} ${Styles["line"]}`}>
                            <img src={`/static/images/treasure-island/tumblewin-vn.png#v3`} alt="tumble-win" width={372} height={69} />
                            <div className={Styles["tumble-desc"]}>
                                <div>1. Tiền Thắng Nổ Sập</div>
                                <div>2. Tổng Số Nhân: 5+3 = 8</div>
                            </div>
                        </div>
                    </div>

                </li>
                <li>Người chơi phải hoàn tất các lượt quay miễn phí trong vòng 24 tiếng tính từ thời điểm trúng Free Spin, sau khoảng thời gian này, các lượt quay chưa sử dụng sẽ bị hủy.</li>
            </ul>

        </>
    );
};

const TreasureIslandGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, betMultiplier, coin, level, coinValues, betLevels, maxWinPerRound } = gameConfigs;
    const sortedCoinValue = coinValues.sort((a, b) => a - b);
    const sortedBetLevel = betLevels.sort((a, b) => a - b);
    const minBet = betMultiplier * sortedCoinValue[0] * sortedBetLevel[0];
    const maxBet = betMultiplier * sortedCoinValue[coinValues.length - 1] * sortedBetLevel[betLevels.length - 1];
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
                        <img src={`/static/images/treasure-island/list_icon.png#v4`} alt="guide_item_symbol_bg" width={750} height={194} />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(minBet, maxBet)}</li>
                <li className="guide-item">{renderPayouts(odds, coin, level, maxWinPerRound)}</li>
                <li className="guide-item">{renderTumbling()}</li>
                <li className="guide-item">{renderMultipliers()}</li>
                <li className="guide-item">{renderFreeSpins(odds, coin, level)}</li>
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionVi} /></li>
            </ul>
        </>
    );
};
export default TreasureIslandGuideVI;
