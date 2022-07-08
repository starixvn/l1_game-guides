import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import OddDetailList from "../OddDetail";
import Styles from "../treasure-island.module.scss";
import { GameConfigProps } from "../type";
import {
    convertOddDetail,
    renderIconContent,
    renderIconContentBlack,
    renderPayoutsIconFirstLine,
    renderPayoutsIconSecondLine,
} from "../vi";

const renderGameRule = (minValue: number, maxValue: number) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>The Player selects or adjusts the bet amount that suits you the best before pressing the “Spin” button.
                    <div className="sub-section">
                        <div className="center"><div><strong>Total Bet</strong> = Bet Level * Coin Value * Bet Multiplier</div>
                        <img src={`/static/images/treasure-island/betcontrol-en.jpg?v2`}
                    width={610}
                    height={343}
                    alt={"bet-control"}/>
                        </div>
                       
                        <ul className={Styles["desc-bet-control"]}>
                            <li>1. The coin value is how much you want to spend per line in the game.</li>
                            <li>2. Bet level is the total number of coins per line.</li>
                            <li>3. Bet Multiplier is the multiplier used to calculate the Total Bet by multiplying with Bet Level and Coin Value. Bet Multiplier: 20x.</li>
                        </ul>
                    </div>                    
                </li>
                <li>The player can press the “Spin” button, or use the Spacebar/Enter key on the keyboard to start the spin.</li>
                <li>The total number of the same symbols on the screen at the end of a spin determines the value of the Win.</li>
                <li>Bet limit: {minValue} - {maxValue}.</li>
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

const renderPayouts = (odds: any,  coin: number, level: number,  maxWinPerRound: number) => {
    const {symbols} = odds;
    const currMaxBet = maxWinPerRound ;
    let oddDetail = convertOddDetail(symbols, false);
    return (
       <>
        <h2>Payouts</h2>
        <ul className="desc">
            <li>Symbols pay anywhere on the screen. </li>
            <li>The win-loss of each combination will be calculated based on the base bet value.
                <div className="center">Base Bet Value= Bet level * Coin Value</div>
            </li>
            <li>The payouts table will be updated according to the value of the base bet that you have selected.
                <div className="sub-section">
                    {renderPayoutsIconFirstLine(oddDetail, locales.vi, coin, level)}
                    {renderPayoutsIconSecondLine(oddDetail, locales.vi, coin, level)}
                    {renderExamplePayouts(oddDetail[8], coin, level)}
                </div>
            </li>
            <li>The winning amounts is instantly added to your account balance when all of the tumbles resulting from a base spin have been played.</li>
            <li>The maximum win amount is limited to {currMaxBet}X bet. If the total win of a round reaches the max win value, the game round immediately ends. The win is awarded up to the limitation and all remaining features are forfeited.</li>
        </ul>
        
       </>
    );
};

