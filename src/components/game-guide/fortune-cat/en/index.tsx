import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../fortune-cat.module.scss";
import { locales } from "../../../../common/constants";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";
const renderGameRule = () => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    The Player selects the Paylines (Lines) and sets the Bet Level you want to place bet before pressing {`“Spin”`}.
                    <div className="text-center">
                        <strong>Total Bet</strong> = Paylines * Bet Level
                    </div>
                </li>

                <li> 25 Paylines are numbered from 1 to 25 and the Player must choose at least one Payline before starting the game.</li>
                <li>The Win-loss on each Payline will be calculated based on the number of the same symbols located on that Payline.</li>
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
            <h2>Paytable</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio.</li>
                <li>
                    <strong>Note, </strong>the Payout includes the initial stake.
                </li>
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
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
                <img src={`${pathSrc}${itemName}.png?v2`} alt={itemName}></img>
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
                <strong>Example</strong>
            </p>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th> Description</th>
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
                                Having 5 symbols <img src="./static/images/fortune-cat/item1-small.png" alt="item1" /> located on the same
                                payline
                                <br></br>Payout = Bet Level * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 4 symbols <img src="./static/images/fortune-cat/item1-small.png" alt="item1" /> located on the same
                                payline
                                <br></br>Payout = Bet Level * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 symbols <img src="./static/images/fortune-cat/item1-small.png" alt="item1" /> located on the same
                                payline
                                <br></br>Payout = Bet Level * {odds[1][3]}
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
                    <li>Players will receive Free Spins Bonus corresponding to the number of Free Spins symbols having in the result.</li>
                    <li>The Free Spin symbols do not have to be on the same payline.</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> Note:</strong> The “Free Spin” symbols must appear in different reels. For example, if there are 3{" "}
                    {`“Free Spin”`} symbols on the same reel, the system will count as one symbol.
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/fortune-cat/guide_example_freespin.png#v2"
                                alt="guide_item_symbol_bg"
                                width={265}
                                height={125}
                                loading="eager"
                            />
                        </div>

                        <span>
                            There are 4 {`“Free Spin”`} symbols in the result, but 3 symbols are located on the same reel. The player is not
                            eligible for the Free spins bonus.
                        </span>
                    </div>
                </li>
                <li className="clear-both">
                    Free Spins are played at the same Bet Level and same number of paylines as the last spin (the spin on which the User
                    gets the Free Spins Bonus).
                </li>
                <li>The Player must complete Free Spins Bonus within 24hrs after being issued. Unused Free Spins will be lost.</li>
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
                    <li>Having 3, 4, or 5 Bonus symbols appearing anywhere in the result will trigger the Bonus Game.</li>
                    <li>The Bonus symbols do not have to be on the same payline.</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong> Note:</strong> The Bonus symbols must appear in different reels. For example, if 2 or 3 Bonus symbols appearing
                    on the same reel, the system will count as one symbol.
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img src="/static/images/fortune-cat/guide_example_bonus.png#v4" alt="guide_example_bonus" loading="eager" />
                        </div>

                        <span>
                            There are 4 {`“Bonus”`} symbols in the result, but 2 symbols are located on the same reel. The player is only
                            eligible for 3 items.
                        </span>
                    </div>
                </li>
                <li>
                    {" "}
                    Players have to complete the Bonus Game within 120 seconds countdown. After this period, the system will randomly open
                    items and settle the game round.
                </li>
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
                        “Wild” symbol can substitute for all symbols except
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item8-small.png" alt="item8"></img>,
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item7-small.png#v2" alt="item7"></img>
                        and
                        <img className={Styles["symbol-small"]} src="./static/images/fortune-cat/item10-small.png" alt="item10"></img>
                    </li>
                    <li>Only the highest achieved win per line is paid out.</li>
                </ul>
            </div>
            <div>
                <strong>Example</strong>
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
                            If Wild symbol is
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item2-small.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} Payout = Bet Level * {odds[2][3]}
                        </li>
                        <li>
                            If Wild symbol is
                            <img
                                className={Styles["symbol-small"]}
                                src="./static/images/fortune-cat/item5-small.png"
                                alt="item5-mini"
                            ></img>
                            {`=>`} Payout = Bet Level * {odds[5][3]}
                        </li>
                    </ul>
                    <p>
                        Player will get the highest win on this payline {`=>`} Payout = Bet Level * {Math.max(odds[2][3], odds[5][3])}
                    </p>
                </div>
            </div>
        </li>
    );
};

const FortuneCatGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        “{gameName}” is an online slot game with the waving lucky cat - a symbol of good fortune and prosperity. The game
                        includes 5 reels and 3 rows, with 11 different symbols. Players will win if the same symbols are located on the same
                        payline that you have chosen.
                    </p>
                    <div className={Styles["list-symbol-wrapper"]}>
                        <img src={`/static/images/fortune-cat/list_icon.png#v3`} alt="guide_item_symbol_bg" />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>

                {renderPayouts(odds)}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                {renderTermsAndConditionsEN(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default FortuneCatGuideEN;
