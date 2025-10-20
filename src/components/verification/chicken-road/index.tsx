import { useTranslate } from "@tolgee/react";
import { VerificationBase } from "../type";

import {
    convertHexToDecimalSteps,
    convertToDecimal,
    MAX_VALUE,
    renderFinalResult,
    RTP,
    takeFirstValueFromSHA512,
} from "../helper/hash-helper";
import Styles from "./chicken-road.module.scss";

const ChickenRoadVerification = (props: VerificationBase) => {
    const { t } = useTranslate(["Common"]);
    const { provablyFair } = props;

    const digits = takeFirstValueFromSHA512(provablyFair?.finalHash ?? "434a7286");

    const renderLandscape = (
        <div className={`${Styles["chicken-road-wrapper"]}`}>
            <div className={Styles["info-group"]}>
                <div className={Styles["seed-key"]}>{t("pf_client_seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.clientSeed ?? "109310131004599"}</span>
                </div>
            </div>

            <div className={Styles["info-group"]}>
                <div className={Styles["seed-key"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.serverSeed ?? "10227f5722eb364df623đa69ca610a74"}</span>
                </div>
            </div>

            <div className={Styles["info-group"]}>
                <div className={Styles["seed-key"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span className={Styles["combined-hash"]}>
                        {provablyFair?.finalHash ??
                            "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}
                    </span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div className={Styles["info-group"]}>
                    <strong className={Styles["seed-key"]}>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                </div>
                <div className={Styles["info-group"]}>
                    <strong className={Styles["seed-key"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>
                        {provablyFair?.finalHash ??
                            "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}
                    </div>
                </div>
                <div className={Styles["info-group"]}>
                    <strong className={Styles["seed-key"]}>{t("pf_verification_para_2", { ns: "Common", value: "8" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>{takeFirstValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd")}</span>
                </div>
                <div className={Styles["info-group"]}>
                    <strong className={Styles["seed-key"]}>{t("pf_verification_para_3", { ns: "Common" })} </strong>
                    <span className={Styles["color-second"]}>
                        <pre>{convertHexToDecimalSteps(digits)}</pre>
                    </span>
                </div>
                <div className={Styles["info-group"]}>
                    <strong className={Styles["seed-key"]}>{t("pf_verification_para_4", { ns: "Common" })} </strong>

                    <div className={Styles["color-second"]}>
                        {MAX_VALUE} / ({convertToDecimal(digits)} + 1) * (1- {RTP}) ={" "}
                        <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
    return renderLandscape;
};

export default ChickenRoadVerification;
