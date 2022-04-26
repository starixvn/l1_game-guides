import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../nightclub.module.scss";
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
                    <div>
                        <strong>Note:</strong> Player can use the “Spacebar” key on PC, instead of the “Spin” button to have a new
                        experience.
                    </div>
                </li>

                <li> 25 Paylines are numbered from 1 to 25 and the Player must choose at least one Payline before starting the game.</li>
                <li>The Win-loss on each Payline will be calculated based on the number of the same symbols located on that Payline.</li>
                <div className={Styles["wrapper-img-rectangle"]}>
                    <img src={`/static/images/nightclub/guide_payline.png`} alt="guide_payline" width={834} height={159} loading="eager" />
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
    const pathSrc = itemName === "item10" ? "./static/images/nightclub/" : "./static/images/nightclub/";
    return (
        <span className={Styles["wrapper-icon"]}>
            <img
                src={`/static/images/nightclub/guide_item_symbol_bg.png?v1`}
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
                src="/static/images/nightclub/guide_item_symbol_bg.png#v2"
                width={269}
                height={132}
                alt="guide_item_symbol_bg"
                loading="eager"
            />

            <img className={`${Styles[itemName]} ${Styles["dark"]}`} src={`./static/images/nightclub/${itemName}.png`} alt={itemName}></img>
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
                                {renderIconContent(true, "item1", true, true, [
                                    [5, odds[1][5]],
                                    [4, odds[1][4]],
                                    [3, odds[1][3]],
                                ])}
                            </td>
                            <td>
                                Having 5 symbols <img src="./static/images/nightclub/item1.png" width={50} height={50} alt="item1" />{" "}
                                located on the same payline
                                <br></br>Payout = Bet Level * {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 4 symbols <img src="./static/images/nightclub/item1.png" width={50} height={50} alt="item1" />{" "}
                                located on the same payline
                                <br></br>Payout = Bet Level * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 symbols <img src="./static/images/nightclub/item1.png" width={50} height={50} alt="item1" />{" "}
                                located on the same payline
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
            <ul className="desc">
                <li>Players will receive Free Spins Bonus corresponding to the number of Free Spins symbols having in the result.</li>
                <li>The Free Spin symbols do not have to be on the same payline.</li>
            </ul>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                {renderIconContentBlack(
                                    "item7",
                                    [
                                        [5, odds[7][5]],
                                        [4, odds[7][4]],
                                        [3, odds[7][3]],
                                    ],
                                    " FREE SPINS"
                                )}
                            </td>
                            <td>
                                Having 5 Free Spin symbols in the result.<br></br>Get {odds[7][5]} Free Spins Bonus.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 4 Free Spin symbols in the result.<br></br>Get {odds[7][4]} Free Spins Bonus.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 Free Spin symbols in the result.<br></br>Get {odds[7][3]} Free Spins Bonus.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ul className="desc">
                <li>
                    <strong> Note:</strong> The “Free Spin” symbols must appear in different reels. For example, if there are 3{" "}
                    {`“Free Spin”`} symbols on the same reel, the system will count as one symbol.
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/nightclub/guide_example_freespin.png#v2"
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
            <ul className="desc">
                <li>Having 3, 4, or 5 Bonus symbols appearing anywhere in the result will trigger the Bonus Game – Treasure Chest.</li>
                <li>The Bonus symbols do not have to be on the same payline.</li>
            </ul>
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
                                {renderIconContentBlack(
                                    "item8",
                                    [
                                        [5, odds[8][5]],
                                        [4, odds[8][4]],
                                        [3, odds[8][3]],
                                    ],
                                    " BONUS"
                                )}
                            </td>
                            <td>
                                Having 5 Bonus symbols in the result.<br></br>Can open {odds[8][5]} items in Bonus Game.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 4 Bonus symbols in the result.
                                <br></br> Can open {odds[8][4]} items in Bonus Game.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 Bonus symbols in the result.<br></br>Can open {odds[8][3]} items in Bonus Game.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ul className="desc">
                <li>
                    <strong> Note:</strong> The Bonus symbols must appear in different reels. For example, if 2 or 3 Bonus symbols appearing
                    on the same reel, the system will count as one symbol.
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src="/static/images/nightclub/guide_example_bonus.png#v3"
                                alt="guide_example_bonus"
                                width={265}
                                height={125}
                                loading="eager"
                            />
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
                    <img
                        src="/static/images/nightclub/guide_example_wild.png#v3"
                        alt="guide_example_wild"
                        width={117}
                        height={54}
                        loading="eager"
                    />
                </span>

                <ul className="desc">
                    <li>
                        “Wild” symbol can substitute for all symbols except
                        <img className={`${Styles["item8"]} ${Styles["mini"]}`} src="./static/images/nightclub/item8.png" alt="item8"></img>
                        ,
                        <img
                            className={`${Styles["item7"]} ${Styles["mini"]}`}
                            src="./static/images/nightclub/item7.png#v2"
                            alt="item7"
                        ></img>
                        and
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src="./static/images/nightclub/item10.png"
                            alt="item10"
                        ></img>
                    </li>
                    <li>Only the highest achieved win per line is paid out.</li>
                </ul>
            </div>
            <div>
                <strong>Example</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/nightclub/item2.png" alt="item2" width={100} height={100} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/nightclub/item2.png" alt="item2" width={100} height={100} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/nightclub/item9.png?v1" alt="item9" width={100} height={100} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/nightclub/item5.png" alt="item5" width={100} height={100} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/nightclub/item5.png" alt="item5" width={100} height={100} loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            If Wild symbol is
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/nightclub/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} Payout = Bet Level * {odds[2][3]}
                        </li>
                        <li>
                            If Wild symbol is
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/nightclub/item5.png"
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

const NightClubGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        “{gameName}” is an online slot game, with attractive gameplay, and gripping graphics. The game includes 5 reels and
                        3 rows, with 11 different symbols. Players will win if there are the same symbols located on the same payline that
                        you have chosen.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img src={`/static/images/nightclub/list_icon.png#v3`} alt="guide_item_symbol_bg" width={412} height={374} />
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
export default NightClubGuideEN;
