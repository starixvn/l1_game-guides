import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";
import { formatOdds, formatOddsWithoutOne, numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigs } from "../type";
import Styles from "./baccarat-x.module.scss";
import { TogleeNamespace } from "./namespace-tolgee";
import { BaccaratXContentsProps } from "./type";

const renderGameRules = (t: Function, maxBet: number, userStakeLevel: UserStakeLevelProps | undefined) => {
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    return (
        <div className="guide-item">
            <h2>{t("gamerules_title", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_2", { ns: TogleeNamespace.SpecificGame})}</li>
                <li>{t("gamerules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_4", { ns: TogleeNamespace.SpecificGame})}</li> 
                <li><Markup content={t("gamerules_para_5", { ns: TogleeNamespace.SpecificGame})} /></li>                 
                <li>{t("gamerules_para_6", { ns: TogleeNamespace.SpecificGame, maxbet: maxBetMain})}</li>      
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: TogleeNamespace.Common })}</th>
                                    <th className="bold">{t("header_description", {ns: TogleeNamespace.Common})}</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("glossary_player", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_player", {ns: TogleeNamespace.SpecificGame})}</td>
                                   
                                </tr>
                                <tr>
                                    <td>{t("glossary_banker", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_banker", {ns: TogleeNamespace.SpecificGame})}</td>
                                 
                                </tr>
                                <tr>
                                    <td>{t("glossary_tie", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_tie", {ns: TogleeNamespace.SpecificGame})}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_player_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_player_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_banker_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_banker_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </li>  
                    
                <ul className="style-number-dot">
                    <li  className="number-dot"><span className="title-text">{t("sub_title_cut_card", { ns: TogleeNamespace.SpecificGame })}</span>
                       
                        <ul className="desc">
                            <li>{t("cutcard_para_1", {ns: TogleeNamespace.SpecificGame})}</li>
                            <li>{t("cutcard_para_2", {ns: TogleeNamespace.SpecificGame})}</li>
                        </ul>
                        <div className={Styles["img-center"]}><img src="./static/images/baccarat-x/cutcard.png?v=1" alt="cut card"/></div>
                        
                    </li>
                    <li  className="number-dot"><span className="title-text">{t("sub_title_burn_card", { ns: TogleeNamespace.SpecificGame })}</span>
                        <ul className="desc">
                            <li>{t("burncard_para_1", {ns: TogleeNamespace.SpecificGame})}</li>
                            <li><Markup content={t("burncard_para_2", {ns: TogleeNamespace.SpecificGame})} /></li>
                        </ul>
                        
                    </li>
                    
                </ul>  
                <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_first_card", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className="bold">A</th>
                                    <th className="bold">2</th>
                                    <th className="bold">3</th>
                                    <th className="bold">4</th>
                                    <th className="bold">5</th>
                                    <th className="bold">6</th>
                                    <th className="bold">7</th>
                                    <th className="bold">8</th>
                                    <th className="bold">9</th>
                                    <th className="bold">10</th>
                                    <th className="bold">J</th>
                                    <th className="bold">Q</th>
                                    <th className="bold">K</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("header_burn_value", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                <div><strong>{t("example", { ns: TogleeNamespace.Common})}</strong>
                    <ul className="desc">
                        <li>{t("burncard_para_4", { ns: TogleeNamespace.SpecificGame})}</li>
                        <li>{t("burncard_para_5", { ns: TogleeNamespace.SpecificGame})}</li>
                    </ul>
                </div>   
            </ul>
            
        </div>
    );
};

const renderPayout = (
    t: Function,
    gameConfigs: GameConfigs,
    userStakeLevel: UserStakeLevelProps | undefined,
    fractionalOddsFormat?: boolean
) => {
    const { odds, maxBetPerChoices, minBet, maxBet, maxWinPerRound } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetMain = Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet);
    const maxWin = numberWithCommas((maxWinPerRound || 0) * maxBetMain);
    const maxBetPlayer = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.player));
    const maxBetTie = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.tie));
    const maxBetPlayerPair = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.playerPair));

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                
                <li>{t("payouts_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{<Markup content={t("payouts_para_3", { ns: TogleeNamespace.SpecificGame, maxwin: maxWin })} />}</li>
                <li>{t("payouts_para_4", { ns: TogleeNamespace.SpecificGame })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: TogleeNamespace.Common })}</th>
                                    <th className="bold">{t("header_odds", {ns: TogleeNamespace.SpecificGame})}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_bet_limit", { ns: TogleeNamespace.Common })}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("glossary_player", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{formatOdds(odds?.player, fractionalOddsFormat)}</td>
                                    <td rowSpan={2}>{minBetMain} - {maxBetPlayer}</td>
                                    
                                </tr>
                                <tr>
                                    <td>{t("glossary_banker", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{formatOdds(odds?.banker, fractionalOddsFormat)}</td>
                                    
                                </tr>
                                <tr>
                                    <td>{t("glossary_tie", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{formatOdds(odds?.tie, fractionalOddsFormat)}</td>                                    
                                    <td>
                                        {minBetMain} - {maxBetTie}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_player_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.playerPair, fractionalOddsFormat)}</td>  
                                    <td rowSpan={2} className={Styles["nowrap"]}>{minBetMain} - {maxBetPlayerPair}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_banker_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>{t("multiplier_payouts_para_5", { ns: TogleeNamespace.SpecificGame })}</li>
            </ul>
        </li>
    );
};

