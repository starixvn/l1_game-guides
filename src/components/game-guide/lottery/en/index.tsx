import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { GameConfigProps, OddsProps, ChoicesMaxBetProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../lottery.module.scss";

const exampleTitle = "example-title";
const tableSmall = "table-small";
const textRedLight = "text-red-light";
const renderGameRule = (maxbet: number) => {
    return (
        <li className="guide-item">
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Select the chip value you wish to play. All bets must be completed before the betting time expires.</li>
                <li>Note, placed bets cannot be canceled.</li>
                <li>Players can bet on one or more betting options shown on the game table.</li>
                <li>The maximum total stake per round is {numberWithCommas(maxbet)}</li>
            </ul>
        </li>
    );
};

const renderBettingOptions = () => {
    return (
        <li className="guide-item">
            <h2>Betting Options</h2>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th colSpan={2}>Options</th>
                        <th>Descriptions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="text-center">
                            4 Sets
                        </td>
                        <td>
                            <p>
                                Select the number you wish to bet on from 00 to 99; if the selected number falls into the Seventh Prize then
                                the player wins.
                            </p>
                            <p>
                                <strong>Note</strong>: If the selected number has appeared N times among the 4 results of the Seventh Prize
                                then the payout will be multiplied by N.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            Special
                        </td>
                        <td>
                            Select the number you wish to bet on from 00 to 99; if the selected number is the same as the last 2 digits of
                            the Special Prize then the player wins.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            Head
                        </td>
                        <td>
                            Select the number you wish to bet on from 0 to 9; if the selected number is the same as the tens digit of the
                            Special Prize then the player wins.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            Tail
                        </td>
                        <td>
                            Select the number you wish to bet on from 0 to 9; if the selected number is the same as the units digit of the
                            Special Prize then the player wins.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            27 Sets
                        </td>
                        <td>
                            <p>
                                Select the number you wish to bet on from 00 to 99; if the selected number is the same as the last 2 digits
                                of 27 results then the player wins.
                            </p>
                            <p>
                                <strong>Note</strong>: If the selected number has appeared the same as the last 2 digits N times among the
                                27 results then the payout will be multiplied by N.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className="text-center">
                            Others
                        </td>
                        <td className="text-center">Big</td>
                        <td>If the last 2 digits of the Special Prize &#62;= 50, then the player wins.</td>
                    </tr>
                    <tr>
                        <td className="text-center">Small</td>
                        <td>If the last 2 digits of the Special Prize &#60;= 49, then the player wins.</td>
                    </tr>
                    <tr>
                        <td className="text-center">Odd</td>
                        <td>If the last 2 digits of the Special Prize are Odd number, then the player wins.</td>
                    </tr>
                    <tr>
                        <td className="text-center">Even</td>
                        <td>If the last 2 digits of the Special Prize are Even number, then the player wins.</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <strong>Example:</strong>
                <ul className={Styles["many-example"]}>
                    <li>{BettingOptions4Sets()}</li>
                    <li>{BettingOptionsSpecial()}</li>
                    <li>{BettingOptionsHead()}</li>
                    <li>{BettingOptionsTail()}</li>
                    <li>{BettingOptions27Sets()}</li>
                </ul>
            </div>
        </li>
    );
};

const BettingOptions4Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>a) 4 Sets</div>
            <ul className="desc">
                <li>Place bet on two numbers: 07, 77 with Odds = 1:24</li>
                <li>Stake = 10</li>
                <li>Total Stake = 20</li>
            </ul>{" "}
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG Lottery</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>7th</td>
                        <td>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>14</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>94</span>
                            <span className={`bold ${Styles["number"]} ${Styles["text-red"]}`}>07</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Number 07 has appeared 2 times in the result of the Seventh Prize. Payout = (10 * 24) * 2 = 480</p>
        </>
    );
};
const BettingOptionsSpecial = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>b) Special </div>
            <ul className="desc">
                <li>Place bet on three numbers: 00, 62, 79 with Odds = 1:90</li>
                <li>Stake = 10</li>
                <li>Total Stake = 30</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG Lottery</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>Special</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>62</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>The number 62 is the same as the last 2 digits of the Special Prize. Payout = 10 * 90 = 900</p>
        </>
    );
};
const BettingOptionsHead = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>c) Head</div>
            <ul className="desc">
                <li>Place bet on three numbers: 0, 6, 9 with Odds = 1:9</li>
                <li>Stake = 10</li>
                <li>otal Stake = 30</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG Lottery</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>Special</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>090</span>
                                <span className={Styles["text-red"]}>6</span>
                                <span className={Styles[textRedLight]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>The number 6 is the same as the tens digit of the Special Prize. Payout = 10 * 9 = 90</p>
        </>
    );
};
const BettingOptionsTail = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>d) Tail</div>
            <ul className="desc">
                <li>Place bet on two numbers: 0, 5 with Odds = 1:9</li>
                <li>Stake = 10</li>
                <li>Total Stake = 20</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th>RNG Lottery</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styles["prize"]}>Special</td>
                        <td>
                            <div className={`bold ${Styles["number"]}`}>
                                <span className={Styles[textRedLight]}>0906</span>
                                <span className={Styles["text-red"]}>2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>All selected numbers are not the same as the units digit of the Special Prize. Payout = 0</p>
        </>
    );
};
const BettingOptions27Sets = () => {
    return (
        <>
            <div className={Styles[exampleTitle]}>e) 27 Sets</div>
            <ul className="desc">
                <li>Place bet on four numbers: 05, 12, 77, 85 with Odds = 1:3.6</li>
                <li>Stake = 10</li>
                <li>Total Stake = 40</li>
            </ul>
            <table className={`table text-center ${Styles[tableSmall]}`}>
                <thead>
                    <tr>
                        <th>Prizes</th>
                        <th colSpan={12}>RNG Lottery</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Special</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles[textRedLight]}>763</span>
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td colSpan={12} className="bold">
                            <span className={Styles["text-grey"]}>684</span>00
                        </td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>164</span>75
                        </td>
                        <td colSpan={6} className="bold">
                            <span className={Styles["text-grey"]}>507</span>06
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>3rd</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>339</span>12
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>665</span>66
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>228</span>83
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>516</span>76
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>451</span>05
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>321</span>82
                        </td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>08</span>69
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>03</span>60
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>01</span>79
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-grey"]}>84</span>05
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>5th</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>28</span>50
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>62</span>72
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>40</span>43
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>53</span>86
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>64</span>23
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>42</span>31
                        </td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>87
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>8</span>65
                        </td>
                        <td colSpan={4} className="bold">
                            <span className={Styles["text-grey"]}>2</span>92
                        </td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>97</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>26</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>49</span>
                        </td>
                        <td colSpan={3} className="bold">
                            <span className={Styles["text-red"]}>33</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Number 05 has appeared two times in 27 results. Payout = (10 * 3.6) * 2 = 72</p>
            <p>Number 12 has appeared one time in 27 results. Payout = 10 * 3.6 = 36</p>
        </>
    );
};

