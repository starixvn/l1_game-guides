import { FC } from "react";
import { T, useTranslate } from "@tolgee/react";
import { formatOdds } from "../../../../helpers/number-helper";
import TermsAndConditionsTolgee from "../../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { Markup } from "interweave";
import { GameGuideProps } from "../../type";
import { StringFormat } from "../../../../helpers/string-helper";
import MD5Tolgee from "../../base/md5/md5-tolgee";
import MD5 from "../../base/md5";

const kenoMiniNamespace = "KenoMini";

const FiveElementsTolgee: FC<{ t: Function }> = ({ t }) => {
    return (
        <>
            <span className="font-weight-medium title-text">{t("bettingOptions_fiveElement_title")}</span>
            <ul className="desc">
                <li>
                    <Markup content={StringFormat(t("bettingOptions_fiveElement_description1", { ns: kenoMiniNamespace }))} />
                </li>
                <li>
                    <Markup content={StringFormat(t("bettingOptions_fiveElement_description2", { ns: kenoMiniNamespace }))} />
                </li>
                <li>
                    <Markup content={StringFormat(t("bettingOptions_fiveElement_description3", { ns: kenoMiniNamespace }))} />
                </li>
                <li>
                    <Markup content={StringFormat(t("bettingOptions_fiveElement_description4", { ns: kenoMiniNamespace }))} />
                </li>
                <li>
                    <Markup content={StringFormat(t("bettingOptions_fiveElement_description5", { ns: kenoMiniNamespace }))} />
                </li>
            </ul>
        </>
    );
};

const KenoMiniIntroduction: FC<{
    t: Function;
    displayName?: string;
}> = ({ t, displayName }) => {
    return (
        <li className={`guide-item `}>
            <h2>{t("title_introduction", { ns: "Common" })}</h2>
            <div className="content">
                <T keyName={"introduction_description"} params={{ gameName: displayName }} ns="KenoMini" />
            </div>
        </li>
    );
};

const KenoMiniGameRules: FC<{
    t: Function;
    maxBetFollowChoice: string | undefined;
}> = ({ t, maxBetFollowChoice }) => {
    return (
        <li className={`guide-item`}>
            <h2>{t("gameRules_title")}</h2>
            <ul className="desc">
                <li>{t("gameRules_description_line1")}</li>
                <li>{t("gameRules_description_line2")}</li>
                <li>
                    <T keyName="gameRules_description_maximum" params={{ maxBet: maxBetFollowChoice || 0 }} ns={kenoMiniNamespace} />
                </li>
            </ul>
        </li>
    );
};

const KenoMiniBettingOptions: FC<{ t: Function }> = ({ t }) => {
    return (
        <li className="guide-item">
            <h2>{t("bettingOptions_title")}</h2>
            <ul className="style-number-dot">
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("bettingOptions_bigSmall_title")}</span>
                    <ul className="desc">
                        <li>
                            <Markup content={StringFormat(t("bettingOptions_bigSmall_description1", { ns: kenoMiniNamespace }))} />
                        </li>
                        <li>
                            <Markup content={StringFormat(t("bettingOptions_bigSmall_description2", { ns: kenoMiniNamespace }))} />
                        </li>
                    </ul>
                    <div>
                        <Markup content={StringFormat(t("bettingOptions_example_description", { ns: kenoMiniNamespace }))} />
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>
                                            <b>{t("bettingOptions_example_drawResult")}</b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>15</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>28</td>
                                        <td>33</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>{t("bettingOptions_example_totalSum")}</strong> = {181}.{" "}
                                            {t("bettingOptions_bigSmall_winningText")}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <span className="font-weight-medium title-text">{t("bettingOptions_oddEven_title")}</span>
                    <ul className="desc">
                        <li>
                            <Markup content={StringFormat(t("bettingOptions_oddEven_description1", { ns: kenoMiniNamespace }))} />
                        </li>
                        <li>
                            <Markup content={StringFormat(t("bettingOptions_oddEven_description2", { ns: kenoMiniNamespace }))} />
                        </li>
                    </ul>
                    <div>
                        <Markup content={StringFormat(t("bettingOptions_example_description", { ns: kenoMiniNamespace }))} />
                        <div className="table-container">
                            <table className="table text-center table-small">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>
                                            <b>{t("bettingOptions_example_drawResult")}</b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>24</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>34</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>{t("bettingOptions_example_totalSum")}</strong> = {197}.{" "}
                                            {t("bettingOptions_oddEven_winningText")}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
                <li className="number-dot">
                    <FiveElementsTolgee t={t} />
                    <div>
                        <Markup content={StringFormat(t("bettingOptions_example_description", { ns: kenoMiniNamespace }))} />
                        <div className="table-container">
                            <table className="table text-center table-medium">
                                <thead>
                                    <tr>
                                        <th colSpan={10}>
                                            <b>{t("bettingOptions_example_drawResult")}</b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>7</td>
                                        <td>13</td>
                                        <td>17</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>33</td>
                                        <td>37</td>
                                        <td>38</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={10}>
                                            <strong>{t("bettingOptions_example_totalSum")}</strong> = {237}.{" "}
                                            {t("bettingOptions_fiveElement_winningText")}
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
};

