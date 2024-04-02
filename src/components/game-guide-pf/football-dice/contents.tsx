import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { TogleeNamespace } from "../../game-guide/football-dice/namespace-tolgee";
import { renderContentPFBase } from "../base";
import Styles from "./../space-flight/spaceflight-pf-game.module.scss";
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
                        <span>(<span className={Styles["text-color-red"]}>X</span><span> / 2 ^ 32) * 6 + 1</span></span>
                    </span>
                </div> 
                <ul className={Styles["plus-style"]}>
                    <li>
                        {<Markup content={t("pf_verifier_tool_para_5", { ns: TogleeNamespace.SpecificGame })} />}{" "}   
                    </li>
                    <li>
                        {<Markup content={t("pf_verifier_tool_para_6", { ns: TogleeNamespace.SpecificGame })} />}{" "}   
                    </li>
                   
                </ul>    
                <div><strong>{t("example", { ns: TogleeNamespace.Common })}</strong></div>
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_header_combined_sha512_hash", { ns: TogleeNamespace.Common })} />}
                        <div>4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0bc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4</div>
                    </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_11", { ns: TogleeNamespace.SpecificGame })} />}
                        <div>4f1f06cd {`=>`} X = 1327433421</div>
                    </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_12", { ns: TogleeNamespace.SpecificGame })}/>}</li>
                    <li>{<Markup content={t("pf_verifier_tool_para_13", { ns: TogleeNamespace.SpecificGame })}/>}</li>
                </ul>
                <div>{<Markup content={t("pf_verifier_tool_step_by_step", {  ns: TogleeNamespace.Common })} />}{" "}  </div>  
                <ul className={Styles["circle-style"]}>
                    <li>{<Markup content={t("pf_verifier_tool_step_1", { ns: TogleeNamespace.Common })} />}</li>
                    <li>{<Markup content={t("pf_verifier_tool_step_2", { ns: TogleeNamespace.Common })} />}
                    <div className={Styles["center-img"]}>                       
                        <img src={`${rootImgUrl}intro-pf-step2-${locale}.png?v=${verImg}`} alt="pf"></img>
                    </div>
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
