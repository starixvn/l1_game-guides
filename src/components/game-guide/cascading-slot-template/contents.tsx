import { Trans } from "next-i18next";
import { useTranslate } from "@tolgee/react";
import React from "react";
import { getImageDirectoryName } from ".";

import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import OddDetailList from "./OddDetail";

import Styles from "./cascading-slot.module.scss";
import { GameConfigProps } from "./type";
import HiLoGuideTemplate from "../hi-lo/templates/default";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const freeSpinContentEX = "wrapper-symbols-content";
let imgSrc = "",
    imgVer = "";

const renderGameRule = (coin: number, level: number, betMultiplier: number, t: Function) => {
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
                <li>{t("GameRule-line-4", {betMultiplier: betMultiplier})}</li>
            </ul>
            {renderExampleGameRules(coin, level, betMultiplier, t)}
        </>
    );
};

const renderPayouts = (odds: any, coin: number, level: number, maxWinPerRound: number, imageDirectoryName: string, t: Function) => {
    const currMaxBet = maxWinPerRound;
    const oddDetail = convertOddDetail(odds, false);
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Payout-title")}</h2>
            <ul className="desc">
                <li>{t("Payout-line-1")}</li>
                <li>
                    {t("Payout-line-2")}
                </li>
                <li>{t("Payout-line-3", {betLevel: level, coin: coin})}
                {renderPayoutsIconFirstLine(oddDetail, coin, level)}
                {renderPayoutsIconSecondLine(oddDetail, coin, level)}
                {renderExamplePayout(oddDetail[8], coin, level, t)}</li>
                <li>{t("Payout-line-4")}</li>
                <li>{t("Payout-line-5", {value: maxWinPerRound})}</li>
            </ul>
        </li>
    );
};

const generateSymbol = (iconIndex: number,  isHighlight = false, isSmall = false) => {
    return (
        <img
            key={`symbol-${iconIndex}`}
            className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
            src={`${imgSrc}/symbol-${iconIndex}.png?v=${imgVer}`}
            alt={`symbol_${iconIndex}`}
        />
    );
};

const generateSymbolMultiplier = (valueMultiplier: number, iconIndex: number,  isHighlight = false, isSmall = false ) => {
    return (
        <div className={Styles["symbol-multiplier"]}>
            <img key={`symbol-${iconIndex}`}
            className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
            src={`${imgSrc}/symbol-${iconIndex}.png?v=${imgVer}`}
                alt={`symbol_${iconIndex}`}
            />
            <div className={Styles["value"]}>X{valueMultiplier}</div>
        </div>
        
    );
};

const renderIconContent = ( itemName = "item10",
isContentTop = false,
isGem = false,
dataContent: OddDetailList,
coin: number,
level: number,
isReverse = true) => {
    const imageDirectoryName = getImageDirectoryName();
    const pathSrc = `${imageDirectoryName}/`;
    const oddItems = [...dataContent.oddItem].reverse();
    const oddItemList = isReverse ? oddItems : dataContent.oddItem;
    return (
        <div className={Styles["symbol-wrapper"]}>
            <div className="img-fluid">
                <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${imgSrc}/${itemName}.png?v1`} alt={itemName}></img>
            </div>

            <div
                className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${
                    isGem && Styles["gem-position"]
                }`}
            >
                {oddItemList.map((data, index) => {
                    const value = +(+(data.count * coin * level)).toFixed(2);

                    return (
                        <div key={index} className={Styles["icon-content"]}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data.countString}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{value}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const renderPayoutsIconFirstLine = (symbols: OddDetailList[], coin: number, level: number) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderIconContent("symbol-8", false, false, symbols[8], coin, level)}
                {renderIconContent("symbol-7", true, false, symbols[7], coin, level)}
                {renderIconContent("symbol-6", true, false, symbols[6], coin, level)}
                {renderIconContent("symbol-5", true, false, symbols[5], coin, level)}
            </div>
        </>
    );
};

const renderPayoutsIconSecondLine = (symbols: OddDetailList[], coin: number, level: number) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderIconContent("symbol-4", true, true, symbols[4], coin, level)}
                {renderIconContent("symbol-3", true, true, symbols[3], coin, level)}
                {renderIconContent("symbol-2", true, true, symbols[2], coin, level)}
                {renderIconContent("symbol-1", true, true, symbols[1], coin, level)}
                {renderIconContent("symbol-0", false, false, symbols[0], coin, level)}
            </div>
        </>
    );
};

