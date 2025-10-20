import { useTranslate } from "@tolgee/react";
import { Trans } from "next-i18next";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import appSettings from "../../../common/app-settings";
import { locales } from "../../../common/constants";
import { useImgVersionContext } from "../../../contexts/img-version";
import { JackpotConfigs } from "../type";
import Styles from "./classic-slot.module.scss";
import { GameConfigProps } from "./type";
import { useRouter } from "next/router";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const freeSpinContentEX = "wrapper-symbols-content";
let imgSrc = "",
    imgVer = "";

const renderGameRule = (t: Function, jackpot: boolean) => {
    return (
        <>
            <h2 className={Styles["heading1"]}>{t("title_gamerules", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>
                    {t("gamerules_para_2")}
                    <div className="text-center">
                        <Trans>{t("gamerules_para_3")}</Trans>
                    </div>
                </li>

                <li>{t("gamerules_para_4")}</li>
                <li>{t("gamerules_para_5")}</li>
                <li>{t("gamerules_para_6")}</li>
                <div className={Styles["payline"]}>
                    <img
                        src={`${appSettings.resourceUrl}_shared/classicslot/payline-guide.png?v=${imgVer}`}
                        alt="guide_payline"
                        loading="eager"
                    />
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][], t: Function, jackpot: boolean, locale: any) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("title_paytable", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("paytable_para_1")}</li>
                <li>
                    <Trans>{t("paytable_para_2")}</Trans>
                </li>
                <li>{t("paytable_para_3")}</li>
            </ul>
            {renderPayoutsIconFirstLine(odds, jackpot, t, locale)}
            {renderPayoutsIconSecondLine(odds, jackpot, t, locale)}
            {renderExamplePayout(odds, jackpot, t, locale)}
        </li>
    );
};

const generateSymbol = (iconIndex: number, isHighlight = false, isSmall = false) => {
    return (
        <img
            key={`symbol-${iconIndex}-${uuidv4()}`}
            className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
            src={`${imgSrc}/symbol-${iconIndex}.png?v=${imgVer}`}
            alt={`symbol_${iconIndex}.`}
        />
    );
};

const generateSymbolJackpot = (iconIndex: number, locale: any, isHighlight = false, isSmall = false) => {
    return (
        <img
            key={`symbol-${iconIndex}.jackpot`}
            className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
            src={`${imgSrc}/symbol-${iconIndex}.jackpot${locale === locales.vi ? ".vi-VN" : ""}.png?v=${imgVer}`}
            alt={`symbol_${iconIndex}.`}
        />
    );
};

const generateBoard = (symbols: Array<number>, highlightSymbol: number) =>
    symbols.map((symbol) => generateSymbol(symbol, symbol === highlightSymbol));

