import { FC } from "react";
import { Markup } from "interweave";
import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import Styles from "../snng-base/pf.module.scss";
import { SeDieMultiplayerPFContentsProps } from "./type";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase, renderPFSettingsExample, renderPopupHeader } from "../snng-base";

const iconCopy = <img src="./static/images/pf-snng/pf-verify-icon-copy.svg" alt="pf-icon" />;
const iconCSV = <img src="./static/images/pf-snng/pf-verify-icon-csv.svg" alt="pf-icon" />;
const iconEdit = <img src="./static/images/pf-snng/pf-verify-icon-edit.svg" alt="pf-icon" />;
const iconPF2 = <img src="./static/images/pf/sedie/bet-details-pf.png" alt="bet-details-pf-icon" />;
const iconInfo = <img src="./static/images/pf-snng/pf-verify-icon-info.svg" alt="pf-icon" />;
const iconBack = <img src="./static/images/pf/sedie/icon-back.svg" alt="icon-back" />;

const resultBlock = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
    return (
        <div className={Styles["pf-result-block"]}>
            <div
                className="bold text-white"
                style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {t("glossary_round_id", { ns: "SabaNumber" })}: {drawId}
                <div className={Styles["pf-verify-info-item"]}>
                    {t("pf_result", { ns: "Common" })}:
                    <div className={Styles["pf-result-dot-container"]}>
                        <div className={Styles["pf-result-dot-row"]}>
                            <div className={Styles["dot-odd"]} />
                            <div className={Styles["dot-even"]} />
                        </div>
                        <div className={Styles["pf-result-dot-row"]}>
                            <div className={Styles["dot-even"]} />
                            <div className={Styles["dot-even"]} />
                        </div>
                    </div>
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

            <div className={Styles["pf-verify-note"]}>{t("pf_note_data_available", { ns: "Common" })}</div>

            <div className={`${Styles["pf-verify-draw-info-sedie"]}`}>
                <div className={Styles["pf-verify-info-item"]}>
                    <strong>
                        {t("glossary_round_id", { ns: "SabaNumber" })}: {drawId}
                    </strong>
                </div>
                <div className={Styles["pf-verify-info-item"]}>
                    {t("pf_result", { ns: "Common" })}:
                    <div className={Styles["pf-result-dot-container"]}>
                        <div className={Styles["pf-result-dot-row"]}>
                            <div className={Styles["dot-odd"]} />
                            <div className={Styles["dot-even"]} />
                        </div>
                        <div className={Styles["pf-result-dot-row"]}>
                            <div className={Styles["dot-even"]} />
                            <div className={Styles["dot-even"]} />
                        </div>
                    </div>
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
                        <th>{t("pf_bet_amount", { ns: "Common" })}</th>
                        <th>{t("pf_win", { ns: "SabaNumber" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:00:00 PM</td>
                        <td className={Styles["pf-text-highlight"]}>Odd</td>
                        <td>100</td>
                        <td className={Styles["pf-text-highlight"]}>+200</td>
                    </tr>
                    <tr>
                        <td>12:00:00 PM</td>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-odd"]} />
                                    <div className={Styles["dot-even"]} />
                                </div>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-even"]} />
                                    <div className={Styles["dot-even"]} />
                                </div>
                            </div>
                        </td>
                        <td>100</td>
                        <td className={Styles["pf-text-highlight-red"]}>-100</td>
                    </tr>
                    <tr>
                        <td>12:00:00 PM</td>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-odd"]} />
                                    <div className={Styles["dot-odd"]} />
                                </div>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-odd"]} />
                                    <div className={Styles["dot-odd"]} />
                                </div>
                            </div>
                        </td>
                        <td>100</td>
                        <td className={Styles["pf-text-highlight-red"]}>-100</td>
                    </tr>
                    <tr>
                        <td>12:00:00 PM</td>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-even"]} />
                                    <div className={Styles["dot-odd"]} />
                                </div>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-even"]} />
                                    <div className={Styles["dot-odd"]} />
                                </div>
                            </div>
                        </td>
                        <td>100</td>
                        <td className={Styles["pf-text-highlight-red"]}>-100</td>
                    </tr>
                    <tr>
                        <td>12:00:00 PM</td>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-odd"]} />
                                    <div className={Styles["dot-even"]} />
                                </div>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-odd"]} />
                                    <div className={Styles["dot-odd"]} />
                                </div>
                            </div>
                        </td>
                        <td>100</td>
                        <td className={Styles["pf-text-highlight-red"]}>-100</td>
                    </tr>
                    <tr>
                        <td>12:00:00 PM</td>
                        <td>
                            <div className={Styles["pf-bet-choice-dots"]}>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-even"]} />
                                    <div className={Styles["dot-even"]} />
                                </div>
                                <div className={Styles["pf-dot-row"]}>
                                    <div className={Styles["dot-odd"]} />
                                    <div className={Styles["dot-even"]} />
                                </div>
                            </div>
                        </td>
                        <td>100</td>
                        <td className={Styles["pf-text-highlight-red"]}>-100</td>
                    </tr>
                    <tr>
                        <td>12:00:00 PM</td>
                        <td >Even</td>
                        <td>100</td>
                        <td className={Styles["pf-text-highlight-red"]}>-100</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className={Styles["pf-summary-row"]}>
                        <td colSpan={2} className={Styles["pf-summary-label"]}>
                            {t("pf_total", { ns: "Common" })}
                        </td>
                        <td className={Styles["pf-text-not-highlight"]}>100</td>
                        <td className={Styles["pf-text-highlight"]}>444.00M</td>
                    </tr>
                    <tr className={`${Styles["pf-summary-row"]} ${Styles["pf-summary-row-netprofit"]}`}>
                        <td colSpan={2} className={Styles["pf-summary-label"]}>
                            {t("pf_net_profit", { ns: "Common" })}
                        </td>
                        <td></td>
                        <td className={Styles["pf-text-highlight"]}>4,444.00M</td>
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
            {resultBlock(t, "123456")}

            <div className={Styles["pf-verify-block-form"]}>
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
                {t("pf_total_players", { ns: "SabaNumber" })} <span className={Styles["pf-text-highlight"]}>12</span>
                <span className={`${Styles["pf-verify-icon"]} ${Styles["icon-export"]}`}>{iconCSV}</span>
            </div>
            <table className={`${Styles["pf-bet-details-table"]} ${Styles["pf-client-seed-info-table"]}`}>
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
                        <td className={Styles["pf-text-highlight-green"]}>Dragon72864</td>
                        <td className={Styles["pf-text-highlight-green"]}>1991</td>
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

            <div className={Styles["pf-verify-block-form"]} style={{ fontSize: "1.1rem", backgroundColor: "#101721" }}>
                <div className="flex gap-3 items-center">
                    <h3 className={Styles["pf-verify-section-title"]}>
                        {<Markup content={t("pf_bacball_final result", { ns: "BacBall" })} />}
                    </h3>
                    <div className="flex gap-4 items-center">
                        <div className={Styles["pf-result-dot-container"]}>
                            <div className={Styles["pf-result-dot-row"]}>
                                <div className={Styles["dot-odd"]} />
                                <div className={Styles["dot-even"]} />
                            </div>
                            <div className={Styles["pf-result-dot-row"]}>
                                <div className={Styles["dot-even"]} />
                                <div className={Styles["dot-even"]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_verification_para_3", { ns: "SabaNumber" })}</div>
                <p className="bold">83 ={">"} 215</p>
                <p className="bold">65 ={">"} 215</p>
                <p className="bold">52 ={">"} 215</p>
                <p className="bold">f9 ={">"} 215</p>

                <div>
                    <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 1</span>
                    <span> {" "} - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (41 + 131) mode 2 = 0 ={" "} {t("glossary_white", { ns: "SeDieMultiPlayer" })} 1 = 1
                    </span>
                </div>
                <div>
                    <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 2</span>
                    <span> {" "} - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (41 + 131) mode 2 = 0 ={" "} {t("glossary_white", { ns: "SeDieMultiPlayer" })} 1 = 1
                    </span>
                </div>
                <div>
                    <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 3</span>
                    <span> {" "} - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (41 + 131) mode 2 = 0 ={" "} {t("glossary_white", { ns: "SeDieMultiPlayer" })} 1 = 1
                    </span>
                </div>
                <div>
                    <span className={`${Styles["pf-text-highlight"]}`}>{t("glossary_dice", { ns: "SeDieMultiPlayer" })} 4</span>
                    <span> {" "} - {t("pf_final_result", { ns: "SeDieMultiPlayer" })} = (41 + 131) mode 2 = 0 ={" "} {t("glossary_red", { ns: "SeDieMultiPlayer" })} 1 = 1
                    </span>
                </div>
            </div>
        </div>
    );
};

const renderPFHeader = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className={`${Styles["pf-verify-header-sedie"]}`}>
            <span className={`${Styles["pf-verify-icon"]}`}>{iconBack}</span>
            <span className={`${Styles["pf-verify-header-title"]} ${Styles["pf-verify-header-title-sedie"]}`}>
                {t("pf_provably_fair", { ns: "Common" })}
            </span>
            <span className={`${Styles["pf-verify-icon"]} ${Styles["pf-verify-icon-close-sedie"]}`}>
                <img src="./static/images/pf/sedie/pf-button-question.png" alt="button-pf-question" />
            </span>
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
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]} ${Styles["pf-verify-example-sedie"]}`}>
            {renderPFHeader(t)}
            {resultBlock}
            <div className={Styles["pf-verify-block-form"]}>
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
            <div className={Styles["pf-verify-button-green"]}>{t("pf_verify", { ns: "Spaceflight" })}</div>
            <div className="text-center" style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
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
    const serverSeedSHA256 = "06b2debe526f6544f55ed206d23f825a3a0b76dba0094bdd31ea285fe5166d5f";
    const randomNumber = "1991";
    const serverSeed =
        "{&quot;random&quot;:&quot;3;14&quot;,&quot;remain&quot;:&quot;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:19:20:21:22:23:24:26:27:28:29:30;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:18:19:20:21:22:23:24:25:26:28:29:30&quot;,&quot;secret&quot;:&quot;TGpH~Hr6m5T5KzOFCEcGVqNm624VJoi.&quot;}";
    const mergeServerSeed = "{“random”:“41;40;17;11”,“secret”:”Wblob91UE.”";
    const combinedSHA512Hash =
        "4eb1ec458c6001e7c12fe3ef534794cb3b0f670596b1c6e1a643106a9d9bfa61a0064838dec0db10d3e9f8b2676be9c41fe9ffa0d6abed796d02aef4b7af968d";
    const drawId = "53231";
    const combinedHashExample =
        "2624df77dcd9833bc56a1f9443e5f2634d9a164638ddaa3d4a76cc088b7c45b651f7126e36faf44586a122717ff96349b3f45fe018ccf4e91bf9724594dd7b1c";

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
                            className={`${Styles["pf-block-highlight-text"]} ${
                                locale === "en" ? Styles["pf-block-highlight-text-en"] : ""
                            }`}
                        >
                            <div className={Styles["pf-text-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_7", { ns: "BacBall" })} />}
                            </div>
                            <div>
                                &#123;“random”:“
                                <span className={Styles["pf-text-highlight-blue"]}>
                                    {t("pf_server_seed_format_random_player", { ns: "SeDieMultiPlayer" })}
                                </span>
                                ”,“secret”:“
                                {t("pf_server_seed_format_secret", { ns: "BacBall" })}”&#125;
                            </div>
                        </div>

                        <li>{t("pf_bacball_verifier_tool_para_8", { ns: "BacBall" })}</li>

                        <div
                            className={`${Styles["pf-block-highlight-text"]} ${
                                locale === "en" ? Styles["pf-block-highlight-text-en"] : ""
                            }`}
                        >
                            <div>
                                <strong>{t("pf_index_value", { ns: "SabaNumber" })}</strong> = ((
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
                        <img
                            className={Styles["pf-combined-hash-example-img"]}
                            src={`./static/images/pf/sedie/pf-combine-example.png?v=${imgVersion}`}
                            alt="pf"
                        />

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
                                mergeServerSeed,
                                combinedSHA512Hash,
                                resultBlock(t, drawId)
                            )}
                            {renderClientSeedInfoExample(t, randomNumber, mergeServerSeed)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_26", { ns: "BacBall" })} />}
                            </li>
                            {renderVerifyDetailExample(t, mergeServerSeed, serverSeed, combinedSHA512Hash)}
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

const renderPFAppliedInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    <T keyName={"pf_how_is_pf_applied_in_game_para_1"} params={{ gamename: displayName }} ns="Spaceflight" />
                </li>

                <li>{t("pf_how_is_pf_applied_in_game_para_2", { ns: "Common" })}</li>

                <li>{t("pf_how_is_pf_applied_in_game_para_3", { ns: "Common" })}</li>

                <li>{t("pf_how_is_pf_applied_in_game_para_4", { ns: "Spaceflight" })}</li>
            </ul>
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
            {renderPFAppliedInGame(t, displayName ?? "", verImg)}
            {renderSeDieMultiplayerVerifyPF(t, locale, displayName ?? "", verImg)}
        </div>
    );
};

export default SeDieMultiplayerPFGuideContent;
