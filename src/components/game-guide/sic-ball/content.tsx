import { FC } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds, formatOddsNotTwoDot, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { Markup } from "interweave";
import { Common, SabaNumber, NextBall, SicBall } from "./constants";
import { SicBallGameConfigs } from "./type";

const SicBallIntroduction: FC<{ displayName?: string }> = ({ displayName }) => {
    const { t } = useTranslate([SicBall, Common]);

    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: Common })}</h2>
            <div className="content">
                <T keyName={"intro_para_1"} params={{ Gamename: displayName }} ns={SicBall}></T>
            </div>
        </li>
    );
};

const SicBallGameRules: FC<{ userStakeLevel: UserStakeLevelProps | undefined; gameConfigs: SicBallGameConfigs }> = ({
    userStakeLevel,
    gameConfigs,
}) => {
    const { t } = useTranslate([Common, SabaNumber, NextBall, SicBall]);
    const maxBetPerRound = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? gameConfigs.maxBet, gameConfigs.maxBet));
    const minBet = gameConfigs.minBet;
    const maxBet = Math.min(userStakeLevel?.maxBet ?? gameConfigs.maxBet, gameConfigs.maxBetPerChoices.big);
    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: Common })}</h2>
            <ul className="desc">
                <li>{t(`gamerules_para_1`, { ns: SicBall })}</li>
                <li>{t(`gamerules_para_5`, { ns: SabaNumber })}</li>

                <li>
                    <T
                        keyName="gamerules_para_3"
                        ns={"SicBall"}
                        params={{ Min: numberWithCommas(minBet), Max: numberWithCommas(maxBet), maxbet: maxBetPerRound }}
                    />
                </li>
                <li>{t("gamerules_para_4", { ns: SicBall })}</li>
                <li>{t(`gamerules_para_3`, { ns: SabaNumber })}</li>
            </ul>
        </li>
    );
};

const SicBallPayout: FC<{
    userStakeLevel: UserStakeLevelProps | undefined;
    gameConfigs: SicBallGameConfigs;
    fractionalOddsFormat?: boolean;
}> = ({ gameConfigs, fractionalOddsFormat, userStakeLevel }) => {
    const { t } = useTranslate([SicBall, Common, SabaNumber]);
    const { maxWinPerRound, maxBet, odds } = gameConfigs;
    console.log("gameConfigs", gameConfigs);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: Common })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1", { ns: SabaNumber })}</li>
                <li>{t("payouts_para_2_round", { ns: SabaNumber })}</li>
                <li>
                    <T
                        keyName={"payouts_para_3"}
                        params={{ maxpayout: numberWithCommas((maxWinPerRound ?? 0) * Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                        ns="SicBall"
                    />
                </li>

                <div className="table-container">
                    <table className={`table text-center`}>
                        <thead>
                            <tr>
                                <th>{t("header_betoption", { ns: Common })}</th>
                                <th>
                                    <Markup content={t("header_winning_condition", { ns: SabaNumber })} />
                                </th>
                                <th>
                                    <Markup content={t("header_odds", { ns: Common })} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{t("glossary_big", { ns: SicBall })}</td>
                                <td>{t("descrip_big_win", { ns: SicBall })}</td>
                                <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_small", { ns: SicBall })}</td>
                                <td>{t("descrip_small_win", { ns: SicBall })}</td>
                                <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>{t("betoption_ball_value", { ns: SicBall })}</td>
                                <td>{t("descrip_ball_once", { ns: SicBall })}</td>
                                <td>{formatOdds(odds?.single, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td>{t("descrip_ball_twice", { ns: SicBall })}</td>
                                <td>{formatOdds(odds?.double, fractionalOddsFormat)}</td>
                            </tr>
                            <tr>
                                <td>{t("descrip_ball_3times", { ns: SicBall })}</td>
                                <td>{formatOdds(odds?.triple, fractionalOddsFormat)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ul>
        </li>
    );
};

export interface SicBallGameGuideContentsProps {
    gameConfigs: SicBallGameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
}

const SicBallGameGuideContent: FC<SicBallGameGuideContentsProps> = ({ userStakeLevel, gameConfigs, fractionalOddsFormat, displayName }) => {
    return (
        <ul className={`game-guide`}>
            <SicBallIntroduction displayName={displayName || ""} />
            <SicBallGameRules userStakeLevel={userStakeLevel} gameConfigs={gameConfigs} />
            <SicBallPayout userStakeLevel={userStakeLevel} gameConfigs={gameConfigs} fractionalOddsFormat={fractionalOddsFormat} />
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default SicBallGameGuideContent;