const renderIconContent = (symbol: number, dataContent: number[][], t: Function, jackpot: boolean, locale: any) => {
    return (
        <div className={Styles["symbol-wrapper"]}>
            <div className="d-center">{jackpot && symbol === 10 ? generateSymbolJackpot(symbol, locale) : generateSymbol(symbol)}</div>
            <div>
                {dataContent.map((data, index) => {
                    if (!data[1] && symbol !== 10) {
                        return;
                    }

                    const isShowJackpotText = jackpot && symbol === 10 && index === 0;

                    return (
                        <div key={index} className={Styles["symbol-content"]}>
                            <span className={Styles[number]}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>
                                {isShowJackpotText ? t("title_jackpot", { ns: "Common" }) : data[1]}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const renderPayoutTwoLastIcon = (odds: number[][], jackpot: boolean, t: Function, locale: any) => {
    if (jackpot) {
        return (
            <>
                {renderIconContent(
                    10,
                    [
                        [5, odds[10][5]],
                        [4, odds[10][4]],
                        [3, odds[10][3]],
                        [2, odds[10][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
                {renderIconContent(
                    9,
                    [
                        [5, odds[9][5]],
                        [4, odds[9][4]],
                        [3, odds[9][3]],
                        [2, odds[9][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
            </>
        );
    } else {
        return (
            <>
                {renderIconContent(
                    9,
                    [
                        [5, odds[9][5]],
                        [4, odds[9][4]],
                        [3, odds[9][3]],
                        [2, odds[9][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
                {renderIconContent(
                    10,
                    [
                        [5, odds[10][5]],
                        [4, odds[10][4]],
                        [3, odds[10][3]],
                        [2, odds[10][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
            </>
        );
    }
};
const renderPayoutsIconFirstLine = (odds: number[][], jackpot: boolean, t: Function, locale: any) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderPayoutTwoLastIcon(odds, jackpot, t, locale)}
                {renderIconContent(
                    6,
                    [
                        [5, odds[6][5]],
                        [4, odds[6][4]],
                        [3, odds[6][3]],
                        [2, odds[6][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
                {renderIconContent(
                    5,
                    [
                        [5, odds[5][5]],
                        [4, odds[5][4]],
                        [3, odds[5][3]],
                        [2, odds[5][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
            </div>
        </>
    );
};

const renderPayoutsIconSecondLine = (odds: number[][], jackpot: boolean, t: Function, locale: any) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderIconContent(
                    4,
                    [
                        [5, odds[4][5]],
                        [4, odds[4][4]],
                        [3, odds[4][3]],
                        [2, odds[4][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
                {renderIconContent(
                    3,
                    [
                        [5, odds[3][5]],
                        [4, odds[3][4]],
                        [3, odds[3][3]],
                        [2, odds[3][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
                {renderIconContent(
                    2,
                    [
                        [5, odds[2][5]],
                        [4, odds[2][4]],
                        [3, odds[2][3]],
                        [2, odds[2][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
                {renderIconContent(
                    1,
                    [
                        [5, odds[1][5]],
                        [4, odds[1][4]],
                        [3, odds[1][3]],
                        [2, odds[1][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
                {renderIconContent(
                    0,
                    [
                        [5, odds[0][5]],
                        [4, odds[0][4]],
                        [3, odds[0][3]],
                        [2, odds[0][2]],
                    ],
                    t,
                    jackpot,
                    locale
                )}
            </div>
        </>
    );
};

const renderIconContentLarge = (symbol: number, dataContent: number[][], textAfterNumber: string) => {
    return (
        <span className={`${Styles["symbol-wrapper"]} ${Styles["large"]}`}>
            <div className="d-center">{generateSymbol(symbol)}</div>
            <div>
                {dataContent.map((data, index) => {
                    return (
                        <div key={index} className={`${Styles["symbol-content"]} ${symbol === 8 ? Styles["bonus"] : Styles["free-spin"]}`}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>
                                {data[1]} {textAfterNumber && <span className={Styles["text"]}>{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

const renderExamplePayout = (odds: number[][], jackpot: boolean, t: Function, locale: any) => {
    return (
        <>
            <p>
                <strong>{t("example", { ns: "Common" })}</strong>
            </p>

            <div className={`${Styles["example"]} table-medium`}>
                <div className={Styles["header"]}>
                    <div className={Styles["col"]}>{t("header_symbol", { ns: "Common" })}</div>
                    <div className={Styles["line"]}></div>
                    <div className={Styles["col"]}>{t("header_description", { ns: "Common" })}</div>
                </div>
                <div className={Styles["body"]}>
                    <div className={`${Styles["col"]} d-center-all`}>
                        <div className="d-center">
                            {renderIconContent(
                                1,
                                [
                                    [5, odds[1][5]],
                                    [4, odds[1][4]],
                                    [3, odds[1][3]],
                                ],
                                t,
                                jackpot,
                                locale
                            )}
                        </div>
                    </div>
                    <div className={Styles["line"]}></div>
                    <div className={`${Styles["col"]} ${Styles["has-rows"]}`}>
                        <div className={Styles["row"]}>
                            {t("desc_symbol1_para_1a", { numOfSymbols: 5 })}
                            {generateSymbol(1, false, true)}
                            {t("desc_symbol1_para_1b")}
                            <br></br>
                            {t("desc_symbol1_para_2", { odd: odds[1][5] })}
                        </div>
                        <div className={Styles["line"]}></div>
                        <div className={Styles["row"]}>
                            {" "}
                            {t("desc_symbol1_para_1a", { numOfSymbols: 4 })}
                            {generateSymbol(1, false, true)}
                            {t("desc_symbol1_para_1b")}
                            <br></br>
                            {t("desc_symbol1_para_2", { odd: odds[1][4] })}
                        </div>
                        <div className={Styles["line"]}></div>
                        <div className={Styles["row"]}>
                            {t("desc_symbol1_para_1a", { numOfSymbols: 3 })}
                            {generateSymbol(1, false, true)}
                            {t("desc_symbol1_para_1b")}
                            <br></br>
                            {t("desc_symbol1_para_2", { odd: odds[1][3] })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const renderFreeSpin = (odds: number[][], t: Function) => {
    const boardSymbols = [7, 4, 7, 6, 1, 2, 0, 7, 5, 4, 5, 4, 7, 0, 3];
    const highlightSymbol = 7;

    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("title_freespin", { ns: "Common" })}</h2>
            <div className={Styles["free-spin-container"]}>
                {renderIconContentLarge(
                    7,
                    [
                        [5, odds[7][5]],
                        [4, odds[7][4]],
                        [3, odds[7][3]],
                    ],
                    t("freespin_pic_7")
                )}
                <ul className="desc">
                    <li>{t("freespin_para_1")}</li>
                    <li>{t("freespin_para_2")}</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <Trans>{t("freespin_para_3")}</Trans>
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-symbol-ex"]}>
                            <div className={Styles["symbols"]}>{generateBoard(boardSymbols, highlightSymbol)}</div>
                        </div>

                        <span>{t("freespin_para_4")}</span>
                    </div>
                </li>
                <li className="clear-both">{t("freespin_para_5")}</li>
                <li>{t("freespin_para_6")}</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][], t: Function) => {
    const boardSymbols = [3, 4, 8, 6, 1, 8, 0, 2, 5, 4, 5, 4, 8, 0, 8];
    const highlightSymbol = 8;

    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("title_bonus", { ns: "Common" })}</h2>
            <div className={Styles["bonus-container"]}>
                {renderIconContentLarge(
                    8,
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    t("bonus_pic_5")
                )}
                <ul className="desc">
                    <li>{t("bonus_para_1")}</li>
                    <li>{t("bonus_para_2")}</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <Trans>{t("bonus_para_3")}</Trans>
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-symbol-ex"]}>
                            <div className={Styles["symbols"]}>{generateBoard(boardSymbols, highlightSymbol)}</div>
                        </div>

                        <span>{t("bonus_para_4")}</span>
                    </div>
                </li>
                <li>{t("bonus_para_5")}</li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][], t: Function, jackpot: boolean, locale: any) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("title_wild", { ns: "Common" })}</h2>
            <div className={Styles["wild-content"]}>
                <span className={Styles["wrapper-wild"]}>{generateSymbol(9)}</span>

                <ul className="desc">
                    <li>
                        {t("wild_para_1a")}
                        {generateSymbol(8, false, true)},{generateSymbol(7, false, true)}
                        {t("wild_para_1b")}
                        {jackpot ? generateSymbolJackpot(10, locale, false, true) : generateSymbol(10, false, true)}
                        {t("wild_para_1c_chinese")}
                    </li>
                    <li>{t("wild_para_2")}</li>
                </ul>
            </div>
            <div>
                <strong>{t("example", { ns: "Common" })}</strong>
                <div className={Styles["wrapper-wild-ex"]}>
                    <div className={Styles["wild-img"]}>{[2, 2, 9, 5, 5].map((symbol) => generateSymbol(symbol))}</div>
                    <ul className="desc">
                        <li>
                            {t("wild_para_3a")}
                            {generateSymbol(2, false, true)}
                            {t("wild_para_3b", { odd: odds[2][3] })}
                        </li>
                        <li>
                            {t("wild_para_3a")}
                            {generateSymbol(5, false, true)}
                            {t("wild_para_3b", { odd: odds[5][3] })}
                        </li>
                    </ul>
                    <p>{t("wild_para_5", { odd: Math.max(odds[2][3], odds[5][3]) })}</p>
                </div>
            </div>
        </li>
    );
};

const renderJackpot = (t: Function, locale: any, jackpotConfigs: JackpotConfigs) => {
    let contributionValue = "";
    let jackpotWinningRatio = "";

    if (jackpotConfigs) {
        const { winningRatio, pools } = jackpotConfigs;
        const contribution = pools ? pools.map((item) => item.contribute).reduce((prev, curr) => prev + curr, 0) : 0;
        contributionValue = `${new Intl.NumberFormat("en-US", {style:"decimal", maximumFractionDigits: 2}).format(contribution * 100)}%`;
        jackpotWinningRatio = `${winningRatio * 100}%`;
    }

    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("title_jackpot", { ns: "Common" })}</h2>
            <p>
                {t("jackpot_para_1a")}
                {generateSymbolJackpot(10, locale, false, true)}
                {t("jackpot_para_1b")}
            </p>
            <ul className="desc">
                <li>{t("jackpot_para_2")}</li>
                <li>
                    <Trans>{t("jackpot_para_3", { contribution_value: contributionValue })}</Trans>
                </li>
                <li>{t("jackpot_para_4")}</li>
                <li>{t("jackpot_para_5")}</li>
                <li>{t("jackpot_para_6")}</li>
            </ul>
            <div className="center">{generateSymbolJackpot(10, locale, false)}</div>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">{t("title_jackpot_mini_game", { ns: "Common" })}</span>
                    <ul className="desc">
                        <li>{t("jackpot_mini_game_para_1")}</li>
                        <li>{t("jackpot_mini_game_para_2")}</li>
                        <li>
                            {t("jackpot_mini_game_para_3")}
                            <p>
                                <Trans>{t("jackpot_mini_game_para_4", { winning_ratio: jackpotWinningRatio })}</Trans>
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const renderTermsAndConditions = (t: Function) => {
    return (
        <li className={`guide-item ${Styles["guide-item"]}`}>
            <h2 className={Styles["heading1"]}>{t("title_terms_conditions", { ns: "Common" })}</h2>
            <ul className="style-number-rule">
                {[1, 2, 3, 4].map((paraIndex) => (
                    <li key={`para-${paraIndex}`} className="number-dot">
                        {t(`terms_conditions_para_${paraIndex}`, { ns: "Common" })}
                    </li>
                ))}
            </ul>
        </li>
    );
};
const renderFirstRowIntoListIcon = (jackpot: boolean, locale: any) => {
    if (jackpot) {
        return (
            <>
                {generateSymbolJackpot(10, locale)}
                {[6, 5, 4].map((imgIndex) => generateSymbol(imgIndex))}
            </>
        );
    } else {
        return [10, 6, 5, 4].map((imgIndex) => generateSymbol(imgIndex));
    }
};

const Contents: React.FC<GameConfigProps> = (props) => {
    const { t } = useTranslate(["Classicslot", "Common"]);
    const { imgVersion } = useImgVersionContext();
    const { odds, name, displayName, jackpot, locale, gameConfigs } = props;
    imgSrc = appSettings.resourceUrl + name;
    imgVer = imgVersion ?? "";
    const router = useRouter();
    const mode = router?.query.mode === "portrait" ? Styles["portrait"] : "";

    return (
        <>
            <ul className={`game-guide ${Styles["slot-guide"]} ${mode}`}>
                <li className="guide-item">
                    <h2 className={Styles["heading1"]}>{t("title_introduction", { ns: "Common" })}</h2>
                    <p className="content">{t("intro_para_1", { gameName: displayName })}</p>
                    <div className={`${Styles["list-symbols"]} ${Styles["four-cols"]}`}>{renderFirstRowIntoListIcon(jackpot, locale)}</div>
                    <div className={`${Styles["list-symbols"]} ${Styles["four-cols"]}`}>
                        {[3, 2, 1, 0].map((imgIndex) => generateSymbol(imgIndex))}
                    </div>
                    <div className={`${Styles["list-symbols"]} ${Styles["three-cols"]}`}>
                        {[7, 8, 9].map((imgIndex) => generateSymbol(imgIndex))}
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(t, jackpot)}</li>

                {renderPayouts(odds, t, jackpot, locale)}
                {jackpot && renderJackpot(t, locale, gameConfigs.jackpot)}
                {renderFreeSpin(odds, t)}
                {renderBonus(odds, t)}
                {renderWild(odds, t, jackpot, locale)}
                {renderTermsAndConditions(t)}
            </ul>
        </>
    );
};
export default Contents;
