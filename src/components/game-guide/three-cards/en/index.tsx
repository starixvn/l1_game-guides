import React from "react";
import { useTheme } from "next-themes";
import { useTranslation, TFunction } from "next-i18next";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { locales, Themes } from "../../../../common/constants";
import Styles from "../three.module.scss";

const renderGameRule = (odds: OddsProps | undefined, maxBet: string | undefined) => {
    const bet = 10;
    const winRed = bet * (odds?.red ?? 0);
    const winDiamonds = bet * (odds?.diamonds ?? 0);
    const imgRed = "img-red";
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc">
                <li>Players can bet on one or more betting options shown on the game table.</li>
                <li>All bets must be placed before the betting time expires. Note, placed bets cannot be canceled.</li>
                <li>Once the betting time has expired, cards will be turned up.</li>
                <li>The maximum total stake per round is {maxBet}</li>
                <li>
                    The standard deck with 52 cards (excluding Joker) is shuffled after every round.{" "}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Options</th>
                                    <th>Winning Conditions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Red</td>
                                    <td className="text-start">Having at least 2 cards are Diamonds or Hearts in the result.</td>
                                </tr>
                                <tr>
                                    <td>Black</td>
                                    <td className="text-start">Having at least 2 cards are Spades or Clubs in the result.</td>
                                </tr>
                                <tr>
                                    <td>Diamonds</td>
                                    <td className="text-start">Having at least 1 card is Diamonds in the result.</td>
                                </tr>
                                <tr>
                                    <td>Hearts</td>
                                    <td className="text-start">Having at least 1 card is Hearts in the result. </td>
                                </tr>
                                <tr>
                                    <td>Spades</td>
                                    <td className="text-start">Having at least 1 card is Spades in the result.</td>
                                </tr>
                                <tr>
                                    <td>Clubs</td>
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
                    {bet} x {odds?.red} = {winRed}
                </li>
                <li>
                    Bet 10 on Diamonds option. Result: Diamonds (<span className={Styles[imgRed]}>♦</span>), Diamonds (
                    <span className={Styles[imgRed]}>♦</span>), Clubs (<span className={Styles["img-black"]}>♣</span>).<br></br> Payout ={" "}
                    {bet} x {odds?.diamonds} = {winDiamonds}
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <li className="guide-item">
            <h2>Payouts</h2>
            <ul className="desc">
                <li>The winning amount is calculated according to the payout ratio.</li>
                <li>The Payout includes the initial stake.</li>
                <li>
                    All winning amounts are instantly added to your account balance when bets are settled.
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>Options</th>
                                    <th>Payouts </th>
                                    <th>Bet Limit (Min - Max)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Red</td>
                                    <td rowSpan={2}>1:{odds?.red}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Black</td>
                                </tr>
                                <tr>
                                    <td>Diamonds</td>
                                    <td rowSpan={4}>1:{odds?.diamonds}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hearts</td>
                                </tr>
                                <tr>
                                    <td>Spades</td>
                                </tr>
                                <tr>
                                    <td>Clubs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export const renderChoiceImage = (locale = "en", isSM: boolean, t: TFunction) => {
    const imgCustomize = "img-customize";
    const wrapperImg = "wrapper-img";
    const prefixLocale = locale === locales.en ? "_en" : "";
    const classMobile = isSM ? "sm" : "";

    return (
        <>
            <div className={`${Styles[wrapperImg]} ${Styles["red"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["red-en"] : Styles["red"]} ${Styles[classMobile]}`}
                    src={`./static/images/three-cards/table_text_red${prefixLocale}.png`}
                    alt="red"
                ></img>
                <p>{t("threecards:red")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["black"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === locales.en ? Styles["black-en"] : Styles["black"]} ${
                        Styles[classMobile]
                    }`}
                    src={`./static/images/three-cards/table_txt_black${prefixLocale}.png`}
                    alt="black"
                ></img>
                <p>{t("threecards:black")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["diamond"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["diamond"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_diamond.png"
                    alt="diamond"
                ></img>
                <p>{t("threecards:diamonds")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["heart"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["heart"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_heart.png"
                    alt="heart"
                ></img>

                <p>{t("threecards:hearts")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["spade"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["spade"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_spade.png"
                    alt="spade"
                ></img>
                <p>{t("threecards:spades")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["club"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["club"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_club.png"
                    alt="club"
                ></img>
                <p>{t("threecards:clubs")}</p>
            </div>
        </>
    );
};

const ThreeCardsGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isSM = theme === Themes.blue ? false : true;
    const { t } = useTranslation([gameName.toLocaleLowerCase(), "threecards"]);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className={`content ${Styles["content-customize"]}`}>
                        {gameName} is another exciting card game that is played with one standard 52-card deck (excluding Joker). There are
                        6 betting options including Red, Black, Diamonds (<span className={Styles["img-red"]}>♦</span>), Hearts (
                        <span className={Styles["img-red"]}>♥</span>), Spades (<span className={Styles["img-black"]}>♠</span>), and Clubs (
                        <span className={Styles["img-black"]}>♣</span>). The objective of this game is to predict the suit of 3 cards drawn
                        for each round. If the outcome matches the player’s bet, the player wins.
                    </p>
                    <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>{renderChoiceImage(locales.en, isSM, t)}</div>
                </li>
                <li className="guide-item">{renderGameRule(odds, maxBetFollowChoice?.maxBetMain)}</li>

                {renderPayouts(odds, maxBetFollowChoice)}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default ThreeCardsGuideEN;
