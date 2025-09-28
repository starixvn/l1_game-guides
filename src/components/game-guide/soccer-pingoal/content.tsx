import { useTranslate } from "@tolgee/react";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { COMMON, SOCCER_PIN_GOAL } from "./namespace-tolgee";
import { numberWithCommas } from "../../../helpers/number-helper";

interface SoccerPinGoalContentProps {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}

const Content = (props: SoccerPinGoalContentProps) => {
    const { maxBet } = props.gameConfigs;

    return (
        <ul className={`game-guide`}>
            <SoccerPinGoalIntroduction />
            <SoccerPinGoalGameRules maxBet={maxBet} />
            <SoccerPinGoalPayout gameConfigs={props.gameConfigs} userStakeLevel={props.userStakeLevel} />
            <TermsAndConditionsTolgee />
        </ul>
    );
};

const SoccerPinGoalIntroduction = () => {
    const { t } = useTranslate([SOCCER_PIN_GOAL, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_introduction", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("intro_para1", { game_name: t("game_name", { ns: SOCCER_PIN_GOAL }) })}</li>
                    <li>{t("intro_para2", { ns: SOCCER_PIN_GOAL })}</li>
                </ul>
            </div>
        </li>
    );
};

const SoccerPinGoalGameRules = ({ maxBet }: { maxBet: number }) => {
    const { t } = useTranslate([SOCCER_PIN_GOAL, COMMON]);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_gamerules", { ns: COMMON })}</h2>
            <h3>{t("title_game_seup", { ns: SOCCER_PIN_GOAL })}</h3>
            <div className="content">
                <ul className="desc">
                    <li>{t("game_setup_para1", { game_name: t("game_name", { ns: SOCCER_PIN_GOAL }) })}</li>
                    <li>{t("game_setup_para2", { ns: SOCCER_PIN_GOAL })}</li>
                </ul>
            </div>
            <h3>{t("title_pregame_phase", { ns: SOCCER_PIN_GOAL })}</h3>
            <div className="content">
                <ul className="desc">
                    <li>{t("pregame_phase_para1", { ns: SOCCER_PIN_GOAL })}</li>
                    <li>
                        {t("pregame_phase_para2", {
                            glossary_red: t("glossary_red", { ns: SOCCER_PIN_GOAL }),
                            glossary_blue: t("glossary_blue", { ns: SOCCER_PIN_GOAL }),
                            glossary_draw: t("glossary_draw", { ns: SOCCER_PIN_GOAL }),
                        })}
                    </li>
                    <li>{t("pregame_phase_para3", { maxbet: numberWithCommas(maxBet), ns: SOCCER_PIN_GOAL })}</li>
                </ul>
            </div>
            <h3>{t("title_gameplay", { ns: SOCCER_PIN_GOAL })}</h3>
            <div className="content">
                <ul className="desc">
                    <li>{t("gameplay_para1", { ns: SOCCER_PIN_GOAL })}</li>
                    <li>{t("gameplay_para2", { ns: SOCCER_PIN_GOAL })}</li>
                    <li>{t("gameplay_para3", { ns: SOCCER_PIN_GOAL })}</li>
                    <li>{t("gameplay_para4", { ns: SOCCER_PIN_GOAL })}</li>
                    <li>{t("gameplay_para5", { ns: SOCCER_PIN_GOAL })}</li>
                </ul>
            </div>
            <div className="table-container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="bold">{t("header_betoption", { ns: COMMON })}</th>
                            <th className="bold">{t("title_win_condition", { ns: SOCCER_PIN_GOAL })}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t("glossary_red", { ns: SOCCER_PIN_GOAL })}</td>
                            <td>{t("win_condition_para1", { ns: SOCCER_PIN_GOAL })}</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_blue", { ns: SOCCER_PIN_GOAL })}</td>
                            <td>{t("win_condition_para2", { ns: SOCCER_PIN_GOAL })}</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_draw", { ns: SOCCER_PIN_GOAL })}</td>
                            <td>{t("win_condition_para3", { ns: SOCCER_PIN_GOAL })}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const SoccerPinGoalPayout = ({
    gameConfigs,
    userStakeLevel,
}: {
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
}) => {
    const { t } = useTranslate([SOCCER_PIN_GOAL, COMMON]);
    const { odds, minBet, maxBet, maxBetPerChoices, maxWinPerRound } = gameConfigs;

    const awayOdds = odds?.blue;
    const homeOdds = odds?.red;
    const drawOdds = odds?.draw;

    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetHome = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.red));
    const maxBetAway = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.blue));
    const maxBetDraw = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.draw));

    const maxBetMain = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetMain);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: COMMON })}</h2>
            <div className="content">
                <ul className="desc">
                    <li>{t("payouts_para_1", { ns: COMMON })}</li>
                    <li>{t("payouts_para_2", { ns: COMMON })}</li>
                    <li>{t("payouts_para_3", { ns: COMMON })}</li>
                    <li>{t("payouts_para_4", { maxwin: maxWin, ns: COMMON })}</li>
                    <li>
                        {t("payouts_para5", {
                            glossary_red: t("glossary_red", { ns: SOCCER_PIN_GOAL }),
                            glossary_blue: t("glossary_blue", { ns: SOCCER_PIN_GOAL }),
                        })}
                    </li>
                </ul>
            </div>
            <div className="table-container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="bold">{t("header_betoption", { ns: COMMON })}</th>
                            <th className="bold">{t("header_odds", { ns: COMMON })}</th>
                            <th className="bold">{t("header_bet_limit", { ns: COMMON })}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t("glossary_red", { ns: SOCCER_PIN_GOAL })}</td>
                            <td>{homeOdds}</td>
                            <td>{`${minBetMain} - ${maxBetHome}`}</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_blue", { ns: SOCCER_PIN_GOAL })}</td>
                            <td>{awayOdds}</td>
                            <td>{`${minBetMain} - ${maxBetAway}`}</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_draw", { ns: SOCCER_PIN_GOAL })}</td>
                            <td>{drawOdds}</td>
                            <td>{`${minBetMain} - ${maxBetDraw}`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

export default Content;