const renderCalculationRules = (t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("title_point_calculation_rules", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li>{t("calculationrules_para_1", { ns: TogleeNamespace.SpecificGame })}
                    <ul className="detail">
                        <li>{t("calculationrules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("calculationrules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("calculationrules_para_4", { ns: TogleeNamespace.SpecificGame })}</li>
                    </ul>
                </li>
                <li>{t("calculationrules_para_5", { ns: TogleeNamespace.SpecificGame })}</li>
                
            </ul>
            <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold`}>{t("header_first_two_card", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className="bold">{t("header_third_card", {ns: TogleeNamespace.SpecificGame})}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_total", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>
                                    {t("header_total_points_based_on_rules", { ns: TogleeNamespace.SpecificGame })}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4, 5</td>
                                    <td></td>
                                    <td>4 + 5 = 9</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>8, 8</td>
                                    <td></td>
                                    <td>8 + 8 = 16</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>7, 3</td>
                                    <td></td>
                                    <td>7 + 3 = 10</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>9, 4</td>
                                    <td>8</td>
                                    <td>9 + 4 + 8 = 21</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>A, K</td>
                                    <td>10</td>
                                    <td>1 + 0 + 0 = 1</td>
                                    <td>1</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
        </li>
    );
};

const renderThirdCardRules = (t: Function) => {
    return (
        <li className="guide-item">
            <h2>{t("title_third_card_rules", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li>{t("thirdcardrules_para_1", { ns: TogleeNamespace.SpecificGame })}
                </li>
                <li>{t("thirdcardrules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                
            </ul>
            <ul className="style-number-dot">
                    <li  className="number-dot"><span className="title-text">{t("subtitle_rules_player's_hand", { ns: TogleeNamespace.SpecificGame })}</span>
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr className={Styles["payout-header"]}>
                                        <th className={`bold`}>{t("header_player's_first_two_cards", { ns: TogleeNamespace.SpecificGame })}</th>
                                        <th className="bold">{t("header_action", {ns: TogleeNamespace.SpecificGame})}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0, 1, 2, 3, 4, 5</td>
                                        <td>{t("desc_action_1", {ns: TogleeNamespace.SpecificGame})}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>6 or 7 </td>
                                        <td>{t("desc_action_2", {ns: TogleeNamespace.SpecificGame})}</td>
                                    </tr>
                                    <tr>
                                        <td>8 or 9</td>
                                        <td>{t("desc_action_3", {ns: TogleeNamespace.SpecificGame})}</td>
                                    </tr>
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </li>
                    <li  className="number-dot"><span className="title-text">{t("title_rules_for_banker's_hand", { ns: TogleeNamespace.SpecificGame })}</span>
                        <ul className="desc">
                            <li>{t("rulesbankerhand_para_1", {ns: TogleeNamespace.SpecificGame})}
                                <table className="table text-center">
                                    <thead>
                                        <tr className={Styles["payout-header"]}>
                                            <th className={`bold`}>{t("header_Banker’s_first_two_cards_total", { ns: TogleeNamespace.SpecificGame })}</th>
                                            <th className="bold">{t("header_banker_draw_when_payer's_third_card_value", {ns: TogleeNamespace.SpecificGame})}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0, 1, 2</td>
                                            <td>{t("desc_banker_draw_1", {ns: TogleeNamespace.SpecificGame})}</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>{t("desc_banker_draw_2", {ns: TogleeNamespace.SpecificGame})}</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>{t("desc_banker_draw_3", {ns: TogleeNamespace.SpecificGame})}</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>4, 5, 6, 7.</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>{t("desc_banker_draw_5", {ns: TogleeNamespace.SpecificGame})}</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>{t("desc_banker_draw_6", {ns: TogleeNamespace.SpecificGame})}</td>
                                        </tr>
                                        <tr>
                                            <td> 8 {t("player'sfirst2cards_or", {ns: TogleeNamespace.SpecificGame})} 9</td>
                                            <td>{t("desc_banker_draw_7", {ns: TogleeNamespace.SpecificGame})}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li>{t("rulesbankerhand_para_2", {ns: TogleeNamespace.SpecificGame})}</li>
                            <li>{t("rulesbankerhand_para_3", {ns: TogleeNamespace.SpecificGame})}</li>
                        </ul>
                        
                    </li>
                    
                </ul>  
            
        </li>
    );
};

const renderMultiplierFeatures = (t: Function, gameConfigs: any, fractionalOddsFormat?: boolean) => {
    const extraFeeRatio = parseFloat(gameConfigs.extraFeeRatio);
    const oddsBanker = gameConfigs.odds?.banker;
    return (
        <li className="guide-item">
            <h2>{t("multiplier_title_multiplier_feature", { ns: TogleeNamespace.SpecificGame })}</h2>
            <ul className="desc">
                <li>{t("multiplier_multiplierfeature_para_1", { ns: TogleeNamespace.SpecificGame,  extrafee: extraFeeRatio * 100 })}{" "}<span>{t("multiplier_multiplierfeature_para_1.1", { ns: TogleeNamespace.SpecificGame,  extrafee: extraFeeRatio * 100, feeamount: extraFeeRatio * 10, totalstake: (extraFeeRatio * 10 + 10) })}</span></li>
                <li>{t("multiplier_multiplierfeature_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("multiplier_multiplierfeature_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li><Markup content={t("multiplier_multiplierfeature_para_4", { ns: TogleeNamespace.SpecificGame })} />
                    <div><strong>{t("example", { ns: TogleeNamespace.Common})}</strong>
                        <ul className="desc">
                            <li>{t("multiplier_multiplierfeature_para_6", { ns: TogleeNamespace.SpecificGame})}
                                <div className={Styles["img-center"]}><img src="./static/images/baccarat-x/lucky-cards.png" alt="lucky cards"/></div>
                            </li>
                            <li>{t("multiplier_multiplierfeature_para_7", { ns: TogleeNamespace.SpecificGame})}
                            <div className="table-container">
                                <table className={`table text-center ${Styles["tbl-cards-result"]}`}>
                                    <thead>
                                        <tr className={Styles["payout-header"]}>
                                            <th className={`bold ${Styles["bet-option"]}`}>{t("glossary_player", { ns: TogleeNamespace.SpecificGame })}</th>
                                            <th className="bold">{t("glossary_banker", { ns: TogleeNamespace.SpecificGame })}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><div className={Styles["hand-cards"]}><img src="./static/images/baccarat-x/2.png" alt="2" /><img src="./static/images/baccarat-x/13.png" alt="k" /><span className={Styles["score"]}>2</span></div></td>
                                            <td><div className={Styles["hand-cards"]}><div className={Styles["lucky-card"]}><img src="./static/images/baccarat-x/1.png" alt="a" /><span className={Styles["multiplier"]}>2x</span></div><div className={Styles["lucky-card"]}><img src="./static/images/baccarat-x/8.png" alt="8" /><span className={Styles["multiplier"]}>2x</span></div><span className={`${Styles["score"]} ${Styles["win"]}`}>9</span></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>  
                            </li>
                            <li>{t("multiplier_multiplierfeature_para_8", { ns: TogleeNamespace.SpecificGame})}
                                <div>{t("multiplier_multiplierfeature_para_9", { ns: TogleeNamespace.SpecificGame, totalstake: (extraFeeRatio * 5 + 5) })}</div>
                            </li>
                        </ul>
                    </div>   
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_bet_choice", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className="bold">{t("header_odds", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className="bold">{t("multiplier_header_multiplier", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className="bold">{t("header_stake", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className="bold">{t("header_extra_fee", { ns: TogleeNamespace.SpecificGame })}</th>
                                    <th className="bold">{t("header_win", { ns: TogleeNamespace.SpecificGame })}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("glossary_banker", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{formatOddsWithoutOne(oddsBanker, fractionalOddsFormat)}</td>
                                    <td>2x2</td>
                                    <td>10</td>
                                    <td>{extraFeeRatio * 10}</td>
                                    <td><span className={Styles["highlight-text"]}>{(oddsBanker - 1)*4 * 10 + 10} </span><br/> <span>({oddsBanker - 1} * 4 * 10 + 10)</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </li>

                <li><Markup content={t("multiplier_multiplierfeature_para_10", { ns: TogleeNamespace.SpecificGame })} /></li>
                <li><Markup content={t("multiplier_multiplierfeature_para_11", { ns: TogleeNamespace.SpecificGame })} /></li>
                <li><Markup content={t("multiplier_multiplierfeature_para_12", { ns: TogleeNamespace.SpecificGame })} /></li>
            </ul>
          
            
        </li>
    );
}

const BaccaratXContents: React.FC<BaccaratXContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel, displayName }) => {
    const { t } = useTranslate(["BaccaratX", "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
                <div className="content">{t("multiplier_intro_para_1", { ns: TogleeNamespace.SpecificGame, Bac81: displayName || "" })}</div>
            </li>
            {renderGameRules(t, gameConfigs.maxBet, userStakeLevel)}
            {renderCalculationRules(t)}
            {renderThirdCardRules(t)}
            {renderMultiplierFeatures(t, gameConfigs, fractionalOddsFormat)}
            {renderPayout(t, gameConfigs, userStakeLevel, fractionalOddsFormat)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default BaccaratXContents;
