import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";
import { ChoicesMaxBetProMaxProps, GameConfigProps, OddsProMaxProps } from "../type";
import { GameGuideProps } from "../../type";
import { FiveElements } from "../../../shared/keno/en";

const payouts = (odds: OddsProMaxProps, minBet: number, choicesMaxBet: ChoicesMaxBetProMaxProps) => {
    const { big, earth, fire, water, gold, wood } = odds;
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
                                    <td rowSpan={4}> 1: {big}</td>
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
                                    <td>1: {gold}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.gold)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wood</td>
                                    <td>1: {wood}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.wood)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Water</td>
                                    <td>1: {water}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.water)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fire</td>
                                    <td>1: {fire}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choicesMaxBet.fire)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Earth</td>
                                    <td>1: {earth}</td>
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
                    <span className="font-weight-medium title-text">Big/Small</span>
                    <ul className="desc">
                        <li>
                            <strong>Big:</strong> The sum of the 20 numbered balls drawn is {`>=`} 811
                        </li>
                        <li>
                            <strong>Small:</strong> The sum of the 20 numbered balls drawn is{`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>Example:</strong> Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>4</td>
                                        <td>14</td>
                                        <td>16</td>
                                        <td>29</td>
                                        <td>34</td>
                                        <td>40</td>
                                        <td>51</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>67</td>
                                        <td>70</td>
                                        <td>72</td>
                                        <td>75</td>
                                        <td>77</td>
                                        <td>78</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>Total Sum = 939. Players bet on BIG will win.</td>
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
                        <strong>Example:</strong> Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>15</td>
                                        <td>20</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>35</td>
                                        <td>36</td>
                                        <td>45</td>
                                    </tr>
                                    <tr>
                                        <td>49</td>
                                        <td>54</td>
                                        <td>56</td>
                                        <td>58</td>
                                        <td>61</td>
                                        <td>62</td>
                                        <td>74</td>
                                        <td>76</td>
                                        <td>78</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>Total Sum = 911. Players bet on ODD will win.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {FiveElements()}
                    <div>
                        <strong>Example:</strong> Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>Draw Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>17</td>
                                        <td>27</td>
                                        <td>36</td>
                                        <td>44</td>
                                        <td>46</td>
                                        <td>47</td>
                                        <td>49</td>
                                    </tr>
                                    <tr>
                                        <td>52</td>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>62</td>
                                        <td>63</td>
                                        <td>65</td>
                                        <td>72</td>
                                        <td>74</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>Total Sum = 922. Players bet on FIRE will win.</td>
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

const KenoProMaxGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName, userStakeLevel } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    const maxBetRound = numberWithCommas(
        userStakeLevel ? Math.min(userStakeLevel?.maxBet ? userStakeLevel?.maxBet : maxbet, maxbet) : maxbet
    );
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is a wildly popular number game that is played all over the world. The game is played with 20 numbered
                        balls drawn randomly from 80 numbered balls ranging from 1 to 80. Players place bets on one or more betting options
                        shown on the game table. The total sum of the 20 numbered balls drawn will determine the player‘s win or loss.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                        <li>
                            Once the betting time has expired, the system will randomly draw 20 numbered balls and the result will be shown.
                        </li>
                        <li>The maximum total stake per round is {maxBetRound}</li>
                    </ul>
                </li>
                <li className="guide-item">{bettingOptions()}</li>
                <li className="guide-item">{payouts(odds, minbet, choices_maxbet)}</li>

                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default KenoProMaxGuideEN;
