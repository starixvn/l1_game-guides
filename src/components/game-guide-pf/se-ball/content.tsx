import { FC } from "react";
import { Markup } from "interweave";
import { SeBallPFContentsProps } from "./type";
import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import { useImgVersionContext } from "../../../contexts/img-version";
import Styles from "../snng-base/pf.module.scss";
import { renderContentPFBase, renderPFAppliedInGame, renderPFSettingsExample, renderPopupHeader, renderVerifyExample } from "../snng-base";

const iconCopy = <img src="./static/images/pf-snng/pf-verify-icon-copy.svg" alt="pf-icon" />;
const iconPF = <img src="./static/images/pf-snng/pf-verify-icon-pf.svg" alt="pf-icon" />;
const iconCSV = <img src="./static/images/pf-snng/pf-verify-icon-csv.svg" alt="pf-icon" />;
const iconEdit = <img src="./static/images/pf-snng/pf-verify-icon-edit.svg" alt="pf-icon" />;

const resultBlock = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
    return (
        <div className={Styles["pf-result-block"]}>
            <div className="bold text-white" style={{ marginBottom: "0.5rem" }}>
                {t("pf_round", { ns: "Common" })}: {drawId}
            </div>
            <div className="flex justify-center" style={{ gap: "0.8rem" }}>
                <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>41</span>
                <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>5</span>
                <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>58</span>
                <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>48</span>
            </div>
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
                {t("pf_total_players", { ns: "SabaNumber" })} <span className={Styles["pf-text-highlight"]}>7</span>
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
                        <td>4862</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>B***857</td>
                        <td>0026</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className={Styles["pf-text-highlight-green"]}>Dragon72864</td>
                        <td className={Styles["pf-text-highlight-green"]}>6980</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>R***247</td>
                        <td>4995</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>T***322</td>
                        <td>7860</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>B***736</td>
                        <td>3736</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>C***263</td>
                        <td>8265</td>
                    </tr>
                </tbody>
            </table>
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
                        {t("pf_round", { ns: "Common" })}: {drawId}
                    </strong>
                </div>
                <div className={Styles["pf-verify-ball"]} style={{ gap: "0.8rem" }}>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>41</span>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>5</span>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>58</span>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>48</span>
                </div>
                -<div style={{ fontSize: "2.5rem" }}>152</div>
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
                        <th>{t("pf_bet_choice", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_bacball_odds", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_stake", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_win", { ns: "SabaNumber" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            09:15:21 <br /> 15/05/2024
                        </td>
                        <td className={Styles["pf-text-highlight"]}>
                            <img src={`./static/images/se-ball/red3.svg`} alt="guide-item" />
                        </td>
                        <td className={Styles["pf-text-highlight"]}>4</td>
                        <td className={Styles["pf-text-highlight"]}>10</td>
                        <td className={Styles["pf-text-highlight"]}>40</td>
                    </tr>
                    <tr>
                        <td>
                            09:15:21 <br /> 15/05/2024
                        </td>
                        <td>
                            <img src={`./static/images/se-ball/blue3.svg`} alt="guide-item" />
                        </td>
                        <td>4</td>
                        <td>10</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>
                            09:15:20 <br /> 15/05/2024
                        </td>
                        <td>{t("glossary_odd", { ns: "SeBall" })}</td>
                        <td>2</td>
                        <td>10</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>
                            09:15:20 <br /> 15/05/2024
                        </td>
                        <td>{t("glossary_odd", { ns: "SeBall" })}</td>
                        <td>2</td>
                        <td>10</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>
                            09:15:20 <br /> 15/05/2024
                        </td>
                        <td>{t("glossary_odd", { ns: "SeBall" })}</td>
                        <td>2</td>
                        <td>10</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>
                            09:15:20 <br /> 15/05/2024
                        </td>
                        <td>{t("glossary_odd", { ns: "SeBall" })}</td>
                        <td>2</td>
                        <td>10</td>
                        <td>0</td>
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
                <div className="flex items-center" style={{ gap: "1.2rem", marginBottom: "0.4rem" }}>
                    <h3 className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                        {<Markup content={t("pf_final_result", { ns: "Common" })} />}
                    </h3>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>41</span>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-blue"]}`}>5</span>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>58</span>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>48</span>
                </div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_verification_para_3", { ns: "SabaNumber" })}</div>
                <p className="bold mb-0">55 ={">"} 85</p>
                <p className="bold mb-0">14 ={">"} 20</p>
                <p className="bold mb-0">71 ={">"} 113</p>
                <p className="bold">c8 ={">"} 200</p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_index_value", { ns: "SabaNumber" })}</span> = ((
                    {t("pf_algorithm_random_number", { ns: "BacBall" })} + X) mod {t("pf_number_of_balls_left", { ns: "SabaNumber" })} ) + 1
                </p>

                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_verifier_tool_para_25", { ns: "SeBall" })}</span> = ((15 + 85) mod
                    60) + 1 = <span className={Styles["pf-text-highlight"]}>41</span>
                </p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_verifier_tool_para_26", { ns: "SeBall" })}</span> = ((43 + 20) mod
                    59) + 1 = <span className={Styles["pf-text-highlight"]}>5</span>
                </p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_verifier_tool_para_27", { ns: "SeBall" })}</span> = ((58 + 113) mod
                    58) + 1 = <span className={Styles["pf-text-highlight"]}>56</span>
                </p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_verifier_tool_para_28", { ns: "SeBall" })}</span> = ((16 + 200) mod
                    57) + 1 = <span className={Styles["pf-text-highlight"]}>46</span>
                </p>

                <div className={Styles["pf-verify-section-title"]}>{t("pf_index_value_to_final_result", { ns: "SabaNumber" })}</div>

                <div className="bold text-white">{t("pf_verifier_tool_para_29", { ns: "SeBall" })}</div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40{" "}
                    <span style={{ color: "#ffbc11" }}>41 </span> 42 43 44 45 46 47 48 50 51 52 53 54 55 56 57 58 59 60
                </p>

                <div className="bold text-white">{t("pf_verifier_tool_para_30", { ns: "SeBall" })}</div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 <span style={{ color: "#ffbc11" }}>5 </span> 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
                    30 31 32 33 34 35 36 37 38 39 40 42 43 44 45 46 47 48 50 51 52 53 54 55 56 57 58 59 60
                </p>

                <div className="bold text-white">{t("pf_verifier_tool_para_31", { ns: "SeBall" })}</div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 42 43 44 45
                    46 47 48 50 51 52 53 54 55 56 57 <span style={{ color: "#ffbc11" }}>58 </span> 59 60
                </p>

                <div className="bold text-white">{t("pf_verifier_tool_para_32", { ns: "SeBall" })}</div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 42 43 44 45
                    46 47 <span style={{ color: "#ffbc11" }}>48 </span> 50 51 52 53 54 55 56 57 59 60
                </p>
            </div>
        </div>
    );
};

const renderSeBallVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, locale: string | undefined, displayName: string) => {
    const iconPF = `<img src="/static/images/pf-snng/icon-pf.svg" alt="pf-verify" />`;
    const serverSeedSHA256 = "92bf266c74fb974e37332a4d676c42c8452ae843299d9afe726f7f78a9308028";
    const randomNumber = "6980";
    const serverSeed = "{&quot;random&quot;:&quot;15;43;58;16&quot;,&quot;secret&quot;:&quot;p7zgVz_YIK1cbr09F5pcbgtKqY1m._v5&quot;}";
    const mergeServerSeed = "4862002669804995786037368265";
    const combinedSHA512Hash =
        "551471c831934318abfa0893a45378cc11af25a3846bcd20de6352fb36af655b7438f9c36d96b3e99605970d2a2dc276f702346d2457f06d5e6bd45c94439cd6";
    const drawId = "87389";

    return (
        <div className="guide-item">
            <h2>{t("pf_title_verify_the_provably_fair", { ns: "Common" })}</h2>
            <ul className={`style-number-dot ${Styles["pf-style-number-dot"]}`}>
                <li className={`number-dot ${Styles["pf-number-dot"]}`}>
                    <span className={`title-text ${Styles["pf-sub-title"]}`}>
                        {t("pf_subtitle_in_game_verifier_tool", { ns: "Spaceflight" })}
                    </span>
                    <ul className="desc">
                        <li>{t("pf_verifier_tool_para_1", { ns: "Common" })}</li>
                        <li>
                            <T keyName={"pf_verifier_tool_para_2"} params={{ gamename: displayName }} ns="SabaNumber"></T>
                        </li>
                        <li>{t("pf_verifier_tool_para_3a", { ns: "SabaNumber" })}</li>

                        <ul className={Styles["pf-sub-desc"]}>
                            <li>{<Markup content={t("pf_verifier_tool_para_4", { ns: "SeBall" })} />}</li>
                            <li>{<Markup content={t("pf_verifier_tool_para_6", { ns: "SabaNumber" })} />}</li>
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
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 1</span>,{" "}
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 2</span>,{" "}
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 3</span>,{" "}
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 4</span>
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
                                <span className={Styles["pf-text-highlight-red"]}>X</span>) mod{" "}
                                {t("pf_number_of_balls_left", { ns: "SabaNumber" })}) + 1
                            </div>
                        </div>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_bacball_verifier_tool_para_9", { ns: "BacBall" })} />}
                        </li>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_10", { ns: "SeBall" })} />}
                        </li>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {t("pf_bacball_verifier_tool_para_10", { ns: "BacBall" })}
                        </span>

                        <li>
                            {t("pf_header_combined_sha512_hash", { ns: "Common" })}:
                            <div className={Styles["break-word"]}>
                                2624df77dcd9833bc56a1f9443e5f2634d9a164638ddaa3d4a76cc088b7c45b651f7126e36faf44586a122717ff96349b3f45fe018ccf4e91bf9724594dd7b1c
                            </div>
                        </li>

                        <div className={Styles["seball-convert-hash"]}>
                            <div className="bold text-white text-center" style={{ fontSize: "2rem" }}>
                                <span style={{ color: "#ED7D31" }}>26</span>
                                <span style={{ color: "#FFC000" }}>24</span>
                                <span style={{ color: "#70AD47" }}>df</span>
                                <span style={{ color: "#5B9BD5" }}>77</span>dcd...
                            </div>
                            <div className={Styles["convert-hash-1"]}>
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeBall", value: "1" })} />}
                                </div>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                            </div>

                            <div className={Styles["convert-hash-2"]}>
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeBall", value: "2" })} />}
                                </div>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                            </div>

                            <div className={Styles["convert-hash-3"]}>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeBall", value: "3" })} />}
                                </div>
                            </div>

                            <div className={Styles["convert-hash-4"]}>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SeBall", value: "4" })} />}
                                </div>
                            </div>
                        </div>

                        <li>
                            {t("pf_verifier_tool_para_11", { ns: "SeBall" })}
                            <div className={Styles["pf-has-highlight-red"]}>{<Markup content={"24 => <strong>X</strong> = 36"} />}</div>
                        </li>

                        <div className={`title-text ${Styles["pf-sub-title"]}`}>{t("pf_verifier_tool_para_12", { ns: "SeBall" })}</div>

                        <li>{t("pf_verifier_tool_para_13", { ns: "SeBall" })}</li>

                        <li>{t("pf_verifier_tool_para_14", { ns: "SeBall" })}</li>

                        <li>
                            {t("pf_verifier_tool_para_15", { ns: "SeBall" })} <br />
                            {<Markup content={t("pf_verifier_tool_para_16", { ns: "SeBall" })} />}
                        </li>
                        <div className={Styles["pf-block-highlight-number"]}>
                            1 2 3 4 5 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 <span className={Styles["pf-text-highlight"]}>23</span>{" "}
                            24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60
                        </div>

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_verifier_tool_para_20", { ns: "SeBall" })} />}
                        </p>
                        <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_21", { ns: "SabaNumber", icon: iconPF })} />}
                            </li>
                            {renderPFSettingsExample(t, randomNumber, serverSeedSHA256)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_22", { ns: "SeBall" })} />}
                            </li>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_23", { ns: "SeBall" })} />}
                            </li>
                            {renderBetDetailsExample(t, drawId)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_bacball_verifier_tool_para_24", { ns: "BacBall" })} />}

                                <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                                    <li>{<Markup content={t("pf_verifier_tool_para_25", { ns: "SabaNumber" })} />}</li>
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
                                {<Markup content={t("pf_verifier_tool_para_26", { ns: "SabaNumber" })} />}
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

const SeBallPFGuideContent: FC<SeBallPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber", "Spaceflight", "BandarQiuQiu"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg)}
            {renderPFAppliedInGame(t, displayName ?? "", verImg)}
            {renderSeBallVerifyPF(t, locale, displayName ?? "")}
        </div>
    );
};

export default SeBallPFGuideContent;
