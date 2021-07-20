import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { ChoicesMaxBetProps, GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../three.module.scss";
import { locales } from "../../../../common/constants";

const renderGameRule = (odds: OddsProps, maxbet: number) => {
    const bet = 10;
    const winRed = numberWithCommas(bet * odds.red);
    const winDiamonds = numberWithCommas(bet * odds.diamonds);
    const imgRed = "img-red";
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Select the chip value you wish to play. Players can bet on one or more betting options shown on the game table.</li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>Once the betting time has expired, cards will be turned up.</li>
                <li>The maximum total stake per round is {numberWithCommas(maxbet)}</li>
                <li>
                    The standard deck with 52 cards (excluding Joker) is shuffled after every round.{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>Options</th>
                                    <th>Winning Conditions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start">Red</td>
                                    <td className="text-start">Having at least 2 cards are Diamonds or Hearts in the result.</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Black</td>
                                    <td className="text-start">Having at least 2 cards are Spades or Clubs in the result.</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Diamonds</td>
                                    <td className="text-start">Having at least 1 card is Diamonds in the result.</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Hearts</td>
                                    <td className="text-start">Having at least 1 card is Hearts in the result. </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Spades</td>
                                    <td className="text-start">Having at least 1 card is Spades in the result.</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Clubs</td>
                                    <td className="text-start">Having at least 1 card is Clubs in the result. </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>Note:</strong> For Diamonds, Hearts, Spades, and Clubs option, the payout will not change if the result has more
                than 1 card of the same suit.
            </p>
            <p>
                <strong>Example:</strong>
            </p>
            <ul className="desc">
                <li>
                    Bet 10 on Red option. Result: Diamonds (<span className={Styles[imgRed]}>♦</span>), Hearts (
                    <span className={Styles[imgRed]}>♥</span>), Clubs (<span className={Styles["img-black"]}>♣</span>).<br></br> Payout ={" "}
                    {bet} x {odds.red} = {winRed}
                </li>
                <li>
                    Bet 10 on Diamonds option. Result: Diamonds (<span className={Styles[imgRed]}>♦</span>), Diamonds (
                    <span className={Styles[imgRed]}>♥</span>),Clubs (<span className={Styles["img-black"]}>♣</span>).<br></br> Payout ={" "}
                    {bet} x {odds.diamonds} = {winDiamonds}
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps, minBet: number, choiceMaxBet: ChoicesMaxBetProps) => {
    return (
        <li className="guide-item">
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
                                    <th>Payouts </th>
                                    <th>Bet Limit (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start">Red</td>
                                    <td rowSpan={2}>1:{odds.red}</td>
                                    <td rowSpan={2}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.red)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Black</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Diamonds</td>
                                    <td rowSpan={4}>1:{odds.diamonds}</td>
                                    <td rowSpan={4}>
                                        {numberWithCommas(minBet)} - {numberWithCommas(choiceMaxBet.diamonds)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Hearts</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Spades</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Clubs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderChoiceImage = (locale = "en") => {
    const imgCustomize = "img-customize";
    const wrapperImg = "wrapper-img";
    const prefixLocale = locale === locales.en ? "_en" : "";
    return (
        <>
            <div className={Styles[wrapperImg]}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["red-en"] : Styles["red"]}`}
                    src={`./static/images/three-cards/table_text_red${prefixLocale}.png`}
                ></img>
            </div>
            <div className={Styles[wrapperImg]}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["black-en"] : Styles["black"]}`}
                    src={`./static/images/three-cards/table_txt_black${prefixLocale}.png`}
                ></img>
            </div>
            <div className={Styles[wrapperImg]}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["diamond"]}`}
                    src="./static/images/three-cards/table_icon_diamond.png"
                ></img>
            </div>
            <div className={Styles[wrapperImg]}>
                <img className={`${Styles[imgCustomize]} ${Styles["heart"]}`} src="./static/images/three-cards/table_icon_heart.png"></img>
            </div>
            <div className={Styles[wrapperImg]}>
                <img className={Styles[imgCustomize]} src="./static/images/three-cards/table_icon_spade.png"></img>
            </div>
            <div className={Styles[wrapperImg]}>
                <img className={Styles[imgCustomize]} src="./static/images/three-cards/table_icon_club.png"></img>
            </div>
        </>
    );
};

const ThreeCardsGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet, choices_maxbet } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is another exciting card game that is played with one standard 52-card deck (excluding Joker). There are
                        6 betting options including Red, Black, Diamonds (<span className={Styles["img-red"]}>♦</span>), Hearts (
                        <span className={Styles["img-red"]}>♥</span>), Spades (<span className={Styles["img-black"]}>♠</span>), and Clubs (
                        <span className={Styles["img-black"]}>♣</span>). The objective of this game is to predict the suit of 3 cards drawn
                        for each round. If the outcome matches the player’s bet, the player wins.
                    </p>
                    <div className={Styles["container-img"]}>
                        {renderChoiceImage(locales.en)}
                        <p>Red</p>
                        <p>Black</p>
                        <p>Diamonds</p>
                        <p>Hearts</p>
                        <p>Spades</p>
                        <p>Clubs</p>
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxbet)}</li>

                {renderPayouts(odds, minbet, choices_maxbet)}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default ThreeCardsGuideEN;
