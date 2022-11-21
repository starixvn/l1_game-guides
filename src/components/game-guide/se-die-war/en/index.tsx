import React from "react";
import { useTheme } from "next-themes";

import { renderTermsAndConditionsEN } from "../../../shared";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../../shared/dot";
import { StatisticalTable, RedWhiteDataOnTable } from "../../../shared/se-die/en";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../se-die-war.module.scss";
import { Themes } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

const renderGameRule = (maxBet: string | undefined) => {
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
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Options</th>
                                    <th>Winning Conditions</th>
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
            <table className="table text-center table-small">
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

const renderPayouts = (
    odds: object | any,
    maxBetFollowChoice: undefined | MaxBetChoicesProps,
    fractionalOddsFormat: boolean | undefined
) => {
    return (
        <li className="guide-item">
            <h2>Payouts</h2>
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
                                    <td>Player</td>
                                    <td rowSpan={2}>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={5}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker</td>
                                </tr>
                                <tr>
                                    <td>Tie</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Total Even</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>Total Odd</td>
                                </tr>
                                <tr>
                                    <td>Player - Even</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Player - Odd</td>
                                </tr>
                                <tr>
                                    <td>Player - 3 Red</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Player - 1 Red</td>
                                </tr>
                                <tr>
                                    <td>Player - 4 Red</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Player - 4 White</td>
                                </tr>
                                <tr>
                                    <td>Banker - Even</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerEven, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker - Odd</td>
                                </tr>
                                <tr>
                                    <td>Banker - 3 Red</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker - 1 Red</td>
                                </tr>
                                <tr>
                                    <td>Banker - 4 Red</td>
                                    <td rowSpan={2}>{formatOdds(odds?.bankerRed4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBankerRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Banker - 4 White</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const pathImg = theme === Themes.light ? "dark/guide-stats-en.png" : "guide-stats-en.png?1";
    return (
        <>
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
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                <li className="guide-item">
                    <h2>Scoreboard</h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <strong className="title-text">Odd-Even</strong>
                            {StatisticalTable()}
                        </li>
                        <li className="number-dot">
                            <strong className="title-text">Statistical Round result</strong>
                            <div className={Styles["wrapper-guide-stats"]}>
                                <img src={`/static/images/sedie-war/${pathImg}`} alt="guide-stats-en" loading="eager" />
                            </div>

                            <p>
                                <strong>Note</strong>: the number shown in the statistical round is the total red buttons having in the
                                results of both the Player and Banker.
                            </p>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default SeDieGuideEN;
