import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import { FC } from "react";
import { useImgVersionContext } from "../../../contexts/img-version";
import { PlinkoPFContentsProps } from "./type";
import Styles from "../snng-base/pf.module.scss";
import { renderPFAppliedInGame } from "../snng-base";
import { Markup } from "interweave";

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

const renderContentPFBase = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    displayName: string,
    imgVersion: string,
    locale: string
) => {
    return (
        <>
            {renderAdvertisePF(t, displayName || "", imgVersion)}
            {renderPFInfo(t)}
            {renderHowPFWork(t, imgVersion, locale)}
        </>
    );
};

const renderAdvertisePF = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div>
            <div className={`${Styles["pf-main-title"]} ${Styles["pf-main-title-sedie"]}`}>
                {t("pf_advertise_para_1", { ns: "Common" })}
            </div>
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

const renderDiceImage = (imageName: string) => {
    return (
        <div className="d-flex justify-content-center">
            <img
                style={{ width: "31px", height: "31px" }}
                src={`/static/images/sedie-multiplayer/bet-detail-${imageName}.svg`}
                alt={imageName}
            />
        </div>
    );
};

const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string, locale: string) => {
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
            {renderPFWorkExample(t, imgVersion, locale, imgVersion)}
        </div>
    );
};

const renderPFWorkExample = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string, locale: string, verImg: string) => {
    return (
        <div className="center-img">
            <img className="img img-border" src={`./static/images/chinese-blackjack/pf/chart_${locale}.png?v=${verImg}`} alt="chart"></img>
        </div>
    );
};

const resultBlock = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
    return (
        <div className={Styles["pf-result-block"]}>
            <div
                className="text-white"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {t("glossary_round_id", { ns: "SabaNumber" })}: {drawId}
                <div className={Styles["pf-verify-info-item"]}>{t("pf_result", { ns: "Common" })}: 5.6x</div>
            </div>
            <div
                className="text-white"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                }}
            >
                {t("mode", { ns: "Plinko" })}: {t("mode_low", { ns: "Plinko" })}
                <div className={Styles["pf-verify-info-item"]}>{t("row", { ns: "Plinko" })}: 8</div>
            </div>
        </div>
    );
};

