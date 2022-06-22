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
const renderGameRule = (minValue: number, maxValue: number) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn hoặc điều chỉnh số tiền đặt cược phù hợp với mình trước khi nhấn nút “Quay”.
                <div className="sub-section">
                    <div className="center">Tổng Cược =  Giá trị xu * Mức cược * Hệ số cược</div>
                        <img src={`/static/images/treasure-island/betcontrol-vn.jpg?v1`}
                    width={610}
                    height={343}
                    alt={"bet-control"}/>
                        <ul>
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
    return(
        <>
            <h2>Tính năng Tumble</h2>
            <ul className="desc">
                <li>Sau mỗi lần quay, các tổ hợp thắng được trả thưởng và tất cả biểu tượng chiến thắng biến mất, các biểu tượng còn lại rơi xuống cuối màn hình và cho phép các biểu tượng mới rơi vào vị trí trống.</li>
                <li>Tumble sẽ tiếp tục cho đến khi không còn tổ hợp chiến thắng nào xuất hiện. </li>
                <li>Số lần Tumble có thể xảy ra là không giới hạn.</li>
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

const renderPayouts = (odds: any, coin: number, level: number, maxBet: number) => {
    const {symbols} = odds;
    let oddDetail = convertOddDetail(symbols, false);
    return (
       <>
        <h2>Trả Thưởng</h2>
        <ul className="desc">
            <li>Biểu tượng được thanh toán ở bất kỳ vị trí nào trên màn hình.</li>
            <li>Thắng-thua của mỗi tổ hợp sẽ được tính dựa trên mức tiền cược cơ bản.
                <div className="center">Tiền Cược Cơ Bản = Mức cược * Giá trị xu</div>
            </li>
            <li>Bảng trả thưởng sẽ được cập nhật theo giá trị của mức tiền cược cơ bản mà bạn đã chọn.
                <div className="sub-section">
                    {renderPayoutsIconFirstLine(oddDetail, locales.vi, coin, level)}
                    {renderPayoutsIconSecondLine(oddDetail, locales.vi, coin, level)}
                    {renderExamplePayouts(oddDetail[8], coin, level)}
                </div>                
            </li>
            <li>Tổng số tiền thắng cược sẽ được cộng ngay vào tài khoản của người chơi khi phiên kết thúc.</li>
            <li>Số tiền thắng tối đa của một phiên là {maxBet}X tiền cược. Nếu tổng số tiền thắng của một phiên đạt mức tối đa thì phiên chơi sẽ ngay lập tức kết thúc. Tổng số tiền thắng sẽ được trả đến mức thắng tối đa, các tính năng còn lại sẽ không được tính vào số tiền thắng cuối cùng.</li>
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
    locale = "en", coin: number, level: number
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
            
                {dataContent.oddItem.reverse().map((data, index) => {
                    const value = +(+(data.count * coin *level)).toFixed(2);

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
                    "item4",
                    true,
                    false,
                    symbols[4],
                    locale, coin, level
                )}
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

const renderExamplePayouts = (symbol: OddDetailList, coin: number, level: number) => {
    return (
        <>
            <p>
                <strong>Ví dụ:</strong> Mức tiền cược cơ bản của bạn là {coin * level}
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
                                {renderIconContent(true, "item8", true, true,symbol, "", coin, level)}
                            </td>
                            <td>
                                Nếu có <strong>{symbol.oddItem[0].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />
                                {" "}trên cùng Dòng Cược.<br></br>Tiền thắng = {symbol.oddItem[0].count * coin * level}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{symbol.oddItem[1].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> trên cùng Dòng Cược.{" "}
                                <br></br>Tiền thắng = {symbol.oddItem[1].count * coin *level}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nếu có <strong>{symbol.oddItem[2].countString}</strong> biểu tượng{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> trên cùng Dòng Cược.{" "}
                                <br></br>Tiền thắng = {symbol.oddItem[2].count *coin * level}
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
            <li>Biểu tượng Số Nhân xuất hiện sẽ nhận một giá trị số nhân ngẫu nhiên từ 2x đến 500x.</li>
            <li>Kết thúc các lượt Tumble, giá trị của các biểu tượng Số Nhân trên màn hình được cộng lại với nhau và nhân với giá trị Thắng Tumble để tính toán kết quả thắng cuối cùng. 
                <div className="sub-section">
                    <div>Ví dụ:</div>
                    <div className="center" ><img src={`/static/images/treasure-island/reel.png#v3`} alt="tumble-multiplier" width={921} height={547}/></div>
                    <div className="table-container text-center">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th>Biểu Tượng Thắng</th>
                                    <th>Thắng Tumble</th>
                                    <th>Số Nhân</th>
                                    <th>Thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img  src="./static/images/treasure-island/item2.png" width={50} height={50} alt="item2"/>
                                    </td>
                                    <td>5</td>
                                    <td>22 <br/>(20+2)</td>
                                    <td><strong>110</strong><br/><strong>(5*22)</strong></td>
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
    const {freeSpins} = odds;
    const oddDetail = convertOddDetail(freeSpins, true)
    return(
        <>
            <h2>Free Spin</h2>
            <ul className="desc">
                <li>Free Spin hay còn được gọi là lượt quay miễn phí, người chơi sẽ được thưởng Free Spin khi có 4 biểu tượng SCATTER trở lên xuất hiện ở bất kỳ vị trí nào trên màn hình.
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
                    </div>
                    
                </li>
                <li>Trong lượt Free Spins, nếu có 4 hoặc nhiều hơn 4 biểu tượng SCATTER xuất hiện ở bảng kết quả, người chơi sẽ được thưởng thêm {oddDetail[1].oddItem[0].count} lượt Free Spins.</li>
                <li>Trong phiên của Free Spins, khi xuất hiện biểu tượng Số Nhân và kết quả Tumble là thắng, giá trị Số Nhân sẽ được cộng dồn vào Tổng Số Nhân. Giá trị Tổng Số Nhân được sử dụng để tính toán tiền thưởng.
                    <div className="sub-section">
                        <div>Ví dụ: Người chơi thắng 4 lượt <strong>Free Spins</strong></div>
                        <div className="table-container text-center">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th>Phiên id</th>
                                        <th>Thắng Tumble</th>
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
                                        <td><strong>50</strong><br/><strong>(Thắng Tumble * Tổng Số Nhân)</strong></td>
                                    </tr>
                                    <tr>
                                        <td>#2</td>
                                        <td>5</td>
                                        <td>0</td>
                                        <td>5</td>
                                        <td><strong>5</strong><br/><strong>(Thắng Tumble)</strong></td>
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
                                        <td>8 <br/>(5+3)</td>
                                        <td><strong>56</strong><br/><strong>(Thắng Tumble * Tổng Số Nhân)</strong></td>
                                    </tr>                           
                                </tbody>
                            </table>
                        </div>
                        <div className={`${Styles["center"]} ${Styles["line"]}`}>
                            <img src={`/static/images/treasure-island/freespin-vn.jpg#v3`} alt="freespin" width={610} height={343}/>
                        </div>

                        <div className={`${Styles["center"]} ${Styles["line"]}`}>
                            <img src={`/static/images/treasure-island/tumblewin-vn.png#v3`} alt="tumble-win" width={372} height={69}/>
                            <div className={Styles["tumble-desc"]}>
                                <div><span className={Styles["orange"]}>1.</span> Tiền Thắng Tumble</div>
                                <div><span className={Styles["orange"]}>2.</span> Tổng Số Nhân: 5+3 = 8</div>
                            </div>
                        </div>
                    </div>
                    
                </li>
            </ul>
           
        </>
    );
};

const TreasureIslandGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName} = props;
    const { odds, betMultiplier, coin, level, coinValues, betLevels } = gameConfigs;
    const sortedCoinValue = coinValues.sort();
    const sortedBetLevel = betLevels.sort();
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
                <li className="guide-item">{renderPayouts(odds, coin, level, maxBet)}</li>
                <li className="guide-item">{renderTumbling()}</li>
                <li className="guide-item">{renderMultipliers()}</li>
                <li className="guide-item">{renderFreeSpins(odds, coin, level)}</li>

                {renderTermsAndConditionsVI(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default TreasureIslandGuideVI;
