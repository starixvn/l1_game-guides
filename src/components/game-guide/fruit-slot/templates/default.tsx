import React from "react";
import { renderTermsAndConditions, renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../fruit-slot.module.scss";
import { getFruitSlotTranslationResource } from "../languages";
import { IFruitSlotTranslationResource } from "../languages/types";
import { Markup } from "interweave";

class FruitSlotGuideTemplate extends React.Component<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> {
    renderIntroduction(translationResource: IFruitSlotTranslationResource, gameName: string) {
        return (
            <li className="guide-item">
                <h2>{translationResource.main.introduction}</h2>
                <p className="content">{translationResource.main.description}</p>
            </li>
        );
    }

    renderGameRule(resource: IFruitSlotTranslationResource, maxBetFollowChoice: MaxBetChoicesProps | undefined) {
        const gameRuleResource = resource.gameRule;
        return (
            <li className="guide-item">
                <h2>{gameRuleResource.title}</h2>
                <ul className="desc">
                    <li>
                        {gameRuleResource.description.line1}
                        <div>{gameRuleResource.description.noteText}</div>
                    </li>
                    <li>
                        {gameRuleResource.description.theMaxTotalStake}{" "}
                        <span className={Styles["text-highlight"]}>{maxBetFollowChoice?.maxBetMain}</span>
                    </li>
                    <li>{gameRuleResource.description.thePlayerCanPlaceBets}</li>
                    <li>
                        {gameRuleResource.description.onceBettingTimeExpired}
                        <div style={{ marginLeft: "2rem" }}>
                            <img
                                className={Styles["symbol-mini"]}
                                src="./static/images/fruit-slot/gameguide_bullet.png"
                                alt="item_star"
                            ></img>{" "}
                            {gameRuleResource.description.bigSmallResult}
                            <div style={{ marginLeft: "5rem" }}>✦ {gameRuleResource.description.bigResult}</div>
                            <div style={{ marginLeft: "5rem" }}>✦ {gameRuleResource.description.smallResult}</div>
                        </div>
                        <div style={{ marginLeft: "2rem" }}>
                            <img
                                className={Styles["symbol-mini"]}
                                src="./static/images/fruit-slot/gameguide_bullet.png"
                                alt="item_star"
                            ></img>{" "}
                            {gameRuleResource.description.symbolResult}
                        </div>
                    </li>
                </ul>
            </li>
        );
    }

    renderItemSymbol(locales: string, odds: OddsProps | undefined, itemName: string, isTextImages: boolean) {
        const pathSrc = "./static/images/fruit-slot/item_";
        const itemTextName = itemName + "_" + locales;
        const symbol = isTextImages ? itemTextName : itemName;

        return (
            <div className={Styles["wrapper-symbol"]}>
                <img className={`${Styles[itemName]} ${Styles["icon"]}`} src={`${pathSrc}${symbol}.png?v2`} alt={symbol}></img>
                <span>1:{odds?.[itemName]}</span>
            </div>
        );
    }

    renderPayoutsTable(translationResource: IFruitSlotTranslationResource, odds: OddsProps | undefined) {
        const locales = translationResource.payOut.locales;
        return (
            <>
                <div className={Styles["symbol-container"]}>
                    <div className={Styles["symbol-group"]}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "cherry", false)}
                            {this.renderItemSymbol(locales, odds, "cherry3", false)}
                        </div>
                    </div>
                    <div className={Styles["symbol-group"]}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "orange", false)}
                            {this.renderItemSymbol(locales, odds, "orange3", false)}
                        </div>
                    </div>
                    <div className={Styles["symbol-group"]}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "lemon", false)}
                            {this.renderItemSymbol(locales, odds, "lemon3", false)}
                        </div>
                    </div>
                    <div className={Styles["symbol-group"]}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "bell", false)}
                            {this.renderItemSymbol(locales, odds, "bell3", false)}
                        </div>
                    </div>
                    <div className={Styles["symbol-group"]}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "watermelon", false)}
                            {this.renderItemSymbol(locales, odds, "watermelon3", false)}
                        </div>
                    </div>
                    <div className={Styles["symbol-group"]}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "star", false)}
                            {this.renderItemSymbol(locales, odds, "star3", false)}
                        </div>
                    </div>
                    <div className={`${Styles["symbol-group"]} ${Styles["fix-height"]}`}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "tripleSeven", false)}
                            {this.renderItemSymbol(locales, odds, "tripleSeven3", false)}
                        </div>
                    </div>
                    <div className={Styles["symbol-group"]}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_3item_bg.png?v1`}
                            width={272}
                            height={284}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "bar", false)}
                            {this.renderItemSymbol(locales, odds, "bar50", false)}
                            {this.renderItemSymbol(locales, odds, "bar25", false)}
                        </div>
                    </div>
                    <div className={`${Styles["symbol-group"]} ${Styles["fix-height"]}`}>
                        <img
                            src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                            width={272}
                            height={190}
                            alt={"gameguide_2item_bg"}
                            loading="eager"
                        />
                        <div className={Styles["icon-wrapper"]}>
                            {this.renderItemSymbol(locales, odds, "big", true)}
                            {this.renderItemSymbol(locales, odds, "small", true)}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    renderPayouts(translationResource: IFruitSlotTranslationResource, odds: OddsProps | undefined) {
        const payOutResource = translationResource.payOut;
        return (
            <>
                <li className="guide-item">
                    <h2>{payOutResource.title}</h2>
                    <ul className="desc">
                        <li>
                            {payOutResource.winningAmount}
                            <div>{payOutResource.noteText}</div>
                        </li>
                        <li>{payOutResource.allWinningAmount}</li>
                        <li>{payOutResource.bettingOddsTable}</li>
                        {this.renderPayoutsTable(translationResource, odds)}
                    </ul>
                </li>
            </>
        );
    }

    renderLuckySymbol(translationResource: IFruitSlotTranslationResource) {
        const luckyResource = translationResource.lucky;
        return (
            <>
                <li className="guide-item">
                    <h2>{luckyResource.title}</h2>
                    <ul className="desc">
                        <li>
                            <Markup content={luckyResource.line1} />
                        </li>
                        <li>{luckyResource.line2}</li>
                        <li>{luckyResource.line3}</li>
                        <li>
                            <strong>{luckyResource.example}: </strong>
                            {luckyResource.exampleText1}{" "}
                            <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_lucky.png" alt="item_lucky"></img>
                            {luckyResource.exampleText2}
                            <p>
                                {luckyResource.firstAdditional}
                                <img
                                    className={Styles["symbol-mini"]}
                                    src="./static/images/fruit-slot/item_lemon.png"
                                    alt="item_lemon"
                                ></img>
                            </p>
                            <p>
                                {luckyResource.secondAdditional}
                                <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_star.png" alt="item_star"></img>
                            </p>
                            <p>{luckyResource.lemonAndStar}</p>
                        </li>
                    </ul>
                </li>
            </>
        );
    }

    render(): React.ReactNode {
        const { gameConfigs, gameName, locale, maxBetFollowChoice } = this.props;
        const { odds } = gameConfigs;
        const translationResource = getFruitSlotTranslationResource(locale);

        return (
            <>
                <ul className="game-guide">
                    {this.renderIntroduction(translationResource, gameName)}
                    {this.renderGameRule(translationResource, maxBetFollowChoice)}
                    {this.renderPayouts(translationResource, odds)}
                    {this.renderLuckySymbol(translationResource)}
                    {renderTermsAndConditions(Styles["guide-item"], undefined, locale)}
                </ul>
            </>
        );
    }
}

export default FruitSlotGuideTemplate;
