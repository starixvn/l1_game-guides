import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase } from "../base";
import Styles from "./../space-flight/spaceflight-pf-game.module.scss";
import { SpaceFlightPFContentsProps } from "./type";
import {
    MAX_VALUE,
    RTP,
    convertHexToDecimalSteps,
    convertToDecimal,
    renderFinalResult,
    takeFirstValueFromSHA512,
} from "../../verification/space-flight";

const renderHowPFInGame = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    verImg: string,
    rootImgUrl: string,
    gameName: string,
    locale: string
) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_1", { ns: "Spaceflight", gamename: gameName })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_2", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: "Spaceflight" })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img src={`${rootImgUrl}flow-overall-pf-${locale}.png?v=${verImg}`} alt="pf"></img>
            </div>
        </li>
    );
};

const renderVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, locale: string) => {
    return (
        <li className="guide-item">
            <h2>{<Markup content={t("pf_title_verify_the_provably_fair", { ns: "Common" })} />}</h2>
            <ul className="style-number-dot">
                {renderGameVerifierTool(t, verImg, rootImgUrl, locale)}

                {render3rdVerifierTool(t, verImg)}
            </ul>
        </li>
    );
};

const renderGameVerifierTool = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    verImg: string,
    rootImgUrl: string,
    locale: string
) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_in_game_verifier_tool", { ns: "Spaceflight" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_1", { ns: "Spaceflight" })} />} </li>
                <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_2", { ns: "Spaceflight" })} />} </li>
                <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_3", { ns: "Spaceflight" })} />} </li>
                <div className={Styles["intro-border"]}>
                    <span style={{ textAlign: "center" }}>
                        <strong className="pf-text-yellow">{t("pf_final_result", { ns: "Common" })}</strong> ={" "}
                        <span>
                            2 ^ 32 / (<span className={Styles["text-color-red"]}>X</span> + 1) * (1 - 0.03)
                        </span>
                    </span>
                </div>
                <ul className={Styles["plus-style"]}>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_5", { ns: "Spaceflight" })} />} </li>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_6", { ns: "Spaceflight" })} />} </li>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_7", { ns: "Spaceflight" })} />} </li>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_13", { ns: "Spaceflight" })} />} </li>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_8", { ns: "Spaceflight" })} />} </li>
                </ul>
                <div className={Styles["center-img"]}>
                    <table className={Styles["tbl-example"]}>
                        <thead>
                            <tr>
                                <td>{<Markup content={t("pf_header_the_result_after_calculating", { ns: "Spaceflight" })} />}</td>
                                <td>{<Markup content={t("pf_final_result", { ns: "Common" })} />}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2.225</td>
                                <td>2.23</td>
                            </tr>
                            <tr>
                                <td>2.224</td>
                                <td>2.22</td>
                            </tr>
                            <tr>
                                <td>2.224999</td>
                                <td>2.22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>{<Markup content={t("pf_spaceflight_verifier_tool_para_9", { ns: "Spaceflight" })} />} </div>
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_10", { ns: "Spaceflight" })} />}</li>
                    <li>
                        {<Markup content={t("pf_spaceflight_verifier_tool_para_11", { ns: "Spaceflight" })} />}
                        {renderImageStep2(t, verImg)}
                    </li>
                    <li>
                        {<Markup content={t("pf_spaceflight_verifier_tool_para_12", { ns: "Spaceflight" })} />}
                        {renderImageStep3(t, verImg)}
                    </li>
                </ul>
            </ul>
        </li>
    );
};

