import React from "react";

import { renderTermsAndConditions } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { minPayoutBlue, minPayoutRed, minPayoutOver, minPayoutUnder } from "../index";
import Styles from "../keno-match.module.scss";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import KenoMatchMD5 from "../md5";
import { IPowerSoccerTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../helpers/string-helper";
import { Markup } from "interweave";
import { getPowerSoccerTranslationResource } from "../languages";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";
const classBetOddWd = "bet-odd-wd";
const renderGameRule = (resources: IPowerSoccerTranslationResource, maxBetRound: number | string) => {
    const { gameRule } = resources;
    return (
        <>
            <h2>{gameRule.title}</h2>
            <ul className="desc">
                {
                    gameRule.details.map((detail, index) => (
                        <li key={index}>{StringFormat(detail, maxBetRound.toString())}</li>))
                }
            </ul>
        </>
    );
};

const renderBettingOptions = (resources: IPowerSoccerTranslationResource) => {
    const { common, gameRule } = resources;
    const { bettingOptions } = gameRule;
    return (
        <>
            <h2>{bettingOptions.text}</h2>
            <ul className="desc">
                <li>
                    {bettingOptions.description1}
                </li>
                <li>
                    {bettingOptions.description2}
                    <ul className="detail">
                        <li>
                            {bettingOptions.description3}
                        </li>
                        <li>
                            <Markup content={StringFormat(bettingOptions.description4)} />
                        </li>
                    </ul>
                </li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th colSpan={2}> {common.options}</th>
                                    <th>{bettingOptions.winningConditions}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        {common.teamBlue}
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.firstHalf}</td>
                                    <td className="text-start">
                                        {bettingOptions.firstHalfTeamBlueDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTime}</td>
                                    <td rowSpan={2} className="text-start">
                                        {bettingOptions.fullTimeTeamBlueDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        {common.teamRed}
                                    </td>
                                    <td className="text-start">{common.firstHalf}</td>
                                    <td className="text-start">
                                        {bettingOptions.firstHalfTeamRedDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTime}</td>
                                    <td rowSpan={2} className="text-start">
                                        {bettingOptions.fullTimeTeamRedDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        {common.over}
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.firstHalf}</td>
                                    <td className="text-start">
                                        {bettingOptions.firstHalfOverDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTime}</td>
                                    <td rowSpan={2} className="text-start">
                                        {bettingOptions.fullTimeOverDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        {common.under}
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.firstHalf}</td>
                                    <td className="text-start">
                                        {bettingOptions.firstHalfUnderDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTime}</td>
                                    <td rowSpan={2} className="text-start">
                                        {bettingOptions.fullTimeUnderDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        {common.even}
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.firstHalf}</td>
                                    <td className="text-start">
                                        {bettingOptions.firstHalfEvenDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTime}</td>
                                    <td rowSpan={2} className="text-start">
                                        {bettingOptions.fullTimeEvenDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                        {common.odd}
                                    </td>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.firstHalf}</td>
                                    <td className="text-start">
                                        {bettingOptions.firstHalfOddnDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTime}</td>
                                    <td rowSpan={2} className="text-start">
                                        {bettingOptions.fullTimeOddDescription}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (
    resources: IPowerSoccerTranslationResource,
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    const getMinMaxOdd = (min: number, max: number | undefined) => {
        return `${fractionalOddsFormat ? numberWithCommas(min - 1) : min} - ${fractionalOddsFormat && max ? numberWithCommas(max - 1) : max
            }`;
    };
    const { payOut, common } = resources;
    return (
        <>
            <h2>{payOut.title}</h2>
            <ul className="desc">
                <li>{payOut.description1} </li>
                {payOut.description2 !== "" && <li>{payOut.description2} </li>}
                <li>
                    {payOut.description3}
                    <ul className="game-guide-alpha">
                        <li>
                            <strong>{payOut.firstHalfPayout}</strong>
                            <div className={`table-container ${Styles["table-payouts-bet"]}`}>
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className={Styles["payouts-option-width"]}>
                                                {common.options}
                                            </th>
                                            <th>{payOut.odds}</th>
                                            <th>
                                                <Markup content={StringFormat(payOut.betLimit)} />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}> {common.teamBlue}</td>
                                            <td className="text-start"> {common.firstHalf}</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhBlue, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{common.fullTime}</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>{common.teamRed}</td>
                                            <td className="text-start">{common.firstHalf}</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhRed, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetRedChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{common.fullTime}</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>{common.over}</td>
                                            <td className="text-start">{common.firstHalf}</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhOver, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetOverChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{common.fullTime}</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>{common.under}</td>
                                            <td className="text-start">{common.firstHalf}</td>
                                            <td rowSpan={2}>{formatOdds(odds?.fhUnder, fractionalOddsFormat)}</td>
                                            <td rowSpan={2}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetUnderChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{common.fullTime}</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>{common.even}</td>
                                            <td className="text-start">{common.firstHalf}</td>
                                            <td rowSpan={4}>{formatOdds(odds?.fhEven, fractionalOddsFormat)}</td>
                                            <td rowSpan={4}>
                                                {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetEvenChoice}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{common.fullTime}</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>{common.odd}</td>
                                            <td className="text-start">{common.firstHalf}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{common.fullTime}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>
                            <strong>{payOut.liveBettingPayout.text}</strong>
                            <div>
                                <Markup content={StringFormat(payOut.liveBettingPayout.mainDescription)} />
                                <ul className="detail">
                                    <li>{payOut.liveBettingPayout.description1}</li>
                                    <li>{payOut.liveBettingPayout.description2}</li>
                                </ul>
                                <ul className="desc">
                                    <li>
                                        <Markup content={StringFormat(payOut.liveBettingPayout.highLightDescription1)} />
                                    </li>
                                    <li>
                                        <Markup content={StringFormat(payOut.liveBettingPayout.highLightDescription2)} />
                                    </li>
                                    <li className="contentBeforeEmpty">
                                        <div className={`table-container ${Styles["table-payouts-bet-live"]}`}>
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2} rowSpan={2}>
                                                            {common.options}
                                                        </th>
                                                        <th rowSpan={2}>
                                                            <Markup content={StringFormat(payOut.betLimit)} />
                                                        </th>
                                                        <th colSpan={2}>{payOut.liveBettingPayout.betLimit}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className={Styles["payouts-min-wd"]}>Min</th>
                                                        <th>{payOut.liveBettingPayout.max}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>{common.teamBlue}</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutBlue, odds?.liveFTBlue)}
                                                        </td>
                                                        <td> {maxBetFollowChoice?.minBetRound}</td>
                                                        <td rowSpan={4} className="text-start">
                                                            The maximum bet limit will change according to the payout ratio.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>{common.teamRed}</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutRed, odds?.liveFTRed)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>{common.over}</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutOver, odds?.liveFTOver)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>{common.under}</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                                        <td className={Styles[classBetOddWd]}>
                                                            {getMinMaxOdd(minPayoutUnder, odds?.liveFTUnder)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>{common.even}</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                                            {formatOdds(odds?.liveFTEven, fractionalOddsFormat)}
                                                        </td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={`text-start ${Styles[classBetTeamWd]}`}>{common.odd}</td>
                                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.fullTimeLive}</td>
                                                        <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const KenoMatchGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, locale } = props;
    const { odds } = gameConfigs;
    const resources = getPowerSoccerTranslationResource(locale);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{resources.main.introduction}</h2>
                    <p className="content">{StringFormat(resources.main.description, gameName)}</p>
                </li>
                <li className="guide-item">{renderGameRule(resources, maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderBettingOptions(resources)}</li>
                <li className="guide-item">{renderPayouts(resources, odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                <KenoMatchMD5
                    locale={props.locale}
                    environment={props.environment}
                    md5Key="96f67fca97c5ed9547ac67fd4a428747"
                    md5Result={`{<span class=${Styles["blue"]}>363</span>;<span class=${Styles["red"]}>467</span>}_{#26907421fad9b51da1169691982}`}
                    step3ImageUrl="/static/images/keno-match/md5-hash.png#1"
                    step4ImageUrl="/static/images/keno-match/md5.png#1"
                    note={<div>{<Markup content={StringFormat(resources.md5noted, Styles["blue"], Styles["red"])} />}</div>}
                />
                {renderTermsAndConditions(locale)}
            </ul>
        </>
    );
};
export default KenoMatchGuideEN;
