import { FC } from "react";
import { Markup } from "interweave";
import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import Styles from "../snng-base/pf.module.scss";
import PFStyles from "./pf-original.module.scss";
import { CrashXPFContentsProps } from "./type";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderPFAppliedExample } from "../snng-base";

const uppercaseToTitleCase = (str: string): string => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const iconCopy = <img src="./static/images/pf-snng/pf-verify-icon-copy.svg" alt="pf-icon" />;
const iconEdit = <img src="./static/images/pf-snng/pf-verify-icon-edit.svg" alt="pf-icon" />;
const iconPF2 = <img src="./static/images/pf/sedie/bet-details-pf.png" alt="bet-details-pf-icon" />;
const iconInfo = <img src="./static/images/pf-snng/pf-verify-icon-info.svg" alt="pf-icon" />;
const iconBack = <img src="./static/images/pf/sedie/icon-back.svg" alt="icon-back" />;
const iconChecked = <img src="./static/images/pf-snng/pf-verify-icon-checked.svg" alt="pf-icon" />;
const iconUnCheck = <img src="./static/images/pf-snng/pf-verify-icon-uncheck.svg" alt="pf-icon" />;
const iconClose = <img src="./static/images/pf-snng/pf-verify-icon-close-sedie.svg" alt="pf-icon" />;
const iconQuestion = <img src="./static/images/pf/sedie/pf-button-question.png" alt="icon-question" />;

const iconPF = `<img src="/static/images/pf-snng/pf-guide.svg" alt="pf-verify" />`;
const serverSeedSHA256 = "7351789d88eb5e85a40e13375472736d48e2872e7f08d4e0fbb2c0eb1152aebf";
const serverSeed = "pG8ThIMYfdl1hB0yhfcFxxHoVLH1LKDNueF4Eqvg";
const combinedSHA512Hash =
    "128fb9f28d5e16a05419a7320ec39ff6d4f1d97781ef88e7a9059d2378667783968e04d706599eba7b626d3fa9ac0617d2801c2d1b22bbfd1fe9cc90f5e41a2a";
const roundId = "23986";
const crashPoint = "13.38x";
const combinedHashExample =
    "d662aefd7de9e24ae822d472d502798098ee0adaa91642dbd1efdd93987d464fb537fba22b002b5ec91d4f0a3fb98d404b78feac4650568fd6c279eb097d8cb9";
const mergeClientSeed = "88647423094441333241";

const renderContentPFBase = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <>
            {renderAdvertisePF(t, displayName || "", imgVersion)}
            {renderPFInfo(t)}
            {renderHowPFWork(t, imgVersion)}
        </>
    );
};

const renderAdvertisePF = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div>
            <div className={`${Styles["pf-main-title"]} ${PFStyles["pf-main-title"]}`}>{t("pf_advertise_para_1", { ns: "Common" })}</div>
            <p>{<Markup content={t("pf_advertise_bac_ball", { ns: "Common", gamename: displayName })} />}</p>
            <div className="center-img">
                <img src={`./static/images/pf-snng/pf-intro.svg?v=${imgVersion}`} alt="pf"></img>
            </div>
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

