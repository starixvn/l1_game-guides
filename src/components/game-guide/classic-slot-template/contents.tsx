import { Trans, useTranslation } from "next-i18next";
import React from "react";

import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import Styles from "./classic-slot.module.scss";
import { GameConfigProps } from "./type";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const freeSpinContentEX = "wrapper-symbols-content";
let imgSrc = "",
    imgVer = "";

const renderGameRule = (t: Function) => {
    return (
        <>
            <h2 className={Styles["heading1"]}>{t("GameRule-title")}</h2>
            <ul className="desc">
                <li>
                    {t("GameRule-line-1")}
                    <div className="text-center">
                        <Trans>{t("GameRule-totalBet")}</Trans>
                    </div>
                </li>

                <li>{t("GameRule-line-2")}</li>
                <li>{t("GameRule-line-3")}</li>
                <li>{t("GameRule-line-4")}</li>
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

const renderPayouts = (odds: number[][], t: Function) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Paytable-title")}</h2>
            <ul className="desc">
                <li>{t("Paytable-line-1")}</li>
                <li>
                    <Trans>{t("Paytable-line-2")}</Trans>
                </li>
                <li>{t("Paytable-line-3")}</li>
            </ul>
            {renderPayoutsIconFirstLine(odds)}
            {renderPayoutsIconSecondLine(odds)}
            {renderExamplePayout(odds, t)}
        </li>
    );
};

const generateSymbol = (iconIndex: number, isHighlight = false, isSmall = false) => {
    return (
        <img
            key={`symbol-${iconIndex}`}
            className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
            src={`${imgSrc}/symbol-${iconIndex}.png?v=${imgVer}`}
            alt={`symbol_${iconIndex}.`}
        />
    );
};

const generateBoard = (symbols: Array<number>, highlightSymbol: number) =>
    symbols.map((symbol) => generateSymbol(symbol, symbol === highlightSymbol));

const renderIconContent = (symbol: number, dataContent: number[][]) => {
    return (
        <div className={Styles["symbol-wrapper"]}>
            <div className="d-center">{generateSymbol(symbol)}</div>

            <div>
                {dataContent.map((data, index) => {
                    if (!data[1]) {
                        return;
                    }

                    return (
                        <div key={index} className={Styles["symbol-content"]}>
                            <span className={Styles[number]}>{data[0]}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{data[1]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const renderPayoutsIconFirstLine = (odds: number[][]) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderIconContent(9, [
                    [5, odds[9][5]],
                    [4, odds[9][4]],
                    [3, odds[9][3]],
                    [2, odds[9][2]],
                ])}
                {renderIconContent(10, [
                    [5, odds[10][5]],
                    [4, odds[10][4]],
                    [3, odds[10][3]],
                ])}
                {renderIconContent(6, [
                    [5, odds[6][5]],
                    [4, odds[6][4]],
                    [3, odds[6][3]],
                ])}
                {renderIconContent(5, [
                    [5, odds[5][5]],
                    [4, odds[5][4]],
                    [3, odds[5][3]],
                ])}
            </div>
        </>
    );
};

const renderPayoutsIconSecondLine = (odds: number[][]) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderIconContent(4, [
                    [5, odds[4][5]],
                    [4, odds[4][4]],
                    [3, odds[4][3]],
                ])}
                {renderIconContent(3, [
                    [5, odds[3][5]],
                    [4, odds[3][4]],
                    [3, odds[3][3]],
                ])}
                {renderIconContent(2, [
                    [5, odds[2][5]],
                    [4, odds[2][4]],
                    [3, odds[2][3]],
                ])}
                {renderIconContent(1, [
                    [5, odds[1][5]],
                    [4, odds[1][4]],
                    [3, odds[1][3]],
                ])}
                {renderIconContent(0, [
                    [5, odds[0][5]],
                    [4, odds[0][4]],
                    [3, odds[0][3]],
                    [2, odds[0][2]],
                ])}
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

const renderExamplePayout = (odds: number[][], t: Function) => {
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>

            <div className={`${Styles["example"]} table-medium`}>
                <div className={Styles["header"]}>
                    <div className={Styles["col"]}>{t("Common-symbol")}</div>
                    <div className={Styles["line"]}></div>
                    <div className={Styles["col"]}>{t("Common-description")}</div>
                </div>
                <div className={Styles["body"]}>
                    <div className={`${Styles["col"]} d-center-all`}>
                        <div className="d-center">
                            {renderIconContent(1, [
                                [5, odds[1][5]],
                                [4, odds[1][4]],
                                [3, odds[1][3]],
                            ])}
                        </div>
                    </div>
                    <div className={Styles["line"]}></div>
                    <div className={`${Styles["col"]} ${Styles["has-rows"]}`}>
                        <div className={Styles["row"]}>
                            {t("Paytbale-example-description-1", { numOfSymbols: 5 })}
                            {generateSymbol(1, false, true)}
                            {t("Paytbale-example-description-2")}
                            <br></br>
                            {t("Paytbale-example-description-3", { odd: odds[1][5] })}
                        </div>
                        <div className={Styles["line"]}></div>
                        <div className={Styles["row"]}>
                            {" "}
                            {t("Paytbale-example-description-1", { numOfSymbols: 4 })}
                            {generateSymbol(1, false, true)}
                            {t("Paytbale-example-description-2")}
                            <br></br>
                            {t("Paytbale-example-description-3", { odd: odds[1][4] })}
                        </div>
                        <div className={Styles["line"]}></div>
                        <div className={Styles["row"]}>
                            {t("Paytbale-example-description-1", { numOfSymbols: 3 })}
                            {generateSymbol(1, false, true)}
                            {t("Paytbale-example-description-2")}
                            <br></br>
                            {t("Paytbale-example-description-3", { odd: odds[1][3] })}
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
            <h2 className={Styles["heading1"]}>{t("FreeSpin-title")}</h2>
            <div className={Styles["free-spin-container"]}>
                {renderIconContentLarge(
                    7,
                    [
                        [5, odds[7][5]],
                        [4, odds[7][4]],
                        [3, odds[7][3]],
                    ],
                    t("FreeSpin-upper-plural")
                )}
                <ul className="desc">
                    <li>{t("FreeSpin-line-1")}</li>
                    <li>{t("FreeSpin-line-2")}</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <Trans>{t("FreeSpin-line-3")}</Trans>
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-symbol-ex"]}>
                            <div className={Styles["symbols"]}>{generateBoard(boardSymbols, highlightSymbol)}</div>
                        </div>

                        <span>{t("FreeSpin-line-4")}</span>
                    </div>
                </li>
                <li className="clear-both">{t("FreeSpin-line-5")}</li>
                <li>{t("FreeSpin-line-6")}</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][], t: Function) => {
    const boardSymbols = [3, 4, 8, 6, 1, 8, 0, 2, 5, 4, 5, 4, 8, 0, 8];
    const highlightSymbol = 8;

    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Bonus-title")}</h2>
            <div className={Styles["bonus-container"]}>
                {renderIconContentLarge(
                    8,
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    t("Bonus-upper-plural")
                )}
                <ul className="desc">
                    <li>{t("Bonus-line-1")}</li>
                    <li>{t("Bonus-line-2")}</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <Trans>{t("Bonus-line-3")}</Trans>
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-symbol-ex"]}>
                            <div className={Styles["symbols"]}>{generateBoard(boardSymbols, highlightSymbol)}</div>
                        </div>

                        <span>{t("Bonus-line-4")}</span>
                    </div>
                </li>
                <li>{t("Bonus-line-5")}</li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][], t: Function) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Wild-title")}</h2>
            <div className={Styles["wild-content"]}>
                <span className={Styles["wrapper-wild"]}>{generateSymbol(9)}</span>

                <ul className="desc">
                    <li>
                        {t("Wild-line-1")}
                        {generateSymbol(8, false, true)},{generateSymbol(7, false, true)}
                        {t("Wild-word-and")}
                        {generateSymbol(10, false, true)}
                        {t("Wild-line-1-extend")}
                    </li>
                    <li>{t("Wild-line-2")}</li>
                </ul>
            </div>
            <div>
                <strong>{t("Common-example")}</strong>
                <div className={Styles["wrapper-wild-ex"]}>
                    <div className={Styles["wild-img"]}>{[2, 2, 9, 5, 5].map((symbol) => generateSymbol(symbol))}</div>
                    <ul className="desc">
                        <li>
                            {t("Wild-example-description-1")}
                            {generateSymbol(2, false, true)}
                            {t("Wild-example-description-2", { odd: odds[2][3] })}
                        </li>
                        <li>
                            {t("Wild-example-description-1")}
                            {generateSymbol(5, false, true)}
                            {t("Wild-example-description-2", { odd: odds[5][3] })}
                        </li>
                    </ul>
                    <p>{t("Wild-example-description-3", { odd: Math.max(odds[2][3], odds[5][3]) })}</p>
                </div>
            </div>
        </li>
    );
};