const renderImageStep2 = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
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
                        <div className={Styles["key"]}>{t("pf_round", { ns: "Common" })}:</div>
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]}`}>296748</div>
                    </div>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>
                            <Markup content={t("glossary_crash_point", { ns: "Spaceflight" })} />:
                        </div>

                        <div className={`${Styles["value"]} ${Styles["highlight-text"]} ${Styles["key"]}`}>2.67x</div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_seed_sha256", { ns: "Common" })} />}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        8f9d5336931352e44e8755ba4ee9f734đfb39f72899a268ef61ca30f8948ea4<span className={Styles["icon-copy"]}></span>{" "}
                    </div>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: "Common" })} />}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        xFBRGc1DtkWNfMZvi9QAms0q45UEp7e3bwdrjO2H<span className={Styles["icon-copy"]}></span>
                    </div>
                </div>
                <div className={`${Styles["client-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-section"]}>
                        <span className={Styles["title-style"]}>{<Markup content={t("pf_client_seed", { ns: "Common" })} />}</span>
                        <span className={Styles["icon-info"]}></span>
                    </div>
                    <div className={Styles["client-seed-section"]}>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>1 (R***r40)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>5596</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>2 (L***992)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0056</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>3 (B***069)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>3544</div>
                            </div>
                        </div>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>4 (A***744)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0748</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>5 (S***676)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>7830</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["merge-cs-section"]}>
                        <div className={`${Styles["title-style"]} ${Styles["title-merge-cs"]}`}>
                            {<Markup content={t("pf_ header_merge_client_seed", { ns: "Common" })} />}
                        </div>
                        <div className={Styles["text-section"]}>
                            55960056354407487830 <span className={Styles["icon-copy"]}></span>
                        </div>
                    </div>
                </div>
                <div className={`${Styles["section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["combined-hash-section"]}>
                        <div className={`${Styles["title-style"]} ${Styles["title-hash-string"]}`}>
                            {<Markup content={t("pf_header_combined_sha512_hash", { ns: "Common" })} />}
                            <span className={Styles["icon-info"]}></span>
                        </div>
                        <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                            5d1a48c3b2653ee73fb5fb58a40c27f883206927b28243895be4976910fb197caf2c891403a9ef4c6bd2b5826cd9e3d26a944af446e2078adf139ec3a57c6c6
                            <span className={Styles["icon-copy"]}></span>
                        </div>
                    </div>
                    <div className={Styles["para-desc"]}>{t("pf_provably_fair_para_2", { ns: "Common" })}</div>
                    <div className={Styles["btn-verify"]}>{t("pf_verify", { ns: "Common" })}</div>
                </div>
            </div>
        </div>
    );
};

const renderImageStep3 = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    const finalHash =
        "5d1a48c3b2653ee73fb5fb58a40c27f883206927b28243895be4976910fb197caf2c891403a9ef4c6bd2b5826cd9e3d26a944af446e2078adf139ec3a57c6c6";
    const digits = takeFirstValueFromSHA512(finalHash);
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    {t("pf_title_verification", { ns: "Common" })}{" "}
                    <span className={Styles["text-round"]}>
                        ({t("pf_round", { ns: "Common" })}: <span className={Styles["round-id"]}>296748</span>)
                    </span>
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["info-seed"]}>
                <div className={Styles["title-style"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>xFBRGc1DtkWNfMZvi9QAms0q45UEp7e3bwdrjO2H</span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>55960056354407487830</span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span className={Styles["combined-hash"]}>
                        5d1a48c3b2653ee73fb5fb58a40c27f883206927b28243895be4976910fb197caf2c891403a9ef4c6bd2b5826cd9e3d26a944af446e2078adf139ec3a57c6c6
                    </span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>{finalHash}</div>
                </div>
                <div>
                    <strong>{t("pf_verification_para_2", { ns: "Spaceflight", value: "8" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>{digits}</span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_3", { ns: "Spaceflight" })} </strong>
                    <span className={Styles["color-second"]}>
                        <pre>{convertHexToDecimalSteps(digits)}</pre>
                    </span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Spaceflight" })} </strong>

                    <div className={Styles["color-second"]}>
                        {MAX_VALUE} / ({convertToDecimal(digits)} + 1) * (1- {RTP}) ={" "}
                        <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const render3rdVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_online_third_party_verifier_tools", { ns: "Spaceflight" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: "Spaceflight" })} />}</li>
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
            <ul className={`game-guide game-guide-pf`}>
                {renderContentPFBase(t, displayName || "", verImg, locale || "")}
                {renderHowPFInGame(t, verImg, rootImgUrl, displayName || "", locale || "")}
                {renderVerifyPF(t, verImg, rootImgUrl, locale || "")}
            </ul>
        </div>
    );
};

export default SpaceFlightPFContents;
