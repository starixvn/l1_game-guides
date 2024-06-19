import { DefaultParamType, T, TFnType, TranslationKey, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { FC } from "react";

import { useImgVersionContext } from "../../../contexts/img-version";
import { renderContentPFBase, renderPFAppliedInGame, renderPFSettingsExample, renderPopupHeader, renderVerifyExample } from "../snng-base";
import Styles from "../snng-base/pf.module.scss";
import { SicBallPFContentsProps } from "./type";

const iconCopy = <img src="./static/images/pf-snng/pf-verify-icon-copy.svg" alt="pf-icon" />;
const iconPF = <img src="./static/images/pf-snng/pf-verify-icon-pf.svg" alt="pf-icon" />;
const iconCSV = <img src="./static/images/pf-snng/pf-verify-icon-csv.svg" alt="pf-icon" />;
const iconEdit = <img src="./static/images/pf-snng/pf-verify-icon-edit.svg" alt="pf-icon" />;

const renderBallResult = () => {
    const result = [13, 1, 26];

    return (
        <div className={Styles["pf-ball-result"]}>
            {result.map((number, index) => {
                return (
                    <span key={index} className={`${Styles["pf-ball"]} ${number % 2 ? Styles["pf-ball-blue"] : Styles["pf-ball-red"]}`}>
                        {number}
                    </span>
                );
            })}
        </div>
    );
};

const resultBlock = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
    return (
        <div className={Styles["pf-result-block"]}>
            <div className={`bold text-white ${Styles["draw-info"]}`}>
                {t("glossary_draw_id", { ns: "SabaNumber" })}: {drawId}
                <span>({t("pf_1st_draw", { ns: "LuckyThree" })})</span>
            </div>

            {renderBallResult()}
        </div>
    );
};

