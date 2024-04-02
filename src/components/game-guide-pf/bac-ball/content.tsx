import { FC } from "react";
import { Markup } from "interweave";
import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import Styles from "../snng-base/pf.module.scss";
import { BacBallPFContentsProps } from "./type";
import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase, renderPFSettingsExample, renderPopupHeader, renderVerifyExample } from "../snng-base";

const iconCopy = <img src="./static/images/pf-snng/pf-verify-icon-copy.svg" alt="pf-icon" />;
const iconPF = <img src="./static/images/pf-snng/pf-verify-icon-pf.svg" alt="pf-icon" />;
const iconCSV = <img src="./static/images/pf-snng/pf-verify-icon-csv.svg" alt="pf-icon" />;
const iconEdit = <img src="./static/images/pf-snng/pf-verify-icon-edit.svg" alt="pf-icon" />;

const renderBacBallAppliedInGame = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_is_pf_applied_in_game", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    <T keyName={"pf_how_is_pf_applied_in_game_para_1"} params={{ gamename: displayName }} ns="Spaceflight" />
                </li>
                <li>{t("pf_how_is_pf_applied_in_game_para_2", { ns: "BacBall" })}</li>
                <li>{t("pf_how_pf_work_para_3", { ns: "BacBall" })}</li>
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
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })} 1</span>
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })} 2</span>
                    <span>{t("example_Player", { ns: "BandarQiuQiu" })}...</span>
                </div>
            </div>
            <div className={Styles["pf-applied-example-block-2"]}>
                <div className={`text-center ${Styles["pf-text-highlight"]}`}>
                    {t("pf_combined Seed", { ns: "Spaceflight" })} <br />({t("pf_server_Seed", { ns: "Common" })} +{" "}
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

const resultBlock = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
    return (
        <div className={Styles["pf-result-block"]}>
            <div className="bold text-white" style={{ marginBottom: "0.5rem" }}>
                {t("glossary_draw_id", { ns: "SabaNumber" })}: {drawId} ({t("pf_3rd_draw", { ns: "BacBall" })})
            </div>
            <div className="flex justify-around">
                <div className="text-center">
                    <div className="text-white bold text-uppercase">{t("glossary_player", { ns: "BacBall" })}</div>
                    <div className={Styles["pf-balls-container"]}>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>25</span>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>18</span>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>28</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-white bold text-uppercase">{t("glossary_banker", { ns: "BacBall" })}</div>
                    <div className={Styles["pf-balls-container"]}>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>17</span>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>27</span>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>9</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderBetDetailsExample = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-3"]}`}>
            {renderPopupHeader("pf_bet_details", "Common", t)}

            <div className={Styles["pf-verify-draw-info"]}>
                <div className={Styles["pf-verify-info-item"]}>
                    <strong>
                        {t("glossary_draw_id", { ns: "SabaNumber" })}: {drawId}
                    </strong>
                </div>
                <div className={Styles["pf-verify-info-item"]}>
                    <strong className="text-uppercase">{t("glossary_player", { ns: "BacBall" })}</strong>
                    <div className={Styles["pf-verify-ball"]}>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>28</span>
                    </div>
                </div>

                <div className={Styles["pf-verify-info-item"]}>
                    <strong className="text-uppercase">{t("glossary_banker", { ns: "BacBall" })}</strong>
                    <div className={Styles["pf-verify-ball"]}>
                        <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>9</span>
                    </div>
                </div>
            </div>
            <div className={Styles["pf-verify-PF"]}>
                <span className={Styles["pf-verify-icon"]} style={{ paddingRight: "0.5rem" }}>
                    {iconPF}
                </span>
                {t("pf_provably_fair", { ns: "Common" })}
            </div>
            <table className={Styles["pf-bet-details-table"]}>
                <thead>
                    <tr>
                        <th>{t("pf_time", { ns: "SabaNumber" })}</th>
                        <th>{t("header_betoption", { ns: "Common" })}</th>
                        <th>{t("pf_bacball_odds", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_stake", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_win", { ns: "SabaNumber" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            17:27:59 <br /> 27/03/2024
                        </td>
                        <td className={Styles["pf-text-highlight"]}>{t("glossary_player", { ns: "BacBall" })}</td>
                        <td className={Styles["pf-text-highlight"]}>1.96</td>
                        <td className={Styles["pf-text-highlight"]}>20</td>
                        <td className={Styles["pf-text-highlight"]}>39.2</td>
                    </tr>
                    <tr>
                        <td>
                            17:27:58 <br /> 27/03/2024
                        </td>
                        <td className={Styles["pf-text-highlight"]}>{t("glossary_player", { ns: "BacBall" })}</td>
                        <td className={Styles["pf-text-highlight"]}>1.96</td>
                        <td className={Styles["pf-text-highlight"]}>20</td>
                        <td className={Styles["pf-text-highlight"]}>39.2</td>
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
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]}`}>
            {renderPopupHeader("pf_client_seed_info", "SabaNumber", t)}

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
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]}`}>
            {renderPopupHeader("pf_title_verification", "Common", t)}

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

            <div className={Styles["pf-verify-block-form"]} style={{ fontSize: "1.1rem" }}>
                <div className="flex justify-between items-center">
                    <h3 className={Styles["pf-verify-section-title"]}>
                        {<Markup content={t("pf_bacball_final result", { ns: "BacBall" })} />}
                    </h3>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-1">
                            <span className="text-uppercase bold text-white">{t("glossary_player", { ns: "BacBall" })}</span>
                            <div className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>28</div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-uppercase bold text-white">{t("glossary_banker", { ns: "BacBall" })}</span>
                            <div className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>9</div>
                        </div>
                    </div>
                </div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_verification_para_3", { ns: "SabaNumber" })}</div>
                <p className="bold">a2 ={">"} 162</p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_index_value", { ns: "SabaNumber" })}</span> = ((
                    {t("pf_algorithm_random_number", { ns: "BacBall" })} + X) mod {t("pf_number_of_balls_left", { ns: "SabaNumber" })} ) + 1
                </p>

                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_player_index", { ns: "SabaNumber" })} (1,..., 28)</span> = ((3 +
                    162) mod 28) + 1 = <span className={Styles["pf-text-highlight"]}>26</span>
                </p>

                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_banker_index", { ns: "SabaNumber" })} (1,..., 28)</span> = ((14 +
                    162) mod 28) + 1 = <span className={Styles["pf-text-highlight"]}>9</span>
                </p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_index_value_to_final_result", { ns: "SabaNumber" })}</div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_player_result", { ns: "SabaNumber" })}</div>
                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 19 20 21 22 23 24 26 27 <span style={{ color: "#ffbc11" }}>28 </span>29 30{" "}
                </p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_banker_result", { ns: "SabaNumber" })}</div>
                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 5 6 7 8 <span style={{ color: "#ffbc11" }}>9 </span>10 11 12 13 14 15 16 18 19 20 21 22 23 24 25 26 28 29 30{" "}
                </p>
            </div>
        </div>
    );
};

const renderBacBallVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, locale: string | undefined) => {
    const iconPF = `<img src="/static/images/pf-snng/icon-pf.svg" alt="pf-verify" />`;
    const serverSeedSHA256 = "06b2debe526f6544f55ed206d23f825a3a0b76dba0094bdd31ea285fe5166d5f";
    const randomNumber = "1991";
    const serverSeed =
        "{&quot;random&quot;:&quot;3;14&quot;,&quot;remain&quot;:&quot;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:19:20:21:22:23:24:26:27:28:29:30;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:18:19:20:21:22:23:24:25:26:28:29:30&quot;,&quot;secret&quot;:&quot;TGpH~Hr6m5T5KzOFCEcGVqNm624VJoi.&quot;}";
    const mergeServerSeed = "402874111746675449919384140321354206432448101991";
    const combinedSHA512Hash =
        "a2d7a0d5a61355268a2a72adae8fb7bb9770f53e8cbc2ee30990ce3bc5486652b70676b11bc51a4127e2852f212bc54c95abd9926f76e65a1da65323af876e30";
    const drawId = "53231";

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
                                    {t("pf_server_seed_format_random_player", { ns: "BacBall" })}
                                </span>
                                ;
                                <span className={Styles["pf-text-highlight-red"]}>
                                    {t("pf_server_seed_format_random_banker", { ns: "BacBall" })}
                                </span>
                                ”,“remain”:“
                                <span className={Styles["pf-text-highlight-blue"]}>
                                    {t("pf_server_seed_format_remain_player", { ns: "BacBall" })}
                                </span>
                                ;
                                <span className={Styles["pf-text-highlight-red"]}>
                                    {t("pf_server_seed_format_remain_banker", { ns: "BacBall" })}
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
                            <div className={Styles["pf-text-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_7", { ns: "BacBall" })} />}
                            </div>
                            <div>
                                <strong>{t("pf_index_value", { ns: "SabaNumber" })}</strong> = ((
                                {t("pf_algorithm_random_number", { ns: "BacBall" })} +{" "}
                                <span className={Styles["pf-text-highlight-red"]}>X</span>) mod{" "}
                                {t("pf_number_of_balls_left", { ns: "SabaNumber" })}) + 1
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
                            1 2 3 4 5 7 8 9 10 11 12 13 14 15 16 17 <span className={Styles["pf-text-highlight"]}>18</span> 19 20 21 22 23
                            24 25 26 27 28 29 30
                        </div>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_16", { ns: "BacBall" })} />}
                        </span>

                        <li>{t("pf_bacball_verifier_tool_para_17", { ns: "BacBall" })}</li>
                        <li>{<Markup content={t("pf_bacball_verifier_tool_para_18", { ns: "BacBall" })} />}</li>

                        <div className={Styles["pf-block-highlight-number"]}>
                            1 2 3 4 5 6 <span className={Styles["pf-text-highlight"]}>7</span> 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
                            24 25 26 27 28 29
                        </div>
                        <p>{<Markup content={t("pf_bacball_verifier_tool_para_19", { ns: "BacBall" })} />}</p>

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_20", { ns: "BacBall" })} />}
                        </p>
                        <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_21", { ns: "BacBall", icon: iconPF })} />}
                            </li>
                            {renderPFSettingsExample(t, randomNumber, serverSeedSHA256)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_22", { ns: "BacBall" })} />}
                            </li>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_23", { ns: "BacBall" })} />}
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

const BacBallPFGuideContent: FC<BacBallPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber", "Spaceflight", "BandarQiuQiu"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg)}
            {renderBacBallAppliedInGame(t, displayName ?? "", verImg)}
            {renderBacBallVerifyPF(t, locale)}
        </div>
    );
};

export default BacBallPFGuideContent;
