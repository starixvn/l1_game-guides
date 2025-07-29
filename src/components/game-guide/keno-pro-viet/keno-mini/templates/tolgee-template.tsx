import React from "react";
import { renderTermsAndConditions } from "../../../../shared";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import { formatOdds } from "../../../../../helpers/number-helper";
import { IKenoTranslationResource } from "../../keno-max/languages/types";
import { StringFormat } from "../../../../../helpers/string-helper";
import { Markup } from "interweave";
import KenoMD5 from "../../keno-max/templates/md5";
import BaseTermsAndConditions from "../../../base/terms-and-conditions/terms-and-conditions";
import { useTranslate } from "@tolgee/react";

// Functional component wrapper to use useTranslate hook
const KenoMiniTolgeeTemplate: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate();
    const kenoMiniNamespace = "KenoMini";
    const commonNamespace = "Common";
    const { locale, environment, gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = props;

    const getTranslationResult = (): IKenoTranslationResource => {
        return {
            introduction: {
                title: t("title_introduction", { ns: kenoMiniNamespace }),
                description: t("introduction_description", { ns: kenoMiniNamespace }),
            },
            gameRules: {
                title: t("gameRules_title", { ns: kenoMiniNamespace }),
                description: {
                    lines: [
                        t("gameRules_description_line1", { ns: kenoMiniNamespace }),
                        t("gameRules_description_line2", { ns: kenoMiniNamespace }),
                    ],
                    maximum: t("gameRules_description_maximum", { ns: kenoMiniNamespace, maxBet: maxBetFollowChoice?.maxBetMain || "0" }),
                    otherLine: undefined,
                },
            },
            bettingOptions: {
                title: t("bettingOptions_title", { ns: kenoMiniNamespace }),
                bigSmall: {
                    title: t("bettingOptions_bigSmall_title", { ns: kenoMiniNamespace }),
                    descriptions: [
                        t("bettingOptions_bigSmall_description1", { ns: kenoMiniNamespace }),
                        t("bettingOptions_bigSmall_description2", { ns: kenoMiniNamespace }),
                    ],
                    winningText: t("bettingOptions_bigSmall_winningText", { ns: kenoMiniNamespace }),
                },
                oddEven: {
                    title: t("bettingOptions_oddEven_title", { ns: kenoMiniNamespace }),
                    descriptions: [
                        t("bettingOptions_oddEven_description1", { ns: kenoMiniNamespace }),
                        t("bettingOptions_oddEven_description2", { ns: kenoMiniNamespace }),
                    ],
                    winningText: t("bettingOptions_oddEven_winningText", { ns: kenoMiniNamespace }),
                },
                fiveElement: {
                    title: t("bettingOptions_fiveElement_title", { ns: kenoMiniNamespace }),
                    descriptions: [
                        t("bettingOptions_fiveElement_description1", { ns: kenoMiniNamespace }),
                        t("bettingOptions_fiveElement_description2", { ns: kenoMiniNamespace }),
                        t("bettingOptions_fiveElement_description3", { ns: kenoMiniNamespace }),
                        t("bettingOptions_fiveElement_description4", { ns: kenoMiniNamespace }),
                        t("bettingOptions_fiveElement_description5", { ns: kenoMiniNamespace }),
                    ],
                    winningText: t("bettingOptions_fiveElement_winningText", { ns: kenoMiniNamespace }),
                },
                example: {
                    description: t("bettingOptions_example_description", { ns: kenoMiniNamespace }),
                    drawResult: t("bettingOptions_example_drawResult", { ns: kenoMiniNamespace }),
                    totalSum: t("bettingOptions_example_totalSum", { ns: kenoMiniNamespace }),
                },
            },
            payouts: {
                title: t("payouts_title", { ns: kenoMiniNamespace }),
                descriptions: [
                    t("payouts_description1", { ns: kenoMiniNamespace }),
                    t("payouts_description2", { ns: kenoMiniNamespace }),
                    t("payouts_description3", { ns: kenoMiniNamespace }),
                ],
                options: t("payouts_options", { ns: kenoMiniNamespace }),
                odds: t("payouts_odds", { ns: kenoMiniNamespace }),
                betLimit: t("payouts_betLimit", { ns: kenoMiniNamespace }),
                min: t("payouts_min", { ns: kenoMiniNamespace }),
                max: t("payouts_max", { ns: kenoMiniNamespace }),
                big: t("payouts_big", { ns: kenoMiniNamespace }),
                small: t("payouts_small", { ns: kenoMiniNamespace }),
                odd: t("payouts_odd", { ns: kenoMiniNamespace }),
                even: t("payouts_even", { ns: kenoMiniNamespace }),
                gold: t("payouts_gold", { ns: kenoMiniNamespace }),
                wood: t("payouts_wood", { ns: kenoMiniNamespace }),
                water: t("payouts_water", { ns: kenoMiniNamespace }),
                fire: t("payouts_fire", { ns: kenoMiniNamespace }),
                earth: t("payouts_earth", { ns: kenoMiniNamespace }),
            },
            md5: {
                image1: `/static/images/keno-mini/md5_step1_${locale}.png`,
                image2: `/static/images/keno-mini/md5_step2_${locale}.png`,
                note: t("md5_note", { ns: kenoMiniNamespace }),
            },
            termsAndConditions: {
                header: t("termsandconditions-title"),
                details: [
                    t("termsandconditions_para_1"),
                    t("termsandconditions_para_2"),
                    t("termsandconditions_para_3"),
                    t("termsandconditions_para_4"),
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
                    {gameRules.description.lines.map((line: string, index: number) => (
                        <li key={index}>{line}</li>
                    ))}
                    <li>
                        <Markup content={StringFormat(gameRules.description.maximum)} />
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
                <div className="betting-options">
                    <div className="option">
                        <h3>{bettingOptions.bigSmall.title}</h3>
                        <ul className="desc">
                            {bettingOptions.bigSmall.descriptions.map((desc: string, index: number) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        {renderTableBigSmall()}
                    </div>
                    <div className="option">
                        <h3>{bettingOptions.oddEven.title}</h3>
                        <ul className="desc">
                            {bettingOptions.oddEven.descriptions.map((desc: string, index: number) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        {renderTableOddEven()}
                    </div>
                    <div className="option">
                        <h3>{bettingOptions.fiveElement.title}</h3>
                        <ul className="desc">
                            {bettingOptions.fiveElement.descriptions.map((desc: string, index: number) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        {renderTableFiveElements()}
                    </div>
                    <div className="example">
                        <h3>{bettingOptions.example.description}</h3>
                        <p>{bettingOptions.example.drawResult}</p>
                        <p>{bettingOptions.example.totalSum}</p>
                    </div>
                </div>
            </li>
        );
    };

    const renderTableBigSmall = () => {
        const { bettingOptions } = translationResource;
        return renderBettingOptionsTable([1, 2, 7, 11, 15, 24, 25, 28, 33, 35], 181, bettingOptions.bigSmall.winningText);
    };

    const renderTableOddEven = () => {
        const { bettingOptions } = translationResource;
        return renderBettingOptionsTable([4, 5, 10, 11, 12, 24, 27, 30, 34, 40], 197, bettingOptions.oddEven.winningText);
    };

    const renderTableFiveElements = () => {
        const { bettingOptions } = translationResource;
        return renderBettingOptionsTable([5, 7, 13, 17, 23, 24, 33, 37, 38, 40], 237, bettingOptions.fiveElement.winningText);
    };

    const renderBettingOptionsTable = (firstRow: number[], totalSum: number, winningText: string, secondRow?: number[]) => {
        return (
            <div className="table-container">
                <table className="table text-center table-small">
                    <thead>
                        <tr>
                            <th>Numbers</th>
                            <th>Total Sum</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{firstRow.join(", ")}</td>
                            <td>{totalSum}</td>
                            <td>{winningText}</td>
                        </tr>
                        {secondRow && (
                            <tr>
                                <td>{secondRow.join(", ")}</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderPayouts = () => {
        const { payouts } = translationResource;
        return (
            <li className="guide-item">
                <h2>{payouts.title}</h2>
                <ul className="desc">
                    {payouts.descriptions.map((desc: string, index: number) => (
                        <li key={index}>{desc}</li>
                    ))}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>{payouts.options}</th>
                                    <th>{payouts.odds}</th>
                                    <th>{payouts.betLimit}</th>
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
                    <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                    <td rowSpan={4}>
                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                    </td>
                </tr>
                <tr>
                    <td>{payouts.small}</td>
                    <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                </tr>
                <tr>
                    <td>{payouts.odd}</td>
                    <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
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
                md5Key="f2bbd32524fe6e2e41eaaaa0eacd6d86"
                md5Result="{237}_{#26907421fad9b51da1169691982}"
                step1ImageUrl={md5.image1}
                step2ImageUrl={md5.image2}
                step3ImageUrl="/static/images/keno-mini/md5_step3.png"
                step4ImageUrl="/static/images/keno-mini/md5_step4.png"
                note={md5.note}
            />
        );
    };

    const renderTermsAndConditions = () => {
        const { termsAndConditions } = translationResource;
        return (
            <li className="guide-item">
                <BaseTermsAndConditions resources={termsAndConditions} />
            </li>
        );
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

export default KenoMiniTolgeeTemplate; 