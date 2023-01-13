import React from "react";
import Styles from "./base-baccarat.module.scss";
import { IBaseBaccaratResources } from "./languages/types";


const BaseBaccaratPointCalculationRules: React.FunctionComponent<{ resources: IBaseBaccaratResources }> = ({ resources }) => {
    const { pointRules } = resources;
    return (
        <>
            <h2>{pointRules.header}</h2>
            <ul className="desc">
                <li>
                    {pointRules.descriptions.paragraph1.cardPointValues}
                    <ul className="detail">
                        {
                            pointRules.descriptions.paragraph1.details.map((detail, index) => (
                                <li key={index}>{detail}</li>))
                        }
                    </ul>
                </li>
                <li>
                    {pointRules.descriptions.paragraph2}
                </li>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>{pointRules.examples.firstTwoCard}</th>
                            <th className={Styles["point-three-cards"]}>{pointRules.examples.thirdCard}</th>
                            <th className={Styles["point-total"]}>{pointRules.examples.totals}</th>
                            <th>{pointRules.examples.basedTotal}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4, 5</td>
                            <td></td>
                            <td>4 + 5 = 9</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>8, 8</td>
                            <td></td>
                            <td>8 + 8 = 16</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7, 3</td>
                            <td></td>
                            <td>7 + 3 = 10</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>9, 4</td>
                            <td>8</td>
                            <td>9 + 4 + 8 = 21</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>A, K</td>
                            <td>10</td>
                            <td>1 + 0 + 0 = 1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </>
    );
};

export default BaseBaccaratPointCalculationRules;
