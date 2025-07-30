import { FC } from "react";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../shared/dot";
import { GameGuideProps } from "../type";

const SeDieSpecialIntroduction: FC<{
    t: Function;
    displayName?: string;
}> = ({ t, displayName }) => {
    console.log("displayName", displayName);
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: "Common" })}</h2>
            <div className="content">
                <T keyName={"intro_para_1"} params={{ gameName: displayName }} ns="SeDieSpecial" />
            </div>
        </li>
    );
};

const SeDieSpecialGameRules: FC<{
    t: Function;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
}> = ({ t, maxBetFollowChoice }) => {
    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>
                    {t("gamerules_para_1")}
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>{t("table_header_options")}</th>
                                    <th>{t("table_header_winning_conditions")}</th>
                                    <th>{t("table_header_descriptions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>{t("option_odd")}</td>
                                    <td>{t("winning_condition_3red1white")}</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_1red3white")}</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>{t("option_even")}</td>
                                    <td>{t("winning_condition_4red")}</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_4white")}</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_2red2white")}</td>
                                    {renderTwoRedTwoWhite()}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>{t("gamerules_para_2")}</li>
                <li>
                    <T keyName="gamerules_para_3" params={{ maxBet: maxBetFollowChoice?.maxBetMain || 0 }} />
                </li>
                <li>
                    {t("gamerules_para_4")}
                    <br></br>
                    <strong>{t("example", { ns: "Common" })}</strong> {t("gamerules_example")}
                </li>
            </ul>
        </li>
    );
};

const SeDieSpecialPayout: FC<{
    t: Function;
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
}> = ({ t, gameConfigs, maxBetFollowChoice, fractionalOddsFormat }) => {
    const { odds } = gameConfigs;

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts")}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1")}</li>
                <li>
                    {t("payouts_para_2")}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>{t("table_header_options")}</th>
                                    <th>{t("payout_table_header_odds")}</th>
                                    <th>{t("payout_table_header_bet_limit")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("option_odd")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_even")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieSpecialStatistical: FC<{ t: Function }> = ({ t }) => {
    return (
        <li className="guide-item">
            <h2>{t("title_statistical")}</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty">
                    <table className="table text-center table-small">
                        <thead>
                            <tr>
                                <th>{t("table_header_results")}</th>
                                <th>{t("table_header_descriptions")}</th>
                                <th>{t("table_header_symbols")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{t("winning_condition_4red")}</td>
                                {renderFourRed()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-even">4</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_4white")}</td>
                                {renderFourWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-even">0</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_2red2white")}</td>
                                {renderTwoRedTwoWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-even">2</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_3red1white")}</td>
                                {renderThreeRedOneWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-odd">3</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_1red3white")}</td>
                                {renderOneRedThreeWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-odd en">1</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </li>
    );
};

export interface SeDieSpecialGameGuideContentsProps {
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
}

const SeDieSpecialGameGuideContent: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate(["SeDieSpecial", "Common"]);
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;

    return (
        <div className={`sedie-special`}>
            <ul className={`game-guide`}>
                <SeDieSpecialIntroduction t={t} displayName={gameName || ""} />
                <SeDieSpecialGameRules t={t} maxBetFollowChoice={maxBetFollowChoice} />
                <SeDieSpecialPayout
                    gameConfigs={gameConfigs}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                    t={t}
                />
                <SeDieSpecialStatistical t={t} />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default SeDieSpecialGameGuideContent;
