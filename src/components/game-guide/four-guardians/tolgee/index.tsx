import { TolgeeProvider, useTranslate } from "@tolgee/react";
import React from "react";
import { isMobile } from "react-device-detect";
import { PROJECTS } from "../../../../common/constants";
import initTolgee from "../../../../helpers/tolgee-helper";
import { renderGameRuleContent } from "../../../shared/slot-games/en";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";
import { GameConfigProps } from "../type";

const tolgee = initTolgee(["FourGuardians"]);

const number = "number";
const numberExtra = "numberExtra";
const numberFirst = "number-first";
const numberSecond = "number-second";
const iconBox = "icon-box";
const freeSpinContentEX = "free-spin-content-ex";

const renderGameRule = (project: string | undefined) => {
    const { t } = useTranslate(["FourGuardians"]);
    const imgMobile = isMobile ? "_mobile" : "";
    return (
        <>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                {renderGameRuleContent(project)}
                <div className={Styles["wrapper-img-payline"]}>
                    <img src={`/static/images/four-guardians/guide_payline${imgMobile}.png`} alt="guide_payline" loading="eager" />
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: number[][], project: string | undefined) => {
    const { t } = useTranslate(["FourGuardians"]);
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
            {renderPayoutsIconFirstLine(odds, project, "en")}
            {renderPayoutsIconSecondLine(odds, project)}
            {renderExamplePayout(odds, project)}
        </li>
    );
};

export const renderIconContent = (
    isBgBlack = false,
    itemName = "item10",
    isContentTop = false,
    isGem = false,
    dataContent: number[][],
    project: string | undefined,
    locale?: string
) => {
    const pathSrc =
        itemName === "item10"
            ? `./static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/${locale}` : project}/`
            : "./static/images/four-guardians/";
    return (
        <span className={Styles["wrapper-icon"]}>
            <img
                src={`/static/images/four-guardians/${isBgBlack ? "guide_item_symbol_bg-dark" : "guide_item_symbol_bg"}.png?v1`}
                width={200}
                height={132}
                alt={isBgBlack ? "guide_item_symbol_bg-dark" : "guide_item_symbol_bg"}
                loading="eager"
            />

            <img className={`${Styles[itemName]} ${Styles["customize"]}`} src={`${pathSrc}${itemName}.png`} alt={itemName}></img>
            <div
                className={`${Styles["icon-content-wrapper"]} ${isContentTop && Styles["icon-content-top"]} ${
                    isGem && Styles["gem-position"]
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

export const renderPayoutsIconFirstLine = (odds: number[][], project: string | undefined, locale?: string) => {
    return (
        <>
            <div className={Styles["icon-container"]}>
                {renderIconContent(
                    false,
                    "item10",
                    false,
                    false,
                    project === PROJECTS.L1
                        ? [
                              [5, odds[10][5]],
                              [4, odds[10][4]],
                              [3, odds[10][3]],
                              [2, odds[10][2]],
                          ]
                        : [
                              [4, odds[10][4]],
                              [3, odds[10][3]],
                              [2, odds[10][2]],
                          ],
                    project,
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
                    project
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
                    project
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
                    project
                )}
            </div>
        </>
    );
};

export const renderPayoutsIconSecondLine = (odds: number[][], project: string | undefined) => {
    return (
        <>
            <div className={Styles["icon-container"]}>
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
                    project
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
                    project
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
                    project
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
                    project
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
                    project
                )}
            </div>
        </>
    );
};

