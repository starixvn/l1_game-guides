import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { useTheme } from "next-themes";
import Styles from "../fish-prawn-crab-vip.module.scss";
import { Themes } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";

export const renderListIcon = (theme: string | undefined) => {
    const widthIcon1 = theme === Themes.blue ? 100 : 75;
    const widthIcon2 = theme === Themes.blue ? 95 : 70;
    return (
        <>
            <img src={`/static/images/fish-prawn-crab-vip/stag.png`} alt="stag" width={widthIcon2} height={widthIcon2} loading="lazy" />
            <img src={`/static/images/fish-prawn-crab-vip/gourd.png`} alt="gourd" width={widthIcon1} height={widthIcon1} loading="lazy" />

            <img
                src={`/static/images/fish-prawn-crab-vip/crooster.png`}
                alt="crooster"
                width={widthIcon2}
                height={widthIcon2}
                loading="lazy"
            />
            <img src={`/static/images/fish-prawn-crab-vip/fish.png`} alt="fish" width={widthIcon1} height={widthIcon1} loading="lazy" />
            <img src={`/static/images/fish-prawn-crab-vip/crab.png`} alt="crab" width={widthIcon1} height={widthIcon1} loading="lazy" />
            <img src={`/static/images/fish-prawn-crab-vip/prawn.png`} alt="prawn" width={widthIcon1} height={widthIcon1} loading="lazy" />
        </>
    );
};
const FishPrawnCrabGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an enhanced version of the traditional game Fish Prawn Crab with a new graphic interface and more
                        betting options. The game is played with three standard dice, and each die contains six unique symbols (fish, prawn,
                        crab, rooster, gourd, and stag). The objective of the game is to predict the outcome of the dice roll, players place
                        bets on which symbols will appear.
                    </p>
                    <div className={`${Styles["wrapper-icon"]} icon-wrapper`}>
                        {renderListIcon(theme)}
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
                        <li>
                            Select the chip value you wish to play. Players can bet on one or more betting options shown on the game table.
                        </li>
                        <li> All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                        <li>Once the betting time has expired, the dice cup will be removed and the result is shown.</li>
                        <li>The maximum total stake per round is {maxBetFollowChoice?.maxBetMain}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc">
                        <li>
                            The winning amount is calculated according to the betting odds. <strong>Note,</strong> the Payout includes the
                            initial stake.
                        </li>
                        <li>All winning amounts are instantly added to your account balance when bets are settled.</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Options</th>
                                            <th>Winning Conditions</th>
                                            <th className={Styles["odd-width"]}>Odds</th>
                                            <th className={Styles["min-max-width"]}>
                                                Bet Limit <br></br>(Min - Max)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>Specific Symbol (Fish, Prawn, Crab, Rooster, Gourd, Stag)</td>
                                            <td className="text-start">If the chosen symbol appears once. </td>
                                            <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                            <td rowSpan={5}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFish}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">If the chosen symbol appears twice.</td>
                                            <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">If the chosen symbol appears three times. </td>
                                            <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Mountain (Rooster, Gourd, Stag)</td>
                                            <td className="text-start">
                                                Place a bet on the Mountain group of 3 symbols. The player will win if having at least two
                                                symbols from the Mountain group appear in the result.
                                            </td>
                                            <td>{formatOdds(odds?.mountain, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Ocean (Fish, Prawn, Crab)</td>
                                            <td className="text-start">
                                                Place a bet on the Ocean group of 3 symbols. The player will win if having at least two
                                                symbols from the Ocean group appear in the result.
                                            </td>
                                            <td>{formatOdds(odds?.ocean, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td>Any Triple</td>
                                            <td className="text-start">To win this bet, all three dice must show the same symbol.</td>
                                            <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                            <td>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <strong>Example:</strong>
                    </p>
                    <ul className="desc">
                        <li>
                            <strong> Specific Symbol</strong>
                            <ul className="detail">
                                <li>Place a bet on “Fish” and the result is Fish, Gourd, Crab then the player wins.</li>
                                <li>Place a bet on “Fish” and the result is Gourd, Crab, Crab then the player loses.</li>
                            </ul>
                        </li>

                        <li>
                            <strong> Ocean/ Mountain</strong>
                            <ul className="detail">
                                <li>Place a bet on the Ocean group and the result is Fish, Prawn, Stag then the player wins.</li>
                                <li>Place a bet on the Mountain group and the result is Fish, Stag, Stag then the player wins.</li>
                            </ul>
                        </li>
                        <li>
                            <strong> Any Triple</strong>
                            <ul className="detail">
                                <li>Place a bet on Any Triple option and the result is Crab, Crab, Crab then the player wins.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideEN;
