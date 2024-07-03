import { DefaultParamType, T, TFnType, TranslationKey } from "@tolgee/react";
import { Markup } from "interweave";
import Styles from "./pf.module.scss";

const iconGuide = <img src="./static/images/pf-snng/pf-verify-icon-guides.svg" alt="pf-icon" />;
const iconClose = <img src="./static/images/pf-snng/pf-verify-icon-close.svg" alt="pf-icon" />;
const iconChecked = <img src="./static/images/pf-snng/pf-verify-icon-checked.svg" alt="pf-icon" />;
const iconUnCheck = <img src="./static/images/pf-snng/pf-verify-icon-uncheck.svg" alt="pf-icon" />;
const iconCopy = <img src="./static/images/pf-snng/pf-verify-icon-copy.svg" alt="pf-icon" />;
const iconInfo = <img src="./static/images/pf-snng/pf-verify-icon-info.svg" alt="pf-icon" />;

const renderPopupHeader = (headerTitleKey: string, nameSpace: string, t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={Styles["pf-verify-header"]}>
            <span className={Styles["pf-verify-icon"]}>{iconGuide}</span>
            <span className={Styles["pf-verify-header-title"]}>{t(headerTitleKey, { ns: nameSpace })}</span>
            <span className={Styles["pf-verify-icon"]}>{iconClose}</span>
        </div>
    );
};

const renderPFInfo = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_what_is_provably_fair", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_what_provably_fair_para_1", { ns: "Common" })} />}</div>
        </div>
    );
};

const renderAdvertisePF = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div>
            <div className={Styles["pf-main-title"]}>{t("pf_advertise_para_1", { ns: "Common" })}</div>
            <p>{<Markup content={t("pf_advertise_bac_ball", { ns: "Common", gamename: displayName })} />}</p>
            <div className="center-img">
                <img width={137} src={`./static/images/pf-snng/pf-intro.png?v=${imgVersion}`} alt="pf"></img>
            </div>
        </div>
    );
};

const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_provably_fair_work", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</div>

            <div className={Styles["pf-block-highlight-text"]}>
                <span style={{ textAlign: "center" }}>
                    <strong className={Styles["pf-text-highlight"]}>{t("pf_fair_result", { ns: "Common" })}</strong>
                    <strong className={Styles["pf-text-content"]}> = {t("pf_casino_contribution", { ns: "Common" })}</strong>
                    <strong className={Styles["pf-text-content"]}> + {t("pf_player_contribution", { ns: "Common" })}</strong>
                </span>
            </div>

            <div>{t("pf_how_pf_work_para_2", { ns: "Common" })}</div>
            <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                <li>{<Markup content={t("pf_how_pf_work_para_3", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_work_para_4", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_work_para_5", { ns: "Common" })} />}</li>
            </ul>
            <p>{t("pf_how_pf_work_para_6", { ns: "Common" })}</p>
            {renderPFWorkExample(t, imgVersion)}
        </div>
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
                    {<Markup content={t("pf_bacball_nonce", { ns: "SabaNumber" })} />}
                </div>
                <div className="center-img">
                    <img
                        className={Styles["pf-work-example-img-background-full"]}
                        src={`./static/images/pf-snng/pf-work-example-1.png?v=${imgVersion}`}
                        alt="pf"
                    ></img>
                </div>

                <div className={Styles["pf-work-example-img-text"]}>
                    <span>{t("pf_player", { ns: "Common" })} 1</span>
                    <span>{t("pf_player", { ns: "Common" })} 2</span>
                    <span>{t("pf_player", { ns: "Common" })}...</span>
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
const renderPFAppliedInGame = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    displayName: string,
    imgVersion: string,
    isGameDRAW: boolean
) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    <T keyName={"pf_how_is_pf_applied_in_game_para_1"} params={{ gamename: displayName }} ns="Common" />
                </li>

                {isGameDRAW ? (
                    <li>{t("pf_how_is_pf_applied_in_game_para_2", { ns: "SabaNumber" })}</li>
                ) : (
                    <li>{t("pf_how_is_pf_applied_in_game_para_2", { ns: "Common" })}</li>
                )}
                <li>{t("pf_how_pf_work_para_3", { ns: "SabaNumber" })}</li>
            </ul>
            {renderPFAppliedExample(t, imgVersion)}
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
                    <span>{t("pf_player", { ns: "Common" })} 1</span>
                    <span>{t("pf_player", { ns: "Common" })} 2</span>
                    <span>{t("pf_player", { ns: "Common" })}...</span>
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

