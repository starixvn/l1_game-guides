import { useTranslate } from "@tolgee/react";
import { VerificationBase } from "../type";
import Styles from "../verification.module.scss";

export const takeFirstValueFromSHA512 = (charNum: number, hash?: string) => {
    return hash?.slice(0, charNum);
};

export const convertToDecimal = (hex?: string) => {
    return parseInt(hex ?? "0", 16);
};

export const convertToHexString = (hex: string) => {
    return hex.split("").join(",");
};

export const convertHexToDecimalSteps = (hex: string = "4f1f06cd") => {
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

export const renderFinalResult = (hex?: string) => {
    const decimal = convertToDecimal(hex);
    return (4294967296 / (decimal + 1)) * (1 - 0.03);
};

export const renderFinalResultWithText = (t: any, hex?: string) => {
    const result = renderFinalResult(hex);
    return `${result}`;
};

const defaultValue = {
    serverSeed: "Elby29FHLbSIGUUjShPCIOYNj4EXu_XJl-6CJbrx",
    clientSeed: "2248",
    finalHash:
        "bf57f55c53acd52d0a2d7faf0e262a651288b027bb6a779a50902693bf3908f6967415fe2e114b8fae5abc16090729c615876d5e9d2090e48bdf3ad0f4fadcb4",
};

const CoinMiningVerification = (props: VerificationBase) => {
    const { t } = useTranslate(["CoinMining", "Common"]);
    let { dynamic, provablyFair } = props;
    provablyFair = provablyFair ?? defaultValue;
    const digits = takeFirstValueFromSHA512(8, provablyFair.finalHash);
    return (
        <div className={Styles["wrapper"]}>
            <div className={Styles["info-seed"]}>
                <div className={Styles["seed-key"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.serverSeed}</span>
                </div>
                <div className={Styles["seed-key"]}>{t("pf_client_seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.clientSeed}</span>
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
                    <strong>{t("pf_take_first_{}_characters", { ns: "Common", value: "8" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>{digits}</span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_3", { ns: "Common" })} </strong>
                    <span className={Styles["color-second"]}>
                        <span className={Styles["color-second"]}><pre>{convertHexToDecimalSteps(digits)}</pre></span>
                    </span>
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Common" })} </strong>
                    <div className={Styles["color-second"]}>
                        {4294967296} / ({convertToDecimal(digits)} + 1) * (1 - 0.03) = 
                        <span className={Styles["color-result"]}>
                            {renderFinalResult(digits)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinMiningVerification;