const renderIconContentLarge = (dataContent: OddDetailList, textAfterNumber: string) => {
    return (
        <span className={`${Styles["symbol-wrapper"]} ${Styles["large"]}`}>
            <div className="d-center">{generateSymbol(9)}</div>
            <div>
                {dataContent.oddItem.reverse().map((data, index) => {
                    return (
                        <div key={index} className={`${Styles["symbol-content"]} ${Styles["free-spin"]}`}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data.countString}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>
                                {data.count} {textAfterNumber && <span className={Styles["text"]}>{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

const renderExampleGameRules = (coin:number, level: number, betMultiplier: number, t: Function) => {
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Bet-value")}</th>
                        <th>{t("Coin-value")}</th>
                        <th>{t("Bet-multiplier")}</th>
                        <th>{t("Total-bet")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{coin}</td>
                            <td>{level}</td>
                            <td>{betMultiplier}</td>
                            <td>{coin * level * betMultiplier}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderExamplePayout = (symbol: OddDetailList, coin: number, level: number, t: Function) => {
    const oddItems = [...symbol.oddItem].reverse();
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Common-symbol")}</th>
                        <th>{t("Common-description")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                <div className={`${Styles["example-icon-payout"]}`}>
                                    {renderIconContent("symbol-8", false, false, symbol, coin, level)}
                                </div>
                            </td>
                            <td> 
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[2].countString })}
                                <img src={`${imgSrc}/symbol-8.png?v=${imgVer}`} width={50} height={50} alt="item8" />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: +(+(oddItems[0].count * coin * level)).toFixed(2) })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[1].countString })}
                                <img src={`${imgSrc}/symbol-8.png?v=${imgVer}`} width={50} height={50} alt="item8" />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: +(+(oddItems[1].count * coin * level)).toFixed(2) })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[0].countString })}
                                <img src={`${imgSrc}/symbol-8.png?v=${imgVer}`} width={50} height={50} alt="item8" />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: +(+(oddItems[2].count * coin * level)).toFixed(2) })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderExampleFreespin = (oddDetail: OddDetailList[], imageDirectoryName: string, t: Function) => {
    const oddItems = [...oddDetail[0].oddItem].reverse();
    return (
        <>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Common-symbol")}</th>
                        <th>{t("Common-description")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3} className={`${Styles["freespin"]}`}>{renderIconContentLarge(oddDetail[0], t("FreeSpin-upper-plural"))}</td>
                            <td>
                                {t("FreeSpin-example-description-1", { numOfScater: oddItems[0].countString })}
                                <br></br>
                                {t("FreeSpin-example-description-2", { value: oddItems[0].count })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("FreeSpin-example-description-1", { numOfScater: oddItems[1].countString })}
                                <br></br>
                                {t("FreeSpin-example-description-2", { value: oddItems[1].count })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("FreeSpin-example-description-1", { numOfScater: oddItems[2].countString })}
                                <br></br>
                                {t("FreeSpin-example-description-2", { value: oddItems[2].count })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderExampleWinFreespin = (t: Function) => {
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
                <span>{t("FreeSpin-description-example-win")}</span>
            </p>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Roundid")}</th>
                        <th>{t("Tumble-win")}</th>
                        <th>{t("Multiplier")}</th>
                        <th>{t("Total-multiplier")}</th>
                        <th>{t("Win")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>10</td>
                            <td>5</td>
                            <td>5</td>
                            <td>50 <br></br>{t("Win-amount-expression")} </td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>5</td>
                            <td>0</td>
                            <td>5</td>
                            <td>5<br></br>{t("Tumble-win")}</td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>0</td>
                            <td>2</td>
                            <td>5</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>7</td>
                            <td>3</td>
                            <td>8</td>
                            <td>56<br></br>{t("Win-amount-expression")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

const renderFreeSpins = (odds: number[][], imageDirectoryName: string, t: Function) => {
   
        const oddDetail = convertOddDetail(odds, true);
        return (
            <>
                <li className="guide-item">
                    <h2 className={Styles["heading1"]}>{t("FreeSpin-title")}</h2>
                    <ul className="desc">
                        <li>{t("FreeSpin-line-1")}
                            {renderExampleFreespin(oddDetail, imageDirectoryName, t)}
                        </li>
                        <li>
                            {t("FreeSpin-line-2", {value: oddDetail[1].oddItem[0].count})}
                        </li>
                        <li>{t("FreeSpin-line-3")}</li>
                        <li>{t("FreeSpin-line-6")}</li>
                        <li>{t("FreeSpin-line-4")} 
                            <div className="text-center">{t("Win-amount")}</div>
                            {renderExampleWinFreespin(t)}
                        </li>
                        <li>{t("FreeSpin-line-5")} </li>
                    </ul>
                </li>
            </>
        );
};



const renderTumble = (t: Function) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Tumble-title")}</h2>
            <ul className="desc">
                <li>{t("Tumble-line-1")}</li>
                <li>{t("Tumble-line-2")}</li>
                <li>{t("Tumble-line-3")}</li>
            </ul>
        </li>
    );
};

const renderMultiplier = (t: Function) => {
    const boardSymbols = [8, 1, 4, 5, 1, 4, 0, 0, 1, 2, 3, 2, 9, 1, 1, 1, 0, 11, 4, 1, 1, 1, 3, 13, 2, 7, 6, 2, 3, 8];
    const highlightSymbol = [1, 11, 13];

    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Multiplier-title")}</h2>
            <div className="text-center">
                {[10, 11, 12, 13].map((imgIndex) => generateSymbol(imgIndex))}        
            </div>
            <ul className="desc">
                <li>{t("Multiplier-line-1")}</li>
                <li>{t("Multiplier-line-2")}</li>
                <li>{t("Multiplier-line-3")}
                    <div className={Styles["wrapper-symbol-ex"]}>
                        <div className={Styles["symbols"]}>{generateBoard(boardSymbols, highlightSymbol)}</div>
                    </div>
                {renderExampleMultiplier(t)}
                </li>
            </ul>
        </li>
    );
};

const renderExampleMultiplier = (t: Function) => {
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Win-symbols")}</th>
                        <th>{t("Tumble-win")}</th>
                        <th>{t("Multiplier")}</th>
                        <th>{t("Win")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{generateSymbol(1)}</td>
                            <td>0.4</td>
                            <td>22<br></br>(20+2)</td>
                            <td>8.8 <br></br>(0.4 * 22)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const generateBoard = (symbols: Array<number>, highlightSymbol: Array<number>) =>
    symbols.map((symbol) =>  {
        if(symbol > 10) {
            const value = symbol === 11 ? 20 : 2;
            return generateSymbolMultiplier(value, symbol, highlightSymbol.includes(symbol));
        }
        else {
            return generateSymbol(symbol, highlightSymbol.includes(symbol));
        }
        });

    
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

const convertOddDetail = (odd: any, isFreeSpin: boolean) => {
    const oddList: OddDetailList[] = [];
    for (const item in odd) {
        const symbol = odd[item];
        const oddDetail: OddDetailList = { oddItem: [] };
        for (const sub in symbol) {
            if (!isFreeSpin) {
                const from = symbol[sub].From;
                const to = symbol[sub].To;
                const oddValue = symbol[sub].Odds;
                oddDetail.oddItem.push({
                    countString: `${from}-${to}`,
                    count: oddValue,
                });
            } else {
                oddDetail.oddItem.push({
                    countString: symbol[sub].Count,
                    count: symbol[sub].Odds,
                });
            }
        }
        oddList.push(oddDetail);
    }
    return oddList;
};

const Contents: React.FC<GameConfigProps> = (props) => {
    const { t } = useTranslate("cascadingslot");
    const { imgVersion } = useImgVersionContext();
    const { gameSettings, name, displayName, gameConfigs } = props;
    imgSrc = appSettings.resourceUrl + name;
    //imgSrc = getImageDirectoryName();
    imgVer = imgVersion ?? "";
    const odds = gameSettings.OddsByCounts;
    const betMultiplier = gameSettings.BetMultiplier;
    const betLevels = gameSettings.BetLevels;
    const coinValues = gameConfigs.coinValues;

    const imageDirectoryName = getImageDirectoryName();
    const sortedCoinValue = coinValues.sort((a: number, b: number) => a - b);
    const sortedBetLevel = betLevels.sort((a: number, b: number) => a - b);
    const minBet = betMultiplier * sortedCoinValue[0] * sortedBetLevel[0];
    const maxBet = betMultiplier * sortedCoinValue[coinValues.length - 1] * sortedBetLevel[betLevels.length - 1];

    return (
        <>
            <ul className={`game-guide ${Styles["slot-guide"]}`}>
                <li className="guide-item">
                    <h2 className={Styles["heading1"]}>{t("Introduction-title")}</h2>
                    <p className="content">{t("Introduction-content", { gameName: displayName })}</p>
                    <div className={`${Styles["list-symbols-wrapper"]}`}>
                        <div className={`${Styles["symbols-rowspan"]}`}>
                            {generateSymbol(9)}
                        </div>
                        <div className={`${Styles["symbols-row-1"]}`}>
                            {[8, 7, 6, 5].map((imgIndex) => generateSymbol(imgIndex))}
                        </div>
                        <div className={`${Styles["symbols-row-2"]}`}>
                            {[4, 3, 2, 1, 0].map((imgIndex) => generateSymbol(imgIndex))}
                        </div>
                    </div>                   
                </li>
                <li className="guide-item">{renderGameRule(gameConfigs.coin, gameConfigs.level, betMultiplier, t)}</li>

                {renderPayouts(odds, gameConfigs.coin, gameConfigs.level, gameSettings.MaxWinPerRound, imageDirectoryName, t)}
                {renderTumble(t)}
                {renderMultiplier(t)}
                {renderFreeSpins(gameSettings.FreeSpins, imageDirectoryName, t)}                
                {renderTermsAndConditions(t)}
            </ul>
        </>
    );
};
export default Contents;
