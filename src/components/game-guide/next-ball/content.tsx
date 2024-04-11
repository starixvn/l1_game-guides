import { FC } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { formatOddsNotTwoDot, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { Markup } from "interweave";
import { Common, NextBall, SabaNumber } from "./constants";
import { NextBallGameConfigs, NextBallGameGuideContentsProps } from "./type";

const NextBallIntroduction: FC<{ displayName?: string }> = ({ displayName }) => {
    const { t } = useTranslate([NextBall, Common]);

    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: Common })}</h2>
            <div className="content">
                <T keyName={"intro_para_1"} params={{ gamename: displayName }} ns={NextBall}></T>
            </div>
        </li>
    );
};

const NextBallGameRules: FC<{ userStakeLevel: UserStakeLevelProps | undefined; maxBet: number }> = ({ userStakeLevel, maxBet }) => {
    const { t } = useTranslate([NextBall, Common, SabaNumber]);

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: Common })}</h2>
            <ul className="desc">
                <li>{t(`gamerules_para_1`)}</li>
                <li>
                    <T
                        keyName="gamerules_para_2"
                        ns={NextBall}
                        params={{ maxbet: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                    />
                </li>
                <li>{t("gamerules_para_3", { ns: SabaNumber })}</li>
                <li>{t("gamerules_para_4")}</li>
                <div className="table-container">
                    <table className={`table`}>
                        <thead className="text-center">
                            <tr>
                                <th style={{ width: "10rem" }}>{t("header_betoption", { ns: Common })}</th>
                                <th>{t("header_winning_condition", { ns: SabaNumber })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["over", "under", "odd", "even"].map((item) => (
                                <tr key={item}>
                                    <td className="text-center">{t(`glossary_${item}`)}</td>
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

const NextBallPayout: FC<{
    userStakeLevel: UserStakeLevelProps | undefined;
    gameConfigs: NextBallGameConfigs;
    fractionalOddsFormat?: boolean;
}> = ({ gameConfigs, fractionalOddsFormat, userStakeLevel }) => {
    const { t } = useTranslate([NextBall, Common, SabaNumber]);
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
        odd: {
            odds: {
                min: oddsRange?.min?.odd,
                max: oddsRange?.max?.odd,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.odd),
        },
        even: {
            odds: {
                min: oddsRange?.min?.even,
                max: oddsRange?.max?.even,
            },
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.even),
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
                        ns={SabaNumber}
                    />
                </li>
                <li>{t("payouts_para_4", { ns: SabaNumber })}</li>
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
                                    <td>{t(`glossary_${item}`)}</td>
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

const NextBallGameGuideContent: FC<NextBallGameGuideContentsProps> = ({
    userStakeLevel,
    gameConfigs,
    fractionalOddsFormat,
    displayName,
}) => {
    return (
        <div className={`bacball`}>
            <ul className={`game-guide`}>
                <NextBallIntroduction displayName={displayName || ""} />
                <NextBallGameRules userStakeLevel={userStakeLevel} maxBet={gameConfigs.maxBet} />
                <NextBallPayout userStakeLevel={userStakeLevel} gameConfigs={gameConfigs} fractionalOddsFormat={fractionalOddsFormat} />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default NextBallGameGuideContent;
