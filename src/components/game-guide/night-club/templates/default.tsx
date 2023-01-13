import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../nightclub.module.scss";
import { locales } from "../../../../common/constants";
import { getNightClubTranslationResource } from "../languages";
import { INighClubTranslationResource } from "../languages/types";

const number = "number";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";

class NightClubGuideTemplate extends React.Component<GameGuideProps<GameConfigProps, {}>> {

    renderGameRule(resource: INighClubTranslationResource) {
        const gameRuleResource = resource.gameRule;
        return (
            <li className="guide-item">
                <h2>{gameRuleResource.title}</h2>
                <ul className="desc">
                    <li>
                    {gameRuleResource.description.line1}
                        <div className="text-center">
                            <strong> {gameRuleResource.description.totalBet}</strong> {gameRuleResource.description.paylinesFormular}
                        </div>
                        <div>
                            <strong> {gameRuleResource.description.note}:</strong> {gameRuleResource.description.newExperience}
                        </div>
                    </li>
    
                    <li> {gameRuleResource.description.atLeastOnePayline}</li>
                    <li> {gameRuleResource.description.paylineWinLoss}</li>
                    <div className={Styles["wrapper-img-rectangle"]}>
                        <img src={`/static/images/nightclub/guide_payline.png`} alt="guide_payline" width={834} height={159} loading="eager" />
                    </div>
                </ul>
            </li>
        );
    };
    
    renderPayouts(odds: number[][], resource: INighClubTranslationResource) {
        const payOutResource = resource.payOut;
        return (
            <li className="guide-item">
                <h2>{payOutResource.paytable}</h2>
                <ul className="desc">
                    <li>{payOutResource.winningAmount}.</li>
                    <li>
                        <strong>{payOutResource.note}, </strong>{payOutResource.initialStake}
                    </li>
                </ul>
                {this.renderPayoutsIconFirstLine(odds, locales.en)}
                {this.renderPayoutsIconSecondLine(odds, locales.en)}
                {this.renderExamplePayout(odds, resource)}
            </li>
        );
    };
    
