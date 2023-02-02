import { Markup } from "interweave";
import React from "react";
import { GameGuideProps } from "../../type";
import { TreasureIslandLanguage } from "../languages/types";
import OddDetailList from "../OddDetail";
import { GameConfigProps } from "../type";
import Styles from "../treasure-island.module.scss";
import { getImageDirectoryName, getTreasureIslandTranslationResource } from "../languages";
import { renderTermsAndConditions } from "../../../shared";

export default abstract class TreasureIslandGuideTemplate extends React.Component<GameGuideProps<GameConfigProps, {}>> {
    readonly number = "number";
    readonly numberFirst = "number-first";
    readonly numberSecond = "number-second";
    readonly iconBox = "icon-box";
    renderGameRule(
        minValue: number,
        maxValue: number,
        resources: TreasureIslandLanguage,
        imageDirectoryName: string,
        locale: string | undefined
    ) {
        const { subDescriptions } = resources.gameRules;
        return (
            <>
                <h2>{resources.gameRules.title}</h2>
                <ul className="desc">
                    <li>
                        {resources.gameRules.rulePlayerSelect}
                        <div className="sub-section">
                            <div className="center">
                                <div>
                                    <strong>{resources.gameRules.totalBet}</strong> {resources.gameRules.paylinesFormular}
                                </div>
                                <img
                                    src={`${imageDirectoryName}/betcontrol-${locale}.jpg?v2`}
                                    width={610}
                                    height={343}
                                    alt={"bet-control"}
                                />
                            </div>

                            <ul className={Styles["desc-bet-control"]}>
                                {subDescriptions.map((sub, index) => (
                                    <li key={index}>{sub}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li>{resources.gameRules.ruleStartSpin}</li>
                    <li>{resources.gameRules.ruleWin}</li>
                    <li>
                        {resources.gameRules.betLimit} {minValue} - {maxValue}.
                    </li>
                </ul>
            </>
        );
    }

    renderTumbling(resources: TreasureIslandLanguage) {
        return (
            <>
                <h2>{resources.tumbling.title}</h2>
                <ul className="desc">
                    {resources.tumbling.descriptions.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </>
        );
    }

    convertOddDetail(odd: any, isFreeSpin: boolean) {
        const oddList: OddDetailList[] = [];
        for (const item in odd) {
            const symbol = odd[item];
            const oddDetail: OddDetailList = { oddItem: [] };
            for (const sub in symbol) {
                if (!isFreeSpin) {
                    const from = symbol[sub].from;
                    const to = symbol[sub].to;
                    const oddValue = symbol[sub].odds;
                    oddDetail.oddItem.push({
                        countString: `${from}-${to}`,
                        count: oddValue,
                    });
                } else {
                    oddDetail.oddItem.push({
                        countString: symbol[sub].count,
                        count: symbol[sub].odds,
                    });
                }
            }
            oddList.push(oddDetail);
        }
        return oddList;
    }

    renderPayouts(
        odds: any,
        coin: number,
        level: number,
        maxWinPerRound: number,
        resources: TreasureIslandLanguage,
        imageDirectoryName: string
    ) {
        const { symbols } = odds;
        const currMaxBet = maxWinPerRound;
        const oddDetail = this.convertOddDetail(symbols, false);

        return (
            <>
                <h2>{resources.payout.title}</h2>
                <ul className="desc">
                    {resources.payout.description1.map((desc1, index) => (
                        <li key={index}>{<Markup content={desc1} />}</li>
                    ))}
                    <div className="center">{resources.payout.baseBetValue}</div>
                    <li>{resources.payout.description2}</li>
                    <div className="sub-section">
                        {this.renderPayoutsIconFirstLine(oddDetail, coin, level)}
                        {this.renderPayoutsIconSecondLine(oddDetail, coin, level)}
                        {this.renderExamplePayouts(oddDetail[8], coin, level, resources, imageDirectoryName)}
                    </div>

                    {resources.payout.description3(currMaxBet).map((desc3, index) => (
                        <li key={index}>{desc3}</li>
                    ))}
                </ul>
            </>
        );
    }

    renderExamplePayouts(
        symbol: OddDetailList,
        coin: number,
        level: number,
        resources: TreasureIslandLanguage,
        imageDirectoryName: string
    ) {
        const oddItems = [...symbol.oddItem].reverse();
        const { table } = resources.examplePayout;
        return (
            <>
                <p>
                    {<Markup content={resources.examplePayout.content} />} {+(+(coin * level)).toFixed(2)}
                </p>
                <div className="table-container text-center">
                    <table className="table text-center table-medium">
                        <thead>
                            <tr>
                                {table.headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3}>{this.renderIconContent("item8", true, true, symbol, coin, level)}</td>
                                <td>
                                    {<Markup content={table.getHavingSymbol(oddItems[0].countString)} />}{" "}
                                    <img src={`${imageDirectoryName}/item8.png`} width={50} height={50} alt="item8" />{" "}
                                    {table.descriptionContent} <br></br>
                                    {table.payout} {+(+(oddItems[0].count * coin * level)).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {table.getHavingSymbol(oddItems[1].countString)}{" "}
                                    <img src={`${imageDirectoryName}/item8.png`} width={50} height={50} alt="item8" />{" "}
                                    {table.descriptionContent}
                                    <br></br>
                                    {table.payout} {+(+(oddItems[1].count * coin * level)).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {table.getHavingSymbol(oddItems[2].countString)}{" "}
                                    <img src={`${imageDirectoryName}/item8.png`} width={50} height={50} alt="item8" />{" "}
                                    {table.descriptionContent}
                                    <br></br>
                                    {table.payout} {+(+(oddItems[2].count * coin * level)).toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

    renderMultipliers(resources: TreasureIslandLanguage, imageDirectoryName: string) {
        return (
            <>
                <h2>{resources.multipliers.title}</h2>
                <div className={Styles["center"]}>
                    <img src={`${imageDirectoryName}/multiplier2.png#v3`} alt="multiplier" width={140} height={112} />
                    <img src={`${imageDirectoryName}/multiplier3.png#v3`} alt="multiplier" width={140} height={112} />
                    <img src={`${imageDirectoryName}/multiplier1.png#v3`} alt="multiplier" width={140} height={112} />
                    <img src={`${imageDirectoryName}/multiplier4.png#v3`} alt="multiplier" width={140} height={112} />
                </div>
                <ul className="desc">
                    {resources.multipliers.descriptions.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}

                    <div className="sub-section">
                        <div>{resources.exampleMultipliers.title}</div>
                        <div className="center">
                            <img src={`${imageDirectoryName}/reel.jpg#v4`} alt="tumble-multiplier" width={610} height={362} />
                        </div>
                        <div className="table-container text-center">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        {resources.exampleMultipliers.tableHeader.map((header, index) => (
                                            <th key={index}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={`${imageDirectoryName}/item1.png`} width={50} height={50} alt="item2" />
                                        </td>
                                        <td>7</td>
                                        <td>
                                            22 <br />
                                            (20+2)
                                        </td>
                                        <td>
                                            <strong>154</strong>
                                            <br />
                                            <strong>(7*22)</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ul>
            </>
        );
    }

    renderFreeSpins(odds: any, resources: TreasureIslandLanguage, imageDirectoryName: string, locale: string | undefined) {
        const { freeSpins } = odds;
        const oddDetail = this.convertOddDetail(freeSpins, true);
        const oddItems = [...oddDetail[0].oddItem].reverse();
        const { subDescriptions } = resources.freeSpin;
        const { table, tumbleDescriptions } = resources.exampleFreeSpin;
        return (
            <>
                <h2>{resources.freeSpin.title}</h2>
                <ul className="desc">
                    <li>
                        {resources.freeSpin.define}
                        <div className="sub-section">
                            <div className="table-container text-center">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            {subDescriptions.tableHeader.map((header, index) => (
                                                <th key={index}>{header}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={3}>{this.renderIconContentBlack("scatter", oddDetail[0], " FREE SPINS")}</td>
                                            <td>
                                                {<Markup content={subDescriptions.getSymbolOrMore(oddItems[0].countString)} />}
                                                <br></br>
                                                {subDescriptions.getFreeSpin(oddItems[0].count)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {<Markup content={subDescriptions.getSymbol(oddItems[1].countString)} />}
                                                <br></br>
                                                {subDescriptions.getFreeSpin(oddItems[1].count)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {<Markup content={subDescriptions.getSymbol(oddItems[2].countString)} />}
                                                <br></br>
                                                {subDescriptions.getFreeSpin(oddItems[2].count)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                    <li>{resources.freeSpin.getMoreFreeSpin(oddDetail[1].oddItem[0].count)}</li>
                    <li>
                        {resources.freeSpin.totalMultiplier}
                        <div className="sub-section">
                            <div>{<Markup content={resources.exampleFreeSpin.title} />}</div>
                            <div className="table-container text-center">
                                <table className="table text-center table-medium">
                                    <thead>
                                        <tr>
                                            {table.headers.map((header, index) => (
                                                <th key={index}>{header}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1</td>
                                            <td>10</td>
                                            <td>5</td>
                                            <td>5</td>
                                            <td>{<Markup content={table.round1Win} />}</td>
                                        </tr>
                                        <tr>
                                            <td>#2</td>
                                            <td>5</td>
                                            <td>0</td>
                                            <td>5</td>
                                            <td>{<Markup content={table.round2Win} />}</td>
                                        </tr>
                                        <tr>
                                            <td>#3</td>
                                            <td>0</td>
                                            <td>2</td>
                                            <td>5</td>
                                            <td>
                                                <strong>0</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#4</td>
                                            <td>7</td>
                                            <td>3</td>
                                            <td>
                                                8 <br />
                                                (5+3)
                                            </td>
                                            <td>{<Markup content={table.round4Win} />}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={`${Styles["center"]} ${Styles["line"]}`}>
                                <img src={`${imageDirectoryName}/freespin-${locale}.jpg#v3`} alt="freespin" width={610} height={343} />
                            </div>
                            <div className={`${Styles["center"]} ${Styles["line"]}`}>
                                <img src={`${imageDirectoryName}/tumblewin-${locale}.png#v3`} alt="tumble-win" width={372} height={69} />
                                <div className={Styles["tumble-desc"]}>
                                    {tumbleDescriptions.map((desc, index) => (
                                        <div key={index}>{desc}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>{resources.freeSpin.freeSpin24h}</li>
                </ul>
            </>
        );
    }

    renderIconContent(
        itemName = "item10",
        isContentTop = false,
        isGem = false,
        dataContent: OddDetailList,
        coin: number,
        level: number,
        isReverse = true
    ) {
        const imageDirectoryName = getImageDirectoryName();
        const pathSrc = `${imageDirectoryName}/`;
        const oddItemReverse = [...dataContent.oddItem];
        const oddItemList = isReverse ? oddItemReverse.reverse() : dataContent.oddItem;
        return (
            <div className={Styles["wrapper-icon"]}>
                <img
                    src={`${imageDirectoryName}/guide_item_symbol_bg.png?v1`}
                    width={200}
                    height={132}
                    alt={"guide_item_symbol_bg"}
                    loading="eager"
                />

                <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png?v1`} alt={itemName}></img>
                <div
                    className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${
                        isGem && Styles["gem-position"]
                    }`}
                >
                    {oddItemList.map((data, index) => {
                        const value = +(+(data.count * coin * level)).toFixed(2);

                        return (
                            <div key={index} className={Styles["icon-content"]}>
                                <span className={`${Styles[this.number]} ${Styles[this.numberFirst]}`}>{data.countString}</span>
                                <span className={`${Styles[this.number]} ${Styles[this.numberSecond]}`}>{value}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderPayoutsIconFirstLine(symbols: OddDetailList[], coin: number, level: number) {
        return (
            <>
                <div className={Styles["icon-container"]}>
                    {this.renderIconContent("item8", false, false, symbols[8], coin, level)}
                    {this.renderIconContent("item7", true, false, symbols[7], coin, level)}
                    {this.renderIconContent("item6", true, false, symbols[6], coin, level)}
                    {this.renderIconContent("item5", true, false, symbols[5], coin, level)}
                    {this.renderIconContent("item4", true, false, symbols[4], coin, level)}
                </div>
            </>
        );
    }

    renderPayoutsIconSecondLine = (symbols: OddDetailList[], coin: number, level: number) => {
        return (
            <>
                <div className={Styles["icon-container"]}>
                    {this.renderIconContent("item3", true, true, symbols[3], coin, level)}
                    {this.renderIconContent("item2", true, true, symbols[2], coin, level)}
                    {this.renderIconContent("item1", true, true, symbols[1], coin, level)}
                    {this.renderIconContent("item0", false, false, symbols[0], coin, level)}
                </div>
            </>
        );
    };

    renderCountFreeSpin(count: number) {
        if (count < 6) {
            return <span>{count}</span>;
        } else {
            return (
                <span className={`${Styles["ex-wrapper"]}`}>
                    <span>{count}</span>
                </span>
            );
        }
    }

    renderIconContentBlack(itemName: string, dataContent: OddDetailList, textAfterNumber: string) {
        const imageDirectoryName = getImageDirectoryName();
        const oddItems = [...dataContent.oddItem].reverse();
        return (
            <span className={Styles["wrapper-icon-dark"]}>
                <img
                    className={`${Styles[this.iconBox]}`}
                    src={`${imageDirectoryName}/guide_item_symbol_bg.png#v2`}
                    width={269}
                    height={132}
                    alt="guide_item_symbol_bg"
                    loading="eager"
                />

                <img
                    className={`${Styles[itemName]} ${Styles["dark"]} ${Styles["scatter"]}`}
                    src={`${imageDirectoryName}/${itemName}.png`}
                    alt={itemName}
                ></img>
                <div
                    className={`${Styles["icon-content-wrapper"]} ${
                        itemName === "item8" ? Styles["bonus-position"] : Styles["spin-position"]
                    }`}
                >
                    {oddItems.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`${Styles["icon-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                            >
                                <span className={`${Styles[this.number]} ${Styles[this.numberFirst]}`}>
                                    {this.renderCountFreeSpin(+data.countString)}
                                </span>
                                <span className={`${Styles[this.number]} ${Styles[this.numberSecond]}`}>
                                    {data.count} {textAfterNumber && <span className={Styles["text"]}>{textAfterNumber}</span>}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </span>
        );
    }

    render(): React.ReactNode {
        const { gameConfigs, locale } = this.props;
        const { odds, betMultiplier, coin, level, coinValues, betLevels, maxWinPerRound } = gameConfigs;
        const resources = getTreasureIslandTranslationResource(locale);
        const imageDirectoryName = getImageDirectoryName();
        const sortedCoinValue = coinValues.sort((a, b) => a - b);
        const sortedBetLevel = betLevels.sort((a, b) => a - b);
        const minBet = betMultiplier * sortedCoinValue[0] * sortedBetLevel[0];
        const maxBet = betMultiplier * sortedCoinValue[coinValues.length - 1] * sortedBetLevel[betLevels.length - 1];

        return (
            <>
                <ul className="game-guide">
                    <li className="guide-item">
                        <h2>{resources.introduction.title}</h2>
                        <p className="content">{resources.introduction.description}</p>
                        <div className={Styles["wrapper-list-icon"]}>
                            <img src={`${imageDirectoryName}/list_icon.png#v4`} alt="guide_item_symbol_bg" width={750} height={194} />
                        </div>
                    </li>

                    <li className="guide-item">{this.renderGameRule(minBet, maxBet, resources, imageDirectoryName, locale)}</li>
                    <li className="guide-item">{this.renderPayouts(odds, coin, level, maxWinPerRound, resources, imageDirectoryName)}</li>
                    <li className="guide-item">{this.renderTumbling(resources)}</li>
                    <li className="guide-item">{this.renderMultipliers(resources, imageDirectoryName)}</li>
                    <li className="guide-item">{this.renderFreeSpins(odds, resources, imageDirectoryName, locale)}</li>
                    {renderTermsAndConditions(locale)}
                </ul>
            </>
        );
    }
}