const renderPFSettingsExample = (t: TFnType<DefaultParamType, string, TranslationKey>, randomNumber: string, serverSeedSHA256: string) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]}`}>
            {renderPopupHeader("pf_title_provably_fair_settings", "Common", t)}
            <p>{t("pf_setting_para_1", { ns: "SabaNumber" })}</p>
            <p>{t("pf_settings_para_2", { ns: "Common" })}</p>
            <div className={Styles["pf-verify-section-title"]}>{t("pf_client_seed", { ns: "Common" })}</div>
            <div className={Styles["pf-verify-block-form"]}>
                <div className={Styles["pf-verify-option"]}>
                    <div className={Styles["pf-verify-option-radio"]} style={{ color: "#fff" }}>
                        <span className={Styles["pf-verify-icon"]}>{iconChecked}</span>
                        <span className={Styles["pf-verify-check-label"]}>{t("pf_random", { ns: "Common" })}</span>
                    </div>

                    <div className={`${Styles["pf-verify-input-focus"]} ${Styles["pf-verify-input-fix-width"]}`} style={{ color: "#fff" }}>
                        {randomNumber}
                    </div>
                </div>
                <div className={Styles["pf-verify-option"]}>
                    <div className={Styles["pf-verify-option-radio"]}>
                        <span className={Styles["pf-verify-icon"]}>{iconUnCheck}</span>
                        <span className={`${Styles["pf-verify-check-label"]} text-center`}>
                            {t("pf_manual_input", { ns: "Common" })} <br /> (0 - 9999)
                        </span>
                    </div>

                    <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-fix-width"]}`}></div>
                </div>
            </div>
            <div className={Styles["pf-verify-section-title"]}>{t("pf_server_seed_sha256", { ns: "Common" })}</div>
            <div className={Styles["pf-verify-block-form"]}>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{serverSeedSHA256}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
            </div>
        </div>
    );
};

const renderVerifyExample = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    serverSeedSHA256: string,
    serverSeed: string,
    mergeServerSeed: string,
    combinedSHA512Hash: string,
    resultBlock: any
) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]}`}>
            {renderPopupHeader("pf_provably_fair", "Common", t)}
            {resultBlock}
            <div className={Styles["pf-verify-block-form"]}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_server_seed_sha256", { ns: "Common" })}</div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{serverSeedSHA256}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
                <div className={Styles["pf-verify-section-title"]} style={{ marginTop: "1rem" }}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{<Markup content={serverSeed} />}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
            </div>
            <div className={Styles["pf-verify-block-form"]}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_client_seed", { ns: "Common" })}</div>
                <span className={Styles["pf-verify-icon-info"]}>{iconInfo}</span>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <span className={Styles["pf-verify-link"]}>{t("pf_provably_fair_details", { ns: "SabaNumber" })}</span>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={`${Styles["pf-verify-input-text"]}`}>{mergeServerSeed}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
            </div>
            <div className={Styles["pf-verify-block-form"]}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <span className={Styles["pf-verify-icon-info"]}>{iconInfo}</span>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`} style={{ marginTop: "1.2rem" }}>
                    <span className={`${Styles["pf-verify-input-text"]} text-center`}>{combinedSHA512Hash}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
            </div>
            <div className={Styles["pf-verify-button-green"]}>{t("pf_verify", { ns: "Common" })}</div>
            <div className="text-center" style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                {t("pf_provably_fair_para_2", { ns: "Common" })}
            </div>
        </div>
    );
};

const renderContentPFBase = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <>
            {renderAdvertisePF(t, displayName || "", imgVersion)}
            {renderPFInfo(t)}
            {renderHowPFWork(t, imgVersion)}
        </>
    );
};

export { renderContentPFBase, renderPFSettingsExample, renderVerifyExample, renderPopupHeader, renderPFAppliedInGame };
