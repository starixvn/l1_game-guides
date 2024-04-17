import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { Trans } from "next-i18next";
import React from "react";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../type";
import Styles from "./football-slot.module.scss";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "./type";

const renderGameRule = (maxBet: string | undefined, minBet: string | undefined, t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("title_gamerules", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    <Markup content={t("gamerules_para_1")} />
                </li>
                <li>{t("gamerules_para_2")}</li>
                <li>
                    <Markup content={t("gamerules_para_3", { maxbet: maxBet })} />
                </li>
                <li>{t("gamerules_para_4")}</li>
                <div>
                    <div style={{ marginLeft: "2rem" }}>
                        <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/gameguide_bullet.png" alt="item_star"></img>{" "}
                        {t("gamerules_para_5")}
                        <div style={{ marginLeft: "5rem" }}>✦ {t("gamerules_para_6")}</div>
                        <div style={{ marginLeft: "5rem" }}>✦ {t("gamerules_para_7")}</div>
                    </div>
                    <div style={{ marginLeft: "2rem" }}>
                        <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/gameguide_bullet.png" alt="item_star"></img>{" "}
                        {t("gamerules_para_8")}
                    </div>
                </div>
            </ul>
        </li>
    );
};

export const renderItemSymbol = (odds: OddsProps | undefined, itemName: string, isTextImages: boolean, locale = "vi") => {
    const pathSrc = "./static/images/football-slot/item_";
    const itemTextName = itemName + "_" + locale;
    const symbol = isTextImages ? itemTextName : itemName;

    return (
        <div className={Styles["wrapper-symbol"]}>
            <img className={`${Styles[itemName]} ${Styles["icon"]}`} src={`${pathSrc}${symbol}.png?v1`} alt={symbol}></img>
            <span>1:{odds?.[itemName]}</span>
        </div>
    );
};

const renderPayouts = (odds: OddsProps | undefined, t: Function, locale: any) => {
    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    <Trans>{t("payouts_para_1")}</Trans>
                </li>
                <li>
                    <Trans>{t("payouts_para_2")}</Trans>
                </li>
                <li>
                    {t("payouts_para_3")}
                    <div className={Styles["symbol-container"]}>
                        <div className={Styles["symbol-group"]}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "shoes", false, locale)}
                                {renderItemSymbol(odds, "shoes3", false, locale)}
                            </div>
                        </div>
                        <div className={Styles["symbol-group"]}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "tickets", false, locale)}
                                {renderItemSymbol(odds, "tickets3", false, locale)}
                            </div>
                        </div>
                        <div className={Styles["symbol-group"]}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "ball", false, locale)}
                                {renderItemSymbol(odds, "ball3", false, locale)}
                            </div>
                        </div>
                        <div className={Styles["symbol-group"]}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "englandShirt", false, locale)}
                                {renderItemSymbol(odds, "englandShirt3", false, locale)}
                            </div>
                        </div>
                        <div className={Styles["symbol-group"]}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "franceShirt", false, locale)}
                                {renderItemSymbol(odds, "franceShirt3", false, locale)}
                            </div>
                        </div>
                        <div className={Styles["symbol-group"]}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "hostCountry", false, locale)}
                                {renderItemSymbol(odds, "hostCountry3", false, locale)}
                            </div>
                        </div>
                        <div className={`${Styles["symbol-group"]} ${Styles["fix-height"]}`}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "mascot", false, locale)}
                                {renderItemSymbol(odds, "mascot3", false, locale)}
                            </div>
                        </div>
                        <div className={Styles["symbol-group"]}>
                            <img
                                src={`/static/images/football-slot/gameguide_3item_bg.png?v1`}
                                width={272}
                                height={284}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "cup", false, locale)}
                                {renderItemSymbol(odds, "cup50", false, locale)}
                                {renderItemSymbol(odds, "cup25", false, locale)}
                            </div>
                        </div>
                        <div className={`${Styles["symbol-group"]} ${Styles["fix-height"]}`}>
                            <img
                                src={`/static/images/football-slot/gameguide_2item_bg.png?v1`}
                                width={272}
                                height={190}
                                alt={"gameguide_2item_bg"}
                                loading="eager"
                            />
                            <div className={Styles["icon-wrapper"]}>
                                {renderItemSymbol(odds, "big", true, locale)}
                                {renderItemSymbol(odds, "small", true, locale)}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const renderLuckySymbol = (t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("title_luckysymbols")}</h2>
            <ul className="desc">
                <li>
                    <Trans>{t("luckysymbols_para_1")}</Trans>
                </li>
                <li>{t("luckysymbols_para_2")}</li>
                <li>{t("luckysymbols_para_3")}</li>

                <div style={{ marginLeft: "2rem" }}>
                    <Trans>
                        {t("luckysymbols_para_4", {
                            symbol: (
                                <img
                                    className={Styles["symbol-mini"]}
                                    src="./static/images/football-slot/item_lucky.png"
                                    alt="item_lucky"
                                ></img>
                            ),
                        })}
                    </Trans>
                    <div style={{ marginLeft: "2rem" }}>
                        <p>
                            <Trans>
                                {t("luckysymbols_para_5", {
                                    symbol: (
                                        <img
                                            className={Styles["symbol-mini"]}
                                            src="./static/images/football-slot/item_ball.png"
                                            alt="item_ball"
                                        ></img>
                                    ),
                                })}
                            </Trans>
                        </p>
                        <p>
                            <Trans>
                                {t("luckysymbols_para_6", {
                                    symbol: (
                                        <img
                                            className={Styles["symbol-mini"]}
                                            src="./static/images/football-slot/item_hostCountry.png"
                                            alt="item_hostCountry"
                                        ></img>
                                    ),
                                })}
                            </Trans>
                        </p>
                    </div>
                    <p>{t("luckysymbols_para_7")}</p>
                </div>
            </ul>
        </li>
    );
};

const Contents: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, locale } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate(["FootballSlot", "Common"]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("title_introduction", { ns: "Common" })}</h2>
                    <p className="content">{t("intro_para_1")}</p>
                </li>
                {renderGameRule(maxBetFollowChoice?.maxBetMain, maxBetFollowChoice?.minBetMain, t)}
                {renderPayouts(odds, t, locale)}
                {renderLuckySymbol(t)}
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};
export default Contents;
