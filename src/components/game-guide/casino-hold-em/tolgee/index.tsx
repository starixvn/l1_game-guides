import React from "react";
import { TolgeeProvider, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { formatOdds } from "../../../../helpers/number-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import ScrollToMD5 from "../../../shared/md5-number";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import Styles from "../casino-hold-em.module.scss";
import MD5, { md5ServicesUrl } from "../../base/md5";

const tolgee = initTolgee(["CasinoHoldEm"]);

const renderIntroduce = () => {
    const { t } = useTranslate(["CasinoHoldEm"]);

    return (
        <>
            <h2>{t("intro_title")}</h2>
            <p className="content">{t("intro_description")}</p>
            <p className="content">
                {t("intro_md5_sentence1")}
                <a href="#md5" className={Styles["link"]}>
                    {t("intro_md5_sentence2")}
                </a>{" "}
                {t("intro_md5_sentence3")}
            </p>
        </>
    );
};

const renderGameRule = (maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    const { t } = useTranslate(["CasinoHoldEm"]);

    return (
        <>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_desc_line1")}</li>
                <li>{t("gamerules_desc_line2")}</li>
                <li>{t("gamerules_desc_line3")}</li>
                <li>{t("gamerules_desc_line4")}</li>
                <li>
                    {t("gamerules_swap_card_title")}
                    <ul className="detail">
                        <li>{t("gamerules_swap_card_desc")}</li>
                    </ul>
                </li>
                <li>{t("gamerules_note")}</li>
                <li>
                    {t("gamerules_fold_call_desc")}
                    <ul className="detail">
                        <li>
                            <Markup content={t("gamerules_fold_call_fold")} />
                        </li>
                        <li>
                            <Markup content={t("gamerules_fold_call_call")} />
                        </li>
                    </ul>
                </li>
                <li>{t("gamerules_after_click")}</li>
                <li>
                    {t("gamerules_the_two")}
                    {` ${t("gamerules_the_player")}`}
                </li>
                <li>
                    <Markup content={t("gamerules_maximum_total", { 0: (maxBetFollowChoice?.maxBetRound ?? 0).toString() })} />
                </li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("gamerules_ranking_level")}</span>
                    <ul className="style-number-dot-number">
                        <li className="number-dot-number">
                            <span className="title-text">{t("gamerules_card_values_title")}</span>
                            <ul className="desc">
                                <li>{t("gamerules_card_values_desc_line1")}</li>
                                <li>{t("gamerules_card_values_desc_line2")}</li>
                                <li>
                                    <Markup
                                        content={t("gamerules_card_values_desc_line3", {
                                            0: `<span class="red">♥</span>`,
                                            1: `<span class="casino-black">♠</span>`,
                                            2: `<span class="red">♦</span>`,
                                            3: `<span class="casino-black">♣</span>`,
                                        })}
                                    />
                                </li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">{t("gamerules_hand_ranking_title")}</span>
                            <ul className="desc">
                                <li>
                                    {t("gamerules_hand_ranking_line1")}
                                    <div className="table-container text-center">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <td>{t("gamerules_hand_ranking_table_title_hand")}</td>
                                                    <td>{t("gamerules_hand_ranking_table_title_description")}</td>
                                                    <td>{t("gamerules_hand_ranking_table_title_example")}</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>{t("hand_royal_flush")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_royal_flush")}</td>
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
                                                        <strong>{t("hand_straight_flush")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_straight_flush")}</td>
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
                                                        <strong>{t("hand_four_kind")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_four_of_a_kind")}</td>
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
                                                        <strong>{t("hand_full_house")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_full_house")}</td>
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
                                                        <strong>{t("hand_flush")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_flush")}</td>
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
                                                        <strong>{t("hand_straight")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_straight")}</td>
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
                                                        <strong>{t("hand_three_kind")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_three_of_a_kind")}</td>
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
                                                        <strong>{t("hand_two_pairs")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_two_pair")}</td>
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
                                                        <strong>{t("hand_one_pair")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_pair")}</td>
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
                                                        <strong>{t("hand_high_cards")}</strong>
                                                    </td>
                                                    <td>{t("gamerules_hand_ranking_desc_high_card")}</td>
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
                                </li>
                                <li>{t("gamerules_hand_ranking_line2")}</li>
                            </ul>
                            <p>
                                <strong>{t("common_example")}</strong>
                            </p>
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>{t("common_cards")}</td>
                                            <td>{t("common_combination")}</td>
                                            <td>{t("common_result")}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t("common_player")}</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    A<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    A<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    J<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>{t("hand_two_pairs")}</td>
                                        </tr>
                                        <tr>
                                            <td>{t("common_dealer")}</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>{t("hand_one_pair")}</td>
                                        </tr>
                                        <tr>
                                            <td>{t("common_community_cards")}</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    10<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    6<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; {t("gamerules_hand_ranking_example_player")}</div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>{t("common_cards")}</td>
                                            <td>{t("common_combination")}</td>
                                            <td>{t("common_result")}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t("common_player")}</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    5<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>{t("hand_two_pairs")}</td>
                                        </tr>
                                        <tr>
                                            <td>{t("common_dealer")}</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    4<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    10<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    10<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>{t("hand_two_pairs")}</td>
                                        </tr>
                                        <tr>
                                            <td>{t("common_community_cards")}</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; {t("gamerules_hand_ranking_example_dealer")}</div>
                            <br />
                            <div className="table-container text-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>{t("common_cards")}</td>
                                            <td>{t("common_combination")}</td>
                                            <td>{t("common_result")}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t("common_player")}</td>
                                            <td>
                                                <span className={Styles["red"]}>
                                                    5<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    6<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>{t("hand_two_pairs")}</td>
                                        </tr>
                                        <tr>
                                            <td>{t("common_dealer")}</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    4<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    2<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td>{t("hand_two_pairs")}</td>
                                        </tr>
                                        <tr>
                                            <td>{t("common_community_cards")}</td>
                                            <td>
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    A<span className={Styles["font-large"]}>♠</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["black"]}>
                                                    7<span className={Styles["font-large"]}>♣</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    7<span className={Styles["font-large"]}>♥</span>
                                                </span>
                                                ,{" "}
                                                <span className={Styles["red"]}>
                                                    J<span className={Styles["font-large"]}>♦</span>
                                                </span>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>=&gt; {t("gamerules_hand_ranking_example_result")}</div>
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("gamerules_betting_option")}</span>
                    <ul className="style-number-dot-number ">
                        <li className="number-dot-number">
                            <span className="title-text">{t("gamerules_ante_bet_title")}</span>
                            <ul className="desc">
                                <li>{t("gamerules_ante_bet_desc_line1")}</li>
                                <li>{t("gamerules_ante_bet_desc_line2")}</li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">{t("gamerules_aa_bet_title")}</span>
                            <ul className="desc">
                                <li>{t("gamerules_aa_bet_desc_line1")}</li>
                                <li>{t("gamerules_aa_bet_desc_line2")}</li>
                                <li>{t("gamerules_aa_bet_desc_line3")}</li>
                            </ul>
                        </li>
                        <li className="number-dot-number">
                            <span className="title-text">{t("gamerules_call_bet_title")}</span>
                            <ul className="desc">
                                <li>{t("gamerules_call_bet_desc_line1")}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("gamerules_hand_qualification_title")}</span>
                    <ul className="desc">
                        <li>{t("gamerules_hand_qualification_desc")}</li>
                    </ul>
                    <div className="table-container text-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>{t("gamerules_hand_qualification_table_title_dealer")}</td>
                                    <td>{t("gamerules_hand_qualification_table_title_dealer_does")}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("gamerules_hand_qualification_table_col1_player_beat")}</td>
                                    <td>{t("gamerules_hand_qualification_table_col2_player_wins")}</td>
                                    <td rowSpan={3}>{t("gamerules_hand_qualification_table_col3_player_wins")}</td>
                                </tr>
                                <tr>
                                    <td>{t("gamerules_hand_qualification_table_col1_player")}</td>
                                    <td>{t("gamerules_hand_qualification_table_col2_player_loses")}</td>
                                </tr>
                                <tr>
                                    <td>{t("gamerules_hand_qualification_table_col1_player_and_dealer")}</td>
                                    <td>{t("gamerules_hand_qualification_table_col2_both_the")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: any | undefined, fractionalOddsFormat = false) => {
    const { t } = useTranslate(["CasinoHoldEm"]);

    return (
        <>
            <h2>{t("payouts_title")}</h2>
            <ul className="desc">
                <li>{t("payouts_desc_line1")}</li>
                <li>{t("payouts_desc_line2")}</li>
                <li>{t("payouts_desc_line3")}</li>
            </ul>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("payouts_ante_bet")}</span>
                    <div className="table-container text-center">
                        <table className="table table-small">
                            <thead>
                                <tr>
                                    <td>{t("common_hand_result")}</td>
                                    <td>{t("common_odds")}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("hand_royal_flush")}</td>
                                    <td>{formatOdds(odds?.AnteBet_royalFlush, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_straight_flush")}</td>
                                    <td>{formatOdds(odds?.AnteBet_straightFlush, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_four_kind")}</td>
                                    <td>{formatOdds(odds?.AnteBet_fourKind, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_full_house")}</td>
                                    <td>{formatOdds(odds?.AnteBet_fullHouse, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_flush")}</td>
                                    <td>{formatOdds(odds?.AnteBet_flush, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_straight")}</td>
                                    <td rowSpan={5}>{formatOdds(odds?.AnteBet_straight, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_three_kind")}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_two_pairs")}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_one_pair")}</td>
                                </tr>
                                <tr>
                                    <td>{t("hand_high_cards")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("payouts_call_bet_title")}</span>
                    <ul className="desc">
                        <li>{t("payouts_call_bet_desc_line1")}</li>
                        <li>
                            {t("payouts_call_bet_desc_line2")} {formatOdds(odds?.CallBet_callBet, fractionalOddsFormat)}
                        </li>
                    </ul>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("payouts_aa_bet")}</span>
                    <div className="table-container">
                        <div className="table-container text-center">
                            <table className="table table-small">
                                <thead>
                                    <tr>
                                        <td>{t("common_hand_result")}</td>
                                        <td>{t("common_odds")}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("hand_royal_flush")}</td>
                                        <td>{formatOdds(odds?.AABet_royalFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_straight_flush")}</td>
                                        <td>{formatOdds(odds?.AABet_straightFlush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_four_kind")}</td>
                                        <td>{formatOdds(odds?.AABet_fourKind, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_full_house")}</td>
                                        <td>{formatOdds(odds?.AABet_fullHouse, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_flush")}</td>
                                        <td>{formatOdds(odds?.AABet_flush, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_straight")}</td>
                                        <td rowSpan={5}>{formatOdds(odds?.AABet_straight, fractionalOddsFormat)}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_three_kind")}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_two_pairs")}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("hand_pair_aces")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

const renderBetLimit = (maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    const { t } = useTranslate(["CasinoHoldEm"]);

    return (
        <>
            <h2>{t("bet_limit_title")}</h2>
            <table className="table table-small text-center">
                <thead>
                    <tr>
                        <td>{t("bet_limit_table_title_options")}</td>
                        <td>{t("bet_limit_table_title_bet_limit")}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{t("bet_limit_table_content_ante")}</td>
                        <td>
                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAnteBetChoice}
                        </td>
                    </tr>
                    <tr>
                        <td>{t("bet_limit_table_content_call")}</td>
                        <td>
                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetCallBetChoice}
                        </td>
                    </tr>
                    <tr>
                        <td>AA</td>
                        <td>
                            {maxBetFollowChoice?.minBetRound} - {maxBetFollowChoice?.maxBetAaBetChoice}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

const renderMD5 = (locale: string | undefined) => {
    const { t } = useTranslate(["CasinoHoldEm"]);

    return (
        <MD5
            locale={locale}
            resources={{
                content: {
                    header: t("md5_title"),
                    technology: {
                        header: t("md5_technology_header"),
                        details: [t("md5_technology_detail1"), t("md5_technology_detail2"), t("md5_technology_detail3")],
                    },
                    validation: {
                        header: t("md5_validation_header"),
                        details: [
                            t("md5_validation_step1"),
                            t("md5_validation_step2"),
                            t("md5_validation_step3", { 0: md5ServicesUrl }),
                            t("md5_validation_step4"),
                        ],
                    },
                    noted: t("md5_noted"),
                },
                example: {
                    header: t("md5_example_header"),
                    step1Text: t("md5_example_step1_text"),
                    step2Text: t("md5_example_step2_text"),
                    step3Text: t("md5_example_step3_text", { 0: md5ServicesUrl }),

                    step4Text: t("md5_example_step4_text"),
                    md5Key: t("md5_example_md5_key"),
                    result: t("md5_example_result"),
                    copy: t("md5_example_copy"),
                },
            }}
            step1ImageUrl={`/static/images/casino-hold-em/md5-${locale}.png?v=5`}
            step2ImageUrl={`/static/images/casino-hold-em/result-${locale}.png?v=5`}
            step3ImageUrl="/static/images/casino-hold-em/hash-darling.png?v=5"
            step4ImageUrl="/static/images/casino-hold-em/md5-checksum.png?v=5"
            note={
                <>
                    <strong>{t("md5_note_title")}</strong>
                    <ul className="detail">
                        <li>
                            <Markup content={t("md5_note_line1", { 0: "(J♣ 10♥)", 1: "(3♦ 2♠)", 2: "(K♣ 5♥ 3♠ 10♦ 4♦)" })} />
                        </li>
                        <li>
                            <Markup content={t("md5_note_line2", { 0: "(J♣ 10♥)", 1: "(3♦ 2♠)" })} />
                        </li>
                    </ul>
                </>
            }
        />
    );
};

const CasinoHoldEmGuideTolgee: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, locale, isScrollMD5 } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslate(["CasinoHoldEm"]);

    // Handle locale changes
    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    // Handle MD5 scroll
    React.useEffect(() => {
        if (isScrollMD5) {
            ScrollToMD5();
        }
    }, [isScrollMD5]);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">{renderIntroduce()}</li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice)}</li>
                <li className="guide-item">{renderPayouts(odds, fractionalOddsFormat)}</li>
                <li className="guide-item">{renderBetLimit(maxBetFollowChoice)}</li>
                {renderMD5(locale)}
                <TermsAndConditionsTolgee extendDetails={[t("terms_para_1")]} />
            </ul>
        </>
    );
};

const CasinoHoldEmGuideTolgeeWrapper: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <CasinoHoldEmGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default CasinoHoldEmGuideTolgeeWrapper;
