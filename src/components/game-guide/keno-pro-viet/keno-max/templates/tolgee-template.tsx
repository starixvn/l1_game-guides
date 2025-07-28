import React from "react";
import { renderTermsAndConditions } from "../../../../shared";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import { formatOdds } from "../../../../../helpers/number-helper";
import { IKenoTranslationResource } from "../languages/types";
import { StringFormat } from "../../../../../helpers/string-helper";
import { Markup } from "interweave";
import KenoMD5 from "./md5";
import BaseTermsAndConditions from "../../../base/terms-and-conditions/terms-and-conditions";
import { useTranslate } from "@tolgee/react";
import { getKenoMaxTolgeeTranslationResource } from "../languages/tolgee-helper";

// Functional component wrapper to use useTranslate hook
const KenoProTolgeeTemplate: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate();
    const kenoProMaxNamespace = "MegaKeno";
    const commonNamespace = "Common";
    const { locale, environment, gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = props;

    const getTranslationResult = (): IKenoTranslationResource => {
        return {
            introduction: {
                title: t("title_introduction", { ns: kenoProMaxNamespace }),
                description: t("introduction_description", { ns: kenoProMaxNamespace }),
            },
            gameRules: {
                title: t("gameRules_title", { ns: kenoProMaxNamespace }),
                description: {
                    lines: [
                        t("gameRules_description_line1", { ns: kenoProMaxNamespace }),
                        t("gameRules_description_line2", { ns: kenoProMaxNamespace }),
                    ],
                    maximum: t("gameRules_description_maximum", { ns: kenoProMaxNamespace, maxBet: maxBetFollowChoice?.maxBetMain || "0" }),
                    otherLine: undefined,
                },
            },
            bettingOptions: {
                title: t("bettingOptions_title", { ns: kenoProMaxNamespace }),
                bigSmall: {
                    title: t("bettingOptions_bigSmall_title", { ns: kenoProMaxNamespace }),
                    descriptions: [
                        t("bettingOptions_bigSmall_description1", { ns: kenoProMaxNamespace }),
                        t("bettingOptions_bigSmall_description2", { ns: kenoProMaxNamespace }),
                    ],
                    winningText: t("bettingOptions_bigSmall_winningText", { ns: kenoProMaxNamespace }),
                },
                oddEven: {
                    title: t("bettingOptions_oddEven_title", { ns: kenoProMaxNamespace }),
                    descriptions: [
                        t("bettingOptions_oddEven_description1", { ns: kenoProMaxNamespace }),
                        t("bettingOptions_oddEven_description2", { ns: kenoProMaxNamespace }),
                    ],
                    winningText: t("bettingOptions_oddEven_winningText", { ns: kenoProMaxNamespace }),
                },
                fiveElement: {
                    title: t("bettingOptions_fiveElement_title", { ns: kenoProMaxNamespace }),
                    descriptions: [
                        t("bettingOptions_fiveElement_description1", { ns: kenoProMaxNamespace }),
                        t("bettingOptions_fiveElement_description2", { ns: kenoProMaxNamespace }),
                        t("bettingOptions_fiveElement_description3", { ns: kenoProMaxNamespace }),
                        t("bettingOptions_fiveElement_description4", { ns: kenoProMaxNamespace }),
                        t("bettingOptions_fiveElement_description5", { ns: kenoProMaxNamespace }),
                    ],
                    winningText: t("bettingOptions_fiveElement_winningText", { ns: kenoProMaxNamespace }),
                },
                example: {
                    description: t("bettingOptions_example_description", { ns: kenoProMaxNamespace }),
                    drawResult: t("bettingOptions_example_drawResult", { ns: kenoProMaxNamespace }),
                    totalSum: t("bettingOptions_example_totalSum", { ns: kenoProMaxNamespace }),
                },
            },
            payouts: {
                title: t("payouts_title", { ns: kenoProMaxNamespace }),
                descriptions: [
                    t("payouts_description1", { ns: kenoProMaxNamespace }),
                    t("payouts_description2", { ns: kenoProMaxNamespace }),
                    t("payouts_description3", { ns: kenoProMaxNamespace }),
                ],
                options: t("payouts_options", { ns: kenoProMaxNamespace }),
                odds: t("payouts_odds", { ns: kenoProMaxNamespace }),
                betLimit: t("payouts_betLimit", { ns: kenoProMaxNamespace }),
                min: t("payouts_min", { ns: kenoProMaxNamespace }),
                max: t("payouts_max", { ns: kenoProMaxNamespace }),
                big: t("payouts_big", { ns: kenoProMaxNamespace }),
                small: t("payouts_small", { ns: kenoProMaxNamespace }),
                odd: t("payouts_odd", { ns: kenoProMaxNamespace }),
                even: t("payouts_even", { ns: kenoProMaxNamespace }),
                gold: t("payouts_gold", { ns: kenoProMaxNamespace }),
                wood: t("payouts_wood", { ns: kenoProMaxNamespace }),
                water: t("payouts_water", { ns: kenoProMaxNamespace }),
                fire: t("payouts_fire", { ns: kenoProMaxNamespace }),
                earth: t("payouts_earth", { ns: kenoProMaxNamespace }),
            },
            md5: {
                image1: `/static/images/mega-keno/md5_step1_${locale}.png`,
                image2: `/static/images/mega-keno/md5_step2_${locale}.png`,
                note: t("md5_note", { ns: kenoProMaxNamespace }),
            },
            termsAndConditions: {
                header: t("termsandconditions-title"),
                details: [
                    t("termsandconditions_para_1", { ns: commonNamespace }),
                    t("termsandconditions_para_2", { ns: commonNamespace }),
                    t("termsandconditions_para_3", { ns: commonNamespace }),
                    t("termsandconditions_para_4", { ns: commonNamespace }),
                ],
            },
        };
    };

    const translationResource = getTranslationResult();

    const renderIntroduction = () => {
        const { introduction } = translationResource;
        return (
            <li className="guide-item">
                <h2>{introduction.title}</h2>
                <p className="content">{introduction.description}</p>
            </li>
        );
    };

    const renderGameRules = () => {
        const { gameRules } = translationResource;

        return (
            <li className="guide-item">
                <h2>{gameRules.title}</h2>
                <ul className="desc">
                    {gameRules.description.lines.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                    <li>
                        <Markup content={StringFormat(gameRules.description.maximum, maxBetFollowChoice?.maxBetMain || "0")} />
                    </li>
                    {gameRules.description.otherLine && <li>{gameRules.description.otherLine}</li>}
                </ul>
            </li>
        );
    };

    const renderBettingOptions = () => {
        const { bettingOptions } = translationResource;
        return (
            <li className="guide-item">
                <h2>{bettingOptions.title}</h2>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.bigSmall.title}</span>
                        <ul className="desc">
                            {bettingOptions.bigSmall.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">{renderTableBigSmall()}</div>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.oddEven.title}</span>
                        <ul className="desc">
                            {bettingOptions.oddEven.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">{renderTableOddEven()}</div>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.fiveElement.title}</span>
                        <ul className="desc">
                            {bettingOptions.fiveElement.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">{renderTableFiveElements()}</div>
                        </div>
                    </li>
                </ul>
            </li>
        );
    };

    const renderTableBigSmall = () => {
        const { bettingOptions } = translationResource;
        return renderBettingOptionsTable(
            [7, 11, 17, 20, 21, 23, 33, 40, 41, 42],
            883,
            bettingOptions.bigSmall.winningText,
            [45, 48, 56, 58, 59, 69, 71, 72, 73, 77]
        );
    };

    const renderTableOddEven = () => {
        const { bettingOptions } = translationResource;
        return renderBettingOptionsTable(
            [4, 5, 8, 18, 23, 30, 35, 37, 39, 40],
            798,
            bettingOptions.oddEven.winningText,
            [42, 44, 46, 49, 50, 56, 60, 61, 71, 80]
        );
    };

    const renderTableFiveElements = () => {
        const { bettingOptions } = translationResource;
        return renderBettingOptionsTable(
            [3, 5, 10, 11, 15, 19, 20, 27, 29, 35],
            698,
            bettingOptions.fiveElement.winningText,
            [37, 40, 42, 47, 48, 52, 57, 62, 68, 71]
        );
    };

    const renderBettingOptionsTable = (firstRow: number[], totalSum: number, winningText: string, secondRow?: number[]) => {
        const { bettingOptions } = translationResource;

        return (
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th colSpan={10} className="bold">
                            <b>{bettingOptions.example.drawResult}</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {firstRow.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    {secondRow && (
                        <tr>
                            {secondRow.map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    )}
                    <tr>
                        <td colSpan={10}>
                            <strong>{bettingOptions.example.totalSum}</strong> = {totalSum}. {winningText}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };

    const renderPayouts = () => {
        const { payouts } = translationResource;

        return (
            <li className="guide-item">
                <h2>{payouts.title}</h2>
                <ul className="desc">
                    {payouts.descriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>
                                        <b>{payouts.options}</b>
                                    </th>
                                    <th>
                                        <b>{payouts.odds}</b>
                                    </th>
                                    <th>
                                        <b>
                                            {payouts.betLimit}
                                            <br />({payouts.min}-{payouts.max})
                                        </b>
                                    </th>
                                </tr>
                            </thead>
                            {renderPayoutsTableBody()}
                        </table>
                    </div>
                </ul>
            </li>
        );
    };

    const renderPayoutsTableBody = () => {
        const { odds } = gameConfigs;
        const { payouts } = translationResource;
        return (
            <tbody>
                <tr>
                    <td>{payouts.big}</td>
                    <td rowSpan={4}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                    <td rowSpan={4}>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.small}</td>
                </tr>
                <tr>
                    <td>{payouts.odd}</td>
                </tr>
                <tr>
                    <td>{payouts.even}</td>
                </tr>
                <tr>
                    <td>{payouts.gold}</td>
                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.wood}</td>
                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.water}</td>
                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.fire}</td>
                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.earth}</td>
                    <td>{formatOdds(odds?.earth, fractionalOddsFormat)}</td>
                    <td>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
                    </td>
                </tr>
            </tbody>
        );
    };

    const renderMD5 = () => {
        const { md5 } = translationResource;
        return (
            <KenoMD5
                locale={locale}
                environment={environment}
                md5Key="520e543659d05eb7024f9f76d85479f7"
                md5Result="{363}_{#26907421fad9b51da1169691982}"
                step1ImageUrl={md5.image1}
                step2ImageUrl={md5.image2}
                step3ImageUrl="/static/images/mega-keno/md5_step3.png"
                step4ImageUrl="/static/images/mega-keno/md5_step4.png"
                note={md5.note}
            />
        );
    };

    const renderTermsAndConditions = () => {
        return <BaseTermsAndConditions resources={translationResource.termsAndConditions} />;
    };

    return (
        <ul className="game-guide">
            {renderIntroduction()}
            {renderGameRules()}
            {renderBettingOptions()}
            {renderPayouts()}
            {renderMD5()}
            {renderTermsAndConditions()}
        </ul>
    );
};

export default KenoProTolgeeTemplate; 