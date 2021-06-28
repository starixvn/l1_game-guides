import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";
import { Market } from "../../../../common/constants";

const wrapperImg = "wrapper-img";
const imgRectangle = "img-rectangle";
const wrapperIcon = "wrapper-icon";
const wrapperIconDark = "wrapper-icon-dark";
const tableSmall = "table-small";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconContent = "icon-content";
const iconBox = "icon-box";
const contentTop = "content-top";
const freeSpinContentEX = "free-spin-content-ex";

const renderGameRule = () => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>
                    The Player selects the Paylines (Lines) and sets the Bet Level you want to place bet before pressing "Spin".
                    <div className="text-center">
                        <strong>Total Bet</strong> = Paylines * Bet Level
                    </div>
                </li>

                <li> 25 Paylines are numbered from 1 to 25 and the Player must choose at least one Payline before starting the game.</li>
                <li>The Win-loss on each Payline will be calculated based on the number of the same symbols located on that Payline.</li>
                <div className={Styles[wrapperImg]}>
                    <img className={Styles[imgRectangle]} src="./static/images/four-guardians/guide_payline.png" alt="guide_payline"></img>
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (market: string) => {
    return (
        <li className="guide-item">
            <h2>Paytable</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio.</li>
                <li>
                    <strong>Note, </strong>the Payout includes the initial stake.
                </li>
            </ul>
            <div className={Styles["icon-container"]}>
                {market === Market.SC1 ? (
                    <span className={Styles[wrapperIcon]}>
                        <img
                            className={`${Styles[iconBox]}`}
                            src="/static/images/four-guardians/guide_item_symbol_bg.png"
                            alt="guide_item_symbol_bg"
                        ></img>
                        <img
                            className={`${Styles["item10"]} ${Styles["customize"]}`}
                            src="./static/images/four-guardians/sc1/item10.png"
                            alt="item10"
                        ></img>
                        <div className={Styles[iconContent]}>
                            <span className={Styles[numberFirst]}>5</span>
                            <span className={Styles[numberSecond]}>1000</span>
                            <span className={Styles[numberFirst]}>4</span>
                            <span className={Styles[numberSecond]}>75</span>
                            <span className={Styles[numberFirst]}>3</span>
                            <span className={Styles[numberSecond]}>25</span>
                            <span className={Styles[numberFirst]}>2</span>
                            <span className={Styles[numberSecond]}>4</span>
                        </div>
                    </span>
                ) : (
                    <span className={Styles[wrapperIcon]}>
                        <img
                            className={`${Styles[iconBox]}`}
                            src="/static/images/four-guardians/guide_item_symbol_bg.png"
                            alt="guide_item_symbol_bg"
                        ></img>
                        <img
                            className={`${Styles["item10"]} ${Styles["customize"]}`}
                            src="./static/images/four-guardians/item10.png"
                            alt="item10"
                        ></img>
                        <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                            <span className={Styles[numberFirst]}>4</span>
                            <span className={Styles[numberSecond]}>100</span>
                            <span className={Styles[numberFirst]}>3</span>
                            <span className={Styles[numberSecond]}>25</span>
                            <span className={Styles[numberFirst]}>2</span>
                            <span className={Styles[numberSecond]}>4</span>
                        </div>
                    </span>
                )}

                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item6"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item6.png"
                        alt="item6"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>500</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>75</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>20</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item5"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item5.png"
                        alt="item5"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>375</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>60</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>16</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item4"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item4.png"
                        alt="item4"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>275</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>45</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>12</span>
                    </div>
                </span>
            </div>
            <div className={Styles["icon-container"]}>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item3"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item3.png"
                        alt="item3"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>150</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>20</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>10</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item2"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item2.png"
                        alt="item2"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>50</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>25</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>5</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item1"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item1.png"
                        alt="item1"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>25</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>10</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>5</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item0"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item0.png"
                        alt="item0"
                    ></img>
                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>10</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>5</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>2</span>
                    </div>
                </span>
                <span className={Styles[wrapperIcon]}>
                    <img
                        className={`${Styles[iconBox]}`}
                        src="/static/images/four-guardians/guide_item_symbol_bg.png"
                        alt="guide_item_symbol_bg"
                    ></img>
                    <img
                        className={`${Styles["item9"]} ${Styles["customize"]}`}
                        src="./static/images/four-guardians/item9.png"
                        alt="item9"
                    ></img>
                    <div className={Styles[iconContent]}>
                        <span className={Styles[numberFirst]}>5</span>
                        <span className={Styles[numberSecond]}>{market === Market.SC1 ? 8000 : 800}</span>
                        <span className={Styles[numberFirst]}>4</span>
                        <span className={Styles[numberSecond]}>{market === Market.SC1 ? 1000 : 100}</span>
                        <span className={Styles[numberFirst]}>3</span>
                        <span className={Styles[numberSecond]}>50</span>
                        <span className={Styles[numberFirst]}>2</span>
                        <span className={Styles[numberSecond]}>8</span>
                    </div>
                </span>
            </div>
            <p>
                <strong>Example</strong>
            </p>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th> Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                <span className={Styles[wrapperIcon]}>
                                    <img
                                        className={`${Styles[iconBox]}`}
                                        src="/static/images/four-guardians/guide_item_symbol_bg-dark.png"
                                        alt="guide_item_symbol_bg"
                                    ></img>
                                    <img
                                        className={`${Styles["item1"]} ${Styles["customize"]}`}
                                        src="./static/images/four-guardians/item1.png"
                                        alt="item1"
                                    ></img>
                                    <div className={`${Styles[iconContent]} ${Styles[contentTop]} ${Styles["gem"]}`}>
                                        <span className={Styles[numberFirst]}>5</span>
                                        <span className={Styles[numberSecond]}>25</span>
                                        <span className={Styles[numberFirst]}>4</span>
                                        <span className={Styles[numberSecond]}>10</span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>5</span>
                                    </div>
                                </span>
                            </td>
                            <td>
                                Having 5 Gem symbols located on the same payline.
                                <br></br>Payout = Bet Level * 25
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 4 Gem symbols located on the same payline.
                                <br></br>Payout = Bet Level * 10
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 Gem symbols located on the same payline.
                                <br></br>Payout = Bet Level * 5<strong>5</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderJackpot = () => {
    return (
        <li className="guide-item">
            <h2>Jackpot</h2>
            <ul className="desc">
                <li>
                    Jackpot is a grand prize for Players having 5 symbols{" "}
                    <img
                        className={`${Styles["item10"]} ${Styles["mini"]}`}
                        src="./static/images/four-guardians/item10.png"
                        alt="item10"
                    ></img>{" "}
                    located on the same payline. There are 3 Jackpot prizes corresponding with 3 bet levels and all Jackpots are
                    progressive, where every time the game is played, a portion of the bet amount is contributed to the Jackpots until one
                    lucky Player wins the Jackpot.
                </li>
            </ul>

            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th> Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    className={`${Styles["item10"]} ${Styles["sc2"]}`}
                                    src="./static/images/four-guardians/item10.png"
                                    alt="item10"
                                ></img>
                            </td>
                            <td>
                                The Player will win the Jackpot prize if there are 5 symbols located on the same payline that you have
                                chosen.<br></br>
                                <strong>Note: </strong>
                                Player will receive 98% of the Jackpot prize.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderFreeSpin = () => {
    return (
        <li className="guide-item">
            <h2>Free Spin</h2>
            <ul className="desc">
                <li>Players will receive Free Spins Bonus corresponding to the number of Free Spins symbols having in the result.</li>
                <li>The Free Spin symbols do not have to be on the same payline.</li>
            </ul>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                <span className={Styles[wrapperIconDark]}>
                                    <img
                                        className={`${Styles[iconBox]}`}
                                        src="/static/images/four-guardians/guide_item_symbol_bg-dark.png"
                                        alt="guide_item_symbol_bg"
                                    ></img>
                                    <img
                                        className={`${Styles["item7"]} ${Styles["dark"]}`}
                                        src="./static/images/four-guardians/item7.png"
                                        alt="item7"
                                    ></img>
                                    <div className={`${Styles[iconContent]} ${Styles["free-spin"]}`}>
                                        <span className={Styles[numberFirst]}>5</span>
                                        <span className={Styles[numberSecond]}>
                                            10 <span className="text-white">FREE SPIN</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>4</span>
                                        <span className={Styles[numberSecond]}>
                                            10 <span className="text-white">FREE SPIN</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>
                                            10 <span className="text-white">FREE SPIN</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>10</span>
                                    </div>
                                </span>
                            </td>
                            <td>
                                Having 5 Free Spin symbols in the result.<br></br>Get 18 Free Spins Bonus.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 4 Free Spin symbols in the result.<br></br>Get 6 Free Spins Bonus.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 Free Spin symbols in the result.<br></br>Bạn nhận <strong>3</strong>Get 3 Free Spins Bonus.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ul className="desc">
                <li>
                    <strong> Note:</strong> The “Free Spin" symbols must appear in different reels. For example, if there are 3 "Free Spin"
                    symbols on the same reel, the system will count as one symbol.
                    <div className={Styles[freeSpinContentEX]}>
                        <img
                            className={`${Styles["free-spin-ex"]}`}
                            src="/static/images/four-guardians/sc1/guide_example_free_spin.png"
                            alt="guide_item_symbol_bg"
                        ></img>
                        <span>
                            There are 4 "Free spin" symbols in the result, but 3 symbols located on the same reel. The player is not
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

const renderBonus = () => {
    return (
        <li className="guide-item">
            <h2>Bonus</h2>
            <ul className="desc">
                <li>Having 3, 4, or 5 Bonus symbols appearing anywhere in the result will trigger the Bonus Game – Treasure Chest.</li>
                <li>The Bonus symbols do not have to be on the same payline.</li>
            </ul>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th> Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                <span className={Styles[wrapperIconDark]}>
                                    <img
                                        className={`${Styles[iconBox]}`}
                                        src="/static/images/four-guardians/guide_item_symbol_bg-dark.png"
                                        alt="guide_item_symbol_bg"
                                    ></img>
                                    <img
                                        className={`${Styles["item8"]} ${Styles["dark"]}`}
                                        src="./static/images/four-guardians/item8.png"
                                        alt="item8"
                                    ></img>
                                    <div className={`${Styles[iconContent]} ${Styles["free-spin"]}`}>
                                        <span className={Styles[numberFirst]}>5</span>
                                        <span className={Styles[numberSecond]}>
                                            5 <span className="text-white">BONUS</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>4</span>
                                        <span className={Styles[numberSecond]}>
                                            4 <span className="text-white">BONUS</span>
                                        </span>
                                        <span className={Styles[numberFirst]}>3</span>
                                        <span className={Styles[numberSecond]}>
                                            3 <span className="text-white">BONUS</span>
                                        </span>
                                    </div>
                                </span>
                            </td>
                            <td>
                                Having 5 Bonus symbols in the result.<br></br>Can open 5 Treasure Chests in Bonus Game.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 4 Bonus symbols in the result.
                                <br></br> Can open 4 Treasure Chests in Bonus Game.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 3 Bonus symbols in the result.<br></br>Can open 3 Treasure Chests in Bonus Game.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                <strong>Lưu ý: </strong>
            </p>
            <ul className="desc">
                <li>
                    <strong> Note:</strong> The Bonus symbols must appear in different reels. For example, if 2 or 3 Bonus symbols appearing
                    on the same reel, the system will count as one symbol.
                    <div className={Styles[freeSpinContentEX]}>
                        <img
                            className={`${Styles["free-spin-ex"]}`}
                            src="/static/images/four-guardians/sc1/guide_example_bonus.png"
                            alt="guide_example_bonus"
                        ></img>
                        <ul className="desc">
                            <li>
                                There are 4 "Bonus" symbols in the result, but 2 symbols located on the same reel. The player is only
                                eligible for 3 Treasure Chests.
                            </li>
                            <li>
                                Players have to complete the Bonus Game within 120 seconds countdown. After this period, the system will
                                randomly open Chests and settle the game round.
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const renderWild = () => {
    return (
        <li className="guide-item">
            <h2>Wild</h2>
            <div className={Styles[freeSpinContentEX]}>
                <img
                    className={`${Styles["item-wild"]} ${Styles["big"]}`}
                    src="/static/images/four-guardians/guide_example_wild.png"
                    alt="guide_example_wild"
                ></img>
                <ul className="desc">
                    <li>
                        “Wild” symbol can substitute for all symbols except
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
                        and{" "}
                        <img
                            className={`${Styles["item10"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item10.png"
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
                        <img className={`${Styles["item2"]}`} src="./static/images/four-guardians/item2.png" alt="item2"></img>
                        <img className={`${Styles["item2"]}`} src="./static/images/four-guardians/item2.png" alt="item2"></img>
                        <img className={`${Styles["item9"]}`} src="./static/images/four-guardians/item9.png" alt="item9"></img>
                        <img className={`${Styles["item5"]}`} src="./static/images/four-guardians/item5.png" alt="item5"></img>
                        <img className={`${Styles["item5"]}`} src="./static/images/four-guardians/item5.png" alt="item5"></img>
                    </div>
                    <ul className="desc">
                        <li>
                            If Wild symbol is
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item2.png"
                                alt="item2-mini"
                            ></img>
                            {`=>`} Payout = Bet Level * 5
                        </li>
                        <li>
                            If Wild symbol is
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
                                alt="item5-mini"
                            ></img>
                            {`=>`} Payout = Bet Level * 16
                        </li>
                    </ul>
                    <p> Player will get the highest win on this payline {`=>`} Payout = Bet Level * 16</p>
                </div>
            </div>
        </li>
    );
};

const SicBoGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName } = props;
    const market = props?.market ?? Market.SC1;
    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an online slot game, built on the legend story of Four Holy Beasts as Dragon, Qilin, Turtle, and
                        Phoenix. The game includes 5 reels and 3 rows, with 11 different symbols. Players will win if there are the same
                        symbols located on the same payline that you have chosen.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img
                            className={`${Styles["list-icon"]}`}
                            src={`/static/images/four-guardians/${market === Market.SC1 ? "sc1" : "sc2"}/list_icon.png`}
                            alt="guide_item_symbol_bg"
                        ></img>
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                {renderPayouts(market)}
                {market === Market.SC2 && renderJackpot()}
                {renderFreeSpin()}
                {renderBonus()}
                {renderWild()}
                {renderTermsAndConditionsEN()}
            </ul>
        </div>
    );
};
export default SicBoGuideEN;
