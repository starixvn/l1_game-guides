import React from "react";
import Styles from "./base-baccarat.module.scss";

const BaseBaccaratPointCalculationRules: React.FunctionComponent<{ t: any }> = ({ t }) => {
    return (
        <>
            <h2>{t('pointRules.header')}</h2>
            <ul className="desc">
                <li>
                    {t('pointRules.descriptions.paragraph1.cardPointValues')}
                    <ul className="detail">
                        {
                            Object.entries(t('pointRules.descriptions.paragraph1.details', { returnObjects: true })).map(([line, detail]) => (
                                <li key={line}>{detail}</li>))
                        }
                    </ul>
                </li>
                <li>
                    {t('pointRules.descriptions.paragraph2')}
                </li>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>{t('pointRules.exampleTable.header.firstTwoCard')}</th>
                            <th className={Styles["point-three-cards"]}>{t('pointRules.exampleTable.header.thirdCard')}</th>
                            <th className={Styles["point-total"]}>{t('pointRules.exampleTable.header.totals')}</th>
                            <th>{t('pointRules.exampleTable.header.basedTotal')}</th>
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