const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_provably_fair_work", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</div>

            <div className={`${Styles["pf-block-highlight-text"]} ${Styles["pf-block-highlight-text-sedie"]}`}>
                <span style={{ textAlign: "center" }}>
                    <strong className={Styles["pf-text-highlight"]} style={{ fontSize: "1.4rem" }}>
                        {t("pf_fair_result", { ns: "Common" })}
                    </strong>
                    <strong className={Styles["pf-text-content"]} style={{ fontSize: "1.4rem" }}>
                        {" "}
                        = {t("pf_casino_contribution", { ns: "Common" })}
                    </strong>
                    <strong className={Styles["pf-text-content"]} style={{ fontSize: "1.4rem" }}>
                        {" "}
                        + {t("pf_player_contribution", { ns: "Common" })}
                    </strong>
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
                <div className={`${Styles["pf-work-example-text-1"]} ${Styles["pf-text-highlight"]} ${PFStyles["pf-text-responsive"]}`}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-work-example-text-2"]} ${Styles["pf-text-highlight"]} ${PFStyles["pf-text-responsive"]}`}>
                    {t("pf_client_seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-work-example-text-3"]} ${Styles["pf-text-highlight"]} ${PFStyles["pf-text-responsive"]}`}>
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
                    <span>{t("example_Player", { ns: "Common" })} 1</span>
                    <span>{t("example_Player", { ns: "Common" })} 2</span>
                    <span>{t("example_Player", { ns: "Common" })}...</span>
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

const resultBlock = (t: TFnType<DefaultParamType, string, TranslationKey>, crashPoint: string) => {
    return (
        <div className={Styles["pf-result-block"]}>
            <div
                className="bold text-white"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {t("glossary_round_id", { ns: "SabaNumber" })}: {roundId}
                <div className={Styles["pf-verify-info-item"]}>
                    {t("glossary_crash_point", { ns: "Common" })}: {crashPoint}
                </div>
            </div>
        </div>
    );
};

const renderBetDetailsExample = (t: TFnType<DefaultParamType, string, TranslationKey>, crashPoint: string) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-3"]} ${Styles["pf-verify-example-sedie"]}`}>
            <div className={`${Styles["pf-verify-header-sedie"]}`}>
                <span className={`${Styles["pf-verify-header-title"]} ${Styles["pf-verify-header-title-sedie"]}`}>
                    {t("pf_bet_details", { ns: "Common" })}
                </span>
                <span className={`${Styles["pf-verify-icon"]} ${Styles["pf-verify-icon-close-sedie"]}`}>
                    <img src="./static/images/pf-snng/pf-verify-icon-close-sedie.svg" alt="pf-icon" />
                </span>
            </div>

            <div
                className={Styles["pf-verify-note"]}
                style={{ fontSize: "var(--font-size)", color: "white", fontStyle: "normal", textAlign: "center" }}
            >
                {t("pf_note_data_available", { ns: "Common" })}
            </div>

            <div className={`${Styles["pf-verify-draw-info-sedie"]}`}>
                <div className={Styles["pf-verify-info-item"]}>
                    <strong>
                        {t("glossary_round_id", { ns: "SabaNumber" })}: {roundId}
                    </strong>
                </div>
                <div className={Styles["pf-verify-info-item"]}>
                    {t("glossary_crash_point", { ns: "Common" })}: {crashPoint}
                </div>
            </div>

            <div className={`${Styles["pf-verify-PF"]} ${Styles["pf-verify-PF-sedie"]}`}>
                <span className={Styles["pf-verify-icon"]}>{iconPF2}</span>
                <div className={Styles["pf-verify-PF-text"]}>{t("pf_provably_fair", { ns: "Common" })}</div>
            </div>

            <table className={`${Styles["pf-bet-details-table"]} ${Styles["pf-bet-details-table-sedie"]}`}>
                <thead>
                    <tr>
                        <th>{t("pf_time", { ns: "SabaNumber" })}</th>
                        <th>{t("title_multiplier", { ns: "Common" })}</th>
                        <th>{t("glossary_bet", { ns: "Common" })}</th>
                        <th>{t("header_win", { ns: "Common" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:33:39 PM</td>
                        <td>1.29x</td>
                        <td>10</td>
                        <td className={Styles["pf-text-highlight"]}>12.9</td>
                    </tr>
                    <tr>
                        <td>12:33:47 PM</td>
                        <td>1.78x</td>
                        <td>10</td>
                        <td className={Styles["pf-text-highlight"]}>17.8</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className={PFStyles["pf-summary-row"]}>
                        <td className={Styles["pf-summary-label"]}>{t("pf_total", { ns: "Common" })}</td>
                        <td></td>
                        <td className={Styles["pf-text-not-highlight"]}>20</td>
                        <td className={Styles["pf-text-highlight"]}>30.7</td>
                    </tr>

                    <tr className={`${PFStyles["pf-summary-row"]} ${PFStyles["pf-summary-row-netprofit"]}`}>
                        <td className={Styles["pf-summary-label"]}>{t("win_loss", { ns: "Common" })}</td>
                        <td></td>
                        <td></td>
                        <td className={Styles["pf-text-highlight"]}>10.7</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

const renderVerifyDetailExample = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    mergeServerSeed: string,
    serverSeed: string,
    combinedSHA512Hash: string
) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]} ${Styles["pf-verify-example-sedie"]}`}>
            {renderVerifyPFHeader(t)}

            <div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{mergeServerSeed}</span>
                </div>

                <div className={Styles["pf-verify-section-title"]} style={{ marginTop: "1rem" }}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{<Markup content={serverSeed} />}</span>
                </div>

                <div className={Styles["pf-verify-section-title"]} style={{ marginTop: "1rem" }}>
                    {t("pf_header_combined_sha512_hash", { ns: "Common" })}
                </div>

                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`} style={{ marginBottom: "1rem" }}>
                    <span className={Styles["pf-verify-input-text"]}>{combinedSHA512Hash}</span>
                </div>

                <div className={Styles["pf-verify-block-form"]} style={{ fontSize: "var(--font-size)", backgroundColor: "#101721" }}>
                    <div className="flex gap-3 items-center">
                        <h3 className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                            {<Markup content={t("pf_final_result", { ns: "Common" })} />}:
                        </h3>
                        <div className="flex items-center" style={{ color: "#20E500" }}>
                            13.378278783012851
                        </div>
                    </div>
                    <div className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                        {t("pf_header_combined_sha512_hash", { ns: "Common" })}
                    </div>
                    <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>

                    <div className="flex gap-3 items-center">
                        <h3 className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                            {t("pf_verification_para_2", { ns: "Common", value: "8" })}:
                        </h3>
                        <div className="flex items-center">128fb9f2</div>
                    </div>
                    <div className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                        {t("pf_verification_para_3", { ns: "Common" })}
                    </div>
                    <span>
                        <pre>
                            (1,2,8,f,b,9,f,2)=311409138 <br />
                            268435456 (1 * (16^7))
                            <br />
                            +33554432 (2 * (16^6))
                            <br />
                            +8388608 (8 * (16^5))
                            <br />
                            +983040 (f * (16^4))
                            <br />
                            +45056 (b * (16^3))
                            <br />
                            +2304 (9 * (16^2))
                            <br />
                            +240 (f * (16^1))
                            <br />
                            +2 (2 * (16^0))=311409138
                        </pre>
                    </span>
                    <div className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                        {t("pf_verification_para_4", { ns: "Common" })}
                    </div>
                    <div>
                        4294967296 / (311409138 + 1) * (1- 0.03) = <span className={PFStyles["pf-text-green"]}>13.378278783012851</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderPFHeader = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={`${Styles["pf-verify-header-sedie"]}`}>
            <span className={`${Styles["pf-verify-icon"]}`}>{iconQuestion}</span>
            <span className={`${Styles["pf-verify-header-title"]} ${Styles["pf-verify-header-title-sedie"]}`}>
                {t("pf_provably_fair", { ns: "Common" })}
            </span>
            <span className={`${Styles["pf-verify-icon"]} ${Styles["pf-verify-icon-close-sedie"]}`}>{iconClose}</span>
        </div>
    );
};

