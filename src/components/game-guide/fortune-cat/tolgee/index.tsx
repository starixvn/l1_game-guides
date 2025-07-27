import React from "react";
import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider, useTranslate } from "@tolgee/react";

import { GameGuideProps } from "../../type";
import Styles from "../fortune-cat.module.scss";
import { GameConfigProps } from "../type";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import initTolgee from "../../../../helpers/tolgee-helper";

const NAMESPACE = "FortuneCat";

const tolgee = initTolgee([NAMESPACE]);

const FortuneCatGuideTolgee: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName, locale } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate([NAMESPACE, "Common"]);

    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    const renderGameRule = () => {
        return (
            <>
                <h2>{t("gamerules_title")}</h2>
                <ul className="desc">
                    <li>
                        {t("gamerules_para_1")}
                        <div className="text-center">
                            <strong>{t("gamerules_total_bet")}</strong> = {t("gamerules_paylines")} * {t("gamerules_bet_level")}
                        </div>
                    </li>
                    <li>{t("gamerules_para_2")}</li>
                    <li>{t("gamerules_para_3")}</li>
                    <li>{t("gamerules_para_4")}</li>
                    <div className={Styles["payline-wrapper"]}>
                        <img src={`/static/images/fortune-cat/guide_payline.png`} alt="guide_payline" loading="eager" />
                    </div>
                </ul>
            </>
        );
    };

    const renderPayouts = (odds: number[][]) => {
        return (
            <li className="guide-item">
                <h2>{t("paytable_title")}</h2>
                <ul className="desc">
                    <li>{t("paytable_para_1")}</li>
                    <li>
                        <strong>{t("paytable_note")}</strong>{t("paytable_para_2")}
                    </li>
                    <li>{t("paytable_para_3")}</li>
                </ul>
                {renderPayoutsIconFirstLine(odds, locale || "en")}
                {renderPayoutsIconSecondLine(odds, locale || "en")}
                {renderExamplePayout(odds)}
            </li>
        );
    };

    const renderIconContent = (
        isBgBlack = false,
        itemName = "item10",
        isContentTop = false,
        isGem = false,
        dataContent: number[][],
        locale = "en"
    ) => {
        const pathSrc = "./static/images/fortune-cat/";
        return (
            <div className={Styles["symbol-wrapper"]}>
                <div className="d-center">
                    <img src={`${pathSrc}${itemName}.png?v4`} alt={itemName}></img>
                </div>

                <div>
                    {dataContent.map((data, index) => {
                        return (
                            <div key={index} className={Styles["symbol-content"]}>
                                <span className={`${Styles["number"]} ${Styles["number-first"]}`}>{data[0]}</span>
                                <span className={`${Styles["number"]} ${Styles["number-second"]}`}>{data[1]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderPayoutsIconFirstLine = (odds: number[][], locale = "en") => {
        return (
            <>
                <div className={Styles["payout-row"]}>
                    {renderIconContent(
                        false,
                        "item10",
                        false,
                        false,
                        [
                            [5, odds[10][5]],
                            [4, odds[10][4]],
                            [3, odds[10][3]],
                            [2, odds[10][2]],
                        ],
                        locale
                    )}
                    {renderIconContent(
                        false,
                        "item6",
                        true,
                        false,
                        [
                            [5, odds[6][5]],
                            [4, odds[6][4]],
                            [3, odds[6][3]],
                        ],
                        locale
                    )}
                    {renderIconContent(
                        false,
                        "item5",
                        true,
                        false,
                        [
                            [5, odds[5][5]],
                            [4, odds[5][4]],
                            [3, odds[5][3]],
                        ],
                        locale
                    )}
                    {renderIconContent(
                        false,
                        "item4",
                        true,
                        false,
                        [
                            [5, odds[4][5]],
                            [4, odds[4][4]],
                            [3, odds[4][3]],
                        ],
                        locale
                    )}
                </div>
            </>
        );
    };

    const renderPayoutsIconSecondLine = (odds: number[][], locale = "en") => {
        return (
            <>
                <div className={Styles["payout-row"]}>
                    {renderIconContent(
                        false,
                        "item3",
                        true,
                        false,
                        [
                            [5, odds[3][5]],
                            [4, odds[3][4]],
                            [3, odds[3][3]],
                        ],
                        locale
                    )}
                    {renderIconContent(
                        false,
                        "item2",
                        true,
                        true,
                        [
                            [5, odds[2][5]],
                            [4, odds[2][4]],
                            [3, odds[2][3]],
                        ],
                        locale
                    )}
                    {renderIconContent(
                        false,
                        "item1",
                        true,
                        true,
                        [
                            [5, odds[1][5]],
                            [4, odds[1][4]],
                            [3, odds[1][3]],
                        ],
                        locale
                    )}
                    {renderIconContent(
                        false,
                        "item0",
                        true,
                        true,
                        [
                            [5, odds[0][5]],
                            [4, odds[0][4]],
                            [3, odds[0][3]],
                        ],
                        locale
                    )}
                    {renderIconContent(
                        false,
                        "item9",
                        false,
                        false,
                        [
                            [5, odds[9][5]],
                            [4, odds[9][4]],
                            [3, odds[9][3]],
                            [2, odds[9][2]],
                        ],
                        locale
                    )}
                </div>
            </>
        );
    };

    const renderIconContentLarge = (itemName: string, dataContent: number[][], textAfterNumber: string) => {
        return (
            <span className={`${Styles["symbol-wrapper"]} ${Styles["large"]}`}>
                <div className="d-center">
                    <img src={`./static/images/fortune-cat/${itemName}.png`} alt={itemName}></img>
                </div>
                <div>
                    {dataContent.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`${Styles["symbol-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                            >
                                <span className={`${Styles["number"]} ${Styles["number-first"]}`}>{data[0]}</span>
                                <span className={`${Styles["number"]} ${Styles["number-second"]}`}>
                                    {data[1]} {textAfterNumber && <span className={Styles["text"]}>{textAfterNumber}</span>}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </span>
        );
    };

    const renderExamplePayout = (odds: number[][]) => {
        return (
            <>
                <p>
                    <strong>{t("example_title")}</strong>
                </p>
                <div className="table-container text-center">
                    <table className="table text-center table-medium">
                        <thead>
                            <tr>
                                <th>{t("example_symbol_header")}</th>
                                <th>{t("example_description_header")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3}>
                                    <div className="d-center">
                                        {renderIconContent(true, "item1", true, true, [
                                            [5, odds[1][5]],
                                            [4, odds[1][4]],
                                            [3, odds[1][3]],
                                        ])}
                                    </div>
                                </td>
                                <td>
                                    {t("example_desc_5_symbols", { symbol: "item1", payout: odds[1][5] })}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {t("example_desc_4_symbols", { symbol: "item1", payout: odds[1][4] })}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {t("example_desc_3_symbols", { symbol: "item1", payout: odds[1][3] })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    };

    const renderFreeSpin = (odds: number[][]) => {
        return (
            <li className="guide-item">
                <h2>{t("freespin_title")}</h2>
                <div className={Styles["free-spin-container"]}>
                    {renderIconContentLarge(
                        "item7",
                        [
                            [5, odds[7][5]],
                            [4, odds[7][4]],
                            [3, odds[7][3]],
                        ],
                        t("freespin_text")
                    )}
                    <ul className="desc">
                        <li>{t("freespin_para_1")}</li>
                        <li>{t("freespin_para_2")}</li>
                    </ul>
                </div>

                <ul className="desc">
                    <li>
                        <strong>{t("freespin_note")}</strong> {t("freespin_para_3")}
                        <div className={Styles["free-spin-content-ex"]}>
                            <div className={Styles["wrapper-free-spin-ex"]}>
                                <img
                                    src="/static/images/fortune-cat/guide_example_freespin.png#v5"
                                    alt="guide_item_symbol_bg"
                                    width={265}
                                    height={125}
                                    loading="eager"
                                />
                            </div>

                            <span>{t("freespin_para_4")}</span>
                        </div>
                    </li>
                    <li className="clear-both">{t("freespin_para_5")}</li>
                    <li>{t("freespin_para_6")}</li>
                </ul>
            </li>
        );
    };

    const renderBonus = (odds: number[][]) => {
        return (
            <li className="guide-item">
                <h2>{t("bonus_title")}</h2>
                <div className={Styles["bonus-container"]}>
                    {renderIconContentLarge(
                        "item8",
                        [
                            [5, odds[8][5]],
                            [4, odds[8][4]],
                            [3, odds[8][3]],
                        ],
                        t("bonus_text")
                    )}
                    <ul className="desc">
                        <li>{t("bonus_para_1")}</li>
                        <li>{t("bonus_para_2")}</li>
                    </ul>
                </div>

                <ul className="desc">
                    <li>
                        <strong>{t("bonus_note")}</strong> {t("bonus_para_3")}
                        <div className={Styles["free-spin-content-ex"]}>
                            <div className={Styles["wrapper-free-spin-ex"]}>
                                <img src="/static/images/fortune-cat/guide_example_bonus.png#v4" alt="guide_example_bonus" loading="eager" />
                            </div>

                            <span>{t("bonus_para_4")}</span>
                        </div>
                    </li>
                    <li>{t("bonus_para_5")}</li>
                </ul>
            </li>
        );
    };

    const renderWild = (odds: number[][]) => {
        const wrapperWildImg = "wrapper-wild-img";
        return (
            <li className="guide-item">
                <h2>{t("wild_title")}</h2>
                <div className={Styles["wild-content-ex"]}>
                    <span className={Styles["wrapper-wild"]}>
                        <img src="/static/images/fortune-cat/guide_example_wild.png#v3" alt="guide_example_wild" loading="eager" />
                    </span>

                    <ul className="desc">
                        <li>{t("wild_para_1")}</li>
                        <li>{t("wild_para_2")}</li>
                    </ul>
                </div>
                <div>
                    <strong>{t("example_title")}</strong>
                    <div className={Styles["wrapper-ex-wild"]}>
                        <div className={Styles["wild-img"]}>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/fortune-cat/item2.png" alt="item2" loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/fortune-cat/item9.png?v1" alt="item9" loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                            </div>
                            <div className={Styles[wrapperWildImg]}>
                                <img src="/static/images/fortune-cat/item5.png" alt="item5" loading="eager" />
                            </div>
                        </div>
                        <ul className="desc">
                            <li>{t("wild_example_1", { symbol: "item2", payout: odds[2][3] })}</li>
                            <li>{t("wild_example_2", { symbol: "item5", payout: odds[5][3] })}</li>
                        </ul>
                        <p>{t("wild_example_3", { payout: Math.max(odds[2][3], odds[5][3]) })}</p>
                    </div>
                </div>
            </li>
        );
    };

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    <p className="content">
                        {t("intro_para_1", { gameName: gameName })}
                    </p>
                    <div className={Styles["list-symbol-wrapper"]}>
                        <img src={`/static/images/fortune-cat/list_icon.png#v7`} alt="guide_item_symbol_bg" />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule()}</li>

                {renderPayouts(odds)}
                {renderFreeSpin(odds)}
                {renderBonus(odds)}
                {renderWild(odds)}
                <TermsAndConditionsTolgee />
            </ul>
        </TolgeeProvider>
    );
};

const FortuneCatGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { locale } = props;

    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <FortuneCatGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default FortuneCatGuideTolgeeWrapper; 
