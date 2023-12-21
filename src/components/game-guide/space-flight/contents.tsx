import { useTranslate } from "@tolgee/react";
import React, { useEffect } from "react";
import appSettings from "../../../common/app-settings";
import { buildVersion } from "../../../common/constants";
import { numberWithCommas, numberWithCommasAndSuffix } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import ScrollToMD5 from "../../shared/md5-number";
import MD5CrashTolgee from "../base/md5/md5-crash-tolgee";
import { ContentList } from "../base/terms-and-conditions/languages/types";
import { RenderContentByList } from "../base/terms-and-conditions/terms-and-conditions";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { SpaceFlightContentsProps } from "./type";

const renderGameRules = (t: Function) => {
    let commonResources: ContentList = {
        header: t("title_gamerules", { ns: "Common" }),
        details: [
            t(`gamerules_para_1`),
            t(`gamerules_para_2`),
            t(`gamerules_para_3`),
            t(`gamerules_para_4`),
            t(`gamerules_para_4a`),
            t(`gamerules_para_5`),
            t(`gamerules_para_6`),
            t(`gamerules_para_7`),
        ],
    };
    return (
        <li className="guide-item">
            <h2>{commonResources.header}</h2>
            <RenderContentByList resources={commonResources} />
        </li>
    );
};

const renderCashingOut = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_cash_out", { ns: "Common" }),
        details: [t(`cashing_out_para_1`), t(`cashing_out_para_2`), t(`cashing_out_para_3`), t(`cashing_out_para_4`)],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderAutoPlay = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_auto_play", { ns: "Common" }),
        details: [t(`auto_play_para_1`), t(`auto_play_para_2`), t(`auto_play_para_4`)],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderAutoCashout = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_auto_cashout", { ns: "Common" }),
        details: [t(`auto_cashout_para_1`), t(`auto_cashout_para_2`)],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderPayout = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { minBet, maxBet, maxWinPerRound } = gameConfigs;
    const maxBetTmp = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);

    const maxBetMain = numberWithCommas(maxBetTmp);
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetTmp);

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_3", { ns: "Common" })}</li>
                <li>{t("payouts_para_2")}</li>
                <li>{t("payouts_para_2", { ns: "Common" })}</li>
                <li>{t("payouts_para_3", { min: minBetMain, max: maxBetMain })}</li>
                <li>{t("payouts_para_4", { maxWin: maxWin })}</li>
            </ul>
        </li>
    );
};

const renderMultiplier = (t: Function, gameConfigs: GameConfigs) => {
    return (
        <li className="guide-item">
            <h2>{t("title_multiplier", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("multiplier_para_1", { maxMultiplier: `${numberWithCommasAndSuffix(gameConfigs.maxBet, 2, false)}` })}</li>
                <li>{t("multiplier_para_2")}</li>
            </ul>
        </li>
    );
};

const SpaceFlightContents: React.FC<SpaceFlightContentsProps> = ({
    gameConfigs,
    locale,
    userStakeLevel,
    isScrollMD5,
    displayName,
    name,
}) => {
    const { t } = useTranslate(["Spaceflight", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className="content">{t("intro_para_1", { ns: "Spaceflight", gameName: displayName })}</div>
            </li>
            {renderGameRules(t)}
            <li className="guide-item">
                <h2>{t("title_features", { ns: "Common" })}</h2>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="title-text">{t("subtitle_cash_out", { ns: "Common" })}</span>
                        {renderCashingOut(t)}
                    </li>
                    <li className="number-dot">
                        <span className="title-text">{t("subtitle_auto_cashout", { ns: "Common" })}</span>
                        {renderAutoCashout(t)}
                    </li>
                    <li className="number-dot">
                        <span className="title-text">{t("subtitle_auto_play", { ns: "Common" })}</span>
                        {renderAutoPlay(t)}
                    </li>
                </ul>
            </li>
            {renderMultiplier(t, gameConfigs)}
            {renderPayout(t, gameConfigs, userStakeLevel)}
            <MD5CrashTolgee
                {...{
                    step1ImageUrl: `${rootImgUrl}step_1_${locale}.png?v=${buildVersion}`,
                    step2ImageUrl: `${rootImgUrl}step_2_${locale}.png?v=${buildVersion}`,
                    step3ImageUrl: `${rootImgUrl}step_3.png?v=${buildVersion}`,
                    step4ImageUrl: `${rootImgUrl}step_4.png?v=${buildVersion}`,
                    note: "",
                    validationDescription: (
                        <div>
                            <div>{t(`md5valid_para_1`)}</div>
                            <img src={`${rootImgUrl}statistics-bar.png?v=${buildVersion}`} alt="statistics-bar" />
                        </div>
                    ),
                }}
            />
            <TermsAndConditionsTolgee extendDetails={[t("terms_conditions_para_1")]} />
        </ul>
    );
};

export default SpaceFlightContents;
