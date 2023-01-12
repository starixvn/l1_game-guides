import React from "react";
import Styles from "./base-baccarat.module.scss";
import { Markup } from "interweave";
import { formatOdds } from "../../../../helpers/number-helper";

interface PayoutsDescriptions {
    details: Array<string>;
    noted: string;
    options: string;
    odds: string;
    betLimit: string;
    player: string;
    banker: string;
    big: string;
    small: string;
    tie: string;
    playerPair: string;
    bankerPair: string;
}

export interface BaccaratPayoutResources {
    header: string;
    descriptions: PayoutsDescriptions;
}

const BaseBaccaratPayout: React.FunctionComponent<{
    fractionalOddsFormat: any,
    odds: any,
    maxBetFollowChoice: any,
    resources: BaccaratPayoutResources
}> = (
    { fractionalOddsFormat, odds, maxBetFollowChoice, resources }) => {
        const { header, descriptions } = resources;
        return (
            <>
                <h2>{header}</h2>
                <ul className="desc">
                    {
                        descriptions.details.map((detail, index) => (
                            <li key={index}>{detail}</li>))
                    }
                    <Markup content={descriptions.noted} />
                    <li className="contentBeforeEmpty">

                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th className={Styles["payouts-option-width"]}>{descriptions.options}</th>
                                        <th>{descriptions.odds}</th>
                                        <th><Markup content={descriptions.betLimit} /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{descriptions.player}</td>
                                        <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                        <td rowSpan={4}>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPlayer}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{descriptions.banker}</td>
                                        <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{descriptions.big}</td>
                                        <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{descriptions.small}</td>
                                        <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{descriptions.tie}</td>
                                        <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                        <td rowSpan={3}>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetSubChoice}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{descriptions.playerPair}</td>
                                        <td rowSpan={2}>{formatOdds(odds?.playerPair, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{descriptions.bankerPair}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </>
        )
    }

export default BaseBaccaratPayout;
