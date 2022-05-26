import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../treasure-island.module.scss";
import { GameConfigProps } from "../type";
import { renderIconContent, renderIconContentBlack, renderPayoutsIconFirstLine, renderPayoutsIconSecondLine } from "../vi";

const renderGameRule = () => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Symbols pay anywhere on the screen. </li>
                <li>The total number of the same symbols on the screen at the end of a spin determines the value of the win.</li>
                <li>The Player selects or adjusts the bet amount that suits you the best before pressing the “Spin” button.
                    <div><strong>Total bet</strong> = Bet Level * Coin Value * Bet Multiplier</div>
                </li>
                <li>Bet Multiplier is “value”.</li>
                <li>Instead of pressing the “Spin” button, the players can use the Space and Enter key on the keyboard to start the spin.</li>
                <li>The Win-loss of each combination will be calculated based on the base bet.
                    <div><strong>Base bet</strong> = Bet level * Coin Value</div>
                </li>
                <li>Bet Limit: “Min Value” - “Max Value”.</li>
            </ul>
        </>
    );
};

const renderTumbling = () => {
    return(
        <>
            <h2>Tumbling Feature</h2>
            <ul className="desc">
                <li>After every spin, the winning combinations get paid, and all of the winning symbols will be removed from the reels, allowing new symbols to drop into the empty position.</li>
                <li>The tumbling will continue until no more winning combinations appear as a result of a tumble.</li>
                <li>There is no limit to the number of possible tumbles.</li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
       <>
        <h2>Payouts</h2>
        <ul className="desc">
            <li>The payouts table will be updated according to the value of the base bet that you have selected.</li>
            <li>All winning amounts are instantly added to your account balance when all of the tumbles resulting from a base spin have been played.</li>
            <li>When winning with Multiplier symbols, the value of all multiplier symbols on the screen are added together at the end of the tumbling sequence. And the total win of a game round is equal to the total multiplier value multiplies the total win of tumbles.</li>
            <li>The maximum win amount is limited to “value”. If the total win of a round reaches the max win value, the game round immediately ends, the win is awarded up to the limitation and all remaining features are forfeited.</li>
        </ul>
        {renderPayoutsIconFirstLine(odds, locales.vi)}
        {renderPayoutsIconSecondLine(odds, locales.vi)}
        {renderExamplePayouts(odds)}
       </>
    );
};

const renderExamplePayouts = (odds: number[][]) => {
    return (
        <>
            <p>
                <strong> Example:</strong> Your base bet value is “n”
            </p>
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
                                {renderIconContent(true, "item8", true, true, [
                                    [0, odds[1][5]],
                                    [1, odds[1][4]],
                                    [2, odds[1][3]],
                                ])}
                            </td>
                            <td>
                                Having 8-9 symbols{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />
                                appear on the result board.<br></br>Payout = Win value
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 10-11 symbols {" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> appear on the result board.{" "}
                                <br></br>Payout = Win value * {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 12-30 symbols{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> appear on the result board.{" "}
                                <br></br>Payout = Win value * {odds[1][3]}
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
        <h2>Multipliers</h2>
        <div className={Styles["center"]}><img src={`/static/images/treasure-island/multiplier.jpg#v3`} alt="multiplier" width={486} height={101} /></div>
        <ul className="desc">
            <li>The Multiplier symbols are present on all reels and can hit randomly during spins, and tumbles in both base game and free spins.</li>
            <li>Whenever a Multiplier symbol hits, it takes a random multiplier value from <strong>Min</strong> to <strong>Max</strong>.</li>
        </ul>
        </>
    );
};

const renderFreeSpins = (odds: number[][]) => {
    return(
        <>
            <h2>Free Spins Feature</h2>
            <ul className="desc">
                <li>The Free Spins feature is awarded when 4 or more SCATTER symbols appear anywhere on the screen.</li>
                <li>For the whole duration of Free Spins rounds, whenever any new Multiplier symbols appear and the spinning result in a win, the Multiplier value is added to the total multiplier.</li>
                <li>Whenever <i>“count”</i> or more SCATTER symbols appear during the Free Spins round, <i>“n”</i> additional free spins are awarded.</li>
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
                                    "scatter",
                                    [
                                        [4, odds[7][5]],
                                        [5, odds[7][4]],
                                        [6, odds[7][3]],
                                    ],
                                    " FREE SPINS"
                                )}
                            </td>
                            <td>
                                Having 4 Free Spin symbols in the result.<br></br> Get “n” Free Spins Bonus.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 5 Free Spin symbols in the result.<br></br>Get “n” Free Spins Bonus.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having 6 Free Spin symbols in the result.<br></br>Get “n” Free Spins Bonus.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const TreasureIslandGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an online cascading slot game that has become extremely popular with the online gamer as it offers
                        multiple chances to win when compared to the older-style slot machines. The game consists of six reels, five rows,
                        and ten different symbols.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img src={`/static/images/treasure-island/list_icon.png#v3`} alt="guide_item_symbol_bg" width={426} height={443} />
                    </div>
                </li>
                <li className="guide-item">{renderTumbling()}</li>
                <li className="guide-item">{renderGameRule()}</li>

                <li className="guide-item">{renderPayouts(odds)}</li>
                <li className="guide-item">{renderMultipliers()}</li>
                <li className="guide-item">{renderFreeSpins(odds)}</li>
                {renderTermsAndConditionsEN(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default TreasureIslandGuideEN;
