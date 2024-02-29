import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase } from "../base";
import Styles from "./../space-flight/spaceflight-pf-game.module.scss";
import { SpaceFlightPFContentsProps } from "./type";

const renderHowPFInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, gameName: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>       
            <ul className="desc">
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_1", { ns: "Spaceflight", gamename: gameName})} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_2", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: "Spaceflight" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: "Spaceflight" })} />}</li>
            </ul>
            <div className={Styles["center-img"]}>
                <img src={`${rootImgUrl}pf-flow-overall.png?v=${verImg}`} alt="pf"></img>
            </div>
        </li>
    );
};

const renderVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, rootImgUrl: string, locale: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_verify_the_provably_fair", { ns: "Common" })}</h2>
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
            <span className="title-text">{t("pf_subtitle_spaceflight_verifier_tool", { ns: "Spaceflight" })}</span>
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
                    <div className={Styles["center-img"]}>                       
                        <img src={`${rootImgUrl}intro-pf-step2-en.png?v=${verImg}`} alt="pf"></img>
                    </div>
                    </li>
                    <li>{<Markup content={t("pf_spaceflight_verifier_tool_para_12", { ns: "Spaceflight" })} />}
                    <div className={Styles["center-img"]}>
                        <img src={`${rootImgUrl}intro-pf-step3-en.png?v=${verImg}`} alt="pf"></img>
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
                {renderHowPFInGame(t, verImg, rootImgUrl, displayName || "")}
                {renderVerifyPF(t, verImg, rootImgUrl, locale || "")}
            </ul>
        </div>
    );
};

export default SpaceFlightPFContents;
