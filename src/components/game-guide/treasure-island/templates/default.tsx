import React from "react";

import { locales } from "../../../../common/constants";
import { renderTermsAndConditions, renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import OddDetailList from "../OddDetail";
import Styles from "../treasure-island.module.scss";
import { GameConfigProps } from "../type";
import { convertOddDetail, renderIconContent, renderIconContentBlack, renderPayoutsIconFirstLine, renderPayoutsIconSecondLine } from "./vi";
import { getTreasureIslandTranslationResource, getStyles } from "../languages";
import { TreasureIslandLanguage } from "../languages/types";
import { Markup } from "interweave";

const renderGameRule = (minValue: number, maxValue: number, resources: TreasureIslandLanguage) => {
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
                            <img src={`/static/images/treasure-island/betcontrol-en.jpg?v2`} width={610} height={343} alt={"bet-control"} />
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
};

const renderTumbling = (resources: TreasureIslandLanguage) => {
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
};

const renderPayouts = (odds: any, coin: number, level: number, maxWinPerRound: number, resources: TreasureIslandLanguage) => {
    const { symbols } = odds;
    const currMaxBet = maxWinPerRound;
    let oddDetail = convertOddDetail(symbols, false);
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
                    {renderPayoutsIconFirstLine(oddDetail, locales.vi, coin, level)}
                    {renderPayoutsIconSecondLine(oddDetail, locales.vi, coin, level)}
                    {renderExamplePayouts(oddDetail[8], coin, level, resources)}
                </div>

                <li>
                    The winning amounts is instantly added to your account balance when all of the tumbles resulting from a base spin have
                    been played.
                </li>
                <li>
                    The maximum win amount is limited to {currMaxBet}X bet. If the total win of a round reaches the max win value, the game
                    round immediately ends. The win is awarded up to the limitation and all remaining features are forfeited.
                </li>
            </ul>
        </>
    );
};

const renderExamplePayouts = (symbol: OddDetailList, coin: number, level: number, resources: TreasureIslandLanguage) => {
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
                            <td rowSpan={3}>{renderIconContent(true, "item8", true, true, symbol, "", coin, level, false)}</td>
                            <td>
                                {table.getHavingSymbol(symbol.oddItem[0].countString)}{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />{" "}
                                {table.descriptionContent} <br></br>
                                {table.payout} {+(+(symbol.oddItem[0].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {table.getHavingSymbol(symbol.oddItem[1].countString)}{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />{" "}
                                {table.descriptionContent} <br></br>
                                {table.payout} {+(+(symbol.oddItem[1].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {table.getHavingSymbol(symbol.oddItem[2].countString)}{" "}
                                <img src="./static/images/treasure-island/item8.png" width={50} height={50} alt="item8" />{" "}
                                {table.descriptionContent}
                                <br></br>
                                {table.payout} {+(+(symbol.oddItem[2].count * coin * level)).toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderMultipliers = (resources: TreasureIslandLanguage) => {
    return (
        <>
            <h2>{resources.multipliers.title}</h2>
            <div className={Styles["center"]}>
                <img src={`/static/images/treasure-island/multiplier2.png#v3`} alt="multiplier" width={140} height={112} />
                <img src={`/static/images/treasure-island/multiplier3.png#v3`} alt="multiplier" width={140} height={112} />
                <img src={`/static/images/treasure-island/multiplier1.png#v3`} alt="multiplier" width={140} height={112} />
                <img src={`/static/images/treasure-island/multiplier4.png#v3`} alt="multiplier" width={140} height={112} />
            </div>
            <ul className="desc">
                {resources.multipliers.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}

                <div className="sub-section">
                    <div>{resources.exampleMultipliers.title}</div>
                    <div className="center">
                        <img src={`/static/images/treasure-island/reel.jpg#v4`} alt="tumble-multiplier" width={610} height={362} />
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
                                        <img src="./static/images/treasure-island/item1.png" width={50} height={50} alt="item2" />
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
};

const renderFreeSpins = (odds: any, resources: TreasureIslandLanguage) => {
    const { freeSpins } = odds;
    const oddDetail = convertOddDetail(freeSpins, true);
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
                                        <td rowSpan={3}>{renderIconContentBlack("scatter", oddDetail[0], " FREE SPINS")}</td>
                                        <td>
                                            {subDescriptions.getSymbolOrMore(oddDetail[0].oddItem[0].countString)}
                                            <br></br>
                                            {subDescriptions.getFreeSpin(oddDetail[0].oddItem[0].count)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {subDescriptions.getSymbol(oddDetail[0].oddItem[1].countString)}
                                            <br></br>
                                            {subDescriptions.getFreeSpin(oddDetail[0].oddItem[1].count)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {subDescriptions.getSymbol(oddDetail[0].oddItem[2].countString)}
                                            <br></br>
                                            {subDescriptions.getFreeSpin(oddDetail[0].oddItem[2].count)}
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
                        <div>{resources.exampleFreeSpin.title}</div>
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
                            <img src={`/static/images/treasure-island/freespin-en.jpg#v3`} alt="freespin" width={610} height={343} />
                        </div>
                        <div className={`${Styles["center"]} ${Styles["line"]}`}>
                            <img src={`/static/images/treasure-island/tumblewin-en.png#v3`} alt="tumble-win" width={372} height={69} />
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
};

const TreasureIslandGuideTemplate: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName, locale } = props;
    const { odds, betMultiplier, coin, level, coinValues, betLevels, maxWinPerRound } = gameConfigs;

    const resources = getTreasureIslandTranslationResource(locale);
    console.log("TreasureIslandGuideTemplate", locale);
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
                        <img src={`/static/images/treasure-island/list_icon.png#v4`} alt="guide_item_symbol_bg" width={750} height={194} />
                    </div>
                </li>

                <li className="guide-item">{renderGameRule(minBet, maxBet, resources)}</li>
                <li className="guide-item">{renderPayouts(odds, coin, level, maxWinPerRound, resources)}</li>
                <li className="guide-item">{renderTumbling(resources)}</li>
                <li className="guide-item">{renderMultipliers(resources)}</li>
                <li className="guide-item">{renderFreeSpins(odds, resources)}</li>
                {renderTermsAndConditions(Styles["guide-item"], undefined, locale)}
            </ul>
        </>
    );
};

export default TreasureIslandGuideTemplate;
