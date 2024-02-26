import { t } from "i18next";
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
    const { dynamic, provablyFair, displayName, name } = props;
    const digits = takeFirstValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd");
    return (
        <ul className={`${Styles["container-guide"]}`}>
            <div className={`${Styles["form-title"]}`}>Verification</div>
            <div>
                <li className={`${Styles["verify-item"]}`}>
                    <h2 className="bold">Server Seed</h2>
                    <div className={`${Styles["info-seed"]}`}>{provablyFair?.serverSeed ?? "10227f5722eb364df623đa69ca610a74"}</div>
                </li>

                <li className={`${Styles["verify-item"]}`}>
                    <h2 className="bold">Merge Client Seed</h2>
                    <div className={`${Styles["info-seed"]}`}>{provablyFair?.mergeClientSeed ?? "109310131004599"}</div>
                </li>
                <li className={`${Styles["verify-item"]}`}>
                    <h2 className="bold">Combined SHA512 hash</h2>
                    <div className={`${Styles["info-seed"]}`}>
                        {provablyFair?.finalHash ??
                            "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70..."}
                    </div>
                </li>
                <li>
                    <div className={`${Styles["convert-info"]}`}>
                        <div>
                            <strong>Final Result: </strong>
                            {renderFinalResult(digits)}
                        </div>
                        <div>
                            <strong>Combined SHA512 hash</strong> <br></br>
                            {provablyFair?.finalHash ??
                                "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}
                        </div>
                        <div>
                            <strong>Take first 8 digits from SHA512: </strong>{" "}
                            {takeFirstValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd")}
                        </div>
                        <div>
                            <strong>Convert to Decimal </strong>
                            <pre>{convertHexToDecimalSteps(digits)}</pre>
                        </div>
                        <div>
                            <strong>Calculate Final Result </strong><br></br>
                            {MAX_VALUE} / ({convertToDecimal(digits)} + 1) * (1- {RTP}) = {renderFinalResult(digits)}
                        </div>
                    </div>
                </li>
            </div>
        </ul>
    );
};

export default SpaceFlightVerification;