const KenoMiniPayouts: FC<{
    t: Function;
    odds: any | undefined;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
}> = ({ t, odds, maxBetFollowChoice, fractionalOddsFormat }) => {
    return (
        <li className="guide-item">
            <h2>{t("payouts_title")}</h2>
            <ul className="desc">
                <li>{t("payouts_description1")}</li>
                <li>{t("payouts_description2")}</li>
                <li>
                    {t("payouts_description3")}
                    <div className="table-container">
                        <table className="table text-center table-small">
                            <thead>
                                <tr>
                                    <th>{t("payouts_options")}</th>
                                    <th>{t("payouts_odds")}</th>
                                    <th>{t("payouts_betLimit")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t("payouts_big")}</td>
                                    <td>{formatOdds(odds?.big, fractionalOddsFormat)}</td>
                                    <td rowSpan={4}>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetBig}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_small")}</td>
                                    <td>{formatOdds(odds?.small, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_odd")}</td>
                                    <td rowSpan={2}>{formatOdds(odds?.odd, fractionalOddsFormat)}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_even")}</td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_gold")}</td>
                                    <td>{formatOdds(odds?.gold, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetGold}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_wood")}</td>
                                    <td>{formatOdds(odds?.wood, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWood}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_water")}</td>
                                    <td>{formatOdds(odds?.water, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetWater}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_fire")}</td>
                                    <td>{formatOdds(odds?.fire, fractionalOddsFormat)}</td>
                                    <td>
                                        {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFire}
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t("payouts_earth")}</td>
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

export interface KenoMiniGameGuideContentsProps {
    gameConfigs: GameConfigProps;
    maxBetFollowChoice: MaxBetChoicesProps | undefined;
    fractionalOddsFormat?: boolean;
    displayName?: string;
}

const KenoMiniGameGuideContent: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { t } = useTranslate(["KenoMini", "Common"]);
    const { gameConfigs, gameName, maxBetFollowChoice, fractionalOddsFormat, locale, environment } = props;
    const { odds } = gameConfigs;

    return (
        <ul className="game-guide">
            <KenoMiniIntroduction t={t} displayName={gameName} />
            <KenoMiniGameRules t={t} maxBetFollowChoice={maxBetFollowChoice?.maxBetMain} />
            <KenoMiniBettingOptions t={t} />
            <KenoMiniPayouts t={t} odds={odds} maxBetFollowChoice={maxBetFollowChoice} fractionalOddsFormat={fractionalOddsFormat} />
            <MD5
                locale={locale}
                step1ImageUrl={`/static/images/keno-mini/md5_step1_${locale}.png?v=3`}
                step2ImageUrl={`/static/images/keno-mini/md5_step2_${locale}.png?v=3`}
                step3ImageUrl={"/static/images/keno-mini/md5_step3.png?v=1"}
                step4ImageUrl={"/static/images/keno-mini/md5_step4.png?v=1"}
                note={<div>{t("md5_note")}</div>}
            />
            <TermsAndConditionsTolgee />
        </ul>
    );
};

export default KenoMiniGameGuideContent;
