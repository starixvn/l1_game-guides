import React from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { formatOdds } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../roulette.module.scss";
import { renderGameRuleImage } from "../shared";

const wrapperImg = "wrapper-img";
const tableSmall = "table-small";
const renderGameRule = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Select the chip value you wish to play. All bets must be completed before the betting time expires. </li>
                <li>Click the “Confirm” button to complete, or X to reset your bets. Note, a confirmed bet cannot be canceled. </li>

                <li>
                    Once the betting time has expired, the wheel will be spun with the ball rolls in the opposite direction of the wheel
                    rotation.
                </li>
                <li>The winning number is determined by the slot where the ball falls into.</li>
                <li>Players can bet on one or more betting options shown on the game table.</li>
                <li>
                    The winning amount is calculated according to the betting odds. <strong>Note,</strong> the Payout includes the initial
                    stake.
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Bet Types</th>
                                    <th>Odds</th>
                                    <th>
                                        Bet Limit <br></br> (Min - Max)
                                    </th>
                                    <th>Max Total Stake Per Round</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Straight Up</td>
                                    <td>{formatOdds(odds?.straightUp, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightUp}
                                    </td>
                                    <td rowSpan={12}>{maxBetFollowChoice?.maxBetMain}</td>
                                </tr>
                                <tr>
                                    <td>Split</td>
                                    <td>{formatOdds(odds?.split, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSplit}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Street</td>
                                    <td rowSpan={2}>{formatOdds(odds?.street, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStreet}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Triangle</td>
                                </tr>
                                <tr>
                                    <td>Corner</td>
                                    <td rowSpan={2}>{formatOdds(odds?.corner, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetCorner}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Four numbers</td>
                                </tr>
                                <tr>
                                    <td>Line</td>
                                    <td>{formatOdds(odds?.line, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetLine}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Column</td>
                                    <td rowSpan={2}>{formatOdds(odds?.dozen, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDozen}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dozen</td>
                                </tr>
                                <tr>
                                    <td>Red/Black</td>
                                    <td rowSpan={3}>{formatOdds(odds?.redBlack, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRedBlack}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Odd/Even</td>
                                </tr>
                                <tr>
                                    <td>Big/Small</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
            </ul>
        </>
    );
};

const renderBetChipsNotice = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    return (
        <div className="table-container">
            <table className={`table text-center ${Styles["table-customize"]}`}>
                <thead>
                    <tr>
                        <th>INSIDE BETS</th>
                        <th>OUTSIDE BETS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/A-X.png" alt="A-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Straight Up: </strong>a bet on a specific number.<br></br>+ Place your chips directly on any
                                    single number (including Zero)
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/H-X.png" alt="H-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Column: </strong>a bet on all twelve numbers (excluding Zero)<br></br>+ Place your chips in one
                                    the areas marked &#34;{formatOdds(odds?.column, fractionalOddsFormat)}&#34; at the end of the columns.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/B-X.png" alt="B-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Split: </strong>a bet on two adjoining numbers, either horizontal or vertical.<br></br>+ Place
                                    your chips on the line between any two numbers.
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/I-X.png" alt="I-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Dozen: </strong>a bet on twelve consecutive numbers.<br></br>+ Place your chips in one of the
                                    three areas marked {`"1-12", "13-24" or "25-36"`}.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/C-X.png" alt="C-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Street: </strong>a bet on three consecutive numbers located on the same line.<br></br>+ Place
                                    your chips on the outside border of the three numbers.
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/J-X.png" alt="J-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Red/Black: </strong>bet on whether the final result is Red or Black colour.
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/D-X.png" alt="D-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Triangle: </strong>a bet on three adjoining numbers 0, 1, 2 or 0, 2, 3.<br></br>+ Place your
                                    chips on the intersecting corner of (0, 1, and 2) or (0, 2, and 3).
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/K-X.png" alt="K-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Odd/Even: </strong>bet on whether the final result is Odd or Even number (excluding Zero).
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/E-X.png" alt="E-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Corner: </strong>a bet on four numbers
                                    <br></br>+ Place your chips on the intersection where all four numbers meet.
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/L-X.png" alt="L-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Big/Small: </strong>bet on whether the final result is Big (19-36) or Small (1-18).
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/F-X.png" alt="F-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Four numbers: </strong>a bet on four numbers 0, 1, 2, 3.<br></br>+ Place your chips on the
                                    intersecting corner of 0 and the row of 1, 2, 3.
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr className="text-start">
                        <td>
                            <div className={Styles["img-chip"]}>
                                <img src="/static/images/roulette/G-X.png" alt="G-X" width={37} height={37} loading="lazy" />
                                <div>
                                    <strong>Line: </strong>a bet on two adjoining rows.<br></br>+ Place your chips at the end of two rows on
                                    the intersection between them.
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderCallBetTiers = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Tiers</span>
            <ul className="desc">
                <li>The Tiers bet includes the numbers 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33. </li>
                <li>
                    To play Tiers bet, six chips will be taken which are placed on the six Splits: (5, 8), (10, 11), (13, 16), (23, 24),
                    (27, 30), (33, 36).
                </li>
            </ul>
            <p>
                <strong>Example: </strong>Player select the chip value 10, and click on Tiers option, it will cost 6 chips for this choice:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-tiers_ex.png" alt="game_guide-tiers" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Bet Type</th>
                            <th>Options</th>
                            <th>Stake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={6}>Split</td>
                            <td>5, 8</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>10, 11</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13, 16</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>23, 24</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27, 30</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>33, 36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>60</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetOrphelins = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Orphelins</span>
            <ul className="desc">
                <li>The Orphelins bet includes the numbers 1, 20, 14, 31, 9, 6, 34, 17.</li>
                <li>
                    To play Orphelins bet, five chips will be taken which are placed on:
                    <ul className="plus">
                        <li>Four chips for the four Splits (6, 9), (14, 17), (17, 20), (31, 34) </li>
                        <li>One chip for a Straight bet (1) </li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>Example: </strong>Player select the chip value 10, and click on the Orphelins option, it will cost 5 chips for this
                choice:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-orphelins_ex.png"
                        alt="game_guide-orphelins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-orphelins_ex.png" alt="game_guide-orphelins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Bet Type</th>
                            <th>Options</th>
                            <th>Stake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={4}>Split</td>
                            <td>6, 9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>14, 17</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>17, 20</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>31, 34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Straight Up</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetVoisins = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Voisins</span>
            <ul className="desc">
                <li>The Voisins bet includes the numbers 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25. </li>
                <li>
                    To play Voisins bet, nine chips will be taken which are placed on:
                    <ul className="plus">
                        <li>Five chips for five Splits: (12, 15), (18, 21), (32, 35), (19, 22), (4, 7) </li>
                        <li>Two chips for Triangle: (0, 2, 3) </li>
                        <li>Two chips for Corner: (25, 26, 28, 29)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>Example: </strong>Player select the chip value 10, and click on the Voisins option, it will cost 9 chips for this
                choice:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide-voisins_ex.png"
                        alt="game_guide-voisins_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide-voisins_ex.png" alt="game_guide-voisins_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Bet Type</th>
                            <th>Options</th>
                            <th>Stake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>Split</td>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>18, 21</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>19, 22</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4, 7</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Triangle</td>
                            <td>0, 2, 3</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Corner</td>
                            <td>25, 26, 28, 29</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>90</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetZero = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Zero</span>
            <ul className="desc">
                <li>The Zero bet includes the numbers 12, 35, 3, 26, 0, 32, 15.</li>
                <li>
                    To play Zero bet, four chips will be taken which are placed on:
                    <ul className="plus">
                        <li>One chip for a Straight bet (26)</li>
                        <li>Three chips for three Splits (0, 3), (12, 15), (32, 35)</li>
                    </ul>
                </li>
            </ul>
            <p>
                <strong>Example: </strong>Player select the chip value 10, and click on Zero option, it will cost 4 chips for this choice:
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img src="/static/images/roulette/fractionalodds/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                ) : (
                    <img src="/static/images/roulette/game_guide-zero_ex.png" alt="game_guide-zero_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Bet Type</th>
                            <th>Options</th>
                            <th>Stake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>Split</td>
                            <td>0, 3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>12, 15</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>32, 35</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td>Straight Up</td>
                            <td>26</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderCallBetNeighbors = (fractionalOddsFormat = false) => {
    return (
        <>
            <span className="font-weight-medium title-text">Neighbors</span>
            <p>
                The Neighbors is made with 5 numbers, among that one number is chosen by the player, together with the two numbers that lay
                on the left and right side of that number on the wheel.
            </p>
            <ul className="desc">
                <li>To play Neighbor bet, five chips will be taken which are placed on 5 Straight bets.</li>
            </ul>

            <div className={Styles["wrapper-img-circle"]}>
                <img src="/static/images/roulette/game_guide-neighbors_1.png" alt="game_guide-neighbors_1" loading="lazy" />
            </div>
            <p>
                <strong>Example: </strong>Player selects the chip value 10, and click on number 27 for a Neighbors bet, it will cost 5 chips
                for five Straight bets: (36), (13), (27), (6), (34).
            </p>
            <div className={Styles[wrapperImg]}>
                {fractionalOddsFormat ? (
                    <img
                        src="/static/images/roulette/fractionalodds/game_guide_neighbors_ex.png"
                        alt="game_guide_neighbors_ex"
                        loading="lazy"
                    />
                ) : (
                    <img src="/static/images/roulette/game_guide_neighbors_ex.png" alt="game_guide_neighbors_ex" loading="lazy" />
                )}
            </div>
            <div className="table-container text-center">
                <table className={`table text-center ${Styles[tableSmall]}`}>
                    <thead>
                        <tr>
                            <th>Bet Type</th>
                            <th>Options</th>
                            <th>Stake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>Straight Up</td>
                            <td>36</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <strong>Total</strong>
                            </td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderBettingOptions = (odds: OddsProps | undefined, fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>Betting Options</h2>
            <p>
                Roulette bet types are broken down into two categories: inside bets and outside bets. The bets that are placed on the
                numbers themselves are called inside bets (Straight, Split, Street...), whereas the bets that you place on the outside the
                number field are called outside bets (Odd/Even, Red/Black, Big/Small, Column and Dozen).
            </p>
            {renderGameRuleImage(fractionalOddsFormat, "en")}
            {renderBetChipsNotice(odds, fractionalOddsFormat)}
        </li>
    );
};

const renderCallBet = (fractionalOddsFormat = false) => {
    return (
        <li className="guide-item">
            <h2>Call Bet</h2>
            <p>
                Call Bet or French Bet are special betting options which are a predefined set of bets. There are 5 options: Tiers, Voisins
                du Zero, Orphelins, Zero, Neighbors.
            </p>
            <div className={Styles[wrapperImg]}>
                <div className={Styles["wrapper-img-circle"]}>
                    <img src="/static/images/roulette/game_guide-cuoc_nhanh.png" alt="game_guide-cuoc_nhanh" loading="lazy" />
                </div>
            </div>

            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Types of Call Bet</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">{renderCallBetTiers(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetOrphelins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetVoisins(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetZero(fractionalOddsFormat)}</li>
                        <li className="number-dot-number">{renderCallBetNeighbors(fractionalOddsFormat)}</li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const RouletteGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a simple yet fascinating gambling game. The game is played with a ball and a roulette wheel which
                        consists of thirty-seven slots, numbered from 0 to 36. Each slot is colored red or black, while the slot “0” is
                        green. The players predict the number that the ball will finally rest after the wheel is spun. If the ball falls
                        into the number you selected, you will win; otherwise, you lose.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                {renderBettingOptions(odds, fractionalOddsFormat)}
                {renderCallBet(fractionalOddsFormat)}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default RouletteGuideEN;
