import { FC } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { Common, CommonPoker, Pusoy } from "./constants";
import { Natural, PusoyGameConfigs } from "./type";
import Styles from "./pusoy.module.scss";

const PusoyIntroduction: FC<{ displayName?: string }> = () => {
    const { t } = useTranslate([Pusoy, Common]);

    return (
        <li className={`guide-item`}>
            <h2>{t("title_introduction", { ns: Common })}</h2>
            <div className="content">
                <T keyName={"intro_para"} ns={Pusoy}></T>
            </div>
        </li>
    );
};

const PusoyGameRules: FC<{ gameConfigs: PusoyGameConfigs }> = ({ gameConfigs }) => {
    const { t } = useTranslate([Pusoy, CommonPoker, Common]);
    const getNaturalUnits = (name: string) => {
        const natural = gameConfigs.scoreConfig.natural.find((n) => n.name === name);
        return natural ? natural.units : 0;
    };

    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title", { ns: Common })}</h2>
            <ul className="desc">
                <li>{t(`gamerules_para_1`, { ns: Pusoy })}</li>
                <li>{t(`gamerules_para_2`, { ns: Pusoy })}</li>
                <li>{t("gamerules_para_3", { ns: Pusoy })}</li>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="title-text">{t("title_ranking_level", { ns: CommonPoker })}</span>

                        <ul className="style-number-dot-number">
                            <li className="number-dot-number">
                                <span className="title-text">{t("title_card_values", { ns: CommonPoker })}</span>
                                <ul className="desc">
                                    <li>{t(`card_values_para_1`, { ns: Pusoy })}</li>
                                    <li>{t(`card_values_para_2`, { ns: Pusoy })}</li>
                                </ul>
                            </li>

                            <li className="number-dot-number">
                                <span className="title-text">{t("title_hand_ranking", { ns: CommonPoker })}</span>
                                <ul className="desc">
                                    <li>{t(`hand_ranking_para`, { ns: CommonPoker })}</li>
                                    <div className="table-container text-center">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <td>{t("header_hand", { ns: CommonPoker })}</td>
                                                    <td>{t("header_description", { ns: Common })}</td>
                                                    <td>{t("header_example", { ns: CommonPoker })}</td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>{t("royal_flush_pusoy", { ns: Pusoy })}</strong>
                                                    </td>
                                                    <td>{t("desc_royal_flush", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sanhrong.png"
                                                                alt="sanhrong"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("straight_flush_pusoy", { ns: Pusoy })}</strong>
                                                    </td>
                                                    <td>{t("desc_straight_flush", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sanhthung.png"
                                                                alt="sanhthung"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("four_of_a_kind", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_four_of_a_kind", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/tuquyfull.png"
                                                                alt="tuquy"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("full_house", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_full_house", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/culu.png"
                                                                alt="culu"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("flush", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_flush", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/thung.png"
                                                                alt="thung"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("straight", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_straight", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sanh.png"
                                                                alt="sanh"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("three_of_a_kind", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_three_of_a_kind", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/sam.png"
                                                                alt="sam"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("two_pairs", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_two_pairs", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/2doi.png"
                                                                alt="haidoi"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("one_pair", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_one_pair", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/doi.png"
                                                                alt="doi"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>{t("high_card", { ns: CommonPoker })}</strong>
                                                    </td>
                                                    <td>{t("desc_high_card", { ns: CommonPoker })}</td>
                                                    <td>
                                                        <span className={Styles["wrapper-card"]}>
                                                            <img
                                                                src="/static/images/casino-hold-em/mauthau.png"
                                                                alt="mauthau"
                                                                width={275}
                                                                height={65}
                                                                loading="eager"
                                                                className={Styles["card-sample"]}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </ul>
                            </li>

                            <li className="number-dot-number">
                                <span className="title-text">{t("title_suite_ranking", { ns: CommonPoker })}</span>
                                <ul className="desc">
                                    <li>{t(`suit_ranking_para`, { ns: CommonPoker })}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className="number-dot">
                        <span className="title-text">{t("title_payouts", { ns: Common })}</span>
                        <ul className="desc">
                            <li>{t(`payouts_para_1`, { ns: Pusoy })}</li>
                            <li>{t(`payouts_para_2`, { ns: Pusoy })}</li>
                            <li>{t("payouts_para_3", { ns: Pusoy })}</li>
                        </ul>

                        <ul className="style-number-dot-number">
                            <li className="number-dot-number">
                                <span className="title-text">{t("title_crack", { ns: Pusoy })}</span>

                                <ul className="desc">
                                    <li>{t(`crack_para`, { ns: Pusoy, crack_unit: gameConfigs.scoreConfig.crack })}</li>
                                </ul>
                            </li>

                            <li className="number-dot-number">
                                <span className="title-text">{t("title_natural", { ns: Pusoy })}</span>

                                <ul className="desc">
                                    <li>{t(`natural_para_1`, { ns: Pusoy })}</li>
                                    <li>{t(`natural_para_2`, { ns: Pusoy })}</li>
                                    <div className="table-container text-center">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <th>{t("title_natural", { ns: Pusoy })}</th>
                                                    <th>{t("header_description", { ns: Common })}</th>
                                                    <th>{t("header_units", { ns: Pusoy })}</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>{t("three_straights")}</td>
                                                    <td>{t("three_straights_desc")}</td>
                                                    <td>{getNaturalUnits(Natural.ThreeStraights)}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("three_flushes")}</td>
                                                    <td>{t("three_flushes_desc")}</td>
                                                    <td>{getNaturalUnits(Natural.ThreeFlushes)}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("six_pairs")}</td>
                                                    <td>{t("six_pairs_desc")}</td>
                                                    <td>{getNaturalUnits(Natural.SixPairs)}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("dragon")}</td>
                                                    <td>{t("dragon_desc")}</td>
                                                    <td>{getNaturalUnits(Natural.Dragon)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <li>
                                        {t("natural_para_3", { ns: Pusoy })}
                                        <ul className="detail">
                                            <li>{t(`natural_para_4`, { ns: Pusoy })}</li>
                                            <li>{t(`natural_para_5`, { ns: Pusoy })}</li>
                                            <li>{t(`natural_para_6`, { ns: Pusoy })}</li>
                                            <li>{t(`natural_para_7`, { ns: Pusoy })}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="number-dot-number">
                                <span className="title-text">{t("title_hand_by_hand_comparison", { ns: Pusoy })}</span>

                                <ul className="desc">
                                    <li>{t(`hand_by_hand_comparison_para_1`, { ns: Pusoy })}</li>
                                    <li>
                                        {t("header_example", { ns: CommonPoker }) + ":"}
                                        <ul className="detail">
                                            <li>{t(`hand_by_hand_comparison_para_1_ex_1`, { ns: Pusoy })}</li>
                                            <li>{t(`hand_by_hand_comparison_para_1_ex_2`, { ns: Pusoy })}</li>
                                            <li>{t(`hand_by_hand_comparison_para_1_ex_3`, { ns: Pusoy })}</li>
                                        </ul>
                                    </li>
                                    <li>{t(`hand_by_hand_comparison_para_2`, { ns: Pusoy })}</li>
                                    <li>{t(`hand_by_hand_comparison_para_3`, { ns: Pusoy })}</li>
                                    <div className="table-container text-center">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <td>{t("header_front", { ns: Pusoy })}</td>
                                                    <td>{t("header_units", { ns: Pusoy })}</td>
                                                    <td>{t("header_middle", { ns: Pusoy })}</td>
                                                    <td>{t("header_units", { ns: Pusoy })}</td>
                                                    <td>{t("header_back", { ns: Pusoy })}</td>
                                                    <td>{t("header_units", { ns: Pusoy })}</td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>{t("three_of_a_kind", { ns: CommonPoker })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.front?.threeOfAKind ?? "-"}</td>
                                                    <td>{t("full_house", { ns: CommonPoker })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.middle?.fullHouse ?? "-"}</td>
                                                    <td>{t("full_house", { ns: CommonPoker })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.back?.fullHouse ?? "-"}</td>
                                                </tr>
                                                <tr>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    <td>{t("four_of_a_kind", { ns: CommonPoker })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.middle?.fourOfAKind ?? "-"}</td>
                                                    <td>{t("four_of_a_kind", { ns: CommonPoker })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.back?.fourOfAKind ?? "-"}</td>
                                                </tr>
                                                <tr>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    <td>{t("straight_flush_pusoy", { ns: Pusoy })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.middle?.straightFlush ?? "-"}</td>
                                                    <td>{t("straight_flush_pusoy", { ns: Pusoy })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.back?.straightFlush ?? "-"}</td>
                                                </tr>
                                                <tr>
                                                    <td> - </td>
                                                    <td> - </td>
                                                    <td>{t("royal_flush_pusoy", { ns: Pusoy })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.middle?.royalFlush ?? "-"}</td>
                                                    <td>{t("royal_flush_pusoy", { ns: Pusoy })}</td>
                                                    <td>{gameConfigs?.scoreConfig?.royalty?.back?.royalFlush ?? "-"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </ul>
                            </li>

                            <li className="number-dot-number">
                                <span className="title-text">{t("title_pusoy", { ns: Pusoy })}</span>

                                <ul className="desc">
                                    <li>{t(`pusoy_para_1`, { ns: Pusoy })}</li>
                                    <li>
                                        {t("pusoy_para_2", { ns: Pusoy })}
                                        <ul className="detail">
                                            <li>{t(`pusoy_para_3`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_para_4`, { ns: Pusoy })}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="number-dot-number">
                                <span className="title-text">{t("title_super_pusoy", { ns: Pusoy })}</span>

                                <ul className="desc">
                                    <li>{t(`super_pusoy_para`, { ns: Pusoy })}</li>
                                </ul>
                            </li>

                            <li className="number-dot-number">
                                <span className="title-text">{t("title_pusoy_super_pusoy", { ns: Pusoy })}</span>

                                <ul className="desc">
                                    <li>{t(`pusoy_super_pusoy_para_1`, { ns: Pusoy })}</li>

                                    <li>
                                        {t("pusoy_super_pusoy_para_2", { ns: Pusoy })}
                                        <ul className="detail">
                                            <li>{t(`pusoy_super_pusoy_para_3`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_super_pusoy_para_4`, { ns: Pusoy })}</li>
                                        </ul>
                                    </li>

                                    <li>
                                        {t("pusoy_super_pusoy_para_5", { ns: Pusoy })}
                                        <ul className="detail">
                                            <li>{t(`pusoy_super_pusoy_para_6`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_super_pusoy_para_7`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_super_pusoy_para_8`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_super_pusoy_para_9`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_super_pusoy_para_10`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_super_pusoy_para_11`, { ns: Pusoy })}</li>
                                            <li>{t(`pusoy_super_pusoy_para_12`, { ns: Pusoy })}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </li>
    );
};

export interface LuckyThreeGameGuideContentsProps {
    gameConfigs: PusoyGameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
}

const LuckyThreeGameGuideContent: FC<LuckyThreeGameGuideContentsProps> = ({
    userStakeLevel,
    gameConfigs,
    fractionalOddsFormat,
    displayName,
}) => {
    return (
        <ul className={`game-guide`}>
            <PusoyIntroduction />
            <PusoyGameRules gameConfigs={gameConfigs} />
            {/* <TermsAndConditionsTolgee /> */}
        </ul>
    );
};

export default LuckyThreeGameGuideContent;
