import { TolgeeProvider, useTranslate } from "@tolgee/react";
import React from "react";
import { StringFormat } from "../../../../helpers/string-helper";
import initTolgee from "../../../../helpers/tolgee-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../../type";
import { renderToString } from "react-dom/server";
import Styles from "../hi-lo.module.scss";
import { Markup } from "interweave";

const tolgee = initTolgee(["HiLo"]);

const HiLoGuideTolgee: React.FC<GameGuideProps<{}, {}>> = (props) => {
    const { locale } = props;
    const { t } = useTranslate(["HiLo"]);

    // Handle locale changes
    React.useEffect(() => {
        if (locale) {
            tolgee.changeLanguage(locale);
        }
    }, [locale]);

    const renderIntroduction = () => {
        return (
            <li className="guide-item">
                <h2>{t("intro_title")}</h2>
                <p className="content">{t("intro_description")}</p>
            </li>
        );
    };

    const renderGameRules = () => {
        const heart9 = (
            <>
                <span className={Styles["red"]}>9</span>
                <span className={`${Styles["red"]} ${Styles["large-font"]}`}>♥</span>
            </>
        );
        const spade4 = (
            <>
                4<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>
            </>
        );

        return (
            <li className="guide-item">
                <h2>{t("gamerules_title")}</h2>
                <ul className="desc">
                    <li>{t("gamerules_line1")}</li>
                    <li>{t("gamerules_line2")}</li>
                    <li>
                        {t("gamerules_line3")}
                        <ul className="detail">
                            <li>{t("gamerules_subline1")}</li>
                            <li>{t("gamerules_subline2")}</li>
                        </ul>
                    </li>
                </ul>
                <div>{t("gamerules_example_title")}:</div>
                <p>
                    <Markup content={StringFormat(t("gamerules_example_intro", { 0: renderToString(heart9) }))} />
                </p>
                <p>
                    <Markup content={StringFormat(t("gamerules_example_result_detail", { 0: renderToString(spade4) }))} />
                </p>
                <ul className="plus">
                    <li>{t("gamerules_example_option1")}</li>
                    <li>
                        <Markup content={StringFormat(t("gamerules_example_option2", { 0: renderToString(spade4) }))} />
                    </li>
                </ul>
                {renderGameRulesExampleNote()}
            </li>
        );
    };

    const renderGameRulesExampleNote = () => {
        return (
            <ul className="desc">
                <li>{t("gamerules_note_complete_turn")}</li>
                <li>
                    {t("gamerules_note_auto_settle_detail")}
                    <ul className="detail">
                        <li>{t("gamerules_note_auto_settle_subline1")}</li>
                        <li>{t("gamerules_note_auto_settle_subline2")}</li>
                    </ul>
                </li>
                <li>{t("gamerules_note_shuffle_card")}</li>
            </ul>
        );
    };

    const renderCardValues = () => {
        const heart = <span className={`${Styles["red"]} ${Styles["large-font"]}`}>♥</span>;
        const spade = <span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>;
        const diamond = <span className={`${Styles["red"]} ${Styles["large-font"]}`}>♦</span>;
        const club = <span className={`${Styles["black"]} ${Styles["large-font"]}`}>♣</span>;

        return (
            <li className="guide-item">
                <h2>{t("cardvalues_title")}</h2>
                <ul className="desc">
                    <li>{t("cardvalues_line1")}</li>
                    <li>
                        <Markup content={StringFormat(t("cardvalues_line2", { 0: renderToString(heart), 1: renderToString(spade), 2: renderToString(diamond), 3: renderToString(club) }))} />
                    </li>
                </ul>
                <p>
                    <strong>{t("cardvalues_note_title")}:</strong>
                </p>
                <ul className="desc">
                    <li>{t("cardvalues_note_desc1")}</li>
                    <li>{t("cardvalues_note_desc2")}</li>
                </ul>
            </li>
        );
    };

    const renderPayout = () => {
        return (
            <li className="guide-item">
                <h2>{t("payout_title")}</h2>
                <ul className="desc">
                    <li>{t("payout_desc1")}</li>
                    <li>{t("payout_desc2")}</li>
                </ul>
            </li>
        );
    };

    return (
        <>
            <ul className="game-guide">
                {renderIntroduction()}
                {renderGameRules()}
                {renderCardValues()}
                {renderPayout()}
                <TermsAndConditionsTolgee />
            </ul>
        </>
    );
};

const HiLoGuideTolgeeWrapper: React.FC<GameGuideProps<{}, {}>> = (props) => {
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <HiLoGuideTolgee {...props} />
        </TolgeeProvider>
    );
};

export default HiLoGuideTolgeeWrapper;
