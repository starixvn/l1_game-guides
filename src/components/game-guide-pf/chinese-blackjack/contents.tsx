import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase } from "../base";
import Styles from "./chinese-blackjack-pf-game.module.scss";
import { ChineseBlackjackPFContentsProps } from "./type";

const suitCards = {
    hearts: "♥",
    diamonds: "♦",
    spades: "♠",
    clubs: "♣",
};

const renderHowPFInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, locale: string) => {
    return (
        <li className="guide-item section">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>
            <p>{t("pf_how_pf_applied_in_game_para_1", { ns: "ChineseBlackjack" })} </p>
            <ul className="circle">
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_2", { ns: "ChineseBlackjack" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_3", { ns: "ChineseBlackjack" })} />}</li>
            </ul>
            <div className="center-img">
                <img
                    className="img img-border"
                    src={`./static/images/chinese-blackjack/pf/chart_${locale}.png?v=${verImg}`}
                    alt="chart"
                ></img>
            </div>
        </li>
    );
};

const renderVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, locale: string) => {
    return (
        <li className="guide-item section">
            <h2>{t("pf_title_Verify_the_Provably_Fair", { ns: "ChineseBlackjack" })}</h2>
            <ul className="style-number-dot">
                {renderBeforeConfirmingBet(t, verImg, locale)}

                {renderAfterSettling(t, verImg, locale)}
            </ul>
        </li>
    );
};

const renderBeforeConfirmingBet = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, locale: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_start_the_game_round", { ns: "ChineseBlackjack" })}</span>
            <ul className="circle">
                <li>
                    {<Markup content={t("pf_start_game_round_para_1.1", { ns: "ChineseBlackjack" })} />}{" "}
                    <img src={`./static/images/chinese-blackjack/pf/btn-pf.png?v=${verImg}`} alt="pf"></img>{" "}
                    {<Markup content={t("pf_start_game_round_para_1.2", { ns: "ChineseBlackjack" })} />}{" "}
                </li>

                <div className="center-img">
                    <img className="img" src={`./static/images/chinese-blackjack/pf/pf_setting_${locale}.png?v=${verImg}`} alt="pf"></img>
                </div>

                <li>{<Markup content={t("pf_start_game_round_para_2", { ns: "ChineseBlackjack" })} />}</li>
                <li>{<Markup content={t("pf_start_game_round_para_3", { ns: "ChineseBlackjack" })} />}</li>
                <li>{<Markup content={t("pf_start_game_round_para_4", { ns: "ChineseBlackjack" })} />}</li>
            </ul>
        </li>
    );
};

