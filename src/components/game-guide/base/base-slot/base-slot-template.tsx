import React from "react";
import { GameGuideProps } from "../../type";
import { renderTermsAndConditions } from "../../../shared";
import { GameConfigProps, ISlotTranslationResource } from "./types";

export default abstract class SlotGuideTemplate extends React.Component<GameGuideProps<GameConfigProps, {}>> {
    readonly number = "number";
    readonly numberFirst = "number-first";
    readonly numberSecond = "number-second";
    readonly iconBox = "icon-box";
    readonly freeSpinContentEX = "free-spin-content-ex";

    abstract get imageDirectoryName(): string;

    abstract getTranslationResource(langKey: string | undefined): ISlotTranslationResource;

    renderIntroduction(translationResource: ISlotTranslationResource, styles: { readonly [key: string]: string }) {
        return (
            <li className="guide-item">
                <h2>{translationResource.main.introduction}</h2>
                <p className="content">{translationResource.main.description}</p>
                <div className={styles["wrapper-list-icon"]}>
                    <img src={`${this.imageDirectoryName}/list_icon.png#v3`} alt="guide_item_symbol_bg" />
                </div>
            </li>
        );
    }

    renderGameRule(resource: ISlotTranslationResource, styles: { readonly [key: string]: string }) {
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
                    </li>

                    {gameRuleResource.description.subDescriptions.map((data, index) => {
                        return <li key={index}>{data}</li>;
                    })}

                    <div className={styles["wrapper-img-rectangle"]}>
                        <img
                            src={`${this.imageDirectoryName}/guide_payline.png`}
                            alt="guide_payline"
                            width={834}
                            height={159}
                            loading="eager"
                        />
                    </div>
                </ul>
            </li>
        );
    }

    renderIconContent(
        dataContent: number[][],
        styles: { readonly [key: string]: string },
        params: {
            itemName: string;
            isContentTop: boolean;
            isGem: boolean;
        }
    ) {
        const pathSrc = `${this.imageDirectoryName}/`;
        return (
            <span className={styles["wrapper-icon"]}>
                <img
                    src={`${this.imageDirectoryName}/guide_item_symbol_bg.png?v1`}
                    width={200}
                    height={132}
                    alt={"guide_item_symbol_bg"}
                    loading="eager"
                />

                <img
                    className={`${styles[params.itemName]} ${styles["customize"]}`}
                    src={`${pathSrc}${params.itemName}.png?v1`}
                    alt={params.itemName}
                ></img>
                <div
                    className={`${styles["icon-content-wrapper"]} ${params.isContentTop && styles["icon-content-top"]} ${
                        params.isGem && styles["gem-position"]
                    }`}
                >
                    {dataContent.map((data, index) => {
                        return (
                            <div key={index} className={styles["icon-content"]}>
                                <span className={`${styles[this.number]} ${styles[this.numberFirst]}`}>{data[0]}</span>
                                <span className={`${styles[this.number]} ${styles[this.numberSecond]}`}>{data[1]}</span>
                            </div>
                        );
                    })}
                </div>
            </span>
        );
    }

    renderIconContentBlack(itemName: string, dataContent: number[][], textAfterNumber: string, styles: { readonly [key: string]: string }) {
        return (
            <span className={styles["wrapper-icon-dark"]}>
                <img
                    className={`${styles[this.iconBox]}`}
                    src={`${this.imageDirectoryName}/guide_item_symbol_bg.png#v2`}
                    width={269}
                    height={132}
                    alt="guide_item_symbol_bg"
                    loading="eager"
                />

                <img
                    className={`${styles[itemName]} ${styles["dark"]}`}
                    src={`${this.imageDirectoryName}/${itemName}.png`}
                    alt={itemName}
                ></img>
                <div
                    className={`${styles["icon-content-wrapper"]} ${
                        itemName === "item8" ? styles["bonus-position"] : styles["spin-position"]
                    }`}
                >
                    {dataContent.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles["icon-content"]} ${itemName === "item8" ? styles["bonus"] : styles["free-spin"]}`}
                            >
                                <span className={`${styles[this.number]} ${styles[this.numberFirst]}`}>{data[0]}</span>
                                <span className={`${styles[this.number]} ${styles[this.numberSecond]}`}>
                                    {data[1]} {textAfterNumber && <span className={styles["text"]}>{textAfterNumber}</span>}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </span>
        );
    }

    renderPayoutsIconFirstLine(styles: { readonly [key: string]: string }, odds: number[][]) {
        return (
            <>
                <div className={styles["icon-container"]}>
                    {this.renderIconContent(
                        [
                            [5, odds[10][5]],
                            [4, odds[10][4]],
                            [3, odds[10][3]],
                            [2, odds[10][2]],
                        ],
                        styles,
                        {
                            itemName: "item10",
                            isContentTop: false,
                            isGem: false,
                        }
                    )}
                    {this.renderIconContent(
                        [
                            [5, odds[6][5]],
                            [4, odds[6][4]],
                            [3, odds[6][3]],
                        ],
                        styles,
                        {
                            itemName: "item6",
                            isContentTop: true,
                            isGem: false,
                        }
                    )}
                    {this.renderIconContent(
                        [
                            [5, odds[5][5]],
                            [4, odds[5][4]],
                            [3, odds[5][3]],
                        ],
                        styles,
                        {
                            itemName: "item5",
                            isContentTop: true,
                            isGem: false,
                        }
                    )}
                    {this.renderIconContent(
                        [
                            [5, odds[4][5]],
                            [4, odds[4][4]],
                            [3, odds[4][3]],
                        ],
                        styles,
                        {
                            itemName: "item4",
                            isContentTop: true,
                            isGem: false,
                        }
                    )}
                </div>
            </>
        );
    }

    renderPayoutsIconSecondLine(styles: { readonly [key: string]: string }, odds: number[][]) {
        return (
            <>
                <div className={styles["icon-container"]}>
                    {this.renderIconContent(
                        [
                            [5, odds[3][5]],
                            [4, odds[3][4]],
                            [3, odds[3][3]],
                        ],
                        styles,
                        {
                            itemName: "item3",
                            isContentTop: true,
                            isGem: false,
                        }
                    )}
                    {this.renderIconContent(
                        [
                            [5, odds[2][5]],
                            [4, odds[2][4]],
                            [3, odds[2][3]],
                        ],
                        styles,
                        {
                            itemName: "item2",
                            isContentTop: true,
                            isGem: true,
                        }
                    )}
                    {this.renderIconContent(
                        [
                            [5, odds[1][5]],
                            [4, odds[1][4]],
                            [3, odds[1][3]],
                        ],
                        styles,
                        {
                            itemName: "item1",
                            isContentTop: true,
                            isGem: true,
                        }
                    )}
                    {this.renderIconContent(
                        [
                            [5, odds[0][5]],
                            [4, odds[0][4]],
                            [3, odds[0][3]],
                        ],
                        styles,
                        {
                            itemName: "item0",
                            isContentTop: true,
                            isGem: true,
                        }
                    )}
                    {this.renderIconContent(
                        [
                            [5, odds[9][5]],
                            [4, odds[9][4]],
                            [3, odds[9][3]],
                            [2, odds[9][2]],
                        ],
                        styles,
                        {
                            itemName: "item9",
                            isContentTop: false,
                            isGem: false,
                        }
                    )}
                </div>
            </>
        );
    }

    renderExamplePayout(odds: number[][], resource: ISlotTranslationResource, styles: { readonly [key: string]: string }) {
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
                                    {this.renderIconContent(
                                        [
                                            [5, odds[1][5]],
                                            [4, odds[1][4]],
                                            [3, odds[1][3]],
                                        ],
                                        styles,
                                        {
                                            itemName: "item1",
                                            isContentTop: true,
                                            isGem: false,
                                        }
                                    )}
                                </td>
                                <td>
                                    {examplePayoutResource.table.having5Symbols}{" "}
                                    <img src={`${this.imageDirectoryName}/item1.png`} width={50} height={50} alt="item1" />{" "}
                                    {examplePayoutResource.table.samePayline}
                                    <br></br>
                                    {examplePayoutResource.table.payoutBetLevel} {odds[1][5]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {examplePayoutResource.table.having4Symbols}{" "}
                                    <img src={`${this.imageDirectoryName}/item1.png`} width={50} height={50} alt="item1" />{" "}
                                    {examplePayoutResource.table.samePayline}
                                    <br></br>
                                    {examplePayoutResource.table.payoutBetLevel} {odds[1][4]}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {examplePayoutResource.table.having3Symbols}{" "}
                                    <img src={`${this.imageDirectoryName}/item1.png`} width={50} height={50} alt="item1" />{" "}
                                    {examplePayoutResource.table.samePayline}
                                    <br></br>
                                    {examplePayoutResource.table.payoutBetLevel} {odds[1][3]}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

    renderPayouts(odds: number[][], resource: ISlotTranslationResource, styles: { readonly [key: string]: string }) {
        const payOutResource = resource.payOut;
        return (
            <li className="guide-item">
                <h2>{payOutResource.paytable}</h2>
                <ul className="desc">
                    <li>{payOutResource.winningAmount}.</li>
                    <li>
                        <strong>{payOutResource.note}, </strong>
                        {payOutResource.initialStake}
                    </li>
                    <li>{payOutResource.allWinningAmount}</li>
                </ul>
                {this.renderPayoutsIconFirstLine(styles, odds)}
                {this.renderPayoutsIconSecondLine(styles, odds)}
                {this.renderExamplePayout(odds, resource, styles)}
            </li>
        );
    }

    renderFreeSpin(odds: number[][], resource: ISlotTranslationResource, styles: { readonly [key: string]: string }) {
        const freeSpinResource = resource.freeSpin;
        return (
            <li className="guide-item">
                <h2>{freeSpinResource.title}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {this.renderIconContentBlack(
                                    "item7",
                                    [
                                        [5, odds[7][5]],
                                        [4, odds[7][4]],
                                        [3, odds[7][3]],
                                    ],
                                    " FREE SPINS",
                                    styles
                                )}
                            </td>
                            <td>
                                <ul className="desc">
                                    <li>{freeSpinResource.description1}</li>
                                    <li>{freeSpinResource.description2}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <ul className="desc">
                    <li>
                        <strong> {freeSpinResource.note}:</strong> {freeSpinResource.freeSpinReel}
                        <div className={styles[this.freeSpinContentEX]}>
                            <div className={styles["wrapper-free-spin-ex"]}>
                                <img
                                    src={`${this.imageDirectoryName}/guide_example_freespin.png#v2`}
                                    alt="guide_item_symbol_bg"
                                    width={265}
                                    height={125}
                                    loading="eager"
                                />
                            </div>

                            <span>{freeSpinResource.thereAre4}</span>
                        </div>
                    </li>
                    <li className="clear-both">{freeSpinResource.lastFreespin}</li>
                    <li> {freeSpinResource.freeSpinExpired}</li>
                </ul>
            </li>
        );
    }

    renderBonus(odds: number[][], resource: ISlotTranslationResource, styles: { readonly [key: string]: string }) {
        const bonusResource = resource.bonus;
        return (
            <li className="guide-item">
                <h2>{bonusResource.title}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {this.renderIconContentBlack(
                                    "item8",
                                    [
                                        [5, odds[8][5]],
                                        [4, odds[8][4]],
                                        [3, odds[8][3]],
                                    ],
                                    " BONUS",
                                    styles
                                )}
                            </td>
                            <td>
                                <ul className="desc">
                                    <li>{bonusResource.description1}</li>
                                    <li>{bonusResource.description2}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <ul className="desc">
                    <li>
                        <strong> {bonusResource.note}:</strong> {bonusResource.bonusReel}
                        <div className={styles[this.freeSpinContentEX]}>
                            <div className={styles["wrapper-free-spin-ex"]}>
                                <img
                                    src={`${this.imageDirectoryName}/guide_example_bonus.png#v2`}
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
                    <li> {bonusResource.bonusExpired}</li>
                </ul>
            </li>
        );
    }

    renderWild(odds: number[][], resource: ISlotTranslationResource, styles: { readonly [key: string]: string }) {
        const wildResource = resource.wild;
        const wrapperWildImg = "wrapper-wild-img";
        return (
            <li className="guide-item">
                <h2>{wildResource.title}</h2>
                <div className={styles["wild-content-ex"]}>
                    <span className={styles["wrapper-wild"]}>
                        <img src={`${this.imageDirectoryName}/guide_example_wild.png#v2`} alt="guide_example_wild" loading="eager" />
                    </span>

                    <ul className="desc">
                        <li>
                            {wildResource.substitute}
                            <img
                                className={`${styles["item8"]} ${styles["mini"]}`}
                                src={`${this.imageDirectoryName}/item8.png`}
                                alt="item8"
                            ></img>
                            ,
                            <img
                                className={`${styles["item7"]} ${styles["mini"]}`}
                                src={`${this.imageDirectoryName}/item7.png#v2`}
                                alt="item7"
                            ></img>
                            {wildResource.and}
                            <img
                                className={`${styles["item10"]} ${styles["en"]} ${styles["mini"]}`}
                                src={`${this.imageDirectoryName}/item10.png`}
                                alt="item10"
                            ></img>
                            {wildResource.endSubstitute}
                        </li>
                        <li>{wildResource.onlyHighest}</li>
                    </ul>
                </div>
                <div>
                    <strong>{wildResource.example}</strong>
                    <div className={styles["wrapper-ex-wild"]}>
                        <div className={styles["wild-img"]}>
                            <div className={styles[wrapperWildImg]}>
                                <img src={`${this.imageDirectoryName}/item2.png`} alt="item2" width={100} height={100} loading="eager" />
                            </div>
                            <div className={styles[wrapperWildImg]}>
                                <img src={`${this.imageDirectoryName}/item2.png`} alt="item2" width={100} height={100} loading="eager" />
                            </div>
                            <div className={styles[wrapperWildImg]}>
                                <img src={`${this.imageDirectoryName}/item9.png?v1`} alt="item9" width={100} height={100} loading="eager" />
                            </div>
                            <div className={styles[wrapperWildImg]}>
                                <img src={`${this.imageDirectoryName}/item5.png`} alt="item5" width={100} height={100} loading="eager" />
                            </div>
                            <div className={styles[wrapperWildImg]}>
                                <img src={`${this.imageDirectoryName}/item5.png`} alt="item5" width={100} height={100} loading="eager" />
                            </div>
                        </div>
                        <ul className="desc">
                            <li>
                                {wildResource.ifwild}
                                <img
                                    className={`${styles["item2"]} ${styles["mini"]}`}
                                    src={`${this.imageDirectoryName}/item2.png`}
                                    alt="item2-mini"
                                ></img>
                                {`=>`} {wildResource.payoutBetLevel} {odds[2][3]}
                            </li>
                            <li>
                                {wildResource.ifwild}
                                <img
                                    className={`${styles["item5"]} ${styles["mini"]}`}
                                    src={`${this.imageDirectoryName}/item5.png`}
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
    }

    abstract getStyles(): { readonly [key: string]: string };

    renderTermAndConditions(styles: { readonly [key: string]: string }, gameId?: number, locale?: string) {
        return renderTermsAndConditions(styles["guide-item"], undefined, locale);
    }

    render(): React.ReactNode {
        const { gameConfigs, locale } = this.props;
        const { odds } = gameConfigs;
        const translationResource = this.getTranslationResource(locale);
        const styles = this.getStyles();
        console.log(locale);

        return (
            <>
                <ul className="game-guide">
                    {this.renderIntroduction(translationResource, styles)}
                    {this.renderGameRule(translationResource, styles)}
                    {this.renderPayouts(odds, translationResource, styles)}
                    {this.renderFreeSpin(odds, translationResource, styles)}
                    {this.renderBonus(odds, translationResource, styles)}
                    {this.renderWild(odds, translationResource, styles)}
                    {this.renderTermAndConditions(styles, undefined, locale)}
                </ul>
            </>
        );
    }
}
