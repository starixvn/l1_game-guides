import React from "react";
import { useTranslate, T } from "@tolgee/react";
import { Markup } from "interweave";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { formatOdds } from "../../../helpers/number-helper";
import { BandarQiuQiuGameContentsProps } from "./type";
import MD5Tolgee from "../base/md5/md5-tolgee";
import { buildVersion } from "../../../common/constants";
import BandarQiuQiuGameRules, { bandarQiuQiuRootImgUrl } from "./bandar-qiu-qiu-game-rules";
import Styles from "./bandar-qiu-qiu-game.module.scss";

const BandarQiuQiuPayout: React.FC<{
    t: Function,
    gameConfigs: GameConfigs;
    fractionalOddsFormat?: boolean;
}> = ({ t, gameConfigs, fractionalOddsFormat }) => {
    const { odds } = gameConfigs;

    return (
        <li className={`guide-item ${Styles["custom-list"]}`} >
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                {
                    [3, 2, 1].map((index) => <li key={index}>{t(`payouts_para_${index}`, { ns: "Common" })}</li>)
                }
                <li className={Styles["contentBeforeEmpty"]}>
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className="bold">{t("header_hand_ranking")}</th>
                                    <th className="bold"><Markup content={t("header_odds", { ns: "Common" })} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.entries({
                                        "six_devil": odds?.sixDevil,
                                        "twin": odds?.twin,
                                        "big": odds?.big,
                                        "small": odds?.small,
                                        "qiuqiu": odds?.qiuQiu,
                                        "ordinary": odds?.ordinaryCard
                                    }).map(([key, value], index) => <tr key={index}>
                                        <td>
                                            {t(`glossary_hand_ranking_${key}`)}
                                        </td>
                                        <td >
                                            {formatOdds(value, fractionalOddsFormat)}
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const BandarQiuQiuMd5: React.FC<{ t: Function, locale: string | undefined }> = ({ t, locale }) => {
    const notedElement = `<div>
        <div class="bold">${t("Example_md5_note")}</div>
        <ul class="desc"> 
            <li>${t(`example_md5_note_1`, {
        "md5Result": `<img src="${bandarQiuQiuRootImgUrl}md5result.png"/>`
    })}</li>
            <li>${t("example_md5_note_2")}</li>
        </ul>
    </div>`;

    return (
        <MD5Tolgee {...{
            step1ImageUrl: `${bandarQiuQiuRootImgUrl}md5_step1_${locale}.png?v=${buildVersion}`,
            step2ImageUrl: `${bandarQiuQiuRootImgUrl}md5_step2_${locale}.png?v=${buildVersion}`,
            step3ImageUrl: `${bandarQiuQiuRootImgUrl}md5_step3.png?v=${buildVersion}`,
            step4ImageUrl: `${bandarQiuQiuRootImgUrl}md5_step4.png?v=${buildVersion}`,
            note: <Markup content={notedElement} />

        }} />
    );
}

const BandarQiuQiuIntroduction: React.FC<{ t: Function }> = ({ t }) => {
    return (
        <li className={`guide-item ${Styles["custom-list"]}`} >
            <h2>{t("title_introduction", { ns: "Common" })}</h2>
            <div className="content">{t("intro_para_1")}</div>
        </li>
    )
}

const BandarQiuQiuGameContents: React.FC<BandarQiuQiuGameContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate(["BandarQiuQiu", "Common"]);

    return (
        <div className={`${Styles["bandar-qiuqiu"]}`}>
            <ul className={`game-guide`} >
                <BandarQiuQiuIntroduction t={t} />
                <BandarQiuQiuGameRules t={t} maxBet={gameConfigs.maxBet} userStakeLevel={userStakeLevel} />
                <BandarQiuQiuPayout t={t} gameConfigs={gameConfigs} fractionalOddsFormat={fractionalOddsFormat} />
                <BandarQiuQiuMd5 t={t} locale={locale} />
                <TermsAndConditionsTolgee />
            </ul >
        </div>
    );
};

export default BandarQiuQiuGameContents;
