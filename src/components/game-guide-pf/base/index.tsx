import { DefaultParamType, TFnType, TranslationKey } from "@tolgee/react";
import { Markup } from "interweave";
import {
    MAX_VALUE,
    RTP,
    convertHexToDecimalSteps,
    convertToDecimal,
    renderFinalResult,
    takeFirstValueFromSHA512,
} from "../../verification/helper/hash-helper";
import Styles from "./pf-base.module.scss";

export type PFMeta = {
    hasCrashPoint?: boolean;
    isPortrait?: boolean;
};

const renderAdvertisePF = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div>
            <span className={Styles["title-pf"]}>{<Markup content={t("pf_advertise_para_1", { ns: "Common" })} />}</span>
            <p>{<Markup content={t("pf_advertise_para_2", { ns: "Common", gamename: displayName })} />}</p>
            <div className="center-img">
                <img className={Styles["img-intro"]} src={`./static/images/pf/pf-intro.png?v=${imgVersion}`} alt="pf"></img>
            </div>
        </div>
    );
};

const renderContentPFBase = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    displayName: string,
    imgVersion: string,
    locale: string,
    orientation?: string
) => {
    return (
        <>
            {renderAdvertisePF(t, displayName || "", imgVersion)}
            {renderPFInfo(t)}
            {renderHowPFWork(t, imgVersion, locale, orientation)}
        </>
    );
};

const renderPFInfo = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <li className="guide-item section">
            <h2>{t("pf_title_what_is_provably_fair", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_what_provably_fair_para_1", { ns: "Common" })} />}</div>
        </li>
    );
};

const renderHowPFWork = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    imgVersion: string,
    locale: string,
    orientation?: string
) => {
    return (
        <li className="guide-item section">
            <h2>{t("pf_title_how_provably_fair_work", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</div>

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

            {orientation === "portrait" ? (
                renderPFWorkExample(t, imgVersion)
            ) : (
                <div className="center-img">
                    <img className="img-border" src={`./static/images/pf/flow-final-result_${locale}.png?v=${imgVersion}`} alt="pf"></img>
                </div>
            )}
        </li>
    );
};

const renderStepByStep = (t: TFnType<DefaultParamType, string, TranslationKey>, meta: PFMeta) => {
    return (
        <>
            <div>{<Markup content={t("pf_verifier_tool_step_by_step", { ns: "Common" })} />} </div>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_verifier_tool_step_1", { ns: "Common" })} />}</li>
                <li>
                    {<Markup content={t("pf_verifier_tool_step_2", { ns: "Common" })} />}
                    {renderImageStep2(t, meta)}
                </li>
                <li>
                    {<Markup content={t("pf_verifier_tool_step_3", { ns: "Common" })} />}
                    {renderImageStep3(t, meta)}
                </li>
            </ul>
        </>
    );
};

const renderImageStep2 = (t: TFnType<DefaultParamType, string, TranslationKey>, meta: PFMeta) => {
    const isPortrait = meta.isPortrait;
    const renderHeader = () => {
        if (isPortrait) {
            return (
                <div className={Styles["popup-title"]}>
                    <span className={Styles["icon-guide"]}></span>
                    <span className={Styles["title-provably-fair"]}>{t("pf_provably_fair", { ns: "Common" })} </span>
                    <div className={Styles["icon-close"]}></div>
                </div>
            );
        }
        return (
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    <span className={Styles["title-provably-fair"]}>{t("pf_provably_fair", { ns: "Common" })} </span>
                    <span className={Styles["icon-guide"]}></span>
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
        );
    };
    return (
        <div className={Styles["popup-wrapper"]}>
            {renderHeader()}
            <div className={Styles["popup-content"]}>
                <div className={Styles["section-info"]}>
                    <div className={Styles["info"]}>
                        <div className={Styles["key"]}>{t("pf_round", { ns: "Common" })}:</div>
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]} ${Styles["round-id"]}`}>296748</div>
                    </div>
                    <div className={Styles["info"]}>
                        {meta.hasCrashPoint && (
                            <div className={Styles["key"]}>
                                <Markup content={t("glossary_crash_point", { ns: "Common" })} />:
                            </div>
                        )}
                        <div className={`${Styles["value"]} ${Styles["highlight-text"]} ${Styles["key"]}`}>2.67x</div>
                    </div>
                </div>
                <div className={`${Styles["server-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_seed_sha256", { ns: "Common" })} />}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        8f9d5336931352e44e8755ba4ee9f734đfb39f72899a268ef61ca30f8948ea4<span className={Styles["icon-copy"]}></span>{" "}
                    </div>
                    <div className={Styles["title-style"]}>{<Markup content={t("pf_server_Seed", { ns: "Common" })} />}</div>
                    <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                        xFBRGc1DtkWNfMZvi9QAms0q45UEp7e3bwdrjO2H<span className={Styles["icon-copy"]}></span>
                    </div>
                </div>
                <div className={`${Styles["client-section"]} ${Styles["bg-section"]}`}>
                    <div className={Styles["title-section"]}>
                        <span className={Styles["title-style"]}>{<Markup content={t("pf_client_seed", { ns: "Common" })} />}</span>
                        <span className={Styles["icon-info"]}></span>
                    </div>
                    <div className={Styles["client-seed-section"]}>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>1 (R***r40)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>5596</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>2 (L***992)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0056</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>3 (B***069)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>3544</div>
                            </div>
                        </div>
                        <div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>4 (A***744)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>0748</div>
                            </div>
                            <div className={Styles["player-seed"]}>
                                <div className={Styles["name"]}>
                                    <span>{t("pf_player", { ns: "Common" })} </span>
                                    <span>5 (S***676)</span>
                                </div>
                                <div className={`${Styles["client-seed-value"]} ${Styles["text-section"]}`}>7830</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles["merge-cs-section"]}>
                        <div className={`${Styles["title-style"]} ${Styles["title-merge-cs"]}`}>
                            {<Markup content={t("pf_ header_merge_client_seed", { ns: "Common" })} />}
                        </div>
                        <div className={Styles["text-section"]}>
                            55960056354407487830 <span className={Styles["icon-copy"]}></span>
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
                            5d1a48c3b2653ee73fb5fb58a40c27f883206927b28243895be4976910fb197caf2c891403a9ef4c6bd2b5826cd9e3d26a944af446e2078adf139ec3a57c6c6
                            <span className={Styles["icon-copy"]}></span>
                        </div>
                    </div>
                    <div className={Styles["para-desc"]}>{t("pf_provably_fair_para_2", { ns: "Common" })}</div>
                    <div className={Styles["btn-verify"]}>{t("pf_verify", { ns: "Common" })}</div>
                </div>
            </div>
        </div>
    );
};

