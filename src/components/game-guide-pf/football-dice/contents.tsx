import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { TogleeNamespace } from "../../game-guide/football-dice/namespace-tolgee";
import { calculateDice, convertToDecimal, renderFinalResult, sliceValueFromSHA512 } from "../../verification/football-dice";
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
    const finalHash = "029e726f35e7a403d7dd335166d9bc0ae8234faa1a551359812d5ca3cfd4fc1b39066e43f5488c48cde95fa98bd14ddbebf0b7e1ca8dfa17c2191f24467e687e";
    const digits = sliceValueFromSHA512(finalHash);
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}><span className={Styles["title-provably-fair"]}>{t("pf_provably_fair", {ns: "Common"})} </span><span className={Styles["icon-guide"]}></span></div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["close-button"]}></div>
            <div className={Styles["popup-content"]}>
                <div className={Styles["section-info"]}>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>{t("pf_round", { ns: TogleeNamespace.Common })}:</div>
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]}`}>296748</div>
                    </div>
                    <div className={Styles["info"]}>
                    <div className={Styles["key"]}><Markup content={t("pf_result", { ns: TogleeNamespace.Common })}/>:</div>
                        <div className={`${Styles["value"]} ${Styles["result"]}`}>
                        <img src={`/static/images/pf/football-dice/dice-home-${calculateDice(digits[0])}.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <img src={`/static/images/pf/football-dice/dice-home-${calculateDice(digits[1])}.png?v=${verImg}`} alt="dice-home-2" />{"   "}
                        <span className={Styles["score-text"]}>3 | </span>{"   "}
                        <img src={`/static/images/pf/football-dice/dice-away-${calculateDice(digits[2])}.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <img src={`/static/images/pf/football-dice/dice-away-${calculateDice(digits[3])}.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <span className={`${Styles["text-yellow"]} ${Styles["score-text"]}`}>9</span>
                        </div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_seed_sha256", { ns: TogleeNamespace.Common })}/>}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>5f22768e5b1411a09d5d3fc8ec549dd62d59969d3738f3504a084a79f22a6b9c<span className={Styles["icon-copy"]}></span> </div>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: TogleeNamespace.Common })}/>}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>p2TRNPWLIn8y9X0AzvgKOqCYHfZEcJtM5BxVbGih <span className={Styles["icon-copy"]}></span></div>
                </div>
                <div className={`${Styles["client-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-section"]}>
                        <span className={Styles["title-style"]}>{<Markup content={t("pf_client_seed", { ns: TogleeNamespace.Common })}/>}</span>
                        <span className={Styles["icon-info"]}></span>
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
                        <div className={`${Styles["title-style"]} ${Styles["title-merge-cs"]}`}>{<Markup content={t("pf_ header_merge_client_seed", { ns: "Common" })}/>}</div>
                        <div className={Styles["text-section"]}>02991749242404262816 <span className={Styles["icon-copy"]}></span></div>
                    </div>
                </div>
                <div className={`${Styles["section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["combined-hash-section"]}>
                        <div className={`${Styles["title-style"]} ${Styles["title-hash-string"]}`}>{<Markup content={t("pf_header_combined_sha512_hash", { ns: "Common" })}/>}<span className={Styles["icon-info"]}></span></div>
                        <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>029e726f35e7a403d7dd335166d9bc0ae8234faa1a551359812d5ca3cfd4fc1b39066e43f5488c48cde95fa98bd14ddbebf0b7e1ca8dfa17c2191f24467e687e<span className={Styles["icon-copy"]}></span></div>
                    </div>
                    <div className={Styles["para-desc"]}>{t("pf_provably_fair_para_2", { ns: TogleeNamespace.Common })}</div>
                    <div className={Styles["btn-verify"]}>{t("pf_verify", { ns: TogleeNamespace.Common })}</div>
                </div>
            </div>
        </div>
    )
}

const renderImageStep3 = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    const finalHash = "029e726f35e7a403d7dd335166d9bc0ae8234faa1a551359812d5ca3cfd4fc1b39066e43f5488c48cde95fa98bd14ddbebf0b7e1ca8dfa17c2191f24467e687e";
    const digits = sliceValueFromSHA512(finalHash);
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>{t("pf_title_verification", {ns: TogleeNamespace.Common})} <span className={Styles["text-round"]}>({t("pf_round", {ns: TogleeNamespace.Common})}: <span className={Styles["round-id"]}>296748</span>)</span></div>
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
                    <span>
                    <img src={`/static/images/pf/football-dice/dice-home-${calculateDice(digits[0])}.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <img src={`/static/images/pf/football-dice/dice-home-${calculateDice(digits[1])}.png?v=${verImg}`} alt="dice-home-2" />{"   "}
                        <span className={Styles["score-text"]}>3 |</span>{"   "}
                        <img src={`/static/images/pf/football-dice/dice-away-${calculateDice(digits[2])}.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <img src={`/static/images/pf/football-dice/dice-away-${calculateDice(digits[3])}.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <span className={`${Styles["text-yellow"]} ${Styles["score-text"]}`}>9</span>
                    </span>
                </div>
                <div>
                <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>{finalHash}</div>
                </div>
                <div>
                <strong>{t("pf_verification_para_3", { ns: "FootballDice" })}</strong>{" "}
                    <div className={Styles["color-second"]}>
                        <div>{digits[0]} {`=>`} {convertToDecimal(digits[0])}</div>
                        <div>{digits[1]} {`=>`} {convertToDecimal(digits[1])}</div>
                        <div>{digits[2]} {`=>`} {convertToDecimal(digits[2])}</div>
                        <div>{digits[3]} {`=>`} {convertToDecimal(digits[3])}</div>
                    </div>
                </div>
                <div>
                <strong>{t("pf_verification_para_4", { ns: "Common" })} </strong>
                    <div className={Styles["color-second"]}><span className={Styles["highlight-text"]}><Markup content={t("pf_home_dice_1", {ns: "FootballDice"})} /></span>: {renderFinalResult(digits[0])}</div>
                    <div className={Styles["color-second"]}><span className={Styles["highlight-text"]}><Markup content={t("pf_home_dice_2", {ns: "FootballDice"})} /></span>: {renderFinalResult(digits[1])}</div>
                    <div className={Styles["color-second"]}><span className={Styles["highlight-text"]}><Markup content={t("pf_away_dice_1", {ns: "FootballDice"})} /></span>: {renderFinalResult(digits[2])}</div>
                    <div className={Styles["color-second"]}><span className={Styles["highlight-text"]}><Markup content={t("pf_away_dice_2", {ns: "FootballDice"})} /></span>: {renderFinalResult(digits[3])}</div>
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
                        <strong className="pf-text-yellow">{t("pf_dice_result", {ns: TogleeNamespace.SpecificGame })}</strong> ={" "}
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
                            <div className={Styles["red-content-2"]}><span className={Styles["home-color"]}><Markup content={t("pf_verifier_tool_para_7", { ns: TogleeNamespace.SpecificGame })}/></span>{" "}<img className={Styles["red-arrow-2"]} src={`./static/images/pf/football-dice/red-arrow-2.png?v=${verImg}`} alt="arrow"/></div>
                            <div className={Styles["red-content-1"]}><span className={Styles["home-color"]}><Markup content={t("pf_verifier_tool_para_8", { ns: TogleeNamespace.SpecificGame })}/></span>{" "}<img  className={Styles["red-arrow-1"]} src={`./static/images/pf/football-dice/red-arrow-1.png?v=${verImg}`} alt="arrow"/></div>
                            <div className={Styles["final-hash-text"]}><span className={Styles["color1"]}>4f1f06cd</span><span className={Styles["color2"]}>13b89fd8</span><span className={Styles["color3"]}>c1057eab</span><span className={Styles["color4"]}>55d24c48</span><span>baa184ef167a5bd42c0d4...</span></div>
                            <div className={Styles["blue-content-2"]}><img className={Styles["blue-arrow-2"]} src={`./static/images/pf/football-dice/blue-arrow-2.png?v=${verImg}`} alt="arrow"/>{" "}<span className={Styles["away-color"]}><Markup content={t("pf_verifier_tool_para_9", { ns: TogleeNamespace.SpecificGame })}/></span></div>
                            <div className={Styles["blue-content-1"]}><img className={Styles["blue-arrow-1"]} src={`./static/images/pf/football-dice/blue-arrow-1.png?v=${verImg}`} alt="arrow"/>{" "}<span className={Styles["away-color"]}><Markup content={t("pf_verifier_tool_para_10", { ns: TogleeNamespace.SpecificGame })}/></span></div>
                        </div>
                    </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_11", { ns: TogleeNamespace.SpecificGame })} />}
                        <div>4f1f06cd {`=>`} <span className={Styles["color-red"]}><strong>X</strong></span> = 1327433421</div>
                    </li>
                    <li className={Styles["color-red"]}>{<Markup content={t("pf_verifier_tool_para_12a", { ns: TogleeNamespace.SpecificGame })}/>}<span>= (1327433421 / 2^32) * 6 + 1 = <span className={Styles["highlight-text"]}>2</span>.85440306691</span></li>
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
const FootballDicePFContents: React.FC<FootballDicePFContentsProps> = ({ locale, displayName, name }) => {
    const { t } = useTranslate(["FootballDice", "Common"]);
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

export default FootballDicePFContents;
