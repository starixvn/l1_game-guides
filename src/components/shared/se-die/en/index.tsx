import React from "react";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../dot";
import Styles from "../se-die.module.scss";

export const StatisticalTable = () => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>Results</th>
                        <th>Descriptions</th>
                        <th>Symbols</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4 red</td>
                        {renderFourRed()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">4</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4 white</td>
                        {renderFourWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">0</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2 red, 2 white</td>
                        {renderTwoRedTwoWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">2</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3 red, 1 white</td>
                        {renderThreeRedOneWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-odd">3</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1 red, 3 white</td>
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
                <td>4 red</td>
                <td>4 red</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 white</td>
                <td>4 white</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>3 red, 1 white</td>
                <td>3 red, 1 white</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>1 red, 3 white</td>
                <td>1 red, 3 white</td>
                {renderOneRedThreeWhite()}
            </tr>
        </>
    );
};
