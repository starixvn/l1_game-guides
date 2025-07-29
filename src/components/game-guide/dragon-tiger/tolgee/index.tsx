import { TolgeeProvider, useTranslate } from "@tolgee/react";
import React from "react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { Markup } from "interweave";
import Styles from "../dragon-tiger.module.scss";

const tolgee = initTolgee(["DragonTiger"]);

const DragonTigerGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat, locale } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate(["DragonTiger"]);

    // Handle locale changes
    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    const renderIntroduce = () => {
        return (
            <>
                <h2>{t("intro_title")}</h2>
                <p className="content">
                    {t("intro_desc_dragon_tiger")}
                    {t("intro_desc_the_game")}
                    {t("intro_desc_there_are")}
                </p>
            </>
        );
    };

    const renderGameRule = () => {
        return (
            <>
                <h2>{t("gamerule_title")}</h2>
                <ul className="desc">
                    <li>{t("gamerule_two_cards")}</li>
                    <li>
                        {t("gamerule_the_player_bet")}
                        {t("gamerule_the_player_can")}
                    </li>
                    <li>
                        {t("gamerule_the_game_determines")}
                        {t("gamerule_maximum")}
                    </li>
                    <li>
                        {t("gamerule_card_point_title")}
                        <ul className="detail">
                            <li>{t("gamerule_card_point_ranking")}</li>
                            <li>{t("gamerule_card_point_ace_stands")}</li>
                            <li>{t("gamerule_card_point_all_cards")}</li>
                        </ul>
                    </li>
                    <li>
                        {t("gamerule_player_can_bet")}
                        {t("gamerule_all_bets")}
                        {t("gamerule_note")}
                    </li>
                    <li>{t("gamerule_the_standard")}</li>
                </ul>
            </>
        );
    };

    const renderPayout = () => {
        return (
            <>
                <h2>{t("payouts_title")}</h2>
                <ul className="desc">
                    <li>{t("payouts_desc_winning")}</li>
                    <li>{t("payouts_desc_payout")}</li>
                    <li>
                        {t("payouts_desc_all_winning")}
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>{t("table_header_options")}</th>
                                        <th>{t("table_header_odds")}</th>
                                        <th className={Styles["bet-limit-width"]}>
                                            <Markup content={t("table_header_bet_limit")} />
                                        </th>
                                        <th>{t("table_header_max_total")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("common_dragon")}</td>
                                        <td rowSpan={2}>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                        <td rowSpan={2}>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                        </td>
                                        <td rowSpan={3}>{maxBetFollowChoice?.maxBetMain}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("common_tiger")}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("common_tie")}</td>
                                        <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>
                                        <td>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetTie}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {t("payouts_note")}
                    </li>
                </ul>
            </>
        );
    };

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">{renderIntroduce()}</li>
                <li className="guide-item">{renderGameRule()}</li>
                <li className="guide-item">{renderPayout()}</li>
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const DragonTigerGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <DragonTigerGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default DragonTigerGuideTolgeeWrapper; 