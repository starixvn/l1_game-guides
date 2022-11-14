import React from "react";
import { MaxBetChoicesProps, GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../fantan.module.scss";
import { renderTermsAndConditionsVI } from "../../../shared/index";
import { renderMD5EN } from "../../../shared/md5-count-down-timer/en";

const renderGameRule = (maxBet: string | number | undefined) => {
    return (
        <>
            <h2>Game rules</h2>
            <ul className="desc">
                <li>
                    At the beginning of a round, Dealer will use a cup to take a random number of beads on the table. When betting time is
                    finished, Dealer will separate the taken beads into groups of four until the remaining beads are equal or less than 4 –
                    and that is the winning result.
                </li>
                <li>
                    <b>Example: </b>
                    <ul className="detail">
                        <li>
                            The randomly taken number of beads is 30 and separated into groups of four:
                            <p>7 x 4 + 2 = 30. The remaining beads are 2 =&gt; the round result is 2</p>
                        </li>
                        <li>
                            The randomly taken number of beads is 40 and separated into groups of four:
                            <p>9 x 4 + 4 = 40. The remaining beads are 4 =&gt; the round result is 4</p>
                        </li>
                    </ul>
                    <div className="table-container">
                        <table className="table table-medium">
                            <thead>
                                <tr className="text-center">
                                    <th>Bet Type</th>
                                    <th>Bet Option</th>
                                    <th>Winning Condition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>Odd Even</td>
                                    <td>Odd</td>
                                    <td>The remaining beads are Odd number</td>
                                </tr>
                                <tr>
                                    <td>Even</td>
                                    <td>The remaining beads are Even number</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4}>Fan</td>
                                    <td>1 Fan</td>
                                    <td>The remaining beads are 1</td>
                                </tr>
                                <tr>
                                    <td>2 Fan</td>
                                    <td>The remaining beads are 2</td>
                                </tr>
                                <tr>
                                    <td>3 Fan</td>
                                    <td>The remaining beads are 3</td>
                                </tr>
                                <tr>
                                    <td>4 Fan</td>
                                    <td>The remaining beads are 4</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4}>Kwok</td>
                                    <td>1 2 Kwok</td>
                                    <td>The remaining beads are 1 or 2</td>
                                </tr>
                                <tr>
                                    <td>2 3 Kwok</td>
                                    <td>The remaining beads are 2 or 3</td>
                                </tr>
                                <tr>
                                    <td>3 4 Kwok</td>
                                    <td>The remaining beads are 3 or 4</td>
                                </tr>
                                <tr>
                                    <td>4 1 Kwok</td>
                                    <td>The remaining beads are 1 or 4</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4}>Chun</td>
                                    <td>2 3 4 Chun</td>
                                    <td>The remaining beads are 2, 3 or 4</td>
                                </tr>
                                <tr>
                                    <td>1 3 4 Chun</td>
                                    <td>The remaining beads are 1, 3 or 4</td>
                                </tr>
                                <tr>
                                    <td>1 2 4 Chun</td>
                                    <td>The remaining beads are 1, 2 or 4</td>
                                </tr>
                                <tr>
                                    <td>1 2 3 Chun</td>
                                    <td>The remaining beads are 1, 2 or 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li>
                    Player selects the chip value and places it on the desired bet options. All bets must be placed before the betting time
                    expires. Note that, the placed bets cannot be canceled.
                </li>
                <li>
                    The player can place bets on any available options except for Odd and Even, the player can only bet on either Odd or
                    Even.
                </li>
                <li>
                    Người chơi có thể đặt cược ở bất kì cửa cược có sẵn trên bàn; ngoại trừ cửa cược Chẵn và Lẻ, chỉ có thể cược vào một
                    trong hai cửa cược này.
                </li>
                <li>The maximum total stake per round is {maxBet}.</li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <li className="guide-item">
            <h2>Payouts</h2>
            <ul className="desc">
                <li>
                    The winning amount is calculated according to the payout ratio.
                    <p>
                        <b>Note</b>: the payouts include the initial stake.
                    </p>
                </li>
                <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
            </ul>
            <div className="table-container">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Bet Type</th>
                            <th>Bet Option</th>
                            <th>Payouts </th>
                            <th className={Styles["bet-limit-width"]}>Bet Limit (Min-Max)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>Odd Even</td>
                            <td className={Styles["text-left"]}>Odd</td>
                            <td rowSpan={2}>1:{odds?.even}</td>
                            <td rowSpan={2}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>Even</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Fan</td>
                            <td className={Styles["text-left"]}>1 Fan</td>
                            <td rowSpan={4}>1:{odds?.fan1}</td>
                            <td rowSpan={4}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFan1}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>2 Fan</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>3 Fan</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>4 Fan</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Kwok</td>
                            <td className={Styles["text-left"]}>1 2 Kwok</td>
                            <td rowSpan={4}>1:{odds?.kwok12}</td>
                            <td rowSpan={4}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetKwok12}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>2 3 Kwok</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>3 4 Kwok</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>4 1 Kwok</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Chun</td>
                            <td className={Styles["text-left"]}>2 3 4 Chun</td>
                            <td rowSpan={4}>1:{odds?.chun123}</td>
                            <td rowSpan={4}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChun123}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>1 3 4 Chun</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>1 2 4 Chun</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>1 2 3 Chun</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderMD5Example = (gameName: string, gameId: any) => {
    return (
        <>
            <p className="content">
                <strong> Example:</strong> check the authenticity and transparency of game results
            </p>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step1_vi.png?v=6`} alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after it is published.
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step2_vi.png?v=6`} alt="md5-result" />
                    <div>
                        <b>Note</b>: 40 corresponds to the random number of beads taken at the beginning of the game round
                    </div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step3_vi.png?v=1`} alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong>Press the “hash darling, hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step4_vi.png?v=1`} alt="md5-checksum" />
                </li>
            </ul>
        </>
    );
};

const FantanGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, gameId, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} is a Casino game that is pretty popular all across Asia. It is played with 150 white beads, there are 14
                        bet options on the table, and Player will predict and place bet on which bet option will win.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                {renderPayouts(odds, maxBetFollowChoice)}
                <li id="md5" className="guide-item">
                    {renderMD5EN()}
                    {renderMD5Example(gameName, gameId)}
                </li>
                {renderTermsAndConditionsVI(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default FantanGuideEN;
