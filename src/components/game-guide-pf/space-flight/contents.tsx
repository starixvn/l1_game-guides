import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase } from "../base";
import Styles from "./../chinese-blackjack/chinese-blackjack-pf-game.module.scss";
import { SpaceFlightPFContentsProps } from "./type";

const renderHowPFInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>       
            <ul className="desc">
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_1", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_2", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_3", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_applied_in_game_para_4", { ns: "Spaceflight" })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img src={`${rootImgUrl}pf-flow-overall.png?v=${verImg}`} alt="pf"></img>
            </div>
        </li>
    );
};

const renderVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_Verify_the_Provably_Fair", { ns: "ChineseBlackjack" })}</h2>
            <ul className="style-number-dot">
                {renderGameVerifierTool(t, verImg)}

                {render3rdVerifierTool(t, verImg)}
            </ul>
        </li>
    );
};

const renderGameVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_start_the_game_round", { ns: "ChineseBlackjack" })}</span>
            <ul className="desc">
                <li>
                    {<Markup content={t("pf_start_game_round_para_1.1", { ns: "ChineseBlackjack" })} />}{" "}
                    <img
                        style={{ backgroundColor: "white" }}
                        src={`./static/images/chinese-blackjack/pf/btn-pf.png?v=${verImg}`}
                        alt="pf"
                    ></img>{" "}
                    {<Markup content={t("pf_start_game_round_para_1.2", { ns: "ChineseBlackjack" })} />}{" "}
                </li>

                <div className={Styles["center-img"]}>
                    <img src={`./static/images/chinese-blackjack/pf/popup-client-seed.png?v=${verImg}`} alt="pf"></img>
                </div>

                <li>{<Markup content={t("pf_start_game_round_para_2", { ns: "ChineseBlackjack" })} />}</li>
                <li>{<Markup content={t("pf_start_game_round_para_3", { ns: "ChineseBlackjack" })} />}</li>
            </ul>
        </li>
    );
};

const render3rdVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_after_settling", { ns: "ChineseBlackjack" })}</span>
            <ul className="style-number-dot-number">
                <li className="number-dot-number">
                    <span className="title-text">{t("pf_subtitle_verify_fairness_of_server_seed_SHA256", { ns: "ChineseBlackjack" })}</span>
                    <ul className="desc">
                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_1", { ns: "ChineseBlackjack" })} />}</li>
                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_2", { ns: "ChineseBlackjack" })} />}</li>

                        <div className={Styles["center-img"]}>
                            <img src={`./static/images/chinese-blackjack/pf/popup-verify.png?v=${verImg}`} alt="pf"></img>
                        </div>

                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_3", { ns: "ChineseBlackjack" })} />}</li>

                        <div className={Styles["center-img"]}>
                            <img src={`./static/images/chinese-blackjack/pf/sha256.png?v=${verImg}`} alt="pf"></img>
                        </div>

                        <li>{<Markup content={t("pf_verify_server_seed_SHA256_para_4", { ns: "ChineseBlackjack" })} />}</li>

                        <p>{t("pf_verify_server_seed_SHA256_para_5", { ns: "ChineseBlackjack" })}</p>
                    </ul>
                </li>

                <li className="number-dot-number">
                    <span className="title-text">{t("pf_subtitle_verify_impact_of_cliend_seed", { ns: "ChineseBlackjack" })}</span>
                    <ul className="desc">
                        <li>{<Markup content={t("pf_verify_impact_of_client_seed_para_1", { ns: "ChineseBlackjack" })} />}</li>

                        <div className={Styles["center-img"]}>
                            <img src={`./static/images/chinese-blackjack/pf/pf_verify_success.png?v=${verImg}`} alt="pf"></img>
                        </div>

                        <li>
                            {<Markup content={t("pf_verify_impact_of_client_seed_para_2", { ns: "ChineseBlackjack" })} />}{" "}
                            <ul className="plus">
                                <li>
                                    {<Markup content={t("pf_verify_impact_of_client_seed_para_3", { ns: "ChineseBlackjack" })} />}
                                    <p className={Styles["center-text"]}>
                                        <strong>{t("pf_server_Seed", { ns: "Common" })}</strong>
                                    </p>
                                    <div className={Styles["center-img"]}>
                                        <img src={`./static/images/chinese-blackjack/pf/server-seed.png?v=${verImg}`} alt="pf"></img>
                                    </div>
                                </li>
                                <li>
                                    {<Markup content={t("pf_verify_impact_of_client_seed_para_4", { ns: "ChineseBlackjack" })} />}
                                    <p className={Styles["center-text"]}>
                                        <strong>{t("pf_final_result", { ns: "Common" })}</strong>
                                    </p>
                                    <div className={Styles["center-img"]}>
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
const SpaceFlightPFContents: React.FC<SpaceFlightPFContentsProps> = ({ locale, displayName, name }) => {
    const { t } = useTranslate(["Spaceflight", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion || "";
    return (
        <div>
            <ul className={`game-guide`}>
                {renderContentPFBase(t, displayName || "", verImg)}
                {renderHowPFInGame(t, verImg, rootImgUrl)}
                {renderVerifyPF(t, verImg)}
            </ul>
        </div>
    );
};

export default SpaceFlightPFContents;
