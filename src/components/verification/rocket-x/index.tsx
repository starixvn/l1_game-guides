import { useTranslate } from "@tolgee/react";
import { VerificationBase } from "../type";
import Styles from "../verification.module.scss";
import { ORIENTATION } from "../../../common/constants";
import {
    MAX_VALUE,
    RTP,
    takeFirstValueFromSHA512,
    convertToDecimal,
    convertHexToDecimalSteps,
    renderFinalResult,
} from "../helper/hash-helper";
import { numberWithCommasAndSuffix } from "../../../helpers/number-helper";

const RocketXVerification = (props: VerificationBase) => {
    const { t } = useTranslate(["RocketX", "Common"]);
    const { provablyFair, orientation } = props;
    const isPortrait = orientation === ORIENTATION.portrait;

    const digits = takeFirstValueFromSHA512(provablyFair?.finalHash ?? "434a7286");

    const renderPortrait = (
        <div className={`${Styles["wrapper"]} ${Styles["portrait"]}`}>
            <div className={Styles["info-seed-portrait"]}>
                <div className={Styles["top"]}>
                    <div>
                        {t("pf_round", { ns: "Common" })}: {provablyFair?.roundId ?? "1234"}
                    </div>
                    <div className={Styles["result"]}>{`${numberWithCommasAndSuffix(provablyFair?.result ?? 4.15, 2, false)}x`}</div>
                </div>

                <div className={Styles["seed-key"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={`${Styles["seed-value"]} ${Styles["blur"]}`}>
                    <span>{provablyFair?.mergeClientSeed ?? "9bc4ba787a2550000ade06f6b987acbdb987acbdf0adc01"}</span>
                </div>
                <div className={Styles["seed-key"]}>{t("pf_server_Seed", { ns: "Common" })}</div>

                <div className={`${Styles["seed-value"]} ${Styles["blur"]}`}>
                    <span>{provablyFair?.serverSeed ?? "9bc4ba787a2550000ade06f6b987acbdb987acbdf0adc01"}</span>
                </div>
                <div className={Styles["seed-key"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>

                <span className={Styles["combined-hash"]}>
                    {provablyFair?.finalHash ??
                        "434a72867f9c19d7b4b706e18aa234c068b32468893c3739744c17408807be8aa64da88b4daec67575ce1be026de99de5117ad0eaf5672b1bd7236dd5ad0cd01"}
                </span>
            </div>
            <div className={Styles["convert-info-portrait"]}>
                <div className={Styles["container"]}>
                    <div className={Styles["content"]}>
                        <div>
                            <strong className={Styles["key"]}>{t("pf_final_result", { ns: "Common" })}: </strong>
                            <strong className={`${Styles["color-result-portrait"]} ${Styles["key"]}`}>{renderFinalResult(digits)}</strong>
                        </div>
                        <div>
                            <strong className={Styles["key"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                            <div className={`${Styles["break-word"]}`}>
                                {provablyFair?.finalHash ??
                                    "434a72867f9c19d7b4b706e18aa234c068b32468893c3739744c17408807be8aa64da88b4daec67575ce1be026de99de5117ad0eaf5672b1bd7236dd5ad0cd01"}
                            </div>
                        </div>
                        <div>
                            <strong className={Styles["key"]}>{t("pf_verification_para_2", { ns: "Common", value: "8" })}: </strong>{" "}
                            <span>{takeFirstValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd")}</span>
                        </div>
                        <div>
                            <strong className={Styles["key"]}>{t("pf_verification_para_3", { ns: "Common" })} </strong>
                            <span>
                                <pre>{convertHexToDecimalSteps(digits)}</pre>
                            </span>
                        </div>
                        <div>
                            <strong className={Styles["key"]}>{t("pf_verification_para_4", { ns: "Common" })} </strong>

                            <div>
                                {MAX_VALUE} / ({convertToDecimal(digits)} + 1) * (1- {RTP}) ={" "}
                                <span className={Styles["color-result-portrait"]}>{renderFinalResult(digits)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderLandscape = (
        <div className={Styles["wrapper"]}>
            <div className={Styles["info-seed"]}>
                <div className={Styles["seed-key"]}>{t("pf_server_Seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.serverSeed ?? "10227f5722eb364df623đa69ca610a74"}</span>
                </div>
                <div className={Styles["seed-key"]}>{t("pf_ header_merge_client_seed", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span>{provablyFair?.mergeClientSeed ?? "109310131004599"}</span>
                </div>
                <div className={Styles["seed-key"]}>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</div>
                <div className={Styles["seed-value"]}>
                    <span className={Styles["combined-hash"]}>
                        {provablyFair?.finalHash ??
                            "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}
                    </span>
                </div>
            </div>
            <div className={Styles["convert-info"]}>
                <div>
                    <strong>{t("pf_final_result", { ns: "Common" })}: </strong>
                    <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>
                        {provablyFair?.finalHash ??
                            "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}
                    </div>
                </div>
                <div>
                    <strong>{t("pf_verification_para_2", { ns: "Common", value: "8" })}: </strong>{" "}
                    <span className={Styles["color-second"]}>{takeFirstValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd")}</span>
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
                        {MAX_VALUE} / ({convertToDecimal(digits)} + 1) * (1- {RTP}) ={" "}
                        <span className={Styles["color-result"]}>{renderFinalResult(digits)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
    return isPortrait ? renderPortrait : renderLandscape;
};

export default RocketXVerification;
