import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsTW } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../fortune-cat.module.scss";
import { GameConfigProps } from "../type";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = () => {
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                <li>
                    玩家在按下“旋轉”之前選擇支付線（線）並設置您要下注的下注級別。
                    <div className="text-center">
                        <strong>總投注</strong> = 支付線 * 投注水平
                    </div>
                </li>

                <li>25 條支付線從 1 到 25 編號，玩家必須在開始遊戲前至少選擇一條支付線。</li>
                <li>默認情況下，所有具有最低投注級別的支付線將在開始時被選中。</li>
                <li>每條支付線上的贏輸將根據位於該支付線上的相同符號的數量計算。</li>
                <div className={Styles["payline-wrapper"]}>
                    <img src={`/static/images/fortune-cat/guide_payline.png`} alt="guide_payline" loading="eager" />
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>賠率表</h2>
            <ul className="desc">
                <li>中獎金額根據投注賠率計算。</li>
                <li>
                    <strong>注意: </strong> 支付包括初始投注。
                </li>
                <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
            </ul>
            {renderPayoutsIconFirstLine(odds, locales.en)}
            {renderPayoutsIconSecondLine(odds, locales.en)}
            {renderExamplePayout(odds)}
        </li>
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
    const pathSrc = "./static/images/fortune-cat/";
    return (
        <div className={Styles["symbol-wrapper"]}>
            <div className="d-center">
                <img src={`${pathSrc}${itemName}.png?v3`} alt={itemName}></img>
            </div>

            <div>
                {dataContent.map((data, index) => {
                    return (
                        <div key={index} className={Styles["symbol-content"]}>
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
            <div className={Styles["payout-row"]}>
                {renderIconContent(
                    false,
                    "item10",
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
                    "item6",
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
                    "item5",
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
                    "item4",
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
            <div className={Styles["payout-row"]}>
                {renderIconContent(
                    false,
                    "item3",
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
                    "item2",
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
                    "item1",
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
                    "item0",
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
                    "item9",
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

export const renderIconContentLarge = (itemName: string, dataContent: number[][], textAfterNumber: string) => {
    return (
        <span className={`${Styles["symbol-wrapper"]} ${Styles["large"]}`}>
            <div className="d-center">
                <img src={`./static/images/fortune-cat/${itemName}.png`} alt={itemName}></img>
            </div>
            <div>
                {dataContent.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`${Styles["symbol-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
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

const renderExamplePayout = (odds: number[][]) => {
    return (
        <>
            <p>
                <strong>例子</strong>
            </p>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>符號</th>
                            <th> 描述</th>
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
                                有 5 個符號 <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> 位於同一條支付線上。
                                <br></br>派彩 = 投注等級 * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 4 個符號 <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> 位於同一條支付線上。
                                <br></br>派彩 = 投注等級 * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 3 個符號 <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> 位於同一條支付線上。
                                <br></br>派彩 = 投注等級 * {odds[1][3]}
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
                    <li>玩家將收到與結果中包含的Free Spin符號數量相對應的免費旋轉獎金。</li>
                    <li>Free Spin符號不必位於同一支付線上。</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> 例如:</strong> “Free Spin”符號必須出現在不同的捲軸上。例如，如果同一捲軸上有 3 個“Free
                    Spin”符號，系統將計為一個符號。
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/fortune-cat/guide_example_freespin.png#v4"
                                alt="guide_item_symbol_bg"
                                width={265}
                                height={125}
                                loading="eager"
                            />
                        </div>

                        <span>結果中有 4 個“Free Spin”符號，但 3 個符號位於同一個轉軸上。玩家沒有資格獲得Free Spin獎金。</span>
                    </div>
                </li>
                <li className="clear-both">Free Spin的投注級別和支付線數與上一次旋轉（用戶獲得Free Spin獎金的旋轉）相同。</li>
                <li>玩家必須在發放後 24 小時內完成Free Spin獎金。未使用的Free Spin將丟失。</li>
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
                    <li>結果中的任意位置出現 3、4 或 5 個Bonus符號將觸發Bonus遊戲。</li>
                    <li>Bonus符號不必位於同一支付線上。</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> 注意:</strong> Bonus符號必須出現在不同的捲軸中。例如，如果 2 或 3 個
                    Bonus符號出現在同一個捲軸上，系統將計為一個符號。
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img src="/static/images/fortune-cat/guide_example_bonus.png#v4" alt="guide_example_bonus" loading="eager" />
                        </div>

                        <span>結果中有 4 個“Bonus”符號，但 2 個符號位於同一個捲軸上。玩家有資格獲得 3 件物品。</span>
                    </div>
                </li>
                <li>玩家必須在倒計時 120 秒內完成Bonus遊戲。這段時間過後，系統會隨機開啟物品並結算遊戲回合。</li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][]) => {
    const wrapperWildImg = "wrapper-wild-img";
    return (
        <li className="guide-item">
            <h2>Wild</h2>
            <div className={Styles["wild-content-ex"]}>
                <span className={Styles["wrapper-wild"]}>
                    <img src="/static/images/fortune-cat/guide_example_wild.png#v3" alt="guide_example_wild" loading="eager" />
                </span>

                <ul className="desc">
                    <li>
                        “Wild”符號可以替代除
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item8_small.png" alt="item8"></img>,
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item7_small.png#v2" alt="item7"></img>和
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item10_small.png#v2" alt="item10"></img>
                        之外的所有符號
                    </li>
                    <li>僅支付每條線獲得的最高勝利。</li>
                </ul>
            </div>
            <div>
                <strong>例子</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item9.png?v1" alt="item9" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            如果Wild符號是
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item2_small.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} 派彩 = 投注等級 * {odds[2][3]}
                        </li>
                        <li>
                            如果Wild符號是
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item5_small.png"
                                alt="item5-mini"
                            ></img>
                            {`=>`} 派彩 = 投注等級 * {odds[5][3]}
                        </li>
                    </ul>
                    <p>
                        玩家將在這條支付線上獲得最高勝利 {`=>`} 派彩 = 投注等級 * {Math.max(odds[2][3], odds[5][3])}
                    </p>
                </div>
            </div>
        </li>
    );
};

const FortuneCatGuideTW: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        “招財貓”是一款招財貓在線老虎機遊戲——招財貓是吉祥和繁榮的象徵。 該遊戲包括 5 個捲軸和 3 行，帶有 11 個不同的符號。
                        如果相同的符號位於已選擇的同一條支付線上，玩家將獲勝。
                    </p>
                    <div className={Styles["list-symbol-wrapper"]}>
                        <img src={`/static/images/fortune-cat/list_icon.png#v6`} alt="guide_item_symbol_bg" />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>

                {renderPayouts(odds)}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default FortuneCatGuideTW;