const renderVerifyPFHeader = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={`${Styles["pf-verify-header-sedie"]}`}>
            <span className={`${Styles["pf-verify-header-title"]} ${Styles["pf-verify-header-title-sedie"]}`}>
                {t("pf_title_verification", { ns: "Common" })} (Round: <span className={`${PFStyles["pf-verify-header-round"]}`}>{roundId}</span>)
            </span>
            <span className={`${Styles["pf-verify-icon"]} ${Styles["pf-verify-icon-close-sedie"]}`}>{iconClose}</span>
        </div>
    );
};

const renderVerifyExample = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    serverSeedSHA256: string,
    serverSeed: string,
    combinedSHA512Hash: string,
    mergeClientSeed: string,
    resultBlock: any,
    crashPoint: string
) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]} ${Styles["pf-verify-example-sedie"]}`}>
            {renderPFHeader(t)}
            {resultBlock}
            <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_server_seed_sha256", { ns: "Common" })}</div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{serverSeedSHA256}</span>
                    <span className={`${Styles["pf-verify-icon"]} ${PFStyles["pf-verify-icon"]}`}>{iconCopy}</span>
                </div>
                <div className={Styles["pf-verify-section-title"]} style={{ marginTop: "1rem" }}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{<Markup content={serverSeed} />}</span>
                    <span className={`${Styles["pf-verify-icon"]} ${PFStyles["pf-verify-icon"]}`}>{iconCopy}</span>
                </div>
            </div>
            <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_client_seed", { ns: "Common" })}</div>
                <span className={Styles["pf-verify-icon-info"]}>{iconInfo}</span>

                <table className={`${Styles["pf-bet-details-table"]} ${Styles["pf-bet-details-table-sedie"]}`}>
                    <thead>
                        <tr>
                            <th>{t("example_Player", { ns: "Common" })}</th>
                            <th>{t("pf_nickname", { ns: "SabaNumber" })}</th>
                            <th>{t("pf_seed", { ns: "SabaNumber" })}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>(A***255)</td>
                            <td>8864</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>(B***857)</td>
                            <td>7423</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>(I***080)</td>
                            <td>0944</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>(R***247)</td>
                            <td>4133</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>(T***322)</td>
                            <td>3241</td>
                        </tr>
                    </tbody>
                </table>

                <div className={Styles["pf-verify-section-title"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>

                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`} style={{ marginTop: "1rem" }}>
                    <span className={`${Styles["pf-verify-input-text"]}`}>{mergeClientSeed}</span>
                    <span className={`${Styles["pf-verify-icon"]} ${PFStyles["pf-verify-icon"]}`}>{iconCopy}</span>
                </div>
            </div>
            <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <span className={Styles["pf-verify-icon-info"]}>{iconInfo}</span>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`} style={{ marginTop: "1.2rem" }}>
                    <span className={`${Styles["pf-verify-input-text"]}`}>{combinedSHA512Hash}</span>
                    <span className={`${Styles["pf-verify-icon"]} ${PFStyles["pf-verify-icon"]}`}>{iconCopy}</span>
                </div>
            </div>
            <div className={Styles["pf-verify-button-green"]} style={{ fontSize: "1.4rem" }}>
                {t("pf_verify", { ns: "Common" })}
            </div>
            <div className="text-center" style={{ marginTop: "1rem", fontSize: "1.4rem" }}>
                {t("pf_provably_fair_para_2", { ns: "Common" })}
            </div>
        </div>
    );
};

const renderCrashXVerifyPF = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    locale: string | undefined,
    displayName: string,
    imgVersion: string
) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_verify_the_provably_fair", { ns: "Common" })}</h2>
            <ul className={`style-number-dot ${Styles["pf-style-number-dot"]}`}>
                <li className={`number-dot ${PFStyles["pf-number-dot"]}`}>
                    <span className={`title-text ${PFStyles["pf-sub-title"]}`}>
                        {t("pf_subtitle_in_game_verifier_tool", { ns: "Common" })}
                    </span>
                    <ul className="desc">
                        <li>{t("original_pf_verifier_tool_para_1", { ns: "Common" })}</li>
                        <li>
                            <T keyName={"pf_verifier_tool_para_2"} params={{ gamename: displayName }} ns="Common"></T>
                        </li>
                        <li>{t("crash_pf_verifier_tool_para_3", { ns: "Common" })}</li>

                        <div
                            className={`${Styles["pf-block-highlight-text"]} ${PFStyles["pf-block-highlight-text"]} ${
                                locale === "en" ? Styles["pf-block-highlight-text-en"] : ""
                            }`}
                        >
                            <div style={{ fontSize: "1.4rem" }}>
                                <strong>{t("pf_final_result", { ns: "Common" })}</strong> = 2 ^ 32 / (
                                <span className={Styles["pf-text-highlight-red"]}>X</span> + 1) * (1 - 0.03)
                            </div>
                        </div>

                        <ul className="desc">
                            <li>{<Markup content={t("crash_pf_verifier_tool_para_5", { ns: "Common" })} />} </li>
                            <li>{<Markup content={t("crash_pf_verifier_tool_para_6", { ns: "Common" })} />} </li>
                            <li>{<Markup content={t("crash_pf_verifier_tool_para_7", { ns: "Common" })} />} </li>
                            <li>{<Markup content={t("crash_pf_verifier_tool_para_8", { ns: "Common" })} />} </li>
                            <li>{<Markup content={t("crash_pf_verifier_tool_para_9", { ns: "Common" })} />} </li>
                        </ul>

                        <div className={Styles["center-img"]}>
                            <table className={`${PFStyles["pf-bet-details-table"]} ${Styles["pf-bet-details-table-sedie"]}`}>
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

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_verifier_tool_step_by_step", { ns: "Common" })} />}
                        </p>

                        <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_step_1_para_10", { ns: "CrashX" })} />}
                            </li>

                            {renderBetDetailsExample(t, crashPoint)}

                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_step_2", { ns: "Common" })} />}
                            </li>

                            {renderVerifyExample(
                                t,
                                serverSeedSHA256,
                                serverSeed,
                                combinedSHA512Hash,
                                mergeClientSeed,
                                resultBlock(t, crashPoint),
                                crashPoint
                            )}

                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_step_3", { ns: "Common" })} />}
                            </li>
                            {renderVerifyDetailExample(t, mergeClientSeed, serverSeed, combinedSHA512Hash)}
                        </ul>
                    </ul>
                </li>
                <li className={`number-dot ${PFStyles["pf-number-dot"]}`}>
                    <span className={`title-text ${PFStyles["pf-sub-title"]}`}>
                        {t("pf_subtitle_online_third_party_verifier_tools", { ns: "Common" })}
                    </span>
                    <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: "Common" })} />}</li>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: "Common" })} />}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

const renderPopupHeader = (headerTitleKey: string, nameSpace: string, t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={` ${Styles["pf-setting-header-sedie"]}`}>
            <div>
                <span>{iconQuestion}</span>
            </div>
            <span className={Styles["pf-verify-header-title"]}>{uppercaseToTitleCase(t(headerTitleKey, { ns: nameSpace }))}</span>
            <div>
                <span className={`${Styles["pf-verify-icon"]} ${Styles["pf-verify-icon-back"]}`}>{iconClose}</span>
            </div>
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
                <li>{t("pf_how_is_pf_applied_in_game_para_2", { ns: "Common" })}</li>
                <li>{<Markup content={t("pf_how_is_pf_applied_in_game_para_3", { ns: "Common" })} />}</li>
                <li>{t("crash_pf_how_is_pf_applied_in_game_para_4", { ns: "Common" })}</li>
            </ul>
            {renderPFAppliedExample(t, imgVersion)}
        </div>
    );
};

const CrashXPFGuideContent: FC<CrashXPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["Common", "SabaNumber"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";

    return (
        <div className={`game-guide ${PFStyles["original-guides"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg)}
            {renderPFAppliedInGame(t, displayName ?? "", verImg, false)}
            {renderCrashXVerifyPF(t, locale, displayName ?? "", verImg)}
        </div>
    );
};

export default CrashXPFGuideContent;
