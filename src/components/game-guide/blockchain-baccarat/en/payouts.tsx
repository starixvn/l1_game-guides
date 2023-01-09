import React from "react";
import Styles from "../blockchain-baccarat.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import { Markup } from "interweave";

const Payout: React.FunctionComponent<{ fractionalOddsFormat: any, odds: any, maxBetFollowChoice: any, t: any }> = (
    { fractionalOddsFormat, odds, maxBetFollowChoice, t }) => {
    return (
        <>
            <h2>{t("payouts.header")}</h2>
            <ul className="desc">
                {
                    Object.entries(t('payouts.descriptions.details', { returnObjects: true })).map(([line, description]) => (
                        <li key={line}>{description}</li>))
                }

                <li className="contentBeforeEmpty">
                    <Markup content={t("payouts.descriptions.noted")} />
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th className={Styles["payouts-option-width"]}>{t("payouts.descriptions.options")}</th>
                                    <th>{t("payouts.descriptions.odds")}</th>
                                    <th><Markup content={t("payouts.descriptions.betLimit")} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("payouts.descriptions.player")}</td>
                                    <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("payouts.descriptions.banker")}</td>
                                    <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts.descriptions.big")}</td>
                                    <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts.descriptions.small")}</td>
                                    <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts.descriptions.tie")}</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                    <td rowSpan={3}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("payouts.descriptions.playerPair")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerPair, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts.descriptions.bankerPair")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Payout;
