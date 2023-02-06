import React from "react";

import { renderTermsAndConditions } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../keno-match.module.scss";
import { formatOdds } from "../../../../helpers/number-helper";
import KenoMatchMD5 from "../../keno-match/md5";
import { IPowerKenoTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../helpers/string-helper";
import { getPowerKenoTranslationResource } from "../languages";
import { Markup } from "interweave";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";

const renderGameRule = (resources: IPowerKenoTranslationResource, maxBetRound: number | string) => {
    const { gameRule } = resources;
    return (
        <>
            <h2>{gameRule.title}</h2>
            <ul className="desc">
                {
                    gameRule.details.map((detail, index) => (
                        <li key={index}>{StringFormat(detail, maxBetRound.toString())}</li>))
                }
                <li className="contentBeforeEmpty">{renderBettingOptions(resources)}</li>
            </ul>
        </>
    );
};

const renderBettingOptions = (resources: IPowerKenoTranslationResource) => {
    const { common, gameRule } = resources;
    const { bettingOptions } = gameRule;
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>{common.bettypes}</th>
                        <th>{common.options}</th>
                        <th>{bettingOptions.winningConditions}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            {common.teamBlueRed}
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.teamBlue}</td>
                        <td className="text-start">
                            <Markup content={StringFormat(bettingOptions.teamBlueDescription)} />
                        </td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.teamRed}</td>
                        <td className="text-start">
                            <Markup content={StringFormat(bettingOptions.teamRedDescription)} />
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            {common.sumBigSmall}
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.big}</td>
                        <td className="text-start">{bettingOptions.sumBigDescription}</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.small}</td>
                        <td className="text-start">{bettingOptions.sumSmallDescription}</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            {common.sumEvenOdd}
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.even}</td>
                        <td className="text-start">{bettingOptions.sumEvenDescription}</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.odd}</td>
                        <td className="text-start">{bettingOptions.sumOddDescription}</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            <Markup content={StringFormat(common.teamBlueBigSmall)} />
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.big}</td>
                        <td className="text-start">{bettingOptions.sumBigDescription}</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.small}</td>
                        <td className="text-start">{bettingOptions.teamBlueSmallDescription}</td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className={Styles[classBetTeamWd]}>
                            <Markup content={StringFormat(common.teamRedBigSmall)} />
                        </td>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {common.big}</td>
                        <td className="text-start">{bettingOptions.teamRedBigDescription}</td>
                    </tr>
                    <tr>
                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{common.small}</td>
                        <td className="text-start">{bettingOptions.teamRedSmallDescription}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderPayouts = (
    resources: IPowerKenoTranslationResource,
    odds: OddsProps | undefined,
    maxBetFollowChoice: MaxBetChoicesProps | undefined,
    fractionalOddsFormat: boolean | undefined
) => {
    const { payOut, common } = resources;
    return (
        <>
            <h2>{payOut.title}</h2>
            <ul className="desc">
                <li>{payOut.description1} </li>
                {payOut.description2 !== "" && <li>{payOut.description2} </li>}
                <li>
                    {payOut.description3}
                    <div className="table-container">
                        <table className="table text-center table-medium">
                            <thead>
                                <tr>
                                    <th className={Styles["payouts-option-width"]}>{common.bettypes}</th>
                                    <th>{common.options}</th>
                                    <th>{payOut.odds}</th>
                                    <th>
                                        <Markup content={StringFormat(payOut.betLimit)} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>{common.teamBlueRed}</td>
                                    <td className="text-start">{common.teamBlue}</td>
                                    <td rowSpan={6}>{formatOdds(odds?.blue, fractionalOddsFormat)}</td>
                                    <td rowSpan={6}>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">{common.teamRed}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>{common.sumBigSmall}</td>
                                    <td className="text-start">{common.big}</td>
                                </tr>
                                <tr>
                                    <td className="text-start">{common.small}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>{common.sumEvenOdd}</td>
                                    <td className="text-start">{common.even}</td>
                                </tr>
                                <tr>
                                    <td className="text-start">{common.odd}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>  <Markup content={StringFormat(common.teamBlueBigSmall)} /></td>
                                    <td className="text-start">{common.big}</td>
                                    <td rowSpan={4}>{formatOdds(odds?.blueBig, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueRedChoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">{common.small}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>  <Markup content={StringFormat(common.teamRedBigSmall)} /></td>
                                    <td className="text-start">{common.big}</td>
                                </tr>
                                <tr>
                                    <td className="text-start">{common.small}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const KenoPowerGuideTemplate: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat, locale, gameName } = props;
    const { odds } = gameConfigs;
    const resources = getPowerKenoTranslationResource(locale);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{resources.main.introduction}</h2>
                    <p className="content">{StringFormat(resources.main.description, gameName)}</p>
                </li>
                <li className="guide-item">{renderGameRule(resources, maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(resources, odds, maxBetFollowChoice, fractionalOddsFormat)}</li>
                <KenoMatchMD5
                    locale={props.locale}
                    environment={props.environment}
                    md5Key="96f67fca97c5ed9547ac67fd4a428747"
                    md5Result={`{<span class=${Styles["blue"]}>899</span>;<span class=${Styles["red"]}>807</span>}_{#336772f6b52eadd147e9c5ceeaa}`}
                    step3ImageUrl="/static/images/keno-power/md5-hash.png#1"
                    step4ImageUrl="/static/images/keno-power/md5.png#1"
                    note={<div>{<Markup content={StringFormat(resources.md5noted, Styles["blue"], Styles["red"])} />}</div>}
                />
                {renderTermsAndConditions(locale)}
            </ul>
        </>
    );
};
export default KenoPowerGuideTemplate;
