import { FC } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { numberWithCommas } from "../../../helpers/number-helper";
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

const BacBallGameRules: FC<{ t: Function; userStakeLevel: UserStakeLevelProps | undefined }> = ({ t, userStakeLevel }) => {
    const maxBet = 20000;
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
                                <th>{t("header_betoption", { ns: "Common" })}</th>
                                <th>{t("header_description", { ns: "Common" })}</th>
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

const BacBallPayout: FC<{ t: Function; gameConfigs: BacBallGameConfigs }> = ({ t, gameConfigs }) => {
    const { maxWinPerSubround, odds, maxBetPerChoices, minBet } = gameConfigs;
    const data = {
        player: {
            odds: odds?.player,
            maxBet: maxBetPerChoices.player,
        },
        banker: {
            odds: odds?.banker,
            maxBet: maxBetPerChoices.banker,
        },
        tie: {
            odds: odds?.tie,
            maxBet: maxBetPerChoices.tie,
        },
    };
    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1", { ns: "SabaNumber" })}</li>
                <li>
                    <T keyName={"payouts_para_2"} params={{ maxpayout: numberWithCommas(maxWinPerSubround ?? 0) }} ns="SabaNumber" />
                </li>
                <li>{t("payouts_para_3", { ns: "SabaNumber" })}</li>
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
                                    <td>{`${numberWithCommas(odds?.min ?? 0)}-${numberWithCommas(odds?.max ?? 0)}`}</td>
                                    <td>{`${numberWithCommas(minBet ?? 0)}-${numberWithCommas(maxBet ?? 0)}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <li>{t("payouts_para_4")}</li>
            </ul>
        </li>
    );
};

export interface BacBallGameGuideContentsProps {
    gameConfigs: BacBallGameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
}

const BacBallGameGuideContents: FC<BacBallGameGuideContentsProps> = ({ userStakeLevel, gameConfigs }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber"]);

    return (
        <div className={`bacball`}>
            <ul className={`game-guide`}>
                <BacBallIntroduction t={t} />
                <BacBallGameRules t={t} userStakeLevel={userStakeLevel} />
                <BacBallPayout gameConfigs={gameConfigs} t={t} />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default BacBallGameGuideContents;
