import { useTranslate } from "@tolgee/react";
import { Markup } from "interweave";
import React from "react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
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
                <li>{t("gamerules_para_2", { ns: TogleeNamespace.SpecificGame, extrafee: maxBetMain })}</li>
                <li>{t("gamerules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{t("gamerules_para_4", { ns: TogleeNamespace.SpecificGame})}</li> 
                <li>{t("gamerules_para_5", { ns: TogleeNamespace.SpecificGame})}</li>  
                <li>{t("gamerules_para_6", { ns: TogleeNamespace.SpecificGame})}</li>  
                <li>{t("gamerules_para_7", { ns: TogleeNamespace.SpecificGame})}</li> 
                <li>{t("gamerules_para_8", { ns: TogleeNamespace.SpecificGame})}</li> 
                <li>{t("gamerules_para_9", { ns: TogleeNamespace.SpecificGame})}</li> 
                <li>{t("gamerules_para_10", { ns: TogleeNamespace.SpecificGame, maxBet: maxBetMain})}</li>      
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
                                    <td>{t("glossary_option_player", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_player", {ns: TogleeNamespace.SpecificGame})}</td>
                                   
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_banker", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_banker", {ns: TogleeNamespace.SpecificGame})}</td>
                                 
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_tie", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_tie", {ns: TogleeNamespace.SpecificGame})}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_player_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_player_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_banker_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>{t("desc_banker_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </li>  
                    
                <ul className="style-number-rule">
                    <li  className="number-dot">{t("sub_title_cut_card", { ns: TogleeNamespace.SpecificGame })}
                        <ul className="desc">
                            <li>{t("cutcard_para_1", {ns: TogleeNamespace.SpecificGame})}</li>
                            <li>{t("cutcard_para_2", {ns: TogleeNamespace.SpecificGame})}</li>
                        </ul>
                        
                    </li>
                    <li  className="number-dot">{t("sub_title_burn_card", { ns: TogleeNamespace.SpecificGame })}
                        <ul className="desc">
                            <li>{t("burncard_para_1", {ns: TogleeNamespace.SpecificGame})}</li>
                            <li>{t("burncard_para_2", {ns: TogleeNamespace.SpecificGame})}</li>
                        </ul>
                        
                    </li>
                    
                </ul>  
                <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_first_card", { ns: TogleeNamespace.Common })}</th>
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
    const { odds, maxBetPerChoices, minBet, maxBet } = gameConfigs;
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const maxBetHome = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.home));
    const maxBetAway = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.away));
    const maxBetDraw = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.draw));

    return (
        <li className="guide-item">
            <h2>{t("title_payouts", { ns: TogleeNamespace.Common })}</h2>
            <ul className="desc">
                <li>{t("payouts_para_1", { ns: TogleeNamespace.SpecificGame })}</li>
                
                <li>{t("payouts_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                <li>{<Markup content={t("payouts_para_3", { ns: TogleeNamespace.SpecificGame, maxwin: maxBet })} />}</li>
                <li>{t("payouts_para_4", { ns: TogleeNamespace.SpecificGame })}</li>
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr className={Styles["payout-header"]}>
                                    <th className={`bold ${Styles["bet-option"]}`}>{t("header_betoption", { ns: TogleeNamespace.Common })}</th>
                                    <th className="bold">{t("title_payouts", {ns: TogleeNamespace.Common})}</th>
                                    <th className={`bold ${Styles["nowrap"]}`}>{t("header_odds", { ns: TogleeNamespace.Common })}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("glossary_option_player", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>1:odds</td>
                                    <td rowSpan={2}>{formatOdds(odds?.home, fractionalOddsFormat)}</td>
                                    
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_banker", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>1:odds</td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_tie", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td>1:odds</td>                                    
                                    <td rowSpan={3} className={Styles["nowrap"]}>
                                        {minBetMain} - {maxBetDraw}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_player_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.draw, fractionalOddsFormat)}</td>
                                  
                                </tr>
                                <tr>
                                    <td>{t("glossary_option_banker_pair", {ns: TogleeNamespace.SpecificGame})}</td>
                                  
                                </tr>
                               
                                
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>{t("payouts_para_5", { ns: TogleeNamespace.SpecificGame })}</li>
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
                    <ul className="detail">
                        <li>{t("calculationrules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("calculationrules_para_3", { ns: TogleeNamespace.SpecificGame })}</li>
                        <li>{t("calculationrules_para_4", { ns: TogleeNamespace.SpecificGame })}</li>
                    </ul>
                </li>
                <li>{t("thirdcardrules_para_2", { ns: TogleeNamespace.SpecificGame })}</li>
                
            </ul>
            <ul className="style-number-rule">
                    <li  className="number-dot">{t("subtitle_rules_player's_hand", { ns: TogleeNamespace.SpecificGame })}
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
                    <li  className="number-dot">{t("title_rules_for_banker's_hand", { ns: TogleeNamespace.SpecificGame })}
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

const BaccaratXContents: React.FC<BaccaratXContentsProps> = ({ gameConfigs, fractionalOddsFormat, locale, userStakeLevel }) => {
    const { t } = useTranslate(["FootballDice", "Common"]);

    return (
        <ul className={`game-guide`}>
            <li className="guide-item">
                <h2>{t("title_introduction", { ns: TogleeNamespace.Common })}</h2>
                <div className="content">{t("intro_para_1", { ns: TogleeNamespace.SpecificGame })}</div>
            </li>
            {renderGameRules(t, gameConfigs.maxBet, userStakeLevel)}
            {renderCalculationRules(t)}
            {renderThirdCardRules(t)}
            {renderPayout(t, gameConfigs, userStakeLevel, fractionalOddsFormat)}
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default BaccaratXContents;
