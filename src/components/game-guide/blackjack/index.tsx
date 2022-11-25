import React, { useEffect, useState } from "react";
import { TFunction } from "next-i18next";

import BlackjackGuideEN from "./en";
import BlackjackGuideVI from "./vi";
import BlackjackGuideID from "./id";
import BlackjackGuideTH from "./th";
import BlackjackGuideCN from "./zh_cn";
import BlackjackGuideTW from "./zh_tw";
import { GameGuideBase } from "../type";
import { locales } from "../../../common/constants";
import { getGameConfigProject, handleMaxBetChoice } from "../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "./type";

const BlackjackGuide = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, userStakeLevel, isGetGameConfigs, project, fractionalOddsFormat } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("blackjack", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs);
        }
    };

    useEffect(() => {
        getLocalGameConfigs();
    }, []);

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
            setMaxBetFollowChoice(handleMaxBetChoice(userStakeLevel, configs));
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    const resource = {
        gameConfigs: configs,       
        gameName: gameNameTranslate,  
        maxBetFollowChoice,   
        fractionalOddsFormat,
    };

    switch(locale) {
        case locales.vi:
            return <BlackjackGuideVI {...resource} />
        case locales.id:
            return <BlackjackGuideID {...resource} />
        case locales.th:
            return <BlackjackGuideTH {...resource} />
        case locales.zh_cn:
            return <BlackjackGuideCN {...resource} />;
        case locales.zh_tw:
            return <BlackjackGuideTW {...resource} />;

        default:
            return <BlackjackGuideEN {...resource} />
    }    
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
