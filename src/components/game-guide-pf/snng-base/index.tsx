import { DefaultParamType, TFnType, TranslationKey } from "@tolgee/react";
import { Markup } from "interweave";
import Styles from "./pf.module.scss";

const renderPFInfo = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_what_is_provably_fair", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_what_provably_fair_para_1", { ns: "Common" })} />}</div>
        </div>
    );
};

const renderAdvertisePF = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div>
            <div className={Styles["pf-main-title"]}>{t("pf_advertise_para_1", { ns: "Common" })}</div>
            <p>{<Markup content={t("pf_advertise_bac_ball", { ns: "Common", gamename: displayName })} />}</p>
            <div className="center-img">
                <img src={`./static/images/pf-snng/pf-intro.svg?v=${imgVersion}`} alt="pf"></img>
            </div>
        </div>
    );
};

const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <div className="guide-item">
            <h2>{t("pf_title_how_provably_fair_work", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</div>

            <div className={Styles["pf-block-highlight-text"]}>
                <span style={{ textAlign: "center" }}>
                    <strong className={Styles["pf-text-highlight"]}>{t("pf_fair_result", { ns: "Common" })}</strong>
                    <strong className={Styles["pf-text-content"]}> = {t("pf_casino_contribution", { ns: "Common" })}</strong>
                    <strong className={Styles["pf-text-content"]}> + {t("pf_player_contribution", { ns: "Common" })}</strong>
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
                <img
                    className={Styles["pf-work-example-img-background-1"]}
                    src={`./static/images/pf-snng/pf-work-example-1.png?v=${imgVersion}`}
                    alt="pf"
                ></img>
                <div className={Styles["pf-work-example-img-text"]}>
                    <span>{t("glossary_player", { ns: "BacBall" })} 1</span>
                    <span>{t("glossary_player", { ns: "BacBall" })} 2</span>
                    <span>{t("glossary_player", { ns: "BacBall" })}...</span>
                </div>
            </div>
            <div className={Styles["pf-word-example-block-2"]}>
                <div className={Styles["pf-text-highlight"]}>{t("pf_merge_seed", { ns: "Common" })}</div>
                <div className={Styles["pf-text-highlight"]}>{t("pf_server_client_nonce", { ns: "Common" })}</div>
                <img
                    className={Styles["pf-work-example-img-2"]}
                    src={`./static/images/pf-snng/pf-work-example-2.png?v=${imgVersion}`}
                    alt="pf"
                ></img>
            </div>
            <div className={`${Styles["pf-word-example-block-3"]}`}>{t("pf_final_result", { ns: "Common" })}</div>
        </div>
    );
};

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
            {renderHowPFWork(t, imgVersion)}
        </>
    );
};

export { renderContentPFBase };
