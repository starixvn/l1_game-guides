import { FC } from "react";
import { Markup } from "interweave";
import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import Styles from "./bac-ball-pf.module.scss";
import { BacBallPFContentsProps } from "./type";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase } from "../snng-base";

const BacBallApplyPF: FC<{ t: Function }> = ({ t }) => {
    const displayName = "Bac Ball";

    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    <T keyName={"pf_how_is_pf_applied_in_game_para_1"} params={{ gamename: displayName }} ns="Spaceflight" />
                </li>
                <li>{t("pf_how_is_pf_applied_in_game_para_2", { ns: "BacBall" })}</li>
                <li>{t("pf_how_pf_work_para_3", { ns: "BacBall" })}</li>
                <div className="center">
                    <img src="/static/images/pf-snng/pf-how-is-PF-applied_en.svg" alt="pf-how-is-PF-applied_en" />
                </div>
            </ul>
        </div>
    );
};

const renderBacBallVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string, locale: string) => {
    const iconPF = `<img src="/static/images/pf-snng/icon-pf.svg" alt="pf-verify" />`;

    return (
        <div className="guide-item">
            <h2>{t("pf_title_verify_the_provably_fair", { ns: "Common" })}</h2>
            <ul className={`style-number-dot ${Styles["pf-style-number-dot"]}`}>
                <li className={`number-dot ${Styles["pf-number-dot"]}`}>
                    <span className={`title-text ${Styles["pf-sub-title"]}`}>
                        {t("pf_subtitle_in_game_verifier_tool", { ns: "Spaceflight" })}
                    </span>
                    <ul className="desc">
                        <li>{t("pf_bacball_verifier_tool_para_1", { ns: "BacBall" })}</li>
                        <li>{t("pf_bacball_verifier_tool_para_2", { ns: "BacBall" })}</li>
                        <li>{t("pf_bacball_verifier_tool_para_3", { ns: "BacBall" })}</li>

                        <ul className={Styles["pf-sub-desc"]}>
                            <li>{<Markup content={t("pf_bacball_verifier_tool_para_4", { ns: "BacBall" })} />}</li>
                            <li>{<Markup content={t("pf_bacball_verifier_tool_para_5", { ns: "BacBall" })} />}</li>
                            <li>{<Markup content={t("pf_bacball_verifier_tool_para_6", { ns: "BacBall" })} />}</li>
                        </ul>

                        <div className={Styles["pf-block-highlight-text"]}>
                            <div className={Styles["pf-text-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_7", { ns: "BacBall" })} />}
                            </div>
                            <div>
                                &#123;“random”:“Player value;Banker value”,“remain”:“Player remaining balls;Banker remaining
                                balls”,“secret”:“random string”&#125;
                            </div>
                        </div>

                        <li>{t("pf_bacball_verifier_tool_para_8", { ns: "BacBall" })}</li>

                        <div className={Styles["pf-block-highlight-text"]}>
                            <div className={Styles["pf-text-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_7", { ns: "BacBall" })} />}
                            </div>
                            <div>
                                <strong>Index Value</strong> = ((Random number + <span className={Styles["pf-text-highlight-red"]}>X</span>)
                                mod Number of balls left) + 1
                            </div>
                        </div>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_9", { ns: "BacBall" })} />}
                        </li>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {t("pf_bacball_verifier_tool_para_10", { ns: "BacBall" })}
                        </span>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_11", { ns: "BacBall" })} />}
                        </li>
                        <li>{<Markup content={t("pf_bacball_verifier_tool_para_12", { ns: "BacBall" })} />}</li>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_13", { ns: "BacBall" })} />}
                        </span>

                        <li>{t("pf_bacball_verifier_tool_para_14", { ns: "BacBall" })}</li>
                        <li>{<Markup content={t("pf_bacball_verifier_tool_para_15", { ns: "BacBall" })} />}</li>

                        <div className={Styles["pf-block-highlight-number"]}>
                            1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 <span className={Styles["pf-text-highlight"]}>18</span> 19 20 21 22 23
                            24 25 26 27 28 29 30
                        </div>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_16", { ns: "BacBall" })} />}
                        </span>

                        <li>{t("pf_bacball_verifier_tool_para_17", { ns: "BacBall" })}</li>
                        <li>{<Markup content={t("pf_bacball_verifier_tool_para_18", { ns: "BacBall" })} />}</li>

                        <div className={Styles["pf-block-highlight-number"]}>
                            1 2 3 4 5 6 <span className={Styles["pf-text-highlight"]}>7</span> 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
                            24 25 26 27 28 29 30
                        </div>
                        <p>{<Markup content={t("pf_bacball_verifier_tool_para_19", { ns: "BacBall" })} />}</p>

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_20", { ns: "BacBall" })} />}
                        </p>
                        <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                            <li>{<Markup content={t("pf_bacball_verifier_tool_para_21", { ns: "BacBall", icon: iconPF })} />}</li>
                            <div className="center-img">
                                <img
                                    className={`img-border ${Styles["pf-img-example"]}`}
                                    src={`./static/images/pf-snng/pf-step-1_${locale}.png?v=${imgVersion}`}
                                    alt="pf"
                                ></img>
                            </div>
                            <li>{<Markup content={t("pf_bacball_verifier_tool_para_22", { ns: "BacBall" })} />}</li>
                            <li>{<Markup content={t("pf_bacball_verifier_tool_para_23", { ns: "BacBall" })} />}</li>
                            <li>
                                {<Markup content={t("pf_bacball_verifier_tool_para_24", { ns: "BacBall" })} />}

                                <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                                    <li>{<Markup content={t("pf_bacball_verifier_tool_para_25", { ns: "BacBall" })} />}</li>
                                </ul>
                            </li>
                            <li>{<Markup content={t("pf_bacball_verifier_tool_para_26", { ns: "BacBall" })} />}</li>
                        </ul>
                    </ul>
                </li>
                <li className={`number-dot ${Styles["pf-number-dot"]}`}>
                    <span className={`title-text ${Styles["pf-sub-title"]}`}>
                        {t("pf_subtitle_online_third_party_verifier_tools", { ns: "Spaceflight" })}
                    </span>
                    <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: "Spaceflight" })} />}</li>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: "Spaceflight" })} />}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

const BacBallPFGuideContent: FC<BacBallPFContentsProps> = ({ locale }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber", "Spaceflight"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";
    const arrangeLocale = locale ?? "en";
    const displayName = "Bac Ball";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg, arrangeLocale)}

            <BacBallApplyPF t={t} />
            {renderBacBallVerifyPF(t, verImg, arrangeLocale)}
        </div>
    );
};

export default BacBallPFGuideContent;
