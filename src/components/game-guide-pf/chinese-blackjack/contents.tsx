import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase } from "../base";
import Styles from "./chinese-blackjack-pf-game.module.scss";
import { ChineseBlackjackPFContentsProps } from "./type";

const renderHowPFInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, locale: string) => {
    return (
        <li className="guide-item section">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>
            <div className="center-img">
                <img className="img-border" src={`./static/images/pf/final-result.png?v=${verImg}`} alt="pf"></img>
            </div>
            <p>{t("pf_how_pf_applied_in_game_para_1", { ns: "ChineseBlackjack" })} </p>
            <ul className="circle">
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_2", { ns: "ChineseBlackjack" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_3", { ns: "ChineseBlackjack" })} />}</li>
            </ul>
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
                    <img src={`./static/images/chinese-blackjack/pf/pf_setting_${locale}.png?v=${verImg}`} alt="pf"></img>
                </div>

                <li>{<Markup content={t("pf_start_game_round_para_2", { ns: "ChineseBlackjack" })} />}</li>
                <li>{<Markup content={t("pf_start_game_round_para_3", { ns: "ChineseBlackjack" })} />}</li>
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

                        <div className="center-img">
                            <img src={`./static/images/chinese-blackjack/pf/pf_history_${locale}.png?v=${verImg}`} alt="pf"></img>
                        </div>

                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_3", { ns: "ChineseBlackjack" })} />}</li>

                        <div className="center-img">
                            <img className="img-border" src={`./static/images/chinese-blackjack/pf/sha256.png?v=${verImg}`} alt="pf"></img>
                        </div>

                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_4", { ns: "ChineseBlackjack" })} />}</li>

                        <p>{t("pf_verify_server_seed_SHA256_para_5", { ns: "ChineseBlackjack" })}</p>
                    </ul>
                </li>

                <li className="number-dot-number">
                    <span className="title-text">{t("pf_subtitle_verify_impact_of_cliend_seed", { ns: "ChineseBlackjack" })}</span>
                    <ul className="circle">
                        <li>{<Markup content={t("pf_verify_impact_of_client_seed_para_1", { ns: "ChineseBlackjack" })} />}</li>

                        <div className="center-img">
                            <img src={`./static/images/chinese-blackjack/pf/pf_history_verify_${locale}.png?v=${verImg}`} alt="pf"></img>
                        </div>

                        <li>
                            {<Markup content={t("pf_verify_impact_of_client_seed_para_2", { ns: "ChineseBlackjack" })} />}{" "}
                            <ul className="plus">
                                <li>
                                    {<Markup content={t("pf_verify_impact_of_client_seed_para_3", { ns: "ChineseBlackjack" })} />}
                                    <p className={Styles["center-text"]}>
                                        <strong>{t("pf_server_Seed", { ns: "Common" })}</strong>
                                    </p>
                                    <div className="center-img">
                                        <img src={`./static/images/chinese-blackjack/pf/server-seed.png?v=${verImg}`} alt="pf"></img>
                                    </div>
                                </li>
                                <li>
                                    {<Markup content={t("pf_verify_impact_of_client_seed_para_4", { ns: "ChineseBlackjack" })} />}
                                    <p className={Styles["center-text"]}>
                                        <strong>{t("pf_final_result", { ns: "Common" })}</strong>
                                    </p>
                                    <div className="center-img">
                                        <img src={`./static/images/chinese-blackjack/pf/final-result.png?v=${verImg}`} alt="pf"></img>
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
