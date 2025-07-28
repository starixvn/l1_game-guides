import { FC } from "react";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds, numberWithCommas } from "../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigProps, OddsProMaxProps, MaxBetChoicesProps } from "./type";
import { Markup } from "interweave";
import { GameGuideProps } from "../type";

const kenoProMaxNamespace = "KenoProMax";

const FiveElementsTolgee: FC<{ t: Function }> = ({ t }) => {
    return (
        <>
            <span className="font-weight-medium title-text">{t("five_elements_title")}</span>
            <ul className="desc">
                <li>
                    <strong>{t("option_gold")}:</strong> {t("five_elements_gold_desc", { ns: kenoProMaxNamespace })}
                </li>
                <li>
                    <strong>{t("option_wood")}:</strong> {t("five_elements_wood_desc", { ns: kenoProMaxNamespace })}
                </li>
                <li>
                    <strong>{t("option_water")}:</strong> {t("five_elements_water_desc", { ns: kenoProMaxNamespace })}
                </li>
                <li>
                    <strong>{t("option_fire")}:</strong> {t("five_elements_fire_desc", { ns: kenoProMaxNamespace })}
                </li>
                <li>
                    <strong>{t("option_earth")}:</strong> {t("five_elements_earth_desc", { ns: kenoProMaxNamespace })}
                </li>
            </ul>
        </>
    );
};

const KenoProMaxIntroduction: FC<{ 
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
                    ns="KenoProMax"
                />
            </div>
        </li>
    );
};

const KenoProMaxGameRules: FC<{ 
    t: Function; 
    maxBetFollowChoice: string | undefined;
}> = ({ t, maxBetFollowChoice }) => {
    return (
        <li className={`guide-item`}>
            <h2>{t("gamerules_title")}</h2>
            <ul className="desc">
                <li>{t("gamerules_para_1")}</li>
                <li>{t("gamerules_para_2")}</li>
                <li>
                    <T
                        keyName="gamerules_para_3"
                        params={{ maxBet: maxBetFollowChoice || 0 }}
                        ns={kenoProMaxNamespace}
                    />
                </li>
            </ul>
        </li>
    );
};

const KenoProMaxBettingOptions: FC<{ t: Function }> = ({ t }) => {
    return (
        <li className="guide-item">
            <h2>{t("betting_options_title")}</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("big_small_title")}</span>
                    <ul className="desc">
                        <li>
                            <strong>{t("option_big")}:</strong> {t("big_condition", { ns: kenoProMaxNamespace })}
                        </li>
                        <li>
                            <strong>{t("option_small")}:</strong> {t("small_condition", { ns: kenoProMaxNamespace })}
                        </li>
                    </ul>
                    <div>
                        <strong>{t("example", { ns: "Common" })}</strong> {t("example_big_small", { ns: kenoProMaxNamespace })}
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>{t("draw_results_header")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>4</td>
                                        <td>14</td>
                                        <td>16</td>
                                        <td>29</td>
                                        <td>34</td>
                                        <td>40</td>
                                        <td>51</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>67</td>
                                        <td>70</td>
                                        <td>72</td>
                                        <td>75</td>
                                        <td>77</td>
                                        <td>78</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>{t("total_sum_big")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("odd_even_title")}</span>
                    <ul className="desc">
                        <li>
                            <strong>{t("option_odd")}:</strong> {t("odd_condition", { ns: kenoProMaxNamespace })}
                        </li>
                        <li>
                            <strong>{t("option_even")}:</strong> {t("even_condition", { ns: kenoProMaxNamespace })}
                        </li>
                    </ul>
                    <div>
                        <strong>{t("example", { ns: "Common" })}</strong> {t("example_odd_even", { ns: kenoProMaxNamespace })}
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>{t("draw_results_header")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>15</td>
                                        <td>20</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>35</td>
                                        <td>36</td>
                                        <td>45</td>
                                    </tr>
                                    <tr>
                                        <td>49</td>
                                        <td>54</td>
                                        <td>56</td>
                                        <td>58</td>
                                        <td>61</td>
                                        <td>62</td>
                                        <td>74</td>
                                        <td>76</td>
                                        <td>78</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>{t("total_sum_odd")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <FiveElementsTolgee t={t} />
                    <div>
                        <strong>{t("example", { ns: "Common" })}</strong> {t("example_five_elements", { ns: kenoProMaxNamespace })}
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>{t("draw_results_header")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>17</td>
                                        <td>27</td>
                                        <td>36</td>
                                        <td>44</td>
                                        <td>46</td>
                                        <td>47</td>
                                        <td>49</td>
                                    </tr>
                                    <tr>
                                        <td>52</td>
                                        <td>56</td>
                                        <td>59</td>
                                        <td>60</td>
                                        <td>62</td>
                                        <td>63</td>
                                        <td>65</td>
                                        <td>72</td>
                                        <td>74</td>
                                        <td>79</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>{t("total_sum_fire")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    );
};

const KenoProMaxPayouts: FC<{ 
    t: Function; 
    odds: OddsProMaxProps | undefined;
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
                                    <th>{t("table_header_options")}</th>
                                    <th>{t("table_header_odds")}</th>
                                    <th>
                                        <Markup content={t("header_betlimit", { ns: "Common" })} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("option_big")}</td>
                                    <td rowSpan={4}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_small")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_odd")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_even")}</td>
                                </tr>
                                <tr>
                                    <td>{t("option_gold")}</td>
                                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_wood")}</td>
                                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_water")}</td>
                                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_fire")}</td>
                                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("option_earth")}</td>
                                    <td>{formatOdds(odds?.earth, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
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

export interface KenoProMaxGameGuideContentsProps {
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
}

const KenoProMaxGameGuideContent: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate(["KenoProMax", "Common"]);
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds, maxBet } = gameConfigs;

    const maxBetRound = numberWithCommas(maxBet);

    return (
        <div className={`keno-pro-max`}>
            <ul className={`game-guide`}>
                <KenoProMaxIntroduction 
                    t={t} 
                    displayName={gameName} 
                />
                <KenoProMaxGameRules 
                    t={t} 
                    maxBetFollowChoice={maxBetRound}
                />
                <KenoProMaxBettingOptions 
                    t={t} 
                />
                <KenoProMaxPayouts 
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

export default KenoProMaxGameGuideContent; 