import React from "react";
import BlackjackGuideEN from "./en";
import BlackjackGuideVI from "./vi";
import { GameGuideBase } from "../type";
import { locales, GameNameEN, GameNameVI, IObjectKeys } from "../../../common/constants";

const BlackjackGuide = (props: GameGuideBase) => {
    const { gameName, locale, gameConfigs } = props;

    if (locale === locales.en) {
        return <BlackjackGuideEN gameConfigs={gameConfigs} gameName={GameNameEN[gameName.toLowerCase()]} />;
    }
    return <BlackjackGuideVI gameConfigs={gameConfigs} gameName={GameNameVI[gameName.toLowerCase()]} />;
};

export const CardPointValuesTable = (locale = "vi") => {
    const CardLocaleMapper: IObjectKeys = {
        vi: "Bài",
        en: "Card",
    };
    const PontLocaleMapper: IObjectKeys = {
        vi: "Điểm",
        en: "Point",
    };
    return (
        <div className="table-container">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>{CardLocaleMapper[locale]}</th>
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
                            <span className="font-weight-medium">{PontLocaleMapper[locale]}</span>
                        </td>
                        <td>1 {locale === locales.vi ? "hoặc" : "or"} 11</td>
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
