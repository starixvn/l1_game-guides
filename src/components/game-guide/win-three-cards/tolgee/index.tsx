import { useEffect, useState } from "react";
import { TolgeeProvider, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import { GameConfigProps, OddsProps, MaxBetChoicesProps } from "../type";
import Styles from "../win-three.module.scss";
import MD5 from "../../base/md5";
import { IMd5Resources } from "../../base/md5/languages/types";
import { generateMD5TranslationResource } from "../../base/md5/languages/tolgee";

const tolgee = initTolgee(["WinThreeCards"]);

const renderGameRule = (maxBet: string | undefined) => {
    const { t } = useTranslate(["WinThreeCards", "Common"]);
    return (
        <>
            <h2>{t("gamerules_title", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>{t("gamerules_para_4")}</li>
                <li>{t("gamerules_para_5")}</li>
                <li>{t("gamerules_para_6")}</li>
                <li>{t("gamerules_para_7")}</li>
                <li>{t("gamerules_para_3", { maxbet: maxBet, ns: "Common" })}</li>
                <div className="table-container">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th className={Styles["payout-option"]}>{t("header_betoption", { ns: "Common" })}</th>
                                <th>{t("guide_header_winning_condition", { ns: "Common" })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>{t("option_dragon")}</td>
                                <td className="text-start">{t("option_dragon_desc")}</td>
                            </tr>
                            <tr>
                                <td>{t("option_phoenix")}</td>
                                <td className="text-start">{t("option_phoenix_desc")}</td>
                            </tr>
                            <tr>
                                <td>{t("option_pair_8_plus")}</td>
                                <td className="text-start">{t("option_pair_8_plus_desc")}</td>
                            </tr>
                            <tr>
                                <td>{t("option_three_of_a_kind")}</td>
                                <td className="text-start">{t("option_three_of_a_kind_desc")}</td>
                            </tr>
                            <tr>
                                <td>{t("option_straight_flush")}</td>
                                <td className="text-start">{t("option_straight_flush_desc")}</td>
                            </tr>
                            <tr>
                                <td>{t("option_flush")}</td>
                                <td className="text-start">{t("option_flush_desc")}</td>
                            </tr>
                            <tr>
                                <td>{t("option_straight")}</td>
                                <td className="text-start">{t("option_straight_desc")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined, fractionalOddsFormat = false) => {
    const { t } = useTranslate(["WinThreeCards", "Common"]);
    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: "Common" })}</h2>
            <ul className="desc">
                <li>
                    {t("payouts_para_1", { ns: "Common" })}
                    <strong> {t("payouts_note")}</strong> {t("payouts_para_2", { ns: "Common" })}
                </li>
                <li>
                    {t("payouts_para_3", { ns: "Common" })}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th className={Styles["payout-option"]}>{t("header_betoption", { ns: "Common" })}</th>
                                    <th>{t("header_odds", { ns: "Common" })}</th>
                                    <th>
                                        {t("title_bet_limit", { ns: "Common" })} <br></br>({t("table_min")} - {t("table_max")})
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("option_dragon")}</td>
                                    <td>{formatOdds(odds?.dragon, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetDragon}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_phoenix")}</td>
                                    <td>{formatOdds(odds?.phoenix, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPhoenix}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_pair_8_plus")}</td>
                                    <td>{formatOdds(odds?.pair8Plus, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetPair8Plus}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_three_of_a_kind")}</td>
                                    <td>{formatOdds(odds?.threeOfAKind, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetThreeOfAKind}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_straight_flush")}</td>
                                    <td>{formatOdds(odds?.straightFlush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraightFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_flush")}</td>
                                    <td>{formatOdds(odds?.flush, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFlush}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_straight")}</td>
                                    <td>{formatOdds(odds?.straight, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetStraight}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const renderCardType = () => {
    const { t } = useTranslate(["WinThreeCards", "Common"]);
    return (
        <>
            <li className="guide-item">
                <h2>{t("card_type_title")}</h2>
                <div className="table-container text-center">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>{t("table_card_type")}</th>
                                <th>{t("header_description", { ns: "Common" })}</th>
                                <th>{t("example", { ns: "Common" })}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width={250}>
                                    <strong>235</strong>
                                </td>
                                <td className="text-start">{t("card_type_235_desc")}</td>
                                <td width={250}>
                                    <span className={Styles["wrapper-card"]}>
                                        <img
                                            src="/static/images/win-three-cards/235-1.png"
                                            alt="235"
                                            height={65}
                                            loading="eager"
                                            style={{ marginBottom: 5 }}
                                        />
                                    </span>{" "}
                                    <br></br>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/235-2.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>{t("card_type_three_of_a_kind")}</strong>
                                </td>
                                <td className="text-start">{t("card_type_three_of_a_kind_desc")}</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/threeKind.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>{t("card_type_straight_flush")}</strong>
                                </td>
                                <td className="text-start">{t("card_type_straight_flush_desc")}</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straightFlush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>{t("card_type_flush")}</strong>
                                </td>
                                <td className="text-start">{t("card_type_flush_desc")}</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/flush.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>{t("card_type_straight")}</strong>
                                </td>
                                <td className="text-start">{t("card_type_straight_desc")}</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/straight.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>{t("card_type_pair")}</strong>
                                </td>
                                <td className="text-start">{t("card_type_pair_desc")}</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/pair.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>{t("card_type_high_card")}</strong>
                                </td>
                                <td className="text-start">{t("card_type_high_card_desc")}</td>
                                <td>
                                    <span className={Styles["wrapper-card"]}>
                                        <img src="/static/images/win-three-cards/highCard.png" alt="235" height={65} loading="eager" />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        </>
    );
};

const renderRankingLevel = () => {
    const { t } = useTranslate(["WinThreeCards"]);
    return (
        <>
            <li className="guide-item">
                <h2>{t("ranking_level_title")}</h2>
                <ul className="desc">
                    <li>
                        <strong>{t("ranking_card_ranking")}</strong>
                        <ul className="detail">
                            <li>{t("ranking_card_ranking_desc")}</li>
                            <li>{t("ranking_card_suit_note")}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>{t("ranking_hand_ranking")}</strong>
                        <ul className="detail">
                            <li>{t("ranking_hand_ranking_desc")}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>{t("ranking_235_vs_three_of_a_kind")}</strong>
                        <ul className="detail">
                            <li>{t("ranking_235_vs_three_of_a_kind_desc_1")}</li>
                            <li>{t("ranking_235_vs_three_of_a_kind_desc_2")}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>{t("ranking_pair")}</strong>
                        <ul className="detail">
                            <li>{t("ranking_pair_desc_1")}</li>
                            <li>{t("ranking_pair_desc_2")}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>{t("ranking_flush_high_card")}</strong>
                        <ul className="detail">
                            <li>{t("ranking_flush_high_card_desc")}</li>
                        </ul>
                    </li>
                    <li>
                        <strong>{t("ranking_straight_flush_straight")}</strong>
                        <ul className="detail">
                            <li>{t("ranking_straight_flush_straight_desc")}</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </>
    );
};

const WinThreeCardsGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, locale } = props;
    const { odds } = gameConfigs;
    const [md5Resources, setMd5Resources] = useState<IMd5Resources | undefined>(undefined);
    const { t } = useTranslate(["WinThreeCards", "Common"]);

    useEffect(() => {
        if (locale) {
            (async () => {
                await tolgee.changeLanguage(locale);
                const md5Resources = generateMD5TranslationResource(tolgee);
                setMd5Resources(md5Resources);
            })();
        }
    }, [locale, tolgee]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>{t("title_introduction", { ns: "Common" })}</h2>
                    <p className={`content ${Styles["content-customize"]}`}>{t("intro_para_1", { gameName })}</p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetMain)}</li>
                {renderPayouts(odds, maxBetFollowChoice, fractionalOddsFormat)}
                {renderCardType()}
                {renderRankingLevel()}
                <MD5
                    locale={locale}
                    resources={md5Resources}
                    step1ImageUrl={"/static/images/win-three-cards/md5_step1_en.png?v=3"}
                    step2ImageUrl={"/static/images/win-three-cards/md5_step2_en.png?v=3"}
                    step3ImageUrl={"/static/images/win-three-cards/md5_step3_vi.png?v=1"}
                    step4ImageUrl={"/static/images/win-three-cards/md5_step4_vi.png?v=1"}
                    note={<div>{t("md5_note")}</div>}
                />
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const WinThreeCardsGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <WinThreeCardsGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default WinThreeCardsGuideTolgeeWrapper;
