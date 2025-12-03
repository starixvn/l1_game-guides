import { useTranslate } from "@tolgee/react";
import { FC, useMemo } from "react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { LudoContentsProps } from "./type";
import { TogleeNamespace } from "./namespace-tolgee";
import { UserStakeLevelProps } from "../../../pages";
import Styles from "./ludo.module.scss";

const oddsRange = {
    odd: {
        min: 1.96,
        max: 1.96,
    },
    even: {
        min: 1.96,
        max: 1.96,
    },
    big: {
        min: 1.67,
        max: 1.96,
    },
    small: {
        min: 2.36,
        max: 1.96,
    },
    move: {
        min: 1.96,
        max: 17.96,
    },
    no_move: {
        min: 1.96,
        max: 17.96,
    },
    kick: {
        min: 1.96,
        max: 17.96,
    },
    no_kick: {
        min: 1.96,
        max: 17.96,
    },
    release: {
        min: 1.96,
        max: 17.96,
    },
    no_release: {
        min: 1.96,
        max: 17.96,
    },
};

const LudoIntroduction: FC<{
    t: Function;
    displayName?: string;
}> = ({ t, displayName }) => {
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
            <div className="content">{t("game_intro", { gamename: displayName, ns: TogleeNamespace.SpecificGame })}</div>
        </li>
    );
};

const LudoGameRules: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <li className={`guide-item`}>
            <h2 className="font-bold">{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("game_rules_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_4", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_5", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_6", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_7", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_8", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_9", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
        </li>
    );
};

const LightningTableExample: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <div className="table-container">
            <table className={`table text-center`}>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: "4px", paddingRight: "4px", width: "22%" }}>
                            {t("payout_slot", { ns: TogleeNamespace.SpecificGame })}
                        </th>
                        <th style={{ paddingLeft: "4px", paddingRight: "4px", width: "22%" }}>
                            {t("total_multiplier", { ns: TogleeNamespace.SpecificGame })}
                        </th>
                        <th style={{ paddingLeft: "4px", paddingRight: "4px", width: "22%" }}>
                            {t("bet_amount", { ns: TogleeNamespace.SpecificGame })}
                        </th>
                        <th style={{ paddingLeft: "4px", paddingRight: "4px", width: "auto" }}>
                            {t("header_win", { ns: TogleeNamespace.Common })}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8x</td>
                        <td>30x</td>
                        <td>10</td>
                        <td style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                            <span style={{ color: "#fff600" }}>2400</span>
                            <span>(8x * 30x * 10)</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const BettingRules: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <li className={`guide-item`}>
            <h2 className="font-bold">{t("title_betting_rules", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li>
                    {t("betting_rules_1", { ns: TogleeNamespace.SpecificGame })}
                    <ul className="detail">
                        <li>{t("betting_rules_2", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("betting_rules_3", { ns: TogleeNamespace.SpecificGame })}</li>
                    </ul>
                </li>
                <li>{t("betting_rules_4", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("betting_rules_5", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
            <li className="contentBeforeEmpty">
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr className={Styles["payout-header"]}>
                                <th className={`bold ${Styles["bet-option"]}`}>
                                    {t("table_header_priority", { ns: TogleeNamespace.SpecificGame })}
                                </th>
                                <th className="bold">{t("table_header_horse_action", { ns: TogleeNamespace.SpecificGame })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{t("table_horse_action_para_1", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{t("table_horse_action_para_2", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{t("table_horse_action_para_3", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{t("table_horse_action_para_4", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>{t("table_horse_action_para_5", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>{t("table_horse_action_para_6", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>{t("table_horse_action_para_7", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>{t("table_horse_action_para_8", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
            <ul className="desc">
                <li>{t("betting_rules_6", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("betting_rules_7", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
            <li className="contentBeforeEmpty">
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr className={Styles["payout-header"]}>
                                <th className={`bold ${Styles["bet-option"]}`}>
                                    {t("table_header_options", { ns: TogleeNamespace.SpecificGame })}
                                </th>
                                <th className="bold">{t("table_header_winning_condition", { ns: TogleeNamespace.SpecificGame })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{t("glossary_odd", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_odd", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_even", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_even", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_big", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_big", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_small", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_small", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_move", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_move", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_no_move", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_no_move", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_kick", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_kick", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_no_kick", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_no_kick", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_release", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_release", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_no_release", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{t("winning_condition_no_release", { ns: TogleeNamespace.SpecificGame })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
            <li>{t("winnning_conidition_note", { ns: TogleeNamespace.SpecificGame })}</li>
        </li>
    );
};

const LudoPayout: FC<{
    t: Function;
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}> = ({ t, gameConfigs, userStakeLevel, fractionalOddsFormat }) => {
    const { minBet, maxBet, maxWinPerRound } = gameConfigs;
    const maxBetTmp = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);

    const maxBetMain = numberWithCommas(maxBetTmp);
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetTmp);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("payout_para_1", { minbet: minBetMain, maxbet: maxBetMain, ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("payout_para_2", { maxpayout: maxWin, ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("payout_para_3", { max_bet: maxBetMain, ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
            <li className="contentBeforeEmpty">
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr className={Styles["payout-header"]}>
                                <th className="bold">{t("header_bet_choice", { ns: TogleeNamespace.Common })}</th>
                                <th className={`bold ${Styles["bet-option"]}`}>
                                    {t("title_payouts", { ns: TogleeNamespace.Common })}
                                </th>
                                <th className="bold">{t("title_bet_limit", { ns: TogleeNamespace.Common })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{t("glossary_odd", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.odd.min, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_even", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.even.min, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_big", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.big.min, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_small", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.small.min, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_move", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.move.min, fractionalOddsFormat)} - {formatOdds(oddsRange.move.max, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_no_move", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.no_move.min, fractionalOddsFormat)} - {formatOdds(oddsRange.no_move.max, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_kick", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.kick.min, fractionalOddsFormat)} - {formatOdds(oddsRange.kick.max, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_no_kick", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.no_kick.min, fractionalOddsFormat)} - {formatOdds(oddsRange.no_kick.max, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_release", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.release.min, fractionalOddsFormat)} - {formatOdds(oddsRange.release.max, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                            <tr>
                                <td>{t("glossary_no_release", { ns: TogleeNamespace.SpecificGame })}</td>
                                <td>{formatOdds(oddsRange.no_release.min, fractionalOddsFormat)} - {formatOdds(oddsRange.no_release.max, fractionalOddsFormat)}</td>
                                <td>{minBetMain} - {maxBetMain}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </li>
    );
};

const GameNameMapping: Record<number, string> = {
    163: "game_name_163",
};

const LudoGameGuideContent: React.FC<LudoContentsProps> = ({ gameConfigs, fractionalOddsFormat, userStakeLevel, id }) => {
    const { t } = useTranslate([TogleeNamespace.Common, TogleeNamespace.SpecificGame]);

    const displayName = useMemo(() => {
        return t(GameNameMapping[id || 163], { ns: TogleeNamespace.SpecificGame });
    }, [t]);

    return (
        <div className={`sedie`}>
            <ul className={`game-guide`}>
                <LudoIntroduction t={t} displayName={displayName} />
                <LudoGameRules t={t} />
                <BettingRules t={t} />
                <LudoPayout t={t} gameConfigs={gameConfigs} userStakeLevel={userStakeLevel} fractionalOddsFormat={fractionalOddsFormat} />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default LudoGameGuideContent;
