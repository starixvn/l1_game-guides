import { useTranslate } from "@tolgee/react";
import { VerificationBase } from "../type";
import Styles from "../verification.module.scss";
const MAX_VALUE = 2 ** 32;
const RTP = 0.03;

const takeFirstValueFromSHA512 = (hash: string) => {
    return hash?.slice(0, 8);
};

const convertToDecimal = (hex: string) => {
    return parseInt(hex, 16);
};

const convertToHexString = (hex: string) => {
    return hex.split("").join(",");
};

const convertHexToDecimalSteps = (hex: string = "4f1f06cd") => {
    const decimal = convertToDecimal(hex);
    const prefix = `(${convertToHexString(hex)})=${decimal}`;
    const suffix = `=${decimal}`;
    const steps = hex.split("").map((digit, index) => {
        const power = hex.length - 1 - index;
        const stepValue = convertToDecimal(digit) * Math.pow(16, power);
        const currentDecimal = stepValue.toString().padEnd(hex.length * 2 + (index === 0 ? 1 : 0));
        return `${currentDecimal} (${digit} * (16^${power}))`;
    });
    return `${prefix}\n${steps.join("\n+")}${suffix}`;
};

const renderFinalResult = (hex: string = "4f1f06cd") => {
    const decimal = convertToDecimal(hex);
    return (MAX_VALUE / (decimal + 1)) * (1 - RTP);
};

const SpaceFlightVerification = (props: VerificationBase) => {
    const { t } = useTranslate(["Spaceflight", "Common"]);
    const { dynamic, provablyFair } = props;
    const digits = takeFirstValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd");
    return (
        <div className={Styles["wrapper"]}>
            <div className={Styles["info-seed"]}>
                <div className={Styles["seed-key"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}><span>{provablyFair?.serverSeed ?? "10227f5722eb364df623đa69ca610a74"}</span></div>
                <div className={Styles["seed-key"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}><span>{provablyFair?.mergeClientSeed ?? "109310131004599"}</span></div>
                <div className={Styles["seed-key"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span className={Styles["combined-hash"]}>{provablyFair?.finalHash ??
                            "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}</span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>{provablyFair?.finalHash ??
                        "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}</div>
                </div>
                <div>
                    <strong>{t("pf_verification_para_2", { ns: "Spaceflight", value: "8" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>{takeFirstValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd")}</span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_3", { ns: "Spaceflight" })} </strong>
                    <span className={Styles["color-second"]}><pre>{convertHexToDecimalSteps(digits)}</pre></span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Spaceflight" })} </strong>
                    
                    <div className={Styles["color-second"]}>{MAX_VALUE} / ({convertToDecimal(digits)} + 1) * (1- {RTP}) = <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span></div>
                </div>
            </div>
        </div>
    );
};

export default SpaceFlightVerification;
