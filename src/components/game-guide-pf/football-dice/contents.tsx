import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { TogleeNamespace } from "../../game-guide/football-dice/namespace-tolgee";
import { renderContentPFBase } from "../base";
import Styles from "./footballdice-pf-game.module.scss";
import { FootballDicePFContentsProps } from "./type";

const renderHowPFInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, gameName: string, locale: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>       
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_1", { ns: TogleeNamespace.Common, gamename: gameName})} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_2", { ns: TogleeNamespace.Common })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: TogleeNamespace.Common })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: TogleeNamespace.SpecificGame })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img src={`./static/images/pf/football-dice/PF-flow-overall_${locale}.png?v=${verImg}`} alt="pf"></img>
            </div>
        </li>
    );
};

const renderImageStep2 = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
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
                    <div className={Styles["key"]}><Markup content={t("pf_result", { ns: TogleeNamespace.Common })}/>:</div>
                        <div className={Styles["value"]}>
                            <img src={`./static/images/pf/football-dice/dice-home-2.png?v=${verImg}`} alt="dice-home-2" />{" "}
                            <img src={`./static/images/pf/football-dice/dice-home-2.png?v=${verImg}`} alt="dice-home-2" />{"   "}
                            <span>4 | 6</span>{"   "}
                            <img src={`./static/images/pf/football-dice/dice-away-4.png?v=${verImg}`} alt="dice-home-2" />{" "}
                            <img src={`./static/images/pf/football-dice/dice-away-2.png?v=${verImg}`} alt="dice-home-2" />
                        </div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_seed_sha256", { ns: "Spaceflight" })}/>}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>5f22768e5b1411a09d5d3fc8ec549dd62d59969d3738f3504a084a79f22a6b9c<span className={Styles["icon-copy"]}></span> </div>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: "Common" })}/>}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>p2TRNPWLIn8y9X0AzvgKOqCYHfZEcJtM5BxVbGih <span className={Styles["icon-copy"]}></span></div>
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
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })}{" "}</span>
                                    <span>1 (R***r40)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0299</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })}{" "}</span>
                                    <span>2 (L***992)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>1749</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })}{" "}</span>
                                    <span>3 (B***069)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>2424</div>
                            </div>
                        </div>
                       <div>
                        <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })}{" "}</span>
                                    <span>4 (A***744)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0426</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: TogleeNamespace.Common })}{" "}</span>
                                    <span>5 (S***676)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>2816</div>
                            </div>
                       </div>
                        
                    </div>
                    <div className={Styles["merge-cs-section"]}>
                        <div className={Styles["title-style"]}>{<Markup content={t("pf_ header_merge_client_seed", { ns: "Common" })}/>}</div>
                        <div className={Styles["text-section"]}>02991749242404262816 <span className={Styles["icon-copy"]}></span></div>
                    </div>
                </div>
                <div className={`${Styles["section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["combined-hash-section"]}>
                        <div className={Styles["title-section"]}>{<Markup content={t("pf_header_combined_sha512_hash", { ns: "Common" })}/>}<span className={Styles["icon-guide"]}></span></div>
                        <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>029e726f35e7a403d7dd335166d9bc0ae8234faa1a551359812d5ca3cfd4fc1b39066e43f5488c48cde95fa98bd14ddbebf0b7e1ca8dfa17c2191f24467e687e<span className={Styles["icon-copy"]}></span></div>
                    </div>
                    <div className={Styles["para-desc"]}>{t("pf_provably_fair_para_2", { ns: "Spaceflight" })}</div>
                    <div className={Styles["btn-verify"]}>{t("pf_verify", { ns: "Spaceflight" })}</div>
                </div>
            </div>
        </div>
    )
}

const renderImageStep3 = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
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
                    {/* <span className={Styles["color-result"]}>{renderFinalResult("029e726f")}</span> */}
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
                    {/* <span className={Styles["color-second"]}><pre>{convertHexToDecimalSteps("029e726f")}</pre></span> */}
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Spaceflight" })} </strong>
                    
                    {/* <div className={Styles["color-second"]}>{MAX_VALUE} / ({convertToDecimal("029e726f")} + 1) * (1- {RTP}) = <span className={Styles["color-result"]}>{renderFinalResult("029e726f")}</span></div> */}
                </div>
            </div>
        </div>
    );
}

const renderVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, locale: string, gameName: string) => {
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

const renderGameVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, locale: string, gameName: string ) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_in_game_verifier_tool", { ns: TogleeNamespace.Common })}</span>
            <ul className={Styles["circle-style"]}>
                <li>
                    {<Markup content={t("pf_verifier_tool_para_1", { ns: TogleeNamespace.Common })} />}{" "}   
                </li>
                <li>
                    {<Markup content={t("pf_verifier_tool_para_2", { ns: TogleeNamespace.Common, gamename: gameName })} />}{" "}   
                </li>
                <li>
                    {<Markup content={t("pf_verifier_tool_para_3", { ns: TogleeNamespace.SpecificGame })} />}{" "}   
                </li>
                 <div className={Styles["intro-border"]}>
                    <span style={{ textAlign: "center" }}>
                        <strong className="pf-text-yellow">{t("pf_final_result", { ns: "Common" })}</strong> ={" "}
                        <span>(<span className={Styles["text-color-red"]}><strong>X</strong></span><span> / 2 ^ 32) * 6 + 1</span></span>
                    </span>
                </div> 
                <ul className={Styles["plus-style"]}>
                    <li className={Styles["color-red"]}>
                        {<Markup content={t("pf_verifier_tool_para_5", { ns: TogleeNamespace.SpecificGame })} />}{" "}   
                    </li>
                    <li>
                        {<Markup content={t("pf_verifier_tool_para_6", { ns: TogleeNamespace.SpecificGame })} />}{" "}   
                    </li>
                   
                </ul>    
                <div><strong>{t("example", { ns: TogleeNamespace.Common })}</strong></div>
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_header_combined_sha512_hash", { ns: TogleeNamespace.Common })} />}
                        <div className={Styles["break-word"]}>4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0bc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4</div>
                        <div className={Styles["img-section"]}>
                            <div className={Styles["red-content-2"]}><Markup content={t("pf_verifier_tool_para_7", { ns: TogleeNamespace.SpecificGame })}/><img className={Styles["red-arrow-2"]} src={`./static/images/pf/football-dice/red-arrow-2.png?v=${verImg}`} alt="arrow"/></div>
                            <div className={Styles["red-content-1"]}><Markup content={t("pf_verifier_tool_para_8", { ns: TogleeNamespace.SpecificGame })}/><img  className={Styles["red-arrow-1"]} src={`./static/images/pf/football-dice/red-arrow-1.png?v=${verImg}`} alt="arrow"/></div>
                            <div><span className={Styles["color1"]}>4f1f06cd</span><span className={Styles["color2"]}>13b89fd8</span><span className={Styles["color3"]}>c1057eab</span><span className={Styles["color4"]}>55d24c48</span><span>baa184ef167a5bd42c0d4...</span></div>
                            <div className={Styles["blue-content-2"]}><img className={Styles["blue-arrow-2"]} src={`./static/images/pf/football-dice/blue-arrow-2.png?v=${verImg}`} alt="arrow"/><Markup content={t("pf_verifier_tool_para_9", { ns: TogleeNamespace.SpecificGame })}/></div>
                            <div className={Styles["blue-content-1"]}><img className={Styles["blue-arrow-1"]} src={`./static/images/pf/football-dice/blue-arrow-1.png?v=${verImg}`} alt="arrow"/><Markup content={t("pf_verifier_tool_para_8", { ns: TogleeNamespace.SpecificGame })}/></div>
                        </div>
                    </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_11", { ns: TogleeNamespace.SpecificGame })} />}
                        <div>4f1f06cd {`=>`} <span className={Styles["color-red"]}><strong>X</strong></span> = 1327433421</div>
                    </li>
                    <li className={Styles["color-red"]}>{<Markup content={t("pf_verifier_tool_para_12", { ns: TogleeNamespace.SpecificGame })}/>}</li>
                    <li>{<Markup content={t("pf_verifier_tool_para_13", { ns: TogleeNamespace.SpecificGame })}/>}
                        <img src={`./static/images/pf/football-dice/dice-home-2.png?v=${verImg}`} className={Styles["dice-img"]} alt="dice-home"></img>
                    </li>
                </ul>
                <div>{<Markup content={t("pf_verifier_tool_step_by_step", {  ns: TogleeNamespace.Common })} />}{" "}  </div>  
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_verifier_tool_step_1", { ns: TogleeNamespace.Common })} />}</li>
                    <li>{<Markup content={t("pf_verifier_tool_step_2", { ns: TogleeNamespace.Common })} />}
                        {renderImageStep2(t, verImg)}
                    </li>
                    <li>{<Markup content={t("pf_verifier_tool_step_3", { ns: TogleeNamespace.Common })} />}
                    <div className={Styles["center-img"]}>
                        <img src={`${rootImgUrl}intro-pf-step3-${locale}.png?v=${verImg}`} alt="pf"></img>
                    </div>
                    </li>
                </ul>    
            </ul>
           
        </li>
    );
};

const render3rdVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_online_third_party_verifier_tools", { ns: "Spaceflight" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: TogleeNamespace.Common })} />}</li>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: TogleeNamespace.Common })} />}</li>
            </ul>
        </li>
    );
};
const FootballDicePFContents: React.FC<FootballDicePFContentsProps> = ({ locale, displayName, name }) => {
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
                {renderVerifyPF(t, verImg, rootImgUrl, locale || "", displayName || "")}
            </ul>
        </div>
    );
};

export default FootballDicePFContents;
