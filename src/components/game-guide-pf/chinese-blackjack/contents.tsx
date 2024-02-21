import { T, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";

import { GameConfigs } from "../../game-guide/type";
import Styles from "./chinese-blackjack-pf-game.module.scss";
import { ChineseBlackjackPFContentsProps } from "./type";

const renderGameRules = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns: "ColorGame" })}</li>
                <li>{t("gamerules_para_2", { ns: "ColorGame" })}</li>
                <li>{t("gamerules_para_3", { ns: "ColorGame" })}</li>
                <li>
                    {" "}
                    <T
                        keyName="gamerules_para_4"
                        params={{ minmaxvalue: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                    />
                </li>
            </ul>
        </li>
    );
};

const renderPayout = (
    t: Function,
    gameConfigs: GameConfigs,
    userStakeLevel: UserStakeLevelProps | undefined,
    fractionalOddsFormat?: boolean
) => {
    const { odds, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetYellow = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.yellow));
    const maxBetHot = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.hot));

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{<Markup content={t("payouts_para_1", { ns: "ColorGame" })} />}</li>
                <li>{t("payouts_para_2", { ns: "ColorGame" })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["description"]}`}>{t("header_description", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: "Common" })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>
                                        <Markup content={t("header_betlimit", { ns: "Common" })} />{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3}>{t(`option_specific_color`, { ns: "ColorGame" })}</td>
                                    <td>{t(`desc_specific_color_1`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                    <td rowSpan={3} className={Styles["nowrap"]}>
                                        {minBetMain} - {maxBetYellow}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t(`desc_specific_color_2`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t(`desc_specifci_color_3`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t(`option_hot`, { ns: "ColorGame" })}</td>
                                    <td>{t(`desc_hot`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.hot, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {minBetMain} - {maxBetHot}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t(`option_cold`, { ns: "ColorGame" })}</td>
                                    <td>{t(`desc_cold`, { ns: "ColorGame" })}</td>
                                    <td>{formatOdds(odds?.cold, fractionalOddsFormat)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const renderIntro = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Where Transparency Meets Trust!</h1>
                <p>
                    Provably Fair ensures trust in {`{gamename}`}, making it 100% guaranteed fair and ensuring the transparency of every
                    round result.
                </p>

                <img className={Styles["wrapper-img"]} src="./static/images/pf/pf.png" alt="pf"></img>
            </div>
        </>
    );
};

const renderPFInfo = () => {
    return (
        <li className="guide-item">
            <h2>What is Provably Fair?</h2>
            <div className="content">
                <strong>Provably fairness</strong> is a technology-based algorithm that can be analyzed and tested for fairness. It allows
                players to manually and personally verify the fairness of the games they play online.
            </div>
        </li>
    );
};

const renderPFWork = () => {
    return (
        <>
            <li className="guide-item">
                <h2>How does Provably Fair work?</h2>
                <div className="content">
                    The “Provably Fair” system allows both the <strong>Casino Operator</strong> and <strong>Players</strong> to contribute
                    to the results generated.
                </div>

                <img className={Styles["wrapper-img"]} src="./static/images/pf/fair-result.png" alt="pf"></img>
                <p>There are 3 main parameters in Provably Fair</p>
                <ul className="desc">
                    <li>
                        <strong>Server Seed</strong> is provided by the Game Server. It is not revealed to the Player until the result is
                        published.
                    </li>
                    <li>
                        <strong>Client Seed</strong> is a set of characters provided by the Player’s browser and can be adjusted. The Casino
                        Operator {`doesn't`}
                        know about this seed until the Player places the bet. This is a key factor in knowing the Player played a part in
                        the game’s result randomness.
                    </li>
                    <li>
                        <strong>Nonce</strong> is simply a number that increments as every new bet is made. Not every Casino provider uses
                        this variable, though. {`It's`} optional.
                    </li>
                </ul>
                <p>
                    The chart below outlines how the Server Seed, Client Seed, and Nonce are merged and transformed into the final result.{" "}
                </p>
                <div className={Styles["center-img"]}>
                    <img src="./static/images/pf/flow-final-result.png" alt="pf"></img>
                </div>
            </li>
        </>
    );
};

const renderApplyPF = () => {
    return (
        <>
            <li className="guide-item">
                <h2>Apply Provably Fair into Chinese Blackjack</h2>
                <div className={Styles["center-img"]}>
                    <img src="./static/images/pf/final-result.png" alt="pf"></img>
                </div>
                <p>In Chinese Blackjack, Server Seed and Client Seed are two fundamental parts of the provably fair algorithms</p>
                <ul className="desc">
                    <li>
                        <strong>Server Seed:</strong> is the order of card deck that is randomly generated at the beginning of the game
                        round
                    </li>

                    <li>
                        <strong>Client Seed:</strong> is the position where the Player wants to cut the card deck
                    </li>
                </ul>
            </li>
        </>
    );
};

const ChineseBlackjackPFContents: React.FC<ChineseBlackjackPFContentsProps> = ({
    gameConfigs,
    fractionalOddsFormat,
    locale,
    userStakeLevel,
}) => {
    const { t } = useTranslate(["ColorGame", "Common"]);

    return (
        <div>
            {renderIntro()}
            <ul className={`game-guide`}>
                {renderPFInfo()}
                {renderPFWork()}
                {renderApplyPF()}
            </ul>
        </div>
    );
};

export default ChineseBlackjackPFContents;
