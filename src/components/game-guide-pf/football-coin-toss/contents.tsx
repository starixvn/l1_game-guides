import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";
import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { TogleeNamespace } from "../../game-guide/football-dice/namespace-tolgee";
import { renderContentPFBase } from "../base";
import Styles from "./football-cointoss-pf-game.module.scss";
import { FootballCoinTossPFContentsProps } from "./type";
import {
    convertHexToDecimalSteps,
    convertToDecimal,
    renderFinalResult,
    renderFinalResultWithText,
    takeFirstValueFromSHA512,
} from "../../verification/footballl-coin-toss";
import { sliceValueFromSHA512 } from "../../verification/football-dice";

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
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_1", { ns: "Common", gamename: gameName })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_2", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: "FootballCoinToss" })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img
                    src={`./static/images/pf/football-coin-toss/PF-flow-overall_${locale}.png?v=${verImg}`}
                    width={"1100px"}
                    alt="pf"
                ></img>
            </div>
        </li>
    );
};

const renderImageStep2 = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    const finalHash =
        "c357c1a94d809049445c7a189f085b0fa7b55f5569d5d4e60de7fefa3c35f30405d6f63eb952bd6724e7888126aa55787d47a0a4371c7eab0b605bd12d627587";
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
                        <div className={Styles["key"]}>{t("pf_round", { ns: TogleeNamespace.Common })}:</div>
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]}`}>273884</div>
                    </div>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>
                            <Markup content={t("pf_result", { ns: TogleeNamespace.Common })} />:
                        </div>
                        <div className={`${Styles["value"]} ${Styles["result"]}`}>
                            <img src={`/static/images/pf/football-coin-toss/result-home.png?v=${verImg}`} alt="head" />
                            {"  - "}
                        </div>

                        <div className={`${Styles["value"]} ${Styles["highlight-text"]} ${Styles["key"]}`}>
                            {t("glossary_home", { ns: "FootballCoinToss" })}
                        </div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-style"]}>
                        {<Markup content={t("pf_server_seed_sha256", { ns: TogleeNamespace.Common })} />}
                    </div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        dd2c67159028b2ac4b5c9a73e85d25b484aab8aba9145efa70e3419d9817147d<span className={Styles["icon-copy"]}></span>{" "}
                    </div>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: TogleeNamespace.Common })} />}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        iQY1erK3cgHC8Ei4ATszfLafDyqAbwdMkk926BRY <span className={Styles["icon-copy"]}></span>
                    </div>
                </div>
                <div className={`${Styles["client-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-section"]}>
                        <span className={Styles["title-style"]}>
                            {<Markup content={t("pf_client_seed", { ns: TogleeNamespace.Common })} />}
                        </span>
                        <span className={Styles["icon-info"]}></span>
                    </div>
                    <div className={Styles["client-seed-section"]}>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>1 (R***332)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>58</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>2 (W***693)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>41</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>3 (W***831)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>6229</div>
                            </div>
                        </div>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>4 (N***793)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>5153</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>5 (M***355)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>24</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["merge-cs-section"]}>
                        <div className={`${Styles["title-style"]} ${Styles["title-merge-cs"]}`}>
                            {<Markup content={t("pf_ header_merge_client_seed", { ns: "Common" })} />}
                        </div>
                        <div className={Styles["text-section"]}>
                            58416229515324 <span className={Styles["icon-copy"]}></span>
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
                            c357c1a94d809049445c7a189f085b0fa7b55f5569d5d4e60de7fefa3c35f30405d6f63eb952bd6724e7888126aa55787d47a0a4371c7eab0b605bd12d627587
                            <span className={Styles["icon-copy"]}></span>
                        </div>
                    </div>
                    <div className={Styles["para-desc"]}>{t("pf_provably_fair_para_2", { ns: TogleeNamespace.Common })}</div>
                    <div className={Styles["btn-verify"]}>{t("pf_verify", { ns: TogleeNamespace.Common })}</div>
                </div>
            </div>
        </div>
    );
};

