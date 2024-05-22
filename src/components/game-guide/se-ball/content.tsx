import { FC } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { Markup } from "interweave";
import { Common, SeBall, SabaNumber } from "./constants";
import { SeBallGameConfigs, SeBallGameGuideContentsProps } from "./type";

const SeBallIntroduction: FC<{ displayName?: string }> = ({ displayName }) => {
    const { t } = useTranslate([SeBall, Common]);

    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: Common })}</h2>
            <div className="content">
                <T keyName={"intro_para_1"} params={{ gamename: displayName }} ns={SeBall}></T>
            </div>
        </li>
    );
};

const SeBallGameRules: FC<{ userStakeLevel: UserStakeLevelProps | undefined; maxBet: number }> = ({ userStakeLevel, maxBet }) => {
    const { t } = useTranslate([SeBall, Common, SabaNumber]);

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: Common })}</h2>
            <ul className="desc">
                <li>{t(`gamerules_para_1`)}</li>
                <li>
                    <T
                        keyName="gamerules_para_2"
                        ns={SeBall}
                        params={{ maxbet: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                    />
                </li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4", { ns: SeBall })}</li>

                <div className="table-container">
                    <table className={`table`}>
                        <thead className="text-center">
                            <tr>
                                <th style={{ width: "10rem" }}>{t("header_betoption", { ns: Common })}</th>
                                <th>{t("header_winning_condition", { ns: SabaNumber })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["odd", "even", "red4", "blue4", "red3", "blue3", "red2"].map((item) => (
                                <tr key={item}>
                                    {item === "odd" || item === "even" ? (
                                        <td className="text-center">{t(`glossary_${item}`)}</td>
                                    ) : (
                                        <td className="text-center">
                                            <img src={`./static/images/se-ball/${item}.svg`} alt="guide-item" />
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

const SeBallPayout: FC<{
    userStakeLevel: UserStakeLevelProps | undefined;
    gameConfigs: SeBallGameConfigs;
    fractionalOddsFormat?: boolean;
}> = ({ gameConfigs, fractionalOddsFormat, userStakeLevel }) => {
    const { t } = useTranslate([SeBall, Common, SabaNumber]);
    const { maxWinPerRound, odds, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    const dataOddEven = {
        odd: {
            odds: odds?.odd,
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.odd),
        },
        even: {
            odds: odds?.even,
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.even),
        },
        red4: {
            odds: odds?.red4,
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.red4),
        },
        blue4: {
            odds: odds?.blue4,
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.blue4),
        },
        red3: {
            odds: odds?.red3,
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.red3),
        },
        blue3: {
            odds: odds?.blue3,
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.blue3),
        },
        red2: {
            odds: odds?.red2,
            maxBet: Math.min(userStakeLevel?.maxBet ?? maxBet, maxBetPerChoices.red2),
        },
    };

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
                        ns={SeBall}
                    />
                </li>
                <div className="table-container">
                    <table className={`table text-center`}>
                        <thead>
                            <tr>
                                <th>{t("header_betoption", { ns: Common })}</th>
                                <th>
                                    <Markup content={t("header_odds", { ns: SabaNumber })} />
                                </th>
                                <th>
                                    <Markup content={t("header_betlimit", { ns: Common })} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(dataOddEven).map(({ 0: item, 1: { odds, maxBet } }) => (
                                <tr key={item}>
                                    {item === "odd" || item === "even" ? (
                                        <td className="text-center">{t(`glossary_${item}`)}</td>
                                    ) : (
                                        <td className="text-center">
                                            <img src={`./static/images/se-ball/${item}.svg`} alt="guide-item" />
                                        </td>
                                    )}

                                    <td>{formatOdds(odds, fractionalOddsFormat)}</td>
                                    <td>
                                        {numberWithCommas(minBet)} - {numberWithCommas(maxBet)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ul>
        </li>
    );
};

const SeBallGameGuideContent: FC<SeBallGameGuideContentsProps> = ({ userStakeLevel, gameConfigs, fractionalOddsFormat, displayName }) => {
    return (
        <ul className={`game-guide`}>
            <SeBallIntroduction displayName={displayName || ""} />
            <SeBallGameRules userStakeLevel={userStakeLevel} maxBet={gameConfigs.maxBet} />
            <SeBallPayout userStakeLevel={userStakeLevel} gameConfigs={gameConfigs} fractionalOddsFormat={fractionalOddsFormat} />
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default SeBallGameGuideContent;
