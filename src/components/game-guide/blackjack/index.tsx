import React from "react";
import { TFunction } from "next-i18next";

import GameConfigs from "./game-configs";
import BlackjackGuideEN from "./en";
import BlackjackGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { handleMaxBetChoice } from "../index.helper";

const BlackjackGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel } = props;
    const getGameConfigs = () => {
        if (!dynamic) {
            gameConfigs.odds = GameConfigs.odds;
        }
        return gameConfigs;
    };
    const maxBetFollowChoice = handleMaxBetChoice(userStakeLevel, getGameConfigs());

    if (locale === locales.en) {
        return <BlackjackGuideEN gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
    }
    return <BlackjackGuideVI gameConfigs={getGameConfigs()} gameName={gameNameTranslate} maxBetFollowChoice={maxBetFollowChoice} />;
};

export const CardPointValuesTable = (t: TFunction) => {
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>{t("blackjack:card")}</th>
                        <th> A</th>
                        <th> 2</th>
                        <th> 3</th>
                        <th> 4</th>
                        <th> 5</th>
                        <th> 6</th>
                        <th> 7</th>
                        <th> 8</th>
                        <th> 9</th>
                        <th> 10</th>
                        <th> J</th>
                        <th> Q</th>
                        <th> K</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className="font-weight-medium">{t("blackjack:point")}</span>
                        </td>
                        <td>1 {t("blackjack:or")} 11</td>
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
    );
};

export default BlackjackGuide;
