import React, { useEffect } from "react";
import { TolgeeProvider, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { isShowedMD5, renderTermsAndConditionsEN } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import MD5 from "../../base/md5";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";

const NAMESPACE = "MultiplayBigSmall";

const tolgee = initTolgee([NAMESPACE]);

const MultiplayBigSmallGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat, orientation, locale } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate([NAMESPACE]);

    useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("intro_title")}</h2>
                    {isShowedMD5(environment, orientation) ? (
                        <p className="content">{t("intro_para_1_md5", { gameName: t("game_name", { ns: NAMESPACE }) })}</p>
                    ) : (
                        <p className="content">{t("intro_para_1_regular")}</p>
                    )}
                </li>
                <li className="guide-item">
                    <h2>{t("gamerules_title")}</h2>
                    <ul className="desc">
                        <li>{t("gamerules_para_1")}</li>
                        <li>{t("gamerules_para_2")}</li>
                        <ul className="detail">
                            <li>{t("gamerules_big_desc")}</li>
                            <li>{t("gamerules_small_desc")}</li>
                        </ul>
                        <li>{t("gamerules_para_3")}</li>
                        <li>
                            {t("gamerules_para_4", {
                                minBet: maxBetFollowChoice?.minBetMain,
                                maxBet: maxBetFollowChoice?.maxBetMain,
                            })}
                        </li>
                        <li>{t("gamerules_para_5")}</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>{t("payouts_title")}</h2>
                    <ul className="desc">
                        <li>{t("payouts_para_1", { odds: formatOdds(odds?.big, fractionalOddsFormat) })}</li>
                        <li>{t("payouts_para_2")}</li>
                        <li>{t("payouts_para_3")}</li>
                        <li>{t("payouts_para_4")}</li>
                    </ul>
                </li>
                {isShowedMD5(environment, orientation) && (
                    <MD5
                        locale={locale}
                        step1ImageUrl={"/static/images/mega-bigsmall/md5_step1_en.png?v=3"}
                        step2ImageUrl={"/static/images/mega-bigsmall/md5_step2_en.png?v=3"}
                        step3ImageUrl={"/static/images/mega-bigsmall/md5_step3_en.png?v=1"}
                        step4ImageUrl={"/static/images/mega-bigsmall/md5_step4_en.png?v=1"}
                        note={<div>{t("md5_note")}</div>}
                    />
                )}
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const MultiplayBigSmallGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <MultiplayBigSmallGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default MultiplayBigSmallGuideTolgeeWrapper;
