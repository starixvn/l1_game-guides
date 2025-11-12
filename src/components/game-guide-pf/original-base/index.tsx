import { TFnType, TranslationKey, DefaultParamType, T } from "@tolgee/react";
import PFStyles from "./pf-original.module.scss";
import Styles from "../snng-base/pf.module.scss";
import { Markup } from "interweave";

export const renderPFInfo = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_what_is_provably_fair", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_what_provably_fair_para_1", { ns: "Common" })} />}</div>
        </div>
    );
};

export const renderAdvertisePF = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
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

export const renderPFAppliedExample = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className={Styles["pf-applied-example"]}>
            <div className={Styles["pf-applied-example-block-1"]}>
                <div className={`${PFStyles["pf-applied-example-text-1"]} ${Styles["pf-text-highlight"]}`}>
                    {t("pf_server_Seed", { ns: "Common" })}
                </div>
                <div className={`${PFStyles["pf-applied-example-text-2"]} ${Styles["pf-text-highlight"]}`}>
                    {t("pf_client_seed", { ns: "Common" })}
                </div>
                <div className="center-img">
                    <img
                        className={Styles["pf-work-example-img-background-full"]}
                        src={`./static/images/pf/chicken-road/pf-applied-ingame-example-1.png?v=${imgVersion}`}
                        alt="pf"
                    ></img>
                </div>
                <div className={PFStyles["pf-applied-example-img-text"]}>
                    <span>{t("example_Player", { ns: "Common" })}</span>
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

export const renderPFAppliedInGame = (
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
                <li>{<Markup content={t("original_pf_how_is_pf_applied_in_game_para_3", { ns: "Common" })} />}</li>
                <li>{t("pf_how_is_pf_applied_in_game_para_4", { ns: "Plinko" })}</li>
            </ul>
            {renderPFAppliedExample(t, imgVersion)}
        </div>
    );
};

export const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_provably_fair_work", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</div>

            <div className={`${Styles["pf-block-highlight-text"]} ${Styles["pf-block-highlight-text-sedie"]}`}>
                <span style={{ textAlign: "center" }}>
                    <strong className={Styles["pf-text-highlight"]} style={{ fontSize: "1.6rem" }}>
                        {t("pf_fair_result", { ns: "Common" })}
                    </strong>
                    <strong className={Styles["pf-text-content"]} style={{ fontSize: "1.6rem" }}>
                        {" "}
                        = {t("pf_casino_contribution", { ns: "Common" })}
                    </strong>
                    <strong className={Styles["pf-text-content"]} style={{ fontSize: "1.6rem" }}>
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

export const renderPFWorkExample = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
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