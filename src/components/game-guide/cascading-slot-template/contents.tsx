import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { Trans } from "next-i18next";
import React from "react";

import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { numberWithCommas, numberWithCommasAndSuffix } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import Styles from "./cascading-slot.module.scss";
import OddDetailList from "./OddDetail";
import { GameConfigProps } from "./type";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
let imgSrc = "",
    imgVer = "";

const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}`;
};

const renderGameRule = (coin: number, level: number, betMultiplier: number, t: Function) => {
    return (
        <>
            <h2 className={Styles["heading1"]}>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    {t("GameRule-line-1")}
                    <div className="text-center">
                        <Trans>{t("GameRule-totalBet")}</Trans>
                    </div>
                </li>

                <li>{t("GameRule-line-2")}</li>
                <li>{t("GameRule-line-3")}</li>
                <li>{t("GameRule-line-4", { betMultiplier: betMultiplier })}</li>
            </ul>
            {renderExampleGameRules(coin, level, betMultiplier, t)}
        </>
    );
};

const renderPayouts = ({
    odds,
    coin,
    level,
    maxWinPerRound,
    t,
    isRemodeling,
    volatility,
    freeSpin,
}: {
    odds: any;
    coin: number;
    level: number;
    maxWinPerRound: number;
    t: Function;
    isRemodeling: boolean;
    volatility: number;
    freeSpin?: any;
}) => {
    const oddDetail = convertOddDetail(odds, false);

    const volatilityImage = (isFilled: boolean) => (
        <img src={`./static/images/slot/volatility-${isFilled ? "filled" : "empty"}.png`} alt="" width="20rem" height="20rem" />
    );

    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Payout-title")}</h2>
            <ul className="desc">
                <li>{t("Payout-line-1")}</li>
                <li>{t("Payout-line-2")}</li>
                <li>
                    {t("Payout-line-3", { betLevel: level, coin: coin })}
                    {renderPayoutsIconFirstLine(oddDetail, coin, level)}
                    {renderPayoutsIconSecondLine(oddDetail, coin, level)}
                    {renderPayoutsIconThirdLine(oddDetail, coin, level)}
                    {isRemodeling && renderPayoutsIconFourthLine(freeSpin, oddDetail[9], coin, level)}
                    {renderExamplePayout(oddDetail[8], coin, level, t)}
                </li>
                <li>{t("Payout-line-4")}</li>
                <li>{t("Payout-line-5", { value: maxWinPerRound })}</li>
                <li>{t(`paytable_line_6_${volatility === 5 ? "high" : "low"}_volatility`)}</li>
                <div className={Styles["volatility-wrapper"]}>
                    <div className={Styles["volatility-content"]}>
                        {t(`volatility`)}
                        <div className={Styles["volatility-stars"]}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <div key={index} className={`${Styles["volatility-star"]}`}>
                                    {volatilityImage(index < volatility)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ul>
        </li>
    );
};

const generateSymbol = (iconIndex: number, key: number, isHighlight = false, isSmall = false) => {
    return (
        <div className={`${Styles["image-wrapper"]} ${isHighlight ? Styles["highlight"] : ""}`} key={key}>
            {isHighlight && (
                <img
                    className={Styles["symbol-highlight"]}
                    width={60}
                    height={60}
                    src={`${imgSrc}/bg-reel-highlight.png?v=${imgVer}`}
                    alt={`bg-reel-highlight`}
                />
            )}
            <img
                className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
                src={`${imgSrc}/symbol-${iconIndex}.png?v=${imgVer}`}
                alt={`symbol_${iconIndex}`}
            />
        </div>
    );
};

const generateSymbolMultiplier = (valueMultiplier: number, iconIndex: number, index: number, isHighlight = false, isSmall = false) => {
    return (
        <div className={Styles["symbol-multiplier"]} key={index}>
            <img
                className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
                src={`${imgSrc}/bg-s${iconIndex}.png?v=${imgVer}`}
                alt={`bg-s${iconIndex}`}
                style={{ position: "absolute", zIndex: -1 }}
            />
            <img
                className={`${isSmall ? Styles["symbol-small"] : "img-fluid"} ${isHighlight ? Styles["highlight"] : ""}`}
                src={`${imgSrc}/symbol-${iconIndex}.png?v=${imgVer}`}
                alt={`symbol_${iconIndex}`}
            />
            <div className={Styles["value"]}>
                <img alt={`symbol_${valueMultiplier}`} src={`${imgSrc}/multiplier-x${valueMultiplier}.png?v=${imgVer}`} />
            </div>
        </div>
    );
};

const renderIconContent = (
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: OddDetailList,
    coin: number,
    level: number,
    isReverse = true
) => {
    const oddItems = [...dataContent.oddItem].reverse();
    const oddItemList = isReverse ? oddItems : dataContent.oddItem;

    return (
        <div className={Styles["symbol-wrapper"]}>
            <div className="img-fluid">
                <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${imgSrc}/${itemName}.png?v1`} alt={itemName}></img>
            </div>

            <div
                className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${isGem && Styles["gem-position"]
                    }`}
            >
                {oddItemList.map((data) => {
                    const value = data.count * coin * level;
                    return (
                        <div key={generateKey(data.count)} className={Styles["icon-content"]}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data.countString}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{numberWithCommasAndSuffix(value, 2)}</span>
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
            </div>
        </>
    );
};

const renderPayoutsIconSecondLine = (symbols: OddDetailList[], coin: number, level: number) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderIconContent("symbol-5", true, false, symbols[5], coin, level)}
                {renderIconContent("symbol-4", true, true, symbols[4], coin, level)}
                {renderIconContent("symbol-3", true, true, symbols[3], coin, level)}
            </div>
        </>
    );
};

const renderPayoutsIconThirdLine = (symbols: OddDetailList[], coin: number, level: number) => {
    return (
        <>
            <div className={Styles["payout-row"]}>
                {renderIconContent("symbol-2", true, true, symbols[2], coin, level)}
                {renderIconContent("symbol-1", true, true, symbols[1], coin, level)}
                {renderIconContent("symbol-0", false, false, symbols[0], coin, level)}
            </div>
        </>
    );
};

const renderPayoutsIconFourthLine = (freeSpin: any, oddDetail: any, coin: number, level: number) => {
    const itemName = "symbol-9";
    return (
        <div className={Styles["payout-row"]}>
            {
                <div className={Styles["symbol-wrapper"]}>
                    <div className="img-fluid">
                        <img
                            className={`${Styles[itemName]} ${Styles["customize"]}`}
                            src={`${imgSrc}/${itemName}.png?v1`}
                            alt={itemName}
                        ></img>
                    </div>
                    <div>
                        {freeSpin.InitialOdds.reverse().map((data: any, index: number) => {
                            const odds = oddDetail.oddItem.reverse()[index].count;
                            const value = +(odds * coin * level).toFixed(2);
                            return (
                                <div key={generateKey(data.Count)} className={Styles["icon-content"]}>
                                    <span className={`${Styles[number]} ${Styles[numberFirst]}`}>
                                        {index === 0 ? "≥" : ""}
                                        {data.Count}
                                    </span>
                                    <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{numberWithCommas(value)}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </div>
    );
};

const renderCountFreeSpin = (count: number) => {
    if (count < 6) {
        return <span>{count}</span>;
    } else {
        return (
            <span className={`${Styles["ex-wrapper"]}`}>
                <span>{count}</span>
            </span>
        );
    }
};

const renderIconContentLarge = (dataContent: OddDetailList, textAfterNumber: string) => {
    return (
        <div className={`${Styles["symbol-wrapper"]} ${Styles["large"]}`}>
            {generateSymbol(9, 9)}
            <div>
                {dataContent.oddItem.reverse().map((data) => {
                    return (
                        <div key={generateKey(data.count)} className={`${Styles["symbol-content"]} ${Styles["free-spin"]}`}>
                            <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{renderCountFreeSpin(+data.countString)}</span>
                            <span className={`${Styles[number]} ${Styles[numberSecond]}`}>
                                <span className={Styles["value-count"]}>{data.count}</span>
                                {textAfterNumber && <span>{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const renderExampleGameRules = (coin: number, level: number, betMultiplier: number, t: Function) => {
    const totalBet = +(coin * level * betMultiplier).toFixed(2);
    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <tr>
                            <th>{t("Bet-level")}</th>
                            <th>{t("Coin-value")}</th>
                            <th>{t("Bet-multiplier")}</th>
                            <th>{t("Total-bet")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{level}</td>
                            <td>{coin}</td>
                            <td>{betMultiplier}</td>
                            <td>{numberWithCommas(totalBet)}</td>
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
                        <tr>
                            <th>{t("Common-symbol")}</th>
                            <th>{t("Common-description")}</th>
                        </tr>
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
                                <img
                                    className={Styles["symbol-example"]}
                                    src={`${imgSrc}/symbol-8.png?v=${imgVer}`}
                                    width={50}
                                    height={50}
                                    alt="item8"
                                />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: numberWithCommas(+(oddItems[0].count * coin * level)) })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[1].countString })}
                                <img
                                    className={Styles["symbol-example"]}
                                    src={`${imgSrc}/symbol-8.png?v=${imgVer}`}
                                    width={50}
                                    height={50}
                                    alt="item8"
                                />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: numberWithCommas(+(oddItems[1].count * coin * level)) })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("Payout-example-description-1", { numOfSymbols: symbol.oddItem[0].countString })}
                                <img
                                    className={Styles["symbol-example"]}
                                    src={`${imgSrc}/symbol-8.png?v=${imgVer}`}
                                    width={50}
                                    height={50}
                                    alt="item8"
                                />{" "}
                                {t("Payout-example-description-2")}
                                <br></br>
                                {t("Payout-example-description-3", { value: numberWithCommas(+(oddItems[2].count * coin * level)) })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderExampleFreespin = (oddDetail: OddDetailList[], t: Function) => {
    const oddItems = [...oddDetail[0].oddItem].reverse();
    return (
        <>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <tr>
                            <th>{t("Common-symbol")}</th>
                            <th>{t("Common-description")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3} className={`${Styles["freespin"]}`}>
                                {renderIconContentLarge(oddDetail[0], t("FreeSpin-upper-plural"))}
                            </td>
                            <td>
                                {t("FreeSpin-example-description-or-more", { numOfScater: oddItems[0].countString })}
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
                        <tr>
                            <th>{t("Roundid")}</th>
                            <th>{t("Tumble-win")}</th>
                            <th>{t("Multiplier")}</th>
                            <th>{t("Total-multiplier")}</th>
                            <th>{t("Win")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>10</td>
                            <td>5</td>
                            <td>5</td>
                            <td>
                                50 <br></br>
                                {t("Win-amount-expression")}{" "}
                            </td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>5</td>
                            <td>0</td>
                            <td>5</td>
                            <td>
                                5<br></br>({t("Tumble-win")})
                            </td>
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
                            <td>
                                56<br></br>
                                {t("Win-amount-expression")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderFreeSpins = ({
    odds,
    t,
    isRemodeling,
    isAutoSettle,
}: {
    odds: number[][];
    t: Function;
    isRemodeling: boolean;
    isAutoSettle: boolean;
}) => {
    const oddDetail = convertOddDetail(odds, true);
    const symbol9Src = `<img className={Styles["symbol-example"]}  src=${`${imgSrc}/symbol-9.png?v=${imgVer}`} width=40 height=40 alt="item9" />`;

    const freeSpinLine1Data = oddDetail[0].oddItem.reduce((lowest, current) =>
        current.countString < lowest.countString ? current : lowest
    );

    return (
        <>
            <li className="guide-item">
                <h2 className={Styles["heading1"]}>{t("FreeSpin-title")}</h2>
                <ul className="desc">
                    <li>
                        {isRemodeling ? (
                            <>
                                {
                                    <Markup
                                        content={`<li>
                                            ${t("free_spin_line_1", {
                                            numOfScatters: freeSpinLine1Data.countString,
                                            numOfSpins: freeSpinLine1Data.count,
                                            image: symbol9Src,
                                        })}
                                            </li>`}
                                    />
                                }
                            </>
                        ) : (
                            t("FreeSpin-line-1")
                        )}

                        {!isRemodeling && renderExampleFreespin(oddDetail, t)}
                    </li>
                    <li>
                        {isRemodeling ? (
                            <>
                                {
                                    <Markup
                                        content={`<li>
                                            ${t("free_spin_line_2", {
                                            numOfScatters: oddDetail[1].oddItem[0].countString,
                                            numOfSpins: oddDetail[1].oddItem[0].count,
                                            image: symbol9Src,
                                        })}
                                            </li>`}
                                    />
                                }
                            </>
                        ) : (
                            t("FreeSpin-line-2", { value: oddDetail[1].oddItem[0].count })
                        )}
                    </li>
                    <li>{t("FreeSpin-line-3")}</li>
                    <li>{t("FreeSpin-line-6")}</li>
                    <li>
                        {t("FreeSpin-line-4")}
                        <div className="text-center">{t("Win-amount")}</div>
                        {renderExampleWinFreespin(t)}
                    </li>
                    <li>{t(`${isAutoSettle ? "free_spin_line_5" : "FreeSpin-line-5"}`)} </li>
                </ul>
            </li>
        </>
    );
};

const renderBuyFreeSpin = (t: Function, multiplier: number) => {
    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("buy_free_spins")}</h2>
            <ul className="desc">
                <li>{t("buy_free_spins_line_1", { value: multiplier })}</li>
                <li>{t("buy_free_spins_line_2", { value: 4 })}</li>
            </ul>
        </li>
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

const renderMultiplier = (odd: any, coin: number, level: number, t: Function) => {
    const boardSymbols = [8, 1, 4, 5, 1, 4, 0, 0, 1, 2, 3, 2, 9, 1, 1, 1, 0, 12, 4, 1, 1, 1, 3, 10, 2, 7, 6, 2, 3, 8];
    const highlightSymbol = [1, 10, 12];
    const oddDetail = convertOddDetail(odd, false);
    const bgWidth = 394;
    const bgHeight = 337;

    return (
        <li className="guide-item">
            <h2 className={Styles["heading1"]}>{t("Multiplier-title")}</h2>
            <div className={`${Styles["multiplier-symbol"]} text-center`}>
                {[10, 11, 12, 13].map((imgIndex) => generateSymbol(imgIndex, imgIndex))}
            </div>
            <ul className="desc">
                <li>{t("Multiplier-line-1")}</li>
                <li>{t("Multiplier-line-2")}</li>
                <li>
                    {t("Multiplier-line-3")}
                    <div className={Styles["wrapper-symbol-ex"]}>
                        <img
                            className={Styles["slot-area-bg"]}
                            width={bgWidth}
                            height={bgHeight}
                            src={`${imgSrc}/slot-area-bg.png?v=${imgVer}`}
                            alt="item8"
                        />
                        <div className={Styles["symbols"]}>{generateBoard(boardSymbols, highlightSymbol)}</div>
                    </div>
                    {renderExampleMultiplier(oddDetail[1], coin, level, t)}
                </li>
            </ul>
        </li>
    );
};

const renderExampleMultiplier = (symbol: OddDetailList, coin: number, level: number, t: Function) => {
    const oddItems = [...symbol.oddItem].reverse();
    const tumbleWin = +(+(oddItems[2].count * coin * level)).toFixed(2);
    const multiplier = 17;
    const win = +(multiplier * tumbleWin).toFixed(2);

    return (
        <>
            <p>
                <strong>{t("Common-example")}</strong>
            </p>
            <div className={`${Styles["example"]} table-medium`}>
                <table className={Styles["tbl-default"]}>
                    <thead>
                        <tr>
                            <th>{t("Win-symbols")}</th>
                            <th>{t("Tumble-win")}</th>
                            <th>{t("Multiplier")}</th>
                            <th>{t("Win")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={Styles["symbol-scale"]}>{generateSymbol(1, 1)}</td>
                            <td>{numberWithCommas(tumbleWin)}</td>
                            <td>
                                {multiplier}
                                <br></br>(15+2)
                            </td>
                            <td>
                                {numberWithCommas(win)} <br></br>({numberWithCommas(tumbleWin)} * 17)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const generateBoard = (symbols: Array<number>, highlightSymbol: Array<number>) =>
    symbols.map((symbol, index) => {
        if (symbol >= 10) {
            const value = symbol === 12 ? 15 : 2;
            return generateSymbolMultiplier(value, symbol, index, highlightSymbol.includes(symbol));
        } else {
            return generateSymbol(symbol, index, highlightSymbol.includes(symbol));
        }
    });

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

enum AutoSettle24hGameIds {
    WuKong = 121,
}

const isAutoSettle = (gameId: number) => {
    return Object.values(AutoSettle24hGameIds).includes(gameId);
};

const Contents: React.FC<GameConfigProps> = (props) => {
    const { t } = useTranslate(["cascadingslot", "Common"]);
    const { imgVersion } = useImgVersionContext();
    const { gameSetting, name, displayName, gameConfigs } = props;
    const cascadingSlotSetting = gameSetting.CascadingSlotsConfig;
    const isRemodeling = cascadingSlotSetting.OddsByCounts[9]?.every((item: any) => item.Odds > 0);
    const volatility = !cascadingSlotSetting.Volatility ? 2 : cascadingSlotSetting.Volatility;

    imgSrc = appSettings.resourceUrl + name;
    imgVer = imgVersion ?? "";
    const odds = cascadingSlotSetting.OddsByCounts;
    const betMultiplier = cascadingSlotSetting.BetMultiplier;
    const buyFreeSpinSetting = cascadingSlotSetting.Features?.BuyFreeSpins;
    const maxWinPerRound = gameConfigs.maxWinPerRound;
    const features = gameConfigs.features;
    const isBuyFreeSpinsSupported = features?.BuyFreeSpins?.enabled && buyFreeSpinSetting?.Multiplier > 0;

    return (
        <ul className={`game-guide ${Styles["slot-guide"]}`}>
            <li className="guide-item">
                <h2 className={Styles["heading1"]}>{t("title_introduction", { ns: "Common" })}</h2>
                <p className="content">{t("Introduction-content", { gameName: displayName })}</p>
                <div className={`${Styles["list-symbols-wrapper"]}`}>
                    {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((imgIndex, index) => generateSymbol(imgIndex, index))}
                </div>
            </li>
            <li className="guide-item">{renderGameRule(gameConfigs.coin, gameConfigs.level, betMultiplier, t)}</li>
            {renderPayouts({
                odds,
                coin: gameConfigs.coin,
                level: gameConfigs.level,
                maxWinPerRound,
                t,
                isRemodeling,
                volatility,
                freeSpin: cascadingSlotSetting.FreeSpins,
            })}
            {renderTumble(t)}
            {renderMultiplier(odds, gameConfigs.coin, gameConfigs.level, t)}
            {renderFreeSpins({
                odds: cascadingSlotSetting.FreeSpins,
                t,
                isRemodeling,
                isAutoSettle: isAutoSettle(gameSetting.GameId),
            })}
            {isBuyFreeSpinsSupported && renderBuyFreeSpin(t, buyFreeSpinSetting.Multiplier)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};
export default Contents;
