import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { useImgVersionContext } from "../../../contexts/img-version";
import { VerificationBase } from "../type";
import Styles from "../verification.module.scss";
const MAX_VALUE = 2 ** 32;
const RTP = 0.03;

const sliceValueFromSHA512 = (hash: string) => {
    let arrHash = [];
    for(let i= 0; i < hash.length; i += 8 ) {
        arrHash.push(hash.slice(i, i+8));
    }
    return arrHash;
   
};

const convertToDecimal = (hex: string) => {
    return parseInt(hex, 16);
};

const convertToHexString = (hex: string) => {
    return hex.split("").join(",");
};

const calculateFinalResult = (hex: string = "4f1f06cd") => {
    const decimal = convertToDecimal(hex);
    return (decimal / (Math.pow(2, 32) - 1)) * 6 + 1 ;
};

const renderFinalResult = (hex: string) => {
    const dec = convertToDecimal(hex);
    return (
        <span>({dec} / (2^32 - 1)) * 6 + 1 = {calculateFinalResult(hex)}</span>
    );
}

const FootballDiceVerification = (props: VerificationBase) => {
    const { t } = useTranslate(["Spaceflight", "Common"]);
    const { dynamic, provablyFair } = props;
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion || "";
    const digits = sliceValueFromSHA512(provablyFair?.finalHash ?? "4f1f06cd");
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
                    <span className={Styles["color-result"]}>
                        <img src={`./static/images/pf/football-dice/dice-home-2.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <img src={`./static/images/pf/football-dice/dice-home-2.png?v=${verImg}`} alt="dice-home-2" />{"   "}
                        <span>4 | 6</span>{"   "}
                        <img src={`./static/images/pf/football-dice/dice-away-4.png?v=${verImg}`} alt="dice-home-2" />{" "}
                        <img src={`./static/images/pf/football-dice/dice-away-2.png?v=${verImg}`} alt="dice-home-2" />
                    </span>
                </div>
                <div>
                    <strong>{t("pf_header_combined_sha512_hash", { ns: "Common" })}</strong>
                    <div className={`${Styles["color-second"]} ${Styles["break-word"]}`}>{provablyFair?.finalHash ??
                        "4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d43d0vc70b10169124c474ef4f1f06cd13b89fd8c1057eab55d24c48baa184ef167a5bd42c0d4"}</div>
                </div>
                <div>
                    <strong>{t("pf_verification_para_3", { ns: "FootballDice" })}</strong>{" "}
                    <div className={Styles["color-second"]}>
                        <div>{digits[0]} {`=>`} {convertToDecimal(digits[0])}</div>
                        <div>{digits[1]} {`=>`} {convertToDecimal(digits[1])}</div>
                        <div>{digits[2]} {`=>`} {convertToDecimal(digits[2])}</div>
                        <div>{digits[3]} {`=>`} {convertToDecimal(digits[3])}</div>
                    </div>
                </div>
                <div>
                    <strong>{t("pf_verification_para_4", { ns: "Common" })} </strong>
                    <div className={Styles["color-second"]}><Markup content={t("pf_home_dice_1", {ns: "FootballDice"})} />: {renderFinalResult(digits[0])}</div>
                    <div className={Styles["color-second"]}><Markup content={t("pf_home_dice_2", {ns: "FootballDice"})} />: {renderFinalResult(digits[1])}</div>
                    <div className={Styles["color-second"]}><Markup content={t("pf_away_dice_1", {ns: "FootballDice"})} />: {renderFinalResult(digits[2])}</div>
                    <div className={Styles["color-second"]}><Markup content={t("pf_away_dice_2", {ns: "FootballDice"})} />: {renderFinalResult(digits[3])}</div>
                </div>
               
            </div>
        </div>
    );
};

export default FootballDiceVerification;
