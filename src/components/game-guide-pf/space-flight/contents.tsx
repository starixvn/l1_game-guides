import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { MAX_VALUE, RTP, convertHexToDecimalSteps, convertToDecimal, renderFinalResult } from "../../verification/space-flight";
import { renderContentPFBase } from "../base";
import Styles from "./../space-flight/spaceflight-pf-game.module.scss";
import { SpaceFlightPFContentsProps } from "./type";

const renderHowPFInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, gameName: string, locale: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>       
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_1", { ns: "Spaceflight", gamename: gameName})} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_2", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: "Spaceflight" })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img src={`${rootImgUrl}PF-flow-overall-${locale}.png?v=${verImg}`} alt="pf"></img>
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

const renderGameVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, locale: string ) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_in_game_verifier_tool", { ns: "Spaceflight" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>
                    {<Markup content={t("pf_spaceflight_verifier_tool_para_1", { ns: "Spaceflight" })} />}{" "}   
                </li>
                <li>
                    {<Markup content={t("pf_spaceflight_verifier_tool_para_2", { ns: "Spaceflight" })} />}{" "}   
                </li>
                <li>
                    {<Markup content={t("pf_spaceflight_verifier_tool_para_3", { ns: "Spaceflight" })} />}{" "}   
                </li>
                 <div className={Styles["intro-border"]}>
                    <span style={{ textAlign: "center" }}>
                        <strong className="pf-text-yellow">{t("pf_final_result", { ns: "Common" })}</strong> ={" "}
                        <span>2 ^ 32 / (<span className={Styles["text-color-red"]}>X</span> + 1) * (1 - 0.03)</span>
                    </span>
                </div> 
                <ul className={Styles["plus-style"]}>
                    <li>
                        {<Markup content={t("pf_spaceflight_verifier_tool_para_5", { ns: "Spaceflight" })} />}{" "}   
                    </li>
                    <li>
                        {<Markup content={t("pf_spaceflight_verifier_tool_para_6", { ns: "Spaceflight" })} />}{" "}   
                    </li>
                    <li>
                        {<Markup content={t("pf_spaceflight_verifier_tool_para_7", { ns: "Spaceflight" })} />}{" "}   
                    </li>
                    <li>
                        {<Markup content={t("pf_spaceflight_verifier_tool_para_13", { ns: "Spaceflight" })} />}{" "}   
                    </li>
                    <li>
                        {<Markup content={t("pf_spaceflight_verifier_tool_para_8", { ns: "Spaceflight" })} />}{" "}   
                    </li>
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
                <div>{<Markup content={t("pf_spaceflight_verifier_tool_para_9", { ns: "Spaceflight" })} />}{" "}  </div>  
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_10", { ns: "Spaceflight" })} />}</li>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_11", { ns: "Spaceflight" })} />}
                        {renderImageStep2(t)}
                    </li>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_12", { ns: "Spaceflight" })} />}
                        {renderImageStep3(t)}
                    </li>
                </ul>    
            </ul>
        </li>
    );
};

const renderImageStep3 = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>{t("pf_provably_fair", {ns: "Common"})} <span className={Styles["icon-guide"]}></span></div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["close-button"]}></div>
            <div className={Styles["popup-content"]}>
                <div className={Styles["section-info"]}>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>{t("pf_round", { ns: "Spaceflight" })}:</div>
                        <div className={Styles["value"]}>296748</div>
                    </div>
                    <div className={Styles["info"]}>
                    <div className={Styles["key"]}><Markup content={t("glossary_crash_point", { ns: "Spaceflight" })}/>:</div>
                        <div className={Styles["value"]}>94.81X</div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_seed_sha256", { ns: "Spaceflight" })}/>}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>5f22768e5b1411a09d5d3fc8ec549dd62d59969d3738f3504a084a79f22a6b9c </div>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: "Common" })}/>}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>p2TRNPWLIn8y9X0AzvgKOqCYHfZEcJtM5BxVbGih </div>
                </div>
                <div className={`${Styles["client-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-section"]}>
                        <span className={Styles["title-style"]}>{<Markup content={t("pf_client_seed", { ns: "Common" })}/>}</span>
                        <span className={Styles["icon-guide"]}></span>
                    </div>
                    <div className={Styles["client-seed-section"]}>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}{" "}</span>
                                    <span>1 (R***r40)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0299</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}{" "}</span>
                                    <span>2 (L***992)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>1749</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}{" "}</span>
                                    <span>3 (B***069)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>2424</div>
                            </div>
                        </div>
                       <div>
                        <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}{" "}</span>
                                    <span>4 (A***744)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0426</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}{" "}</span>
                                    <span>5 (S***676)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>2816</div>
                            </div>
                       </div>
                        
                    </div>
                    <div className={Styles["merge-cs-section"]}>
                        <div className={Styles["title-style"]}>{<Markup content={t("pf_ header_merge_client_seed", { ns: "Common" })}/>}</div>
                        <div className={Styles["text-section"]}>02991749242404262816 </div>
                    </div>
                </div>
                <div className={`${Styles["section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["combined-hash-section"]}>
                        <div className={Styles["title-section"]}>{<Markup content={t("pf_header_combined_sha512_hash", { ns: "Common" })}/>}<span className={Styles["icon-guide"]}></span></div>
                        <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>029e726f35e7a403d7dd335166d9bc0ae8234faa1a551359812d5ca3cfd4fc1b39066e43f5488c48cde95fa98bd14ddbebf0b7e1ca8dfa17c2191f24467e687e</div>
                    </div>
                    <div className={Styles["para-desc"]}>{t("pf_provably_fair_para_2", { ns: "Spaceflight" })}</div>
                    <div className={Styles["btn-verify"]}>{t("pf_verify", { ns: "Spaceflight" })}</div>
                </div>
            </div>
        </div>
    )
}

const renderImageStep2 = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>{t("pf_provably_fair", {ns: "Common"})} <span className={Styles["icon-guide"]}></span></div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["info-seed"]}>
                <div className={Styles["title-style"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}><span>p2TRNPWLIn8y9X0AzvgKOqCYHfZEcJtM5BxVbGih </span></div>
                <div className={Styles["title-style"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}><span>02991749242404262816 </span></div>
                <div className={Styles["title-style"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span className={Styles["combined-hash"]}>029e726f35e7a403d7dd335166d9bc0ae8234faa1a551359812d5ca3cfd4fc1b39066e43f5488c48cde95fa98bd14ddbebf0b7e1ca8dfa17c2191f24467e687e </span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResult("029e726f")}</span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>029e726f35e7a403d7dd335166d9bc0ae8234faa1a551359812d5ca3cfd4fc1b39066e43f5488c48cde95fa98bd14ddbebf0b7e1ca8dfa17c2191f24467e687e </div>
                </div>
                <div>
                    <strong>{t("pf_verification_para_2", { ns: "Spaceflight", value: "8" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>029e726f</span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_3", { ns: "Spaceflight" })} </strong>
                    <span className={Styles["color-second"]}><pre>{convertHexToDecimalSteps("029e726f")}</pre></span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Spaceflight" })} </strong>
                    
                    <div className={Styles["color-second"]}>{MAX_VALUE} / ({convertToDecimal("029e726f")} + 1) * (1- {RTP}) = <span className={Styles["color-result"]}>{renderFinalResult("029e726f")}</span></div>
                </div>
            </div>
        </div>
    );
}

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
    console.log("displayName", displayName);
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
