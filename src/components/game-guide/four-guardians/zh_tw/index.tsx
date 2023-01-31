import React from "react";

import { renderTermsAndConditionsTW } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";
import { PROJECTS } from "../../../../common/constants";
import { renderGameRuleContent } from "../../../shared/slot-games/zh_tw";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = (project: string | undefined) => {
    return (
        <>
            <h2>遊戲規則</h2>
            <ul className="desc">
                {renderGameRuleContent(project)}
                <div className={Styles["wrapper-img-rectangle"]}>
                    <img
                        src={`/static/images/four-guardians/guide_payline.png`}
                        alt="guide_payline"
                        width={844}
                        height={165}
                        loading="eager"
                    />
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>賠率表</h2>
            <ul className="desc">
                <li>中獎金額根據派彩率計算。</li>
                <li>
                    <strong>請注意: </strong>支付包括初始投注。
                </li>
                <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
            </ul>
            {renderPayoutsIconFirstLine(odds, project, "en")}
            {renderPayoutsIconSecondLine(odds, project)}
            {renderExamplePayout(odds, project)}
        </li>
    );
};

export const renderIconContent = (
    isBgBlack = false,
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: number[][],
    project: string | undefined,
    locale?: string
) => {
    const pathSrc =
        itemName === "item10"
            ? `./static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/${locale}` : project}/`
            : "./static/images/four-guardians/";
    return (
        <span className={Styles["wrapper-icon"]}>
            <img
                src={`/static/images/four-guardians/${isBgBlack ? "guide_item_symbol_bg-dark" : "guide_item_symbol_bg"}.png?v1`}
                width={200}
                height={132}
                alt={isBgBlack ? "guide_item_symbol_bg-dark" : "guide_item_symbol_bg"}
                loading="eager"
            />

            <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png`} alt={itemName}></img>
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
        </span>
    );
};

export const renderPayoutsIconFirstLine = (odds: number[][], project: string | undefined, locale?: string) => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item10",
                    false,
                    false,
                    project === PROJECTS.L1
                        ? [
                              [5, odds[10][5]],
                              [4, odds[10][4]],
                              [3, odds[10][3]],
                              [2, odds[10][2]],
                          ]
                        : [
                              [4, odds[10][4]],
                              [3, odds[10][3]],
                              [2, odds[10][2]],
                          ],
                    project,
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
                    project
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
                    project
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
                    project
                )}
            </div>
        </>
    );
};