const renderAfterSettling = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, locale: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_after_settling", { ns: "ChineseBlackjack" })}</span>
            <ul className="style-number-dot-number">
                <li className="number-dot-number">
                    <span className="title-text">{t("pf_subtitle_verify_fairness_of_server_seed_SHA256", { ns: "ChineseBlackjack" })}</span>
                    <ul className="circle">
                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_1", { ns: "ChineseBlackjack" })} />}</li>
                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_2", { ns: "ChineseBlackjack" })} />}</li>
                        <div className="center-img">{renderImage(t)}</div>
                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_3", { ns: "ChineseBlackjack" })} />}</li>
                        <div className="center-img">
                            <img
                                className="img img-border"
                                src={`./static/images/chinese-blackjack/pf/sha256.png?v=${verImg}`}
                                alt="pf"
                            ></img>
                        </div>

                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_4", { ns: "ChineseBlackjack" })} />}</li>

                        <p>{t("pf_verify_server_seed_SHA256_para_5", { ns: "ChineseBlackjack" })}</p>
                    </ul>
                </li>

                <li className="number-dot-number">
                    <span className="title-text">{t("pf_subtitle_verify_impact_of_cliend_seed", { ns: "ChineseBlackjack" })}</span>
                    <ul className="circle">
                        <li>{<Markup content={t("pf_verify_impact_of_client_seed_para_1", { ns: "ChineseBlackjack" })} />}</li>
                        <div className="center-img">{renderImage(t, true)}</div>
                        <li>
                            {<Markup content={t("pf_verify_impact_of_client_seed_para_2", { ns: "ChineseBlackjack" })} />}{" "}
                            <ul className="plus">
                                <li>
                                    {<Markup content={t("pf_verify_impact_of_client_seed_para_3", { ns: "ChineseBlackjack" })} />}
                                    <p className={Styles["left-text"]}>
                                        <strong>{t("pf_server_Seed", { ns: "Common" })}</strong>
                                    </p>
                                    <div className="center-img">
                                        <img
                                            className="img"
                                            src={`./static/images/chinese-blackjack/pf/server-seed.png?v=${verImg}`}
                                            alt="pf"
                                        ></img>
                                    </div>
                                </li>
                                <li>
                                    {<Markup content={t("pf_verify_impact_of_client_seed_para_4", { ns: "ChineseBlackjack" })} />}
                                    <p className={Styles["left-text"]}>
                                        <strong>{t("pf_final_result", { ns: "Common" })}</strong>
                                    </p>
                                    <div className="center-img">
                                        <img
                                            className="img"
                                            src={`./static/images/chinese-blackjack/pf/final-result.png?v=${verImg}`}
                                            alt="pf"
                                        ></img>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const renderImage = (t: TFnType<DefaultParamType, string, TranslationKey>, isVerified = false) => {
    const serverSeed = `{"deck":"3♣ 7♣ 4♥ 9♥ K♠ 7♠ 4♦ Q♦ A♠ 5♥ A♦`;
    const classVerifyButton = isVerified ? Styles["disable"] : Styles["active"];
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    <span className={Styles["title-provably-fair"]}>{t("pf_provably_fair", { ns: "Common" })} </span>
                    <span className={Styles["icon-guide"]}></span>
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["close-button"]}></div>
            <div className={Styles["popup-content"]}>
                <div className={Styles["section-info"]}>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>{t("pf_handid", { ns: "ChineseBlackjack" })}:</div>
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]}`}>3878</div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["server-client-seed-section"]}>
                        <div className={Styles["server-seed"]}>
                            <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: "Common" })} />}</div>
                            <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                                {serverSeed}
                                <span className={Styles["icon-copy"]}></span>
                            </div>
                        </div>
                        <div className={Styles["client-seed"]}>
                            <span className={Styles["title-style"]}>{<Markup content={t("pf_client_seed", { ns: "Common" })} />}</span>
                            <div className={Styles["text-section"]}>2</div>
                        </div>
                    </div>
                    <div className={Styles["server-seed-sha256-section"]}>
                        <div className={Styles["title-style"]}>{<Markup content={t("pf_server_seed_sha256", { ns: "Common" })} />}</div>
                        <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                            347ad2b07cf8d5b0481527bdd56cc64a7fe2bb1847ae1d4eab8c394e5acf0821<span className={Styles["icon-copy"]}></span>{" "}
                        </div>
                    </div>

                    <div className={Styles["combined-hash-section"]}>
                        <div className={`${Styles["title-style"]} ${Styles["title-hash-string"]}`}>
                            {<Markup content={t("pf_final_result", { ns: "Common" })} />}
                        </div>
                        <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                            4{suitCards.hearts} 9{suitCards.hearts} K{suitCards.spades} 7{suitCards.spades} 4{suitCards.diamonds} Q
                            {suitCards.diamonds} A{suitCards.spades} 5{suitCards.hearts} A{suitCards.diamonds} K{suitCards.spades} 4
                            {suitCards.clubs} 3{suitCards.spades} 9{suitCards.diamonds} 2{suitCards.hearts} 7{suitCards.hearts} 5
                            {suitCards.clubs} J{suitCards.clubs} 2{suitCards.clubs} 10{suitCards.hearts} 6{suitCards.spades} K
                            {suitCards.clubs} 8{suitCards.spades} 3{suitCards.diamonds} K{suitCards.clubs} A{suitCards.clubs}
                            <span className={Styles["icon-copy"]}></span>
                        </div>
                    </div>
                </div>
                {isVerified && renderVerifySuccessfulText(t)}

                <div className={Styles["btn-verify"]}>
                    <div className={classVerifyButton}>{t("pf_verify", { ns: "Common" })}</div>
                </div>
            </div>
        </div>
    );
};

const renderVerifySuccessfulText = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={`${Styles["verify-text"]}`}>
            <div> {<Markup content={t("pf_verify_successfully", { ns: "ChineseBlackjack" })} />}</div>
            <div>{""}</div>
            <div>{<Markup content={t("pf_verify_successful_text", { ns: "ChineseBlackjack" })} />}</div>
        </div>
    );
};
const ChineseBlackjackPFContents: React.FC<ChineseBlackjackPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["ChineseBlackjack", "Common"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";
    const arrangeLocale = locale ?? "en";

    return (
        <div>
            <ul className={`game-guide game-guide-pf`}>
                {renderContentPFBase(t, displayName ?? "", verImg, arrangeLocale)}
                {renderHowPFInGame(t, verImg, arrangeLocale)}
                {renderVerifyPF(t, verImg, arrangeLocale)}
            </ul>
        </div>
    );
};

export default ChineseBlackjackPFContents;