const renderPayouts = (odds: OddsProps, choiceMaxBet: ChoicesMaxBetProps, minBet: number, maxBet: number) => {
    return (
        <li className="guide-item">
            <h2>Payout</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio. Note, the Payout includes the initial stake.</li>
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
            </ul>
            <table className={`table text-center ${Styles["table-small"]}`}>
                <thead>
                    <tr>
                        <th colSpan={2}>Options</th>
                        <th>Payouts</th>
                        <th>Bet Limit (Min-Max)</th>
                        <th>Max Total Stake Per Round</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>4 Sets</td>
                        <td>1:{odds.Sets4}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.Sets4)}
                        </td>
                        <td rowSpan={9}>{numberWithCommas(maxBet)}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Special</td>
                        <td>1:{odds.special}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.special)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Head</td>
                        <td>1:{odds.head}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.head)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Tail</td>
                        <td>1:{odds.tail}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.tail)}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>27 Sets</td>
                        <td>1:{odds.Sets27}</td>
                        <td>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.Sets27)}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>Others</td>
                        <td>Big</td>
                        <td rowSpan={2}>1:{odds.others}</td>
                        <td rowSpan={2}>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.others)}
                        </td>
                    </tr>
                    <tr>
                        <td>Small</td>
                    </tr>
                    <tr>
                        <td>Odd</td>
                        <td rowSpan={2}>1:{odds.others}</td>
                        <td rowSpan={2}>
                            {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.others)}
                        </td>
                    </tr>
                    <tr>
                        <td>Even</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

