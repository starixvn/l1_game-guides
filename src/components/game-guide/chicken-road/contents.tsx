import { useTranslate } from "@tolgee/react";
import React, { useEffect } from "react";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { scrollToIDContent } from "../../shared/md5-number";
import { ContentList } from "../base/terms-and-conditions/languages/types";
import { RenderContentByList } from "../base/terms-and-conditions/terms-and-conditions";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { ChickenRoadContentsProps } from "./type";

const renderGameRules = (t: Function) => {
    const details = [];
    for (let i = 1; i <= 9; i++) {
        details.push(t(`gamerules_para_${i}`, { ns: "ChickenRoad" }));
    }

    const commonResources: ContentList = {
        header: t("title_gamerules", { ns: "Common" }),
        details,
    };
    return (
        <li className="guide-item">
            <h2>{commonResources.header}</h2>
            <RenderContentByList resources={commonResources} />
        </li>
    );
};

const renderCashingOut = (t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("subtitle_cash_out", { ns: "Common" })}</h2>
            <ul className={`desc`}>
                <li>{t(`crash_cashout_para_1`, { ns: "Common" })}</li>
                <li>{t(`cashout_para_2`, { ns: "ChickenRoad" })}</li>
            </ul>
        </li>
    );
};

const renderDifficulty = (t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("subtitle_difficulty", { ns: "ChickenRoad" })}</h2>
            <ul className={`desc`}>
                <li>{t(`difficulty_para_1`, { ns: "ChickenRoad" })}</li>
                <li>{t(`difficulty_para_2`, { ns: "ChickenRoad" })}</li>
            </ul>
        </li>
    );
};

const renderDifficultyTable = (t: Function, gameConfigs: GameConfigs) => {
    const fixedStepsMultiplierConfigs = gameConfigs.fixedStepsMultiplierConfigs;
    const getNoOfLand = (mode: number) => {
        return fixedStepsMultiplierConfigs?.find((config) => config.mode === mode)?.multiplierSteps.length;
    };
    const getMaxMultiplier = (mode: number) => {
        const config = fixedStepsMultiplierConfigs?.find((config) => config.mode === mode);
        return config?.multiplierSteps[config?.multiplierSteps.length - 1];
    };
    const modes = [
        { mode: t("difficulty_easy", { ns: "ChickenRoad" }), noOfLand: getNoOfLand(1), maxMultiplier: getMaxMultiplier(1) },
        { mode: t("difficulty_medium", { ns: "ChickenRoad" }), noOfLand: getNoOfLand(2), maxMultiplier: getMaxMultiplier(2) },
        { mode: t("difficulty_hard", { ns: "ChickenRoad" }), noOfLand: getNoOfLand(3), maxMultiplier: getMaxMultiplier(3) },
        { mode: t("difficulty_hardcore", { ns: "ChickenRoad" }), noOfLand: getNoOfLand(4), maxMultiplier: getMaxMultiplier(4) },
    ];

    return (
        <div className="table-container">
            <table className="table">
                <thead className="text-center">
                    <tr>
                        <th className="bold">{t("subtitle_difficulty", { ns: "ChickenRoad" })}</th>
                        <th className="bold">{t("header_lanes", { ns: "ChickenRoad" })}</th>
                        <th className="bold">{t("crash_header_max_multiplier", { ns: "Common" })}</th>
                    </tr>
                </thead>
                <tbody>
                    {modes.map(({ mode, noOfLand, maxMultiplier }) => (
                        <tr key={mode}>
                            <td className="text-center">{mode}</td>
                            <td className="text-center">{noOfLand}</td>
                            <td className="text-center">{maxMultiplier}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
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
            <ul className={`desc`}>
                <li>{t("payouts_para_3")}</li>
                <li>{t("crash_payouts_para_2")}</li>
                <li>{t("payouts_para_2")}</li>
                <li>{t("crash_payouts_para_4", { min: minBetMain, max: maxBetMain })}</li>
                <li>{t("crash_payouts_para_5", { maxWin: maxWin })}</li>
            </ul>
        </li>
    );
};

const ChickenRoadContents: React.FC<ChickenRoadContentsProps> = ({
    gameConfigs,
    locale,
    userStakeLevel,
    displayName,
    name,
    scrollToId,
}) => {
    const { t } = useTranslate(["Common", "ChickenRoad"]);
    useEffect(() => {
        scrollToId !== "" && scrollToIDContent(scrollToId);
    });

    return (
        <ul className={`game-guide game-crash-container`}>
            <li className={`guide-item`}>
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className={`content`}>{t("intro_para_1", { ns: "ChickenRoad", gameName: displayName })}</div>
            </li>
            {renderGameRules(t)}
            {renderCashingOut(t)}
            {renderDifficulty(t)}
            {renderDifficultyTable(t, gameConfigs)}
            {renderPayout(t, gameConfigs, userStakeLevel)}

            <TermsAndConditionsTolgee extendDetails={[t("crash_terms_conditions_para_1")]} />
        </ul>
    );
};

export default ChickenRoadContents;
