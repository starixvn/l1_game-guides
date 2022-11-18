import React from "react";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../dot";
import Styles from "../se-die.module.scss";

export const StatisticalTable = () => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>Hasil</th>
                        <th>Deskripsi</th>
                        <th>Simbol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4 merah</td>
                        {renderFourRed()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">4</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4 putih</td>
                        {renderFourWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">0</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2 merah, 2 putih</td>
                        {renderTwoRedTwoWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">2</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3 merah, 1 putih</td>
                        {renderThreeRedOneWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-odd">3</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1 merah, 3 putih</td>
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
                <td>4 merah</td>
                <td>4 merah</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 putih</td>
                <td>4 putih</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>3 merah, 1 putih</td>
                <td>3 merah, 1 putih</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>1 merah, 3 putih</td>
                <td>1 merah, 3 putih</td>
                {renderOneRedThreeWhite()}
            </tr>
        </>
    );
};
