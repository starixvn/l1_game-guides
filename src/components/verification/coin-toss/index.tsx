import { useTranslate } from "@tolgee/react";
import { VerificationBase } from "../type";
import Styles from "../verification.module.scss";

const takeFirstValueFromSHA512 = (charNum: number, hash?: string) => {
    return hash?.slice(0, charNum);
};

const convertToDecimal = (hex?: string) => {
    return parseInt(hex ?? "0", 16);
};

const convertHexToDecimalSteps = (hex?: string) => {
    const decimal = convertToDecimal(hex);
    return `${hex} = ${decimal}`;
};

const renderFinalResult = (hex?: string) => {
    const decimal = convertToDecimal(hex);
    return decimal % 2;
};

const renderFinalResultWithText = (t: any, hex?: string) => {
    const result = renderFinalResult(hex);
    const text = result === 0 ? t("glossary_head", { ns: "CoinToss" }) : t("glossary_tail", { ns: "CoinToss" });
    return `${result} - ${text}`;
};

const defaultValue = {
    serverSeed: "10227f5722eb364df623đa69ca610a74",
    mergeClientSeed: "109310131004599",
    finalHash:
        "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4",
};

const CoinTossVerification = (props: VerificationBase) => {
    const { t } = useTranslate(["CoinToss", "Common"]);
    let { dynamic, provablyFair } = props;
    provablyFair = provablyFair ?? defaultValue;
    const digits = takeFirstValueFromSHA512(5, provablyFair.finalHash);
    return (
        <div className={Styles["wrapper"]}>
            <div className={Styles["info-seed"]}>
                <div className={Styles["seed-key"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.serverSeed}</span>
                </div>
                <div className={Styles["seed-key"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.mergeClientSeed}</span>
                </div>
                <div className={Styles["seed-key"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span className={Styles["combined-hash"]}>{provablyFair?.finalHash}</span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResultWithText(t, digits)}</span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>{provablyFair?.finalHash}</div>
                </div>
                <div>
                    <strong>{t("pf_take_first_{}_characters", { ns: "Common", value: "5" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>{digits}</span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_3", { ns: "Common" })} </strong>
                    <span className={Styles["color-second"]}>
                        <pre>{convertHexToDecimalSteps(digits)}</pre>
                    </span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Common" })} </strong>

                    <div className={Styles["color-second"]}>
                        {convertToDecimal(digits)} % 2 = <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinTossVerification;
