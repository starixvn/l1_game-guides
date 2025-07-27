import { TolgeeProvider, useTranslate } from "@tolgee/react";
import React from "react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const tolgee = initTolgee(["OddEvenTurbo"]);

const OddEvenTurboGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate(["OddEvenTurbo"]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    <p className="content">
                        {t("intro_para_1", { gameName })}
                    </p>
                </li>
                <li className="guide-item">
                    <h2>{t("gamerules_title")}</h2>
                    <ul className="desc">
                        <li>{t("gamerules_para_1")}</li>
                        <li>{t("gamerules_para_2")}</li>
                        <ul className="detail">
                            <li>{t("gamerules_odd_desc")}</li>
                            <li>{t("gamerules_even_desc")}</li>
                        </ul>
                        <li>{t("gamerules_para_3")}</li>
                        <li>{t("gamerules_para_4")}</li>
                        <li>
                            {t("gamerules_para_5", { 
                                minBet: maxBetFollowChoice?.minBetMain, 
                                maxBet: maxBetFollowChoice?.maxBetMain 
                            })}
                        </li>
                        <li>{t("gamerules_para_6")}</li>
                        <li>
                            {t("gamerules_para_7")}
                            <br></br>
                            <strong>{t("gamerules_example_title")}</strong> {t("gamerules_example_desc")}
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>{t("payouts_title")}</h2>
                    <ul className="desc">
                        <li>{t("payouts_para_1", { odds: formatOdds(odds?.even, fractionalOddsFormat) })}</li>
                        <li>
                            {t("payouts_para_2")} <strong>{t("payouts_note")}</strong> {t("payouts_para_3")}
                        </li>
                        <li>{t("payouts_para_4")}</li>
                    </ul>
                </li>
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const OddEvenTurboGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <OddEvenTurboGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default OddEvenTurboGuideTolgeeWrapper; 