const renderBetDetailsExample = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
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

            <div className={Styles["pf-verify-note"]} style={{ fontSize: "var(--font-size)", color: "white", fontStyle: "normal" }}>
                {t("pf_note_data_available", { ns: "Common" })}
            </div>

            <div className={`${Styles["pf-verify-draw-info-sedie"]}`}>
                <div className={Styles["pf-verify-info-item"]}>
                    <strong>
                        {t("glossary_round_id", { ns: "SabaNumber" })}: {drawId}
                    </strong>
                </div>
                <div className={Styles["pf-verify-info-item"]}>
                    {t("pf_result", { ns: "Common" })}:<div className={Styles["pf-result-dot-container"]}>5.6x</div>
                </div>
            </div>

            <div className={`${Styles["pf-verify-PF"]} ${Styles["pf-verify-PF-sedie"]}`}>
                <span className={Styles["pf-verify-icon"]}>{iconPF2}</span>
                <div className={Styles["pf-verify-PF-text"]}>{t("pf_provably_fair", { ns: "Common" })}</div>
            </div>

            <table className={`${Styles["pf-bet-details-table"]} ${Styles["pf-bet-details-table-sedie"]}`}>
                <thead>
                    <tr>
                        <th>{t("mode", { ns: "Plinko" })}</th>
                        <th>{t("pf_bet_choice", { ns: "SabaNumber" })}</th>
                        <th>{t("bet_amount", { ns: "SeDieMultiPlayer" })}</th>
                        <th>{t("pf_win", { ns: "SabaNumber" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>{t("mode_low", { ns: "Plinko" })}</div>
                        </td>
                        <td>8</td>
                        <td className={Styles["pf-text-highlight"]}>100</td>
                        <td className={Styles["pf-text-highlight"]}>1000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderClientSeedInfoExample = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    randomNumber: string,
    mergeServerSeed: string
) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]} ${Styles["pf-verify-example-sedie"]}`}>
            {renderPFHeader(t)}
            {resultBlock(t, "1073")}

            <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                <div className="flex justify-between items-center" style={{ marginBottom: "0.5rem" }}>
                    <div className={Styles["pf-verify-section-title"]}>{t("pf_your_seed", { ns: "Common" })}</div>
                    <div
                        className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-fix-width"]}`}
                        style={{ textAlign: "center", lineHeight: "3.4rem" }}
                    >
                        <span>{randomNumber}</span>
                        <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                    </div>
                </div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{mergeServerSeed}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
            </div>
            <div className={Styles["pf-verify-section-title"]}>
                {t("pf_total_players", { ns: "SabaNumber" })} <span className={Styles["pf-text-highlight-original-bold"]}>15</span>
            </div>
            <table className={`${Styles["pf-bet-details-table"]} ${Styles["pf-bet-details-table-sedie"]}`}>
                <thead>
                    <tr>
                        <th>{t("example_Player", { ns: "BandarQiuQiu" })}</th>
                        <th>{t("pf_nickname", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_seed", { ns: "SabaNumber" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>A***255</td>
                        <td>4028</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>B***857</td>
                        <td>7411</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>I***080</td>
                        <td>1746</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>R***247</td>
                        <td>6754</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>T***322</td>
                        <td>4991</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>B***736</td>
                        <td>9384</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>C***263</td>
                        <td>1403</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>C***679</td>
                        <td>2135</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>G***855</td>
                        <td>4206</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>M***307</td>
                        <td>4324</td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>S***958</td>
                        <td>4810</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td className={Styles["pf-text-highlight-green-sedie"]}>Dragon72864</td>
                        <td className={Styles["pf-text-highlight-green-sedie"]}>7842</td>
                    </tr>
                </tbody>
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
            {renderPFHeader(t)}

            <div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{mergeServerSeed}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconEdit}</span>
                </div>

                <div className={Styles["pf-verify-section-title"]} style={{ marginTop: "1rem" }}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={Styles["pf-verify-input-text"]}>{<Markup content={serverSeed} />}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>

                <div className={Styles["pf-verify-section-title"]} style={{ marginTop: "1rem" }}>
                    {t("pf_header_combined_sha512_hash", { ns: "Common" })}
                </div>
                <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                <p className={Styles["pf-text-highlight-green"]}>{t("pf_verification_msg_verify_successful", { ns: "SabaNumber" })}</p>

                <div className={Styles["pf-verify-block-form"]} style={{ fontSize: "var(--font-size)", backgroundColor: "#101721" }}>
                    <div className="flex gap-3 items-center justify-between">
                        <h3 className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                            {<Markup content={t("pf_bacball_final result", { ns: "BacBall" })} />}
                        </h3>
                        <div className="flex items-center">{t("title_multiplier", { ns: "Common" })}: 1x</div>
                    </div>
                    <div className="flex gap-3 mt-2 items-center justify-between">
                        <div style={{ marginBottom: "0" }}>
                            {<Markup content={t("mode", { ns: "Plinko" })} />}: {t("mode_low", { ns: "Plinko" })}
                        </div>
                        <div className="flex items-center">{t("row", { ns: "Plinko" })}: 8</div>
                    </div>
                    <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                    <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                    <div className={Styles["pf-verify-section-title"]}>{t("pf_verification_para_3", { ns: "SabaNumber" })}</div>
                    <p className="bold">5f ={">"} 95 mod 2 = 1</p>
                    <p className="bold">4b ={">"} 75 mod 2 = 1</p>
                    <p className="bold">f8 ={">"} 248 mod 2 = 0</p>
                    <p className="bold">bd ={">"} 189 mod 2 = 1</p>
                    <p className="bold">4b ={">"} 75 mod 2 = 1</p>
                    <p className="bold">29 ={">"} 41 mod 2 = 1</p>
                    <p className="bold">c6 ={">"} 198 mod 2 = 0</p>
                    <p className="bold">ec ={">"} 236 mod 2 = 0</p>
                    <p>
                        {t("slot_index", { ns: "Plinko" })}: 1 + 1 + 0 + 1 + 1 + 1 + 0 + 0 = <span>5</span>
                    </p>
                    <div className="d-flex gap-5 items-center">
                        <div className="flex flex-column">
                            <p>0</p>
                            <p>5.6</p>
                        </div>
                        <div className="flex flex-column">
                            <p>1</p>
                            <p>2.1</p>
                        </div>
                        <div className="flex flex-column">
                            <p>2</p>
                            <p>1.1</p>
                        </div>
                        <div className="flex flex-column">
                            <p>3</p>
                            <p>1</p>
                        </div>
                        <div className="flex flex-column">
                            <p>4</p>
                            <p>0.5</p>
                        </div>
                        <div className={`${Styles["pf-text-highlight"]} flex flex-column`}>
                            <p>5</p>
                            <p>1</p>
                        </div>
                        <div className="flex flex-column">
                            <p>6</p>
                            <p>1.1</p>
                        </div>
                        <div className="flex flex-column">
                            <p>7</p>
                            <p>2.1</p>
                        </div>
                        <div className="flex flex-column">
                            <p>8</p>
                            <p>5.6</p>
                        </div>
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

const renderVerifyExample = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    serverSeedSHA256: string,
    serverSeed: string,
    combinedSHA512Hash: string,
    mergeClientSeed: string,
    resultBlock: any
) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]} ${Styles["pf-verify-example-sedie"]}`}>
            {renderPFHeader(t)}
            {resultBlock}
            <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_server_seed_sha256", { ns: "Spaceflight" })}</div>
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
            <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                    <span className={`${Styles["pf-verify-input-text"]}`}>{mergeClientSeed}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
            </div>
            <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <span className={Styles["pf-verify-icon-info"]}>{iconInfo}</span>
                <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`} style={{ marginTop: "1.2rem" }}>
                    <span className={`${Styles["pf-verify-input-text"]} text-center`}>{combinedSHA512Hash}</span>
                    <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                </div>
            </div>
            <div className={Styles["pf-verify-button-green"]} style={{ fontSize: "1.4rem" }}>
                {t("pf_verify", { ns: "Spaceflight" })}
            </div>
            <div className="text-center" style={{ marginTop: "1rem", fontSize: "1.4rem" }}>
                {t("pf_provably_fair_para_2", { ns: "Spaceflight" })}
            </div>
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

