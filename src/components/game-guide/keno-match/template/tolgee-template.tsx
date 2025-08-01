import React from "react";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { minPayoutBlue, minPayoutRed, minPayoutOver, minPayoutUnder } from "../index";
import Styles from "../keno-match.module.scss";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import KenoMatchMD5 from "../md5";
import { IPowerSoccerTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../helpers/string-helper";
import { Markup } from "interweave";
import { useTranslate } from "@tolgee/react";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";
const classBetOddWd = "bet-odd-wd";

// Functional component wrapper to use useTranslate hook
const KenoMatchTolgeeTemplate: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate();
    const kenoMatchNamespace = "KenoSoccer";
    const commonNamespace = "Common";
    const { locale, environment, gameConfigs, maxBetFollowChoice, fractionalOddsFormat, gameName } = props;

    const getTranslationResult = (): IPowerSoccerTranslationResource => {
        return {
            main: {
                introduction: t("title_introduction", { ns: kenoMatchNamespace }),
                description: t("introduction_description", { 0: gameName, ns: kenoMatchNamespace }),
            },
            gameRule: {
                title: t("gameRule_title", { ns: kenoMatchNamespace }),
                details: [
                    t("gameRule_detail1", { ns: kenoMatchNamespace }),
                    t("gameRule_detail2", { ns: kenoMatchNamespace }),
                    t("gameRule_detail3", { ns: kenoMatchNamespace }),
                    t("gamerules_para_3", { maxbet: maxBetFollowChoice?.maxBetRound?.toString() || "0", ns: commonNamespace }),
                ],
                bettingOptions: {
                    text: t("bettingOptions_text", { ns: kenoMatchNamespace }),
                    description1: t("bettingOptions_description1", { ns: kenoMatchNamespace }),
                    description2: t("bettingOptions_description2", { ns: kenoMatchNamespace }),
                    description3: t("bettingOptions_description3", { ns: kenoMatchNamespace }),
                    description4: t("bettingOptions_description4", { ns: kenoMatchNamespace }),
                    winningConditions: t("bettingOptions_winningConditions", { ns: kenoMatchNamespace }),
                    firstHalfTeamBlueDescription: t("bettingOptions_firstHalfTeamBlueDescription", { ns: kenoMatchNamespace }),
                    fullTimeTeamBlueDescription: t("bettingOptions_fullTimeTeamBlueDescription", { ns: kenoMatchNamespace }),
                    firstHalfTeamRedDescription: t("bettingOptions_firstHalfTeamRedDescription", { ns: kenoMatchNamespace }),
                    fullTimeTeamRedDescription: t("bettingOptions_fullTimeTeamRedDescription", { ns: kenoMatchNamespace }),
                    firstHalfOverDescription: t("bettingOptions_firstHalfOverDescription", { ns: kenoMatchNamespace }),
                    fullTimeOverDescription: t("bettingOptions_fullTimeOverDescription", { ns: kenoMatchNamespace }),
                    firstHalfUnderDescription: t("bettingOptions_firstHalfUnderDescription", { ns: kenoMatchNamespace }),
                    fullTimeUnderDescription: t("bettingOptions_fullTimeUnderDescription", { ns: kenoMatchNamespace }),
                    firstHalfEvenDescription: t("bettingOptions_firstHalfEvenDescription", { ns: kenoMatchNamespace }),
                    fullTimeEvenDescription: t("bettingOptions_fullTimeEvenDescription", { ns: kenoMatchNamespace }),
                    firstHalfOddnDescription: t("bettingOptions_firstHalfOddnDescription", { ns: kenoMatchNamespace }),
                    fullTimeOddDescription: t("bettingOptions_fullTimeOddDescription", { ns: kenoMatchNamespace }),
                },
            },
            payOut: {
                title: t("payOut_title", { ns: kenoMatchNamespace }),
                description1: t("payOut_description1", { ns: kenoMatchNamespace }),
                description2: t("payOut_description2", { ns: kenoMatchNamespace }),
                description3: t("payOut_description3", { ns: kenoMatchNamespace }),
                odds: t("payOut_odds", { ns: kenoMatchNamespace }),
                betLimit: t("payOut_betLimit", { ns: kenoMatchNamespace }),
                firstHalfPayout: t("payOut_firstHalfPayout", { ns: kenoMatchNamespace }),
                liveBettingPayout: {
                    text: t("payOut_liveBettingPayout_text", { ns: kenoMatchNamespace }),
                    mainDescription: t("payOut_liveBettingPayout_mainDescription", { ns: kenoMatchNamespace }),
                    description1: t("payOut_liveBettingPayout_description1", { ns: kenoMatchNamespace }),
                    description2: t("payOut_liveBettingPayout_description2", { ns: kenoMatchNamespace }),
                    highLightDescription1: t("payOut_liveBettingPayout_highLightDescription1", { ns: kenoMatchNamespace }),
                    highLightDescription2: t("payOut_liveBettingPayout_highLightDescription2", { ns: kenoMatchNamespace }),
                    betLimit: t("payOut_liveBettingPayout_betLimit", { ns: kenoMatchNamespace }),
                    min: t("payOut_liveBettingPayout_min", { ns: kenoMatchNamespace }),
                    max: t("payOut_liveBettingPayout_max", { ns: kenoMatchNamespace }),
                    maximumBetLimit: t("payOut_liveBettingPayout_maximumBetLimit", { ns: kenoMatchNamespace }),
                },
            },
            md5noted: t("md5_note", { 0: Styles["blue"], 1: Styles["red"], ns: kenoMatchNamespace }),
            common: {
                bettypes: t("bettypes", { ns: kenoMatchNamespace }),
                options: t("options", { ns: kenoMatchNamespace }),
                teamBlue: t("teamBlue", { ns: kenoMatchNamespace }),
                teamRed: t("teamRed", { ns: kenoMatchNamespace }),
                odd: t("bet_option_odd", { ns: commonNamespace }),
                even: t("bet_option_even", { ns: commonNamespace }),
                firstHalf: t("firstHalf", { ns: kenoMatchNamespace }),
                fullTime: t("fullTime", { ns: kenoMatchNamespace }),
                fullTimeLive: t("fullTimeLive", { ns: kenoMatchNamespace }),
                over: t("bet_choice_over", { ns: commonNamespace }),
                under: t("bet_choice_under", { ns: commonNamespace }),
            },
        };
    };

    const translationResource = getTranslationResult();

    const renderIntroduction = () => {
        const { main } = translationResource;
        return (
            <li className="guide-item">
                <h2>{main.introduction}</h2>
                <p className="content">{StringFormat(main.description, gameName)}</p>
            </li>
        );
    };

    const renderGameRule = () => {
        const { gameRule } = translationResource;
        return (
            <li className="guide-item">
                <h2>{gameRule.title}</h2>
                <ul className="desc">
                    {gameRule.details.map((detail, index) => (
                        <li key={index}>
                            <Markup content={StringFormat(detail, maxBetFollowChoice?.maxBetRound?.toString() || "0")} />
                        </li>
                    ))}
                </ul>
            </li>
        );
    };

    const renderBettingOptions = () => {
        const { bettingOptions } = translationResource.gameRule;
        return (
            <li className="guide-item">
                <h2>{bettingOptions.text}</h2>
                <ul className="desc">
                    <li>{bettingOptions.description1}</li>
                    <li>
                        {bettingOptions.description2}
                        <ul className="detail">
                            <li>{bettingOptions.description3}</li>
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
                                        <th colSpan={2}> {t("options", { ns: kenoMatchNamespace })}</th>
                                        <th>{bettingOptions.winningConditions}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                            {t("teamBlue", { ns: kenoMatchNamespace })}
                                        </td>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                        <td className="text-start">
                                            <Markup content={StringFormat(bettingOptions.firstHalfTeamBlueDescription)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                        <td rowSpan={2} className="text-start">
                                            <Markup content={StringFormat(bettingOptions.fullTimeTeamBlueDescription)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                            {t("teamRed", { ns: kenoMatchNamespace })}
                                        </td>
                                        <td className="text-start">{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                        <td className="text-start">
                                            <Markup content={StringFormat(bettingOptions.firstHalfTeamRedDescription)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                        <td rowSpan={2} className="text-start">
                                            <Markup content={StringFormat(bettingOptions.fullTimeTeamRedDescription)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                            {t("bet_choice_over", { ns: commonNamespace })}
                                        </td>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                        <td className="text-start">{bettingOptions.firstHalfOverDescription}</td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                        <td rowSpan={2} className="text-start">
                                            {bettingOptions.fullTimeOverDescription}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                            {t("bet_choice_under", { ns: commonNamespace })}
                                        </td>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                        <td className="text-start">{bettingOptions.firstHalfUnderDescription}</td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                        <td rowSpan={2} className="text-start">
                                            {bettingOptions.fullTimeUnderDescription}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                            {t("bet_option_even", { ns: commonNamespace })}
                                        </td>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                        <td className="text-start">{bettingOptions.firstHalfEvenDescription}</td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                        <td rowSpan={2} className="text-start">
                                            {bettingOptions.fullTimeEvenDescription}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className={Styles[classBetTeamWd]}>
                                            {t("bet_option_odd", { ns: commonNamespace })}
                                        </td>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                        <td className="text-start">{bettingOptions.firstHalfOddnDescription}</td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                        <td rowSpan={2} className="text-start">
                                            {bettingOptions.fullTimeOddDescription}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </li>
        );
    };

    const renderPayouts = () => {
        const getMinMaxOdd = (min: number, max: number | undefined) => {
            return `${fractionalOddsFormat ? numberWithCommas(min - 1) : min} - ${
                fractionalOddsFormat && max ? numberWithCommas(max - 1) : max
            }`;
        };
        const { payOut } = translationResource;
        const { odds } = gameConfigs;
        return (
            <li className="guide-item">
                <h2>{payOut.title}</h2>
                <ul className="desc">
                    {payOut.description1 !== "" && <li>{payOut.description1} </li>}
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
                                                    {t("options", { ns: kenoMatchNamespace })}
                                                </th>
                                                <th>{payOut.odds}</th>
                                                <th>
                                                    <Markup content={StringFormat(payOut.betLimit)} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowSpan={2}> {t("teamBlue", { ns: kenoMatchNamespace })}</td>
                                                <td className="text-start"> {t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                                <td rowSpan={2}>{formatOdds(odds?.fhBlue, fractionalOddsFormat)}</td>
                                                <td rowSpan={2}>
                                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-start">{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2}>{t("teamRed", { ns: kenoMatchNamespace })}</td>
                                                <td className="text-start">{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                                <td rowSpan={2}>{formatOdds(odds?.fhRed, fractionalOddsFormat)}</td>
                                                <td rowSpan={2}>
                                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetRedChoice}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-start">{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2}>{t("bet_choice_over", { ns: commonNamespace })}</td>
                                                <td className="text-start">{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                                <td rowSpan={2}>{formatOdds(odds?.fhOver, fractionalOddsFormat)}</td>
                                                <td rowSpan={2}>
                                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetOverChoice}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-start">{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2}>{t("bet_choice_under", { ns: commonNamespace })}</td>
                                                <td className="text-start">{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                                <td rowSpan={2}>{formatOdds(odds?.fhUnder, fractionalOddsFormat)}</td>
                                                <td rowSpan={2}>
                                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetUnderChoice}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-start">{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2}>{t("bet_option_even", { ns: commonNamespace })}</td>
                                                <td className="text-start">{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                                <td rowSpan={4}>{formatOdds(odds?.fhEven, fractionalOddsFormat)}</td>
                                                <td rowSpan={4}>
                                                    {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetEvenChoice}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-start">{t("fullTime", { ns: kenoMatchNamespace })}</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2}>{t("bet_option_odd", { ns: commonNamespace })}</td>
                                                <td className="text-start">{t("firstHalf", { ns: kenoMatchNamespace })}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-start">{t("fullTime", { ns: kenoMatchNamespace })}</td>
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
                                                                {t("options", { ns: kenoMatchNamespace })}
                                                            </th>
                                                            <th rowSpan={2}>
                                                                <Markup content={StringFormat(payOut.betLimit)} />
                                                            </th>
                                                            <th colSpan={2}>{payOut.liveBettingPayout.betLimit}</th>
                                                        </tr>
                                                        <tr>
                                                            <th className={Styles["payouts-min-wd"]}>{payOut.liveBettingPayout.min}</th>
                                                            <th>{payOut.liveBettingPayout.max}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className={`text-start ${Styles[classBetTeamWd]}`}>{t("teamBlue", { ns: kenoMatchNamespace })}</td>
                                                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                                            <td className={Styles[classBetOddWd]}>
                                                                {getMinMaxOdd(minPayoutBlue, odds?.liveFTBlue)}
                                                            </td>
                                                            <td> {maxBetFollowChoice?.minBetRound}</td>
                                                            <td rowSpan={4} className="text-start">
                                                                {payOut.liveBettingPayout.maximumBetLimit}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className={`text-start ${Styles[classBetTeamWd]}`}>{t("teamRed", { ns: kenoMatchNamespace })}</td>
                                                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                                            <td className={Styles[classBetOddWd]}>
                                                                {getMinMaxOdd(minPayoutRed, odds?.liveFTRed)}
                                                            </td>
                                                            <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={`text-start ${Styles[classBetTeamWd]}`}>{t("bet_choice_over", { ns: commonNamespace })}</td>
                                                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                                            <td className={Styles[classBetOddWd]}>
                                                                {getMinMaxOdd(minPayoutOver, odds?.liveFTOver)}
                                                            </td>
                                                            <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={`text-start ${Styles[classBetTeamWd]}`}>{t("bet_choice_under", { ns: commonNamespace })}</td>
                                                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                                            <td className={Styles[classBetOddWd]}>
                                                                {getMinMaxOdd(minPayoutUnder, odds?.liveFTUnder)}
                                                            </td>
                                                            <td>{maxBetFollowChoice?.minBetRound}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={`text-start ${Styles[classBetTeamWd]}`}>{t("bet_option_even", { ns: commonNamespace })}</td>
                                                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
                                                            <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                                                {formatOdds(odds?.liveFTEven, fractionalOddsFormat)}
                                                            </td>
                                                            <td>{maxBetFollowChoice?.minBetRound}</td>
                                                            <td>{maxBetFollowChoice?.maxBetEvenLiveChoice}</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={`text-start ${Styles[classBetTeamWd]}`}>{t("bet_option_odd", { ns: commonNamespace })}</td>
                                                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("fullTimeLive", { ns: kenoMatchNamespace })}</td>
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
            </li>
        );
    };

    const renderMD5 = () => {
        const { md5noted } = translationResource;
        return (
            <KenoMatchMD5
                locale={locale}
                environment={environment}
                md5Key="96f67fca97c5ed9547ac67fd4a428747"
                md5Result={`{<span class=${Styles["blue"]}>363</span>;<span class=${Styles["red"]}>467</span>}_{#26907421fad9b51da1169691982}`}
                step3ImageUrl="/static/images/keno-match/md5-hash.png#1"
                step4ImageUrl="/static/images/keno-match/md5.png#1"
                note={<div>{<Markup content={StringFormat(md5noted)} />}</div>}
            />
        );
    };

    return (
        <ul className="game-guide">
            {renderIntroduction()}
            {renderGameRule()}
            {renderBettingOptions()}
            {renderPayouts()}
            {renderMD5()}
            {<TermsAndConditionsTolgee/>}
        </ul>
    );
};

export default KenoMatchTolgeeTemplate; 