const renderTermsAndConditions = (t: Function) => {
    return (
        <li className={`guide-item ${Styles["guide-item"]}`}>
            <h2 className={Styles["heading1"]}>{t("TermsAndConditions-title")}</h2>
            <ul className="style-number-rule">
                <li className="number-dot">{t("TermsAndConditions-line-1")}</li>
                <li className="number-dot">{t("TermsAndConditions-line-2")}</li>
                <li className="number-dot">{t("TermsAndConditions-line-3")}</li>
                <li className="number-dot">{t("TermsAndConditions-line-4")}</li>
            </ul>
        </li>
    );
};

const Contents: React.FC<GameConfigProps> = (props) => {
    const { t } = useTranslation("classicslot");
    const { imgVersion } = useImgVersionContext();
    const { odds, name, displayName } = props;
    imgSrc = appSettings.resourceUrl + name;
    imgVer = imgVersion ?? "";

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2 className={Styles["heading1"]}>{t("Introduction-title")}</h2>
                    <p className="content">{t("Introduction-content", { gameName: displayName })}</p>
                    <div className={`${Styles["list-symbols"]} ${Styles["four-cols"]}`}>
                        {[10, 6, 5, 4].map((imgIndex) => generateSymbol(imgIndex))}
                    </div>
                    <div className={`${Styles["list-symbols"]} ${Styles["four-cols"]}`}>
                        {[3, 2, 1, 0].map((imgIndex) => generateSymbol(imgIndex))}
                    </div>
                    <div className={`${Styles["list-symbols"]} ${Styles["three-cols"]}`}>
                        {[7, 8, 9].map((imgIndex) => generateSymbol(imgIndex))}
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(t)}</li>

                {renderPayouts(odds, t)}
                {renderFreeSpin(odds, t)}
                {renderBonus(odds, t)}
                {renderWild(odds, t)}
                {renderTermsAndConditions(t)}
            </ul>
        </>
    );
};
export default Contents;
