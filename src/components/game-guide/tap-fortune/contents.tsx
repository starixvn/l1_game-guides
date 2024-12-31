import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";

import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import { TapFortuneContentsProps } from "./type";

const ns = "TapFortune";

const renderGameRules = (
    t: Function,
    gameConfigs: GameConfigs,
) => {
    const  maxValue = 320;
    

    return (
        <li className="guide-item">
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns })}</li>
                <li>{t("gamerules_para_2", { ns })}
                    <ul className="circle">
                        <li>{t("gamerules_para_3", { ns })}</li>
                        <li>{t("gamerules_para_4", { ns })}</li>
                        <li><Markup content={t("gamerules_para_5", { ns })} /></li>
                    </ul>
                </li>
                <li>{t("gamerules_para_6", { ns })}</li>
                <li>{t("gamerules_para_7", { ns,  value: maxValue})}</li>
            </ul>
        </li>
    );
};


const renderPayout = (t: Function, gameConfigs: GameConfigs, userStakeLevel: UserStakeLevelProps | undefined) => {
    const {  betLevels } = gameConfigs;
    const  maxValue = 320;
    let maxBet = 0;
    if(betLevels) {
        maxBet = betLevels[betLevels.length - 1];
    }
    const maxWin = numberWithCommas( maxBet * maxValue);

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{<Markup content={t("payouts_para_3", { ns: "Common" })} />}</li>
                <li>{t("payouts_para_2", { ns: "Common" })}</li>
                <li>{t("payouts_para_2", { ns, maxWin: maxWin })}</li>
                
            </ul>
        </li>
    );
};

const Contents: React.FC<TapFortuneContentsProps> = ({ gameConfigs, locale, userStakeLevel, displayName }) => {
    const { t } = useTranslate([ns, "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: "Common" })}</h2>
                <p className="content">{t("intro_para_1", { ns, gamename: displayName })}</p>
            </li>
            {renderGameRules(t, gameConfigs)}
            {renderPayout(t, gameConfigs, userStakeLevel)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default Contents;
