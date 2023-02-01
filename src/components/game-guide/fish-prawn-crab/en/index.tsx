import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

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
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
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
                        <li>
                            When the betting time has expired, the dice results will be displayed. If the symbol you have bet on shows up,
                            you win.
                        </li>
                        <li>
                            Symbols will be numbered from 1 to 6 according to their position on the game table. And the assigned number will
                            be shown during the setting time only.
                        </li>
                        <li>
                            Min bet and Max bet must be between {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice} and
                            the maximum total stake per round is {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>
                            Betting odds:
                            <ul className="detail">
                                <li>{formatOdds(odds?.single, fractionalOddsFormat)} if the chosen symbol appears once.</li>
                                <li>{formatOdds(odds?.double, fractionalOddsFormat)} if the chosen symbol appears twice.</li>
                                <li>{formatOdds(odds?.triple, fractionalOddsFormat)} if the chosen symbol appears three times.</li>
                            </ul>
                        </li>
                        <li>
                            Players can bet on one or more betting options shown on the game table. Note, placed bets cannot be canceled.
                        </li>
                        <li>
                            The winning amount is calculated according to the betting odds. Note, the Payout includes the initial stake.
                        </li>
                        <li>
                            All winning amounts are instantly added to your account balance when bets are settled.
                            <div>
                                <strong>Example:</strong>
                                <ul className="detail">
                                    <li>
                                        Betting 10 on “Fish” and having one Fish symbol turns up, then you will be paid{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong>
                                    </li>
                                    <li>
                                        Betting 10 on “Crab” and having two Crab symbols turn up, then you will be paid{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))}</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && <MD5
                    locale={props.locale}
                    step1ImageUrl={"/static/images/fish-prawn-crab/md5_step1_en.png?v=4"}
                    step2ImageUrl={"/static/images/fish-prawn-crab/md5_step2_en.png?v=4"}
                    step3ImageUrl={"/static/images/fish-prawn-crab/md5_step3_en.png?v=4"}
                    step4ImageUrl={"/static/images/fish-prawn-crab/md5_step4_en.png?v=4"}
                    note={<div>
                        Note: From the left to right, &#123;5, 1, 1&#125; correspond to the assigned number of each symbol that
                        appears on three dice
                    </div>}
                />}
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideEN;
