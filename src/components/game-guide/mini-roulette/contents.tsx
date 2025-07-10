import { useTranslate } from "@tolgee/react";
import React, { useEffect } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { scrollToIDContent } from "../../shared/md5-number";
import { ContentList } from "../base/terms-and-conditions/languages/types";
import { RenderContentByList } from "../base/terms-and-conditions/terms-and-conditions";
import { MiniRouletteContentsProps } from "./type";
import Styles from "./mini-roulette.module.scss";
import TermsAndConditionsLangLiveTolgee from "../base/terms-and-conditions-langlive/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";

const renderGameRules = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const { odds } = gameConfigs;

    let commonResources: ContentList = {
        header: t("title_gamerules", { ns: "Common" }),
        details: [
            t(`game_rules_para1`),
            t(`game_rules_para2`),
            t(`game_rules_para3`),
            t(`game_rules_para4`),
        ],
    };
    return (
        <li className="guide-item">
            <h2>{commonResources.header}</h2>
            <RenderContentByList resources={commonResources} />
            <div className="table-container">
                <table className={`table text-center ${Styles.miniRouletteTable}`}>
                    <thead>
                        <tr>
                            <th className={Styles["text-nowrap"]}>{t("header_bet_choice")}</th>
                            <th className={Styles["text-nowrap"]}>{t("header_payout")}</th>
                            <th className={Styles["text-nowrap"]}>{t("header_probability", { ns: "MiniRoulette" })}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>[0-36]</td>
                            <td>{`X${odds?.straightUp}`}</td>
                            <td>2.70%</td>
                        </tr>
                        <tr>
                            <td>1-12</td>
                            <td>{`X${odds?.dozen}`}</td>
                            <td>32.43%</td>
                        </tr>
                        <tr>
                            <td>13-24</td>
                            <td>{`X${odds?.dozen}`}</td>
                            <td>32.43%</td>
                        </tr>
                        <tr>
                            <td>25-36</td>
                            <td>{`X${odds?.dozen}`}</td>
                            <td>32.43%</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_odd_even")}</td>
                            <td>{`X${odds?.oddEven}`}</td>
                            <td>48.64%</td>
                        </tr>
                        <tr>
                            <td>{t("glossary_red_black")}</td>
                            <td>{`X${odds?.redBlack}`}</td>
                            <td>48.64%</td>
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
            <TermsAndConditionsLangLiveTolgee />
        </ul>
    );
};

export default MiniRouletteContents;