export const renderIconContentBlack = (itemName: string, dataContent: number[][], textAfterNumber: string) => {
    return (
        <span className={Styles["wrapper-icon-dark"]}>
            <img
                className={`${Styles[iconBox]}`}
                src="/static/images/four-guardians/guide_item_symbol_bg-dark.png?v1"
                width={269}
                height={132}
                alt="guide_item_symbol_bg"
                loading="eager"
            />

            <img
                className={`${Styles[itemName]} ${Styles["dark"]}`}
                src={`./static/images/four-guardians/${itemName}.png`}
                alt={itemName}
            ></img>
            <div
                className={`${Styles["icon-content-wrapper"]} ${itemName === "item8" ? Styles["bonus-position"] : Styles["spin-position"]}`}
            >
                {dataContent.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`${Styles["icon-content"]} ${itemName === "item8" ? Styles["bonus"] : Styles["free-spin"]}`}
                        >
                            <span className={`${Styles[numberExtra]} ${Styles[numberFirst]}`}>{data[0]}</span>
                            <span className={`${Styles[numberExtra]} ${Styles[numberSecond]}`}>
                                {data[1]} {textAfterNumber && <span className="text-white">{textAfterNumber}</span>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </span>
    );
};

const renderExamplePayout = (odds: number[][], project: string | undefined) => {
    const { t } = useTranslate(["FourGuardians"]);
    return (
        <>
            <p>
                <strong>{t("example_title")}</strong>
            </p>
            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>{t("table_symbol")}</th>
                            <th>{t("table_description")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3} className={Styles["example-symbol"]}>
                                {renderIconContent(
                                    true,
                                    "item1",
                                    true,
                                    true,
                                    [
                                        [5, odds[1][5]],
                                        [4, odds[1][4]],
                                        [3, odds[1][3]],
                                    ],
                                    project
                                )}
                            </td>
                            <td>
                                {t("example_5_symbols")}
                                <img src={`./static/images/four-guardians/item1.png`} width={35} height={35} alt="item1"></img> {t("example_located_on_payline")}
                                <br></br>{t("example_payout")} {odds[1][5]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("example_4_symbols")}
                                <img src={`./static/images/four-guardians/item1.png`} width={35} height={35} alt="item1"></img> {t("example_located_on_payline")}
                                <br></br>{t("example_payout")} {odds[1][4]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {t("example_3_symbols")}
                                <img src={`./static/images/four-guardians/item1.png`} width={35} height={35} alt="item1"></img> {t("example_located_on_payline")}
                                <br></br>{t("example_payout")} {odds[1][3]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const renderJackpot = () => {
    const { t } = useTranslate(["FourGuardians"]);
    return (
        <li className="guide-item">
            <h2>{t("jackpot_title")}</h2>
            <ul className="desc">
                <li>
                    {t("jackpot_para_1")}{" "}
                    <img
                        className={`${Styles["item10"]} ${Styles["mini"]}`}
                        src="./static/images/four-guardians/L2/en/item10.png"
                        alt="item10"
                    ></img>{" "}
                    {t("jackpot_para_2")}
                </li>
            </ul>

            <div className="table-container text-center">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>{t("table_symbol")}</th>
                            <th>{t("table_description")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    className={`${Styles["item10"]} ${Styles["en"]}`}
                                    src="./static/images/four-guardians/L2/en/item10.png"
                                    alt="item10"
                                ></img>
                            </td>
                            <td>
                                {t("jackpot_desc_1")}<br></br>
                                <strong>{t("jackpot_note")}</strong>
                                {t("jackpot_desc_2")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderFreeSpin = (odds: number[][], project: string | undefined) => {
    const { t } = useTranslate(["FourGuardians"]);
    return (
        <li className="guide-item">
            <h2>{t("freespin_title")}</h2>
            <div className={Styles["guide-flex"]}>
                <div className={Styles["guide-img"]}>
                    {renderIconContentBlack(
                        "item7",
                        [
                            [5, odds[7][5]],
                            [4, odds[7][4]],
                            [3, odds[7][3]],
                        ],
                        " FREE SPINS"
                    )}
                </div>
                <div className={Styles["guide-text"]}>
                    <ul className="desc">
                        <li>
                            {t("freespin_para_1")}
                        </li>
                        <li>{t("freespin_para_2")}</li>
                    </ul>
                </div>
            </div>

            <ul className="desc">
                <li>
                    <strong>{t("freespin_note_title")}</strong> {t("freespin_note_desc")}
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src={`/static/images/four-guardians/${
                                    project === PROJECTS.L2 ? `${project}/en` : project
                                }/guide_example_free_spin.png?v1`}
                                alt="guide_item_symbol_bg"
                                width={333}
                                height={126}
                                loading="eager"
                            />
                        </div>

                        <span>
                            {t("freespin_example_desc")}
                        </span>
                    </div>
                </li>
                <li className="clear-both">
                    {t("freespin_para_3")}
                </li>
                <li>{t("freespin_para_4")}</li>
            </ul>
        </li>
    );
};

const renderBonus = (odds: number[][], project: string | undefined) => {
    const { t } = useTranslate(["FourGuardians"]);
    return (
        <li className="guide-item">
            <h2>{t("bonus_title")}</h2>
            <div className={Styles["guide-img"]}>
                {renderIconContentBlack(
                    "item8",
                    [
                        [5, odds[8][5]],
                        [4, odds[8][4]],
                        [3, odds[8][3]],
                    ],
                    " BONUS"
                )}
            </div>
            <div className={Styles["guide-text"]}>
                <ul className="desc">
                    <li>{t("bonus_para_1")}</li>
                    <li>{t("bonus_para_2")}</li>
                </ul>
            </div>

            <ul className="desc">
                <li>
                    <strong>{t("bonus_note_title")}</strong> {t("bonus_note_desc")}
                    <div className={Styles[freeSpinContentEX]}>
                        <div className={Styles["wrapper-free-spin-ex"]}>
                            <img
                                src={`/static/images/four-guardians/${
                                    project === PROJECTS.L2 ? `${project}/en` : project
                                }/guide_example_bonus.png?v1`}
                                alt="guide_example_bonus"
                                width={333}
                                height={126}
                                loading="eager"
                            />
                        </div>

                        <span>
                            {t("bonus_example_desc")}
                        </span>
                    </div>
                </li>
                <li>
                    {t("bonus_para_3")}
                </li>
            </ul>
        </li>
    );
};

const renderWild = (odds: number[][], project: string | undefined) => {
    const { t } = useTranslate(["FourGuardians"]);
    const wrapperWildImg = "wrapper-wild-img";
    return (
        <li className="guide-item">
            <h2>{t("wild_title")}</h2>
            <div className={Styles["wild-content-ex"]}>
                <span className={Styles["wrapper-wild"]}>
                    <img
                        src="/static/images/four-guardians/guide_example_wild.png"
                        alt="guide_example_wild"
                        width={245}
                        height={160}
                        loading="eager"
                    />
                </span>

                <ul className="desc">
                    <li>
                        {t("wild_para_1")}
                        <img
                            className={`${Styles["item8"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item8.png"
                            alt="item8"
                        ></img>
                        ,
                        <img
                            className={`${Styles["item7"]} ${Styles["mini"]}`}
                            src="./static/images/four-guardians/item7.png"
                            alt="item7"
                        ></img>
                        {t("wild_para_2")}{" "}
                        <img
                            className={`${Styles["item10"]} ${Styles["en"]} ${Styles["mini"]}`}
                            src={`./static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/en` : project}/item10.png`}
                            alt="item10"
                        ></img>
                    </li>
                    <li>{t("wild_para_3")}</li>
                </ul>
            </div>
            <div>
                <strong>{t("example_title")}</strong>
                <div className={Styles["wrapper-ex-wild"]}>
                    <div className={Styles["wild-img"]}>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item2.png" alt="item2" width={77} height={67} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item2.png" alt="item2" width={77} height={67} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item9.png?v1" alt="item9" width={74} height={50} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item5.png" alt="item5" width={85} height={86} loading="eager" />
                        </div>
                        <div className={Styles[wrapperWildImg]}>
                            <img src="/static/images/four-guardians/item5.png" alt="item5" width={85} height={86} loading="eager" />
                        </div>
                    </div>
                    <ul className="desc">
                        <li>
                            {t("wild_example_1")}
                            <img
                                className={`${Styles["item2"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item2.png"
                                alt="item2-mini"
                            ></img>
                            {t("wild_example_payout")} {odds[2][3]}
                        </li>
                        <li>
                            {t("wild_example_2")}
                            <img
                                className={`${Styles["item5"]} ${Styles["mini"]}`}
                                src="./static/images/four-guardians/item5.png"
                                alt="item5-mini"
                            ></img>
                            {t("wild_example_payout")} {odds[5][3]}
                        </li>
                    </ul>
                    <p>
                        {t("wild_example_highest")} {Math.max(odds[2][3], odds[5][3])}
                    </p>
                </div>
            </div>
        </li>
    );
};

const FourGuardiansGuideTolgee: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs, project, locale } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate(["FourGuardians"]);
    
    // Handle locale changes
    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);
    
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    <p className="content">
                        {t("intro_para_1", { gameName })}
                    </p>
                    <div className={Styles["wrapper-list-icon"]}>
                        <img
                            src={`/static/images/four-guardians/${project === PROJECTS.L2 ? `${project}/en` : project}/list_icon.png?v1`}
                            alt="guide_item_symbol_bg"
                        />
                    </div>
                </li>
                <li className="guide-item">{renderGameRule(project)}</li>

                {renderPayouts(odds, project)}
                {project === PROJECTS.L2 && renderJackpot()}
                {renderFreeSpin(odds, project)}
                {renderBonus(odds, project)}
                {renderWild(odds, project)}
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const FourGuardiansGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <FourGuardiansGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default FourGuardiansGuideTolgeeWrapper; 