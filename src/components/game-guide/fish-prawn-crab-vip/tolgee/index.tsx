import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider, useTranslate } from "@tolgee/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { AVAILABLE_LANGUAGES, Themes } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import { isShowedMD5 } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../fish-prawn-crab-vip.module.scss";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";

const tolgee = initTolgee([]);

const iconImageData = [
    { src: "stag.png", alt: "stag" },
    { src: "gourd.png", alt: "gourd" },
    { src: "rooster.png", alt: "rooster" },
    { src: "fish.png", alt: "fish" },
    { src: "crab.png", alt: "crab" },
    { src: "prawn.png", alt: "prawn" },
];

const getIconWidth = (theme: string | undefined, index: number) => {
    const isBlueTheme = theme === Themes.blue;
    return index % 2 === 0 ? (isBlueTheme ? 100 : 75) : isBlueTheme ? 95 : 70;
};

export const renderListIcon = (theme: string | undefined, isPortraitGame: boolean) => {
    const portraitPrefix = isPortraitGame ? "portrait-" : "";

    return (
        <>
            {iconImageData.map((icon, index) => (
                <img
                    key={icon.alt}
                    src={`/static/images/fish-prawn-crab-vip/${portraitPrefix}${icon.src}`}
                    alt={icon.alt}
                    width={getIconWidth(theme, index)}
                    height={getIconWidth(theme, index)}
                    loading="lazy"
                />
            ))}
        </>
    );
};

const FishPrawnCrabGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, orientation, environment, locale } = props;
    const { odds } = gameConfigs;
    const { theme } = useTheme();
    const isPortraitGame = !isShowedMD5(environment, orientation);
    const { t } = useTranslate(["FishPrawnCrabVip"]);

    // Handle locale changes
    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    const cssClassColumnTable = isPortraitGame ? `${Styles["table-portrait-mode"]}` : "";
    const cssClassIconWrapper = isPortraitGame ? `${Styles["icon-wrapper-portrait-mode"]}` : "";

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    <p className="content">
                        {t("intro_para_1", { gameName })}
                    </p>
                    <div className={`${Styles["wrapper-icon"]} icon-wrapper ${cssClassIconWrapper}`}>
                        {renderListIcon(theme, isPortraitGame)}
                        <div className={`${Styles["icon-text"]} text`}>{t("symbols_stag")}</div>
                        <div className={`${Styles["icon-text"]} text`}>{t("symbols_gourd")}</div>
                        <div className={`${Styles["icon-text"]} text`}>{t("symbols_rooster")}</div>
                        <div className={`${Styles["icon-text"]} text`}>{t("symbols_fish")}</div>
                        <div className={`${Styles["icon-text"]} text`}>{t("symbols_crab")}</div>
                        <div className={`${Styles["icon-text"]} text`}>{t("symbols_prawn")}</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>{t("gamerules_title")}</h2>
                    <ul className="desc">
                        <li>{t("gamerules_para_1")}</li>
                        <li>{t("gamerules_para_2")}</li>
                        <li>{t("gamerules_para_3")}</li>
                        <li>{t("gamerules_para_4", { maxBet: maxBetFollowChoice?.maxBetMain })}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>{t("payouts_title")}</h2>
                    <ul className="desc">
                        <li>
                            {t("payouts_para_1")} <strong>{t("payouts_note")}</strong> {t("payouts_para_2")}
                        </li>
                        <li>{t("payouts_para_3")}</li>
                        <li className="contentBeforeEmpty">
                            <div className="table-container">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>{t("table_header_options")}</th>
                                            <th>{t("table_header_winning_conditions")}</th>
                                            <th className={`${Styles["odd-width"]} `}>{t("table_header_odds")}</th>
                                            <th className={`${Styles["min-max-width"]} ${cssClassColumnTable}`}>
                                                {t("table_header_bet_limit")} <br></br>({t("table_header_min")} - {t("table_header_max")})
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>{t("table_specific_symbol")}</td>
                                            <td className="text-start">{t("table_appears_once")}</td>
                                            <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                                            <td rowSpan={5}>
                                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFish}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{t("table_appears_twice")}</td>
                                            <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">{t("table_appears_three_times")}</td>
                                            <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                                        </tr>
                                        {!isPortraitGame && (
                                            <>
                                                <tr>
                                                    <td>{t("table_mountain")}</td>
                                                    <td className="text-start">
                                                        {t("table_mountain_desc")}
                                                    </td>
                                                    <td>{formatOdds(odds?.mountain, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("table_ocean")}</td>
                                                    <td className="text-start">
                                                        {t("table_ocean_desc")}
                                                    </td>
                                                    <td>{formatOdds(odds?.ocean, fractionalOddsFormat)}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("table_any_triple")}</td>
                                                    <td className="text-start">
                                                        {t("table_any_triple_desc")}
                                                    </td>
                                                    <td>{formatOdds(odds?.anyTriple, fractionalOddsFormat)}</td>
                                                    <td>
                                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetAnyTriple}
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <strong>{t("examples_title")}</strong>
                    </p>
                    <ul className="desc">
                        <li>
                            <strong>{t("examples_specific_symbol_title")}</strong>
                            <ul className="detail">
                                <li>{t("examples_specific_symbol_win")}</li>
                                <li>{t("examples_specific_symbol_lose")}</li>
                            </ul>
                        </li>

                        {!isPortraitGame && (
                            <>
                                <li>
                                    <strong>{t("examples_ocean_mountain_title")}</strong>
                                    <ul className="detail">
                                        <li>{t("examples_ocean_mountain_ocean_win")}</li>
                                        <li>{t("examples_ocean_mountain_mountain_win")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("examples_any_triple_title")}</strong>
                                    <ul className="detail">
                                        <li>{t("examples_any_triple_win")}</li>
                                    </ul>
                                </li>
                            </>
                        )}
                    </ul>
                </li>
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const FishPrawnCrabGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <FishPrawnCrabGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default FishPrawnCrabGuideTolgeeWrapper; 