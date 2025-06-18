import { useTranslate } from "@tolgee/react";
import React, { useEffect } from "react";
import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { scrollToIDContent } from "../../shared/md5-number";
import { ContentList } from "../base/terms-and-conditions/languages/types";
import { RenderContentByList } from "../base/terms-and-conditions/terms-and-conditions";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { MiniRouletteContentsProps } from "./type";
import Styles from "./mini-roulette.module.scss";
import { Markup } from "interweave";

const renderGameRules = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { odds, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    const maxBetStraightUp = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.straightUp));
    const maxBetDozen = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.dozen));
    const maxBetRedBlack = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.redBlack));

    let commonResources: ContentList = {
        header: t("title_gamerules", { ns: "Common" }),
        details: [
            t(`game_rules_para1`),
            t(`game_rules_para2`),
            t(`game_rules_para3`),
            t(`game_rules_para4`),
            t(`game_rules_para6`),
            t(`game_rules_para7`),
            t(`game_rules_para8`),
            t(`game_rules_para9`),
        ],
    };
    return (
        <li className="guide-item">
            <h2>{commonResources.header}</h2>
            <RenderContentByList resources={commonResources} />
            <div className="table-container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className={Styles["text-nowrap"]}>{t("header_bet_types")}</th>
                            <th>{t("header_description")}</th>
                            <th className={Styles["text-nowrap"]}>{t("header_payout")}</th>
                            <th className={Styles["text-nowrap"]}>
                                <Markup content={t("header_bet_limit", { ns: "MiniRoulette" })} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t("glossary_straight_up")}</td>
                            <td>{t("payout_para1")}</td>
                            <td>{`${odds?.straightUp}x`}</td>
                            <td>{`${minBet} - ${maxBetStraightUp}`}</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_dozen")}</td>
                            <td>{t("payout_para2")}</td>
                            <td>{`${odds?.dozen}x`}</td>
                            <td>{`${minBet} - ${maxBetDozen}`}</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_red_black")}</td>
                            <td>{t("payout_para3")}</td>
                            <td rowSpan={2}>{`${odds?.redBlack}x`}</td>
                            <td rowSpan={2}>{`${minBet} - ${maxBetRedBlack}`}</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_odd_even")}</td>
                            <td>{t("payout_para4")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const MiniRouletteContents: React.FC<MiniRouletteContentsProps> = ({
    gameConfigs,
    locale,
    userStakeLevel,
    displayName,
    name,
    scrollToId,
}) => {
    const { t } = useTranslate(["MiniRoulette", "Common"]);
    useEffect(() => {
        scrollToId !== "" && scrollToIDContent(scrollToId);
    });

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <div className="content">{t("intro_para", { ns: "MiniRoulette", gameName: displayName })}</div>
            </li>
            {renderGameRules(t, gameConfigs, userStakeLevel)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default MiniRouletteContents;