const renderExamplePayouts = (symbol: OddDetailList, coin: number, level: number) => {
    return (
        <>
            <p>
                <strong> Example:</strong> Your base bet value is {+(+(coin * level)).toFixed(2)}
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
                                {renderIconContent(true, "item8", true, true, symbol, "",  coin, level, false)}
                            </td>
                            <td>                               
                                Having {symbol.oddItem[0].countString} symbols{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> appear on the result board.{" "}
                                <br></br>Payout = {+(+(symbol.oddItem[0].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having {symbol.oddItem[1].countString} symbols {" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" /> appear on the result board.{" "}
                                <br></br>Payout = {+(+(symbol.oddItem[1].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Having {symbol.oddItem[2].countString} symbols{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />{" "}
                                appear on the result board.<br></br>Payout = {+(+(symbol.oddItem[2].count * coin * level)).toFixed(2)}
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
        <div className={Styles["center"]}>
            <img src={`/static/images/treasure-island/multiplier2.png#v3`} alt="multiplier" width={140} height={112} />
            <img src={`/static/images/treasure-island/multiplier3.png#v3`} alt="multiplier" width={140} height={112} />
            <img src={`/static/images/treasure-island/multiplier1.png#v3`} alt="multiplier" width={140} height={112} />
            <img src={`/static/images/treasure-island/multiplier4.png#v3`} alt="multiplier" width={140} height={112} />
        </div>
        <ul className="desc">
            <li>The Multiplier symbols are present on all reels and can hit randomly during spins, and tumbles in both base game and free spins.</li>
            <li>Whenever a Multiplier symbol hits, it takes a random multiplier value from 2x to 500x.</li>
            <li>At the end of Tumbles, the value of Multiplier symbols is added and multiplied with the Tumble Win value to calculate the Win amount.
                <div className="sub-section">
                    <div>Example:</div>
                    <div className="center" ><img src={`/static/images/treasure-island/reel.jpg#v4`} alt="tumble-multiplier" width={610} height={362}/></div>
                    <div className="table-container text-center">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th>Win Symbols</th>
                                    <th>Tumble Win</th>
                                    <th>Multiplier</th>
                                    <th>Win</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img  src="./static/images/treasure-island/item1.png" width={50} height={50} alt="item2"/>
                                    </td>
                                    <td>7</td>
                                    <td>22 <br/>(20+2)</td>
                                    <td><strong>154</strong><br/><strong>(7*22)</strong></td>
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

const renderFreeSpins = (odds: any, coin: number, level: number) => {
    const {freeSpins} = odds;
    const oddDetail = convertOddDetail(freeSpins, true)
    return(
        <>
            <h2>Free Spins Feature</h2>
            <ul className="desc">
                <li>The Free Spins feature is awarded when 4 or more SCATTER symbols appear anywhere on the screen.
                    <div className="sub-section">
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
                                                oddDetail[0],
                                                " FREE SPINS"
                                            )}
                                        </td>
                                        <td>
                                            Having {oddDetail[0].oddItem[0].countString} Scatter symbols in the result.<br></br> Get “{oddDetail[0].oddItem[0].count}” Free Spins Bonus.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Having {oddDetail[0].oddItem[1].countString} Scatter symbols in the result.<br></br>Get “{oddDetail[0].oddItem[1].count}” Free Spins Bonus.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Having {oddDetail[0].oddItem[2].countString} Scatter symbols in the result.<br></br>Get “{oddDetail[0].oddItem[2].count}” Free Spins Bonus.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li>Whenever <i>4</i> or more SCATTER symbols appear during the Free Spins round, <i>{oddDetail[1].oddItem[0].count}</i> additional free spins are awarded.</li>
                <li>For the whole duration of Free Spins rounds, whenever any new Multiplier symbols appear and the spinning result in a win, the Multiplier value is added to the total multiplier.
                The Total Multiplier value is used to calculate the Win amount.
                    <div className="sub-section">
                        <div>Example: The player wins 4 Free Spins</div>
                        <div className="table-container text-center">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th>Round id</th>
                                        <th>Tumble Win</th>
                                        <th>Multiplier</th>
                                        <th>Total Multiplier</th>
                                        <th>Win</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#1</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td><strong>50</strong><br/><strong>(Tumble Win * Total Multiplier)</strong></td>
                                    </tr>
                                    <tr>
                                        <td>#2</td>
                                        <td>5</td>
                                        <td>0</td>
                                        <td>5</td>
                                        <td><strong>5</strong><br/><strong>(Tumble Win)</strong></td>
                                    </tr>  
                                    <tr>
                                        <td>#3</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>5</td>
                                        <td><strong>0</strong></td>
                                    </tr> 
                                    <tr>
                                        <td>#4</td>
                                        <td>7</td>
                                        <td>3</td>
                                        <td>8 <br/>(5+3)</td>
                                        <td><strong>56</strong><br/><strong>(Tumble Win * Total Multiplier)</strong></td>
                                    </tr>                           
                                </tbody>
                            </table>
                        </div>
                        <div className={`${Styles["center"]} ${Styles["line"]}`}>
                            <img src={`/static/images/treasure-island/freespin-en.jpg#v3`} alt="freespin" width={610} height={343}/>
                        </div>
                        <div className={`${Styles["center"]} ${Styles["line"]}`}>
                            <img src={`/static/images/treasure-island/tumblewin-en.png#v3`} alt="tumble-win" width={372} height={69}/>
                            <div className={Styles["tumble-desc"]}>
                                <div><span className={Styles["orange"]}>1.</span> Tumble Win Amount</div>
                                <div><span className={Styles["orange"]}>2.</span> Total Multiplier: 5+3 =8</div>
                            </div>
                        </div>
                    </div>
                </li> 
                <li>The Player must complete the Free Spins Bonus within 24hrs after being issued. Unused Free Spins will be lost.</li>
            </ul>
           
        </>
    );
};



const TreasureIslandGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName} = props;
    const { odds, betMultiplier, coin, level, coinValues, betLevels, maxWinPerRound } = gameConfigs;
    const sortedCoinValue = coinValues.sort((a, b) => a - b);
    const sortedBetLevel = betLevels.sort((a, b) => a - b);
    const minBet = betMultiplier * sortedCoinValue[0] * sortedBetLevel[0];
    const maxBet = betMultiplier * sortedCoinValue[coinValues.length - 1] * sortedBetLevel[betLevels.length - 1];
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an online cascading slot game that has become extremely popular with the online gamer as it offers multiple chances to win when compared to the older-style slot machines. 
                        The game consists of six reels, five rows, and ten different symbols.
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img src={`/static/images/treasure-island/list_icon.png#v4`} alt="guide_item_symbol_bg" width={750} height={194} />
                    </div>
                </li>
                
                <li className="guide-item">{renderGameRule(minBet, maxBet)}</li>
                <li className="guide-item">{renderPayouts(odds, coin, level, maxWinPerRound)}</li>
                <li className="guide-item">{renderTumbling()}</li>
                <li className="guide-item">{renderMultipliers()}</li>
                <li className="guide-item">{renderFreeSpins(odds, coin, level)}</li>
                {renderTermsAndConditionsEN(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default TreasureIslandGuideEN;