    renderIconContent(
        itemName = "item10",
        isContentTop = false,
        isGem = false,
        dataContent: number[][],
    ) {
        const pathSrc = itemName === "item10" ? "./static/images/nightclub/" : "./static/images/nightclub/";
        return (
            <span className={Styles["wrapper-icon"]}>
                <img
                    src={`/static/images/nightclub/guide_item_symbol_bg.png?v1`}
                    width={200}
                    height={132}
                    alt={"guide_item_symbol_bg"}
                    loading="eager"
                />
    
                <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png?v1`} alt={itemName}></img>
                <div
                    className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${isGem && Styles["gem-position"]
                        }`}
                >
                    {dataContent.map((data, index) => {
                        return (
                            <div key={index} className={Styles["icon-content"]}>
                                <span className={`${Styles[number]} ${Styles[numberFirst]}`}>{data[0]}</span>
                                <span className={`${Styles[number]} ${Styles[numberSecond]}`}>{data[1]}</span>
                            </div>
                        );
                    })}
                </div>
            </span>
        );
    };
    
    renderPayoutsIconFirstLine(odds: number[][], locale = "en") {
        return (
            <>
                <div className={Styles["icon-container"]}>
                    {this.renderIconContent(
                        "item10",
                        false,
                        false,
                        [
                            [5, odds[10][5]],
                            [4, odds[10][4]],
                            [3, odds[10][3]],
                            [2, odds[10][2]],
                        ]
                    )}
                    {this.renderIconContent(
                        "item6",
                        true,
                        false,
                        [
                            [5, odds[6][5]],
                            [4, odds[6][4]],
                            [3, odds[6][3]],
                        ]
                    )}
                    {this.renderIconContent(
                        "item5",
                        true,
                        false,
                        [
                            [5, odds[5][5]],
                            [4, odds[5][4]],
                            [3, odds[5][3]],
                        ]
                    )}
                    {this.renderIconContent(
                        "item4",
                        true,
                        false,
                        [
                            [5, odds[4][5]],
                            [4, odds[4][4]],
                            [3, odds[4][3]],
                        ]
                    )}
                </div>
            </>
        );
    };
    
    renderPayoutsIconSecondLine(odds: number[][]) {
        return (
            <>
                <div className={Styles["icon-container"]}>
                    {this.renderIconContent(
                        "item3",
                        true,
                        false,
                        [
                            [5, odds[3][5]],
                            [4, odds[3][4]],
                            [3, odds[3][3]],
                        ]
                    )}
                    {this.renderIconContent(
                        "item2",
                        true,
                        true,
                        [
                            [5, odds[2][5]],
                            [4, odds[2][4]],
                            [3, odds[2][3]],
                        ]
                    )}
                    {this.renderIconContent(
                        "item1",
                        true,
                        true,
                        [
                            [5, odds[1][5]],
                            [4, odds[1][4]],
                            [3, odds[1][3]],
                        ]
                    )}
                    {this.renderIconContent(
                        "item0",
                        true,
                        true,
                        [
                            [5, odds[0][5]],
                            [4, odds[0][4]],
                            [3, odds[0][3]],
                        ]
                    )}
                    {this.renderIconContent(
                        "item9",
                        false,
                        false,
                        [
                            [5, odds[9][5]],
                            [4, odds[9][4]],
                            [3, odds[9][3]],
                            [2, odds[9][2]],
                        ]
                    )}
                </div>
            </>
        );
    };
    
    renderIconContentBlack(itemName: string, dataContent: number[][], textAfterNumber: string) {
        return (
            <span className={Styles["wrapper-icon-dark"]}>
                <img
                    className={`${Styles[iconBox]}`}
                    src="/static/images/nightclub/guide_item_symbol_bg.png#v2"
                    width={269}
                    height={132}
                    alt="guide_item_symbol_bg"
                    loading="eager"
                />
    
                <img className={`${Styles[itemName]} ${Styles["dark"]}`} src={`./static/images/nightclub/${itemName}.png`} alt={itemName}></img>
                <div
                    className={`${Styles["icon-content-wrapper"]} ${itemName === "item8" ? Styles["bonus-position"] : Styles["spin-position"]}`}
                >
                    {dataContent.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`${Styles["icon-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                            >
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
    
    renderExamplePayout(odds: number[][], resource: INighClubTranslationResource) {
        const examplePayoutResource = resource.examplePayout;
        return (
            <>
                <p>
                    <strong>{examplePayoutResource.title}</strong>
                </p>
                <div className="table-container text-center">
                    <table className="table text-center table-medium">
                        <thead>
                            <tr>
                                <th>{examplePayoutResource.table.symbolHeader}</th>
                                <th>{examplePayoutResource.table.descriptionHeader}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3}>
                                    {this.renderIconContent("item1", true, true, [
                                        [5, odds[1][5]],
                                        [4, odds[1][4]],
                                        [3, odds[1][3]],
                                    ])}
                                </td>
                                <td>
                                {examplePayoutResource.table.having5Symbols} <img src="./static/images/nightclub/item1.png" width={50} height={50} alt="item1" />{" "}
                                {examplePayoutResource.table.samePayline}
                                    <br></br>{examplePayoutResource.table.payoutBetLevel} {odds[1][5]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {examplePayoutResource.table.having4Symbols} <img src="./static/images/nightclub/item1.png" width={50} height={50} alt="item1" />{" "}
                                    {examplePayoutResource.table.samePayline}
                                    <br></br>{examplePayoutResource.table.payoutBetLevel} {odds[1][4]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {examplePayoutResource.table.having3Symbols} <img src="./static/images/nightclub/item1.png" width={50} height={50} alt="item1" />{" "}
                                    {examplePayoutResource.table.samePayline}
                                    <br></br>{examplePayoutResource.table.payoutBetLevel} {odds[1][3]}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    };
    
    renderFreeSpin(odds: number[][], resource: INighClubTranslationResource) {
        const freeSpinResource = resource.freeSpin;
        return (
            <li className="guide-item">
                <h2>{freeSpinResource.title}</h2>
                <ul className="desc">
                    <li>{freeSpinResource.description1}</li>
                    <li>{freeSpinResource.description2}</li>
                </ul>
                <div className="table-container text-center">
                    <table className="table text-center table-medium">
                        <thead>
                            <tr>
                                <th>{freeSpinResource.symbolHeader}</th>
                                <th>{freeSpinResource.descriptionHeader}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3}>
                                    {this.renderIconContentBlack(
                                        "item7",
                                        [
                                            [5, odds[7][5]],
                                            [4, odds[7][4]],
                                            [3, odds[7][3]],
                                        ],
                                        " FREE SPINS"
                                    )}
                                </td>
                                <td>
                                {freeSpinResource.having5FreeSpins}<br></br>{freeSpinResource.get} {odds[7][5]} {freeSpinResource.freeSpinBonus}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {freeSpinResource.having4FreeSpins}<br></br>{freeSpinResource.get} {odds[7][4]} {freeSpinResource.freeSpinBonus}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {freeSpinResource.having3FreeSpins}<br></br>{freeSpinResource.get} {odds[7][3]} {freeSpinResource.freeSpinBonus}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
                <ul className="desc">
                    <li>
                        <strong>  {freeSpinResource.note}:</strong>  {freeSpinResource.freeSpinReel}
                        <div className={Styles[freeSpinContentEX]}>
                            <div className={Styles["wrapper-free-spin-ex"]}>
                                <img
                                    src="/static/images/nightclub/guide_example_freespin.png#v2"
                                    alt="guide_item_symbol_bg"
                                    width={265}
                                    height={125}
                                    loading="eager"
                                />
                            </div>
    
                            <span>
                            {freeSpinResource.thereAre4}
                            </span>
                        </div>
                    </li>
                    <li className="clear-both">
                    {freeSpinResource.lastFreespin}
                    </li>
                    <li> {freeSpinResource.freeSpinExpired}</li>
                </ul>
            </li>
        );
    };
    
    renderBonus(odds: number[][], resource: INighClubTranslationResource) {
        const bonusResource = resource.bonus
        return (
            <li className="guide-item">
                <h2>{bonusResource.title}</h2>
                <ul className="desc">
                    <li>{bonusResource.description1}</li>
                    <li>{bonusResource.description2}</li>
                </ul>
                <div className="table-container text-center">
                    <table className="table text-center table-medium">
                        <thead>
                            <tr>
                                <th>{bonusResource.symbolHeader}</th>
                                <th>{bonusResource.descriptionHeader}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3}>
                                    {this.renderIconContentBlack(
                                        "item8",
                                        [
                                            [5, odds[8][5]],
                                            [4, odds[8][4]],
                                            [3, odds[8][3]],
                                        ],
                                        " BONUS"
                                    )}
                                </td>
                                <td>
                                {bonusResource.having5Bonuses}<br></br>{bonusResource.canOpen} {odds[8][5]} {bonusResource.itemInBonusGame}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {bonusResource.having4Bonuses}
                                    <br></br> {bonusResource.canOpen} {odds[8][4]} {bonusResource.itemInBonusGame}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {bonusResource.having3Bonuses}<br></br>{bonusResource.canOpen} {odds[8][3]} {bonusResource.itemInBonusGame}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
                <ul className="desc">
                    <li>
                        <strong> {bonusResource.note}:</strong> {bonusResource.bonusReel}
                        <div className={Styles[freeSpinContentEX]}>
                            <div className={Styles["wrapper-free-spin-ex"]}>
                                <img
                                    src="/static/images/nightclub/guide_example_bonus.png#v3"
                                    alt="guide_example_bonus"
                                    width={265}
                                    height={125}
                                    loading="eager"
                                />
                            </div>
    
                            <span>
                            {bonusResource.thereAre4} {`“Bonus”`} {bonusResource.eligible}
                            </span>
                        </div>
                    </li>
                    <li>
                        {" "}
                        {bonusResource.bonusExpired}
                    </li>
                </ul>
            </li>
        );
    };
    
    renderWild(odds: number[][], resource: INighClubTranslationResource) {
        const wildResource = resource.wild;
        const wrapperWildImg = "wrapper-wild-img";
        return (
            <li className="guide-item">
                <h2>{wildResource.title}</h2>
                <div className={Styles["wild-content-ex"]}>
                    <span className={Styles["wrapper-wild"]}>
                        <img
                            src="/static/images/nightclub/guide_example_wild.png#v3"
                            alt="guide_example_wild"
                            width={117}
                            height={54}
                            loading="eager"
                        />
                    </span>
    
                    <ul className="desc">
                        <li>
                        {wildResource.substitute}
                            <img className={`${Styles["item8"]} ${Styles["mini"]}`} src="./static/images/nightclub/item8.png" alt="item8"></img>
                            ,
                            <img
                                className={`${Styles["item7"]} ${Styles["mini"]}`}
                                src="./static/images/nightclub/item7.png#v2"
                                alt="item7"
                            ></img>
                            {wildResource.and}
                            <img
                                className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                                src="./static/images/nightclub/item10.png"
                                alt="item10"
                            ></img>
                            {wildResource.endSubstitute}
                        </li>
                        <li>{wildResource.highestWin}</li>
                    </ul>
                </div>
                <div>
                    <strong>{wildResource.example}</strong>
                    <div className={Styles["wrapper-ex-wild"]}>
                        <div className={Styles["wild-img"]}>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/nightclub/item2.png" alt="item2" width={100} height={100} loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/nightclub/item2.png" alt="item2" width={100} height={100} loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/nightclub/item9.png?v1" alt="item9" width={100} height={100} loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/nightclub/item5.png" alt="item5" width={100} height={100} loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/nightclub/item5.png" alt="item5" width={100} height={100} loading="eager" />
                            </div>
                        </div>
                        <ul className="desc">
                            <li>
                            {wildResource.ifwild}
                                <img
                                    className={`${Styles["item2"]} ${Styles["mini"]}`}
                                    src="./static/images/nightclub/item2.png"
                                    alt="item2-mini"
                                ></img>
                                {`=>`} {wildResource.payoutBetLevel} {odds[2][3]}
                            </li>
                            <li>
                            {wildResource.ifwild}
                                <img
                                    className={`${Styles["item5"]} ${Styles["mini"]}`}
                                    src="./static/images/nightclub/item5.png"
                                    alt="item5-mini"
                                ></img>
                                {`=>`} {wildResource.payoutBetLevel} {odds[5][3]}
                            </li>
                        </ul>
                        <p>
                        {wildResource.highestWin} {`=>`} {wildResource.payoutBetLevel} {Math.max(odds[2][3], odds[5][3])}
                        </p>
                    </div>
                </div>
            </li>
        );
    };
    
    renderIntroduction(translationResource: INighClubTranslationResource, gameName: string) {
        return (<li className="guide-item">
            <h2>{translationResource.main.introduction}</h2>
            <p className="content">
                “{gameName}” {translationResource.main.description}
            </p>
            <div className={Styles["wrapper-list-icon"]}>
                <img src={`/static/images/nightclub/list_icon.png#v3`} alt="guide_item_symbol_bg" width={412} height={374} />
            </div>
        </li>);
    }

    render(): React.ReactNode {
        const { gameConfigs, gameName, locale } = this.props;
        const { odds } = gameConfigs;
        const translationResource = getNightClubTranslationResource(locale);

        return (
            <>
                <ul className="game-guide">
                    {this.renderIntroduction(translationResource, gameName)}
                    {this.renderGameRule(translationResource)}
                    {this.renderPayouts(odds, translationResource)}
                    {this.renderFreeSpin(odds, translationResource)}
                    {this.renderBonus(odds, translationResource)}
                    {this.renderWild(odds, translationResource)}
                    {renderTermsAndConditionsEN(Styles["guide-item"])}
                </ul>
            </>
        );
    }
    
}

export default NightClubGuideTemplate;


