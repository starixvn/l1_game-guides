import { DefaultParamType, TFnType, TranslationKey } from "@tolgee/react";
import { Markup } from "interweave";
import Styles from "./pf-base.module.scss";

const renderAdvertisePF = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <div style={{ textAlign: "center" }}>
            <p>{<Markup content={t("pf_advertise_para_1", { ns: "Common" })} />}</p>
            <p>{<Markup content={t("pf_advertise_para_2", { ns: "Common", gamename: displayName })} />}</p>

            <img className={Styles["wrapper-img"]} src={`./static/images/pf/pf.png?v=${imgVersion}`} alt="pf"></img>
        </div>
    );
};

const renderContentPFBase = (t: TFnType<DefaultParamType, string, TranslationKey>, displayName: string, imgVersion: string) => {
    return (
        <>
            {renderAdvertisePF(t, displayName || "", imgVersion)}
            {renderPFInfo(t)}
            {renderHowPFWork(t, imgVersion)}
        </>
    );
};

const renderPFInfo = (t: TFnType<DefaultParamType, string, TranslationKey>) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_what_is_provably_fair", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_what_provably_fair_para_1", { ns: "Common" })} />}</div>
        </li>
    );
};

const renderHowPFWork = (t: TFnType<DefaultParamType, string, TranslationKey>, imgVersion: string) => {
    return (
        <li className="guide-item">
            <h2>{t("pf_title_how_provably_fair_work", { ns: "Common" })} </h2>
            <div className="content">{<Markup content={t("pf_how_pf_work_para_1", { ns: "Common" })} />}</div>
            <div className={Styles["center-img"]}>
                <img src={`./static/images/pf/fair-result.png?v=${imgVersion}`} alt="pf"></img>
            </div>

            <p>{t("pf_how_pf_work_para_2", { ns: "Common" })}</p>
            <ul className="desc">
                <li>{<Markup content={t("pf_how_pf_work_para_3", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_work_para_4", { ns: "Common" })} />}</li>
                <li>{<Markup content={t("pf_how_pf_work_para_5", { ns: "Common" })} />}</li>
            </ul>
            <p>{t("pf_how_pf_work_para_6", { ns: "Common" })}</p>
            <div className={Styles["center-img"]}>
                <img src={`./static/images/pf/flow-final-result.png?v=${imgVersion}`} alt="pf"></img>
            </div>
        </li>
    );
};

export { renderAdvertisePF, renderContentPFBase };
