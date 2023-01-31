import React from "react";

import { renderTermsAndConditionsCN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";
import { PROJECTS } from "../../../../common/constants";
import { renderGameRuleContent } from "../../../shared/slot-games/zh_cn";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = (project: string | undefined) => {
    return (
        <>
            <h2>游戏规则</h2>
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
            <h2>赔率表</h2>
            <ul className="desc">
                <li>中奖金额根据派彩率计算。</li>
                <li>
                    <strong>请注意:</strong>支付包括初始投注。
                </li>
                <li>投注结算后，所有中奖金额都会立即添加到您的账户余额中。</li>
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
                            <th>符号</th>
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
                                有 5 个符号 {item1} 位于同一条支付线上。
                                <br></br>派彩 = 投注等级 * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 4 个符号 {item1} 位于同一条支付线上。
                                <br></br>派彩 = 投注等级 * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                有 3 个符号 {item1} 位于同一条支付线上。
                                <br></br>派彩 = 投注等级 * {odds[1][3]}
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
            <h2>大奖</h2>
            <ul className="desc">
                <li>
                    对于在同一条支付线上有 5 个符号 {iconJackpot} 的玩家，头奖是一项大奖。 有 3 个累积奖金奖品对应 3
                    个投注级别，所有累积奖金都是累进的，每次玩游戏时，部分投注金额会被贡献到累积奖金中，直到一位幸运玩家赢得累积奖金。
                </li>
            </ul>

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
                            <td>
                                <img
                                    className={`${Styles["item10"]} ${Styles["en"]}`}
                                    src="./static/images/four-guardians/L2/en/item10.png"
                                    alt="item10"
                                ></img>
                            </td>
                            <td>
                                如果已选择的同一条支付线上有 5 个符号，则玩家将赢得头奖。<br></br>
                                <strong>注: </strong>
                                玩家将获得 98% 的头奖奖金。
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
            <h2>免费旋转</h2>
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
                                <li>玩家将收到与结果中包含的免费旋转符号数量相对应的免费旋转奖金。</li>
                                <li>免费旋转符号不必位于同一支付线上。</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className="desc">
                <li>
                    <strong>注意：</strong>“免费旋转”符号必须出现在不同的卷轴上。 例如，如果同一卷轴上有 3
                    个“免费旋转”符号，系统将计为一个符号。
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

                        <span>结果中有 4 个“免费旋转”符号，但 3 个符号位于同一个转轴上。 玩家没有资格获得免费旋转奖金。</span>
                    </div>
                </li>
                <li className="clear-both">免费旋转的投注级别和支付线数与上一次旋转（用户获得免费旋转奖金的旋转）相同。</li>
                <li>玩家必须在发放后 24 小时内完成免费旋转奖金。 未使用的免费旋转将丢失。</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][], project: string | undefined) => {
    return (
        <li className="guide-item">
            <h2>奖金</h2>
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
                                " 奖金"
                            )}
                        </td>
                        <td>
                            <ul className="desc">
                                <li>结果中的任意位置出现 3、4 或 5 个红利符号将触发红利游戏。</li>
                                <li>奖金符号不必位于同一支付线上。</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ul className="desc">
                <li>
                    <strong>注意：</strong> 奖金符号必须出现在不同的卷轴中。 例如，如果 2 或 3 个
                    奖金符号出现在同一个卷轴上，系统将计为一个符号。
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

                        <span>结果中有 4 “Bonus” 个“奖金”符号，但 2 个符号位于同一个卷轴上。玩家有資格获得 3 件物品。</span>
                    </div>
                </li>
                <li> 玩家必须在倒计时 120 秒内完成奖金游戏。 这段时间过后，系统会随机开启宝箱并结算游戏回合。</li>
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
                        “狂野”符号可以替代除
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
                        ></img>{" "}
                        之外的所有符号
                    </li>
                    <li>仅支付每条线获得的最高胜利。</li>
                </ul>
            </div>
            <div>
                <strong>ตัวอย่าง</strong>
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
                            如果狂野符号是
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} 派彩 = 投注等级 * {odds[2][3]}
                        </li>
                        <li>
                            如果狂野符号是
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
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

const FourGuardiansGuideCN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs, project } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        《{gameName}》是一款在线老虎机游戏，以龙、麒麟、龟、凤凰四圣兽的传说为蓝本。 游戏包括 5 个卷轴和 3 行，有 11
                        个不同的符号。 如果您选择的同一条支付线上有相同的符号，玩家将获胜。
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
                {renderTermsAndConditionsCN()}
            </ul>
        </>
    );
};
export default FourGuardiansGuideCN;
