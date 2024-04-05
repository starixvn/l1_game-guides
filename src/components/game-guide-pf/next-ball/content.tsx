import { FC } from "react";
import { Markup } from "interweave";
import { NextBallPFContentsProps } from "./type";
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
                {t("glossary_draw_id", { ns: "SabaNumber" })}: {drawId} ({t("pf_draw_2", { ns: "SabaNumber" })})
            </div>
            <div className="flex justify-center" style={{ gap: "0.8rem" }}>
                <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>49</span>
                <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>66</span>
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
                        <td>7495</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>B***857</td>
                        <td>2568</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>I***080</td>
                        <td>2208</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>R***247</td>
                        <td>3434</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>T***322</td>
                        <td>5644</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>B***736</td>
                        <td>7499</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>C***263</td>
                        <td>2296</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>C***679</td>
                        <td>5493</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td className={Styles["pf-text-highlight-green"]}>Dragon72864</td>
                        <td className={Styles["pf-text-highlight-green"]}>9515</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>G***855</td>
                        <td>3076</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>M***307</td>
                        <td>5451</td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>S***958</td>
                        <td>2833</td>
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
                        {t("glossary_draw_id", { ns: "SabaNumber" })}: {drawId}
                    </strong>
                </div>
                <div className={Styles["pf-verify-ball"]}>
                    <span className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>66</span>
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
                        <th>{t("pf_bet_choice", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_bacball_odds", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_stake", { ns: "SabaNumber" })}</th>
                        <th>{t("pf_win", { ns: "SabaNumber" })}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            14:06:37 <br /> 05/04/2024
                        </td>
                        <td className={Styles["pf-text-highlight"]}>{t("glossary_even", { ns: "NextBall" })}</td>
                        <td className={Styles["pf-text-highlight"]}>1.9</td>
                        <td className={Styles["pf-text-highlight"]}>10</td>
                        <td className={Styles["pf-text-highlight"]}>19</td>
                    </tr>
                    <tr>
                        <td>
                            14:06:34 <br /> 05/04/2024
                        </td>
                        <td className={Styles["pf-text-highlight"]}>{t("glossary_over", { ns: "NextBall" })}</td>
                        <td className={Styles["pf-text-highlight"]}>1.9</td>
                        <td className={Styles["pf-text-highlight"]}>10</td>
                        <td className={Styles["pf-text-highlight"]}>19</td>
                    </tr>
                    <tr>
                        <td>
                            14:06:33 <br /> 05/04/2024
                        </td>
                        <td className={Styles["pf-text-highlight"]}>{t("glossary_over", { ns: "NextBall" })}</td>
                        <td className={Styles["pf-text-highlight"]}>1.9</td>
                        <td className={Styles["pf-text-highlight"]}>10</td>
                        <td className={Styles["pf-text-highlight"]}>19</td>
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
                        {<Markup content={t("pf_bacball_final result", { ns: "BacBall" })} />}
                    </h3>
                    <div className={`${Styles["pf-ball"]} ${Styles["pf-ball-red"]}`}>66</div>
                </div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_verification_para_3", { ns: "SabaNumber" })}</div>
                <p className="bold">0a ={">"} 10</p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_index_value", { ns: "SabaNumber" })}</span> = ((
                    {t("pf_algorithm_random_number", { ns: "BacBall" })} + X) mod {t("pf_number_of_balls_left", { ns: "SabaNumber" })} ) + 1
                </p>

                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_index", { ns: "SabaNumber" })} (1,..., 74)</span> = ((54 + 10) mod
                    74) + 1 = <span className={Styles["pf-text-highlight"]}>65</span>
                </p>

                <div className={Styles["pf-verify-section-title"]}>{t("pf_index_value_to_final_result", { ns: "SabaNumber" })}</div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43
                    44 45 46 47 48 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 <span style={{ color: "#ffbc11" }}>66 </span> 67 68 69 70
                    71 72 73 74 75
                </p>
            </div>
        </div>
    );
};

const renderLuckyNextVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, locale: string | undefined, displayName: string) => {
    const iconPF = `<img src="/static/images/pf-snng/icon-pf.svg" alt="pf-verify" />`;
    const serverSeedSHA256 = "8ac3d57770190614e9ce281051c3b14f44249f404b220226a123356f27d0a076";
    const randomNumber = "9515";
    const serverSeed =
        "{&quot;random&quot;:&quot;54&quot;,&quot;remain&quot;:&quot;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:50:51:52:53:54:55:56:57:58:59:60:61:62:63:64:65:66:67:68:69:70:71:72:73:74:75&quot;,&quot;secret&quot;:&quot;HZceK~x1a.Oc7q2RxySpR_K1xfWzYKSk&quot;}";
    const mergeServerSeed = "749525682208343456447499229654939515307654512833";
    const combinedSHA512Hash =
        "0aca85359067a3ada609453a2e9abdf4cc9c1ac82350f93ce309d3940a234ec70891bad078747cb717bee8e92975ec1eab8ff07084accaf945e4f53f1381c163";
    const drawId = "9842";

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
                        <li>
                            <T keyName={"pf_verifier_tool_para_2"} params={{ gamename: displayName }} ns="SabaNumber"></T>
                        </li>
                        <li>{t("pf_verifier_tool_para_3", { ns: "SabaNumber" })}</li>

                        <ul className={Styles["pf-sub-desc"]}>
                            <li>{<Markup content={t("pf_verifier_tool_para_4", { ns: "SabaNumber" })} />}</li>
                            <li>{<Markup content={t("pf_verifier_tool_para_5", { ns: "SabaNumber" })} />}</li>
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
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })}</span>
                                ”,“remain”:“
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_remain_balls", { ns: "SabaNumber" })}</span>
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
                        <li>{<Markup content={t("pf_verifier_tool_para_12", { ns: "NextBall" })} />}</li>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_verifier_tool_para_13", { ns: "NextBall" })} />}
                        </span>

                        <li>{t("pf_verifier_tool_para_14", { ns: "NextBall" })}</li>
                        <li>{<Markup content={t("pf_verifier_tool_para_15", { ns: "NextBall" })} />}</li>

                        <div className={Styles["pf-block-highlight-number"]}>
                            1 2 3 4 5 7 8 9 10 11 12 13 14 15 16 17 <span className={Styles["pf-text-highlight"]}>18</span> 19 20 21 22 23
                            24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60
                            61 62 63 64 65 66 67 68 69 70 71 72 73 74 75
                        </div>

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_verifier_tool_para_20", { ns: "SabaNumber" })} />}
                        </p>
                        <ul className={Styles["pf-sub-desc"]} style={{ paddingLeft: "0" }}>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_21", { ns: "SabaNumber", icon: iconPF })} />}
                            </li>
                            {renderPFSettingsExample(t, randomNumber, serverSeedSHA256)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_22", { ns: "SabaNumber" })} />}
                            </li>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_23", { ns: "SabaNumber" })} />}
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

const NextBallPFGuideContent: FC<NextBallPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber", "Spaceflight", "BandarQiuQiu"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg)}
            {renderPFAppliedInGame(t, displayName ?? "", verImg)}
            {renderLuckyNextVerifyPF(t, locale, displayName ?? "")}
        </div>
    );
};

export default NextBallPFGuideContent;
