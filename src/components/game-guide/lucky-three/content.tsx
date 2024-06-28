import { FC } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { formatOddsNotTwoDot, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { Markup } from "interweave";
import { Common, LuckyThree, SabaNumber, NextBall } from "./constants";
import { LuckyThreeGameConfigs } from "./type";

const LuckyThreeIntroduction: FC<{ displayName?: string }> = ({ displayName }) => {
    const { t } = useTranslate([LuckyThree, Common]);

    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: Common })}</h2>
            <div className="content">
                <T keyName={"intro_para_1"} params={{ gamename: displayName }} ns={LuckyThree}></T>
            </div>
        </li>
    );
};

const LuckyThreeGameRules: FC<{ userStakeLevel: UserStakeLevelProps | undefined; maxBet: number }> = ({ userStakeLevel, maxBet }) => {
    const { t } = useTranslate([LuckyThree, Common, SabaNumber, NextBall]);
    const maxBetValue = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: Common })}</h2>
            <ul className="desc">
                <li>{t(`gamerules_para_1`)}</li>
                <li>
                    <T keyName="gamerules_para_2" ns={"NextBall"} params={{ maxbet: maxBetValue }} />
                </li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_3", { ns: SabaNumber })}</li>

                <div className="table-container">
                    <table className={`table`}>
                        <thead className="text-center">
                            <tr>
                                <th style={{ width: "10rem" }}>{t("header_betoption", { ns: Common })}</th>
                                <th>{t("header_winning_condition", { ns: SabaNumber })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["over", "under", "blue3", "blue2", "red2", "red3"].map((item) => (
                                <tr key={item}>
                                    {item === "over" || item === "under" ? (
                                        <td className="text-center">{t(`glossary_${item}`)}</td>
                                    ) : (
                                        <td className="text-center">
                                            <img src={`./static/images/lucky-three/${item}.svg`} alt="guide-item" />
                                        </td>
                                    )}

                                    <td>{t(`descrip_${item}_win`)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ul>
        </li>
    );
};

const LuckyThreePayout: FC<{
    userStakeLevel: UserStakeLevelProps | undefined;
    gameConfigs: LuckyThreeGameConfigs;
    fractionalOddsFormat?: boolean;
}> = ({ gameConfigs, fractionalOddsFormat, userStakeLevel }) => {
    const { t } = useTranslate([LuckyThree, Common, SabaNumber]);
    const { maxWinPerRound, oddsRange, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    
    const data = {
        over: {
            odds: {
                min: oddsRange?.min?.over,
                max: oddsRange?.max?.over,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.over),
        },
        under: {
            odds: {
                min: oddsRange?.min?.under,
                max: oddsRange?.max?.under,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.under),
        },
        blue3: {
            odds: {
                min: oddsRange?.min?.blue3,
                max: oddsRange?.max?.blue3,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.blue3),
        },
        blue2: {
            odds: {
                min: oddsRange?.min?.blue2,
                max: oddsRange?.max?.blue2,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.blue2),
        },
        red2: {
            odds: {
                min: oddsRange?.min?.red2,
                max: oddsRange?.max?.red2,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.red2),
        },
        red3: {
            odds: {
                min: oddsRange?.min?.red3,
                max: oddsRange?.max?.red3,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.red3),
        },
    };

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: Common })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1", { ns: SabaNumber })}</li>
                <li>{t("payouts_para_2", { ns: SabaNumber })}</li>
                <li>
                    <T
                        keyName={"payouts_para_3"}
                        params={{ maxpayout: numberWithCommas((maxWinPerRound ?? 0) * Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                        ns="SabaNumber"
                    />
                </li>
                <li>{t("payouts_para_4", { ns: "SabaNumber" })}</li>
                <div className="table-container">
                    <table className={`table text-center`}>
                        <thead>
                            <tr>
                                <th>{t("header_betoption", { ns: Common })}</th>
                                <th>
                                    <Markup content={t("header_odds_range", { ns: SabaNumber })} />
                                </th>
                                <th>
                                    <Markup content={t("header_betlimit", { ns: Common })} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data).map(({ 0: item, 1: { odds, maxBet } }) => (
                                <tr key={item}>
                                    {item === "over" || item === "under" ? (
                                        <td className="text-center">{t(`glossary_${item}`)}</td>
                                    ) : (
                                        <td className="text-center">
                                            <img src={`./static/images/lucky-three/${item}.svg`} alt="guide-item" />
                                        </td>
                                    )}

                                    <td>{`${formatOddsNotTwoDot(odds?.min ?? 0, fractionalOddsFormat)}-${formatOddsNotTwoDot(
                                        odds?.max ?? 0,
                                        fractionalOddsFormat
                                    )}`}</td>
                                    <td>{`${numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0) ?? 0)}-${numberWithCommas(
                                        maxBet ?? 0
                                    )}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ul>
        </li>
    );
};

export interface LuckyThreeGameGuideContentsProps {
    gameConfigs: LuckyThreeGameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
}

const LuckyThreeGameGuideContent: FC<LuckyThreeGameGuideContentsProps> = ({
    userStakeLevel,
    gameConfigs,
    fractionalOddsFormat,
    displayName,
}) => {
    return (
        <ul className={`game-guide`}>
            <LuckyThreeIntroduction displayName={displayName || ""} />
            <LuckyThreeGameRules userStakeLevel={userStakeLevel} maxBet={gameConfigs.maxBet} />
            <LuckyThreePayout userStakeLevel={userStakeLevel} gameConfigs={gameConfigs} fractionalOddsFormat={fractionalOddsFormat} />
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default LuckyThreeGameGuideContent;
