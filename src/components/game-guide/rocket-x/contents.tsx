import { useTranslate } from "@tolgee/react";
import React, { useEffect } from "react";
import appSettings from "../../../common/app-settings";
import { numberWithCommas, numberWithCommasAndSuffix } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { scrollToIDContent } from "../../shared/md5-number";
import { ContentList } from "../base/terms-and-conditions/languages/types";
import { RenderContentByList } from "../base/terms-and-conditions/terms-and-conditions";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { RocketXContentsProps } from "./type";

const renderGameRules = (t: Function) => {
    let commonResources: ContentList = {
        header: t("title_gamerules", { ns: "Common" }),
        details: [
            t(`game_rules_para_1`),
            t(`game_rules_para_2`),
            t(`game_rules_para_3`),
            t(`game_rules_para_4`),
            t(`game_rules_para_5`),
            t(`game_rules_para_6`),
            t(`game_rules_para_7`),
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
        details: [t(`cash_out_para_1`), t(`cash_out_para_2`)],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderAutoPlay = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_auto_play", { ns: "Common" }),
        details: [t(`auto_play_para_1`), t(`auto_play_para_2`), t(`auto_play_para_3`)],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderStatistic = (t: Function) => {
    let commonResources: ContentList = {
        header: t("title_statistics"),
        details: [t(`statistics_para_1`), t(`statistics_para_2`), t(`statistics_para_3`)],
    };
    return <RenderContentByList resources={commonResources} />;
};

const renderAutoCashout = (t: Function) => {
    let commonResources: ContentList = {
        header: t("subtitle_auto_cashout", { ns: "Common" }),
        details: [t(`auto_cash_out_para_1`), t(`auto_cash_out_para_2`)],
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
                <li>{t("payouts_para_1")}</li>
                <li>{t("payouts_para_2")}</li>
                <li>{t("payouts_para_3")}</li>
                <li>{t("payouts_para_4", { min: minBetMain, max: maxBetMain })}</li>
                <li>{t("payouts_para_5", { maxWin: maxWin })}</li>
            </ul>
        </li>
    );
};

const renderMultiplier = (t: Function, gameConfigs: GameConfigs) => {
    return (
        <li className="guide-item">
            <h2>{t("title_multiplier", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    {t("multiplier_para_1", { maxMultiplier: `${numberWithCommasAndSuffix(gameConfigs?.maxMultiplier || 0, 2, false)}` })}
                </li>
                <li>{t("multiplier_para_2")}</li>
            </ul>
        </li>
    );
};

const RocketXContents: React.FC<RocketXContentsProps> = ({
    gameConfigs,
    locale,
    userStakeLevel,
    displayName,
    name,
    scrollToId,
}) => {
    const { t } = useTranslate(["RocketX", "Common"]);
    const rootImgUrl = `${appSettings.resourceUrl}${name}/`;
    useEffect(() => {
        scrollToId !== "" && scrollToIDContent(scrollToId);
    });

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className="content">{t("intro_para_1", { ns: "RocketX", gameName: displayName })}</div>
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
                    <li className="number-dot">
                        <span className="title-text">{t("title_statistics")}</span>
                        {renderStatistic(t)}
                    </li>
                </ul>
            </li>
            {renderMultiplier(t, gameConfigs)}
            {renderPayout(t, gameConfigs, userStakeLevel)}

            <TermsAndConditionsTolgee extendDetails={[t("terms_conditions_para_1")]} />
        </ul>
    );
};

export default RocketXContents;
