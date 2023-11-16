import { useTranslate } from "@tolgee/react";
import React from "react";
import { buildVersion } from "../../../common/constants";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import MDCrashTolgee from "../base/md5/md5-crash-tolgee";
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
            t(`gamerules_para_5`),
            t(`gamerules_para_6`),
            t(`gamerules_para_7`)
        ],
    };
    return (
    <li className="guide-item">
        <h2>{commonResources.header}</h2>
        <RenderContentByList resources={commonResources} />
    </li>);
};

const renderCashingOut = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_cashing_out", { ns: "Common" }),
        details: [
            t(`cashing_out_para_1`),
            t(`cashing_out_para_2`),
            t(`cashing_out_para_3`),
            t(`cashing_out_para_4`),
        ],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderAutoPlay = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_auto_play", { ns: "Common" }),
        details: [
            t(`auto_play_para_1`),
            t(`auto_play_para_2`),
            t(`auto_play_para_4`)
        ],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderAutoCashout = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_auto_cashout", { ns: "Common" }),
        details: [
            t(`auto_cashout_para_1`),
            t(`auto_cashout_para_2`),
        ],
    };
    return <RenderContentByList resources={commonResources} />
    
};




const renderPayout = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { minBet, maxBet } = gameConfigs;

    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
   

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li >{t("payout_para_1")}</li>
                <li >{t("payout_para_2")}</li>
                <li >{t("payouts_para_2", { ns: "Common" })}</li>
                <li >{t("payout_para_3", { min: minBetMain, max: maxBetMain })}</li>
                <li >{t("payout_para_4", { maxWin: minBet })}</li>
            </ul>
        </li>
    );
};

const renderMultiplier = (t: Function, gameConfigs: GameConfigs) => {
    return (
        <li className="guide-item">
            <h2>{t("title_multiplier", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("multiplier_para_1", {maxMultiplier: gameConfigs.maxBet})}</li>
                <li>{t("multiplier_para_2")}</li>
            </ul>
        </li>
    );
}

const renderListItem = (t: Function, listItem: Array<string>) => {
    listItem.map((item, index) => <li className="number-dot" key={index}>{t(`${item}`, { ns: "Spaceflight" })}</li>)
}

const SpaceFlightContents: React.FC<SpaceFlightContentsProps> = ({ gameConfigs, locale, userStakeLevel }) => {
    const { t } = useTranslate(["Spaceflight", "Common"]);
    const rootImgUrl = "/static/images/space-flight/";

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className="content">{t("intro_para_1", { ns: "Spaceflight" })}</div>
            </li>
            {renderGameRules(t)}
            <li className="guide-item">
                <h2>{t("title_features", { ns: "Common" })}</h2>
                <ul className="style-number-rule">
                    <li className="number-dot">{t("subtitle_cashing_out", { ns: "Common" })}
                        {renderCashingOut(t)}
                    </li>
                    <li className="number-dot">{t("subtitle_auto_cashout", { ns: "Common" })}{renderAutoCashout(t)}</li>
                    <li className="number-dot">{t("subtitle_auto_play", { ns: "Common" })}{renderAutoPlay(t)}</li>
                </ul>
            </li>
            {renderMultiplier(t, gameConfigs)}
            {renderPayout(t, gameConfigs, userStakeLevel)}
            <MDCrashTolgee {...{
                step1ImageUrl: `${rootImgUrl}md5_step1_${locale}.png?v=${buildVersion}`,
                step2ImageUrl: `${rootImgUrl}md5_step2_${locale}.png?v=${buildVersion}`,
                step3ImageUrl: `${rootImgUrl}md5_step3.png?v=${buildVersion}`,
                step4ImageUrl: `${rootImgUrl}md5_step4.png?v=${buildVersion}`,
                note: "",
                validationDescription: <div><div>{t(`md5valid_para_1`)}</div><img src={`${rootImgUrl}statistics-bar.png?v=${buildVersion}`} alt="statistics-bar"/></div>,

            }} />
            < TermsAndConditionsTolgee extendDetails={[t("terms_conditions_para_1")]} />
        </ul >
    );
};

export default SpaceFlightContents;