const renderClientSeedInfoExample = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    randomNumber: string,
    mergeServerSeed: string
) => {
    const userClientSeedList = [
        { name: "B***863", clientSeed: "9911", isHighlight: false },
        { name: "T***581", clientSeed: "7774", isHighlight: false },
        { name: "P***438", clientSeed: "8150", isHighlight: false },
        { name: "T***271", clientSeed: "6341", isHighlight: false },
        { name: "H***770", clientSeed: "0864", isHighlight: false },
        { name: "S***466", clientSeed: "2354", isHighlight: false },
        { name: "W***345", clientSeed: "0236", isHighlight: false },
        { name: "Vicuna99049", clientSeed: "2645", isHighlight: true },
    ];

    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]}`}>
            {renderPopupHeader("pf_client_seed_info", "SabaNumber", t)}

            <div className={Styles["pf-verify-block-form"]}>
                <div className={Styles["pf-verify-group-input-small"]}>
                    <div className={Styles["pf-verify-section-title"]}>{t("pf_your_seed", { ns: "Common" })}</div>
                    <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-fix-width"]} center`}>
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
                {t("pf_total_players", { ns: "SabaNumber" })}{" "}
                <span className={Styles["pf-text-highlight"]}>{userClientSeedList.length}</span>
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
                    {userClientSeedList.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className={`${user.isHighlight ? Styles["pf-text-highlight-green"] : ""}`}>{user.name}</td>
                                <td>{user.clientSeed}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const renderBetDetailsExample = (t: TFnType<DefaultParamType, string, TranslationKey>, drawId: string) => {
    const betList = [
        { time: "11:11:36 <br /> 04/06/2024", betChoice: "blue3", odds: "8.42", stake: "10", win: "0", isText: false, isHighlight: false },
        { time: "11:11:35 <br /> 04/06/2024", betChoice: "red2", odds: "2.62", stake: "10", win: "0", isText: false, isHighlight: false },
        {
            time: "11:11:34 <br /> 04/06/2024",
            betChoice: "blue2",
            odds: "2.62",
            stake: "10",
            win: "26.2",
            isText: false,
            isHighlight: false,
        },
        { time: "11:11:34 <br /> 04/06/2024", betChoice: "under", odds: "2", stake: "10", win: "20", isText: true, isHighlight: false },
    ];
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-3"]}`}>
            {renderPopupHeader("pf_bet_details", "Common", t)}

            <div className={Styles["pf-verify-draw-info"]}>
                <div className={Styles["pf-verify-info-item"]}>
                    <strong>
                        {t("glossary_draw_id", { ns: "SabaNumber" })}: {drawId}
                    </strong>
                </div>
                {renderBallResult()}
                <div className={Styles["pf-ball-result-bold"]}>-</div>
                <div className={Styles["pf-ball-result-bold"]}>40</div>
            </div>
            <div className={Styles["pf-verify-PF"]}>
                <span className={Styles["verify-icon-pf"]}>{iconPF}</span>
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
                    {betList.map((bet, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <Markup content={bet.time} />
                                </td>
                                <td className={`${bet.isHighlight ? Styles["pf-text-highlight"] : ""}`}>
                                    {bet.isText && t(`glossary_${bet.betChoice}`, { ns: "LuckyThree" })}
                                    {!bet.isText && <img src={`./static/images/lucky-three/${bet.betChoice}.svg`} alt="guide-item" />}
                                </td>
                                <td className={`${bet.isHighlight ? Styles["pf-text-highlight"] : ""}`}>{bet.odds}</td>
                                <td className={`${bet.isHighlight ? Styles["pf-text-highlight"] : ""}`}>{bet.stake}</td>
                                <td className={`${bet.isHighlight ? Styles["pf-text-highlight"] : ""}`}>{bet.win}</td>
                            </tr>
                        );
                    })}
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

            <div className={Styles["pf-verify-block-form"]}>
                <div className={Styles["pf-verify-final-result"]}>
                    <h3 className={Styles["pf-verify-section-title"]} style={{ marginBottom: "0" }}>
                        {<Markup content={t("pf_final_result", { ns: "Common" })} />}
                    </h3>
                    {renderBallResult()}
                </div>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <p className={Styles["break-word"]}>{combinedSHA512Hash}</p>
                <div className={Styles["pf-verify-section-title"]}>{t("pf_verifier_tool_para_27", { ns: "SabaNumber" })}</div>
                <p className="bold mb-0">65 ={">"} 101</p>
                <p className="bold mb-0">66 ={">"} 102</p>
                <p className="bold mb-0">69 ={">"} 105</p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_index_value", { ns: "SabaNumber" })}</span> = ((
                    {t("pf_algorithm_random_number", { ns: "BacBall" })} + X) mod {t("pf_number_of_balls_left", { ns: "SabaNumber" })} ) + 1
                </p>

                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_verifier_tool_para_19", { ns: "LuckyThree" })}</span> = ((31 + 101)
                    mod 60) + 1 = <span className={Styles["pf-text-highlight"]}>13</span>
                </p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_verifier_tool_para_20", { ns: "LuckyThree" })}</span> = ((16 + 102)
                    mod 59) + 1 = <span className={Styles["pf-text-highlight"]}>1</span>
                </p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_verifier_tool_para_21", { ns: "LuckyThree" })}</span> = ((34 + 105)
                    mod 58) + 1 = <span className={Styles["pf-text-highlight"]}>24</span>
                </p>

                <div className={Styles["pf-verify-section-title"]}>{t("pf_index_value_to_final_result", { ns: "SabaNumber" })}</div>

                <div className={Styles["pf-verify-section-title"]}>
                    {t("pf_verifier_tool_ball", { ns: "SabaNumber", value: "1" })} - {t("pf_bacball_final result", { ns: "BacBall" })}
                </div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    1 2 3 4 5 6 7 8 9 10 11 12 <span className={Styles["result-numbers-highlight"]}>13 </span> 14 15 16 17 18 19 20 21 22 23
                    24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60
                </p>

                <div className={Styles["pf-verify-section-title"]}>
                    {t("pf_verifier_tool_ball", { ns: "SabaNumber", value: "2" })} - {t("pf_bacball_final result", { ns: "BacBall" })}
                </div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    <span className={Styles["result-numbers-highlight"]}>1 </span> 2 3 4 5 6 7 8 9 10 11 12 14 15 16 17 18 19 20 21 22 23 24
                    25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60
                </p>

                <div className={Styles["pf-verify-section-title"]}>
                    {t("pf_verifier_tool_ball", { ns: "SabaNumber", value: "3" })} - {t("pf_bacball_final result", { ns: "BacBall" })}
                </div>

                <p className={Styles["pf-verify-result-numbers"]}>
                    2 3 4 5 6 7 8 9 10 11 12 14 15 16 17 18 19 20 21 22 23 24 25{" "}
                    <span className={Styles["result-numbers-highlight"]}>26 </span> 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45
                    46 47 48 49 50 51 52 53 54 55 56 57 58 59 60
                </p>
            </div>
        </div>
    );
};

const renderSicBallVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, locale: string | undefined, displayName: string) => {
    const iconPF = `<img src="/static/images/pf-snng/icon-pf.svg" alt="pf-verify" />`;

    /* using info of drawId 29842 */
    const serverSeedSHA256 = "42570353772965283a9e4debf10e154e4f0941e8c426105e2a6e98747dd1f3a4";
    const randomNumber = "2645";
    const serverSeed =
        "{&quot;random&quot;:&quot;31;16;34&quot;,&quot;remain&quot;:&quot;1:2:3:4:5:6:7:8:9:10:11:12:13:14:15:16:17:18:19:20:21:22:23:24:25:26:27:28:29:30:31:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:50:51:52:53:54:55:56:57:58:59:60&quot;,&quot;secret&quot;:&quot;SrCmqhT3xlonmOXIHucgHLVv5OphIinv&quot;}";
    const mergeServerSeed = "99117774815063410864235402362645";
    const combinedSHA512Hash =
        "6566697d4009a2a3b37c1b6b8d275d8de233132e199bf71701d6a73686d9950c8d60445f8363d7e0f656f09c0e81304dbf5e036075cb8ca09b0f7dc75d00dd75";
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
                            <T keyName={"pf_verifier_tool_para_2"} params={{ gamename: displayName }} ns="Common"></T>
                        </li>
                        <li>{t("pf_verifier_tool_para_3a", { ns: "SabaNumber" })}</li>

                        <ul className={Styles["pf-sub-desc"]}>
                            <li>{<Markup content={t("pf_verifier_tool_para_4a", { ns: "SabaNumber" })} />}</li>
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
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 3</span>
                                ”,“secret”:“
                                {t("pf_server_seed_format_secret", { ns: "BacBall" })}”&#125;
                            </div>
                        </div>

                        <li>{t("pf_verifier_tool_para_8a", { ns: "SabaNumber" })}</li>

                        <div
                            className={`${Styles["pf-block-highlight-text"]} ${
                                locale === "en" ? Styles["pf-block-highlight-text-en"] : ""
                            }`}
                        >
                            <div>
                                <strong>{t("pf_index_value", { ns: "SabaNumber" })}</strong> = ((
                                {t("pf_algorithm_random_number", { ns: "BacBall" })} +{" "}
                                <span className={Styles["pf-text-highlight-red"]}>X</span>) mod 6 ) + 1
                            </div>
                        </div>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_9a", { ns: "SabaNumber" })} />}
                        </li>

                        <li className={Styles["pf-has-highlight-red"]}>
                            {<Markup content={t("pf_verifier_tool_para_10", { ns: "SicBall" })} />}
                        </li>

                        <span className={`title-text ${Styles["pf-sub-title"]}`}>
                            {t("pf_bacball_verifier_tool_para_10", { ns: "BacBall" })}
                        </span>

                        <li>
                            {t("pf_server_Seed", { ns: "Common" })}:
                            <div className={Styles["break-word"]}>{<Markup content={serverSeed} />}</div>
                        </li>

                        <li>
                            {t("pf_header_combined_sha512_hash", { ns: "Common" })}:
                            <div className={Styles["break-word"]}>{combinedSHA512Hash}</div>
                        </li>

                        <div className={Styles["pf-convert-hash"]}>
                            <div className={Styles["convert-hash-text"]}>
                                <span className={Styles["color-ball-1"]}>65</span>
                                <span className={Styles["color-ball-2"]}>66</span>
                                <span className={Styles["color-ball-3"]}>69</span>7d400...
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
                        </div>

                        <li>
                            {t("pf_verifier_tool_para_11", { ns: "SeBall" })}
                            <div className={Styles["pf-has-highlight-red"]}>{<Markup content={"66 => <strong>X</strong> = 102"} />}</div>
                        </li>

                        <li>{t("pf_verifier_tool_para_13", { ns: "LuckyThree" })}</li>

                        <li>{t("pf_verifier_tool_para_15", { ns: "LuckyThree" })}</li>

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_verifier_tool_para_20", { ns: "SeBall" })} />}
                        </p>
                        <ul className={`${Styles["pf-sub-desc"]} ${Styles["pf-sub-desc-no-padding"]}`}>
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

                                <ul className={`${Styles["pf-sub-desc"]} ${Styles["pf-sub-desc-no-padding"]}`}>
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
                    <ul className={`${Styles["pf-sub-desc"]} ${Styles["pf-sub-desc-no-padding"]}`}>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: "Spaceflight" })} />}</li>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: "Spaceflight" })} />}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

const SicBallPFGuideContent: FC<SicBallPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber", "Spaceflight", "BandarQiuQiu", "LuckyThree"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg)}
            {renderPFAppliedInGame(t, displayName ?? "", verImg, false)}
            {renderSicBallVerifyPF(t, locale, displayName ?? "")}
        </div>
    );
};

export default SicBallPFGuideContent;
