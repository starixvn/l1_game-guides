import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsCN } from "../../../shared";
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
            <h2>游戏规则</h2>
            <ul className="desc">
                <li>
                    玩家在按下“旋转”之前选择支付线（线）并设置您要下注的下注级别。
                    <div className="text-center">
                        <strong> 总投注</strong> = 支付线 * 投注水平
                    </div>
                </li>

                <li> 25 条支付线从 1 到 25 编号，玩家必须在开始游戏前至少选择一条支付线。</li>
                <li>默认情况下，所有具有最低投注级别的支付线将在开始时被选中。</li>
                <li>每条支付线上的赢输将根据位于该支付线上的相同符号的数量计算。</li>
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
            <h2>赔率表</h2>
            <ul className="desc">
                <li>中奖金额根据投注赔率计算。</li>
                <li>
                    <strong>注意: </strong> 支付包括初始投注。
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
                            <th>符号</th>
                            <th>描述</th>
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
                                有 5 个符号 <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> 位于同一条支付线上。
                                <br></br>派彩 = 投注等级 * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 4 个符号 <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> 位于同一条支付线上。
                                <br></br>派彩 = 投注等级 * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 3 个符号 <img src="./static/images/fortune-cat/item1_small.png" alt="item1" /> 位于同一条支付线上。
                                <br></br>派彩 = 投注等级 * {odds[1][3]}
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
                    <li>玩家将收到与结果中包含的Free Spin符号数量相对应的免费旋转奖金。</li>
                    <li>Free Spin符号不必位于同一支付线上。</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong>注意：</strong> “Free Spin”符号必须出现在不同的卷轴上。 例如，如果同一卷轴上有 3 个“Free
                    Spin”符号，系统将计为一个符号。
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

                        <span>结果中有 4 个“Free Spin”符号，但 3 个符号位于同一个转轴上。玩家没有资格获得Free Spin奖金。</span>
                    </div>
                </li>
                <li className="clear-both">Free Spin的投注级别和支付线数与上一次旋转（用户获得Free Spin奖金的旋转）相同。</li>
                <li>玩家必须在发放后 24 小时内完成Free Spin奖金。 未使用的Free Spin将丢失。</li>
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
                    <li>结果中的任意位置出现 3、4 或 5 个Bonus符号将触发Bonus游戏。</li>
                    <li>Bonus符号不必位于同一支付线上。</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> 注意：</strong>Bonus符号必须出现在不同的卷轴中。例如，如果 2 或 3 个
                    Bonus符号出现在同一个卷轴上，系统将计为一个符号。
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img src="/static/images/fortune-cat/guide_example_bonus.png#v4" alt="guide_example_bonus" loading="eager" />
                        </div>

                        <span>结果中有 4 个“Bonus”符号，但 2 个符号位于同一个卷轴上。玩家有資格获得 3 件物品。</span>
                    </div>
                </li>
                <li>玩家必须在倒计时 120 秒内完成Bonus游戏。这段时间过后，系统会随机开启物品并结算游戏回合。</li>
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
                        “Wild”符号可以替代除
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item8_small.png" alt="item8"></img>,
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item7_small.png#v2" alt="item7"></img>和
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item10_small.png#v2" alt="item10"></img>
                        之外的所有符号
                    </li>
                    <li>仅支付每条线获得的最高胜利。</li>
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
                            如果Wild符号是
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item2_small.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} 派彩 = 投注等级 * {odds[2][3]}
                        </li>
                        <li>
                            如果Wild符号是
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item5_small.png"
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

const FortuneCatGuideCN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>简介</h2>
                    <p className="content">
                        “招财猫”是一款招财猫在线老虎机游戏——招财猫是吉祥和繁荣的象征。 该游戏包括 5 个卷轴和 3 行，带有 11 个不同的符号。
                        如果相同的符号位于已选择的同一条支付线上，玩家将获胜。
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
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default FortuneCatGuideCN;
