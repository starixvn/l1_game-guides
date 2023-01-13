import React from "react";

import { ENVIRONMENT } from "../../../../../common/constants";
import { renderTermsAndConditions } from "../../../../shared";
import { FiveElements } from "../../../../shared/keno/en";
import { GameGuideProps } from "../../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../type";
import Styles from "../keno-max.module.scss";
import { formatOdds } from "../../../../../helpers/number-helper";
import { IKenoTranslationResource } from "../languages/types";
import { getKenoTranslationResource } from "../languages";
import { StringFormat } from "../../../../../helpers/string-helper";
import { Markup } from "interweave";
import { renderMD5 } from "../../../../shared/md5-count-down-timer";

export default class KenoProGuideTemplate extends React.Component<
    GameGuideProps<GameConfigProps, MaxBetChoicesProps>,
    { translationResource: IKenoTranslationResource }
> {
    constructor(props: GameGuideProps<GameConfigProps, MaxBetChoicesProps>) {
        super(props);
        this.state = {
            translationResource: getKenoTranslationResource(props.locale),
        };
    }

    renderIntroduction() {
        const { introduction } = this.state.translationResource;
        return (
            <li className="guide-item">
                <h2>{introduction.title}</h2>
                <p className="content">{introduction.description}</p>
            </li>
        );
    }

    renderGameRules() {
        const { maxBetFollowChoice } = this.props;
        const { gameRules } = this.state.translationResource;

        return (
            <li className="guide-item">
                <h2>{gameRules.title}</h2>
                <ul className="desc">
                    {gameRules.description.lines.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                    <li>
                        <Markup content={StringFormat(gameRules.description.maximum, maxBetFollowChoice?.maxBetMain || "0")} />
                    </li>
                    {gameRules.description.otherLine && <li>{gameRules.description.otherLine}</li>}
                </ul>
            </li>
        );
    }

    renderBettingOptions() {
        const { bettingOptions } = this.state.translationResource;
        return (
            <li className="guide-item">
                <h2>{bettingOptions.title}</h2>
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.bigSmall.title}</span>
                        <ul className="desc">
                            {bettingOptions.bigSmall.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th colSpan={10} className="bold">
                                                <b>{bettingOptions.example.drawResult}</b>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>7</td>
                                            <td>11</td>
                                            <td>17</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>23</td>
                                            <td>33</td>
                                            <td>40</td>
                                            <td>41</td>
                                            <td>42</td>
                                        </tr>
                                        <tr>
                                            <td>45</td>
                                            <td>48</td>
                                            <td>56</td>
                                            <td>58</td>
                                            <td>59</td>
                                            <td>69</td>
                                            <td>71</td>
                                            <td>72</td>
                                            <td>73</td>
                                            <td>77</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={10}>
                                                <strong>{bettingOptions.example.totalSum}</strong> = 883.{" "}
                                                {bettingOptions.bigSmall.winningText}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.oddEven.title}</span>
                        <ul className="desc">
                            {bettingOptions.oddEven.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th colSpan={10}>
                                                <b>{bettingOptions.example.drawResult}</b>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>8</td>
                                            <td>18</td>
                                            <td>23</td>
                                            <td>30</td>
                                            <td>35</td>
                                            <td>37</td>
                                            <td>39</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <td>42</td>
                                            <td>44</td>
                                            <td>46</td>
                                            <td>49</td>
                                            <td>50</td>
                                            <td>56</td>
                                            <td>60</td>
                                            <td>61</td>
                                            <td>71</td>
                                            <td>80</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={10}>
                                                <strong>{bettingOptions.example.totalSum}</strong> = 798.{" "}
                                                {bettingOptions.oddEven.winningText}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text"> {bettingOptions.fiveElement.title}</span>
                        <ul className="desc">
                            {bettingOptions.fiveElement.descriptions.map((des, index) => (
                                <li key={index}>
                                    <Markup content={des} />
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Markup content={bettingOptions.example.description} />
                            <div className="table-container">
                                <table className="table text-center table-small">
                                    <thead>
                                        <tr>
                                            <th colSpan={10}>
                                                <b>{bettingOptions.example.drawResult}</b>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>15</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>27</td>
                                            <td>29</td>
                                            <td>35</td>
                                        </tr>
                                        <tr>
                                            <td>37</td>
                                            <td>40</td>
                                            <td>42</td>
                                            <td>47</td>
                                            <td>48</td>
                                            <td>52</td>
                                            <td>57</td>
                                            <td>62</td>
                                            <td>68</td>
                                            <td>71</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={10}>
                                                <strong>{bettingOptions.example.totalSum}</strong> = 698.{" "}
                                                {bettingOptions.fiveElement.winningText}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }

    renderPayouts() {
        const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = this.props;
        const { odds } = gameConfigs;
        const { payouts } = this.state.translationResource;

        return (
            <li className="guide-item">
                <h2>{payouts.title}</h2>
                <ul className="desc">
                    {payouts.descriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>
                                        <b>{payouts.options}</b>
                                    </th>
                                    <th>
                                        <b>{payouts.odds}</b>
                                    </th>
                                    <th>
                                        <b>
                                            {payouts.betLimit}
                                            <br />({payouts.min}-{payouts.max})
                                        </b>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{payouts.big}</td>
                                    <td rowSpan={4}>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{payouts.small}</td>
                                </tr>
                                <tr>
                                    <td>{payouts.odd}</td>
                                </tr>
                                <tr>
                                    <td>{payouts.even}</td>
                                </tr>
                                <tr>
                                    <td>{payouts.gold}</td>
                                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{payouts.wood}</td>
                                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{payouts.water}</td>
                                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{payouts.fire}</td>
                                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{payouts.earth}</td>
                                    <td>{formatOdds(odds?.earth, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEarth}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ul>
            </li>
        );
    }

    renderMD5() {
        const { md5 } = this.state.translationResource;
        return (
            <li id="md5" className="guide-item">
                {renderMD5(this.props.locale)}
                {
                    <div className="content">
                        <Markup content={md5.example} />
                        <ul className="desc">
                            <li>
                                <Markup content={md5.step1} />
                                {this.renderExampleMD5Step1()}
                            </li>
                            <li>
                                <Markup content={md5.step2} />
                                {this.renderExampleMD5Step2()}
                                <div>{md5.note}</div>
                            </li>
                            <li>
                                <Markup content={md5.step3} />
                                <div className={Styles["wrapper-img-hash"]}>
                                    <img
                                        className="format-img auto-center"
                                        src="/static/images/mega-keno/md5_step3.png?v=1"
                                        alt="hash-darling"
                                    />
                                </div>
                            </li>
                            <li>
                                <Markup content={md5.step4} />
                                <div className={Styles["wrapper-img"]}>
                                    <img
                                        className="format-img auto-center"
                                        src="/static/images/mega-keno/md5_step4.png?v=1"
                                        alt="md5-checksum"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                }
            </li>
        );
    }

    renderExampleMD5Step1() {
        const { environment } = this.props;
        const { md5 } = this.state.translationResource;

        return environment === ENVIRONMENT.sc ? (
            <img className="format-img auto-center" src={`${md5.image1}?v=2`} alt="md5-string" />
        ) : (
            <div className={Styles["md5-section"]}>
                <span className={`${Styles["text"]}`}>
                    <strong>{md5.md5Key}:</strong> 520e543659d05eb7024f9f76d85479f7
                </span>
                <div className={Styles["copy-box"]}>
                    <span className={Styles["copy-text"]}>{md5.copy}</span>
                </div>
            </div>
        );
    }

    renderExampleMD5Step2() {
        const { environment } = this.props;
        const { md5 } = this.state.translationResource;

        return environment === ENVIRONMENT.sc ? (
            <img className="format-img auto-center" src={`${md5.image2}?v=3`} alt="md5-string" />
        ) : (
            <div className={Styles["md5-section"]}>
                <span className={`${Styles["text"]}`}>
                    <strong>{md5.result}:</strong> {"{363}_{#26907421fad9b51da1169691982}"}
                </span>
                <div className={Styles["copy-box"]}>
                    <span className={Styles["copy-text"]}>{md5.copy}</span>
                </div>
            </div>
        );
    }

    render() {
        const { locale } = this.props;
        return (
            <ul className="game-guide">
                {this.renderIntroduction()}
                {this.renderGameRules()}
                {this.renderBettingOptions()}
                {this.renderPayouts()}
                {this.renderMD5()}
                {renderTermsAndConditions("", undefined, locale)}
            </ul>
        );
    }
}
