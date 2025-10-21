import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { GameConfigs } from "../../game-guide/type";
import {
    convertHexToDecimalSteps,
    convertToDecimal, renderFinalResult,
    renderFinalResultWithText,
    takeFirstValueFromSHA512
} from "../../verification/coin-mining";
import { renderContentPFBase } from "../base";
import Styles from "./coin-mining-pf-game.module.scss";
import { CoinMiningPFContentsProps } from "./type";

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
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: "CoinMining" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: "CoinMining" })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img src={`./static/images/pf/coin-mining/PF-flow-overall_${locale}.png?v=${verImg}`} width={"1100px"} alt="pf"></img>
            </div>
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
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]}`}>1663</div>
                    </div>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>
                            <Markup content={t("header_crash_point", { ns: "CoinMining" })} />:
                        </div>
                        
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]} ${Styles["key"]}`}>
                            3.04x
                        </div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["server-section-coin-mining"]}`}>
                    <div className={Styles["server-section-coin-mining-content-client-seed"]}>
                        <div className={Styles["title-style"]}>
                                {<Markup className={Styles["title-style"]} content={t("pf_server_Seed", { ns: "Common" })} />}
                        </div>
                        <div className={`${Styles["title-style"]} ${Styles["title-client-seed"]}`}>
                            {<Markup content={t("pf_client_seed", { ns: "Common" })} />}
                        </div>
                        <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                            L5.4UAkB_a59ymZmIxqNCjrnoI0VVujl0uA.rj4v
                            <span className={Styles["icon-copy"]}></span>
                        </div>
                        <div className={`${Styles["text-section"]} ${Styles["value-client-seed"]} ${Styles["text-blur"]}`}>
                            4213
                        </div>
                    </div>
                    <div className={Styles["title-style"]}>
                        {<Markup content={t("pf_server_seed_sha256", { ns: "Common" })} />}
                    </div>
                    <div className={Styles["title-style"]}></div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        62b714b58377e8844e13351df9ac1369fa8eb95182fc70894c36bbf006ed996b
                        <span className={Styles["icon-copy"]}></span>{" "}
                    </div>                    
                    <div className={Styles["title-style"]}></div>
                    <div className={`${Styles["title-style"]} ${Styles["title-hash-string"]}`}>
                            {<Markup content={t("pf_header_combined_sha512_hash", { ns: "Common" })} />}
                            <span className={Styles["icon-info"]}></span>
                        </div>
                    <div className={Styles["title-style"]}></div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        51cb3f2e922a7f69d20a513bc2487dcd1054fe1588b2edd897f5f0efe17aa61b6ca19da25dafab1f737c5a1ac6595f1ec6d9d0c9d1c13b53914ffba7c3bbc922
                    <span className={Styles["icon-copy"]}></span>
                    </div>
                </div>
                
                <div className={`${Styles["section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["combined-hash-section"]}>                       
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
        "51cb3f2e922a7f69d20a513bc2487dcd1054fe1588b2edd897f5f0efe17aa61b6ca19da25dafab1f737c5a1ac6595f1ec6d9d0c9d1c13b53914ffba7c3bbc922";
    const digits = takeFirstValueFromSHA512(8, finalHash);
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    {t("pf_title_verification", { ns: "Common" })}
                    {" "}({t("pf_round", { ns: "Common" })}: <span className={Styles["color-result"]}>1663</span>)
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={`${Styles["info-seed"]} ${Styles["combined-hash"]}`}>
                <div className={Styles["title-style"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>L5.4UAkB_a59ymZmIxqNCjrnoI0VVujl0uA.rj4v
                    </span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>4213</span>
                </div>
                <div className={Styles["title-style"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span className={Styles["combined-hash"]}>{finalHash}</span>
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
                    <strong>{t("pf_take_first_{}_characters", { ns: "Common", value: "8" })}: </strong>
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
                        429467296 / ({convertToDecimal(digits ?? '')} + 1) * (1 - 0.03) = 
                        <span className={Styles["color-result"]}>{renderFinalResult(digits ?? '')}</span>
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
    gameName: string,
    gameSetting: GameConfigs
) => {
    return (
        <li className="guide-item">
            <h2>{<Markup content={t("pf_title_verify_the_provably_fair", { ns: "Common" })} />}</h2>
            <ul className="style-number-dot">
                {renderGameVerifierTool(t, verImg, rootImgUrl, locale, gameName, gameSetting)}
                

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
    gameName: string,
    gameSetting: GameConfigs
) => {
    return (
        <li className="number-dot">
            <span className="title-text">{<Markup content={t("pf_subtitle_in_game_verifier_tool", { ns: "Common" })} />}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_verifier_tool_para_1", { ns: "Common" })} />} </li>
                <li>{<Markup content={t("pf_verifier_tool_para_2", { ns: "Common", gamename: gameName })} />} </li>
                <li>{<Markup content={t("pf_verifier_tool_para_3", { ns: "CoinMining" })} />} </li>
                <div className={Styles["intro-border"]}>
                    <span style={{ textAlign: "center" }}>
                        <strong className="pf-text-yellow">{t("pf_final_result", { ns: "Common" })}</strong> 
                        <span>
                            <span>{t("pf_verifier_tool_para_4", { ns: "CoinMining" })}</span>
                        </span>
                    </span>
                </div>
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_verifier_tool_para_5", { ns: "CoinMining" })} />}</li>
                    <li>{<Markup content={t("pf_verifier_tool_para_6", { ns: "CoinMining" })} />}</li>
                    <li>{<Markup content={t("pf_verifier_tool_para_7", { ns: "CoinMining", max_multiplier:  gameSetting?.maxMultiplier})} />}</li>
                    <li>{<Markup content={t("pf_verifier_tool_para_8", { ns: "CoinMining" })} />}</li>
                    <li>{<Markup content={t("pf_verifier_tool_para_9", { ns: "CoinMining" })} />}</li>
                </ul>
                <ul className={`${Styles["circle-style"]} ${Styles["content-table-center"]}`}>
                    <table className={Styles["styled-table"]}>
                        <thead>
                            <tr>
                                <th>{<Markup content={t("pf_header_calculated_result", { ns: "CoinMining" })} />}</th>
                                <th>{<Markup content={t("pf_header_final_result", { ns: "CoinMining" })} />}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.0251</td>
                                <td>1.03</td>
                            </tr>
                            <tr>
                                <td>11.5001</td>
                                <td>11.50</td>
                            </tr>
                            <tr>
                                <td>104.999</td>
                                <td>105.00</td>
                            </tr>
                            <tr>
                                <td>999.994434</td>
                                <td>999.99</td>
                            </tr>
                            <tr>
                                <td>999.99586</td>
                                <td>1,000.00</td>
                            </tr>
                        </tbody>
                    </table>
                </ul>
                <div>{<Markup content={t("pf_verifier_tool_step_by_step", {  ns: "Common" })} />}{" "}  </div>  
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_verifier_tool_step_1", { ns: "Common" })} />}</li>
                    <li>
                        {<Markup content={t("pf_verifier_tool_step_2", { ns: "Common" })} />}
                        {renderImageStep2(t, verImg)}
                    </li>
                    <li>
                        {<Markup content={t("pf_verifier_tool_step_3", { ns: "Common" })} />}
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
            <span className="title-text"><Markup content={t("pf_subtitle_online_third_party_verifier_tools", { ns: "Common" })} /></span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: "Common" })} />}</li>
            </ul>
        </li>
    );
};
const CoinMiningPFContents: React.FC<CoinMiningPFContentsProps> = ({ locale, displayName, name, gameSetting }) => {
    const { t } = useTranslate(["CoinMining", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion || "";
    return (
        <div>
            <ul className={`game-guide game-guide-pf`}>
                {renderContentPFBase(t, displayName || "", verImg, locale || "")}
                {renderHowPFInGame(t, verImg, rootImgUrl, displayName || "", locale || "")}
                {renderVerifyPF(t, verImg, rootImgUrl, locale || "", displayName || "", gameSetting)}
            </ul>
        </div>
    );
};

export default CoinMiningPFContents;
