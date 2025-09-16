import { T, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { FC, useMemo } from "react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { BaccaratMultiplayerContentsProps } from "./type";
import { TogleeNamespace } from "./namespace-tolgee";
import { UserStakeLevelProps } from "../../../pages";

const BaccaratMultiplayerIntroduction: FC<{
    t: Function;
    displayName?: string;
}> = ({ t, displayName }) => {

    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
            <div className="content">
                <T
                    params={{
                        gameName: displayName,
                    }}
                >
                    {t("game_intro_para", { ns: TogleeNamespace.SpecificGame })}
                </T>
            </div>
        </li>
    );
};

const BaccaratMultiplayerGameRules: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <li className={`guide-item`}>
            <h2 className="font-bold">{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("game_rules_para1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para4", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para_5", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para6", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("game_rules_para7", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
        </li>
    );
};

const BaccaratMultiplayerBettingOptions: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <li className={`guide-item`}>
            <h2 className="font-bold">{t("bet_option_header", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li>{t("bet_option_player", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("bet_option_banker", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("bet_option_tie", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("bet_option_pair", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
        </li>
    );
};

const BaccaratMultiplayerPointCalculationRules: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <li className={`guide-item`}>
            <h2 className="font-bold">{t("point_calculation_rules_header", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li>{t("point_calculation_rule_para1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("point_calculation_rule_para2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("point_calculation_rule_para3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("point_calculation_rule_para4", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
        </li>
    );
};

const BaccaratMultiplayerThirdCardRules: FC<{
    t: Function;
}> = ({ t }) => {
    return (
        <li className={`guide-item`}>
            <h2 className="font-bold">{t("third_card_rules_header", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li>{t("third_card_rules_para1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("third_card_rules_para2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>
                    {t("third_card_rules_para3", { ns: TogleeNamespace.SpecificGame })}
                    <ul className="detail">
                        <li>{t("third_card_rules_para4", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("third_card_rules_para5", { ns: TogleeNamespace.SpecificGame })}</li>
                    </ul>
                </li>
                <li>
                    {t("third_card_rules_para6", { ns: TogleeNamespace.SpecificGame })}
                    <ul className="detail">
                        <li>{t("third_card_rules_para7", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("third_card_rules_para8", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("third_card_rules_para9", { ns: TogleeNamespace.SpecificGame })}</li>
                    </ul>
                </li>
            </ul>
            <div className="table-container">
                <table className={`table text-center`}>
                    <thead>
                        <tr>
                            <th>{t("third_card_rules_tables_header1", { ns: TogleeNamespace.SpecificGame })}</th>
                            <th>{t("third_card_rules_table_header2", { ns: TogleeNamespace.SpecificGame })}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">3</td>
                            <td>{t("third_card_rules_table_para1", { ns: TogleeNamespace.SpecificGame })}</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>2-7</td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">5</td>
                            <td>4-7</td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">6</td>
                            <td>6-7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const BaccaratMultiplayerPayout: FC<{
    t: Function;
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
}> = ({ t, gameConfigs, userStakeLevel, fractionalOddsFormat }) => {
    const { odds, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetPlayer = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.player));
    const maxBetTie = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));
    const maxBetAnyPair = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.anyPair));

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <div className="table-container">
                <table className={`table text-center`}>
                    <thead>
                        <tr>
                            <th>{t("header_options", { ns: TogleeNamespace.Common })}</th>
                            <th>{t("title_payouts", { ns: TogleeNamespace.Common })}</th>
                            <th>
                                <Markup content={t("header_betlimit", { ns: TogleeNamespace.Common })} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">
                                <span style={{ fontWeight: "400" }}>{t("payout_table_player", { ns: TogleeNamespace.SpecificGame })}</span>
                            </td>
                            <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                            <td>
                                {minBetMain} - {maxBetPlayer}
                            </td>
                        </tr>

                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">
                                <span style={{ fontWeight: "400" }}>{t("payout_table_banker", { ns: TogleeNamespace.SpecificGame })}</span>
                            </td>
                            <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                            <td>
                                {minBetMain} - {maxBetPlayer}
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">
                                <span style={{ fontWeight: "400" }}>{t("payout_table_tie", { ns: TogleeNamespace.SpecificGame })}</span>
                            </td>
                            <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                            <td>
                                {minBetMain} - {maxBetTie}
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">
                                <span style={{ fontWeight: "400" }}>{t("payout_table_pair", { ns: TogleeNamespace.SpecificGame })}</span>
                            </td>
                            <td>{formatOdds(odds?.anyPair, fractionalOddsFormat)}</td>
                            <td>
                                {minBetMain} - {maxBetAnyPair}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};


const GameNameMapping: Record<number, string> = {
    150: "game_name",
};

const BaccaratMultiplayerGameGuideContent: React.FC<BaccaratMultiplayerContentsProps> = ({
    gameConfigs,
    fractionalOddsFormat,
    userStakeLevel,
    id,
}) => {
    const { t } = useTranslate([TogleeNamespace.Common, TogleeNamespace.SpecificGame]);

    const displayName = useMemo(() => {
        return t(GameNameMapping[id || 150], { ns: TogleeNamespace.SpecificGame });
    }, [t]);

    return (
        <div className={`sedie`}>
            <ul className={`game-guide`}>
                <BaccaratMultiplayerIntroduction t={t} displayName={displayName} />
                <BaccaratMultiplayerGameRules t={t} />
                <BaccaratMultiplayerBettingOptions t={t} />
                <BaccaratMultiplayerPointCalculationRules t={t} />
                <BaccaratMultiplayerThirdCardRules t={t} />
                <BaccaratMultiplayerPayout
                    t={t}
                    gameConfigs={gameConfigs}
                    userStakeLevel={userStakeLevel}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default BaccaratMultiplayerGameGuideContent;
