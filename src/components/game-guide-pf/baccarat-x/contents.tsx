import { DefaultParamType, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";
import appSettings from "../../../common/app-settings";
import { useImgVersionContext } from "../../../contexts/img-version";
import { TogleeNamespace } from "../../game-guide/football-dice/namespace-tolgee";
import { renderPFWorkExample } from "../base";
import Styles from "./baccarat-x-pf-game.module.scss";
import { BaccaratXPFContentsProps } from "./type";

const renderHowPFInGame = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    verImg: string,
    rootImgUrl: string,
    gameName: string,
    locale: string,
    isPortrait: boolean
) => {
    return (
        <li className="guide-item">
            <h2>{t("fairness_title_how_are_fairness_features_applied_in-game", { ns: "BaccaratX" })} </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">{t("fairness_subtitle_SHA256_algorithm", { ns: "BaccaratX" })}</span>
                    <ul className={Styles["circle-style"]}>
                        <li>
                            {<Markup content={t("fairness_how_SHA256_applied_in-game_para_1", { ns: "BaccaratX", gamename: gameName })} />}
                        </li>
                        <li>{<Markup content={t("fairness_how_SHA256_applied_in-game_para_2", { ns: "BaccaratX" })} />} </li>
                        <li>{<Markup content={t("fairness_how_SHA256_applied_in-game_para_3", { ns: "BaccaratX" })} />} </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">{t("pf_provably_fair", { ns: "Common" })}</span>
                    <ul className={Styles["circle-style"]}>
                        <li>{<Markup content={t("fairness_how_pf_applied_in-game_para_1", { ns: "BaccaratX", gamename: gameName })} />}</li>
                        <li>{<Markup content={t("fairness_how_pf_applied_in-game_para_2", { ns: "BaccaratX" })} />}</li>
                        <li>{<Markup content={t("fairness_how_pf_applied_in-game_para_3", { ns: "BaccaratX" })} />}</li>
                    </ul>
                </li>
            </ul>

            {isPortrait ? (
                <div className={Styles["merge-client-seed-section"]}>
                    <div className={Styles["container"]}>
                        <div className={Styles["merge-client-seed-section-left"]}>
                            <div className={Styles["server-seed-container"]}>
                                <div className={Styles["pf-text-highlight"]}>
                                    {t("pf_server_Seed", { ns: "Common" })}

                                    <p className={Styles["cut-card-index"]}>290</p>
                                </div>
                            </div>
                            <div className={`${Styles["pf-text-highlight"]} ${Styles["client-seed"]} ${Styles["client-seed-1"]}`}>
                                {<Markup content={t("pf_client_seed", { ns: "Common" })} />}
                                <p className={Styles["cut-card-index"]}>275</p>
                            </div>
                            <div className={`${Styles["pf-text-highlight"]} ${Styles["client-seed"]} ${Styles["client-seed-2"]}`}>
                                {<Markup content={t("pf_client_seed", { ns: "Common" })} />}
                                <p className={Styles["cut-card-index"]}>300</p>
                            </div>
                            <div className={`${Styles["pf-text-highlight"]} ${Styles["client-seed"]} ${Styles["client-seed-3"]}`}>
                                {<Markup content={t("pf_client_seed", { ns: "Common" })} />}
                                <p className={Styles["cut-card-index"]}>270</p>
                            </div>
                            <div className={`${Styles["pf-text-highlight"]} ${Styles["client-seed"]} ${Styles["client-seed-4"]}`}>
                                {<Markup content={t("pf_client_seed", { ns: "Common" })} />}
                                <p className={Styles["cut-card-index"]}>260</p>
                            </div>
                        </div>
                        <div className={Styles["merge-client-seed-section-right"]}>
                            <div className={Styles["merge-client-seed"]}>
                                <div className={`${Styles["pf-combined-hash-text"]} ${Styles["pf-text-highlight"]} ${Styles[locale]}`}>
                                    {t("pf_merge_seed", { ns: "Common" })}
                                    <p className={Styles["merge-cut-card-index"]}>{t("average", { ns: "BaccaratX" })}(290+275+300+270+260) = 279</p>
                                </div>
                            </div>
                            <div className={`${Styles["final-result"]} ${Styles["pf-text-highlight"]}`}>
                                {t("final_cut-card_index", { ns: "BaccaratX" })}
                                <p className={Styles["cut-card-index"]}>279</p>
                            </div>
                        </div>
                    </div>

                    <div className={Styles["center-img"]}>
                        <img src={`./static/images/pf/baccarat-x/pf-guide-merge-client-seed.png?v=${verImg}`} width={"100%"} alt="pf"></img>
                    </div>
                </div>
            ) : (
                <div className={Styles["center-img"]}>
                    <img src={`./static/images/pf/baccarat-x/pf-guide-${locale}.png?v=${verImg}`} width={"1100px"} alt="pf"></img>
                </div>
            )}
        </li>
    );
};

