import { FC, useEffect } from "react";
import { UserStakeLevelProps } from "../../../pages";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds, formatOddsNotTwoDot, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { SeDieMini } from "./index";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderThreeRedOneWhite, renderTwoRedTwoWhite } from "../../shared/dot";
import ScrollToMD5 from "../../shared/md5-count-down-timer";
import { isShowedMD5 } from "../../shared";
import { ENVIRONMENT } from "../../../common/constants";
import MD5 from "../base/md5";
import { GameGuideProps } from "../type";
import { Markup } from "interweave";

const SeDieIntroduction: FC<{
    t: Function;
    displayName?: string;
    gameId?: number;
    environment?: string;
}> = ({ t, displayName, gameId, environment }) => {
    const getGameDescription = () => {
        const miniSeDieDescription = environment === ENVIRONMENT.sm ? t("game_description_mini_sm") : t("game_description_mini_sc");

        switch (gameId) {
            case 9:
            case 56:
            case 57:
            case 58:
                return miniSeDieDescription;
            case 22:
                return t("game_description_vip");
            default:
                return t("game_description_default");
        }
    };

    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: "Common" })}</h2>
            <div className="content">
                <T
                    keyName={"intro_para_1"}
                    params={{
                        gameName: displayName,
                        gameDescription: getGameDescription(),
                    }}
                    ns="SeDie"
                />
            </div>
        </li>
    );
};

const SeDieGameRules: FC<{
    t: Function;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    gameId?: number;
}> = ({ t, maxBetFollowChoice, gameId }) => {
    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>{t("table_header_options")}</th>
                                    <th>{t("table_header_winning_conditions")}</th>
                                    <th>{t("table_header_descriptions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2}>{t("option_odd")}</td>
                                    <td>{t("winning_condition_3red1white")}</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_1red3white")}</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                <tr>
                                    <td rowSpan={3}>{t("option_even")}</td>
                                    <td>{t("winning_condition_4red")}</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_4white")}</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_2red2white")}</td>
                                    {renderTwoRedTwoWhite()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_4red")}</td>
                                    <td>{t("winning_condition_4red")}</td>
                                    {renderFourRed()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_4white")}</td>
                                    <td>{t("winning_condition_4white")}</td>
                                    {renderFourWhite()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_3red1white")}</td>
                                    <td>{t("winning_condition_3red1white")}</td>
                                    {renderThreeRedOneWhite()}
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_1red3white")}</td>
                                    <td>{t("winning_condition_1red3white")}</td>
                                    {renderOneRedThreeWhite()}
                                </tr>
                                {!SeDieMini.includes(gameId!) && (
                                    <tr>
                                        <td>{t("winning_condition_2red2white")}</td>
                                        <td>{t("winning_condition_2red2white")}</td>
                                        {renderTwoRedTwoWhite()}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>{t("gamerules_para_2")}</li>
                <li>{t("gamerules_para_3")}</li>
                <li>
                    <T keyName="gamerules_para_4" params={{ maxBet: maxBetFollowChoice?.maxBetMain || 0 }} />
                </li>
            </ul>
        </li>
    );
};

const SeDiePayout: FC<{
    t: Function;
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    gameId?: number;
    fractionalOddsFormat?: boolean;
}> = ({ t, gameConfigs, maxBetFollowChoice, gameId, fractionalOddsFormat }) => {
    const { odds } = gameConfigs;

    return (
        <li className={`guide-item`}>
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
                                    <th>{t("table_header_options")}</th>
                                    <th>{t("payout_table_header_odds")}</th>
                                    <th>
                                        <Markup content={t("header_betlimit", { ns: "Common" })} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("option_odd")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_even")}</td>
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_4red")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_4white")}</td>
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_3red1white")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("winning_condition_1red3white")}</td>
                                </tr>
                                {!SeDieMini.includes(gameId!) && (
                                    <tr>
                                        <td>{t("winning_condition_2red2white")}</td>
                                        <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>
                                        <td>
                                            {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const SeDieStatistical: FC<{ t: Function }> = ({ t }) => {
    return (
        <li className="guide-item">
            <h2>{t("title_statistical")}</h2>
            <ul className="desc">
                <li className="contentBeforeEmpty">
                    <table className="table text-center table-small">
                        <thead>
                            <tr>
                                <th>{t("table_header_results")}</th>
                                <th>{t("table_header_descriptions")}</th>
                                <th>{t("table_header_symbols")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{t("winning_condition_4red")}</td>
                                {renderFourRed()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-even">4</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_4white")}</td>
                                {renderFourWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-even">0</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_2red2white")}</td>
                                {renderTwoRedTwoWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-even">2</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_3red1white")}</td>
                                {renderThreeRedOneWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-odd">3</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>{t("winning_condition_1red3white")}</td>
                                {renderOneRedThreeWhite()}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <span className="dot-odd en">1</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </li>
    );
};

const SeDieMD5: FC<{
    t: Function;
    gameId?: number;
    locale?: string;
    environment?: string;
    orientation?: string;
}> = ({ t, gameId, locale, environment, orientation }) => {
    if (!isShowedMD5(environment, orientation)) {
        return null;
    }

    const currentGameType = SeDieMini.includes(gameId!) ? "mini-sedie" : "sedie";

    // Map locale to image suffix
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
            step1ImageUrl={`/static/images/${currentGameType}/md5_step1_${imageSuffix}.png?v=5`}
            step2ImageUrl={`/static/images/${currentGameType}/md5_step2_${imageSuffix}.png?v=5`}
            step3ImageUrl={`/static/images/${currentGameType}/md5_step3.png?v=2`}
            step4ImageUrl={`/static/images/${currentGameType}/md5_step4.png?v=2`}
            note={<div>{t("md5_note")}</div>}
        />
    );
};

export interface SeDieGameGuideContentsProps {
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
    gameId: number;
    environment?: string;
    orientation?: string;
    locale?: string;
    isScrollMD5?: boolean;
}

const SeDieGameGuideContent: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const {
        gameConfigs,
        gameName,
        gameId,
        maxBetFollowChoice,
        isScrollMD5,
        environment,
        isInPromotionTime,
        fractionalOddsFormat,
        orientation,
        locale,
    } = props;

    const { t } = useTranslate(["SeDie", "Common"]);

    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    return (
        <div className={`sedie`}>
            <ul className={`game-guide`}>
                <SeDieIntroduction t={t} displayName={t("game_name", { ns: "SeDie" })} gameId={gameId} environment={environment} />
                <SeDieGameRules t={t} maxBetFollowChoice={maxBetFollowChoice} gameId={gameId} />
                <SeDiePayout
                    gameConfigs={gameConfigs}
                    maxBetFollowChoice={maxBetFollowChoice}
                    gameId={gameId}
                    fractionalOddsFormat={fractionalOddsFormat}
                    t={t}
                />
                <SeDieStatistical t={t} />
                <SeDieMD5 t={t} gameId={gameId} locale={locale} environment={environment} orientation={orientation} />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default SeDieGameGuideContent;