const renderPFSettingsExample = (t: TFnType<DefaultParamType, string, TranslationKey>, randomNumber: string, serverSeedSHA256: string) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]} ${Styles["pf-verify-example-sedie"]}`}>
            {renderPopupHeader("pf_title_provably_fair_settings", "Common", t)}
            <div>
                <p>{t("pf_setting_para_1", { ns: "SabaNumber" })}</p>
                <p>{t("pf_settings_para_2", { ns: "Common" })}</p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                    <div className={Styles["pf-verify-option"]}>
                        <div className={Styles["pf-verify-option-radio"]} style={{ color: "#fff" }}>
                            <span className={Styles["pf-verify-icon"]}>{iconChecked}</span>
                            <span className={Styles["pf-verify-check-label"]}>{t("pf_random", { ns: "Common" })}</span>
                        </div>

                        <div
                            className={`${Styles["pf-verify-input-focus"]} ${Styles["pf-verify-input-fix-width"]}`}
                            style={{ background: "#182130" }}
                        >
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

                        <div
                            className={`${Styles["pf-verify-input-focus"]} ${Styles["pf-verify-input-fix-width"]}`}
                            style={{ color: "#fff", background: "#182130", border: "none" }}
                        ></div>
                    </div>
                </div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_server_seed_sha256", { ns: "Spaceflight" })}</div>
                <div className={`${Styles["pf-verify-block-form"]} ${Styles["pf-verify-block-form-sedie"]}`}>
                    <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                        <span className={Styles["pf-verify-input-text"]}>{serverSeedSHA256}</span>
                        <span className={Styles["pf-verify-icon"]}>{iconCopy}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderPlinkoVerifyPF = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    locale: string | undefined,
    displayName: string,
    imgVersion: string
) => {
    const iconPF = `<img src="/static/images/pf-snng/pf-guide.svg" alt="pf-verify" />`;
    const serverSeedSHA256 = "58cd2187b7e31612aecce94fbb254209e31b294eb41db6969176f04e71b50e2a";
    const randomNumber = "1008";
    const serverSeed = "i8G8SRghnLh5fn8duKRndDyQ2fcvBDyHjM3rBcEq";
    const mergeServerSeed = "{“random”:“37;1;72;71”,“secret”:pYYVdOj7TaMqbJn0AZPE7mfO5Vi2TiUp”";
    const combinedSHA512Hash =
        "5f4bf8bd4b29c6ec09ccc99ecddd2f643e36e4c7b4ec973ee57a909b373cb82ca3d66057802bec61a9cfaa99461f22342bc015d4d03b32ad406c498ce8a2ff91";
    const drawId = "1073";
    const combinedHashExample =
        "d662aefd7de9e24ae822d472d502798098ee0adaa91642dbd1efdd93987d464fb537fba22b002b5ec91d4f0a3fb98d404b78feac4650568fd6c279eb097d8cb9";
    const mergeClientSeed = "1008";

    return (
        <div className="guide-item">
            <h2>{t("pf_title_verify_the_provably_fair", { ns: "Common" })}</h2>
            <ul className={`style-number-dot ${Styles["pf-style-number-dot"]}`}>
                <li className={`number-dot ${Styles["pf-number-dot"]}`}>
                    <span className={`title-text ${Styles["pf-sub-title"]}`}>
                        {t("pf_subtitle_in_game_verifier_tool", { ns: "Spaceflight" })}
                    </span>
                    <ul className="desc">
                        <li>{t("pf_verifier_tool_para_1", { ns: "SeDieMultiPlayer" })}</li>
                        <li>
                            <T keyName={"pf_verifier_tool_para_2"} params={{ gamename: displayName }} ns="Common"></T>
                        </li>
                        <li>{t("pf_verifier_tool_para_3", { ns: "Plinko" })}</li>

                        <div
                            className={`${Styles["pf-block-highlight-text"]} ${
                                locale === "en" ? Styles["pf-block-highlight-text-en"] : ""
                            }`}
                        >
                            <div style={{ fontSize: "1.4rem" }}>
                                <strong>{t("pf_verifier_tool_para_4", { ns: "Plinko" })}</strong>
                            </div>
                        </div>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_5", { ns: "Plinko" })} />}
                        </li>
                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_6", { ns: "Plinko" })} />}
                        </li>
                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_7", { ns: "Plinko" })} />}
                        </li>
                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_8", { ns: "Plinko" })} />}
                        </li>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {t("pf_bacball_verifier_tool_para_10", { ns: "BacBall" })}
                        </span>

                        <div className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_header_combined_sha512_hash", { ns: "Common" })} />}
                        </div>
                        <div className={`flex ${Styles["pf-hash-example-container"]}`}>{combinedHashExample}</div>

                        <p>{<Markup content={t("pf_content_1_combined_sha512_hash", { ns: "Plinko" })} />}</p>
                        <p>{<Markup content={t("pf_content_2_combined_sha512_hash", { ns: "Plinko" })} />}</p>

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_20", { ns: "BacBall" })} />}
                        </p>
                        <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_21", { ns: "BacBall", icon: iconPF })} />}
                            </li>
                            {renderPFSettingsExample(t, randomNumber, serverSeedSHA256)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_22a", { ns: "SabaNumber" })} />}
                            </li>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_23a", { ns: "SabaNumber" })} />}
                            </li>
                            {renderBetDetailsExample(t, drawId)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_24", { ns: "BacBall" })} />}

                                <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                                    <li>{<Markup content={t("pf_bacball_verifier_tool_para_25", { ns: "BacBall" })} />}</li>
                                </ul>
                            </li>
                            {renderVerifyExample(
                                t,
                                serverSeedSHA256,
                                serverSeed,
                                combinedSHA512Hash,
                                mergeClientSeed,
                                resultBlock(t, drawId)
                            )}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_26", { ns: "BacBall" })} />}
                            </li>
                            {renderVerifyDetailExample(t, mergeClientSeed, serverSeed, combinedSHA512Hash)}
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

const PlinkoPFGuideContent: FC<PlinkoPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["Plinko", "Common", "SabaNumber", "Spaceflight", "BandarQiuQiu", "BacBall"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg, locale ?? "")}
            {renderPFAppliedInGame(t, displayName ?? "", verImg, false)}
            {renderPlinkoVerifyPF(t, locale, displayName ?? "", verImg)}
        </div>
    );
};

export default PlinkoPFGuideContent;