const renderImageStartNewShoe = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <div className={Styles["popup-wrapper"]}>
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    <span className={Styles["title-provably-fair"]}>{t("pf_title_provably_fair_settings", { ns: "Common" })} </span>
                    <span className={Styles["icon-guide"]}></span>
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
            <div className={Styles["close-button"]}></div>
            <div className={Styles["popup-content"]}>
                <div className={Styles["section"]}>
                    <div className={Styles["para-desc"]}>{t("pf_settings_para_1", { ns: TogleeNamespace.Common })}</div>
                    <div className={Styles["para-desc"]}>{t("pf_settings_para_2", { ns: TogleeNamespace.Common })}</div>
                </div>

                <div className={`${Styles["server-seed-section"]}`}>
                    <div className={Styles["title-style"]}>
                        {<Markup content={t("pf_server_seed_sha256", { ns: TogleeNamespace.Common })} />}
                    </div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        773de4a92478ab2c14b861f8056d0ad7906314db9b39b34f31f45a2b1984bc5c
                        <span className={Styles["icon-copy"]}></span>
                    </div>
                </div>
                <div className={`${Styles["client-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-section"]}>
                        <span className={`${Styles["title-style"]} ${Styles["sub-title-style"]}`}>
                            {<Markup content={t("title_cut-card_index_settings", { ns: "BaccaratX" })} />}
                        </span>
                    </div>
                    <div className={Styles["client-seed-section"]}>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={`${Styles["title-style"]} ${Styles["sub-title-style"]}`}>
                                    <span>{t("pf_client_seed", { ns: TogleeNamespace.Common })} </span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>319</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={`${Styles["title-style"]} ${Styles["sub-title-style"]}`}>
                                    <span> {t("fairness_settings_client_seed_note", { ns: "BaccaratX" })} </span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>270</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["merge-cs-section"]}>
                        <div className={Styles["btn-submit"]}>{t("submit_button", { ns: "BaccaratX" })}</div>
                    </div>
                </div>
                <div className={`${Styles["section"]} ${Styles["bg-section"]}`}>
                    <div className={`${Styles["para-desc"]} ${Styles["dont-show-section"]}`}>
                        <img src={`./static/images/pf/pf-radio-button.png?v=${verImg}`} width={"30px"} alt="pf"></img>
                        <span>{t("don't_show_again", { ns: "BaccaratX" })}</span>
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
    isPortrait: boolean
) => {
    return (
        <li className="guide-item">
            <h2>{<Markup content={t("fairness_title_verify_the_fairness", { ns: "BaccaratX" })} />}</h2>
            <ul className="style-number-dot">
                {renderNewShoe(t, verImg, rootImgUrl, locale, gameName, isPortrait)}

                {renderCardShoeEnd(t, verImg, locale, isPortrait)}
            </ul>
        </li>
    );
};

const renderNewShoe = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    verImg: string,
    rootImgUrl: string,
    locale: string,
    gameName: string,
    isPortrait: boolean
) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("fairness_subtitle_start_a_new_shoe", { ns: "BaccaratX" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>
                    {<Markup content={t("fairness_start_a_new_shoe_para_1", { ns: "BaccaratX" })} />}
                    <div className="center-img">
                        <img className={`${isPortrait ? Styles["img-border"] : ""}`} width={"90%"} src={`./static/images/pf/baccarat-x/${isPortrait ? "portrait" : ""}/step1-${locale}.png?v=${verImg}`} alt="pf"></img>
                    </div>
                </li>
                <li>{<Markup content={t("fairness_start_a_new_shoe_para_2", { ns: "BaccaratX" })} />} </li>
                <li>{<Markup content={t("fairness_start_a_new_shoe_para_3", { ns: "BaccaratX" })} />} </li>
                <li>{<Markup content={t("fairness_start_a_new_shoe_para_4", { ns: "BaccaratX" })} />} </li>
            </ul>
        </li>
    );
};

const renderCardShoeEnd = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string, locale: string, isPortrait: boolean) => {
    
    
    
    return (
        <li className="number-dot">
            <span className="title-text">{t("fairness_subtitle_when_the_cardshoe_end", { ns: "BaccaratX" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("fairness_when_the_cardshoe_end_para_1", { ns: "BaccaratX" })} />} </li>
                <li>
                    {<Markup content={t("fairness_when_the_cardshoe_end_para_2", { ns: "BaccaratX" })} />}{" "}
                    <div className="center-img">
                        <img className={`${isPortrait ? Styles["img-border"] : ""}`} width={"90%"} src={`./static/images/pf/baccarat-x/${isPortrait ? "portrait" : ""}/step2-${locale}.png?v=${verImg}`} alt="pf"></img>
                    </div>
                </li>
                <li>
                    {<Markup content={t("fairness_when_the_cardshoe_end_para_3", { ns: "BaccaratX" })} />}
                    <div className="center-img">
                        <img className={`${isPortrait ? Styles["img-border"] : ""}`} width={"90%"} src={`./static/images/pf/baccarat-x/${isPortrait ? "portrait" : ""}/step3-sha256.png?v=${verImg}`} alt="pf"></img>
                    </div>

                </li>
                <li>
                    {<Markup content={t("fairness_when_the_cardshoe_end_para_4", { ns: "BaccaratX" })} />}
                    <br />
                    {<Markup content={t("fairness_when_the_cardshoe_end_para_5", { ns: "BaccaratX" })} />}
                </li>

                <li>
                    {<Markup content={t("fairness_when_the_cardshoe_end_para_6", { ns: "BaccaratX" })} />}
                    <div className="center-img">
                        <img className={`${isPortrait ? Styles["img-border"] : ""}`} width={"90%"} src={`./static/images/pf/baccarat-x/${isPortrait ? "portrait" : ""}/step5-${locale}.png?v=${verImg}`} alt="pf"></img>
                    </div>
                </li>
                <li>
                    {<Markup content={t("fairness_when_the_cardshoe_end_para_7", { ns: "BaccaratX" })} />}
                    <div className="center-img">
                        <img className={`${isPortrait ? Styles["img-border"] : ""}`} width={"90%"} src={`./static/images/pf/baccarat-x/${isPortrait ? "portrait" : ""}/step6-${locale}.png?v=${verImg}`} alt="pf"></img>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const renderContentPF = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    displayName: string,
    imgVersion: string,
    locale: string,
    isPortrait: boolean
) => {
    return (
        <>
            {renderPFInfo(t)}
            {renderHowPFWork(t, imgVersion, locale, isPortrait)}
        </>
    );
};

const renderPFInfo = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <li className="guide-item section">
            <h2>{t("fairness_title_what_is_fairness", { ns: "BaccaratX" })} </h2>
            <div className="content">{<Markup content={t("fairness_what_is_fairness_para_1", { ns: "BaccaratX" })} />}</div>
        </li>
    );
};

const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string, locale: string, isPortrait: boolean) => {
    return (
        <li className="guide-item section">
            <h2>{t("fairness_title_how_does_the_fairness_feature_work", { ns: "BaccaratX" })} </h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="title-text">{t("fairness_subtitle_SHA256_algorithm", { ns: "BaccaratX" })}</span>
                    <ul className={Styles["circle-style"]}>
                        <li>{<Markup content={t("fairness_SHA256_algorithm_para_1", { ns: "BaccaratX" })} />} </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="title-text">{t("pf_provably_fair", { ns: "Common" })}</span>
                </li>
            </ul>
            <p>{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</p>
            <div className={Styles["intro-border"]}>
                <span style={{ textAlign: "center" }}>
                    <strong className="pf-text-yellow">{t("pf_fair_result", { ns: "Common" })}</strong> ={" "}
                    <strong>{t("pf_casino_contribution", { ns: "Common" })}</strong> +{" "}
                    <strong>{t("pf_player_contribution", { ns: "Common" })}</strong>
                </span>
            </div>

            <p>{t("pf_how_pf_work_para_2", { ns: "Common" })}</p>
            <ul className="circle">
                <li>{<Markup content={t("pf_how_pf_work_para_3", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_work_para_4", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_work_para_5", { ns: "Common" })} />}</li>
            </ul>
            <p>{t("pf_how_pf_work_para_6", { ns: "Common" })}</p>
            {isPortrait ? (
                <>{renderPFWorkExample(t, imgVersion, locale)}</>
            ) : (
                <div className="center-img">
                    <img className="img-border" src={`./static/images/pf/flow-final-result_${locale}.png?v=${imgVersion}`} alt="pf"></img>
                </div>
            )}
        </li>
    );
};

const BaccaratXPFContents: React.FC<BaccaratXPFContentsProps> = ({ locale, displayName, name, orientation }) => {
    const { t } = useTranslate(["BaccaratX", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion || "";
    const isPortrait = orientation === "portrait";
    return (
        <div>
            <ul className={`game-guide game-guide-pf`}>
                {renderContentPF(t, displayName ?? "", verImg, locale ?? "en", isPortrait)}
                {renderHowPFInGame(t, verImg, rootImgUrl, displayName ?? "", locale ?? "en", isPortrait)}
                {renderVerifyPF(t, verImg, rootImgUrl, locale ?? "en", displayName ?? "", isPortrait)}
            </ul>
        </div>
    );
};

export default BaccaratXPFContents;
