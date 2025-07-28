import { FC } from "react";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { ENVIRONMENT } from "../../../common/constants";
import MD5 from "../base/md5";
import { GameGuideProps } from "../type";

const fishPrawnCrabNamespace = "FishPrawnCrab";

export const renderIconChoice = () => {
    return (
        <>
            <div className="symbol-size icon-nai"></div>
            <div className="symbol-size icon-bau"></div>
            <div className="symbol-size icon-ga"></div>
            <div className="symbol-size icon-ca"></div>
            <div className="symbol-size icon-cua"></div>
            <div className="symbol-size icon-tom"></div>
        </>
    );
};

const FishPrawnCrabIntroduction: FC<{ 
    t: Function; 
    displayName?: string; 
}> = ({ t, displayName }) => {
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: "Common" })}</h2>
            <div className="content">
                <T 
                    keyName={"intro_para_1"} 
                    params={{ gameName: displayName }} 
                    ns={fishPrawnCrabNamespace}
                />
            </div>
            <div className="icon-wrapper">
                {renderIconChoice()}
                <div className="text">{t("symbol_stag")}</div>
                <div className="text">{t("symbol_gourd")}</div>
                <div className="text">{t("symbol_rooster")}</div>
                <div className="text">{t("symbol_fish")}</div>
                <div className="text">{t("symbol_crab")}</div>
                <div className="text">{t("symbol_prawn")}</div>
            </div>
        </li>
    );
};

const FishPrawnCrabGameRules: FC<{ 
    t: Function; 
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    gameConfigs: GameConfigProps;
    fractionalOddsFormat?: boolean;
}> = ({ t, maxBetFollowChoice, gameConfigs, fractionalOddsFormat }) => {
    const { odds } = gameConfigs;

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns: fishPrawnCrabNamespace })}</li>
                <li>{t("gamerules_para_2", { ns: fishPrawnCrabNamespace })}</li>
                <li>{t("gamerules_para_3", { ns: fishPrawnCrabNamespace })}</li>
                <li>
                    <T
                        keyName="gamerules_para_4"
                        params={{ 
                            minBet: maxBetFollowChoice?.minBetMain || 0,
                            maxBet: maxBetFollowChoice?.maxBetChoice || 0,
                            maxBetMain: maxBetFollowChoice?.maxBetMain || 0
                        }}
                        ns={fishPrawnCrabNamespace}
                    />
                </li>
                <li>
                    {t("gamerules_para_5", { ns: fishPrawnCrabNamespace })}
                    <ul className="detail">
                        <li>
                            <T
                                keyName="odds_single"
                                params={{ odds: formatOdds(odds?.single, fractionalOddsFormat) }}
                                ns={fishPrawnCrabNamespace}
                            />
                        </li>
                        <li>
                            <T
                                keyName="odds_double"
                                params={{ odds: formatOdds(odds?.double, fractionalOddsFormat) }}
                                ns={fishPrawnCrabNamespace}
                            />
                        </li>
                        <li>
                            <T
                                keyName="odds_triple"
                                params={{ odds: formatOdds(odds?.triple, fractionalOddsFormat) }}
                                ns={fishPrawnCrabNamespace}
                            />
                        </li>
                    </ul>
                </li>
                <li>{t("gamerules_para_6", { ns: fishPrawnCrabNamespace })}</li>
                <li>{t("gamerules_para_7", { ns: fishPrawnCrabNamespace })}</li>
                <li>
                    {t("gamerules_para_8", { ns: fishPrawnCrabNamespace })}
                    <div>
                        <strong>{t("example", { ns: "Common" })}</strong>
                        <ul className="detail">
                            <li>
                                <T
                                    keyName="example_single"
                                    params={{ 
                                        amount: numberWithCommas(10 * (odds?.single ?? 0))
                                    }}
                                    ns={fishPrawnCrabNamespace}
                                />
                            </li>
                            <li>
                                <T
                                    keyName="example_double"
                                    params={{ 
                                        amount: numberWithCommas(10 * (odds?.double ?? 0))
                                    }}
                                    ns={fishPrawnCrabNamespace}
                                />
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const FishPrawnCrabMD5: FC<{ 
    t: Function; 
    locale?: string;
    environment?: string;
}> = ({ t, locale, environment }) => {
    if (environment !== ENVIRONMENT.sc) {
        return null;
    }

    const getImageSuffix = (locale?: string) => {
        switch (locale) {
            case "vi":
                return "vi";
            case "id":
                return "id";
            case "th":
                return "th";
            case "zh-cn":
                return "zh_cn";
            case "zh-tw":
                return "zh_tw";
            case "ja":
                return "ja";
            default:
                return "en"; // fallback to English
        }
    };

    const imageSuffix = getImageSuffix(locale);

    return (
        <MD5
            locale={locale}
            step1ImageUrl={`/static/images/fish-prawn-crab/md5_step1_${imageSuffix}.png?v=4`}
            step2ImageUrl={`/static/images/fish-prawn-crab/md5_step2_${imageSuffix}.png?v=4`}
            step3ImageUrl={`/static/images/fish-prawn-crab/md5_step3_en.png?v=5`}
            step4ImageUrl={`/static/images/fish-prawn-crab/md5_step4_en.png?v=5`}
            note={<div>{t("md5_note")}</div>}
        />
    );

};

export interface FishPrawnCrabGameGuideContentsProps {
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
    environment?: string;
    locale?: string;
}

const FishPrawnCrabGameGuideContent: FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, environment, locale } = props;
    const { t } = useTranslate(["FishPrawnCrab", "Common"]);

    return (
        <div className={`fish-prawn-crab`}>
            <ul className={`game-guide`}>
                <FishPrawnCrabIntroduction 
                    t={t} 
                    displayName={gameName} 
                />
                <FishPrawnCrabGameRules 
                    t={t} 
                    maxBetFollowChoice={maxBetFollowChoice}
                    gameConfigs={gameConfigs}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
                <FishPrawnCrabMD5 
                    t={t} 
                    locale={locale}
                    environment={environment}
                />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default FishPrawnCrabGameGuideContent; 