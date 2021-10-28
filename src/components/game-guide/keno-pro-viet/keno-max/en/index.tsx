import React from "react";
import { numberWithCommas } from "../../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../../shared";
import { GameConfigProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { FiveElements } from "../../../../shared/keno/en";
import { ChoicesMaxBetProMaxProps, OddsProMaxProps } from "../../../keno-pro-max/type";

const payouts = (odds: OddsProMaxProps | undefined, minBet: number, choicesMaxBet: ChoicesMaxBetProMaxProps) => {
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
                                    <td rowSpan={4}> 1: {odds?.big}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.big)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Small</td>
                                </tr>
                                <tr>
                                    <td>Odd</td>
                                </tr>
                                <tr>
                                    <td>Even</td>
                                </tr>
                                <tr>
                                    <td>Gold</td>
                                    <td>1: {odds?.gold}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.gold)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wood</td>
                                    <td>1: {odds?.wood}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.wood)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Water</td>
                                    <td>1: {odds?.water}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.water)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fire</td>
                                    <td>1: {odds?.fire}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.fire)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Earth</td>
                                    <td>1: {odds?.earth}</td>
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
                            <strong>Big:</strong> The sum of the 20 numbered balls drawn is {`>=`} 811
                        </li>
                        <li>
                            <strong>Small:</strong> The sum of the 20 numbered balls drawn is {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>Example: </strong>Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>17</td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>23</td>
                                        <td>33</td>
                                        <td>40</td>
                                        <td>41</td>
                                        <td>42</td>
                                    </tr>
                                    <tr>
                                        <td>45</td>
                                        <td>48</td>
                                        <td>56</td>
                                        <td>58</td>
                                        <td>59</td>
                                        <td>69</td>
                                        <td>71</td>
                                        <td>72</td>
                                        <td>73</td>
                                        <td>77</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Total Sum</strong> = 883. Players bet on BIG will win.
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
                            <strong>Odd:</strong> the sum of the 20 numbered balls drawn is an odd number.
                        </li>
                        <li>
                            <strong>Even:</strong> the sum of the 20 numbered balls drawn is an even number.
                        </li>
                    </ul>
                    <div>
                        <strong>Example: </strong>Set of 20 numbered balls drawn randomly from 80 numbered balls
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
                                        <td>8</td>
                                        <td>18</td>
                                        <td>23</td>
                                        <td>30</td>
                                        <td>35</td>
                                        <td>37</td>
                                        <td>39</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td>42</td>
                                        <td>44</td>
                                        <td>46</td>
                                        <td>49</td>
                                        <td>50</td>
                                        <td>56</td>
                                        <td>60</td>
                                        <td>61</td>
                                        <td>71</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Total Sum</strong> = 798. Players bet on EVEN will win.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>Example: </strong>Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>15</td>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>27</td>
                                        <td>29</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td>37</td>
                                        <td>40</td>
                                        <td>42</td>
                                        <td>47</td>
                                        <td>48</td>
                                        <td>52</td>
                                        <td>57</td>
                                        <td>62</td>
                                        <td>68</td>
                                        <td>71</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>Total Sum</strong> = 698. Players bet on WOOD will win.
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

const KenoProGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetRound = numberWithCommas(maxBet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an RNG Keno Game with 80 balls. The game is played with 20 numbered balls drawn randomly from 80
                        numbered balls ranging from 1 to 80. Players place bets on one or more betting options shown on the game table. The
                        total sum of the 20 numbered balls drawn will determine the player‘s win or loss.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled. </li>
                        <li>
                            Once the betting time has expired, the system will randomly draw 20 numbered balls and the result will be shown.
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
export default KenoProGuideEN;