const renderViewStatistic = () => {
    const statsList = "stats-list";
    const resultRow = "result-row";
    const statsResult = "stats-result";
    const subNumber = "sub-number";
    return (
        <li className="guide-item">
            <h2>Statistic</h2>
            <ul className="desc">
                <li>
                    Data statistics are based on the last two digits of 27 results of the RNG Lottery, to assist players in choosing their
                    favorite numbers.
                </li>
                <li>
                    Data statistics for each bet type on the last 100 rounds
                    <ul className={Styles[statsList]}>
                        <li>
                            <strong>4 Sets</strong>: statistics based on the results of the Seventh Prize.
                        </li>
                        <li>
                            <strong>Special</strong>: statistics based on the last 2 digits of the Special Prize.
                        </li>
                        <li>
                            <strong>27 Sets</strong>: statistics based on the last 2 digits of 27 results of 8 prizes.
                        </li>
                        <li>
                            <strong>Head</strong>: statistics based on the tens digit of the Special Prize.
                        </li>
                        <li>
                            <strong>Tail</strong>: statistics based on the units digit of the Special Prize.
                        </li>
                        <li>
                            <strong>Others (Big/Small, Odd/Even)</strong>: statistics of the winning rate on each bet option Big/Small,
                            Odd/Even.
                        </li>
                    </ul>
                    <ul className={Styles["many-example"]}>
                        <li>
                            <div className={Styles[exampleTitle]}>a) 4 Sets, Special, 27 Sets </div>
                            <ul className={Styles[statsList]}>
                                <li>
                                    10 numbers with most occurrences (shown in <span className={Styles["text-red"]}>red</span>)
                                </li>
                                <li>
                                    10 numbers with least occurrences (shown in <span className={Styles["text-blue"]}>blue</span>)
                                </li>
                            </ul>
                            <p className="bold">Example:</p>
                            <p>Data statistics in “4 Sets” bet type</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>44</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>24</span>
                                </div>
                                <p>number 44 has a total of 24 appearances in the 7th prize within the last 100 rounds</p>
                            </div>
                            <p>Data statistics in “27 Sets” bet type</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>00</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>0</span>
                                </div>
                                <p>number 00 did not appear in the last 2 digits of 27 results within the last 100 rounds.</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>b) Head, Tail</div>
                            <p>Count the occurrences of each number from 0-9</p>
                            <ul className={Styles[statsList]}>
                                <li>
                                    If the total appearances &#62; 10, will be displayed in <span className={Styles["text-red"]}>red</span>.
                                </li>
                                <li>
                                    If the total appearances &#60;= 10, will be displayed in{" "}
                                    <span className={Styles["text-blue"]}>blue</span>.
                                </li>
                            </ul>
                            <p className="bold">Example:</p>
                            <p>Data statistics in “Head” bet type</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>1</span>
                                    <span className={`${Styles[subNumber]} ${Styles["right"]} ${Styles["text-red"]}`}>32</span>
                                </div>
                                <p>number 1 has a total of 32 appearances in the tens digit of Special Prize within the last 100 rounds.</p>
                            </div>
                            <p>Data statistics in “Tail” bet type</p>
                            <div className={Styles[resultRow]}>
                                <div className={Styles[statsResult]}>
                                    <span className={Styles["number"]}>7</span>
                                    <span className={`${Styles[subNumber]} ${Styles["left"]} ${Styles["text-blue"]}`}>4</span>
                                </div>
                                <p>number 7 has a total of 4 appearances in the units digit of Special Prize within the last 100 rounds.</p>
                            </div>
                        </li>
                        <li>
                            <div className={Styles[exampleTitle]}>c) Others (Big/Small, Odd/Even)</div>
                            <p>Show winning rate (%) on each bet option Big/Small, Odd/Even.</p>
                            <p className="bold">Example:</p>
                            <div className={Styles["others"]}>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-red"]}`}>ODD</span>
                                    <span className={`${Styles[subNumber]}`}>48%</span>
                                </div>
                                <div className={Styles["result"]}>
                                    <span className={`${Styles["choice"]} ${Styles["text-white"]}`}>EVEN</span>
                                    <span className={`${Styles[subNumber]}`}>52%</span>
                                </div>
                            </div>
                            <p>The winning rate for bet option Odd is 48% and 52% for Even</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const LotteryGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName}, also known as “Lô Đề”, is an online lottery game that is very popular in Vietnam. The player places bet
                        on the numbers you like, the game determines the win or loss by matching the numbers based on 27 results of 8
                        prizes.
                    </p>
                    <ul className="desc">
                        <li className="contentBeforeEmpty">
                            <table className={`table text-center ${Styles["table-medium"]}`}>
                                <thead>
                                    <tr>
                                        <th>Prizes</th>
                                        <th colSpan={12}>RNG Lottery</th>
                                        <th>No. of Results</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Special</td>
                                        <td colSpan={12} className="bold">
                                            <span className={Styles["text-red"]}>76349</span>
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>First</td>
                                        <td colSpan={12} className="bold">
                                            68400
                                        </td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Second</td>
                                        <td colSpan={6} className="bold">
                                            16475
                                        </td>
                                        <td colSpan={6} className="bold">
                                            50706
                                        </td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>Third</td>
                                        <td colSpan={4} className="bold">
                                            33912
                                        </td>
                                        <td colSpan={4} className="bold">
                                            66566
                                        </td>
                                        <td colSpan={4} className="bold">
                                            22883
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            51676
                                        </td>
                                        <td colSpan={4} className="bold">
                                            45105
                                        </td>
                                        <td colSpan={4} className="bold">
                                            32182
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fourth</td>
                                        <td colSpan={3} className="bold">
                                            0869
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0360
                                        </td>
                                        <td colSpan={3} className="bold">
                                            0179
                                        </td>
                                        <td colSpan={3} className="bold">
                                            8405
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>Fifth</td>
                                        <td colSpan={4} className="bold">
                                            2850
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6272
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4043
                                        </td>
                                        <td rowSpan={2}>6</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="bold">
                                            5386
                                        </td>
                                        <td colSpan={4} className="bold">
                                            6423
                                        </td>
                                        <td colSpan={4} className="bold">
                                            4231
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sixth</td>
                                        <td colSpan={4} className="bold">
                                            287
                                        </td>
                                        <td colSpan={4} className="bold">
                                            865
                                        </td>
                                        <td colSpan={4} className="bold">
                                            292
                                        </td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Seventh</td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>97</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>26</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>42</span>
                                        </td>
                                        <td colSpan={3} className="bold">
                                            <span className={Styles["text-red"]}>33</span>
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={13}></td>
                                        <td className="bold">Total = 27</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
                {renderGameRule(maxbet)}
                {renderBettingOptions()}
                {renderPayouts(odds, choices_maxbet, minbet, maxbet)}
                {renderViewStatistic()}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default LotteryGuideVI;
