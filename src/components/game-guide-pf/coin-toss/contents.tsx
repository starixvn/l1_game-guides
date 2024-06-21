import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";
import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { TogleeNamespace } from "../../game-guide/football-dice/namespace-tolgee";
import { renderContentPFBase } from "../base";
import Styles from "./cointoss-pf-game.module.scss";
import { CoinTossPFContentsProps } from "./type";
import {
    convertHexToDecimalSteps,
    convertToDecimal,
    renderFinalResult,
    renderFinalResultWithText,
    takeFirstValueFromSHA512,
} from "../../verification/coin-toss";
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
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: "CoinToss" })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img src={`./static/images/pf/coin-toss/PF-flow-overall_${locale}.png?v=${verImg}`} width={"1100px"} alt="pf"></img>
            </div>
        </li>
    );
};

const renderImageStep2 = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    const finalHash =
        "b6f699f9531c00a579e89f2ae737c9acb73de31797bd6fb1b3573d60745fe8a22a908be44b481ef59bfedc67745bf5e842d2dc624a3dfad5f8dfda835383a2f7";
    const digits = sliceValueFromSHA512(finalHash);
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
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]}`}>102752</div>
                    </div>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>
                            <Markup content={t("pf_result", { ns: TogleeNamespace.Common })} />:
                        </div>
                        <div className={`${Styles["value"]} ${Styles["result"]}`}>
                            <img src={`/static/images/pf/coin-toss/result-head.png?v=${verImg}`} alt="head" />
                            {"  - "}
                        </div>

                        <div className={`${Styles["value"]} ${Styles["highlight-text"]} ${Styles["key"]}`}>
                            {t("glossary_head", { ns: "CoinToss" })}
                        </div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-style"]}>
                        {<Markup content={t("pf_server_seed_sha256", { ns: TogleeNamespace.Common })} />}
                    </div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        6e4fa5d4cb131acfd515bdebedb69ada7880b5c7e9eb2a17aa3d4e3cd6962c2a<span className={Styles["icon-copy"]}></span>{" "}
                    </div>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: TogleeNamespace.Common })} />}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        e&a#pc6cfD&VdlQu!MzSiCWha416V&kk^r@^x[Rp <span className={Styles["icon-copy"]}></span>
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
                                    <span>1 (L***012)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>4642</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>2 (B***003)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>4975</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>3 (O***181)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>6806</div>
                            </div>
                        </div>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>4 (E***295)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>8683</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })} </span>
                                    <span>5 (L***666)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>4759</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["merge-cs-section"]}>
                        <div className={`${Styles["title-style"]} ${Styles["title-merge-cs"]}`}>
                            {<Markup content={t("pf_ header_merge_client_seed", { ns: "Common" })} />}
                        </div>
                        <div className={Styles["text-section"]}>
                            46424975680686834759 <span className={Styles["icon-copy"]}></span>
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
                            d1ee459f4b574350fbbce11f02f6620c930334fd886a4ce608b727adf29a20e84084479f54eed3b914bd008834685e4f137dd330ad424682537da4059a5bf6d6
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
        "d1ee459f4b574350fbbce11f02f6620c930334fd886a4ce608b727adf29a20e84084479f54eed3b914bd008834685e4f137dd330ad424682537da4059a5bf6d6";
    const digits = takeFirstValueFromSHA512(5, finalHash);
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    {t("pf_title_verification", { ns: TogleeNamespace.Common })}{" "}
                    <span className={Styles["text-round"]}>
                        ({t("pf_round", { ns: TogleeNamespace.Common })}: <span className={Styles["round-id"]}>102752</span>)
                    </span>
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["info-seed"]}>
                <div className={Styles["title-style"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>e&a#pc6cfD&VdlQu!MzSiCWha416V&kk^r@^x[Rp</span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>46424975680686834759</span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span className={Styles["combined-hash"]}>
                        d1ee459f4b574350fbbce11f02f6620c930334fd886a4ce608b727adf29a20e84084479f54eed3b914bd008834685e4f137dd330ad424682537da4059a5bf6d6
                    </span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResultWithText(t, digits)}</span>
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
                        {convertToDecimal(digits)} % 2 = <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
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
                <li>{<Markup content={t("pf_verifier_tool_para_3", { ns: "CoinToss" })} />} </li>
                <div className={Styles["intro-border"]}>
                    <span style={{ textAlign: "center" }}>
                        <strong className="pf-text-yellow">{t("pf_final_result", { ns: "Common" })}</strong> ={" "}
                        <span>
                            <span className={Styles["text-color-red"]}>
                                <strong>X</strong>
                            </span>
                            <span> % 2</span>
                        </span>
                    </span>
                </div>
                <ul className={Styles["plus-style"]}>
                    <li className={Styles["color-red"]}>{<Markup content={t("pf_verifier_tool_para_4", { ns: "CoinToss" })} />} </li>
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
const CoinTossPFContents: React.FC<CoinTossPFContentsProps> = ({ locale, displayName, name }) => {
    const { t } = useTranslate(["CoinToss", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion || "";
    console.log("displayName", displayName);
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

export default CoinTossPFContents;
