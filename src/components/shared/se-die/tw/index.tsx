import React from "react";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../dot";
import Styles from "../se-die.module.scss";

export const StatisticalTable = () => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>結果</th>
                        <th>說明</th>
                        <th>符號</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4 紅</td>
                        {renderFourRed()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">4</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4 白</td>
                        {renderFourWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">0</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2 紅，2 白</td>
                        {renderTwoRedTwoWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">2</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3 紅，1 白</td>
                        {renderThreeRedOneWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-odd">3</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1 紅，3 白</td>
                        {renderOneRedThreeWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-odd en">1</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export const RedWhiteDataOnTable = () => {
    return (
        <>
            <tr>
                <td>4 紅</td>
                <td>4 紅</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 白</td>
                <td>4 白</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>3 紅，1 白</td>
                <td>3 紅，1 白</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>1 紅，3 白</td>
                <td>1 紅，3 白</td>
                {renderOneRedThreeWhite()}
            </tr>
        </>
    );
};
