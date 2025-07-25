import { FC } from "react";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "./type";
import Styles from "./three.module.scss";

const renderChoiceImage = (locale = "en", isSM: boolean, t: Function) => {
    const imgCustomize = "img-customize";
    const wrapperImg = "wrapper-img";
    const prefixLocale = locale === "en" ? "_en" : `_${locale}`;
    const classMobile = isSM ? "sm" : "";

    return (
        <>
            <div className={`${Styles[wrapperImg]} ${Styles["red"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === "en" ? Styles["red-en"] : Styles["red"]} ${Styles[classMobile]}`}
                    src={`./static/images/three-cards/table_text_red${prefixLocale}.png`}
                    alt="red"
                ></img>
                <p>{t("option_red")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["black"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${locale === "en" ? Styles["black-en"] : Styles["black"]} ${Styles[classMobile]}`}
                    src={`./static/images/three-cards/table_txt_black${prefixLocale}.png`}
                    alt="black"
                ></img>
                <p>{t("option_black")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["diamond"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["diamond"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_diamond.png"
                    alt="diamond"
                ></img>
                <p>{t("option_diamonds")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["heart"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["heart"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_heart.png"
                    alt="heart"
                ></img>
                <p>{t("option_hearts")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["spade"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["spade"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_spade.png"
                    alt="spade"
                ></img>
                <p>{t("option_spades")}</p>
            </div>
            <div className={`${Styles[wrapperImg]} ${Styles["club"]}`}>
                <img
                    className={`${Styles[imgCustomize]} ${Styles["club"]} ${Styles[classMobile]}`}
                    src="./static/images/three-cards/table_icon_club.png"
                    alt="club"
                ></img>
                <p>{t("option_clubs")}</p>
            </div>
        </>
    );
};

const ThreeCardsIntroduction: FC<{ 
    t: Function; 
    displayName?: string;
    locale?: string;
    isSM: boolean;
}> = ({ t, displayName, locale, isSM }) => {
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: "Common" })}</h2>
            <div className={`content ${Styles["content-customize"]}`}>
                <T 
                    keyName={"intro_para_1"} 
                    params={{ gameName: displayName }} 
                    ns="ThreeCards"
                />
            </div>
            <div className={`${Styles["container-img"]} ${isSM ? Styles["sm"] : ""}`}>
                {renderChoiceImage(locale, isSM, t)}
            </div>
        </li>
    );
};

const ThreeCardsGameRules: FC<{ 
    t: Function; 
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
}> = ({ t, maxBetFollowChoice }) => {
    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>
                    <T
                        keyName="gamerules_para_4"
                        params={{ maxBet: maxBetFollowChoice?.maxBetMain || 0 }}
                    />
                </li>
                <li>
                    {t("gamerules_para_5")}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>{t("table_header_options")}</th>
                                    <th>{t("table_header_winning_conditions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("option_red")}</td>
                                    <td className="text-start">{t("winning_condition_red")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_black")}</td>
                                    <td className="text-start">{t("winning_condition_black")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_diamonds")}</td>
                                    <td className="text-start">{t("winning_condition_diamonds")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_hearts")}</td>
                                    <td className="text-start">{t("winning_condition_hearts")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_spades")}</td>
                                    <td className="text-start">{t("winning_condition_spades")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_clubs")}</td>
                                    <td className="text-start">{t("winning_condition_clubs")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <p>
                <strong>{t("note_title")}</strong> {t("note_content")}
            </p>
            <p>
                <strong>{t("example_title")}</strong>
            </p>
            <ul className="desc">
                <li>
                    {t("example_content")}
                </li>
            </ul>
        </li>
    );
};

const ThreeCardsPayouts: FC<{ 
    t: Function; 
    odds: OddsProps | undefined;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
}> = ({ t, odds, maxBetFollowChoice, fractionalOddsFormat }) => {
    return (
        <li className="guide-item">
            <h2>{t("title_payouts")}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1")}</li>
                <li>{t("payouts_para_2")}</li>
                <li>
                    {t("payouts_para_3")}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>{t("table_header_options")}</th>
                                    <th>{t("payout_table_header_odds")}</th>
                                    <th>{t("payout_table_header_bet_limit")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("option_red")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_black")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_diamonds")}</td>
                                    <td rowSpan={4}>{formatOdds(odds?.diamonds, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDiamonds}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_hearts")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_spades")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_clubs")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

export interface ThreeCardsGameGuideContentsProps {
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
    locale?: string;
    isSM?: boolean;
}

const ThreeCardsGameGuideContent: FC<ThreeCardsGameGuideContentsProps> = ({ 
    maxBetFollowChoice, 
    gameConfigs, 
    fractionalOddsFormat, 
    displayName,
    locale,
    isSM
}) => {
    const { t } = useTranslate(["ThreeCards", "Common"]);
    const { odds } = gameConfigs;
    
    return (
        <div className={`three-cards`}>
            <ul className={`game-guide`}>
                <ThreeCardsIntroduction 
                    t={t} 
                    displayName={displayName || ""} 
                    locale={locale}
                    isSM={isSM || false}
                />
                <ThreeCardsGameRules 
                    t={t} 
                    maxBetFollowChoice={maxBetFollowChoice}
                />
                <ThreeCardsPayouts 
                    t={t} 
                    odds={odds}
                    maxBetFollowChoice={maxBetFollowChoice}
                    fractionalOddsFormat={fractionalOddsFormat}
                />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default ThreeCardsGameGuideContent; 