const renderImageStep3 = (t: TFnType<DefaultParamType, string, TranslationKey>, meta: PFMeta) => {
    const finalHash =
        "5d1a48c3b2653ee73fb5fb58a40c27f883206927b28243895be4976910fb197caf2c891403a9ef4c6bd2b5826cd9e3d26a944af446e2078adf139ec3a57c6c6";
    const digits = takeFirstValueFromSHA512(finalHash);
    const isPortrait = meta.isPortrait;
    const renderHeader = () => {
        if (isPortrait) {
            return (
                <div className={Styles["popup-title"]}>
                    <span className={Styles["icon-guide"]}></span>
                    <div className={Styles["title-provably-fair"]}>{t("pf_title_verification", { ns: "Common" })}</div>
                    <div className={Styles["icon-close"]}></div>
                </div>
            );
        }
        return (
            <div className={Styles["popup-title"]}>
                <div className={Styles["popup-title-text"]}>
                    {t("pf_title_verification", { ns: "Common" })}{" "}
                    <span className={Styles["text-round"]}>
                        ({t("pf_round", { ns: "Common" })}: <span className={Styles["round-id"]}>296748</span>)
                    </span>
                </div>
                <div className={Styles["icon-close"]}></div>
            </div>
        );
    };
    const renderResult = () => {
        return (
            <div className={Styles["result-section"]}>
                <span className={Styles["text-round"]}>
                    {t("pf_round", { ns: "Common" })}: <span className={Styles["round-id"]}>296748</span>
                </span>
                <div className={Styles["result"]}>2.67x</div>
            </div>
        );
    };
    const renderSHA512 = () => {
        return (
            <>
                <div className={Styles["title-style"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span className={Styles["combined-hash"]}>
                        5d1a48c3b2653ee73fb5fb58a40c27f883206927b28243895be4976910fb197caf2c891403a9ef4c6bd2b5826cd9e3d26a944af446e2078adf139ec3a57c6c6
                    </span>
                </div>
            </>
        );
    };
    const renderSHA512Portrait = () => {
        return (
            <>
                <div className={Styles["title-style"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <span className={`${Styles["combined-hash"]} ${Styles["break-word"]}`}>
                    5d1a48c3b2653ee73fb5fb58a40c27f883206927b28243895be4976910fb197caf2c891403a9ef4c6bd2b5826cd9e3d26a944af446e2078adf139ec3a57c6c6
                </span>
            </>
        );
    };

    return (
        <div className={Styles["popup-wrapper"]}>
            {renderHeader()}
            {isPortrait && renderResult()}
            <div className={Styles["info-seed"]}>
                <div className={Styles["title-style"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>xFBRGc1DtkWNfMZvi9QAms0q45UEp7e3bwdrjO2H</span>
                    {isPortrait && <span className={Styles["icon-copy"]}></span>}
                </div>
                <div className={Styles["title-style"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["text-section"]} ${Styles["text-blur"]}`}>
                    <span>55960056354407487830</span>
                    {isPortrait && <span className={Styles["icon-copy"]}></span>}
                </div>
                {!isPortrait && renderSHA512()}
            </div>
            {isPortrait && renderSHA512Portrait()}
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>{finalHash}</div>
                </div>
                <div>
                    <strong>{t("pf_verification_para_2", { ns: "Common", value: "8" })}: </strong>{" "}
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
                        {MAX_VALUE} / ({convertToDecimal(digits)} + 1) * (1- {RTP}) ={" "}
                        <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const render3rdVerifierTool = (t: TFnType<DefaultParamType, string, TranslationKey>, verImg: string) => {
    return (
        <li className="number-dot">
            <span className="title-text">{t("pf_subtitle_online_third_party_verifier_tools", { ns: "Common" })}</span>
            <ul className={Styles["circle-style"]}>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: "Common" })} />}</li>
            </ul>
        </li>
    );
};

const renderPFWorkExample = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className={Styles["pf-work-example"]}>
            <div className={Styles["pf-work-example-block-1"]}>
                <div className={`${Styles["pf-work-example-text-1"]} ${Styles["pf-text-highlight"]}`}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-work-example-text-2"]} ${Styles["pf-text-highlight"]}`}>
                    {t("pf_client_seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-work-example-text-3"]} ${Styles["pf-text-highlight"]}`}>
                    {<Markup content={t("pf_nonce", { ns: "Common" })} />}
                </div>
                <div className="center-img">
                    <img
                        className={Styles["pf-work-example-img-background-full"]}
                        src={`./static/images/pf-snng/pf-work-example-1.png?v=${imgVersion}`}
                        alt="pf"
                    ></img>
                </div>

                <div className={Styles["pf-work-example-img-text"]}>
                    <span className={Styles["pf-player"]}>{t("example_Player", { ns: "BandarQiuQiu" })} 1</span>
                    <span className={Styles["pf-player"]}>{t("example_Player", { ns: "BandarQiuQiu" })} 2</span>
                    <span className={Styles["pf-player"]}>{t("example_Player", { ns: "BandarQiuQiu" })}...</span>
                </div>
            </div>
            <div className={Styles["pf-word-example-block-2"]}>
                <div className={Styles["pf-text-highlight"]}>{t("pf_merge_seed", { ns: "Common" })}</div>
                <div className={Styles["pf-text-highlight"]}>{t("pf_server_client_nonce", { ns: "Common" })}</div>
                <img
                    className={Styles["pf-merge-seed-img"]}
                    src={`./static/images/pf-snng/pf-merge-seed.png?v=${imgVersion}`}
                    alt="pf"
                ></img>
            </div>
            <div className={`${Styles["pf-example-block-final"]}`}>{t("pf_final_result", { ns: "Common" })}</div>
        </div>
    );
};
const renderPFAppliedExample = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className={Styles["pf-applied-example"]}>
            <div className={Styles["pf-applied-example-block-1"]}>
                <div className={`${Styles["pf-applied-example-text-1"]} ${Styles["pf-text-highlight"]}`}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-applied-example-text-2"]} ${Styles["pf-text-highlight"]}`}>
                    {t("pf_client_seed", { ns: "Common" })}
                </div>
                <div className="center-img">
                    <img
                        className={Styles["pf-work-example-img-background-full"]}
                        src={`./static/images/pf-snng/pf-applied-ingame-example-1.png?v=${imgVersion}`}
                        alt="pf"
                    ></img>
                </div>
                <div className={`${Styles["pf-applied-example-text-3"]} ${Styles["pf-text-highlight"]} text-center`}>
                    {t("pf_ header_merge_client_seed", { ns: "Common" })} <br />({t("pf_provably_guide_flow", { ns: "SabaNumber" })})
                </div>
                <div className={Styles["pf-applied-example-img-text"]}>
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })} 1</span>
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })} 2</span>
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}...</span>
                </div>
            </div>
            <div className={Styles["pf-applied-example-block-2"]}>
                <div className={`text-center ${Styles["pf-text-highlight"]}`}>
                    {t("pf_combined_seed", { ns: "Common" })} <br />({t("pf_server_Seed", { ns: "Common" })} +{" "}
                    {t("pf_ header_merge_client_seed", { ns: "Common" })})
                </div>
                <div className="center-img" style={{ paddingTop: "0" }}>
                    <img
                        className={Styles["pf-merge-seed-img"]}
                        src={`./static/images/pf-snng/pf-merge-seed.png?v=${imgVersion}`}
                        alt="pf"
                    ></img>
                </div>
            </div>
            <div className={Styles["pf-combined-hash"]}>
                <div className={`${Styles["pf-combined-hash-text"]} ${Styles["pf-text-highlight"]}`}>
                    {t("pf_header_combined_sha512_hash", { ns: "Common" })}
                </div>
                <div className="center-img" style={{ paddingTop: "0" }}>
                    <img
                        className={Styles["pf-combined-hash-img"]}
                        src={`./static/images/pf-snng/pf-combined-hash.png?v=${imgVersion}`}
                        alt="pf"
                    ></img>
                </div>
            </div>
            <div className={`${Styles["pf-example-block-final"]}`}>{t("pf_final_result", { ns: "Common" })}</div>
        </div>
    );
};

export { render3rdVerifierTool, renderAdvertisePF, renderContentPFBase, renderStepByStep, renderPFAppliedExample };
