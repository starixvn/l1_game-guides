import React from "react";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { formatOdds } from "../../../../helpers/number-helper";
import { IPowerKenoTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../helpers/string-helper";
import { Markup } from "interweave";
import KenoMatchMD5 from "../../keno-match/md5";
import { useTranslate } from "@tolgee/react";
import Styles from "../../keno-match/keno-match.module.scss";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";

const classBetTeamWd = "bet-team-wd";
const classBetOptionWd = "bet-option-wd";

// Functional component wrapper to use useTranslate hook
const KenoPowerTolgeeTemplate: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate();
    const kenoPowerNamespace = "KenoPower";
    const commonNamespace = "Common";
    const { locale, environment, gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = props;

    const getTranslationResult = (): IPowerKenoTranslationResource => {
        return {
            main: {
                introduction: t("title_introduction", {  ns: kenoPowerNamespace }),
                description: t("introduction_description", { 0: t("game_name", { ns: kenoPowerNamespace }),ns: kenoPowerNamespace }),
            },
            gameRule: {
                title: t("gameRule_title", { ns: kenoPowerNamespace }),
                details: [
                    t("gameRule_detail1", { ns: kenoPowerNamespace }),
                    t("gameRule_detail2", { ns: kenoPowerNamespace }),
                    t("gameRule_detail3", { ns: kenoPowerNamespace }),
                    t("gamerules_para_3", { maxbet: maxBetFollowChoice?.maxBetRound?.toString() || "0", ns: commonNamespace }),
                ],
                bettingOptions: {
                    winningConditions: t("bettingOptions_winningConditions", { ns: kenoPowerNamespace }),
                    teamBlueDescription: t("bettingOptions_teamBlueDescription", { ns: kenoPowerNamespace }),
                    teamRedDescription: t("bettingOptions_teamRedDescription", { ns: kenoPowerNamespace }),
                    sumBigDescription: t("bettingOptions_sumBigDescription", { ns: kenoPowerNamespace }),
                    sumSmallDescription: t("bettingOptions_sumSmallDescription", { ns: kenoPowerNamespace }),
                    sumEvenDescription: t("bettingOptions_sumEvenDescription", { ns: kenoPowerNamespace }),
                    sumOddDescription: t("bettingOptions_sumOddDescription", { ns: kenoPowerNamespace }),
                    teamBlueBigDescription: t("bettingOptions_teamBlueBigDescription", { ns: kenoPowerNamespace }),
                    teamBlueSmallDescription: t("bettingOptions_teamBlueSmallDescription", { ns: kenoPowerNamespace }),
                    teamRedBigDescription: t("bettingOptions_teamRedBigDescription", { ns: kenoPowerNamespace }),
                    teamRedSmallDescription: t("bettingOptions_teamRedSmallDescription", { ns: kenoPowerNamespace }),
                },
            },
            payOut: {
                title: t("payOut_title", { ns: kenoPowerNamespace }),
                description1: t("payOut_description1", { ns: kenoPowerNamespace }),
                description2: t("payOut_description2", { ns: kenoPowerNamespace }),
                description3: t("payOut_description3", { ns: kenoPowerNamespace }),
                odds: t("payOut_odds", { ns: kenoPowerNamespace }),
                betLimit: t("payOut_betLimit", { ns: kenoPowerNamespace }),
            },
            md5noted: t("md5_note", { 0: Styles["blue"], 1: Styles["red"], ns: kenoPowerNamespace }),
            common: {
                bettypes: t("bettypes", { ns: kenoPowerNamespace }),
                options: t("options", { ns: kenoPowerNamespace }),
                teamBlueRed: t("teamBlueRed", { ns: kenoPowerNamespace }),
                teamBlue: t("teamBlue", { ns: kenoPowerNamespace }),
                teamRed: t("teamRed", { ns: kenoPowerNamespace }),
                big: t("glossary_big", { ns: kenoPowerNamespace }),
                small: t("glossary_small", { ns: kenoPowerNamespace }),
                odd: t("bet_option_odd", { ns: commonNamespace }),
                even: t("bet_option_even", { ns: commonNamespace }),
                sumBigSmall: t("sumBigSmall", { ns: kenoPowerNamespace }),
                sumEvenOdd: t("sumEvenOdd", { ns: kenoPowerNamespace }),
                teamBlueBigSmall: t("teamBlueBigSmall", { ns: kenoPowerNamespace }),
                teamRedBigSmall: t("teamRedBigSmall", { ns: kenoPowerNamespace }),
            },  
        };
    };

    const translationResource = getTranslationResult();

    const renderIntroduction = () => {
        const { main } = translationResource;
        return (
            <li className="guide-item">
                <h2>{main.introduction}</h2>
                <p className="content">{StringFormat(main.description)}</p>
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
                    <li className="contentBeforeEmpty">{renderBettingOptions()}</li>
                </ul>
            </li>
        );
    };

    const renderBettingOptions = () => {
        const { gameRule } = translationResource;
        const { bettingOptions } = gameRule;
        return (
            <div className="table-container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>{t("bettypes", { ns: kenoPowerNamespace })}</th>
                            <th>{t("options", { ns: kenoPowerNamespace })}</th>
                            <th>{bettingOptions.winningConditions}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                {t("teamBlueRed", { ns: kenoPowerNamespace })}
                            </td>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("teamBlue", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">
                                <Markup content={StringFormat(bettingOptions.teamBlueDescription)} />
                            </td>
                        </tr>
                        <tr>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("teamRed", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">
                                <Markup content={StringFormat(bettingOptions.teamRedDescription)} />
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                {t("sumBigSmall", { ns: kenoPowerNamespace })}
                            </td>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("glossary_big", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">{bettingOptions.sumBigDescription}</td>
                        </tr>
                        <tr>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("glossary_small", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">{bettingOptions.sumSmallDescription}</td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                {t("sumEvenOdd", { ns: kenoPowerNamespace })}
                            </td>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("bet_option_even", { ns: commonNamespace })}</td>
                            <td className="text-start">{bettingOptions.sumEvenDescription}</td>
                        </tr>
                        <tr>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("bet_option_odd", { ns: commonNamespace })}</td>
                            <td className="text-start">{bettingOptions.sumOddDescription}</td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                <Markup content={StringFormat(t("teamBlueBigSmall", { ns: kenoPowerNamespace }))} />
                            </td>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("glossary_big", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">{bettingOptions.teamBlueBigDescription}</td>
                        </tr>
                        <tr>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("glossary_small", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">{bettingOptions.teamBlueSmallDescription}</td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className={Styles[classBetTeamWd]}>
                                <Markup content={StringFormat(t("teamRedBigSmall", { ns: kenoPowerNamespace }))} />
                            </td>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}> {t("glossary_big", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">{bettingOptions.teamRedBigDescription}</td>
                        </tr>
                        <tr>
                            <td className={`text-start ${Styles[classBetOptionWd]}`}>{t("glossary_small", { ns: kenoPowerNamespace })}</td>
                            <td className="text-start">{bettingOptions.teamRedSmallDescription}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const renderPayouts = () => {
        const { payOut } = translationResource;
        const { odds } = gameConfigs;
        return (
            <li className="guide-item">
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
                                        <th className={Styles["payouts-option-width"]}>{t("bettypes", { ns: kenoPowerNamespace })}</th>
                                        <th>{t("options", { ns: kenoPowerNamespace })}</th>
                                        <th>{payOut.odds}</th>
                                        <th>
                                            <Markup content={StringFormat(payOut.betLimit)} />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2}>{t("teamBlueRed", { ns: kenoPowerNamespace })}</td>
                                        <td className="text-start">{t("teamBlue", { ns: kenoPowerNamespace })}</td>
                                        <td rowSpan={6}>{formatOdds(odds?.blue, fractionalOddsFormat)}</td>
                                        <td rowSpan={6}>
                                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueChoice}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">{t("teamRed", { ns: kenoPowerNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>{t("sumBigSmall", { ns: kenoPowerNamespace })}</td>
                                        <td className="text-start">{t("glossary_big", { ns: kenoPowerNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">{t("glossary_small", { ns: kenoPowerNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>{t("sumEvenOdd", { ns: kenoPowerNamespace })}</td>
                                        <td className="text-start">{t("bet_option_even", { ns: commonNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">{t("bet_option_odd", { ns: commonNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>
                                            <Markup content={StringFormat(t("teamBlueBigSmall", { ns: kenoPowerNamespace }))} />
                                        </td>
                                        <td className="text-start">{t("glossary_big", { ns: kenoPowerNamespace })}</td>
                                        <td rowSpan={4}>{formatOdds(odds?.blueBig, fractionalOddsFormat)}</td>
                                        <td rowSpan={4}>
                                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetBlueRedChoice}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">{t("glossary_small", { ns: kenoPowerNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>
                                            {" "}
                                            <Markup content={StringFormat(t("teamRedBigSmall", { ns: kenoPowerNamespace }))} />
                                        </td>
                                        <td className="text-start">{t("glossary_big", { ns: kenoPowerNamespace })}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">{t("glossary_small", { ns: kenoPowerNamespace })}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                md5Result={`{<span class=${Styles["blue"]}>899</span>;<span class=${Styles["red"]}>807</span>}_{#336772f6b52eadd147e9c5ceeaa}`}
                step3ImageUrl="/static/images/keno-power/md5-hash.png#1"
                step4ImageUrl="/static/images/keno-power/md5.png#1"
                note={<div>{<Markup content={StringFormat(md5noted)} />}</div>}
            />
        );
    };

    return (
        <ul className="game-guide">
            {renderIntroduction()}
            {renderGameRule()}
            {renderPayouts()}
            {renderMD5()}
            {<TermsAndConditionsTolgee/>}
        </ul>
    );
};

export default KenoPowerTolgeeTemplate; 