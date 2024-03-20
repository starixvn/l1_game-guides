import { FC } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { formatOddsNotTwoDot, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { BacBallGameConfigs } from "./type";
import { Markup } from "interweave";
import Styles from "./bac-ball.module.scss";

const BacBallIntroduction: FC<{ t: Function }> = ({ t }) => {
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: "Common" })}</h2>
            <div className="content">{t("intro_para_1")}</div>
        </li>
    );
};

const BacBallGameRules: FC<{ t: Function; userStakeLevel: UserStakeLevelProps | undefined; maxBet: number }> = ({
    t,
    userStakeLevel,
    maxBet,
}) => {
    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t(`gamerules_para_1`)}</li>
                <li>
                    <T
                        keyName="gamerules_para_2"
                        params={{ maxbet: numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet)) }}
                    />
                </li>
                <li>{t("gamerules_para_3", { ns: "SabaNumber" })}</li>
                <div className="table-container">
                    <table className={`table ${Styles["table"]}`}>
                        <thead className="text-center">
                            <tr>
                                <th style={{ width: "10rem" }}>{t("header_betoption", { ns: "Common" })}</th>
                                <th>{t("header_winning_condition", { ns: "SabaNumber" })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["player", "banker", "tie"].map((item) => (
                                <tr key={item}>
                                    <td className="text-center">{t(`glossary_${item}`)}</td>
                                    <td>{t(`descrip_${item}`)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ul>
        </li>
    );
};

const BacBallPayout: FC<{ t: Function; gameConfigs: BacBallGameConfigs; fractionalOddsFormat?: boolean }> = ({
    t,
    gameConfigs,
    fractionalOddsFormat,
}) => {
    const { maxWinPerSubround, oddsRange, maxBetPerChoices, minBet } = gameConfigs;
    const data = {
        player: {
            odds: {
                min: oddsRange?.min?.player,
                max: oddsRange?.max?.player,
            },
            maxBet: maxBetPerChoices.player,
        },
        banker: {
            odds: {
                min: oddsRange?.min?.banker,
                max: oddsRange?.max?.banker,
            },
            maxBet: maxBetPerChoices.banker,
        },
        tie: {
            odds: {
                min: oddsRange?.min?.tie,
                max: oddsRange?.max?.tie,
            },
            maxBet: maxBetPerChoices.tie,
        },
    };
    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1", { ns: "SabaNumber" })}</li>
                <li>{t("payouts_para_2", { ns: "SabaNumber" })}</li>
                <li>
                    <T keyName={"payouts_para_3"} params={{ maxpayout: numberWithCommas(maxWinPerSubround ?? 0) }} ns="SabaNumber" />
                </li>
                <li>{t("payouts_para_4", { ns: "SabaNumber" })}</li>
                <div className="table-container">
                    <table className={`table text-center ${Styles["table"]}`}>
                        <thead>
                            <tr>
                                <th>{t("header_betoption", { ns: "Common" })}</th>
                                <th>
                                    <Markup content={t("header_odds_range", { ns: "SabaNumber" })} />
                                </th>
                                <th>
                                    <Markup content={t("header_betlimit", { ns: "Common" })} />
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
                                    <td>{`${numberWithCommas(minBet ?? 0)}-${numberWithCommas(maxBet ?? 0)}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <li>{t("payouts_para_5")}</li>
            </ul>
        </li>
    );
};

export interface BacBallGameGuideContentsProps {
    gameConfigs: BacBallGameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}

const BacBallGameGuideContent: FC<BacBallGameGuideContentsProps> = ({ userStakeLevel, gameConfigs, fractionalOddsFormat }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber"]);

    return (
        <div className={`bacball`}>
            <ul className={`game-guide`}>
                <BacBallIntroduction t={t} />
                <BacBallGameRules t={t} userStakeLevel={userStakeLevel} maxBet={gameConfigs.maxBet} />
                <BacBallPayout gameConfigs={gameConfigs} fractionalOddsFormat={fractionalOddsFormat} t={t} />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default BacBallGameGuideContent;