export const renderPayoutsIconSecondLine = (odds: number[][], project: string | undefined) => {
    return (
        <>
            <div className={Styles["icon-container"]}>
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
                    project
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
                    project
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
                    project
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
                    project
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
                    project
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
                src="/static/images/four-guardians/guide_item_symbol_bg-dark.png?v1"
                width={269}
                height={132}
                alt="guide_item_symbol_bg"
                loading="eager"
            />

            <img
                className={`${Styles[itemName]} ${Styles["dark"]}`}
                src={`./static/images/four-guardians/${itemName}.png`}
                alt={itemName}
            ></img>
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
                                {data[1]} {textAfterNumber && <span className="text-white">{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

const renderExamplePayout = (odds: number[][], project: string | undefined) => {
    const item1 = <img src={`./static/images/four-guardians/item1.png`} width={35} height={35} alt="item1"></img>;
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
                            <th>描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                {renderIconContent(
                                    true,
                                    "item1",
                                    true,
                                    true,
                                    [
                                        [5, odds[1][5]],
                                        [4, odds[1][4]],
                                        [3, odds[1][3]],
                                    ],
                                    project
                                )}
                            </td>
                            <td>
                                有 5 個符號 {item1} 位於同一條支付線上。
                                <br></br>派彩 = 投注等級 * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 4 個符號 {item1} 位於同一條支付線上。
                                <br></br>派彩 = 投注等級 * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 3 個符號 {item1} 位於同一條支付線上。
                                <br></br>派彩 = 投注等級 * {odds[1][3]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderJackpot = () => {
    const iconJackpot = (
        <img className={`${Styles["item10"]} ${Styles["mini"]}`} src="./static/images/four-guardians/L2/en/item10.png" alt="item10"></img>
    );
    return (
        <li className="guide-item">
            <h2>大獎</h2>
            <ul className="desc">
                <li>
                    對於在同一條支付線上有 5 個符號 {iconJackpot} 的玩家，頭獎是一項大獎。 有 3 個累積獎金獎品對應 3
                    個投注級別，所有累積獎金都是累進的，每次玩遊戲時，部分投注金額會被貢獻到累積獎金中，直到一位幸運玩家贏得累積獎金。
                </li>
            </ul>

            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>符號</th>
                            <th>描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    className={`${Styles["item10"]} ${Styles["en"]}`}
                                    src="./static/images/four-guardians/L2/en/item10.png"
                                    alt="item10"
                                ></img>
                            </td>
                            <td>
                                如果已選擇的同一條支付線上有 5 個符號，則玩家將贏得頭獎。<br></br>
                                <strong>注: </strong>
                                玩家將獲得 98% 的頭獎獎金。
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderFreeSpin = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>免費旋轉</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {renderIconContentBlack(
                                "item7",
                                [
                                    [5, odds[7][5]],
                                    [4, odds[7][4]],
                                    [3, odds[7][3]],
                                ],
                                " 免费旋转"
                            )}
                        </td>
                        <td>
                            <ul className="desc">
                                <li>玩家將收到與結果中包含的免費旋轉符號數量相對應的免費旋轉獎金。</li>
                                <li>免費旋轉符號不必位於同一支付線上。</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className="desc">
                <li>
                    <strong>注意：</strong> “免費旋轉”符號必須出現在不同的捲軸上。例如，如果同一捲軸上有 3
                    個“免費旋轉”符號，系統將計為一個符號。
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src={`/static/images/four-guardians/${
                                    project === PROJECTS.L2 ? `${project}/en` : project
                                }/guide_example_free_spin.png?v1`}
                                alt="guide_item_symbol_bg"
                                width={333}
                                height={126}
                                loading="eager"
                            />
                        </div>

                        <span>結果中有 4 個“免費旋轉”符號，但 3 個符號位於同一個轉軸上。 玩家沒有資格獲得免費旋轉獎金。</span>
                    </div>
                </li>
                <li className="clear-both">免費旋轉的投注級別和支付線數與上一次旋轉（用戶獲得免費旋轉獎金的旋轉）相同。</li>
                <li>玩家必須在發放後 24 小時內完成免費旋轉獎金。未使用的免費旋轉將丟失。</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>獎金</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {renderIconContentBlack(
                                "item8",
                                [
                                    [5, odds[8][5]],
                                    [4, odds[8][4]],
                                    [3, odds[8][3]],
                                ],
                                " 獎金"
                            )}
                        </td>
                        <td>
                            <ul className="desc">
                                <li>結果中的任意位置出現 3、4 或 5 個紅利符號將觸發紅利遊戲。</li>
                                <li>獎金符號不必位於同一支付線上。</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className="desc">
                <li>
                    <strong>注意：</strong> 獎金符號必須出現在不同的捲軸中。 例如，如果 2 或 3 個
                    獎金符號出現在同一個捲軸上，系統將計為一個符號。
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src={`/static/images/four-guardians/${
                                    project === PROJECTS.L2 ? `${project}/en` : project
                                }/guide_example_bonus.png?v1`}
                                alt="guide_example_bonus"
                                width={333}
                                height={126}
                                loading="eager"
                            />
                        </div>

                        <span>結果中有 4 “Bonus” 個“獎金”符號，但 2 個符號位於同一個捲軸上。玩家有資格獲得 3 件物品。</span>
                    </div>
                </li>
                <li> 玩家必須在倒計時 120 秒內完成獎金遊戲。這段時間過後，系統會隨機開啟寶箱並結算遊戲回合。</li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][], project: string | undefined) => {
    const wrapperWildImg = "wrapper-wild-img";
    return (
        <li className="guide-item">
            <h2>狂野</h2>
            <div className={Styles["wild-content-ex"]}>
                <span className={Styles["wrapper-wild"]}>
                    <img
                        src="/static/images/four-guardians/guide_example_wild.png"
                        alt="guide_example_wild"
                        width={245}
                        height={160}
                        loading="eager"
                    />
                </span>

                <ul className="desc">
                    <li>
                        “狂野”符號可以替代除
                        <img
                            className={`${Styles["item8"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item8.png"
                            alt="item8"
                        ></img>
                        ,
                        <img
                            className={`${Styles["item7"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item7.png"
                            alt="item7"
                        ></img>
                        和{" "}
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src={`./static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/en` : project}/item10.png`}
                            alt="item10"
                        ></img>
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
                            <img src="/static/images/four-guardians/item2.png" alt="item2" width={77} height={67} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item2.png" alt="item2" width={77} height={67} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item9.png?v1" alt="item9" width={74} height={50} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item5.png" alt="item5" width={85} height={86} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item5.png" alt="item5" width={85} height={86} loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            如果狂野符號是
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} 派彩 = 投注等級 * {odds[2][3]}
                        </li>
                        <li>
                            如果狂野符號是
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
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

const FourGuardiansGuideTW: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs, project } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>簡介</h2>
                    <p className="content">
                        《{gameName}》是一款在線老虎機遊戲，以龍、麒麟、龜、鳳凰四聖獸的傳說為藍本。 遊戲包括 5 個捲軸和 3 行，有 11
                        個不同的符號。 如果您選擇的同一條支付線上有相同的符號，玩家將獲勝。
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img
                            src={`/static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/en` : project}/list_icon.png?v1`}
                            alt="guide_item_symbol_bg"
                        />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(project)}</li>

                {renderPayouts(odds, project)}
                {project === PROJECTS.L2 && renderJackpot()}
                {renderFreeSpin(odds, project)}
                {renderBonus(odds, project)}
                {renderWild(odds, project)}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default FourGuardiansGuideTW;
