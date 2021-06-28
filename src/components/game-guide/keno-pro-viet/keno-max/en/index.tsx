import React from "react";
import { renderTermsAndConditionsEN } from "../../../../shared";
import { GameConfigProps } from "../../type";
import { GameGuideProps } from "../../../type";
import { renderFiveElements, renderGameRule } from "../../../../shared/keno/en";

const bettingOptions = () => {
    return (
        <>
            <h2>Betting Options</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium"> Big/Small</span>
                    <ul className="desc">
                        <li>
                            <strong>Big:</strong> The sum of the 20 numbered balls drawn is {`>=`} 811
                        </li>
                        <li>
                            <strong>Small:</strong> The sum of the 20 numbered balls drawn is {`<=`} 810
                        </li>
                    </ul>
                    <div>
                        <strong>Example:</strong>Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small left">
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
                    <span className="font-weight-medium">Odd/Even</span>
                    <ul className="desc">
                        <li>
                            <strong>Odd:</strong> the sum of the 20 numbered balls drawn is an odd number.
                        </li>
                        <li>
                            <strong>Even:</strong> the sum of the 20 numbered balls drawn is an even number.
                        </li>
                    </ul>
                    <div>
                        <strong>Example:</strong>Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small left">
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
                                            <strong>Total Sum</strong> 798. Players bet on EVEN will win.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    {renderFiveElements()}
                    <div>
                        <strong>Example:</strong> Set of 20 numbered balls drawn randomly from 80 numbered balls
                        <div className="table-container">
                            <table className="table text-center table-small left">
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
    const { gameConfigs, gameName, userStakeLevel } = props;
    const { odds, maxbet, minbet, choices_maxbet } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an RNG Keno Game with 80 balls. The game is played with 20 numbered balls drawn randomly from 80
                        numbered balls ranging from 1 to 80. Players place bets on one or more betting options shown on the game table. The
                        total sum of the 20 numbered balls drawn will determine the player‘s win or loss.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxbet, minbet, choices_maxbet, userStakeLevel)}</li>
                <li className="guide-item">{bettingOptions()}</li>

                {renderTermsAndConditionsEN()}
            </ul>
        </div>
    );
};
export default KenoProGuideEN;
