import { FC, useEffect } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import MD5 from "../base/md5";
import { isShowedMD5 } from "../../shared";
import { GameGuideProps } from "../type";
import ScrollToMD5 from "../../shared/md5-number";
import MD5Tolgee from "../base/md5/md5-tolgee";

const bigSmallNamespace = "BigSmall";

const BigSmallIntroduction: FC<{ t: Function; displayName?: string }> = ({ t, displayName }) => {
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction")}</h2>
            <div className="content">
                <T keyName={"intro_para_1"} params={{ gameName: displayName }} ns={bigSmallNamespace}></T>
            </div>
        </li>
    );
};

const BigSmallGameRules: FC<{ 
    t: Function; 
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
}> = ({ t, maxBetFollowChoice }) => {
    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns: bigSmallNamespace })}</li>
                <li>{t("gamerules_para_2", { ns: bigSmallNamespace })}</li>
                <ul className="detail">
                    <li>{t("big_definition", { ns: bigSmallNamespace })}</li>
                    <li>{t("small_definition", { ns: bigSmallNamespace })}</li>
                </ul>
                <li>{t("gamerules_para_3", { ns: bigSmallNamespace })}</li>
                <li>
                    <T
                        keyName="gamerules_para_4"
                        params={{ 
                            minBet: maxBetFollowChoice?.minBetMain || 0,
                            maxBet: maxBetFollowChoice?.maxBetMain || 0
                        }}
                        ns={bigSmallNamespace}
                    />
                </li>
                <li>{t("gamerules_para_5", { ns: bigSmallNamespace })}</li>
                <li>
                    {t("gamerules_para_6", { ns: bigSmallNamespace })}
                    <p>
                        <strong>{t("example", { ns: "Common" })}</strong> {t("gamerules_example", { ns: bigSmallNamespace })}
                    </p>
                </li>
            </ul>
        </li>
    );
};

const BigSmallPayout: FC<{
    t: Function;
    gameConfigs: GameConfigProps;
    fractionalOddsFormat?: boolean;
}> = ({ t, gameConfigs, fractionalOddsFormat }) => {
    const { odds } = gameConfigs;

    return (
        <li className={`guide-item`}>
            <h2>{t("title_payouts")}</h2>
            <ul className="desc">
                <li>
                    <T
                        keyName="payouts_para_1"
                        params={{ odds: formatOdds(odds?.big, fractionalOddsFormat) }}
                        ns={bigSmallNamespace}
                    />
                </li>
                <li>{t("payouts_para_2", { ns: bigSmallNamespace })}</li>
                <li>{t("payouts_para_3", { ns: bigSmallNamespace })}</li>
            </ul>
        </li>
    );
};

export interface BigSmallGameGuideContentsProps {
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
    environment?: string;
    orientation?: string;
    locale?: string;
}

const BigSmallGameGuideContent: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate();
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, locale, fractionalOddsFormat, orientation } =
        props;

    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    const md5Value = "{6, 2, 5}";

    return (
        <div className={`bigsmall`}>
            <ul className={`game-guide`}>
                <BigSmallIntroduction t={t} displayName={gameName} />
                <BigSmallGameRules t={t} maxBetFollowChoice={maxBetFollowChoice} />
                <BigSmallPayout
                    gameConfigs={gameConfigs}
                    fractionalOddsFormat={fractionalOddsFormat}
                    t={t}
                />
                {isShowedMD5(environment, orientation) && (
                    <MD5
                        locale={locale}
                        step1ImageUrl={`/static/images/big-small/md5_step1_${locale}.png?v=3`}
                        step2ImageUrl={`/static/images/big-small/md5_step2_${locale}.png?v=3`}
                        step3ImageUrl={"/static/images/big-small/md5_step3.png?v=1"}
                        step4ImageUrl={"/static/images/big-small/md5_step4.png?v=1"}
                        note={<T keyName={"md5_note"} params={{ md5Value: md5Value }} ns="BigSmall"/>}
                    />
                )}
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default BigSmallGameGuideContent; 