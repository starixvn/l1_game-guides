import { Trans, useTranslation } from "next-i18next";
import React from "react";
import { getImageDirectoryName } from ".";

import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import OddDetailList from "./OddDetail";

import Styles from "./cascading-slot.module.scss";
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
            </ul>
            {renderExampleGameRules(t)}
        </>
    );
};

const renderPayouts = ( odds: any,
    coin: number,
    level: number,
    maxWinPerRound: number,
    imageDirectoryName: string, t: Function) => {
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
                <li>{t("Payout-line-3")}</li>
            </ul>
            {renderPayoutsIconFirstLine(oddDetail, coin, level)}
            {renderPayoutsIconSecondLine(oddDetail, coin, level)}
            {renderExamplePayout(oddDetail[8], coin, level, imageDirectoryName, t)}
            
        </li>
    );
};

const generateSymbol = (iconIndex: number, prefixName: string, isHighlight = false, isSmall = false) => {
    return (
        <img
            key={`${prefixName}-${iconIndex}`}
            className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
            src={`${imgSrc}/${prefixName}-${iconIndex}.png?v=${imgVer}`}
            alt={`${prefixName}_${iconIndex}.`}
        />
    );
};

// const generateBoard = (symbols: Array<number>, highlightSymbol: number) =>
//     symbols.map((symbol) => generateSymbol(symbol, symbol === highlightSymbol));

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
                    <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png?v1`} alt={itemName}></img>
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

const renderIconContentLarge = (dataContent:OddDetailList, textAfterNumber: string) => {
    return (
        <span className={`${Styles["symbol-wrapper"]} ${Styles["large"]}`}>
            <div className="d-center">{generateSymbol(9, "symbol")}</div>
            <div>
                {dataContent.oddItem.map((data, index) => {
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

const renderExampleGameRules = (t: Function) => {
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Common-description")}</th>
                        <th>{t("Common-description")}</th>
                        <th>{t("Common-description")}</th>
                        <th>{t("Common-description")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderExamplePayout = (symbol: OddDetailList,
    coin: number,
    level: number,
    imageDirectoryName: string, t: Function) => {
    const oddItems = [...symbol.oddItem].reverse();
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
             <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Common-description")}</th>
                        <th>{t("Common-description")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                {renderIconContent("symbol-8", false, false, symbol, coin, level)}
                            </td>
                            <td> 
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[0].countString })}
                                <img src={`${imageDirectoryName}/symbol-8.png`} width={50} height={50} alt="item8" />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: +(+(oddItems[0].count * coin * level)).toFixed(2)})}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[1].countString })}
                                <img src={`${imageDirectoryName}/symbol-8.png`} width={50} height={50} alt="item8" />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: +(+(oddItems[1].count * coin * level)).toFixed(2)})}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[2].countString })}
                                <img src={`${imageDirectoryName}/symbol-8.png`} width={50} height={50} alt="item8" />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: +(+(oddItems[2].count * coin * level)).toFixed(2)})}
                            </td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderExampleFreespin = (oddDetail: OddDetailList[],
    imageDirectoryName: string, t: Function) => {
    const oddItems = [...oddDetail[0].oddItem].reverse();
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
             <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <th>{t("Common-description")}</th>
                        <th>{t("Common-description")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                {renderIconContentLarge(oddDetail[0], t("FreeSpin-upper-plural"))}
                            </td>
                            <td> 
                                {t("FreeSpin-example-description-1", { numOfScater: oddItems[0].countString })}
                                <br></br>
                                {t("FreeSpin-example-description-2", { value: oddItems[0].count})}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("FreeSpin-example-description-1", { numOfScater: oddItems[1].countString })}
                                <br></br>
                                {t("FreeSpin-example-description-2", { value: oddItems[1].count})}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("FreeSpin-example-description-1", { numOfScater: oddItems[2].countString })}
                                <br></br>
                                {t("FreeSpin-example-description-2", { value: oddItems[2].count})}
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
                        <th>{t("FreeSpin-roundid")}</th>
                        <th>{t("FreeSpin-tumble-win")}</th>
                        <th>{t("FreeSpin-multiplier")}</th>
                        <th>{t("FreeSpin-total-multiplier")}</th>
                        <th>{t("FreeSpin-win")}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>10</td>
                            <td>5</td>
                            <td>5</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>5</td>
                            <td>0</td>
                            <td>5</td>
                            <td>5</td>
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
                            <td>56</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </>
    );
}

const renderFreeSpins = (odds: number[][], imageDirectoryName: string, t: Function) => {
   
        const oddDetail = convertOddDetail(odds, true);
        //const oddItems = [...oddDetail[0].oddItem].reverse();
        //const { subDescriptions } = resources.freeSpin;
        //const { table, tumbleDescriptions } = resources.exampleFreeSpin;
        return (
            <>
                <li className="guide-item">
                    <h2 className={Styles["heading1"]}>{t("FreeSpin-title")}</h2>
                    <ul className="desc">
                        <li>{t("FreeSpin-line-1")}
                            {renderExampleFreespin(oddDetail, imageDirectoryName, t)}
                        </li>
                        <li>
                            {t("FreeSpin-line-2")}
                        </li>
                        <li>{t("FreeSpin-line-3")}</li>
                        <li>{t("FreeSpin-line-4")} 
                            <div className="text-center">{t("FreeSpin-win-amount")}</div>
                            {renderExampleWinFreespin(t)}
                        </li>
                        <li>{t("FreeSpin-line-5")} </li>
                    </ul>
                </li>
            </>
        );
};

const renderTumble = ( t: Function) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Tumble-title")}</h2>
            <ul className="desc">
                <li>{t("Tumble-line-1")}</li>
                <li>
                    {t("Tumble-line-2")}
                </li>
                <li>{t("Tumble-line-3")}</li>
            </ul>
        </li>
    );
};

const renderMultiplier = (t: Function) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Multiplier-title")}</h2>
            <div className="text-center">
                {[0, 1, 2, 3].map((imgIndex) => generateSymbol(imgIndex, "multiplier"))}        
            </div>
            <ul className="desc">
                <li>{t("Multiplier-line-1")}</li>
                <li>
                    {t("Multiplier-line-2")}
                </li>
                <li>{t("Multiplier-line-3")}
                {renderExampleMultiplier(t)}
                </li>
            </ul>
        </li>
    );
}

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
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </>
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

const convertOddDetail = (odd: any, isFreeSpin: boolean)  => {
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
    const { t } = useTranslation("cascadingslot");
    const { imgVersion } = useImgVersionContext();
    const { gameSettings, name, displayName, gameConfigs } = props;
    //imgSrc = appSettings.resourceUrl + name;
    imgSrc = getImageDirectoryName();
    imgVer = imgVersion ?? "";
    const odds = gameSettings.OddsByCounts;
    const betMultiplier = gameSettings.BetMultiplier;
    const betLevels = gameSettings.BetLevels;
    const coinValues = gameConfigs.coinValues;    

    const imageDirectoryName = getImageDirectoryName();
    const sortedCoinValue = coinValues.sort((a, b) => a - b);
    const sortedBetLevel = betLevels.sort((a, b) => a - b);
    const minBet = betMultiplier * sortedCoinValue[0] * sortedBetLevel[0];
    const maxBet = betMultiplier * sortedCoinValue[coinValues.length - 1] * sortedBetLevel[betLevels.length - 1];

    return (
        <>
            <ul className={`game-guide ${Styles["slot-guide"]}`}>
                <li className="guide-item">
                    <h2 className={Styles["heading1"]}>{t("Introduction-title")}</h2>
                    <p className="content">{t("Introduction-content", { gameName: displayName })}</p>
                    <div className={`${Styles["list-symbols"]} ${Styles["four-cols"]}`}>
                        {[10, 6, 5, 4].map((imgIndex) => generateSymbol(imgIndex, "symbol"))}
                    </div>
                    <div className={`${Styles["list-symbols"]} ${Styles["four-cols"]}`}>
                        {[3, 2, 1, 0].map((imgIndex) => generateSymbol(imgIndex, "symbol"))}
                    </div>
                    <div className={`${Styles["list-symbols"]} ${Styles["three-cols"]}`}>
                        {[7, 8, 9].map((imgIndex) => generateSymbol(imgIndex, "symbol"))}
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(t)}</li>

                {renderPayouts(odds, gameConfigs.coin, gameConfigs.level, gameSettings.maxWinPerRound, imageDirectoryName, t)}
                {renderTumble(t)}
                {renderFreeSpins(gameSettings.FreeSpins, imageDirectoryName, t)}
                {renderMultiplier(t)}
                {renderTermsAndConditions(t)}
            </ul>
        </>
    );
};
export default Contents;
