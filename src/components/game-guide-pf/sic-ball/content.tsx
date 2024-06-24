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
    const result = [6, 6, 6];

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
                {t("pf_round", { ns: "Common" })}: {drawId}
            </div>

            {renderBallResult()}
        </div>
    );
};

const renderClientSeedInfoExample = (
    t: TFnType<DefaultParamType, string, TranslationKey>,
    randomNumber: string,
    mergeClientSeed: string
) => {
    const userClientSeedList = [
        { name: "B***863", clientSeed: "5104", isHighlight: false },
        { name: "T***581", clientSeed: "6393", isHighlight: false },
        { name: "P***438", clientSeed: "0563", isHighlight: false },
        { name: "T***271", clientSeed: "3701", isHighlight: false },
        { name: "H***770", clientSeed: "3763", isHighlight: false },
        { name: "S***466", clientSeed: "5372", isHighlight: false },
        { name: "W***345", clientSeed: "8119", isHighlight: false },
        { name: "Vicuna99049", clientSeed: "8748", isHighlight: true },
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
                    <span className={Styles["pf-verify-input-text"]}>{mergeClientSeed}</span>
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
                        <th>{t("pf_player", { ns: "Common" })}</th>
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
        {
            time: "11:11:36 <br /> 04/06/2024",
            betChoice: "big",
            odds: "1.96",
            stake: "100",
            win: "196",
            isText: true,
            isHighlight: false,
        },
        {
            time: "11:11:34 <br /> 04/06/2024",
            betChoice: 6,
            odds: "6",
            stake: "50",
            win: "300",
            isText: false,
            isHighlight: false,
        },
        {
            time: "11:11:34 <br /> 04/06/2024",
            betChoice: 1,
            odds: "-",
            stake: "10",
            win: "0",
            isText: false,
            isHighlight: false,
        },
    ];
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-3"]}`}>
            {renderPopupHeader("pf_bet_details", "Common", t)}

            <div className={Styles["pf-verify-draw-info"]}>
                <div className={Styles["pf-verify-info-item"]}>
                    <strong>
                        {t("pf_round", { ns: "Common" })}: {drawId}
                    </strong>
                </div>
                {renderBallResult()}
                <div className={Styles["pf-ball-result-bold"]}>-</div>
                <div className={Styles["pf-ball-result-bold"]}>18</div>
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
                                <td className={`${bet.isHighlight ? Styles["pf-text-highlight"] : Styles["pf-ball-result"]}`}>
                                    {bet.isText && <Markup content={t(`glossary_${bet.betChoice}`, { ns: "SicBall" })} />}
                                    {!bet.isText && (
                                        <span
                                            className={`${Styles["pf-ball"]} ${
                                                (bet.betChoice as number) % 2 ? Styles["pf-ball-blue"] : Styles["pf-ball-red"]
                                            }`}
                                        >
                                            {bet.betChoice}
                                        </span>
                                    )}
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
    mergeClientSeed: string,
    serverSeed: string,
    combinedSHA512Hash: string
) => {
    return (
        <div className={`${Styles["pf-verify-example"]} ${Styles["pf-verify-step-1"]}`}>
            {renderPopupHeader("pf_title_verification", "Common", t)}

            <div className={Styles["pf-verify-section-title"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
            <div className={`${Styles["pf-verify-input-normal"]} ${Styles["pf-verify-input-full"]}`}>
                <span className={Styles["pf-verify-input-text"]}>{mergeClientSeed}</span>
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
                <p className="bold mb-0">7e ={">"} 126</p>
                <p className="bold mb-0">0c ={">"} 12</p>
                <p className="bold mb-0">6e ={">"} 110</p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>{t("pf_ball_value", { ns: "SabaNumber" })}</span> = ((
                    {t("pf_algorithm_random_number", { ns: "SabaNumber" })} + X) mod {t("pf_number_of_balls_left", { ns: "SabaNumber" })} )
                    + 1
                </p>

                <p>
                    <span className={Styles["pf-text-highlight"]}>
                        {t("pf_verifier_tool_ball", { ns: "SabaNumber", value: "1" })} - {t("pf_final_result", { ns: "Common" })}
                    </span>
                    = ((5 + 126) mod 6) + 1 = <span className={Styles["pf-text-highlight"]}>6</span>
                </p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>
                        {t("pf_verifier_tool_ball", { ns: "SabaNumber", value: "2" })} - {t("pf_final_result", { ns: "Common" })}
                    </span>{" "}
                    = ((5 + 12) mod 6) + 1 = <span className={Styles["pf-text-highlight"]}>6</span>
                </p>
                <p>
                    <span className={Styles["pf-text-highlight"]}>
                        {t("pf_verifier_tool_ball", { ns: "SabaNumber", value: "3" })} - {t("pf_final_result", { ns: "Common" })}
                    </span>
                    = ((3 + 110) mod 6) + 1 = <span className={Styles["pf-text-highlight"]}>6</span>
                </p>
            </div>
        </div>
    );
};

const renderSicBallVerifyPF = (t: TFnType<DefaultParamType, string, TranslationKey>, locale: string | undefined, displayName: string) => {
    const iconPF = `<img src="/static/images/pf-snng/icon-pf.svg" alt="pf-verify" />`;

    /* using info of drawId 29842 */
    const serverSeedSHA256 = "8a837b85ab7c1494d03e13d206ee58ebd98ab21aae4f944c9bdc72d4709671c4";
    const randomNumber = "8748";
    const serverSeed = "{&quot;random&quot;:&quot;5;5;3&quot;secret&quot;:&quot;652XX3POi0quDlT3BJRt9qg05wlm1gwP&quot;}";
    const mergeClientSeed = "51046393056337013763537281198748";
    const combinedSHA512Hash =
        "7e0c6ef5c4929ec6cf0732e9c8c5379c8a822ba1064c274018d5faa8d9f6f950b8098fb36079a519f0a2a42d5030f676634d83642681f6d7bbf83b6a4ea9f2af";
    const drawId = "23515";

    return (
        <div className="guide-item">
            <h2>{t("pf_title_verify_the_provably_fair", { ns: "Common" })}</h2>
            <ul className={`style-number-dot ${Styles["pf-style-number-dot"]}`}>
                <li className={`number-dot ${Styles["pf-number-dot"]}`}>
                    <span className={`title-text ${Styles["pf-sub-title"]}`}>
                        {t("pf_subtitle_in_game_verifier_tool", { ns: "Common" })}
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
                                {<Markup content={t("pf_verifier_tool_para_7", { ns: "SabaNumber" })} />}
                            </div>
                            <div>
                                &#123;“random”:“
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 1</span>,{" "}
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 2</span>,{" "}
                                <span className={Styles["pf-text-highlight-blue"]}>{t("pf_value", { ns: "SabaNumber" })} 3</span>
                                ”,“secret”:“
                                {t("pf_server_seed_format_secret", { ns: "SabaNumber" })}”&#125;
                            </div>
                        </div>

                        <li>{t("pf_verifier_tool_para_8a", { ns: "SabaNumber" })}</li>

                        <div
                            className={`${Styles["pf-block-highlight-text"]} ${
                                locale === "en" ? Styles["pf-block-highlight-text-en"] : ""
                            }`}
                        >
                            <div>
                                <strong>{t("pf_ball_value", { ns: "SabaNumber" })}</strong> = ((
                                {t("pf_algorithm_random_number", { ns: "SabaNumber" })} +{" "}
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
                            {t("pf_verifier_tool_para_11", { ns: "SabaNumber" })}
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
                                <span className={Styles["color-ball-1"]}>7e</span>
                                <span className={Styles["color-ball-2"]}>0c</span>
                                <span className={Styles["color-ball-3"]}>6e</span>f5c492...
                            </div>
                            <div className={Styles["convert-hash-1"]}>
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SicBall", value: "1" })} />}
                                </div>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                            </div>

                            <div className={Styles["convert-hash-2"]}>
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SicBall", value: "2" })} />}
                                </div>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                            </div>

                            <div className={Styles["convert-hash-3"]}>
                                <img className={Styles["arrow"]} src="./static/images/pf-snng/arrow.svg" alt="arrow" />
                                <div className={Styles["text"]}>
                                    {<Markup content={t("pf_verifier_tool_para_17", { ns: "SicBall", value: "3" })} />}
                                </div>
                            </div>
                        </div>

                        <li>
                            {t("pf_verifier_tool_para_11", { ns: "SicBall" })}
                            <div className={Styles["pf-has-highlight-red"]}>{<Markup content={"b1 => <strong>X</strong> = 12"} />}</div>
                        </li>

                        <li>{t("pf_verifier_tool_para_13", { ns: "SicBall" })} </li>

                        <li>{t("pf_verifier_tool_ball", { ns: "SabaNumber", value: "2" })} = ((5 + 12) mod 6) + 1 = 6</li>

                        <p className={`title-text ${Styles["pf-sub-title"]}`}>
                            {<Markup content={t("pf_verifier_tool_para_20a", { ns: "SabaNumber" })} />}
                        </p>
                        <ul className={`${Styles["pf-sub-desc"]} ${Styles["pf-sub-desc-no-padding"]}`}>
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_21", { ns: "SabaNumber", icon: iconPF })} />}
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
                                {<Markup content={t("pf_verifier_tool_para_24", { ns: "SabaNumber" })} />}

                                <ul className={`${Styles["pf-sub-desc"]} ${Styles["pf-sub-desc-no-padding"]}`}>
                                    <li>{<Markup content={t("pf_verifier_tool_para_25", { ns: "SabaNumber" })} />}</li>
                                </ul>
                            </li>
                            {renderVerifyExample(
                                t,
                                serverSeedSHA256,
                                serverSeed,
                                mergeClientSeed,
                                combinedSHA512Hash,
                                resultBlock(t, drawId)
                            )}
                            {renderClientSeedInfoExample(t, randomNumber, mergeClientSeed)}
                            <li className={Styles["pf-sub-desc-highlight"]}>
                                {<Markup content={t("pf_verifier_tool_para_26", { ns: "SabaNumber" })} />}
                            </li>
                            {renderVerifyDetailExample(t, mergeClientSeed, serverSeed, combinedSHA512Hash)}
                        </ul>
                    </ul>
                </li>
                <li className={`number-dot ${Styles["pf-number-dot"]}`}>
                    <span className={`title-text ${Styles["pf-sub-title"]}`}>
                        {t("pf_subtitle_online_third_party_verifier_tools", { ns: "Common" })}
                    </span>
                    <ul className={`${Styles["pf-sub-desc"]} ${Styles["pf-sub-desc-no-padding"]}`}>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_1", { ns: "Common" })} />}</li>
                        <li>{<Markup content={t("pf_online_third_party_verifier_tools_para_2", { ns: "Common" })} />}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

const SicBallPFGuideContent: FC<SicBallPFContentsProps> = ({ locale, displayName }) => {
    const { t } = useTranslate(["Common", "SabaNumber", "SicBall"]);
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
