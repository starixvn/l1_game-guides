import React from "react";
import { numberWithCommas } from "../../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../../shared";
import { GameConfigProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { ChoicesMaxBetProMaxProps, OddsProMaxProps } from "../../../keno-pro-max/type";

const payouts = (odds: OddsProMaxProps, minBet: number, choicesMaxBet: ChoicesMaxBetProMaxProps) => {
    return (
        <>
            <h2>Payouts</h2>
            <ul className="desc">
                <li>
                    The winning amount is calculated according to the payout ratio. <strong>Note,</strong> the Payout includes the initial
                    stake.
                </li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>Options</th>
                                    <th>Payouts</th>
                                    <th>
                                        Bet Limit <br></br>(Min-Max)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Big</td>
                                    <td> 1: {odds.big}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.big)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                    <td> 1: {odds.small}</td>
                                </tr>
                                <tr>
                                    <td>Odd</td>
                                    <td rowSpan={2}> 1: {odds.odd}</td>
                                </tr>
                                <tr>
                                    <td>Even</td>
                                </tr>
                                <tr>
                                    <td>Gold</td>
                                    <td>1: {odds.gold}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.gold)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wood</td>
                                    <td>1: {odds.wood}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.wood)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Water</td>
                                    <td>1: {odds.water}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.water)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fire</td>
                                    <td>1: {odds.fire}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.fire)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Earth</td>
                                    <td>1: {odds.earth}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.earth)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const bettingOptions = () => {
    return (
        <>
            <h2>Betting Options</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text"> Big/Small</span>
                    <ul className="desc">
                        <li>
                            <strong>Big:</strong> The sum of the 10 numbered balls drawn is {`>=`} 206
                        </li>
                        <li>
                            <strong>Small:</strong> The sum of the 10 numbered balls drawn is {`<=`} 205
                        </li>
                    </ul>
                    <div>
                        <strong>Example: </strong>Set of 10 numbered balls drawn randomly from 40 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>15</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>28</td>
                                        <td>33</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Total Sum</strong> = 181. Players bet on SMALL will win.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">Odd/Even</span>
                    <ul className="desc">
                        <li>
                            <strong>Odd:</strong> the sum of the 10 numbered balls drawn is an odd number.
                        </li>
                        <li>
                            <strong>Even:</strong> the sum of the 10 numbered balls drawn is an even number.
                        </li>
                    </ul>
                    <div>
                        <strong>Example: </strong>Set of 10 numbered balls drawn randomly from 40 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>24</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>34</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Total Sum</strong> = 233. Players bet on ODD will win.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text"> Five Elements (Gold, Wood, Water, Fire, Earth)</span>
                    <ul className="desc">
                        <li>
                            <strong>Gold:</strong> The sum of the 10 numbered balls drawn, ranges from 55 to 163.
                        </li>
                        <li>
                            <strong>Wood:</strong> The sum of the 10 numbered balls drawn, ranges from 164 to 187.
                        </li>
                        <li>
                            <strong>Water:</strong> The sum of the 10 numbered balls drawn, ranges from 188 to 222.
                        </li>
                        <li>
                            <strong>Fire:</strong> The sum of the 10 numbered balls drawn, ranges from 223 to 246.
                        </li>
                        <li>
                            <strong>Earth:</strong> The sum of the 10 numbered balls drawn, ranges from 247 to 355.
                        </li>
                    </ul>
                    <div>
                        <strong>Example: </strong>Set of 10 numbered balls drawn randomly from 40 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>7</td>
                                        <td>13</td>
                                        <td>17</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>33</td>
                                        <td>37</td>
                                        <td>38</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Total Sum</strong> = 253. Players bet on FIRE will win.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

const KenoMiniGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an RNG Keno Game with 40 balls. The game is played with 10 numbered balls drawn randomly from 40
                        numbered balls ranging from 1 to 40. Players place bets on one or more betting options shown on the game table. The
                        total sum of the 10 numbered balls drawn will determine the player‘s win or loss.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled. </li>
                        <li>
                            Once the betting time has expired, the system will randomly draw 10 numbered balls and the result will be shown.
                        </li>
                        <li>The maximum total stake per round is {maxBetRound}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, minBet, maxBetPerChoices)}</li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default KenoMiniGuideEN;
