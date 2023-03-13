import React from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { renderPayoutsTable } from "../vi";
import { locales } from "../../../../common/constants";
import Styles from "../fruit-slot.module.scss";

const renderLuckySymbol = () => {
    return (
        <li className="guide-item">
            <h2>Lucky Symbols</h2>
            <ul className="desc">
                <li>
                    When the lucky symbol appears, the system sequentially and randomly generates{" "}
                    <span className={Styles["text-highlight"]}>2</span> or <span className={Styles["text-highlight"]}>3</span> more results;
                    except lucky symbols, and the extra generated results are not overlapped.
                </li>
                <li>The extra generated results are used to calculate the game result.</li>
                <li>Big/Small results will not be regenerated in the lucky spin.</li>
                <li>
                    <strong>Example: </strong>If the spin result is the lucky symbol{" "}
                    <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_lucky.png" alt="item_lucky"></img>, the
                    system sequentially generates two additional results.
                    <p>
                        The first additional symbol:
                        <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_lemon.png" alt="item_lemon"></img>
                    </p>
                    <p>
                        The second additional symbol:
                        <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_star.png" alt="item_star"></img>
                    </p>
                    <p>Lemon and Star symbols will be used to calculate the game result.</p>
                </li>
            </ul>
        </li>
    );
};

const FruitSlotGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is the traditional fruit slot machine innovated to provide players with an attractive and thrilling
                        gameplay experience.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>
                            Select the chip value you wish to play. All bets must be placed before the betting time expires.
                            <div>
                                <span className={Styles["text-highlight"]}>Please note that</span> the placed bets cannot be canceled.
                            </div>
                        </li>
                        <li>
                            The maximum total stake per round is{" "}
                            <span className={Styles["text-highlight"]}>{maxBetFollowChoice?.maxBetMain}</span>.
                        </li>
                        <li>
                            The player can place bets on any available options; except for the Big and Small, the player either bet on one
                            of these two bet options.
                        </li>
                        <li>
                            Once the betting time has expired, the system will randomly generate the game results.
                            <div style={{ marginLeft: "2rem" }}>
                                <img
                                    className={Styles["symbol-mini"]}
                                    src="./static/images/fruit-slot/gameguide_bullet.png"
                                    alt="item_star"
                                ></img>{" "}
                                Big/Small result: the system randomly generates a number in a range from 1 to 14.
                                <div style={{ marginLeft: "5rem" }}>✦ Big: from 8 to 14</div>
                                <div style={{ marginLeft: "5rem" }}>✦ Small: from 1 to 7</div>
                            </div>
                            <div style={{ marginLeft: "2rem" }}>
                                <img
                                    className={Styles["symbol-mini"]}
                                    src="./static/images/fruit-slot/gameguide_bullet.png"
                                    alt="item_star"
                                ></img>{" "}
                                Symbol results: the system randomly generates a symbol shown on the table.
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>
                            The winning amount is calculated according to the betting odds.
                            <div>
                                <span className={Styles["text-highlight"]}>Please note that</span> the payouts include the initial stake.
                            </div>
                        </li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                        <li>Betting odds table:</li>
                        {renderPayoutsTable(odds, locales.en)}
                    </ul>
                </li>
                {renderLuckySymbol()}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default FruitSlotGuideEN;
