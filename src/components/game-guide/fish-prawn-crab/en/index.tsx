import React from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";

export const renderIconChoice = () => {
    return (
        <>
            <div className="symbol-size icon-nai"></div>
            <div className="symbol-size icon-bau"></div>
            <div className="symbol-size icon-ga"></div>
            <div className="symbol-size icon-ca"></div>
            <div className="symbol-size icon-cua"></div>
            <div className="symbol-size icon-tom"></div>
        </>
    );
};

const FishPrawnCrabGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName}, also known as Hoo Hey How, is a popular game in Asia using three dice. Each dice contains six unique
                        symbols (fish, prawn, crab, rooster, gourd, and stag). There are 6 betting options available, one for each symbol.
                        Players place bets on which symbols will appear.
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">Stag</div>
                        <div className="text">Gourd</div>
                        <div className="text">Rooster</div>
                        <div className="text">Fish</div>
                        <div className="text">Crab</div>
                        <div className="text">Prawn</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc">
                        <li>The dice cup will be shaken at the beginning of the game round.</li>
                        <li>When the betting time has expired, the dice results will be displayed. If the symbol you have bet on shows up, you win.</li>
                        <li>Symbols will be numbered from 1 to 6 according to their position on the game table. And the assigned number will be shown during the setting time only.</li>                        
                        <li>
                            Min bet and Max bet must be between {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice} and
                            the maximum total stake per round is {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Payouts:
                            <ul className="detail">
                                <li>1:{odds?.single} if the chosen symbol appears once.</li>
                                <li>1:{odds?.double} if the chosen symbol appears twice.</li>
                                <li>1:{odds?.triple} if the chosen symbol appears three times.</li>
                            </ul>
                        </li>
                        <li>
                            Players can bet on one or more betting options shown on the game table. Note, placed bets cannot be canceled.
                        </li>
                        <li>
                            The winning amount is calculated according to the payout ratio. Note, the Payout includes the initial stake.
                        </li>
                        <li>
                            All winning amounts are instantly added to your account balance when bets are settled.
                            <div>
                                <strong>Example:</strong>
                                <ul className="detail">
                                    <li>
                                        Betting 10 on “Fish” and having one Fish symbol turns up, then you will be paid{" "}
                                        <strong>{10 * (odds?.single ?? 0)}</strong>
                                    </li>
                                    <li>
                                        Betting 10 on “Crab” and having two Crab symbols turn up, then you will be paid{" "}
                                        <strong>{10 * (odds?.double ?? 0)}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>MD5 (Message-Digest algorithm 5) </h2>
                    <ul className="style-number-dot">
                        <li className="number-dot">
                            <span className="title-text">MD5 technology</span>
                            <ul className="desc">
                                <li>MD5 that allows players to check the authenticity and transparency of game results through 3rd parties.</li>
                                <li>The game results will be randomly generated by the system before the player places a bet.</li>
                                <li>
                                    Players can manually check whether or not the results generated before betting (<strong>MD5</strong> key) and
                                    the publishing results (<strong>Result</strong>) are matched.
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot">
                            <span className="title-text">MD5 Validation</span>
                            <ul className="desc">
                                <li>
                                    <strong>Step 1</strong>: Copy the <strong>MD5</strong> key before the result is announced.
                                </li>
                                <li>
                                    <strong>Step 2</strong>: Copy <strong>Result</strong> after the system publishes the result.
                                </li>
                                <li>
                                    <strong>Step 3</strong>: Go to{" "}
                                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                                        https://md5.services/
                                    </a>{" "}
                                    and paste the Result into the MD5 box.
                                </li>
                                <li>
                                    <strong>Step 4</strong>: Press the <strong>“hash darling, hash!”</strong> button and compare the newly generated
                                    <strong> checksum MD5</strong> string with the MD5 string in <strong>Step 1</strong>.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="content">
                        If two strings are matching, prove that the outcome of that game round is transparent and the game result is unchanged from
                        the random result generated by the system before betting.
                    </div>
                    <div className="content">
                <strong> Example:</strong> check the authenticity and transparency of {gameName} game results
            </div>
            <ul className="desc">
                <li>
                    <strong>Step 1:</strong> Copy the MD5 Key before the result is announced.
                    <img className="format-img auto-center" src="/static/images/fish-prawn-crab/md5_step1_en.png?v=3" alt="md5-string" />
                </li>
                <li>
                    <strong>Step 2:</strong> Copy the Result after the system publishes the buttons’ result.
                    <img className="format-img auto-center" src="/static/images/fish-prawn-crab/md5_step2_en.png?v=3" alt="md5-result" />
                    <div>Note: From the left to right, &#123;5, 1, 1&#125; correspond to the assigned number of each symbol that appears on three dice</div>
                </li>
                <li>
                    <strong>Step 3:</strong> Go to{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    and paste the Result into the MD5 box.
                    <img className="format-img auto-center" src="/static/images/fish-prawn-crab/md5_step3_en.png?v=1" alt="hash-darling" />
                </li>
                <li>
                    <strong>Step 4:</strong> Press the “hash, darling hash!” button and compare the newly generated checksum MD5 string with
                    the MD5 string in Step 1.
                    <img className="format-img auto-center" src="/static/images/fish-prawn-crab/md5_step4_en.png?v=1" alt="md5-checksum" />
                </li>
            </ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideEN;
