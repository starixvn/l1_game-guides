import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/en";
import { GameConfigProps, ChoicesMaxBetProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../se-die-war.module.scss";

const renderGameRule = (maxBet: string) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Select the chip value you wish to play. All bets must be placed before the betting time expires.</li>
                <li>Note, placed bets cannot be canceled.</li>
                <li>Once the betting time has expired, the Bowl will be removed and the result is shown.</li>
                <li>The maximum total stake per round is {maxBet}</li>
                <li>
                    The total stake amount of all players shown on each bet option is only for reference. For different markets and
                    currencies, the totals are converted based on the internal rates set by the company.
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-medium left">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Options</th>
                                    <th>Winning Condition</th>
                                    <th>Descriptions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>Player</td>
                                    <td colSpan={2} className="text-start">
                                        The number of red buttons in the Player’s result is more than Banker.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Banker</td>
                                    <td colSpan={2} className="text-start">
                                        The number of red buttons in the Banker’s result is more than Player.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Tie</td>
                                    <td colSpan={2} className="text-start">
                                        The Player and Banker have the same result.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Total Even</td>
                                    <td colSpan={2} className="text-start">
                                        The total number of red buttons having in the results of both the Player and Banker is EVEN.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>Total Odd</td>
                                    <td colSpan={2} className="text-start">
                                        The total number of red buttons having in the results of both the Player and Banker is ODD.
                                    </td>
                                </tr>
                                {renderGameRulePlayerOrBanker(false)}
                                {renderGameRulePlayerOrBanker(true)}
                            </tbody>
                        </table>
                    </div>
                    {renderGameRuleExample()}
                </li>
            </ul>
        </>
    );
};

const renderGameRulePlayerOrBanker = (isBanker = false) => {
    return (
        <>
            <tr>
                <td rowSpan={9}>{isBanker ? "Banker" : "Player"}</td>
                <td rowSpan={2}>Odd</td>
                <td>3 red, 1 white</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td>1 red, 3 white</td>
                {renderOneRedThreeWhite()}
            </tr>
            <tr>
                <td rowSpan={3}>Even</td>
                <td>4 red</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 white</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td>2 red, 2 white</td>
                {renderTwoRedTwoWhite()}
            </tr>
            {RedWhiteDataOnTable()}
        </>
    );
};

const renderGameRuleExample = () => {
    const oneRedThreeWhite = "1 red, 3 white";
    const threeRedOneWhite = "3 red, 1 white";
    return (
        <>
            <p>
                <strong>Example</strong>
            </p>
            <div>
                <strong>Banker, Player option. </strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>Because the number of red buttons in the Player’s result is more than Banker. Bet on the Player option will win.</p>
            <div>
                <strong>Total EVEN</strong>
                {renderGameRuleTable([threeRedOneWhite, oneRedThreeWhite])}
            </div>
            <p>The total number of red buttons having in the results of both the Player and Banker is 4. Bet on Total EVEN will win.</p>
            <div>
                <strong>Total ODD</strong>
                {renderGameRuleTable(["2 red, 2 white", oneRedThreeWhite])}
            </div>
            <p>The total number of red buttons having in the results of both the Player and Banker is 3. Bet on Total ODD will win.</p>
        </>
    );
};

const renderGameRuleTable = (data: string[]) => {
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Options</th>
                        <th>Results </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Player</td>
                        <td>{data[0]}</td>
                    </tr>
                    <tr>
                        <td>Banker</td>
                        <td>{data[1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (odds: object | any, choiceMaxBet: ChoicesMaxBetProps, minBet: number) => {
    return (
        <li className="guide-item">
            <h2>Payout </h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio. Note, the Payout includes the initial stake.</li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>Options</th>
                                    <th>Payouts </th>
                                    <th>Bet Limit (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start">Player</td>
                                    <td rowSpan={2}>1:{odds.player}</td>
                                    <td rowSpan={5}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.player)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Banker</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Tie</td>
                                    <td>1:{odds.tie}</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Total Even</td>
                                    <td rowSpan={2}>1:{odds.even}</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Total Odd</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Player - Even</td>
                                    <td rowSpan={2}>1:{odds.playerEven}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.playerEven)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Player - Odd</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Player - 3 Red</td>
                                    <td rowSpan={2}>1:{odds.playerRed3}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.playerRed3)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Player - 1 Red</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Player - 4 Red</td>
                                    <td rowSpan={2}>1:{odds.playerRed4}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.playerRed4)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Player - 4 White</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Banker - Even</td>
                                    <td rowSpan={2}>1:{odds.bankerEven}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.bankerEven)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Banker - Odd</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Banker - 3 Red</td>
                                    <td rowSpan={2}>1:{odds.bankerRed3}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.bankerRed3)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Banker - 1 Red</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Banker - 4 Red</td>
                                    <td rowSpan={2}>1:{odds.bankerRed4}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.bankerRed4)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Banker - 4 White</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a special version of the Se Die game. The game consists of 2 sets of buttons, one for the Banker and
                        one for the Player. Each set includes 4 colored buttons, in which, each button has two sides colored in red and
                        white. Players place bets on one or more betting options shown on the game table. The game determines the win or
                        loss based on the number of red or white sites faced up in the result
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(numberWithCommas(maxbet))}</li>

                {renderPayouts(odds, choices_maxbet, minbet)}
                <li className="guide-item">
                    <h2>Scoreboard</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <strong>Odd-Even</strong>
                            {StatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <strong>Statistical Round result</strong>
                            <p>
                                <img
                                    className={Styles["wrapper-img"]}
                                    src="./static/images/sedie-war/guide-stats-en.png"
                                    alt="guide-stats-en"
                                ></img>
                            </p>

                            <p>
                                <strong>Note</strong>: the number shown in the statistical round is the total red buttons having in the
                                results of both the Player and Banker.
                            </p>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </div>
    );
};
export default SeDieGuideEN;
