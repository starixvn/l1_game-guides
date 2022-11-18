import React from "react";
import { renderFourRed, renderFourWhite, renderOneRedThreeWhite, renderTwoRedTwoWhite, renderThreeRedOneWhite } from "../../dot";
import Styles from "../se-die.module.scss";

export const StatisticalTable = () => {
    return (
        <div className="table-container">
            <table className="table text-center table-small">
                <thead>
                    <tr>
                        <th>ผลลัพธ์</th>
                        <th>คำอธิบาย</th>
                        <th>สัญลักษณ์</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4 แดง</td>
                        {renderFourRed()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">4</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4 ขาว</td>
                        {renderFourWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">0</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2 แดง 2 ขาว</td>
                        {renderTwoRedTwoWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-even">2</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3 แดง 1 ขาว</td>
                        {renderThreeRedOneWhite()}
                        <td>
                            <div className="d-flex justify-content-center">
                                <span className="dot-odd">3</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1 แดง 3 ขาว</td>
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
                <td>4 แดง</td>
                <td>4 แดง</td>
                {renderFourRed()}
            </tr>
            <tr>
                <td>4 ขาว</td>
                <td>4 ขาว</td>
                {renderFourWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>3 แดง 1 ขาว</td>
                <td>3 แดง 1 ขาว</td>
                {renderThreeRedOneWhite()}
            </tr>
            <tr>
                <td className={Styles["rule-option-choice"]}>1 แดง 3 ขาว</td>
                <td>1 แดง 3 ขาว</td>
                {renderOneRedThreeWhite()}
            </tr>
        </>
    );
};