const renderImageStep3 = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    const finalHash =
        "c357c1a94d809049445c7a189f085b0fa7b55f5569d5d4e60de7fefa3c35f30405d6f63eb952bd6724e7888126aa55787d47a0a4371c7eab0b605bd12d627587";
    const digits = takeFirstValueFromSHA512(5, finalHash);
    const match = { home: "home", away: "away" };
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    {t("pf_title_verification", { ns: TogleeNamespace.Common })}{" "}
                    <span className={Styles["text-round"]}>
                        ({t("pf_round", { ns: TogleeNamespace.Common })}: <span className={Styles["round-id"]}>273884</span>)
                    </span>
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["info-seed"]}>
                <div className={Styles["title-style"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>iQY1erK3cgHC8Ei4ATszfLafDyqAbwdMkk926BRY</span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>58416229515324</span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span className={Styles["combined-hash"]}>
                        c357c1a94d809049445c7a189f085b0fa7b55f5569d5d4e60de7fefa3c35f30405d6f63eb952bd6724e7888126aa55787d47a0a4371c7eab0b605bd12d627587
                    </span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResultWithText(t, match, digits)}</span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>{finalHash}</div>
                </div>
                <div>
                    <strong>{t("pf_take_first_{}_characters", { ns: "Common", value: "5" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>{digits}</span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_3", { ns: "Common" })} </strong>
                    <span className={Styles["color-second"]}>
                        <pre>{convertHexToDecimalSteps(digits)}</pre>
                    </span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Common" })} </strong>

                    <div className={Styles["color-second"]}>
                        {convertToDecimal(digits)} mod 2 = <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderVerifyPF = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    verImg: string,
    rootImgUrl: string,
    locale: string,
    gameName: string
) => {
    return (
        <li className="guide-item">
            <h2>{<Markup content={t("pf_title_verify_the_provably_fair", { ns: "Common" })} />}</h2>
            <ul className="style-number-dot">
                {renderGameVerifierTool(t, verImg, rootImgUrl, locale, gameName)}

                {render3rdVerifierTool(t, verImg)}
            </ul>
        </li>
    );
};

const renderGameVerifierTool = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    verImg: string,
    rootImgUrl: string,
    locale: string,
    gameName: string
) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_in_game_verifier_tool", { ns: TogleeNamespace.Common })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_verifier_tool_para_1", { ns: TogleeNamespace.Common })} />} </li>
                <li>{<Markup content={t("pf_verifier_tool_para_2", { ns: TogleeNamespace.Common, gamename: gameName })} />} </li>
                <li>{<Markup content={t("pf_verifier_tool_para_3", { ns: "FootballCoinToss" })} />} </li>
                <div className={Styles["intro-border"]}>
                    <span style={{ textAlign: "center" }}>
                        <strong className="pf-text-yellow">{t("pf_final_result", { ns: "Common" })}</strong> ={" "}
                        <span>
                            <span className={Styles["text-color-red"]}>
                                <strong>X</strong>
                            </span>
                            <span> mod 2</span>
                        </span>
                    </span>
                </div>
                <ul className={Styles["plus-style"]}>
                    <li className={Styles["color-red"]}>
                        {<Markup content={t("pf_verifier_tool_para_4", { ns: "FootballCoinToss" })} />}{" "}
                    </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_4.1", { ns: "FootballCoinToss" })} />} </li>
                </ul>
                <div>{<Markup content={t("pf_verifier_tool_step_by_step", { ns: TogleeNamespace.Common })} />} </div>
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_verifier_tool_step_1", { ns: TogleeNamespace.Common })} />}</li>
                    <li>
                        {<Markup content={t("pf_verifier_tool_step_2", { ns: TogleeNamespace.Common })} />}
                        {renderImageStep2(t, verImg)}
                    </li>
                    <li>
                        {<Markup content={t("pf_verifier_tool_step_3", { ns: TogleeNamespace.Common })} />}
                        {renderImageStep3(t, verImg)}
                    </li>
                </ul>
            </ul>
        </li>
    );
};

const render3rdVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_online_third_party_verifier_tools", { ns: TogleeNamespace.Common })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: TogleeNamespace.Common })} />}</li>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: TogleeNamespace.Common })} />}</li>
            </ul>
        </li>
    );
};
const FootballCoinTossPFContents: React.FC<FootballCoinTossPFContentsProps> = ({ locale, displayName, name }) => {
    const { t } = useTranslate(["FootballCoinToss", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion || "";
    return (
        <div>
            <ul className={`game-guide game-guide-pf`}>
                {renderContentPFBase(t, displayName || "", verImg, locale || "")}
                {renderHowPFInGame(t, verImg, rootImgUrl, displayName || "", locale || "")}
                {renderVerifyPF(t, verImg, rootImgUrl, locale || "", displayName || "")}
            </ul>
        </div>
    );
};

export default FootballCoinTossPFContents;
