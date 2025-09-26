import { FC } from "react";
import { Markup } from "interweave";
import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import Styles from "../snng-base/pf.module.scss";
import { SeDieMultiplayerPFContentsProps } from "./type";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderPFAppliedInGame } from "../snng-base";

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

const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_provably_fair_work", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</div>

            <div className={`${Styles["pf-block-highlight-text"]} ${Styles["pf-block-highlight-text-sedie"]}`}>
                <span style={{ textAlign: "center" }}>
                    <strong className={Styles["pf-text-highlight"]} style={{ fontSize: "1.4rem"}}>{t("pf_fair_result", { ns: "Common" })}</strong>
                    <strong className={Styles["pf-text-content"]} style={{ fontSize: "1.4rem"}}> = {t("pf_casino_contribution", { ns: "Common" })}</strong>
                    <strong className={Styles["pf-text-content"]} style={{ fontSize: "1.4rem"}}> + {t("pf_player_contribution", { ns: "Common" })}</strong>
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
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })} 1</span>
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })} 2</span>
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}...</span>
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

const resultBlock = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
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
                {t("glossary_round_id", { ns: "SabaNumber" })}: {drawId}
                <div className={Styles["pf-verify-info-item"]}>
                    {t("pf_result", { ns: "Common" })}:{renderDiceImage("white4")}
                </div>
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
                    {t("pf_result", { ns: "Common" })}:<div className={Styles["pf-result-dot-container"]}>{renderDiceImage("white4")}</div>
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
                        <th>{t("pf_bet_choice", { ns: "SabaNumber" })}</th>
                        <th>{t("bet_amount", { ns: "SeDieMultiPlayer" })}</th>
                        <th>{t("pf_win", { ns: "SabaNumber" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>17:02:43</td>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>{renderDiceImage("red3")}</div>
                        </td>
                        <td>200</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>17:02:42</td>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>{renderDiceImage("white3")}</div>
                        </td>
                        <td>200</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>17:02:41</td>
                        <td>{t("bet_choice_odd", { ns: "Common" })}</td>
                        <td>200</td>
                        <td>0</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className={Styles["pf-summary-row"]}>
                        <td className={Styles["pf-summary-label"]}>{t("pf_total", { ns: "Common" })}</td>
                        <td></td>
                        <td className={Styles["pf-text-not-highlight-original"]}>600</td>
                        <td className={Styles["pf-text-highlight-original"]}>0</td>
                    </tr>

                    <tr className={`${Styles["pf-summary-row"]} ${Styles["pf-summary-row-netprofit"]}`}>
                        <td className={Styles["pf-summary-label"]}>{t("win_loss", { ns: "Common" })}</td>
                        <td></td>
                        <td></td>
                        <td className={Styles["pf-text-not-highlight-original"]}>0</td>
                    </tr>
                </tfoot>
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
                    <div className="flex gap-3 items-center">
                        <h3 className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                            {<Markup content={t("pf_bacball_final result", { ns: "BacBall" })} />}
                        </h3>
                        <div className="flex items-center">{renderDiceImage("white4")}</div>
                    </div>
                    <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                    <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                    <div className={Styles["pf-verify-section-title"]}>{t("pf_verification_para_3", { ns: "SabaNumber" })}</div>
                    <p className="bold">e3 ={">"} 227</p>
                    <p className="bold">3d ={">"} 61</p>
                    <p className="bold">d2 ={">"} 210</p>
                    <p className="bold">a9 ={">"} 169</p>

                    <div>
                        <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 1</span>
                        <span>
                            {" "}
                            - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (37 + 227) mod 2 = 0 {"=>"}{" "}
                            {t("glossary_white", { ns: "SeDieMultiPlayer" })}
                        </span>
                    </div>
                    <div>
                        <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 2</span>
                        <span>
                            {" "}
                            - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (1 + 61) mod 2 = 0 {"=>"}{" "}
                            {t("glossary_white", { ns: "SeDieMultiPlayer" })}
                        </span>
                    </div>
                    <div>
                        <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 3</span>
                        <span>
                            {" "}
                            - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (72 + 210) mod 2 = 0 {"=>"}{" "}
                            {t("glossary_white", { ns: "SeDieMultiPlayer" })}
                        </span>
                    </div>
                    <div>
                        <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 4</span>
                        <span>
                            {" "}
                            - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (71 + 169) mod 2 = 0 {"=>"}{" "}
                            {t("glossary_white", { ns: "SeDieMultiPlayer" })}
                        </span>
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
                <span className={Styles["pf-verify-icon-info"]}>{iconInfo}</span>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <span className={Styles["pf-verify-link"]}>{t("pf_provably_fair_details", { ns: "SabaNumber" })}</span>
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
            <div className={Styles["pf-verify-button-green"]} style={{ fontSize: "1.4rem" }}>{t("pf_verify", { ns: "Spaceflight" })}</div>
            <div className="text-center" style={{ marginTop: "1rem", fontSize: "1.4rem" }}>
                {t("pf_provably_fair_para_2", { ns: "Spaceflight" })}
            </div>
        </div>
    );
};

const renderSeDieMultiplayerVerifyPF = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    locale: string | undefined,
    displayName: string,
    imgVersion: string
) => {
    const iconPF = `<img src="/static/images/pf-snng/pf-guide.svg" alt="pf-verify" />`;
    const serverSeedSHA256 = "295be5037f34988531577bc4b2f070681c99f1bcc7885018762521d4447c2485";
    const randomNumber = "7842";
    const serverSeed = "{&quot;random&quot;:&quot;37;1;72;71&quot;,&quot;secret&quot;:&quot;pYYVdOj7TaMqbJn0AZPE7mfO5Vi2TiUp;}";
    const mergeServerSeed = "{“random”:“37;1;72;71”,“secret”:pYYVdOj7TaMqbJn0AZPE7mfO5Vi2TiUp”";
    const combinedSHA512Hash =
        "e33dd2a9c3921aa9ea9c93528a4cdb4e8a6e405aa9592c3ccfa3f4c31d67190108371f2c61f839d0aca4c0638c705dc592858770cb8f5b25a408a2ac6603eda4";
    const drawId = "1073";
    const combinedHashExample =
        "d662aefd7de9e24ae822d472d502798098ee0adaa91642dbd1efdd93987d464fb537fba22b002b5ec91d4f0a3fb98d404b78feac4650568fd6c279eb097d8cb9";
    const mergeClientSeed = "604684676893831440990810328513133527842945619939";

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
                        <li>{t("pf_spaceflight_verifier_tool_para_3", { ns: "Spaceflight" })}</li>

                        <ul className={Styles["pf-sub-desc"]}>
                            <li>{<Markup content={t("pf_verifier_tool_para_4", { ns: "SeDieMultiPlayer" })} />}</li>
                            <li>{<Markup content={t("pf_verifier_tool_para_5", { ns: "SeDieMultiPlayer" })} />}</li>
                        </ul>

                        <div
                            className={`${Styles["pf-block-highlight-verify"]}`}
                        >
                            <div className={Styles["pf-text-highlight"]} >
                                {<Markup content={t("pf_bacball_verifier_tool_para_7", { ns: "BacBall" })} />}
                            </div>
                            <div >
                                &#123;“random”:“
                                <span className={Styles["pf-text-highlight-blue"]}>
                                    {t("pf_server_seed_format_random_player", { ns: "SeDieMultiPlayer" })}
                                </span>
                                ”,“secret”:“
                                {t("pf_server_seed_format_secret", { ns: "BacBall" })}”&#125;
                            </div>
                        </div>

                        <li>{t("pf_verifier_tool_para_7", { ns: "SeDieMultiPlayer" })}</li>

                        <div
                            className={`${Styles["pf-block-highlight-text"]} ${
                                locale === "en" ? Styles["pf-block-highlight-text-en"] : ""
                            }`}
                        >
                            <div style={{ fontSize: "1.4rem"}}>
                                <strong>{t("pf_final_result", { ns: "SeDieMultiPlayer" })}</strong> = (
                                {t("pf_algorithm_random_number", { ns: "BacBall" })} +{" "}
                                <span className={Styles["pf-text-highlight-red"]}>X</span>) mod 2
                            </div>
                        </div>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_9", { ns: "SeDieMultiPlayer" })} />}
                        </li>
                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_10", { ns: "SeDieMultiPlayer" })} />}
                        </li>
                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_11", { ns: "SeDieMultiPlayer" })} />}
                        </li>
                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_12", { ns: "SeDieMultiPlayer" })} />}
                        </li>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {t("pf_bacball_verifier_tool_para_10", { ns: "BacBall" })}
                        </span>

                        <div className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_header_combined_sha512_hash", { ns: "Common" })} />}
                        </div>
                        <div className={`flex ${Styles["pf-hash-example-container"]}`}>{combinedHashExample}</div>
                        <div className={Styles["pf-convert-hash-sedie"]} style={{ marginTop: "80px", marginBottom: "80px" }}>
                            <div className="bold text-white text-center" style={{ fontSize: "2rem" }}>
                                <span className={Styles["color-ball-1"]}>d6</span>
                                <span className={Styles["color-ball-2"]}>62</span>
                                <span className={Styles["color-ball-3"]}>ae</span>
                                <span className={Styles["color-ball-4"]}>fd</span>7de...
                            </div>
                            <div className={Styles["convert-hash-1"]}>
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeDieMultiPlayer", value: "1" })} />}
                                </div>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                            </div>

                            <div className={Styles["convert-hash-2"]}>
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeDieMultiPlayer", value: "2" })} />}
                                </div>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                            </div>

                            <div className={Styles["convert-hash-3"]}>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeDieMultiPlayer", value: "3" })} />}
                                </div>
                            </div>

                            <div className={Styles["convert-hash-4"]}>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeDieMultiPlayer", value: "4" })} />}
                                </div>
                            </div>
                        </div>

                        <p>{<Markup content={t("pf_content_1_combined_sha512_hash", { ns: "SeDieMultiPlayer" })} />}</p>
                        <p>{<Markup content={t("pf_content_2_combined_sha512_hash", { ns: "SeDieMultiPlayer" })} />}</p>
                        <p>{<Markup content={t("pf_content_3_combined_sha512_hash", { ns: "SeDieMultiPlayer" })} />}</p>

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
                            {renderClientSeedInfoExample(t, randomNumber, mergeClientSeed)}
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
                            <span className={Styles["pf-verify-icon"]}>{iconUnCheck}</span>
                            <span className={Styles["pf-verify-check-label"]}>{t("pf_random", { ns: "Common" })}</span>
                        </div>

                        <div
                            className={`${Styles["pf-verify-input-focus"]} ${Styles["pf-verify-input-fix-width"]}`}
                            style={{ color: "#fff", background: "#182130", border: "none" }}
                        >
                            {randomNumber}
                        </div>
                    </div>
                    <div className={Styles["pf-verify-option"]}>
                        <div className={Styles["pf-verify-option-radio"]}>
                            <span className={Styles["pf-verify-icon"]}>{iconChecked}</span>
                            <span className={`${Styles["pf-verify-check-label"]} text-center`}>
                                {t("pf_manual_input", { ns: "Common" })} <br /> (0 - 9999)
                            </span>
                        </div>

                        <div
                            className={`${Styles["pf-verify-input-focus"]} ${Styles["pf-verify-input-fix-width"]}`}
                            style={{ background: "#182130" }}
                        >
                            7842
                        </div>
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

const SeDieMultiplayerPFGuideContent: FC<SeDieMultiplayerPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["SeDieMultiPlayer", "Common", "SabaNumber", "Spaceflight", "BandarQiuQiu", "BacBall"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg)}
            {renderPFAppliedInGame(t, displayName ?? "", verImg, false)}
            {renderSeDieMultiplayerVerifyPF(t, locale, displayName ?? "", verImg)}
        </div>
    );
};

export default SeDieMultiplayerPFGuideContent;
