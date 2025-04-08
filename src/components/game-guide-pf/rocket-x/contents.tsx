import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import React from "react";

import { Markup } from "interweave";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { render3rdVerifierTool, renderContentPFBase, renderPFAppliedExample, renderStepByStep } from "../base";
import Styles from "./rocket-x-pf-game.module.scss";
import { RocketXPFContentsProps } from "./type";

const renderHowPFInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, gameName: string, locale: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })} </h2>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_1", { ns: "Common", gamename: gameName })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_2", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_4", { ns: "RocketX" })} />}</li>
            </ul>
            {renderPFAppliedExample(t, verImg)}
        </li>
    );
};

const renderVerifyPF = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    verImg: string,
    rootImgUrl: string,
    locale: string,
    displayName: string,
    orientation: string
) => {
    return (
        <li className="guide-item">
            <h2>{<Markup content={t("pf_title_verify_the_provably_fair", { ns: "Common" })} />}</h2>
            <ul className="style-number-dot">
                {renderGameVerifierTool(t, verImg, rootImgUrl, locale, displayName, orientation)}

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
    displayName: string,
    orientation: string
) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_in_game_verifier_tool", { ns: "Common" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_verifier_tool_para_1", { ns: "Common" })} />} </li>
                <li>{<Markup content={t("pf_verifier_tool_para_2", { ns: "Common", gamename: displayName })} />} </li>
                <li>{<Markup content={t("pf_verifier_tool_para_3", { ns: "RocketX" })} />} </li>
                <div className={`${Styles["intro-border"]} ${Styles["final-result"]}`}>
                    <span style={{ textAlign: "center" }}>
                        <strong className="pf-text-yellow">{t("pf_final_result", { ns: "Common" })}</strong> ={" "}
                        <span>
                            2 ^ 32 / (<span className={Styles["text-color-red"]}>X</span> + 1) * (1 - 0.03)
                        </span>
                    </span>
                </div>
                <ul className={Styles["plus-style"]}>
                    <li>{<Markup content={t("pf_verifier_tool_para_5", { ns: "RocketX" })} />} </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_6", { ns: "RocketX" })} />} </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_7", { ns: "RocketX" })} />} </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_8", { ns: "RocketX" })} />} </li>
                    <li>{<Markup content={t("pf_verifier_tool_para_9", { ns: "RocketX" })} />} </li>
                </ul>
                <div className={Styles["center-img"]}>
                    <table className={Styles["tbl-example"]}>
                        <thead>
                            <tr>
                                <td>{<Markup content={t("pf_header_the_result_after_calculating", { ns: "RocketX" })} />}</td>
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
                {renderStepByStep(t, { hasCrashPoint: false, isPortrait: orientation === "portrait" })}
            </ul>
        </li>
    );
};

const RocketXPFContents: React.FC<RocketXPFContentsProps> = ({ locale, displayName, name, orientation }) => {
    const { t } = useTranslate(["RocketX", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion || "";

    return (
        <div>
            <ul className={`game-guide game-guide-pf ${orientation}`}>
                {renderContentPFBase(t, displayName || "", verImg, locale || "", orientation || "")}
                {renderHowPFInGame(t, verImg, displayName || "", locale || "")}
                {renderVerifyPF(t, verImg, rootImgUrl, locale || "", displayName || "", orientation || "")}
            </ul>
        </div>
    );
};

export default RocketXPFContents;
