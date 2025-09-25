import { T, TolgeeInstance, useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import { FC, useMemo } from "react";
import { formatOdds } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideProps } from "../type";
import { GameConfigProps, MaxBetChoicesProps } from "./type";
import { TogleeNamespace } from "./namespace-tolgee";

const SeDieIntroduction: FC<{
    t: Function;
    displayName?: string;
    gameId?: number;
    environment?: string;
}> = ({ t, displayName, gameId, environment }) => {
    const getGameDescription = () => {
        return t("game_description_default", { ns: TogleeNamespace.SpecificGame });
    };

    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
            <div className="content">
                <T
                    params={{
                        gameName: displayName,
                        gameDescription: getGameDescription(),
                    }}
                >
                    {t("game_description_default", { ns: TogleeNamespace.SpecificGame })}
                </T>
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
            <h2 className="font-bold">{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>
                    {t("gamerules_betting_options", { ns: TogleeNamespace.SpecificGame })}
                    <ul className="detail">
                        <li>{t("gamerules_betting_options_odd", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("gamerules_betting_options_even", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("gamerules_betting_options_4red", { ns: TogleeNamespace.SpecificGame })}</li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

const renderDiceImage = (imageName: string) => {
    return (
        <div className="d-flex justify-content-center">
            <img
                style={{ width: "31px", height: "31px" }}
                src={`/static/images/sedie-multiplayer/bet-detail-${imageName}.svg`}
                alt={imageName}
            />
        </div>
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
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <div className="table-container">
                <table className={`table text-center`}>
                    <thead>
                        <tr>
                            <th>{t("table_header_options", { ns: TogleeNamespace.SpecificGame })}</th>
                            <th>{t("payout_table_header_odds", { ns: TogleeNamespace.SpecificGame })}</th>
                            <th>
                                <Markup content={t("header_betlimit", { ns: TogleeNamespace.Common })} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">
                                <span style={{fontWeight: "500"}}>{t("option_odd", { ns: TogleeNamespace.SpecificGame })}</span>
                                <span style={{width:"1px", height: "18px", backgroundColor: "#b3bec1"}}></span>
                                <span style={{fontWeight: "500"}}>{t("option_even", { ns: TogleeNamespace.SpecificGame })}</span>
                            </td>
                            <td>{formatOdds(odds?.even, fractionalOddsFormat)}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                            </td>
                        </tr>

                        <tr>
                            <td>{renderDiceImage("red2")}</td>
                            <td>{formatOdds(odds?.red2, fractionalOddsFormat)}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed2}
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">
                                {renderDiceImage("red3")}
                                <span style={{width:"1px", height: "18px", backgroundColor: "#b3bec1"}}></span>
                                {renderDiceImage("white3")}
                            </td>
                            <td>{formatOdds(odds?.red3, fractionalOddsFormat)}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed3}
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-center align-items-center gap-2">
                                {renderDiceImage("red4")}
                                <span style={{width:"1px", height: "18px", backgroundColor: "#b3bec1"}}></span>
                                {renderDiceImage("white4")}
                            </td>
                            <td>{formatOdds(odds?.red4, fractionalOddsFormat)}</td>
                            <td>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetRed4}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
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
    tolgee: TolgeeInstance;
}

const GameNameMapping: Record<number, string> = {
    148: "game_name",
};

const SeDieGameGuideContent: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps> & { tolgee: TolgeeInstance }> = (props) => {
    const { gameConfigs, gameId, maxBetFollowChoice, environment, fractionalOddsFormat } = props;

    const { t } = useTranslate([TogleeNamespace.Common, TogleeNamespace.SpecificGame]);

    const displayName = useMemo(() => {
        return t(GameNameMapping[gameId || 148], { ns: TogleeNamespace.SpecificGame });
    }, [t]);

    return (
        <div className={`sedie`}>
            <ul className={`game-guide`}>
                <SeDieIntroduction t={t} displayName={displayName} gameId={gameId} environment={environment} />
                <SeDieGameRules t={t} maxBetFollowChoice={maxBetFollowChoice} gameId={gameId} />
                <SeDiePayout
                    gameConfigs={gameConfigs}
                    maxBetFollowChoice={maxBetFollowChoice}
                    gameId={gameId}
                    fractionalOddsFormat={fractionalOddsFormat}
                    t={t}
                />
                <TermsAndConditionsTolgee />
            </ul>
        </div>
    );
};

export default SeDieGameGuideContent;
