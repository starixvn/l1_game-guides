import React from "react";
import { renderTermsAndConditionsCN, renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../way-to-goal.module.scss";
import { locales } from "../../../../common/constants";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = () => {
    return (
        <>
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>
                    玩家在按下“旋转”之前选择支付线（线）并设置您要下注的下注级别。
                    <div className="text-center">
                        <strong>总投注</strong> = 支付线 * 投注水平
                    </div>
                </li>

                <li>25 条支付线从 1 到 25 编号，玩家必须在开始游戏前至少选择一条支付线。</li>
                <li>每条支付线上的赢输将根据位于该支付线上的相同符号的数量计算。</li>
                <div className={Styles["wrapper-img-rectangle"]}>
                    <img
                        src={`/static/images/way-to-goal/guide_payline.png`}
                        alt="guide_payline"
                        width={834}
                        height={159}
                        loading="eager"
                    />
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>赔率表</h2>
            <ul className="desc">
                <li>中奖金额根据投注赔率计算。</li>
                <li>
                    <strong>请注意:</strong> 支付包括初始投注。
                </li>
                <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
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
    const pathSrc = itemName === "item10" ? "./static/images/way-to-goal/" : "./static/images/way-to-goal/";
    return (
        <span className={Styles["wrapper-icon"]}>
            <img
                src={`/static/images/way-to-goal/guide_item_symbol_bg.png?v1`}
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
        </span>
    );
};

export const renderPayoutsIconFirstLine = (odds: number[][], locale = "en") => {
    return (
        <>
            <div className={Styles["icon-container"]}>
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

export const renderIconContentBlack = (itemName: string, dataContent: number[][], textAfterNumber: string) => {
    return (
        <span className={Styles["wrapper-icon-dark"]}>
            <img
                className={`${Styles[iconBox]}`}
                src="/static/images/way-to-goal/guide_item_symbol_bg.png#v2"
                width={269}
                height={132}
                alt="guide_item_symbol_bg"
                loading="eager"
            />

            <img
                className={`${Styles[itemName]} ${Styles["dark"]}`}
                src={`./static/images/way-to-goal/${itemName}.png`}
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
                            <th>符号</th>
                            <th>描述</th>
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
                                有 5 个符号 <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                位于同一条支付线上。
                                <br></br>
                                派彩 = 投注等级 * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 4 个符号 <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                位于同一条支付线上。
                                <br></br>
                                派彩 = 投注等级 * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 3 个符号 <img src="./static/images/way-to-goal/item1.png" width={50} height={50} alt="item1" />{" "}
                                位于同一条支付线上。
                                <br></br>
                                派彩 = 投注等级 * {odds[1][3]}
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
            <h2>免费旋转</h2>
            <div className={Styles["free-spin-container"]}>
                {renderIconContentBlack(
                    "item7",
                    [
                        [5, odds[7][5]],
                        [4, odds[7][4]],
                        [3, odds[7][3]],
                    ],
                    " 免费旋转"
                )}
                <ul className="desc">
                    <li>玩家将收到与结果中包含的免费旋转符号数量相对应的免费旋转奖金。</li>
                    <li>免费旋转符号不必位于同一支付线上。</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> 注意:</strong>“免费旋转”符号必须出现在不同的卷轴上。 例如，如果同一卷轴上有 3
                    个“免费旋转”符号，系统将计为一个符号。
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/way-to-goal/guide_example_freespin.png#v2"
                                alt="guide_item_symbol_bg"
                                width={265}
                                height={125}
                                loading="eager"
                            />
                        </div>

                        <span>结果中有 4 个“免费旋转”符号，但 3 个符号位于同一个转轴上。 玩家没有资格获得免费旋转奖金。</span>
                    </div>
                </li>
                <li className="clear-both">免费旋转的投注级别和支付线数与上一次旋转（用户获得免费旋转奖金的旋转）相同。</li>
                <li>玩家必须在发放后 24 小时内完成免费旋转奖金。 未使用的免费旋转将丢失。</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>奖金</h2>
            <div className={Styles["bonus-container"]}>
                {renderIconContentBlack(
                    "item8",
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    " 奖金"
                )}
                <ul className="desc">
                    <li>结果中的任意位置出现 3、4 或 5 个红利符号将触发红利游戏。</li>
                    <li>奖金符号不必位于同一支付线上。</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> 注意:</strong> 奖金符号必须出现在不同的卷轴中。 例如，如果 2 或 3 个
                    奖金符号出现在同一个卷轴上，系统将计为一个符号。
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/way-to-goal/guide_example_bonus.png#v4"
                                alt="guide_example_bonus"
                                width={265}
                                height={125}
                                loading="eager"
                            />
                        </div>

                        <span>结果中有 4 个“奖金”符号，但 2 个符号位于同一个卷轴上。 玩家有資格获得 3 件物品。</span>
                    </div>
                </li>
                <li>
                    {" "}
                    玩家必须在倒计时 120 秒内完成奖金游戏。 After this period, the system will randomly open items and settle the game
                    round.
                </li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][]) => {
    const wrapperWildImg = "wrapper-wild-img";
    return (
        <li className="guide-item">
            <h2>狂野</h2>
            <div className={Styles["wild-content-ex"]}>
                <span className={Styles["wrapper-wild"]}>
                    <img
                        src="/static/images/way-to-goal/guide_example_wild.png#v3"
                        alt="guide_example_wild"
                        width={110}
                        height={99}
                        loading="eager"
                    />
                </span>

                <ul className="desc">
                    <li>
                        “狂野”符号可以替代除
                        <img
                            className={`${Styles["item8"]} ${Styles["mini"]}`}
                            src="./static/images/way-to-goal/item8.png"
                            alt="item8"
                        ></img>
                        ,
                        <img
                            className={`${Styles["item7"]} ${Styles["mini"]}`}
                            src="./static/images/way-to-goal/item7.png#v2"
                            alt="item7"
                        ></img>
                        和
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src="./static/images/way-to-goal/item10.png"
                            alt="item10"
                        ></img>{" "}
                        之外的所有符号
                    </li>
                    <li>仅支付每条线获得的最高胜利。</li>
                </ul>
            </div>
            <div>
                <strong>Example</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item2.png" alt="item2" width={88} height={80} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item2.png" alt="item2" width={88} height={80} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item9.png?v1" alt="item9" width={70} height={64} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item5.png" alt="item5" width={88} height={80} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/way-to-goal/item5.png" alt="item5" width={88} height={80} loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            如果狂野符号是
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/way-to-goal/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} 派彩 = 投注等级 * {odds[2][3]}
                        </li>
                        <li>
                            如果狂野符号是
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/way-to-goal/item5.png"
                                alt="item5-mini"
                            ></img>
                            {`=>`} 派彩 = 投注等级 * {odds[5][3]}
                        </li>
                    </ul>
                    <p>
                        玩家将在这条支付线上获得最高胜利 {`=>`} 派彩 = 投注等级 * {Math.max(odds[2][3], odds[5][3])}
                    </p>
                </div>
            </div>
        </li>
    );
};

const WayToGoalGuideCN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        “{gameName}” is a football-themed slot game, with attractive gameplay, and gripping graphics. The game includes 5
                        reels and 3 rows, with 11 different symbols. Players will win if the same symbols are located on the same payline
                        that you have chosen.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img src={`/static/images/way-to-goal/list_icon.png#v3`} alt="guide_item_symbol_bg" width={551} height={280} />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>

                {renderPayouts(odds)}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                {renderTermsAndConditionsCN(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default WayToGoalGuideCN;
